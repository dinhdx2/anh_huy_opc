# README — Deploy landing BỘMẪU (hero launch)

> TL;DR: `landing.html` là 1 file HTML **tự-chứa 100%** (không CSS/JS/font/ảnh ngoài) — mở trực-tiếp bằng trình-duyệt để xem thử, hoặc kéo-thả lên Vercel/Netlify để có link công-khai trong 1 phút. **Bản chuyên-nghiệp (redesign):** thêm trước/sau · 3 bước · bảng so-sánh vs Excel-free/thuê kế-toán · cam-kết · bảo-đảm hoàn tiền · khu đánh-giá · trust-badges. Có **7 chỗ placeholder** cần thay trước khi launch (xem mục 3).

## 1. Xem thử ngay (không cần deploy)
- Cách nhanh nhất: mở file `landing.html` bằng trình-duyệt (Chrome/Edge/Safari) — double-click file, hoặc chuột-phải → "Open with" → chọn trình-duyệt.
- Vì file tự-chứa (không gọi tài-nguyên ngoài), mở offline vẫn hiển-thị đúng 100% (trừ 1 link Zalo placeholder chưa trỏ đâu thật).

## 2. Deploy để có link công-khai (không cần biết code)

### Cách A — Vercel (kéo-thả)
1. Vào **vercel.com** → đăng-nhập (Google/GitHub đều được, miễn phí).
2. Trong thư-mục `landing/`, đổi tên `landing.html` thành **`index.html`** (một số host yêu-cầu file gốc tên `index.html` để hiển-thị mặc-định — làm bước này cho chắc-ăn).
3. Vào Dashboard Vercel → **Add New → Project** → chọn tab **"Deploy without Git"** / kéo-thả cả thư-mục `landing/` vào ô upload.
4. Bấm **Deploy** → sau ~30 giây nhận link dạng `https://ten-du-an.vercel.app`.

### Cách B — Netlify Drop (nhanh nhất, không cần tài khoản để thử)
1. Vào **app.netlify.com/drop**.
2. Kéo-thả cả thư-mục `landing/` (đã đổi `landing.html` → `index.html`) vào khung trên trang.
3. Nhận link `https://ten-ngau-nhien.netlify.app` ngay lập-tức. Muốn giữ link vĩnh-viễn / đổi tên → tạo tài-khoản Netlify miễn-phí và "Claim site".

### Cách C — GitHub Pages (nếu đã quen dùng repo)
1. Tạo repo mới (hoặc dùng thư-mục con trong repo có sẵn), copy `index.html` (đã đổi tên) vào.
2. Bật **Settings → Pages → Deploy from branch** → chọn nhánh/thư-mục chứa file.
3. Nhận link dạng `https://<username>.github.io/<repo>/`.

> Vì `landing.html` không phụ-thuộc bất-kỳ CSS/JS/font/ảnh ngoài nào, có thể deploy ở **bất-kỳ static host nào** (Vercel/Netlify/GitHub Pages/Cloudflare Pages/Firebase Hosting…) mà không lo vỡ giao-diện do thiếu asset.

## 3. CHECKLIST — chỗ CẦN THAY trước khi chạy thật

File có sẵn comment `<!-- TODO(...) -->` ở đúng vị-trí trong `landing.html` để dễ tìm (Ctrl+F "TODO"). Danh-sách đầy-đủ:

| # | Vị-trí trong file | Hiện tại (placeholder) | Cần thay bằng |
|---|---|---|---|
| 1 | `#checkout-sepay` (section "Khu vực thanh-toán") | Ô giữ-chỗ, ghi rõ "chưa kết-nối thanh-toán thật" | Nút/QR/link checkout **SePay thật** — chỉ làm được SAU khi CEO đăng-ký & KYC cổng SePay (xem `08-execution-plan.md` mục B2). Nút "Mua ngay" ở section giá + CTA cuối trang đều trỏ tới `#checkout-sepay` — khi có link SePay thật, đổi `href="#checkout-sepay"` thành link SePay thẳng, hoặc nhúng nút SePay ngay trong section này. |
| 2 | Form `#dang-ky` (`<form action="#" method="post">`) | Form tĩnh, KHÔNG có backend | Nối vào 1 công-cụ thu lead thật trước khi launch: Google Form + Zapier/Sheet, ConvertKit, GetResponse, hoặc form/webhook của Zalo OA — nếu không nối, mọi lead sẽ **MẤT** (form hiện không gửi đi đâu). Xem thêm `../pheu-email-zalo.md` mục 2. |
| 3 | Link "Zalo OA" ở footer (`zalo.me/xxxxxxxxxxxxxxxxx`) | Placeholder giả | Link Zalo OA thật của BỘMẪU sau khi tạo OA. |
| 4 | Email liên-hệ (`hi@bomau.vn`) | Placeholder (domain có thể chưa tồn-tại) | Email thật đang dùng, hoặc email tạm (Gmail) nếu domain chưa mua. |
| 5 | Giá "149.000đ / 179.000đ" (section `#gia`) | Đang để 149.000đ là giá ưu-đãi, 179.000đ giá gạch — cả 2 nằm trong khoảng CEO đã duyệt (`products.md`) | CEO chốt số CUỐI-CÙNG trong khoảng 149–179k rồi sửa cả 2 số + order-bump "49.000đ/79.000đ" cho khớp. |
| 6 | Link "Chính-sách bảo-mật" / "Chính-sách hoàn-tiền" (`href="privacy-policy.md"` — 2 chỗ: form opt-in + footer) | Trỏ tới file `privacy-policy.md` (đã có bản MẪU ở `../compliance/`, cần Legal duyệt) | Đưa `privacy-policy` bản Legal-duyệt lên host + đổi link khớp domain thật. **KHÔNG launch thu email/Zalo khi link còn 404/chưa duyệt** — theo pháp-luật bảo-vệ dữ-liệu cá-nhân hiện-hành (**Luật 91/2025/QH15 + NĐ 356/2025**, KHÔNG còn là NĐ 13/2023). |
| 7 | Khu "Đánh giá khách hàng" (`#danh-gia`, 3 thẻ `.rev`) | **Ô GIỮ CHỖ** ghi rõ "[Chỗ dành cho đánh-giá thật]" — CHƯA có review giả | Thay bằng **REVIEW THẬT** (kèm tên/ảnh nếu khách đồng-ý) sau khi có khách đầu-tiên. ⚠️ **TUYỆT ĐỐI không dùng review giả** — vi-phạm Luật Quảng-cáo & mất niềm tin. Chưa có review → có thể ẩn cả section (xoá khối `#danh-gia`). |

Ngoài ra:
- **Tên "BỘMẪU"** đang **chờ Legal tra Cục Sở-hữu Trí-tuệ** (nhóm 9+42) + domain (xem `strategy.md`, mục B3 execution-plan). Nếu Legal yêu-cầu đổi tên, tìm-thay toàn-bộ chuỗi "BỘMẪU"/"BộMẫu" trong `landing.html`.
- **Domain:** chưa cần domain riêng để TEST (dùng link `*.vercel.app`/`*.netlify.app` tạm ổn). Chỉ mua domain (.vn/.com) sau khi Legal PASS bước tra SHTT, tránh đầu-tư vào tên có rủi-ro bị yêu-cầu đổi.

## 4. Lưu git
Các file đã được commit/push vào nhánh `claude/wonderful-sagan-awc8lf` (lưu bền-vững — web ephemeral). Mỗi lần chỉnh landing nhớ commit lại.

## 5. Đối-chiếu với kế-hoạch
File này tương-ứng mục **A4 — "Landing page hero"** trong `../../../02-Tasks/2026-07-07-1023-phan-tich-ngach-doi-thu/08-execution-plan.md`. Việc B1 (chạy ads), B2 (đăng-ký SePay), B3 (Legal SHTT) vẫn đang **NEED-APPROVAL/HUMAN-ONLY** — landing này chỉ là tài-sản chuẩn-bị, **CHƯA được publish/chạy ads thật**.
