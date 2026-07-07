# 10 — THỰC THI Việc 2: Mở Payoneer + 2Checkout/Verifone (Cổng Backup)

> TL;DR: CEO cần **tự làm** cả hai cổng này vì đều yêu cầu KYC định danh cá nhân/DN (upload giấy tờ, xác minh khuôn mặt hoặc video). AI đã chuẩn bị đầy đủ: giấy tờ cần, các bước điền, lưu ý phí/tỷ giá (từ VERIFY-1) và khi nào kích hoạt từng cổng. **Payoneer mở trước** (dùng làm kênh payout trung gian, phí FX thấp hơn), **2Checkout mở sau** (dự phòng khi PayPal hold kéo dài hoặc cần Merchant of Record).
>
> ⚙️ Bước: **W1-02** · owner: **Human** · cổng: **NEED-INFO** (KYC) · trạng thái: **HUMAN (đã giao CEO)**.
> Vì sao AI không làm thay: cả Payoneer và 2Checkout đều yêu cầu chủ tài khoản tự định danh (CCCD/hộ chiếu, ĐKKD, đôi khi video call KYC) — không thể uỷ quyền cho AI.

---

## PHẦN A — PAYONEER

### A.0. Bối cảnh & Vai trò trong Stack

Payoneer không phải cổng nhận tiền trực tiếp từ khách hàng trên Shopify store. Vai trò đúng với mô hình POD Việt Nam:

| Tình huống | Payoneer làm gì |
|---|---|
| **Bán trên Etsy** | Nhận payout từ Etsy (phí 1%) — đây là cổng phí thấp nhất toàn stack |
| **Nhận payout từ 2Checkout** | 2Checkout chuyển USD sang Payoneer (bỏ qua FX của 2CO, tiết kiệm 2–5%) |
| **Rút về VND** | Payoneer → tài khoản ngân hàng VN (FX markup lên đến 2% trên mid-market) |
| **Tương lai** | Có thể dùng thẻ Payoneer để chi trả phí Shopify/ads trực tiếp bằng USD (giảm lần FX) |

**Phí tổng hợp (từ VERIFY-1):**
- Nhận từ marketplace (Etsy): **1%**
- Nhận qua payment request (khách trả thẻ): **3%**
- FX USD → VND khi rút: **lên đến 2%**
- Phí rút về ngân hàng VN: **$1.50/lần** (nếu < $50K/tháng) hoặc **$4 cố định** nếu rút < $400
- Phí tài khoản hàng năm: **$29.95/năm** (miễn nếu nhận > $2,000/12 tháng — gần như chắc miễn phí nếu store chạy ổn)

> [cần CEO xác minh] Tỷ giá FX thực tế USD→VND tại Payoneer — vào payoneer.com sau khi tạo account, kiểm tra live rate trước khi rút lần đầu.

---

### A.1. Chuẩn Bị Giấy Tờ (Gom 1 Lần — 15 Phút)

- [ ] **CCCD/CMND** còn hạn — scan/chụp rõ mặt trước + mặt sau (file ≤ 4 MB, định dạng JPG/PNG/PDF).
- [ ] **Giấy ĐKKD** — bản scan rõ, đúng tên pháp lý, địa chỉ và mã số thuế.
- [ ] **Email doanh nghiệp** (khuyến nghị dùng cùng email đã dùng cho store, không dùng Gmail cá nhân).
- [ ] **Số điện thoại** nhận OTP/xác minh.
- [ ] **Thông tin ngân hàng nhận tiền VND:** tên ngân hàng, số tài khoản, tên chủ tài khoản, SWIFT code (cần khi liên kết local bank).
- [ ] **Địa chỉ kinh doanh chính xác** (khớp ĐKKD).
- [ ] *Tùy chọn nhưng nên có:* Trang web store (URL Shopify/Etsy) để khai business category.

---

### A.2. Các Bước Đăng Ký

**Bước 1 — Tạo tài khoản**
- [ ] Truy cập: **payoneer.com → Sign Up → Business** (KHÔNG chọn Individual nếu đã có ĐKKD).
- [ ] Điền: tên pháp lý (khớp ĐKKD), địa chỉ, mã số thuế, email doanh nghiệp.
- [ ] **Business type:** chọn "Registered Business" (doanh nghiệp đã đăng ký).
- [ ] **Business category:** chọn "E-commerce / Retail" → mô tả: "Print-on-demand apparel, sell to US customers, no inventory held."
- [ ] **Doanh thu dự kiến hàng tháng:** khai thực tế, khiêm tốn giai đoạn đầu (vd: < $1,000/tháng).

**Bước 2 — Xác minh danh tính (KYC)**
- [ ] Upload CCCD/CMND (mặt trước + mặt sau).
- [ ] Upload Giấy ĐKKD.
- [ ] *Có thể có:* selfie kèm giấy tờ hoặc video call ngắn với agent Payoneer (tùy đánh giá rủi ro tài khoản).
- [ ] Xác minh email + số điện thoại qua OTP.
- [ ] Chờ duyệt: thông thường **1–3 ngày làm việc**; trường hợp phức tạp hơn có thể lên đến 7 ngày.

**Bước 3 — Thiết lập Receiving Account (Nhận USD)**
- [ ] Vào **"Receive Payments" → "Global Payment Service"**.
- [ ] Payoneer cấp cho bạn một số tài khoản USD ảo tại Mỹ (US Bank Account Number + Routing Number) — dùng số này để khai làm địa chỉ payout trên Etsy hoặc 2Checkout.
- [ ] Ghi lại: **Account Number, Routing Number, Beneficiary Name** (sẽ cần điền vào Etsy/2Checkout).

**Bước 4 — Liên kết ngân hàng VN để rút tiền**
- [ ] Vào **"Withdraw" → "Bank Account"** → thêm tài khoản ngân hàng VND của bạn.
- [ ] Điền: tên ngân hàng, số tài khoản, SWIFT code (tra cứu tại trang web ngân hàng hoặc Google "<tên ngân hàng> SWIFT code Vietnam").
- [ ] Payoneer có thể gửi micro-deposit để xác minh tài khoản (1–3 ngày). Confirm số tiền nhận được.

**Bước 5 — Cài đặt payout tự động (tùy chọn)**
- [ ] Vào **"Settings" → "Auto Withdrawal"** → bật nếu muốn tự rút về ngân hàng VN theo lịch.
- [ ] Hoặc để thủ công (rút khi cần, kiểm soát timing FX tốt hơn).

---

### A.3. Lưu Ý Phí & Tỷ Giá — Đọc Kỹ Trước Khi Rút

| Tình huống rút | Phí | Gợi ý |
|---|---|---|
| Rút USD → VND (< $400) | $4 cố định | Tránh rút nhiều lần nhỏ. Gom về rút 1 lần ≥ $400 |
| Rút USD → VND (≥ $400, < $50K/tháng) | $1.50 + FX ~2% | Hợp lý. Xác nhận tỷ giá live trước khi bấm |
| Rút USD → VND (≥ $50K/tháng) | 0.5% + FX ~2% | Ở giai đoạn này bạn đã scale, cân nhắc wire trực tiếp |
| Nhận payout từ Etsy | 1% | Phí thấp nhất toàn stack |
| Nhận payout từ 2Checkout | Miễn phí | 2CO không tính phí khi chuyển sang Payoneer |

> **Chiến lược rút tiền:** Tích lũy đủ $500–$1,000 rồi rút 1 lần → phí cố định $1.50 amortize xuống còn 0.15–0.3% thay vì $4 nếu rút từng $200.

---

### A.4. Khai Đúng Mô Hình POD — Tránh Bị Đình Chỉ Account

- Khai **đúng mô hình POD** (Print-on-Demand), không nói là "shipping physical goods" thông thường — Payoneer có thể hỏi thêm nếu thấy profile không khớp dòng tiền.
- Nếu Payoneer hỏi thêm giấy tờ về lĩnh vực kinh doanh: chuẩn bị **1 trang mô tả ngắn bằng tiếng Anh** (POD model, partner: Printify/Printful, channel: Shopify/Etsy, target market: US).
- **Không** để số dư lớn bất thường trong account ngay từ đầu — rút đều đặn để tránh trigger review.

---

### A.5. Tiêu Chí "XONG" — Nghiệm Thu Payoneer

- ✅ Tài khoản **Business, trạng thái Active/Verified** (không còn "Pending" bắt buộc).
- ✅ Nhận được **số tài khoản USD ảo** (US Account Number + Routing Number).
- ✅ Đã liên kết tài khoản ngân hàng VN và **xác minh thành công**.
- ✅ Thực hiện **1 giao dịch test nhỏ** (nhận từ Etsy hoặc tự chuyển từ ví khác ≥ $10) → đã về Payoneer.
- ✅ Ghi lại thông tin Receiving Account (Account #, Routing #) vào vault để dùng ở W1-04 (cấu hình store) và 2Checkout setup.

---

### A.6. Báo Lại Hệ Thống

Khi xong, nhắn một trong các mốc — máy cập nhật `10-run-state.md` và chạy tiếp:
- **"Payoneer verified + có US account number"** → mở khoá: khai thông tin Payoneer vào Etsy (nếu bán Etsy) và vào 2Checkout (phần B dưới).
- **"Payoneer bị từ chối KYC"** → máy đề xuất phương án thay thế (Wise Business hoặc nhận thẳng USD qua bank wire).

---
---

## PHẦN B — 2CHECKOUT / VERIFONE

### B.0. Bối Cảnh & Khi Nào Kích Hoạt

2Checkout (nay là **Verifone**) là cổng **Merchant of Record (MoR)** — họ đứng tên bán hàng về mặt pháp lý với khách hàng, xử lý VAT/GST quốc tế thay bạn. Đây là lợi thế lớn khi bán toàn cầu.

**Nên kích hoạt 2Checkout khi nào:**

| Kịch bản | Ưu tiên 2Checkout |
|---|---|
| PayPal hold kéo dài > 7 ngày liên tiếp | Cao — chuyển ngay sang 2CO làm cổng chính |
| Muốn bán ở EU/UK (cần xử lý VAT tự động) | Cao — 2CO lo VAT thay bạn |
| Store đã có doanh thu ổn định ($500+/tháng) | Trung bình — bật song song với PayPal |
| Giai đoạn test ban đầu (< $500/tháng) | Thấp — rolling reserve chiếm vốn nhỏ |

**Phí tổng hợp (từ VERIFY-1 — gói 2SELL phù hợp POD):**
- Phí giao dịch: **3.5% + $0.35/đơn**
- Phí cross-border (khách Mỹ): **+2%** → tổng **5.5% + $0.35**
- FX nếu 2CO convert sang VND: **+2–5%** thêm vào (tổng lên đến 10.5%)
- **Khuyến nghị:** Nhận payout bằng **USD qua Payoneer** (tránh FX của 2CO) → tổng phí ~5.5% + $0.35
- Rolling reserve: **% doanh thu, giữ 90–180 ngày** [cần CEO xác minh % cụ thể khi nói chuyện với 2CO sales]

---

### B.1. Chuẩn Bị Giấy Tờ (Gom 1 Lần — 15 Phút)

- [ ] **CCCD/CMND** còn hạn — scan rõ mặt trước + mặt sau.
- [ ] **Giấy ĐKKD** còn hiệu lực — bản scan rõ.
- [ ] **Mã số thuế doanh nghiệp** (Tax ID / MST).
- [ ] **Email doanh nghiệp** (nhận thông báo, invoice, hợp đồng từ 2CO).
- [ ] **URL website/store** — bắt buộc (2CO cần review store trước khi duyệt).
  > Nếu store chưa có URL: tạm dùng landing page trên Shopify (ngay cả khi chưa launch) hoặc link Etsy store. Bổ sung URL chính thức sau.
- [ ] **Thông tin payout:** chọn phương thức nhận tiền — khuyến nghị **Payoneer** (cần có US Account Number từ phần A).
- [ ] **Mô tả sản phẩm/dịch vụ bằng tiếng Anh:** "Print-on-demand custom apparel (t-shirts, hoodies, mugs). Products are manufactured and shipped by US-based POD partners (Printify/Printful) to US customers. No inventory held by merchant."
- [ ] **Chính sách refund/return bằng tiếng Anh** (tóm tắt 3–5 dòng) — 2CO yêu cầu xem trước khi duyệt.

---

### B.2. Các Bước Đăng Ký

**Bước 1 — Tạo tài khoản merchant**
- [ ] Truy cập: **verifone.cloud** (hoặc 2checkout.com — cả hai dẫn đến cùng nơi) → **"Sign Up as Merchant"**.
- [ ] Chọn **gói 2SELL** (3.5% + $0.35/giao dịch) — phù hợp POD bán một lần. *Tránh 2MONETIZE trừ khi cần MoR đầy đủ cho digital goods.*
- [ ] Điền thông tin doanh nghiệp: tên pháp lý, địa chỉ, MST, quốc gia (Vietnam), email.

**Bước 2 — Khai báo store & sản phẩm**
- [ ] Điền **URL website/store** (bắt buộc).
- [ ] **Mô tả business model:** dùng đoạn tiếng Anh đã chuẩn bị ở B.1.
- [ ] **Loại sản phẩm:** Physical goods (POD apparel/accessories).
- [ ] **Thị trường bán:** United States (và các nước khác nếu muốn — 2CO lo VAT).
- [ ] **Doanh thu dự kiến:** khai thực tế, khiêm tốn (vd: $1,000–$5,000/tháng giai đoạn đầu).

**Bước 3 — Upload giấy tờ KYC**
- [ ] Upload CCCD/CMND (mặt trước + mặt sau).
- [ ] Upload Giấy ĐKKD.
- [ ] Điền thông tin đại diện pháp lý (Ultimate Beneficial Owner — UBO): tên, ngày sinh, địa chỉ, % sở hữu.
- [ ] *Tùy trường hợp:* 2CO có thể yêu cầu thêm giấy tờ (bảng kê ngân hàng 3 tháng, hóa đơn tiện ích xác minh địa chỉ) — phản hồi trong vòng 48 giờ.

**Bước 4 — Cấu hình payout về Payoneer (khuyến nghị)**
- [ ] Vào **Account Settings → Payout Details**.
- [ ] Chọn **"Payoneer"** làm phương thức nhận tiền.
- [ ] Điền US Account Number + Routing Number từ Payoneer (đã lấy ở phần A, bước 3).
- [ ] *Hoặc chọn Wire Transfer (USD) nếu ngân hàng của bạn hỗ trợ nhận USD trực tiếp — tra SWIFT code ngân hàng VN.*

**Bước 5 — Thiết lập sản phẩm & tích hợp**
- [ ] Tạo ít nhất **1 sản phẩm test** trong 2CO dashboard.
- [ ] Lấy **API credentials** (Merchant Code + Secret Key) để tích hợp vào Shopify (W1-04).
- [ ] Cài Shopify App: **2Checkout Payment Gateway** (tìm trong Shopify App Store).
- [ ] Test thanh toán $1 thật trước khi go-live.

**Bước 6 — Chờ duyệt**
- [ ] 2Checkout review: thông thường **2–5 ngày làm việc** cho merchant mới.
- [ ] Theo dõi email — họ có thể hỏi thêm thông tin về sản phẩm, refund policy, hoặc business model.
- [ ] Nếu bị từ chối: liên hệ **merchants@verifone.com** hoặc **sales@2checkout.com**, hỏi lý do và tài liệu bổ sung cần thiết.

---

### B.3. Hiểu Rolling Reserve — Quản Lý Dòng Tiền

Rolling reserve là khoản 2CO giữ lại (% doanh thu) trong 90–180 ngày như bảo đảm rủi ro chargeback. Đây là rào cản dòng tiền lớn nhất với merchant mới:

| Kịch bản | Ảnh hưởng |
|---|---|
| Reserve 10%, giữ 180 ngày, doanh thu $1,000/tháng | 2CO giữ $100/tháng; sau 6 tháng bắt đầu trả lại cuốn chiếu |
| Reserve 5%, giữ 90 ngày, doanh thu $1,000/tháng | 2CO giữ $50/tháng; sau 3 tháng trả lại |
| Doanh thu tăng nhanh ($3,000/tháng) | Giữ $150–$300/tháng liên tục — ảnh hưởng lớn hơn |

**Cách giảm thiểu tác động:**
- Mở 2Checkout **song song với PayPal** (không thay thế hoàn toàn) → chia nhỏ tổng rolling reserve.
- Theo dõi **chargeback rate < 0.5%** (mức an toàn) → 2CO có thể giảm reserve % sau 3–6 tháng hoạt động tốt.
- Khai báo **chính sách refund rõ ràng** ngay từ đầu → giảm chargeback.

> [cần CEO xác minh] Tỷ lệ rolling reserve % cụ thể cho merchant VN mới — hỏi thẳng team 2CO/Verifone khi nộp hồ sơ.

---

### B.4. Lợi Thế Merchant of Record — Khi Nào Thực Sự Quan Trọng

2Checkout đứng tên là Merchant of Record có nghĩa:
- **Họ thu và nộp VAT/GST** cho các quốc gia (EU, UK, Canada, Úc) thay bạn — bạn không cần đăng ký VAT ở từng nước.
- **Chargeback do gian lận:** 2CO xử lý một phần rủi ro fraud (tùy gói, đọc kỹ T&C).
- **Hóa đơn xuất cho khách:** 2CO xuất hóa đơn với tên của họ — phù hợp nếu bạn không muốn lộ tên DN VN.

> Với khách Mỹ (US) là thị trường chính giai đoạn đầu: lợi thế MoR về VAT **chưa quá quan trọng** (các bang Mỹ có nexus riêng, POD partner thường lo). MoR trở nên quan trọng khi **mở rộng sang EU/UK**.

---

### B.5. Tích Hợp Shopify — Tóm Tắt

Khi 2CO đã duyệt và bạn đã có API credentials:
- [ ] Shopify Admin → Settings → Payments → Third-party providers → tìm "2Checkout".
- [ ] Nhập Merchant Code + Secret Key.
- [ ] Bật "Test mode" → thực hiện giao dịch test $1.
- [ ] Tắt "Test mode" → go-live.
- [ ] Shopify tính thêm **0.5–2% transaction fee** nếu không dùng Shopify Payments — đây là chi phí cần tính vào ROAS (xem VERIFY-1). [cần CEO xác minh gói Shopify đang dùng]

---

### B.6. Tiêu Chí "XONG" — Nghiệm Thu 2Checkout

- ✅ Tài khoản 2Checkout **trạng thái Active/Approved** (nhận được email xác nhận từ 2CO).
- ✅ Khai đúng **POD retail + ĐKKD + pháp nhân VN**.
- ✅ Cấu hình payout về **Payoneer (USD)** — không để 2CO tự convert sang VND (phí cao).
- ✅ Tích hợp vào **Shopify thành công** (test mode chạy OK).
- ✅ Thực hiện **1 giao dịch test thật $1** → tiền về Payoneer.
- ✅ Ghi lại **rolling reserve % và thời gian giữ** (lấy từ email xác nhận hoặc dashboard 2CO) vào vault.

---

### B.7. Báo Lại Hệ Thống

Khi xong, nhắn một trong các mốc — máy cập nhật `10-run-state.md`:
- **"2Checkout approved + tích hợp Shopify xong"** → mở khoá: test đơn hàng thật (W1-03) qua 2CO, ghi rolling reserve % vào tài liệu tài chính.
- **"2Checkout từ chối"** → máy kích hoạt phương án thay thế: Paddle (tương tự MoR) hoặc Stripe (nếu mở tài khoản qua entity khác).
- **"PayPal hold kéo dài > 7 ngày"** → máy ưu tiên 2CO làm cổng chính ngay lập tức.

---

## TỔNG HỢP — THỨ TỰ LÀM & THỜI GIAN DỰ KIẾN

| Việc | Thời gian CEO làm | Thời gian chờ duyệt | Ưu tiên |
|---|---|---|---|
| **A. Mở Payoneer** | 30–45 phút | 1–3 ngày | Làm ngay sau W1-01 (PayPal) |
| **B. Mở 2Checkout** | 45–60 phút | 2–5 ngày | Làm sau khi có URL store (W1-04) |

**Lý do thứ tự:** Payoneer cần xong trước để có US Account Number (địa chỉ payout cho 2Checkout và Etsy). 2Checkout cần URL store để 2CO review — làm sau khi store có domain/URL thật.

---

## LƯU Ý CHUNG

- **Dùng email doanh nghiệp nhất quán** cho cả 3 cổng (PayPal, Payoneer, 2Checkout) — dễ tra cứu và tránh nhầm lẫn.
- **Lưu credentials vào nơi an toàn** (password manager — KHÔNG để trong file text hoặc spreadsheet không mã hoá): API keys, Merchant Code, Secret Key.
- **Chụp screenshot** màn hình dashboard sau khi mỗi cổng verified — lưu vào vault làm bằng chứng nghiệm thu.

---

> ⚠️ **CẢNH BÁO — MẪU / CẦN CHUYÊN GIA RÀ:** Các thông tin liên quan đến **nghĩa vụ thuế** trong tài liệu này (VAT/GST, thuế nhà thầu nước ngoài, kê khai thu nhập ngoại tệ về Việt Nam) chỉ là **mô tả sơ bộ mang tính tham khảo**. Đây KHÔNG phải tư vấn pháp lý hay kế toán chính thức. CEO/DN cần tham vấn **kế toán/tư vấn thuế có chuyên môn** trước khi đưa ra quyết định kê khai và nộp thuế thực tế. Quy định thuế Việt Nam liên quan đến thu nhập ngoại tệ và thương mại điện tử xuyên biên giới thay đổi thường xuyên.

---

*File được tạo tự động bởi AI (W1-02, vn-opc-claude, ngày 25/06/2026). Số liệu phí trích từ VERIFY-1 — CEO cần xác minh trực tiếp với cổng thanh toán trước khi áp dụng vào kế hoạch tài chính chính thức.*
