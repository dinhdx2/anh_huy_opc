# SOP 1 — Onboarding & wiring cổng thanh-toán SePay (bước 4.1b)

> **TL;DR:** CEO đổi cổng **PayOS → SePay** (2026-07-05, PayOS trục-trặc đăng-ký). SePay **cùng mô-hình 0% phí + webhook tự-giao**, nhưng **KYC nhẹ**: chỉ email + tài-khoản ngân-hàng, hỗ-trợ cá-nhân/hộ KD, không cần hồ-sơ phức-tạp. AI đã sẵn landing + webhook spec; CEO làm Phần A lấy **API token + cấu-hình webhook**, dán vào đây → AI ráp & test 1 đơn thử ngay (gỡ `4.1c`, `7.1b`, `8.2b`).
>
> **Ranh-giới cứng:** đăng-ký + kết-nối ngân-hàng là **việc CEO tự làm** (đụng tài-khoản tiền của bạn) — AI KHÔNG tự đăng-ký. AI KHÔNG ghi `DONE` tới khi có token thật + test đơn PASS.
> **Thay thế:** SOP này thay `10-thuc-thi-1-payos-onboarding.md` (đánh dấu superseded).

## Vì sao SePay hợp GĐ1
- **0đ phí/giao-dịch** — tiền chuyển-khoản vào **thẳng TK ngân-hàng của bạn**, SePay không cầm tiền.
- **Gói free 35 giao-dịch/tháng**; có **ưu-đãi 500 giao-dịch/tháng miễn-phí 1 năm** cho chủ shop/cá-nhân KD → thừa cho validate.
- Đăng-ký nhẹ (thường gỡ đúng cái đã chặn ở PayOS). Nguồn: [sepay.vn/bang-gia](https://sepay.vn/bang-gia.html) · [docs.sepay.vn](https://docs.sepay.vn/).

## Phần A — CEO tự làm (~20–40 phút)

| # | Việc | Xong khi (tiêu-chí nghiệm-thu) |
|---|---|---|
| A1 | Vào **my.sepay.vn** → đăng-ký (email + thông-tin cơ-bản) | Đăng-nhập được dashboard |
| A2 | Tạo **Công-ty / cửa-hàng** trong dashboard | Có 1 công-ty |
| A3 | **Kết-nối tài-khoản ngân-hàng** nhận tiền (kiểm ngân-hàng hỗ-trợ tại [sepay.vn/api-ngan-hang](https://sepay.vn/api-ngan-hang.html) — vd ACB, OCB, MB, VPBank, BIDV, TPBank, VietinBank, MSB…). Một số bank kết-nối tự-động, một số cần cấp quyền đọc biến-động | TK ngân-hàng ở trạng-thái "Đã kết-nối"; SePay đọc được biến-động số-dư |
| A4 | Vào **Cấu hình → API / Access Token** → tạo **API Token** | Có 1 chuỗi API Token |
| A5 | **Webhook:** khai Webhook URL = domain landing + `/sepay-webhook`; đặt **API Key/secret xác-thực webhook** | SePay lưu webhook (điền URL sau khi có domain) |
| A6 | (Tùy) đăng-ký **ưu-đãi 500 tx/tháng free 1 năm** nếu là chủ shop/cá-nhân KD | Gói đã kích-hoạt |

> ⚠️ **Bảo mật:** API Token + webhook key là bí-mật — dán vào ô Phần B trong phiên Claude, AI dùng runtime, **KHÔNG commit lên GitHub công-khai**.

## Phần B — CEO đã cung-cấp (2026-07-05) · ⚠️ SECRET ĐÃ GỠ KHỎI REPO
> **KHÔNG lưu secret trong repo.** AI đã nhận; secret chuyển sang **Vercel Environment Variables** (CEO tự đặt). Xem 🔒 CẢNH-BÁO BẢO MẬT cuối file.
```
SEPAY_API_TOKEN     = [ĐÃ NHẬN — CẦN ROTATE (đã lộ trong git); đặt ở Vercel env `SEPAY_API_TOKEN` nếu dùng]
SEPAY_WEBHOOK_KEY   = [ĐÃ NHẬN — CẦN ROTATE (đã lộ trong git); đặt ở Vercel env `SEPAY_WEBHOOK_SECRET`]
TÀI KHOẢN NHẬN TIỀN = 81908666 — VietinBank   (công-khai trên QR, KHÔNG phải secret)
CHỦ TÀI KHOẢN       = DO XUAN DINH             (hiển-thị cho người mua, KHÔNG phải secret)
DOMAIN landing      = donthat.vercel.app
```

## Phần C — AI tự làm ngay sau khi có token (không cần hỏi lại)
| # | Việc AI làm | Ra bước |
|---|---|---|
| C1 | Tạo **VietQR động** trên landing checkout: QR gắn **số tiền 179k + nội-dung = mã đơn duy-nhất** (để đối-soát tự-động) | 4.1b DONE |
| C2 | Cấu-hình **webhook**: khi SePay báo "tiền vào KHỚP số-tiền + nội-dung" → tự cấp link tải kit + license key (theo spec `7.1a`) | 7.1a live |
| C3 | **Test 1 giao-dịch thử:** tự chuyển 179k (hoặc số nhỏ) đúng nội-dung → xác-nhận webhook bắn + khớp đơn | 4.1c DONE |
| C4 | **Test end-to-end 1 đơn:** quét QR → chuyển → nhận link tải + license → mở file OK | 7.1b DONE |
| C5 | Bật pixel/UTM (spec `8.2a`) trên landing live → test 1 conversion về đúng | 8.2b DONE |

## Phụ-thuộc & lưu-ý
- **Đối-soát bằng nội-dung chuyển-khoản:** VietQR khớp đơn qua **nội-dung (mã đơn) + số tiền** → landing phải sinh mã đơn duy-nhất mỗi lượt mua. AI xử-lý ở C1.
- **Domain:** cần trước A5/C1; gắn tên thương-hiệu → **chờ Legal xác-nhận "ĐơnThật" đăng-ký được** (`9.5c`) rồi mua domain chính-thức. Test sớm: dùng subdomain/domain tạm, đổi sau.
- **Thuế KHÔNG né được:** tiền vào TK cá-nhân vẫn phát-sinh nghĩa-vụ thuế → vẫn cần kế-toán rà (`9.3b`).
- **2 cờ đỏ chặn MỞ BÁN THẬT (không chặn test kỹ-thuật):** kế-toán rà thuế `9.3b` · bản-quyền kit đã PASS 5/5 (`1.2c`). Test C3 dùng tiền của CEO, tự hoàn → không phải "mở bán".
- **Chi ads (TEST):** vẫn HOÃN tới khi C1–C5 xong + kế-toán rà thuế.

---

## 🔒 CẢNH-BÁO BẢO MẬT (2026-07-05) — ROTATE SECRET
**Sự-việc:** API Token + webhook key thật đã bị commit (`2af75b6`) và **push lên GitHub** → nằm trong **lịch-sử git** (không mất đi kể cả khi xoá ở bản mới). AI đã gỡ khỏi file hiện-tại.

**BẮT BUỘC làm (giá-trị đã lộ → phải vô-hiệu-hoá):**
1. **Thu-hồi/đổi API Token SePay:** my.sepay.vn → Cấu hình → API → **xoá token cũ + tạo token mới** (token cũ chết ngay). *Luồng cơ-bản có thể KHÔNG cần token — chỉ cần đảm-bảo token đã lộ bị thu-hồi.*
2. **Đổi webhook Secret Key:** my.sepay.vn → Webhooks → Sửa #43701 → tab Bảo mật → bấm **🔄 sinh secret MỚI** → **Cập nhật**.

**Lưu secret MỚI đúng chỗ (KHÔNG vào repo):**
- Vào **Vercel → project → Settings → Environment Variables** → thêm:
  - `SEPAY_WEBHOOK_SECRET` = *(secret webhook mới)*
  - `SEPAY_API_TOKEN` = *(token mới — chỉ nếu function cần)*
- **KHÔNG cần gửi giá-trị cho AI** — function đọc từ `process.env.*`.

**Tuỳ chọn (nếu muốn xoá luôn khỏi lịch-sử git):** báo AI → chạy `git filter-repo`/BFG + force-push. Nhưng **rotate ở trên đã đủ an-toàn** (giá-trị lộ thành vô-dụng), nên đây chỉ là dọn cho sạch.

> Số TK `81908666` + `DO XUAN DINH` KHÔNG phải secret (hiện trên QR/chuyển-khoản cho người mua) → giữ lại được.
