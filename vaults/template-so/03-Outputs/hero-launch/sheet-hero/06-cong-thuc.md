# 06 — Công thức Google Sheets (dán chính xác)

> **TL;DR:** File này liệt kê ĐÚNG NGUYÊN VĂN từng công thức đã được nhúng sẵn trong 3 file `03-doi-soat.csv`,
> `04-lai-that.csv`, `05-dashboard.csv` — dùng để (1) đối chiếu khi công thức lỗi sau khi dán, và (2) kéo-dài
> (fill down) khi bạn nhập thêm đơn hàng ngoài 8 dòng mẫu. Mọi công thức đã tính đúng tay (xem `00-huong-dan-su-dung.md`
> mục "kiểm hoàn tất").

**Điều kiện tiên quyết:** 5 tab phải được đặt tên **ĐÚNG Y HỆT** tên file CSV (không đuôi `.csv`):
`01-cau-hinh-phi-san` · `02-nhap-don` · `03-doi-soat` · `04-lai-that` · `05-dashboard`
(Google Sheets tự đặt tên này khi bạn "Chèn trang tính mới" lúc import CSV — xem `00-huong-dan-su-dung.md`.)

---

## A. Tab `03-doi-soat` (đối soát) — cột E "Tiền lý thuyết" (dòng 2, kéo xuống dòng 9+)

```
=C2-(C2*VLOOKUP(B2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,4,FALSE)/100)
   -(C2*VLOOKUP(B2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,5,FALSE)/100)
   -(C2*VLOOKUP(B2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,6,FALSE)/100)
   -VLOOKUP(B2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,9,FALSE)
```
(Trong file thật là 1 dòng liền, không xuống dòng — xem CSV.) Ý nghĩa: Doanh thu − (Doanh thu×%hoa hồng) −
(Doanh thu×%phí giao dịch/thanh toán) − (Doanh thu×%phí dịch vụ) − phí xử lý đơn cố định.

- Cột C "Doanh thu ghi nhận" = `=('02-nhap-don'!E2*'02-nhap-don'!F2)-'02-nhap-don'!J2+'02-nhap-don'!H2`
  (SL×Giá bán − Giảm giá + Phí ship thu khách)
- Cột F "Chênh lệch" = `=D2-E2` (Tiền sàn thực nhận − Tiền lý thuyết)
- Cột G "Chênh lệch %" = `=IF(E2=0,0,F2/E2)`
- Cột H "Ngưỡng cảnh báo" = `3%` (số cố định, bạn có thể sửa theo khẩu vị rủi ro — 3% là mốc khởi điểm gợi ý)
- Cột I "Cờ cảnh báo" = `=IF(ABS(G2)>H2,"⚠ KIỂM TRA LẠI","OK")`

**Vì sao có VLOOKUP mặc định "... - Thường"?** Công thức mặc định tra mức phí **Người bán Thường/Marketplace**.
Nếu bạn là **Shop Mall / TikTok Shop Mall**, sửa `" - Thường"` thành `" - Mall"` trong TẤT CẢ công thức VLOOKUP
ở dòng đơn hàng của bạn (SP số/mall thường ít gặp ở ICP nhà bán vừa-nhỏ, nhưng vẫn hỗ trợ).

## B. Tab `04-lai-that` (lãi thật/đơn) — 8 cột công thức chính (dòng 2, kéo xuống)

| Cột | Tên | Công thức |
|---|---|---|
| E | Doanh thu | `=('02-nhap-don'!E2*'02-nhap-don'!F2)-'02-nhap-don'!J2+'02-nhap-don'!H2` |
| F | Phí hoa hồng/cố định | `=$E2*VLOOKUP($C2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,4,FALSE)/100` |
| G | Phí giao dịch/thanh toán | `=$E2*VLOOKUP($C2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,5,FALSE)/100` |
| H | Phí dịch vụ cơ bản | `=$E2*VLOOKUP($C2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,6,FALSE)/100` |
| I | Phí xử lý đơn (VNĐ cố định) | `=VLOOKUP($C2&" - Thường",'01-cau-hinh-phi-san'!$A$2:$K$5,9,FALSE)` |
| J | Giá vốn | `=+'02-nhap-don'!E2*'02-nhap-don'!G2` |
| K | Ads phân bổ | `=+'02-nhap-don'!K2` |
| L | Phí thu hộ COD | `=IF('02-nhap-don'!I2="Có",$E2*'01-cau-hinh-phi-san'!$C$8/100,0)` |
| M | Thuế GTGT khoán | `=$E2*'01-cau-hinh-phi-san'!$C$9/100` |
| N | Thuế TNCN khoán | `=$E2*'01-cau-hinh-phi-san'!$C$10/100` |
| O | Tổng chi phí | `=SUM(F2:N2)` |
| P | **LÃI THẬT** | `=E2-O2` |
| Q | Biên lãi thật % | `=IF(E2=0,0,P2/E2)` |

**Lưu ý quan trọng:**
- Cột `COD` ở tab `02-nhap-don` (cột I) phải gõ **đúng chữ `Có` hoặc `Không`** (có dấu) — công thức so khớp chính xác.
- Thuế khoán mặc định = **1.0% GTGT + 0.5% TNCN = 1.5%** trên doanh thu (Thông tư 40/2021/TT-BTC, nhóm "phân
  phối, cung cấp hàng hoá") — KHÔNG phải 5%+2% (mức đó áp cho nhóm dịch vụ không kèm vật tư). Xem cảnh báo
  chi tiết ở `01-cau-hinh-phi-san.csv` dòng `THUE_GTGT_PCT`.
- Muốn thêm đơn hàng thứ 9 trở đi: bôi đen dòng 9 toàn bộ (từ `02-nhap-don` tới `04-lai-that`), copy, dán vào
  dòng mới — Google Sheets tự tăng số dòng tham chiếu (`2`→`10`...).

## C. Tab `05-dashboard` (tổng hợp) — công thức theo từng khối

**Theo Ngày** (dòng 3-6, cột B/C): `=SUMIF('04-lai-that'!$B$2:$B$9,A3,'04-lai-that'!$E$2:$E$9)` (doanh thu),
`=SUMIF('04-lai-that'!$B$2:$B$9,A3,'04-lai-that'!$P$2:$P$9)` (lãi thật), Biên% = `=IF(B3=0,0,C3/B3)`.

**Theo SKU** (dòng 10-13): thay `$B$2:$B$9` bằng `$D$2:$D$9` (cột SKU trong `04-lai-that`), khoá theo `A10..A13`.

**Theo Sàn** (dòng 17-18): thay bằng `$C$2:$C$9` (cột Sàn trong `04-lai-that`).

**Top sản phẩm** (dòng 22-24, dựa trên bảng "Theo SKU" ở trên):
- Top 1: `=INDEX($A$10:$A$13,MATCH(MAX($C$10:$C$13),$C$10:$C$13,0))`
- Top 2: `=INDEX($A$10:$A$13,MATCH(LARGE($C$10:$C$13,2),$C$10:$C$13,0))`
- Thấp nhất/cần chú ý (tự lộ SP LỖ nếu có, số âm): `=INDEX($A$10:$A$13,MATCH(MIN($C$10:$C$13),$C$10:$C$13,0))`

**Tổng Ads vs Tổng Lãi thật toàn kỳ** (dòng 28-30):
`=SUM('04-lai-that'!$K$2:$K$9)` (tổng ads) · `=SUM('04-lai-that'!$P$2:$P$9)` (tổng lãi thật) ·
`=IF(B29=0,0,B28/B29)` (tỷ lệ ads/lãi thật — càng thấp càng tốt).

> Khi bạn kéo-dài dữ liệu quá dòng 9 (thêm đơn hàng), nhớ sửa các range `$...$9` ở trên thành số dòng cuối mới
> (vd `$20` nếu có 19 đơn) — hoặc đổi thành range mở `'04-lai-that'!$B:$B` (cả cột) để khỏi phải sửa mỗi lần.
