> ⛔ **SUPERSEDED (2026-07-05):** PayOS trục-trặc đăng-ký → CEO đổi sang **SePay**. Dùng `10-thuc-thi-1-sepay-onboarding.md`. Giữ file này làm lịch-sử, KHÔNG thực-thi.

# SOP 1 — Onboarding & wiring cổng thanh-toán PayOS (bước 4.1b) — [ĐÃ THAY BẰNG SePay]

> **TL;DR:** CEO đã chọn **bật PayOS trước**. Phần **KYC/đăng-ký là việc người bắt-buộc** (AI không thay được — cần định-danh DN/cá-nhân). AI đã sẵn landing HTML + webhook spec; CEO làm 5 bước dưới để lấy **link checkout + API key/webhook secret**, dán vào đây → AI ráp & test 1 đơn thử ngay (gỡ `4.1c`, `7.1b`).
>
> **Ranh-giới cứng:** đây là hành-động **định-danh + ra ngoài** → CEO tự thực-hiện, KHÔNG để AI tự đăng-ký. AI KHÔNG ghi `DONE` tới khi có key thật + test đơn PASS.

## Phần A — CEO tự làm (KYC, ~30–45 phút)

| # | Việc | Xong khi (tiêu-chí nghiệm-thu) |
|---|---|---|
| A1 | Vào **my.payos.vn** → đăng-ký tài-khoản merchant (email + SĐT) | Nhận được tài-khoản, đăng-nhập được |
| A2 | **Định-danh (KYC):** cung-cấp CCCD/GPKD (hộ KD hoặc cá-nhân), tài-khoản ngân-hàng nhận tiền | PayOS duyệt hồ-sơ (thường 1–2 ngày làm việc) |
| A3 | Tạo **kênh thanh-toán (payment channel)** cho website | Có channel ở trạng-thái Active |
| A4 | Lấy **3 khoá tích-hợp:** `Client ID`, `API Key`, `Checksum Key` (mục Cấu hình → API) | Copy đủ 3 chuỗi |
| A5 | Khai **Webhook URL** = domain landing + `/payos-webhook` (điền sau khi có domain) | PayOS xác-nhận webhook hợp-lệ |

> ⚠️ **Bảo mật:** 3 khoá A4 là bí-mật — CEO dán vào ô dưới trong phiên Claude, KHÔNG commit lên GitHub công-khai (AI sẽ dùng runtime, không ghi vào file vault).

## Phần B — CEO dán vào đây (khi có)
```
PAYOS_CLIENT_ID   = ____________________
PAYOS_API_KEY     = ____________________
PAYOS_CHECKSUM_KEY= ____________________
DOMAIN landing    = ____________________   (vd donthat.vn — chờ Legal xác-nhận tên)
```

## Phần C — AI tự làm ngay sau khi có key (không cần hỏi lại)
| # | Việc AI làm | Ra bước |
|---|---|---|
| C1 | Ráp `Client ID/API Key/Checksum` vào luồng tạo link thanh-toán trong landing `4.1a` | 4.1b DONE |
| C2 | Cấu-hình webhook nhận `PAID` → tự cấp link tải kit + license key (theo spec `7.1a`) | 7.1a live |
| C3 | **Test 1 giao-dịch thử** (số tiền nhỏ, hoàn lại) → xác-nhận tiền về + webhook bắn đúng | 4.1c DONE |
| C4 | **Test end-to-end 1 đơn:** mua → nhận link tải + license → mở file OK | 7.1b DONE |
| C5 | Bật pixel/UTM (spec `8.2a`) trên landing live → test 1 conversion về đúng | 8.2b DONE |

## Phụ-thuộc & lưu-ý
- **Domain:** cần trước A5/C1. Domain gắn tên thương-hiệu → **chờ Legal xác-nhận "ĐơnThật" đăng-ký được** (bước `9.5c`) rồi mới mua domain chính-thức. Nếu muốn test sớm: dùng domain tạm/subdomain, đổi sau.
- **2 cờ đỏ chặn MỞ BÁN THẬT (không chặn test kỹ-thuật):** (1) kế-toán rà thuế `9.3b` · (2) bản-quyền kit — đã PASS 5/5 (`1.2c`). Test giao-dịch thử ở C3 dùng tiền của CEO, hoàn lại → không phải "mở bán".
- **Chi ads (TEST):** vẫn HOÃN tới khi C1–C5 xong + kế-toán rà thuế (theo lựa-chọn CEO 2026-07-05).
