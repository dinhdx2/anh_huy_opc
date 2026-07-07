# Checklist Chuẩn Bị Hồ Sơ KYC — Dùng Chung PayPal Business / Payoneer / 2Checkout

**TL;DR:** Chuẩn bị một bộ hồ sơ gốc scan màu chất lượng cao (CCCD 2 mặt + ĐKKD + xác nhận địa chỉ + sao kê ngân hàng), khai thông tin DN hoàn toàn nhất quán trên cả 3 cổng để tránh bị hold/limit, mở PayPal Business trước vì là cổng chính nhận tiền khách Mỹ.

---

## PHẦN 1 — Giấy Tờ Cần Scan (Làm 1 Lần, Dùng 3 Cổng)

### 1.1 Giấy tờ định danh cá nhân (Người đại diện pháp luật)

| STT | Giấy tờ | Yêu cầu | Ghi chú |
|-----|---------|---------|---------|
| 1 | CCCD (Căn cước công dân) — **mặt trước** | Scan màu, độ phân giải ≥ 300 DPI, rõ ảnh, rõ số, rõ MRZ (dòng số phía dưới) | Không dùng bản photocopy đã fax/in lại |
| 2 | CCCD — **mặt sau** | Như trên, thấy rõ ngày cấp, nơi cấp | Bắt buộc với 2Checkout (phải thấy MRZ code) |
| 3 | Hộ chiếu (trang ảnh) | Thay thế nếu CCCD không được chấp nhận | 2Checkout ưu tiên passport hơn CCCD cho shareholder >10% |

> Lưu ý: 2Checkout yêu cầu passport hoặc national identity card **có MRZ code** — driver's license **không được chấp nhận**. CCCD chip Việt Nam thế hệ mới (12 số) có MRZ nên hợp lệ.

### 1.2 Giấy tờ doanh nghiệp

| STT | Giấy tờ | Yêu cầu | Cổng cần |
|-----|---------|---------|---------|
| 4 | Giấy chứng nhận ĐKKD (tất cả các trang) | Scan màu toàn trang, không cắt xén, thấy rõ con dấu đỏ | PayPal, Payoneer, 2Checkout |
| 5 | Giấy xác nhận/thông báo MST (nếu ĐKKD không ghi MST riêng) | Bản scan màu từ Cổng thông tin quốc gia | Payoneer, 2Checkout |

### 1.3 Xác minh địa chỉ (Proof of Address)

| STT | Giấy tờ | Yêu cầu | Lưu ý |
|-----|---------|---------|-------|
| 6 | Sao kê ngân hàng (bank statement) | Không quá **3 tháng** tính từ ngày nộp, phải thể hiện tên chủ TK và địa chỉ | Dùng cho cả địa chỉ cá nhân lẫn DN |
| 7 | Hóa đơn điện/nước/internet (utility bill) | Không quá 3 tháng, tên + địa chỉ khớp với đăng ký | Thay thế sao kê nếu cần |

> Payoneer yêu cầu địa chỉ công ty trên proof of address **khớp chính xác** với địa chỉ đã khai khi đăng ký.

### 1.4 Tiêu Chuẩn Scan Để Không Bị Từ Chối

- **Màu sắc:** Bắt buộc scan/chụp **màu (color)** — không chấp nhận đen trắng.
- **Độ phân giải:** Tối thiểu **300 DPI** (khuyến nghị 600 DPI). Ảnh chụp điện thoại được, miễn là nét, không nhòe.
- **Toàn trang:** Không cắt cạnh, thấy rõ 4 góc tài liệu.
- **Không phải bản sao của bản sao:** Không scan photocopy — phải từ bản gốc hoặc ảnh gốc.
- **Định dạng file:** PDF, JPG, PNG (2Checkout thêm .gif, .docx). Dung lượng < 10 MB/file.
- **Không sửa ảnh:** Không chỉnh màu, cắt, thêm watermark thủ công.
- **Ánh sáng đều:** Không bị bóng che, không lóa sáng.

**Tip thực tế:** Dùng app CamScanner / Adobe Scan chế độ "Document" để tự cân màu và độ phân giải. Lưu cả bản gốc (.jpg high-res) và bản PDF để dùng linh hoạt.

---

## PHẦN 2 — Email Doanh Nghiệp & Số Điện Thoại

### 2.1 Tạo Email Doanh Nghiệp Riêng

Mỗi cổng thanh toán cần **1 email đăng ký duy nhất**. Không dùng Gmail cá nhân cho PayPal Business vì khó tách bạch và dễ bị flag khi scale.

**Gợi ý đặt tên email theo store:**

| Mẫu | Ví dụ (store tên "VietPrint Store") |
|-----|--------------------------------------|
| `payments@[tên-store].com` | `payments@vietprintstore.com` |
| `hello@[tên-store].com` | `hello@vietprintstore.com` |
| `[tên-store]biz@gmail.com` | `vietprintstorebiz@gmail.com` *(tạm dùng nếu chưa có domain)* |

**Khuyến nghị:** Mua domain riêng (Namecheap/GoDaddy ~$10/năm) và tạo email `@[domain]` bằng Google Workspace (~$6/tháng) hoặc Zoho Mail (free plan). Domain riêng tăng uy tín và giảm rủi ro bị đánh giá là tài khoản "cá nhân" khi xét duyệt.

**Phân bổ email cho 3 cổng:**
- PayPal Business: `payments@[store].com` hoặc email chính
- Payoneer: email riêng biệt (VD: `payoneer@[store].com`) — Payoneer **không cho liên kết nhiều tài khoản cùng email**
- 2Checkout: `2co@[store].com` hoặc email business chính

### 2.2 Số Điện Thoại Nhận OTP

- Dùng số điện thoại **đang hoạt động, luôn bên người** — cả 3 cổng đều gửi OTP khi đăng nhập và khi phát sinh thay đổi nhạy cảm.
- Nếu dùng số di động VN: đảm bảo SIM không bị khóa/hết hạn trong quá trình xác minh (thường kéo dài 5–10 ngày).
- Khuyến nghị: Chuẩn bị **1 số chính** (dùng cho PayPal) và **1 số dự phòng** (dùng cho Payoneer hoặc 2Checkout) để tách bạch.

---

## PHẦN 3 — Thông Tin DN Khai Nhất Quán Trên Cả 3 Cổng

> **Nguyên tắc vàng:** Mọi thông tin phải **giống nhau ký tự ký tự** giữa các cổng. Sai lệch dù nhỏ (viết tắt tên, thiếu dấu phẩy địa chỉ) là lý do hàng đầu khiến tài khoản bị review thủ công, hold tiền, hoặc limit.

### 3.1 Bảng Thông Tin Cần Điền Thống Nhất

| Trường | Nội dung mẫu | Lưu ý |
|--------|-------------|-------|
| **Tên pháp lý (Legal name)** | Tên đúng trên ĐKKD, viết hoa đúng quy cách | VD: `CÔNG TY TNHH ABC` — không viết tắt thành `Cty TNHH ABC` |
| **Tên kinh doanh (DBA / Trade name)** | Tên store trên Etsy/Shopify | Điền nhất quán, không đổi giữa các cổng |
| **Địa chỉ đăng ký** | Địa chỉ đúng trên ĐKKD (số nhà, đường, phường, quận, tỉnh/TP) | Dùng format đầy đủ, không viết tắt phường/quận |
| **Mã số thuế (Tax ID / EIN)** | MST 10 hoặc 13 số trên ĐKKD | Quan trọng với 2Checkout và Payoneer |
| **Mô tả ngành (Business type / Category)** | `Print-on-Demand Retail / E-commerce` hoặc `Online Retail — Custom Printed Products` | Khai nhất quán, tránh khai quá chung chung ("General retail") |
| **Website** | URL store Etsy/Shopify đang hoạt động | Cần có ít nhất 1 trang sản phẩm; PayPal và 2Checkout có thể kiểm tra |
| **Số điện thoại DN** | Số hotline hoặc di động chính của người đại diện | Phải nhận được cuộc gọi quốc tế |
| **Email liên hệ** | Email business tạo ở Phần 2 | |

### 3.2 Mô Tả Ngành POD — Từ Ngữ Gợi Ý

Khai mô tả kinh doanh ngắn gọn, trung thực, tránh từ khóa nhạy cảm:

**Nên dùng:**
> "We operate an online print-on-demand retail store selling custom-designed apparel and merchandise (t-shirts, mugs, posters) to US customers via Etsy and Shopify. Products are fulfilled by third-party POD suppliers (Printful/Printify). Average order value: $25–$50 USD."

**Tránh dùng:** dropshipping (từ bị flag ở một số cổng), reseller, digital goods (nếu không bán), wholesale.

---

## PHẦN 4 — Tài Khoản Ngân Hàng / Thẻ Nhận Tiền

### 4.1 Yêu Cầu Tài Khoản Ngân Hàng

| Cổng | Phương thức rút tiền | Ngân hàng VN được hỗ trợ | Lưu ý |
|------|---------------------|--------------------------|-------|
| **PayPal** | Rút về thẻ Visa debit VN (quy đổi VND) | Vietcombank, Techcombank, ACB, MB Bank, VPBank... | Phí rút: 60.000 VND/lần; tỷ giá PayPal thấp hơn thị trường ~3–4%; tối thiểu $10 |
| **Payoneer** | Rút về tài khoản ngân hàng VN (VND) hoặc giữ USD trong Payoneer | Hầu hết ngân hàng VN qua SWIFT | Có thể rút USD gốc; phí rút ~$1.5/lần nếu về ngân hàng VN |
| **2Checkout** | Chuyển khoản quốc tế (wire transfer) hoặc qua Payoneer | Cần tài khoản nhận USD hoặc liên kết Payoneer | Ngưỡng thanh toán tối thiểu thường $100 |

### 4.2 Xác Minh Ngân Hàng — PayPal Micro-Deposit

PayPal xác minh tài khoản ngân hàng bằng cách gửi **2 khoản tiền nhỏ** (mỗi khoản $0.01–$0.99 USD) vào tài khoản của bạn:

1. Sau khi liên kết ngân hàng/thẻ, chờ **1–3 ngày làm việc**.
2. Kiểm tra sao kê ngân hàng để tìm 2 khoản micro-deposit.
3. Nhập chính xác 2 số tiền đó vào giao diện PayPal để hoàn tất xác minh.
4. Lưu ý: Một số ngân hàng VN **gộp 2 khoản thành 1 dòng** — nếu vậy, liên hệ ngân hàng hỏi chi tiết giao dịch.
5. Các khoản tiền này sẽ **tự động được hoàn lại** sau khi xác minh thành công.

### 4.3 Khuyến Nghị Tài Khoản Ngân Hàng

- Mở **tài khoản thanh toán quốc tế** tại Vietcombank hoặc Techcombank (hỗ trợ tốt với PayPal và nhận SWIFT).
- Nếu muốn giữ USD, tham khảo mở tài khoản ngoại tệ (USD) tại VCB — yêu cầu có hợp đồng xuất khẩu dịch vụ [cần CEO xác minh với ngân hàng về điều kiện cụ thể].
- Chuẩn bị sao kê 3 tháng gần nhất để dùng làm proof of address.

---

## PHẦN 5 — Tiêu Chí "Sẵn Sàng Mở Cổng" & Thứ Tự Khuyến Nghị

### 5.1 Checklist "Sẵn Sàng" Trước Khi Đăng Ký

Tick tất cả các ô dưới đây trước khi bắt đầu:

- [ ] CCCD 2 mặt — scan màu, rõ nét, đủ 4 góc, file < 10 MB
- [ ] ĐKKD — scan màu tất cả trang, thấy rõ con dấu đỏ
- [ ] Sao kê ngân hàng hoặc hóa đơn tiện ích — không quá 3 tháng, có tên + địa chỉ
- [ ] Email doanh nghiệp riêng đã tạo và đăng nhập được
- [ ] Số điện thoại nhận OTP — đang hoạt động, sóng ổn định
- [ ] Thẻ Visa debit ngân hàng VN (để liên kết PayPal)
- [ ] Website/store có ít nhất 1 sản phẩm, URL hoạt động
- [ ] Bảng thông tin DN (Phần 3.1) đã điền đầy đủ và nhất quán
- [ ] Ảnh selfie với CCCD (một số cổng yêu cầu trong quá trình onboarding)

### 5.2 Thứ Tự Mở Cổng Khuyến Nghị

```
BƯỚC 1: PayPal Business  →  BƯỚC 2: Payoneer  →  BƯỚC 3: 2Checkout
```

**Lý do thứ tự này:**

| # | Cổng | Lý do ưu tiên |
|---|------|---------------|
| 1 | **PayPal Business** | Chiếm ~45% preference của người mua Mỹ trên Etsy; dễ onboard nhất; cần liên kết sớm để Etsy chấp nhận payout. Xác minh thường 1–3 ngày. |
| 2 | **Payoneer** | Nền tảng nhận tiền từ Etsy/Shopify trực tiếp (Etsy Payments → Payoneer); thường yêu cầu thêm document cho tài khoản business VN — chuẩn bị sau khi đã quen flow với PayPal. |
| 3 | **2Checkout** | Phức tạp nhất (cần review thủ công cho business mới); phù hợp khi đã có doanh thu chứng minh, mở thêm kênh thanh toán trực tiếp cho website riêng. Không cần thiết ngay ở giai đoạn đầu nếu dùng Etsy/Shopify Payments. |

### 5.3 Thời Gian Xét Duyệt Ước Tính

| Cổng | Thời gian thông thường | Yếu tố ảnh hưởng |
|------|----------------------|-----------------|
| PayPal | 1–3 ngày làm việc | Tài liệu rõ ràng → thường dưới 24h |
| Payoneer | 3–7 ngày làm việc | Có thể yêu cầu thêm document |
| 2Checkout | 5–10 ngày làm việc | Review thủ công; có thể yêu cầu giải thích mô hình kinh doanh |

---

## PHẦN 6 — Phòng Ngừa Rủi Ro Hold / Limit

- **Đừng nhận tiền quá lớn ngay lập tức:** Các cổng có thể hold nếu doanh số tăng đột biến trong 30 ngày đầu. Khởi đầu ở mức volume thấp (~$500/tháng).
- **Không dùng VPN khi đăng nhập** vào tài khoản cổng thanh toán — IP không khớp với địa chỉ đăng ký là lý do phổ biến bị flag.
- **Khai mô tả sản phẩm trung thực** trong profile merchant — nếu sau này có chargeback cao (>1%) PayPal/Payoneer sẽ yêu cầu thêm tài liệu.
- **Lưu tất cả email xác nhận** từ các cổng vào 1 thư mục riêng — cần khi liên hệ support.
- **Không thay đổi thông tin cốt lõi** (tên, địa chỉ, ngân hàng) trong 30 ngày đầu sau khi xác minh.

---

## PHỤ LỤC — Nghĩa Vụ Thuế Khi Nhận USD (MẪU — CẦN KẾ TOÁN RÀ SOÁT)

> **CẢNH BÁO: Phần này là thông tin tham khảo tổng quát, KHÔNG phải tư vấn pháp lý hay kế toán. Doanh nghiệp cần tham vấn kế toán/kiểm toán trước khi áp dụng. Quy định có thể thay đổi.**

### Thuế thu nhập doanh nghiệp (TNDN)
Doanh thu từ bán hàng POD cho khách nước ngoài (xuất khẩu dịch vụ/hàng hóa) là **doanh thu chịu thuế TNDN tại Việt Nam**. Thuế suất TNDN phổ thông: **20%** trên lợi nhuận sau chi phí hợp lệ. Doanh nghiệp vừa và nhỏ có thể được áp dụng ưu đãi [cần kế toán xác nhận điều kiện].

### Thuế giá trị gia tăng (GTGT)
Xuất khẩu hàng hóa/dịch vụ ra nước ngoài thường được áp dụng thuế suất GTGT **0%** (theo Điều 9, Luật Thuế GTGT) — nhưng cần đủ hồ sơ chứng minh xuất khẩu (chứng từ thanh toán quốc tế, invoice). [cần kế toán xác nhận với ngành POD cụ thể]

### Thuế nhà thầu nước ngoài (FCT — Foreign Contractor Tax)
Phát sinh khi **doanh nghiệp VN thanh toán cho nhà cung cấp nước ngoài** (VD: trả phí Printful, Printify, Canva). Phía trả tiền (doanh nghiệp VN) có trách nhiệm khấu trừ và nộp thay. Thuế suất: 5% TNCN hoặc 1–5% TNDN tùy loại dịch vụ. [cần kế toán rà soát từng giao dịch cụ thể]

### Kê khai ngoại tệ
Doanh nghiệp nhận ngoại tệ (USD) qua PayPal/Payoneer cần **hạch toán đúng tỷ giá hối đoái** tại ngày nhận tiền. Chênh lệch tỷ giá là khoản thu nhập/chi phí tài chính phải kê khai.

### Báo cáo giao dịch ngoại tệ
Ngân hàng Nhà nước VN yêu cầu báo cáo giao dịch ngoại tệ lớn. Doanh nghiệp cần lưu trữ đầy đủ invoice, chứng từ giao dịch quốc tế để đối chiếu khi thanh tra.

---

*Tài liệu này được tạo ngày 2026-06-25. Cần cập nhật khi quy định của các cổng thanh toán hoặc pháp luật VN thay đổi.*
*Phần nghĩa vụ thuế là MẪU — bắt buộc tham vấn kế toán/kiểm toán trước khi thực hiện.*
