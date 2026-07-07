# 00 — Hướng dẫn: Sheet Tính LÃI THẬT — bản FREE 1 sàn (TikTok Shop)

> **TL;DR:** Đây là **lead-magnet MIỄN PHÍ** (2 tab, chỉ TikTok Shop) — nhập đơn là ra ngay **LÃI THẬT sau phí
> sàn/ads/thuế khoán**, thứ mà sổ Excel ghi-tay thông thường không tính được. Ráp trong Google Sheets **~3
> phút**. Đây **KHÔNG phải** bản đầy đủ: thiếu đa-sàn, đối-soát và dashboard — nếu bạn bán **nhiều sàn** hoặc
> muốn **tự-động phát-hiện sàn trả thiếu tiền**, xem mục "Nâng-cấp bản đầy-đủ" ở cuối file.

## Bạn nhận được gì (2 tab)

| Tab | Nhập gì | Ra kết quả gì |
|---|---|---|
| `01-nhap-don` | Mỗi đơn TikTok Shop 1 dòng: mã đơn, ngày, SKU, số lượng, giá bán, giá vốn/SP, giảm giá, ads phân bổ | Dữ liệu gốc |
| `02-lai-that` | Không cần nhập gì (tự kéo từ tab 1) — chỉ sửa 4 ô cấu-hình phí ở đầu tab nếu số của bạn khác benchmark | **LÃI THẬT (VNĐ) + biên lãi (%) từng đơn**, sau khi trừ phí sàn (gộp), phí xử lý đơn, giá vốn, ads, thuế khoán |

**Vì sao chỉ 2 tab, chỉ 1 sàn?** Bản free này lược bớt 3 phần của bản hero đầy-đủ để giữ **đơn giản tối đa**
cho người mới bắt đầu: không có tab cấu-hình phí đa-sàn riêng (đã gộp thẳng vào tab `02-lai-that`), không có
tab đối-soát (không so được tiền sàn trả thực-nhận), không có dashboard tổng-hợp (không xem theo ngày/SKU/sàn).
Đây là **giới hạn có chủ-đích**, không phải thiếu-sót.

## Cách ráp bản FREE vào Google Sheets (3 phút)

1. Vào [sheets.google.com](https://sheets.google.com) → **Trống (Blank)** → đặt tên vd "Lãi thật TikTok Shop —
   [Tên shop bạn] (bản free)".
2. Với **từng file** (`01-nhap-don.csv` rồi `02-lai-that.csv`):
   - Menu **Tệp (File) → Nhập (Import)** → tab **Tải lên (Upload)** → chọn file `.csv`.
   - Ở hộp thoại "Nhập tệp", chọn **"Chèn trang tính mới" (Insert new sheet(s))** → **Nhập dữ liệu (Import
     data)**.
   - Google Sheets tự đặt tên tab **trùng tên file** (`01-nhap-don`, `02-lai-that`) — **KHÔNG đổi tên tab**
     vì công thức trong `02-lai-that` tham chiếu đúng tên này.
3. Xoá tab trống mặc định "Sheet1"/"Trang tính1" (chuột phải tab → Xoá).
4. Mở tab `02-lai-that` — cột `LAI_THAT_VND` và `Bien_loi_nhuan_pct` phải ra số ngay (không phải lỗi `#REF!`).
   Nếu lỗi, xem mục "Xử lý lỗi" bên dưới.
5. Ở đầu tab `02-lai-that` (dòng 3–6) có **4 ô cấu-hình phí** — sửa theo số THẬT của bạn (xem Kênh Người Bán
   TikTok Shop > Tài chính > Phí):
   - `Phi_san_gop_pct` (ô B3): mặc định **18.5%** = benchmark gộp hoa hồng + giao dịch/thanh toán + dịch vụ
     cho Người bán Thường. Nếu là Shop Mall, đổi thành **21.5%**.
   - `Phi_xu_ly_don_VND` (ô B4): mặc định **3.000đ/đơn** (cố định).
   - `Thue_GTGT_khoan_pct` (ô B5) + `Thue_TNCN_khoan_pct` (ô B6): mặc định **1.0% + 0.5% = 1.5%** (xem mục
     Thuế bên dưới — **KHÔNG sửa thành 5%+2%** trừ khi kế toán xác nhận bạn thuộc nhóm khác).
6. Mỗi ngày/tuần: thêm đơn mới vào `01-nhap-don` (dòng 8 trở đi), rồi bôi đen dòng 14 của `02-lai-that`
   (dòng công thức cuối), Ctrl+C, dán vào dòng mới — Google Sheets tự tăng số dòng tham chiếu.

## Thuế khoán dùng đúng mức (1,5%, không phải 5%+2%)

Bản free này dùng **GTGT 1% + TNCN 0,5% = 1,5% trên doanh thu**, áp dụng cho **hộ/cá nhân kinh doanh bán HÀNG
HOÁ** qua sàn TMĐT (Thông tư 40/2021/TT-BTC, Phụ lục I, nhóm "phân phối, cung cấp hàng hoá"). Mức "5%+2%" chỉ
áp dụng cho nhóm **dịch vụ không bao thầu nguyên vật liệu** — **không** dùng cho người bán quần áo/giày dép/mỹ
phẩm... qua TikTok Shop/Shopee. Nếu bạn hoạt động dưới hình thức **doanh nghiệp** (chịu TNDN 20% trên lợi
nhuận, không phải thuế khoán trên doanh thu), số 1,5% này **không áp dụng** cho bạn.

**MẪU tính toán — cần kế toán rà soát** theo tình trạng đăng ký kinh doanh cụ thể của bạn; 2026 có lộ trình cải
cách thuế hộ kinh doanh (bỏ khoán → kê khai, nâng ngưỡng miễn thuế) — xác nhận với kế toán trước khi dùng số
này để kê khai thật.

## Ví dụ tính lãi thật 1 đơn (kiểm tra tay — khớp dữ liệu mẫu DH001)

Đơn `DH001`: SKU `AO-THUN-DEN-M`, SL=2, giá bán 150.000đ/SP, giá vốn 60.000đ/SP, giảm giá 10.000đ, ads phân bổ
15.000đ.

```
Doanh thu       = 2×150.000 − 10.000                          = 290.000đ
Phí sàn (gộp)   = 290.000 × 18.5%                              =  53.650đ
Phí xử lý đơn   = cố định                                      =   3.000đ
Giá vốn         = 2×60.000                                     = 120.000đ
Ads phân bổ     =                                              =  15.000đ
Thuế GTGT khoán = 290.000 × 1.0%                                =   2.900đ
Thuế TNCN khoán = 290.000 × 0.5%                                =   1.450đ
---------------------------------------------------------------------
Tổng chi phí    = 53.650+3.000+120.000+15.000+2.900+1.450       = 196.000đ
LÃI THẬT        = 290.000 − 196.000                             =  94.000đ
Biên lãi thật   = 94.000 / 290.000                              ≈  32.4%
```

→ Khớp đúng số tự-động tính ra ở tab `02-lai-that`, dòng `DH001` (`LAI_THAT_VND` = 94.000, `Bien_loi_nhuan_pct`
≈ 32.4%) — đồng thời khớp với ví dụ tương tự trong bản hero đầy-đủ (cùng công thức phí, chỉ khác cách trình
bày gộp/tách).

## Giới hạn đã biết (nói thật, không thổi phồng)

- **Chỉ 1 sàn (TikTok Shop).** Nếu bạn bán **cả TikTok Shop lẫn Shopee**, bản free này không gộp được số liệu
  2 sàn vào 1 chỗ — bạn phải tự copy tab này ra làm 2 bản riêng (không có dashboard tổng-hợp đa-sàn).
- **Không có tab đối-soát.** Bản free không so được "tiền sàn trả thực-nhận" với "tiền lý-thuyết theo công
  thức" — nghĩa là nếu sàn trả thiếu tiền, bạn sẽ **không tự-động phát-hiện** được (đây là tính năng chỉ có ở
  bản đầy-đủ).
- **Không có dashboard.** Không xem được tổng lãi theo ngày/SKU/sàn, không có "top sản phẩm lãi cao nhất/thấp
  nhất" — bạn phải tự cộng bằng tay hoặc dùng SUM/SUMIF thủ công nếu cần.
- **Phí sàn đã GỘP THÀNH 1 số** (18.5%) thay vì tách 3 dòng (hoa hồng/giao dịch/dịch vụ) như bản đầy-đủ — nếu
  cơ cấu phí thật của bạn không khớp tỉ-lệ gộp mặc định (vd bạn có tham-gia Freeship Xtra/Voucher Xtra —
  không áp dụng cho TikTok Shop, chỉ có ở Shopee), số ra có thể lệch nhẹ — sửa lại ô `Phi_san_gop_pct` cho
  khớp.
- Mọi % phí là **`[benchmark 2026 — cần CEO xác minh]`** — không phải số tài khoản thật của bạn cho tới khi
  bạn tự sửa theo Kênh Người Bán. Công cụ này **KHÔNG đảm bảo/cam kết bạn sẽ có lãi hay ra đơn** — chỉ giúp
  bạn **tính đúng** những gì bạn đã nhập.

## Nâng-cấp bản đầy-đủ đa-sàn (khác biệt cụ thể — không thổi phồng)

Bản free này là **1 lát cắt** của "Bộ Google Sheet đối-soát & tính LÃI THẬT đa-sàn TikTok Shop + Shopee"
(149–179k, xem `../../sheet-hero/`). Nâng cấp thêm **3 việc cụ thể** mà bản free không làm được:

| Việc | Bản FREE (file này) | Bản ĐẦY ĐỦ (149–179k) |
|---|---|---|
| Số sàn hỗ trợ | 1 sàn (TikTok Shop) | **2 sàn** (TikTok Shop + Shopee), tách riêng phí từng sàn (Thường/Mall) — không phải cộng gộp thủ công |
| Cấu hình phí | Gộp 1 số/tab lãi-thật | Tab **riêng** `01-cau-hinh-phi-san` — tách hoa hồng/giao dịch/dịch vụ/freeship xtra/voucher xtra từng sàn, dễ cập nhật khi sàn đổi phí |
| Đối soát | Không có | Tab `03-doi-soat` — so tiền sàn trả thực-nhận với tiền lý-thuyết, **tự cảnh báo ⚠** khi lệch >3% (phát hiện sàn trả thiếu) |
| Dashboard | Không có | Tab `05-dashboard` — tổng hợp theo ngày/SKU/sàn, top sản phẩm lãi cao/thấp, tỉ lệ ads/lãi thật toàn kỳ |
| Số tab | 2 tab | 5 tab |

**Khi nào nên nâng cấp:** khi bạn (1) bắt đầu bán **thêm sàn thứ 2**, hoặc (2) nghi ngờ **sàn trả thiếu tiền**
và cần bằng chứng đối-soát, hoặc (3) cần **nhìn tổng quan** nhiều đơn/nhiều SKU cùng lúc thay vì đọc từng dòng.
Nếu bạn chỉ bán 1 sàn với vài đơn/ngày, bản free này vẫn dùng tốt lâu dài — nâng cấp không bắt buộc.

## Xử lý lỗi thường gặp

| Lỗi | Nguyên nhân | Cách sửa |
|---|---|---|
| `#REF!` ở tab `02-lai-that` | Đổi tên tab `01-nhap-don` khác tên gốc, hoặc xoá nhầm cột | Đổi lại đúng tên tab `01-nhap-don`, hoặc nhập lại CSV gốc |
| `LAI_THAT_VND` ra số âm to bất thường | Nhập nhầm đơn vị (vd giá bán tính bằng nghìn đồng thay vì đồng) | Kiểm tra lại các cột giá ở `01-nhap-don` — luôn nhập nguyên VNĐ (150000, không phải 150) |
| Số phí không đúng thực tế | Đang dùng benchmark mặc định 18.5%, chưa xác minh | Sửa ô `B3` (`Phi_san_gop_pct`) trong `02-lai-that` theo % phí thật ở Kênh Người Bán của bạn |

## Xác nhận sạch bản quyền

File này **chỉ gồm**: bảng dữ liệu tự nhập (CSV thuần), công thức Google Sheets tự viết (`SUM`/`IF` — hàm
chuẩn built-in của Google, không add-on/script bên thứ ba), và văn bản hướng dẫn tự soạn tiếng Việt. **KHÔNG**
nhúng ảnh, icon, font, template Canva Pro hay bất kỳ asset bên thứ ba nào — khớp `telos.values` của BộMẫu
("Tôn-trọng bản-quyền — chỉ bán/tặng asset do mình tạo hoặc có license thương-mại sạch").
