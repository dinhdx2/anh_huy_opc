# Hướng dẫn chi tiết — Bộ Sheet Đối-soát & Tính LÃI THẬT đa-sàn (BỘMẪU)

> **TL;DR:** File này giúp bạn biết **lãi/lỗ THẬT của từng đơn** trên TikTok Shop & Shopee sau khi trừ đủ mọi phí (hoa hồng sàn, phí giao dịch, phí dịch vụ, hoa hồng affiliate, phí COD, ship shop chịu, giá vốn, ads, thuế). Nhập đơn theo báo cáo thật của sàn → Sheet tự tính. Dùng được trên Google Sheets hoặc Excel, không cần biết công thức.

---

## 0. Bạn nhận được gì
File `.xlsx` **6 tab**, công thức chạy sẵn:
| Tab | Việc |
|---|---|
| 0. Hướng dẫn | Tóm tắt cách dùng ngay trong file |
| 1. Cấu hình phí | Khai % phí sàn của bạn (1 lần) |
| 2. Nhập đơn | Dán đơn thật từ sàn (18 cột theo thực tế bán hàng) |
| 4. Đối soát | Bắt lệch tiền sàn chuyển về |
| 5. Lãi thật | Lãi/lỗ + biên % từng đơn (tự tính theo trạng thái đơn) |
| 6. Dashboard | Tổng theo kênh / SKU / trạng thái |

---

## 1. Cài đặt (2 phút)
**Google Sheets (khuyến nghị):** Google Drive → *Mới → Google Trang tính → trống* → **Tệp → Nhập → Tải lên** → chọn file → **Thay thế bảng tính** → *Nhập dữ liệu*. Công thức + định dạng giữ nguyên.
**Excel:** nhấp đúp file (Excel 2016+).

---

## 2. Bước 1 — Khai phí sàn của bạn (tab "1. Cấu hình phí")
Sửa các % cho đúng **Kênh Người Bán THẬT** của bạn (số điền sẵn chỉ là tham khảo 2026, **bạn phải xác minh**):
- **Hoa hồng nền tảng %**, **Phí giao dịch %**, **Phí dịch vụ %** — xem tại:
  - *TikTok Shop:* Trung tâm Người Bán → Tài chính → xem biểu phí / hoặc mục Phí trong từng đơn.
  - *Shopee:* Kênh Người Bán → Tài chính → Phí (phí cố định theo ngành hàng + phí thanh toán + phí dịch vụ).
- **Freeship Xtra % / Voucher Xtra %** (Shopee): CHỈ điền nếu bạn có ĐĂNG KÝ chương trình, không thì để 0.
- **Phí xử lý đơn (VND)**, **Phí COD %**, **Thuế** (xem mục 6).

> Phí sàn thay đổi theo thời gian & ngành hàng → thỉnh thoảng vào đây cập nhật lại.

---

## 3. Bước 2 — Lấy dữ liệu đơn (real-time / định kỳ)
Bạn không nhập tay từng đơn — **xuất báo cáo từ sàn rồi dán vào**:

### TikTok Shop
- **Đơn hàng:** Trung tâm Người Bán → **Đơn hàng → Quản lý đơn → Xuất** (chọn khoảng ngày ≤ 6 tháng, định dạng CSV).
- **Đối soát tiền thật:** Tài chính → **Số dư / Đối soát (Settlement)** → tải file giao dịch đã quyết toán (dùng cho tab "4. Đối soát").

### Shopee
- **Kênh Người Bán → Tài chính → Báo Cáo Thu Nhập → Tải báo cáo thu nhập.** File có: Mã đơn, ngày thanh toán, sản phẩm, các khoản phí, phí vận chuyển, hoàn trả, doanh thu thực.

### Tần suất
Cập nhật **mỗi ngày** (dán đơn mới) hoặc **theo đợt quyết toán** của sàn — đây là cách "real-time" thực tế cho hộ kinh doanh.
*(Nâng cao, tự động 100%: dùng Google Apps Script gọi API TikTok Shop / Shopee OpenAPI để tự kéo đơn về Sheet — cần lập trình, không bắt buộc.)*

---

## 4. Bước 3 — Nhập đơn (tab "2. Nhập đơn", 18 cột)
Xoá 8 dòng mẫu (DH001–DH008), dán đơn thật. **Di chuột lên tiêu đề mỗi cột để xem chú thích ngay trong file.** Giải thích:

| Cột | Ý nghĩa | Lấy ở đâu / lưu ý |
|---|---|---|
| Mã đơn | Mã đơn hàng | Cột "Mã đơn hàng" trong báo cáo sàn |
| Ngày đặt / Ngày hoàn tất | Ngày tạo & ngày xong | Ngày hoàn tất để trống nếu chưa xong |
| **Kênh** | TikTok/Shopee (Thường/Mall) | Chọn từ danh sách sổ xuống |
| **Trạng thái** | Hoàn thành / Đang giao / Đã hủy / Trả hàng-Hoàn tiền / Hoàn 1 phần | Chọn từ danh sách — **quyết định cách tính lãi** |
| SKU / Tên SP | Mã & tên sản phẩm | Tên chỉ để đọc, không vào công thức |
| SL / Đơn giá niêm yết | Số lượng & giá gốc | |
| **Giảm giá SHOP (VND)** | Voucher/giảm giá do BẠN tài trợ | **TRỪ vào doanh thu** |
| Voucher SÀN (VND) | Voucher do SÀN tài trợ | **KHÔNG trừ** (sàn bù) — chỉ ghi tham khảo |
| Giá vốn/SP | Giá nhập của bạn | |
| Ship SHOP chịu (VND) | Phần ship bạn tự bù (trợ giá) | |
| **Hoa hồng Affiliate %** | Trả cho nhà sáng tạo (KOC) | Đơn qua affiliate TikTok Shop; không có → 0 |
| COD | Có/Không | Nếu ĐVVC thu phí COD, khai % ở tab Cấu hình |
| Tiền hoàn (VND) | Tiền hoàn cho khách | Dùng khi "Hoàn 1 phần" |
| Ads phân bổ (VND) | Tiền ads cho đơn này | **Luôn mất** kể cả đơn hủy/hoàn |

---

## 5. Bước 4 — Đọc kết quả
- **Tab "5. Lãi thật":** mỗi đơn ra **LÃI THẬT** + **biên %**. Lãi âm tô **đỏ**, lãi dương tô **xanh**. Thêm đơn ở tab Nhập đơn → bôi đen dòng công thức cuối tab này và **kéo xuống** cho các dòng mới.
- **Tab "6. Dashboard":** tổng doanh thu, tổng lãi thật, tổng ads, biên trung bình, số đơn lãi/lỗ, lãi theo **kênh** & **SKU**, số đơn theo **trạng thái**.

## 6. Bước 5 — Đối soát tiền sàn (tab "4. Đối soát")
Cột "Tiền sàn lẽ ra trả" tự tính (doanh thu − phí sàn). Bạn nhập **"Tiền sàn THỰC nhận"** (cột vàng) từ file Settlement/Thu nhập → cột **Cờ** báo **⚠ LỆCH** nếu chênh > 1.000đ → truy ngay đơn bị thiếu tiền/trừ sai.

---

## 7. Cách tính theo TRẠNG THÁI đơn (điểm mạnh của bộ này)
| Trạng thái | Doanh thu | Giá vốn | Ghi chú |
|---|---|---|---|
| Hoàn thành | SL×giá − giảm shop | Trừ (đã bán) | Tính đủ |
| Đang giao | như trên (tạm tính) | Trừ | Đổi khi chốt |
| **Đã hủy** | 0 | KHÔNG mất (hàng còn) | **Chỉ lỗ tiền ADS đã chi** |
| **Trả hàng-Hoàn tiền** | 0 | Hàng về (không mất) | **Lỗ ADS + ship shop chịu** |
| **Hoàn 1 phần** | (SL×giá − giảm) − tiền hoàn | Trừ | Phí tính trên doanh thu còn lại |

*Ví dụ trong file:* DH004 (hủy) = **−12.000đ** (chỉ mất ads); DH005 (trả hàng) = **−70.000đ** (ship 30k + ads 40k). Đây là tiền thật bạn mất mà báo cáo "doanh thu" không cho thấy.

---

## 8. Thuế (MẪU — cần kế toán rà)
Mặc định **GTGT 1% + TNCN 0,5% = 1,5%** trên doanh thu — nhóm **"phân phối, cung cấp hàng hóa"** (Thông tư 40/2021, Phụ lục I). Đây KHÁC mức 5%+2% (chỉ cho dịch vụ). Ngưỡng miễn thuế & lộ trình bỏ thuế khoán 2026 đang thay đổi → **hỏi kế toán có chứng chỉ trước khi kê khai thật.**

## 9. Xử lý lỗi thường gặp
- **Ô lãi báo `#N/A`:** cột "Kênh" gõ sai/không khớp danh sách tab Cấu hình → chọn lại từ ô sổ xuống.
- **Thêm đơn nhưng tab Lãi thật không có:** kéo công thức dòng cuối xuống cho dòng mới.
- **Số phí sai:** vào tab Cấu hình sửa % theo phí thật của shop bạn.

## 10. Bản quyền & dữ liệu
- File chỉ dùng hàm/định dạng bảng tính chuẩn — **không chứa ảnh/font/asset bên thứ ba**.
- Dữ liệu bạn nhập nằm trên **bản sao của riêng bạn** — người bán bộ Sheet không truy cập số liệu của bạn.
