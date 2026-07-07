# SOP: Cài Meta Pixel + Conversions API (CAPI) & Verify 4 Event — Store Shopify POD thị trường Mỹ

> **Bước:** W1-06 · **Người thực hiện:** Founder (F) · **Deadline:** Ngày 2–4 của kế hoạch 30 ngày.
> **Phụ thuộc:** W1-04 (store Shopify live) phải hoàn thành trước.

---

## TL;DR

Cài Meta Pixel + Conversions API qua app chính thức "Facebook & Instagram" trên Shopify — không cần code — để Shopify tự gửi event cả browser lẫn server-side. Sau khi cài, dùng Test Events trong Events Manager để xác nhận 4 event (ViewContent, AddToCart, InitiateCheckout, Purchase) hiển thị xanh, deduplicated, và Purchase được xếp ưu tiên #1 trong Aggregated Event Measurement. Đây là điều kiện tiên quyết bất khả kháng trước khi chi bất kỳ đồng nào cho ads.

---

## Phần 1 — Chuẩn bị trước khi cài

### 1.1 Tài khoản & quyền cần có

| Hạng mục | Yêu cầu | Ghi chú |
|---|---|---|
| Meta Business Manager | Tài khoản đã tạo tại business.facebook.com | Nếu chưa có: tạo mới, xác thực email |
| Quyền trong Business Manager | **Admin** hoặc **Employee có quyền Manage** trên Ad Account + Pixel | Nếu dùng tài khoản Facebook cá nhân riêng → cần thêm chính mình làm Admin |
| Ad Account | Đã tạo trong Business Manager | Gắn thẻ thanh toán hợp lệ (dù chưa chi) |
| Tài khoản Shopify | Quyền **Owner** hoặc **Staff có quyền Apps** | Cần quyền cài app từ App Store |
| Store đang live | W1-04 đã hoàn thành | Cần URL store để verify domain |
| Trình duyệt | Chrome hoặc Firefox desktop | Dùng để cài Meta Pixel Helper extension |

### 1.2 Tool kiểm tra cần cài sẵn

- **Meta Pixel Helper** (Chrome Extension): cài tại Chrome Web Store — dùng để xem event kích hoạt trên trình duyệt theo thời gian thực.
- **Test Events** trong Meta Events Manager: không cần cài thêm, có sẵn trong giao diện Events Manager.

### 1.3 Kiểm tra trước khi bắt đầu

- [ ] Store Shopify đang live (không phải password-protected cho khách)
- [ ] Đã đăng nhập vào Business Manager bằng đúng tài khoản Admin
- [ ] Có thể truy cập events.facebook.com (Events Manager)
- [ ] Trình duyệt đã tắt extension ad-blocker tạm thời (để test browser Pixel)

---

## Phần 2 — Tại sao cần cả Pixel (browser) VÀ CAPI (server-side)

| Kênh | Cơ chế | Điểm yếu nếu chỉ dùng một mình |
|---|---|---|
| **Pixel (browser)** | JavaScript chạy trên trình duyệt người dùng, gửi event về Meta | Bị chặn bởi iOS 14.5+ (App Tracking Transparency), Safari ITP, ad-blocker, VPN. Ước tính mất **20–40% signal** trên thị trường Mỹ |
| **CAPI (server-side)** | Shopify gửi event thẳng từ server của Shopify về Meta, không qua trình duyệt | Không có browser context nên match quality thấp hơn nếu dùng đơn lẻ |
| **Cả hai (khuyến nghị)** | Pixel gửi event browser; CAPI gửi event server cùng lúc; Meta deduplication ghép cặp → tín hiệu đầy đủ, EMQ cao nhất | Cần deduplication đúng để tránh đếm đôi |

**Kết luận thực chiến:** Với thị trường Mỹ năm 2025–2026, chỉ dùng Pixel browser mà không có CAPI thì sẽ mất tín hiệu Purchase đáng kể → thuật toán Meta tối ưu kém → ROAS thấp hơn thực tế. Bắt buộc phải cài cả hai.

---

## Phần 3 — Cài đặt: quy trình từng bước

### Bước 3.1 — Tạo Pixel trong Meta Events Manager

1. Truy cập **business.facebook.com** → chọn đúng Business Account.
2. Vào **Events Manager** (biểu tượng hình mạng lưới ở thanh trái, hoặc URL: `business.facebook.com/events_manager`).
3. Nhấn **+ Connect Data Sources** → chọn **Web** → **Connect**.
4. Chọn **Facebook Pixel** → nhấn **Connect**.
5. Đặt tên Pixel (ví dụ: `[TenStore]-Shopify-Pixel`) → nhấn **Continue**.
6. Khi hỏi "How do you want to connect your website?", chọn **Use a partner integration** → chọn **Shopify**.
7. Ghi lại **Pixel ID** (dãy số 15–16 chữ số) — sẽ dùng ở Bước 3.2.

> **Lưu ý:** Không nhấn "Add Code Manually" — Shopify sẽ tự làm việc này qua app.

### Bước 3.2 — Kết nối Shopify với Meta qua app "Facebook & Instagram"

1. Đăng nhập **admin.shopify.com** → vào **Apps** → **App Store**.
2. Tìm "**Facebook & Instagram**" (do Meta phát triển, publisher: Meta) → nhấn **Install**.
3. Sau khi cài, app sẽ yêu cầu **Connect Facebook Account** → đăng nhập bằng đúng tài khoản Facebook đang là Admin của Business Manager.
4. Kết nối các tài khoản:
   - **Business Manager:** chọn đúng BM của bạn.
   - **Ad Account:** chọn Ad Account đã chuẩn bị.
   - **Facebook Page:** chọn hoặc tạo Page (cần có Page để chạy ads).
   - **Pixel:** chọn Pixel vừa tạo ở Bước 3.1 (hoặc Shopify có thể tạo mới — nếu tạo mới thì cũng được, ghi lại ID mới).
5. Khi hỏi **Data Sharing Level**, chọn **Maximum** — đây là tùy chọn bật CAPI với dữ liệu đầy đủ nhất (email hash, phone hash, địa chỉ → tăng EMQ).
6. Bật **Conversions API** — toggle phải ở trạng thái **ON**. Shopify sẽ tự cấu hình server-side event mà không cần code thêm.
7. Xem lại **Event Sharing Summary** — kiểm tra danh sách event được chia sẻ có bao gồm: ViewContent, AddToCart, InitiateCheckout, Purchase.
8. Nhấn **Finish Setup**.

### Bước 3.3 — Bật Aggregated Event Measurement (AEM) và xếp thứ tự event

Đây là bước bắt buộc sau iOS 14 để ads đến người dùng iOS đo được conversion.

1. Trong **Events Manager**, chọn Pixel vừa kết nối.
2. Vào tab **Aggregated Event Measurement** (hoặc **Settings** → **Aggregated Event Measurement**).
3. Nhấn **Configure Web Events** → chọn domain store của bạn.
4. Nếu domain chưa được verify, thực hiện **Domain Verification** trước (xem Phần 3.4).
5. Sau khi domain verified, nhấn **Add Events** và xếp thứ tự ưu tiên:
   - **#1: Purchase** (bắt buộc ở vị trí #1 vì đây là conversion mục tiêu)
   - **#2: InitiateCheckout**
   - **#3: AddToCart**
   - **#4: ViewContent**
6. Nhấn **Save** → **Submit**.

> **Tại sao thứ tự quan trọng:** Meta chỉ cho phép đo tối đa 8 event/domain; người dùng iOS bị giới hạn 1 conversion event/user session. Nếu Purchase không ở #1, Meta có thể báo cáo sai conversion. Đây là thiết lập không thể bỏ qua.

### Bước 3.4 — Domain Verification

Domain verification xác nhận bạn là chủ sở hữu domain → điều kiện để AEM hoạt động.

**Cách 1 — DNS TXT record (khuyến nghị cho Shopify + domain ngoài):**
1. Trong Events Manager → **Settings** → **Brand Safety** → **Domains** → **Add Domain**.
2. Nhập domain store (ví dụ: `yourstore.com`) → chọn phương thức **DNS Verification**.
3. Meta cung cấp một TXT record (dạng: `facebook-domain-verification=xxxxxxxxxxxx`).
4. Đăng nhập vào nơi quản lý DNS của domain (GoDaddy / Namecheap / Cloudflare...).
5. Thêm TXT record với value Meta cung cấp → Save.
6. Quay lại Events Manager → nhấn **Verify Domain**. DNS propagation có thể mất 15 phút–24 giờ.

**Cách 2 — Meta tag trong HTML (nếu dùng domain Shopify .myshopify.com hoặc không quản lý DNS):**
1. Chọn phương thức **HTML File Upload** hoặc **Meta-tag Verification**.
2. Shopify thường đã nhúng meta tag tự động qua app Facebook & Instagram khi Data Sharing = Maximum.
3. Kiểm tra trong Shopify: **Online Store** → **Themes** → **Edit Code** → `theme.liquid` → tìm `facebook-domain-verification`.

---

## Phần 4 — Verify 4 Event: quy trình test thực tế

### Cách dùng Test Events trong Events Manager

1. Vào **Events Manager** → chọn Pixel → tab **Test Events**.
2. Nhập URL store vào ô "Test Browser Events" → nhấn **Open Website**.
3. Trình duyệt sẽ mở store với một **test session đặc biệt** — mọi action trên trang này sẽ hiện thời gian thực trong bảng Test Events bên trái.
4. Thực hiện từng hành động và kiểm tra event xuất hiện (xem Bảng 4.1 bên dưới).

### Bảng 4.1 — Hành động test và event mong đợi

| Event | Hành động cần làm | Kênh xuất hiện | Dấu hiệu "xanh" |
|---|---|---|---|
| **ViewContent** | Truy cập trang sản phẩm bất kỳ | Browser Pixel + CAPI | Hiện 2 dòng: "Browser" + "Server" trong Test Events |
| **AddToCart** | Nhấn nút "Add to Cart" trên trang sản phẩm | Browser Pixel + CAPI | 2 dòng tương ứng |
| **InitiateCheckout** | Vào trang Checkout (nhấn "Checkout") | Browser Pixel + CAPI | 2 dòng tương ứng |
| **Purchase** | Hoàn thành đơn hàng thật (xem Bảng 4.2 về cách tạo test order) | Browser Pixel + CAPI | 2 dòng; "Deduplicated" badge; trạng thái = xanh |

> **"Xanh" nghĩa là gì:** Event hiển thị trong cột "Status" với icon tích xanh, không có cảnh báo đỏ hay vàng. Cột "Match Key" có ít nhất 2–3 key (email, phone, external_id) → EMQ cao.

### Bảng 4.2 — Cách tạo test order để verify Purchase

**Vấn đề:** Không nên dùng thẻ thật để test liên tục. Shopify cung cấp môi trường test an toàn.

**Cách 1 — Bogus Gateway (khuyến nghị, không cần thẻ thật):**
1. Trong Shopify Admin → **Settings** → **Payments** → tắt tạm cổng thanh toán thật (PayPal) → bật **Bogus Gateway** (chỉ có ở store chưa live hoàn toàn).
2. Thực hiện đặt hàng từ đầu: vào store → thêm sản phẩm → checkout → nhập thẻ test: số `1`, tên bất kỳ, hết hạn tương lai, CVV `111`.
3. Đơn sẽ "thành công" → kiểm tra Test Events có Purchase không.
4. Sau khi verify xong → tắt Bogus Gateway, bật lại PayPal.

**Cách 2 — Dùng thẻ test Shopify Payments (nếu đã bật Shopify Payments):**
- Shopify cung cấp số thẻ test: `4242 4242 4242 4242`, hết hạn `12/26`, CVV `123`.
- Chỉ dùng khi store đang ở chế độ **Test mode** trong Shopify Payments.

**Cách 3 — Tạo discount 100% + đặt hàng thật (nếu muốn test toàn bộ luồng thật):**
1. Tạo discount code `TESTORDER100` = 100% off, single use.
2. Dùng thẻ thật (charge $0) hoặc thẻ prepaid.
3. Sau test → cancel + refund đơn trong Shopify Admin.

> **Lưu ý quan trọng:** Sau mỗi lần test Purchase, xóa test order khỏi Shopify và kiểm tra Events Manager xem "Active" events không bị ảnh hưởng.

---

## Phần 5 — Kiểm tra Deduplication (chống đếm đôi Pixel + CAPI)

### Deduplication hoạt động như thế nào

Khi cả Pixel và CAPI cùng gửi cùng 1 event (ví dụ Purchase), Meta có thể nhận 2 lần → tính 2 conversion → sai số liệu. Để tránh, cần đảm bảo cả hai kênh gửi cùng `event_id`.

### Shopify đã xử lý tự động chưa?

**Có** — khi dùng app Facebook & Instagram chính thức với CAPI bật, Shopify tự động:
- Gán cùng một `event_id` duy nhất (UUID) cho cả event Pixel browser và CAPI server của cùng 1 action.
- Meta sử dụng `event_id` này để ghép cặp và chỉ tính 1 lần.

### Cách xác nhận deduplication đang hoạt động

1. Trong Test Events, sau khi test Purchase, xem có dòng nào hiển thị badge **"Deduplicated"** không.
2. Trong Events Manager → **Overview** → xem cột **"Event Source"**: nếu thấy cả "Browser" và "Server" nhưng tổng count không bị nhân đôi so với số đơn thật → deduplication OK.
3. Kiểm tra trong **Diagnostics** (tab trong Events Manager): nếu có cảnh báo "Duplicate Events Detected" → cần điều tra (thường do cài Pixel thủ công song song với app — xem Phần 7 lỗi thường gặp).

---

## Phần 6 — Checklist nghiệm thu (điều kiện "GO" của W1-06)

### 6.1 Checklist kỹ thuật

- [ ] **4 event hiển thị trong Events Manager** (ViewContent, AddToCart, InitiateCheckout, Purchase) — cả Browser và Server.
- [ ] **Purchase event status = xanh** (tích xanh, không có warning đỏ/vàng).
- [ ] **Deduplicated** — không có cảnh báo duplicate; badge "Deduplicated" xuất hiện trong Test Events khi test Purchase.
- [ ] **Domain verified** — domain store hiển thị "Verified" trong Brand Safety → Domains.
- [ ] **AEM Purchase = #1** — trong Aggregated Event Measurement, Purchase xếp đầu danh sách.
- [ ] **App Facebook & Instagram status = Connected** — không có lỗi đỏ trong Shopify → Apps.

### 6.2 Kiểm tra EMQ (Event Match Quality)

EMQ là điểm Meta chấm mức độ dữ liệu khách hàng khi event được gửi (0–10). Cao hơn = Meta match được nhiều user hơn = thuật toán tối ưu tốt hơn.

| Mức EMQ | Đánh giá | Hành động |
|---|---|---|
| 7–10 | Tốt — GO | Tiến hành chạy ads |
| 4–6 | Chấp nhận được — lưu ý | Kiểm tra lại Data Sharing = Maximum; Xem Phần 7 |
| 0–3 | Yếu — DỪNG | Không chạy ads; debug trước |

**Cách xem EMQ:** Events Manager → chọn Pixel → tab **Overview** → cột "Event Match Quality" cạnh từng event.

**Cách tăng EMQ:**
- Đảm bảo **Data Sharing = Maximum** trong app Facebook & Instagram (gửi email hash, phone hash, địa chỉ, first/last name).
- Bật tính năng "Enhanced Matching" trong Pixel Settings (Shopify app thường bật tự động).
- Checkout của Shopify thu thập email + phone → đây là match key chính.

---

## Phần 7 — Lỗi thường gặp và cách xử lý

| Lỗi | Nguyên nhân hay gặp | Cách xử lý |
|---|---|---|
| **Purchase không xuất hiện trong Test Events** | 1. Bogus Gateway chưa bật đúng cách. 2. Checkout bị lỗi trước khi đến trang Order Confirmation. 3. Pixel/CAPI chưa kết nối đúng. | Kiểm tra lại từng bước trong Phần 3.2. Xem console trình duyệt (F12) tìm lỗi JS. Thử dùng Pixel Helper extension. |
| **Chỉ thấy "Browser" không thấy "Server" (CAPI không gửi)** | CAPI chưa được bật trong app, hoặc kết nối bị lỗi. | Vào Shopify → app Facebook & Instagram → kiểm tra toggle CAPI = ON. Disconnect và reconnect nếu cần. |
| **Duplicate Events cảnh báo** | Có 2 Pixel ID cùng kích hoạt (ví dụ: app gắn tự động + CEO dán thêm code thủ công vào theme.liquid). | Xóa code Pixel thủ công khỏi theme.liquid. Chỉ để app quản lý. Tìm trong Shopify: Online Store → Themes → Edit Code → `theme.liquid` → xóa đoạn `fbq('init', 'PIXEL_ID')` nếu có. |
| **Domain verification thất bại** | DNS chưa propagate; nhập sai TXT record. | Chờ 24h sau khi thêm TXT record. Dùng mxtoolbox.com để kiểm tra DNS TXT. |
| **AEM không cho phép chọn Purchase #1** | Domain chưa verified. | Hoàn thành domain verification (Phần 3.4) trước. |
| **EMQ thấp (dưới 4)** | Data Sharing không ở mức Maximum; checkout không thu thập đủ thông tin. | Đổi Data Sharing = Maximum. Đảm bảo form checkout có trường email và phone. |
| **Event xuất hiện nhưng không phải từ đúng store** | Test Events đang test sai URL. | Kiểm tra lại URL nhập vào Test Events — phải là URL store thật, có https. |
| **"Pixel not found" trên Meta Pixel Helper** | App chưa inject Pixel vào theme; theme đang dùng không tương thích. | Vào Shopify → Online Store → Themes → nhấn "..." → Edit Code → kiểm tra `theme.liquid` có `{{content_for_header}}` không (phải có để app inject). |

---

## Phần 8 — Sau khi verify xong: bước tiếp theo

Khi tất cả checklist 6.1 và EMQ ≥ 4 đã OK:

1. **Cập nhật 10-run-state.md:** W1-06 → trạng thái `DONE`, bằng chứng = screenshot Test Events có 4 event xanh.
2. **Chụp màn hình** Test Events (4 event xanh) + AEM (Purchase #1) → lưu vào `vault/03-Outputs/2026-06-25-.../W1-06-evidence/` làm bằng chứng nghiệm thu.
3. **Gỡ cổng W2-12:** Campaign Advantage+ có thể được cấu hình (nhưng chưa bật — vẫn cần CEO duyệt ngân sách).
4. **Gỡ cổng W3-19:** Retargeting có thể lên kế hoạch (dùng audience từ ViewContent/ATC đã có event).

---

## Phụ lục A — Tóm tắt nhanh (quick reference khi thực hiện)

```
THỨ TỰ THỰC HIỆN:
1. Tạo Pixel trong Events Manager → ghi Pixel ID
2. Cài app "Facebook & Instagram" trên Shopify → Data Sharing = Maximum → bật CAPI
3. Verify domain (DNS TXT record)
4. Cấu hình AEM: Purchase #1, InitiateCheckout #2, AddToCart #3, ViewContent #4
5. Test 4 event bằng Test Events (Bogus Gateway cho Purchase)
6. Kiểm tra deduplicated + EMQ ≥ 4
7. Chụp màn hình → cập nhật run state → báo CEO
```

---

## Phụ lục B — Tài liệu tham khảo chính thức

- Meta: Conversions API for Shopify — `developers.facebook.com/docs/marketing-api/conversions-api/partners/shopify`
- Meta: Aggregated Event Measurement — `developers.facebook.com/docs/marketing-api/aggregated-event-measurement`
- Meta: Event Match Quality — `www.facebook.com/business/help/765081237991015`
- Shopify Help: Facebook & Instagram App — `help.shopify.com/en/manual/promoting-marketing/analyze-marketing/facebook-pixel`
- Meta: Domain Verification — `developers.facebook.com/docs/sharing/domain-verification`

> **Lưu ý:** URLs trên là đường dẫn chính thức; nội dung cụ thể có thể thay đổi theo phiên bản Meta/Shopify. Kiểm tra ngày cập nhật khi truy cập.

---

*Tài liệu này là SOP kỹ thuật, không phải tài liệu pháp lý. Các thông số về Data Sharing và privacy cần tuân thủ CCPA (California) và điều khoản của Meta — tham khảo thêm với chuyên gia nếu cần.*

*Soạn: AI (W1-06) · 2026-06-25 · Trạng thái: SOP sẵn sàng — chờ Founder thực hiện khi store live (W1-04 DONE).*
