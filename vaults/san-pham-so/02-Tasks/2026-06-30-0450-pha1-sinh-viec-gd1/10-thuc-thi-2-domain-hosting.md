# SOP 2 — Đăng-ký domain + đưa landing lên mạng (cho wiring SePay)

> **TL;DR:** Để test SePay end-to-end cần **1 URL công-khai HTTPS** (webhook SePay bắn về đó). Có 2 đường: **(A) Test nhanh 0đ** = deploy landing lên host miễn-phí, dùng subdomain free (không cần mua domain, không cam-kết tên) — **khuyến nghị vì tên "ĐơnThật" chưa được Legal xác-nhận**; **(B) Mua domain thương-hiệu** donthat.vn/.com (giữ chỗ first-to-file, chấp-nhận rủi-ro nhỏ nếu đổi tên). CEO tự làm (chi tiền + tài-khoản) — AI chuẩn-bị sẵn gói deploy + giá-trị DNS.
>
> **Ranh-giới cứng:** mua domain = **chi tiền** → CEO tự quyết & thanh-toán. Publish ra ngoài = CEO thực-hiện/duyệt. AI KHÔNG tự mua/tự publish.

## ⚠️ Lưu-ý tên thương-hiệu (đọc trước khi chi tiền)
- Tên **"ĐơnThật" vẫn là ĐỀ-XUẤT**, chưa Legal tra Cục SHTT (Nhóm 41+9). Quyết-định vault: *chưa chi vào brand tới khi Legal xác-nhận*.
- **Kiểm sơ-bộ (AI, 2026-07-05):** donthat.com/.vn/.com.vn/.io/.net/.store **đều chưa có bản-ghi DNS** → khả-năng còn trống (kiểm chính-thức tại nhà đăng-ký).
- **Hệ-quả:** để **test kỹ-thuật** thì KHÔNG cần domain thương-hiệu — dùng subdomain free (Đường A). Chỉ mua domain donthat khi (a) Legal ok, hoặc (b) chấp-nhận mua sớm giữ chỗ (rẻ ~250–400k/năm).

---

## ĐƯỜNG A — Test nhanh 0đ (KHUYẾN NGHỊ để chạy SePay sớm)
Không mua domain. Deploy landing `4.1a-landing-hero.html` lên host tĩnh miễn-phí → có ngay URL HTTPS + subdomain free.

| # | Việc | Ghi chú |
|---|---|---|
| A1 | Chọn 1 host free: **Cloudflare Pages** / **Netlify** / **Vercel** | Đều free, có subdomain https (vd `donthat-test.pages.dev`), hỗ-trợ serverless function cho **webhook SePay** |
| A2 | Tạo tài-khoản (email/GitHub) → tạo project → kéo-thả file landing (hoặc nối GitHub) | AI đóng-gói sẵn thư-mục deploy khi CEO chọn host |
| A3 | Lấy **URL công-khai** (subdomain free) | Đây là cái cung-cấp cho AI |
| A4 | (Sau) khi có domain thật → vào host bấm "Add custom domain" → trỏ về | 5 phút, không phải làm lại |

→ **Cung-cấp cho AI:** URL subdomain (vd `https://donthat-test.pages.dev`). AI ráp VietQR + webhook + test đơn.

---

## ĐƯỜNG B — Mua domain thương-hiệu (giữ chỗ / chuyên-nghiệp ngay)

### B0 · Chọn đuôi domain
| Đuôi | Giá tham-khảo/năm `[cần xác minh tại NĐK]` | Giấy tờ | Ghi chú |
|---|---|---|---|
| **.com** | ~250–350k | Không | Nhanh, rẻ, toàn-cầu → **nên lấy đầu-tiên** |
| **.vn** | ~350–750k + phí duy-trì | **Cần CCCD (cá-nhân) / GPKD (DN)**, xét duyệt | Uy-tín VN cao nhất → lấy sau/phòng-thủ khi Legal ok |
| **.com.vn** | ~200–350k | Cần giấy tờ VN | Rẻ hơn .vn, vẫn "chất VN" |
| .store/.shop/.io | ~200k–1tr | Không | Tùy chọn phụ |

**Khuyến nghị:** đầu-tiên **donthat.com** (nhanh, không giấy tờ); sau khi Legal ok → thêm **donthat.vn** giữ thương-hiệu.

### B1 · Chọn nhà đăng-ký (NĐK)
- **Quốc-tế (thẻ/PayPal, rẻ, nhanh — hợp .com):** **Cloudflare Registrar** (giá gốc, rẻ nhất) · **Namecheap** · **Porkbun**.
- **Việt Nam (thanh-toán nội-địa, tiếng Việt — hợp .vn):** **Mắt Bão** (matbao.net) · **PA Việt Nam** (pavietnam.vn) · **Nhân Hòa** · **iNET** · **Tenten**.

### B2 · Các bước đăng-ký (chung)
1. Vào NĐK → ô **"kiểm tra tên miền"** → gõ `donthat` → xem đuôi nào trống + giá.
2. Chọn domain → thêm giỏ. **Bật auto-renew** + **WHOIS privacy** (Namecheap/Cloudflare miễn-phí — giấu thông-tin cá-nhân).
3. **BỎ QUA up-sell** hosting/email/SSL (không cần — dùng host free Đường A).
4. Tạo tài-khoản + thanh-toán (thẻ/PayPal/chuyển-khoản/ví).
5. **Xác-nhận email** (bắt-buộc với .com). Với **.vn/.com.vn:** nộp bản chụp **CCCD** (cá-nhân) hoặc **GPKD** (DN) — duyệt trong vài giờ–vài ngày.
6. Xong → bạn có **quyền quản-lý DNS** của domain.

### B3 · Trỏ domain về landing (AI hỗ-trợ)
- Cách gọn nhất: deploy landing lên host free (Đường A) rồi ở host bấm **Add custom domain** → host cho 2–3 bản-ghi (CNAME/A + TXT) → **CEO dán vào phần DNS của NĐK**.
- AI sẽ **soạn sẵn chính-xác từng bản-ghi cần thêm** khi biết host + domain.

---

## Cung-cấp cho AI (chốt lại)
1. **URL công-khai** để test: subdomain free (Đường A) **hoặc** domain đã mua (Đường B).
2. **Host đang dùng** (Cloudflare Pages / Netlify / Vercel) — để AI đóng gói đúng định-dạng + viết webhook function.
3. **KHÔNG đưa mật-khẩu** tài-khoản NĐK/host cho AI. Việc bấm "mua"/"publish"/"thêm bản-ghi DNS" là **CEO tự làm** — AI đưa giá-trị chính-xác + hướng-dẫn từng bước.

## Khuyến nghị đường đi
- **Muốn test SePay sớm nhất, 0đ, không cam-kết tên:** đi **Đường A** (subdomain free). Legal ok tên → mua domain trỏ vào sau (5 phút).
- **Muốn chuyên-nghiệp ngay + giữ chỗ tên (chấp-nhận rủi-ro nhỏ):** đi **Đường B**, mua **donthat.com** trước.
