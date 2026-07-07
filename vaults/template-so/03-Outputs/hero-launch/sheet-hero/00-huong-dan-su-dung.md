# 00 — Hướng dẫn sử dụng: Bộ Sheet Đối-soát & Tính Lãi Thật đa-sàn TikTok Shop + Shopee

> **TL;DR:** Đây là bộ Google Sheet 5-tab giúp bạn biết **LÃI THẬT sau phí sàn/ads/COD/thuế khoán** cho từng
> đơn — thứ mà file Excel free (chỉ ghi đơn) không làm được. Nhập đơn vào tab 2, mọi phép tính (đối soát,
> lãi thật, dashboard) tự chạy bằng công thức có sẵn. Mở-là-chạy trong ~5 phút, KHÔNG cần biết Excel nâng cao.

## Bạn sẽ nhận được gì (5 tab)

| Tab | Nhập gì | Đọc gì | Ra kết quả gì |
|---|---|---|---|
| `01-cau-hinh-phi-san` | Sửa % phí thật của bạn (nếu khác benchmark) | Bảng phí TikTok Shop/Shopee 2026 + thuế khoán | Nguồn tính đúng cho mọi tab sau |
| `02-nhap-don` | Mỗi đơn hàng 1 dòng (mã đơn, ngày, sàn, SKU, SL, giá bán, giá vốn, ship thu khách, COD, giảm giá, ads) | — | Dữ liệu gốc cho toàn bộ hệ thống |
| `03-doi-soat` | Tiền sàn thực nhận (copy từ báo cáo/ví người bán của sàn) | Tiền lý thuyết + chênh lệch | Biết ngay khi sàn trả THIẾU (cờ ⚠) |
| `04-lai-that` | Không cần nhập gì (tự kéo từ tab 2) | Toàn bộ chi phí tách bạch từng đơn | **LÃI THẬT (VNĐ) + biên lãi (%) từng đơn** |
| `05-dashboard` | Không cần nhập gì | Tổng hợp theo ngày/SP/sàn, top SP, ads vs lãi | Nhìn 1 lần biết đang lãi ở đâu, lỗ ở đâu |

## Cách dựng bộ Sheet trong Google Sheets (5 phút)

1. Vào [sheets.google.com](https://sheets.google.com) → **Trống (Blank)** để tạo 1 Google Sheet mới, đặt tên
   vd "Đối soát & Lãi thật — [Tên shop bạn]".
2. Với **từng file trong 5 file CSV** (`01-cau-hinh-phi-san.csv` → `05-dashboard.csv`), làm:
   - Menu **Tệp (File) → Nhập (Import)** → tab **Tải lên (Upload)** → chọn file `.csv`.
   - Ở hộp thoại "Nhập tệp", chọn **"Chèn trang tính mới" (Insert new sheet(s))** → bấm **Nhập dữ liệu (Import data)**.
   - Google Sheets sẽ tự tạo 1 tab MỚI, đặt tên **trùng với tên file** (vd `01-cau-hinh-phi-san`) — đây chính
     là tên các công thức trong bộ Sheet này dùng để tham chiếu qua lại. **KHÔNG đổi tên tab** trừ khi bạn
     cũng sửa lại toàn bộ công thức tương ứng (xem `06-cong-thuc.md`).
3. Sau khi nhập đủ 5 tab, xoá tab trống mặc định "Sheet1"/"Trang tính1" (chuột phải tab → Xoá).
4. Mở tab `04-lai-that` và `05-dashboard` — nếu thấy số ở cột LÃI THẬT / dashboard hiện ra (không phải lỗi
   `#N/A` hay `#REF!`), nghĩa là công thức đã chạy đúng ngay từ CSV (Google Sheets tự nhận ô bắt đầu bằng `=`
   là công thức, không phải chữ). Nếu thấy lỗi, xem mục "Xử lý lỗi thường gặp" bên dưới.
5. Vào tab `01-cau-hinh-phi-san`, sửa các cột % phí theo **số phí THẬT của tài khoản bạn** (xem trong Kênh
   Người Bán TikTok Shop/Shopee > Tài chính > Phí) — số hiện tại là **benchmark 2026, chưa xác minh** (đánh
   dấu rõ trong cột "Ghi chú/nguồn").
6. Mỗi ngày/tuần: thêm đơn hàng mới vào `02-nhap-don` (dòng 10 trở đi), copy công thức dòng 9 của
   `03-doi-soat` và `04-lai-that` xuống dòng mới (bôi đen dòng 9 → Ctrl+C → chọn dòng mới → Ctrl+V).

## Giới hạn đã biết (nói thật, không thổi phồng)

- **Phí vận chuyển thực trả cho đơn vị vận chuyển** (nếu bạn tự trả riêng ngoài phí sàn, không qua "phí ship
  thu khách") **CHƯA** có cột riêng trong bản này — cộng thủ công vào cột "Ads phân bổ" hoặc tự thêm 1 cột ở
  `02-nhap-don` nếu cần theo dõi tách bạch.
- **Phí thu hộ COD** để mặc định **0%** vì không có số benchmark đáng tin cậy áp dụng chung cho mọi đơn vị vận
  chuyển tại VN (một số ĐVVC không thu, một số thu riêng theo hợp đồng) — bạn tự điền lại ở
  `01-cau-hinh-phi-san` nếu đối tác của bạn có thu.
- **Thuế khoán 1.5%** (GTGT 1% + TNCN 0.5%) áp dụng cho **hộ/cá nhân kinh doanh bán hàng hoá qua sàn** theo
  Thông tư 40/2021/TT-BTC — nếu bạn hoạt động dưới hình thức **doanh nghiệp** (chịu thuế TNDN 20% trên lợi
  nhuận, không phải thuế khoán trên doanh thu), số này **KHÔNG áp dụng** — cần kế toán tư vấn cách tính đúng
  cho hình thức đăng ký kinh doanh của bạn. Ngoài ra 2026 có lộ trình cải cách thuế hộ kinh doanh (bỏ khoán,
  chuyển kê khai, nâng ngưỡng miễn thuế lên 1 tỷ/năm) — **cần kế toán cập nhật theo tình huống cụ thể**.
- Bộ Sheet này là **MẪU tính toán**, không thay thế chứng từ kế toán/thuế chính thức — mọi số thuế/phí đều
  cần chuyên gia rà trước khi dùng để kê khai.

## Xử lý lỗi thường gặp

| Lỗi | Nguyên nhân | Cách sửa |
|---|---|---|
| `#N/A` ở cột VLOOKUP (Phí hoa hồng...) | Tên tab không khớp (vd tab bị đổi tên khác `01-cau-hinh-phi-san`) | Đổi lại đúng tên tab hoặc sửa tên trong công thức (`06-cong-thuc.md`) |
| `#REF!` | Xoá nhầm 1 tab hoặc 1 cột đang được tham chiếu | Nhập lại CSV gốc cho tab đó |
| Cột COD tính ra 0 dù có COD | Ô "COD" ở `02-nhap-don` gõ sai (vd "co", "CÓ" không dấu chuẩn) — công thức so khớp đúng chữ **`Có`/`Không`** có dấu | Gõ lại đúng `Có` hoặc `Không` |
| Số phí không đúng thực tế | Đang dùng benchmark AI, chưa xác minh | Vào `01-cau-hinh-phi-san`, sửa % theo Kênh Người Bán thật của bạn |

## Xác nhận sạch bản quyền

Toàn bộ 7 file trong bộ Sheet này **chỉ gồm**: bảng dữ liệu tự nhập (CSV thuần), công thức Google Sheets tự
viết (SUM/SUMIF/VLOOKUP/INDEX/MATCH/LARGE/IF — hàm chuẩn built-in của Google, không phải add-on/script bên thứ
ba), và văn bản hướng dẫn tự soạn bằng tiếng Việt. **KHÔNG** nhúng ảnh, icon, font, template Canva Pro hay bất
kỳ asset bên thứ ba nào — khớp với `telos.values` của BộMẫu ("Tôn-trọng bản-quyền — chỉ bán asset do mình tạo
hoặc có license thương-mại sạch"). Khi đóng gói bán, có thể thêm logo/màu thương hiệu riêng của BộMẫu (tự
thiết kế) mà không vi phạm license của bên thứ ba.

## Ví dụ tính lãi thật 1 đơn (kiểm tra tay — khớp với dữ liệu mẫu DH001 trong `02-nhap-don`)

Đơn `DH001`: TikTok Shop (Người bán Thường), SKU `AO-THUN-DEN-M`, SL=2, giá bán 150.000đ/SP, giá vốn
60.000đ/SP, giảm giá 10.000đ, ads phân bổ 15.000đ, không COD.

```
Doanh thu      = 2×150.000 − 10.000 + 0(ship thu khách)     = 290.000đ
Phí hoa hồng   = 290.000 × 12.5%                             =  36.250đ
Phí giao dịch  = 290.000 × 6.0%                               =  17.400đ
Phí dịch vụ    = 290.000 × 0% (TikTok không có mục này)       =       0đ
Phí xử lý đơn  = 3.000đ/đơn (cố định)                         =   3.000đ
Giá vốn        = 2×60.000                                     = 120.000đ
Ads phân bổ    =                                              =  15.000đ
Phí COD        = 0 (không COD)                                =       0đ
Thuế GTGT khoán= 290.000 × 1.0%                                =   2.900đ
Thuế TNCN khoán= 290.000 × 0.5%                                =   1.450đ
--------------------------------------------------------------------
Tổng chi phí   = 36.250+17.400+0+3.000+120.000+15.000+0+2.900+1.450 = 196.000đ
LÃI THẬT       = 290.000 − 196.000                             =  94.000đ
Biên lãi thật  = 94.000 / 290.000                              ≈  32.4%
```

→ Khớp đúng với số tự động tính ra ở tab `04-lai-that`, dòng `DH001` (cột `LAI_THAT_VND` = 94.000,
`Bien_lai_that_pct` ≈ 32.4%). Đây là bằng chứng công thức hoạt động đúng trước khi bạn nhập đơn thật của mình.
