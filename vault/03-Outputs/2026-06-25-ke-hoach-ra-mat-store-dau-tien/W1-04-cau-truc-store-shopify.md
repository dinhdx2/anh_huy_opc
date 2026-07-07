# W1-04 — Bản Dựng Cấu Trúc Store Shopify (Sẵn Sàng Thực Thi)

> Cập nhật 2026-06-25: áp danh tính Daily Humor Co.

**TL;DR:** Tài liệu này là bản hướng dẫn click-by-click để dựng store Shopify + Printify cho niche Vlog/Lifestyle/Comedy bán tại Mỹ — bao gồm sitemap đầy đủ, cấu hình theme Dawn, quy trình gắn Printify với US print partner, checklist "store live", và 5 gợi ý tên store + domain .com an toàn IP. CEO chỉ cần duyệt tên domain rồi thực thi theo thứ tự từ trên xuống — CHƯA mua/đăng ký gì ở bước này.

> **QUAN TRỌNG:** Mua domain và nâng cấp gói Shopify là cổng **NEED-APPROVAL** — CEO duyệt riêng sau khi chốt tên store. Bước này chỉ chuẩn bị bản hướng dẫn, KHÔNG tạo tài khoản tốn tiền.

---

## MỤC LỤC

1. [Gợi ý tên store + domain .com](#1-gợi-ý-tên-store--domain-com)
2. [Sitemap / Cây trang](#2-sitemap--cây-trang)
3. [Cấu hình theme Dawn — Bố cục Home](#3-cấu-hình-theme-dawn--bố-cục-home)
4. [Cấu hình Menu + Footer](#4-cấu-hình-menu--footer)
5. [Quy trình gắn Printify](#5-quy-trình-gắn-printify)
6. [Checklist "Store Live"](#6-checklist-store-live)

---

## 1. Gợi ý tên store + domain .com

> **Tiêu chí an toàn IP:** không dùng tên creator, tên show, catchphrase độc quyền; không trùng nhãn hiệu đã đăng ký USPTO; ngắn gọn, dễ nhớ, gợi niche hài/lifestyle.

> **[CEO ĐÃ CHỐT — 2026-06-25]** Tên store: **Daily Humor Co.** | Domain: **dailyhumorco.com**. Mua domain vẫn là cổng **NEED-APPROVAL** — chưa mua, chỉ ghi nhận ở đây.

| # | Tên Store | Domain đề xuất | Lý do chọn | Rủi ro IP | Trạng thái |
|---|---|---|---|---|---|
| 1 | ~~Vibe & Laugh~~ | ~~`vibeandlaugh.com`~~ | Gợi đúng niche hài/lifestyle, không gắn với creator cụ thể, tự nhiên như lời nói | Thấp — tổ hợp từ phổ thông | **Đã loại** |
| 2 | ~~Relatable Goods~~ | ~~`relatablegoods.com`~~ | "Relatable" là từ khóa cốt lõi cộng đồng vlog dùng; "Goods" gợi merch sản phẩm | Thấp — từ mô tả chung | **Đã loại** |
| 3 | **Daily Humor Co.** | **`dailyhumorco.com`** | Ngắn, gọi cảm giác hài thường ngày, ".co" suffix thêm cho thương hiệu | Thấp — kiểm tra USPTO trước khi mua | **CHOT — CEO duyệt mua domain riêng (NEED-APPROVAL)** |
| 4 | ~~Send It Merch~~ | ~~`senditmerch.com`~~ | Tiếng lóng Gen Z/Millennial phổ biến ("send it" = làm liều), không có chủ sở hữu rõ ràng | Trung bình — "send it" đang dùng nhiều; kiểm tra USPTO | **Đã loại** |
| 5 | ~~The Vlog Life~~ | ~~`thevloglife.com`~~ | Trực tiếp nêu niche, fan vlog nhận ra ngay | Thấp — từ mô tả, nhưng kiểm tra để chắc chắn | **Đã loại** |

**Bước kiểm tra trước khi mua (CEO tự làm — 5 phút):**
1. Tra USPTO TESS: https://tmsearch.uspto.gov — gõ tên, lọc "Live" marks, xem có ai đăng ký chưa.
2. Kiểm tra domain còn trống: https://www.namecheap.com hoặc https://domains.shopify.com.
3. Nếu tên OK → ghi nhận để CEO duyệt mua (NEED-APPROVAL riêng).

**Chi phí domain ước tính:** $10–15/năm với .com trên Namecheap hoặc Google Domains. Shopify cũng bán domain tích hợp ~$14–20/năm (tiện quản lý hơn).

---

## 2. Sitemap / Cây trang

Tổng cộng **13 trang** nhóm theo chức năng:

```
Daily Humor Co.
├── Home (/)
├── Catalog
│   ├── /collections/all — Tất cả sản phẩm
│   ├── /collections/vlog-vibes — Angle 1: Vlog Life & Relatable Moments
│   ├── /collections/comedy-quotes — Angle 2: Funny Quotes & Humor
│   └── /collections/lifestyle-mood — Angle 3: Lifestyle / Mood Aesthetic
├── Products
│   └── /products/[handle] — Template sản phẩm (dùng chung 1 template)
├── Cart (/cart)
├── Checkout (/checkout) — do Shopify xử lý tự động
├── Pages (tĩnh)
│   ├── /pages/about — About Us
│   ├── /pages/contact — Contact
│   ├── /pages/faq — FAQ
│   ├── /pages/refund-policy — Refund & Return Policy *
│   ├── /pages/shipping-policy — Shipping Policy *
│   ├── /pages/terms-of-service — Terms of Service *
│   └── /pages/privacy-policy — Privacy Policy *
└── Blog (tùy chọn, thêm sau)
    └── /blogs/news — Không bắt buộc giai đoạn đầu
```

> `*` = 4 trang policy từ W1-05. Nội dung đã soạn sẵn, chỉ cần điền placeholder và paste vào Shopify Admin > Pages.

### Mô tả 3 Collection theo angle niche

| Collection | Slug | Mô tả ngắn (dùng làm meta description) | Sản phẩm khởi đầu |
|---|---|---|---|
| Vlog Life & Relatable Moments | `vlog-vibes` | Áo + mug cho những ai sống "vlog lifestyle" — làm content, thức khuya, bắt trend | 3–5 design |
| Funny Quotes & Humor | `comedy-quotes` | Câu nói hài hước "relatable" cho dân vlog/comedy fan — mặc ra đường là người ta cười | 3–5 design |
| Lifestyle / Mood Aesthetic | `lifestyle-mood` | Thiết kế minimal-meets-humor: mood board đời thường, aesthetic mà vẫn vui | 2–3 design |

---

## 3. Cấu hình theme Dawn — Bố cục Home

**Dawn** là theme miễn phí mặc định của Shopify (2025–2026), tốc độ tốt, mobile-first — phù hợp POD traffic từ TikTok/FB Ads (đa số dùng điện thoại).

### Thứ tự các section trên trang Home (kéo-thả trong Customize):

```
[1] ANNOUNCEMENT BAR
    → Text: "Free shipping on orders $35+ | Made-to-order, ships in 5–10 days"
    → Màu nền: đen hoặc màu thương hiệu nổi bật

[2] HEADER (dính cố định khi scroll)
    → Logo (tạo trên Canva — font bold, màu sắc nhất quán)
    → Menu chính: Shop | About | FAQ | Contact

[3] HERO / IMAGE BANNER (full-width)
    → Ảnh: mockup lifestyle áo trên người thật (dùng Printify mockup generator hoặc Placeit)
    → Headline: 1 câu nêu rõ niche, ví dụ: "Merch for the chronically online."
    → Subtext: "Funny & relatable tees, mugs + more. Made on demand, ships fast."
    → Button: "Shop Now" → trỏ /collections/all

[4] FEATURED COLLECTION — 3–4 sản phẩm nổi bật
    → Chọn collection "Funny Quotes & Humor" (angle có tỷ lệ chuyển đổi ads cao nhất)
    → Hiện: ảnh, tên, giá, nút "Add to Cart"

[5] SOCIAL PROOF / TRUST BAR (dùng "Icon with text" — 3 icon ngang)
    → Icon 1: "Made to Order" — Printed fresh for you
    → Icon 2: "Ships from the US" — Fast domestic delivery
    → Icon 3: "Happiness Guaranteed" — Issues? We fix it.

[6] COLLECTION LIST — 3 collection angle
    → Hiện 3 collection: Vlog Vibes / Comedy Quotes / Lifestyle Mood
    → Dùng ảnh lifestyle mockup riêng cho từng collection

[7] FEATURED PRODUCT — sản phẩm "best bet" đơn lẻ
    → Áo thun design hot nhất (sau khi có data ads)
    → Hiện đầy đủ: ảnh, mô tả ngắn, size guide, nút mua

[8] EMAIL CAPTURE (dùng app Shopify Forms hoặc section Newsletter)
    → Tiêu đề: "Get 10% off your first order"
    → Subtext: "Join the community. No spam, just vibes."
    → Input: email + button "Claim Discount"
    → [CEO xác nhận] Nếu dùng discount: tạo mã trong Shopify Discounts

[9] FOOTER (xem mục 4)
```

### Cài đặt màu sắc / typography gợi ý (có thể chỉnh):
- **Màu primary:** `#1A1A1A` (đen đậm) — nền tối hợp niche comedy
- **Màu accent:** `#FFD700` (vàng) hoặc `#FF4500` (đỏ-cam TikTok vibes)
- **Font heading:** `Inter Bold` hoặc `Bebas Neue` (vui, dễ đọc)
- **Font body:** `Inter Regular`
- **Border radius:** 4–8px (không quá tròn, giữ edge hiện đại)

---

## 4. Cấu hình Menu + Footer

### Menu chính (Header Navigation)
```
Shop          → /collections/all
  ├── Vlog Vibes    → /collections/vlog-vibes
  ├── Comedy Quotes → /collections/comedy-quotes
  └── Lifestyle Mood → /collections/lifestyle-mood
About         → /pages/about
FAQ           → /pages/faq
Contact       → /pages/contact
```

### Footer — cấu trúc 3 cột

**Cột 1 — Thương hiệu**
- Logo nhỏ + tên store
- 1–2 câu mô tả brand (ví dụ: "Relatable merch for the chronically online. Made on demand, ships from the US.")
- Icons mạng xã hội: TikTok + Instagram (gắn link sau khi tạo tài khoản)

**Cột 2 — Quick Links**
- Shop All
- About Us
- FAQ
- Contact

**Cột 3 — Legal (QUAN TRỌNG — phải có trước khi live)**
- Refund & Return Policy → `/pages/refund-policy`
- Shipping Policy → `/pages/shipping-policy`
- Terms of Service → `/pages/terms-of-service`
- Privacy Policy → `/pages/privacy-policy`

**Dưới cùng (full-width):**
- Copyright: `© 2026 Daily Humor Co.. All rights reserved.`
- Payment icons: Visa, Mastercard, PayPal, Amex (Shopify tự thêm)

---

## 5. Quy trình gắn Printify

> **Lưu ý:** Printify có gói Free (đủ dùng lúc đầu) và Premium $29/tháng (20% off sản phẩm — cân nhắc khi đã có doanh thu). Bắt đầu bằng Free.

### Bước A: Tạo tài khoản Printify + Kết nối Shopify

```
1. Truy cập printify.com → Sign up (miễn phí)
2. Vào My stores → Connect → Shopify
3. Nhập URL store Shopify của bạn (ví dụ: your-store.myshopify.com)
4. Authorize kết nối → Printify xuất hiện trong Shopify Apps
```

### Bước B: Chọn US Print Partner — Monster Digital (ưu tiên)

**Lý do chọn Monster Digital:**
- Chuyên in DTG (Direct-to-Garment) áo thun/hoodie
- Giao hàng nội địa Mỹ: **2–5 ngày làm việc** sau khi in (tốt nhất trong nhóm giá trung bình)
- Warehouse: Jacksonville, FL và Los Angeles, CA — phủ cả 2 bờ
- Rating trên Printify: 4.5+/5 ổn định

**Print Partner thay thế nếu Monster Digital hết slot hoặc chậm:**
- **SwiftPOD** — tốc độ tương đương, giá gần giống
- **Printify Express** (khi có yêu cầu giao nhanh từ khách)

**Cách chọn print partner trong Printify:**
```
1. Catalog → chọn sản phẩm (ví dụ: Unisex Jersey Short Sleeve Tee)
2. Màn hình chọn Print Provider → lọc "Ships to: United States"
3. So sánh: Shipping time | Price | Reviews
4. Chọn Monster Digital → Start designing
```

### Bước C: Tạo và publish sản phẩm

**Quy trình cho 1 sản phẩm áo thun:**
```
1. Catalog → Unisex Jersey Short Sleeve Tee → Monster Digital
2. Design → Upload file PNG (300 DPI, nền trắng hoặc transparent)
   - Kích thước khuyến nghị: 4500 x 5400px cho print area chính
   - Vị trí: Center chest (mặc định) — đủ cho text-based design
3. Preview mockup → kiểm tra print area không bị cắt
4. Variants → chọn màu + size (gợi ý khởi đầu):
   - Màu: Black, White, Navy, Heather Gray (4 màu cơ bản)
   - Size: S, M, L, XL, 2XL (đủ dải, loại XS và 3XL+ nếu muốn gọn)
5. Pricing → set giá bán (ví dụ: $26.99 cho áo thun):
   - Printify tự tính: Print cost ~$9–11 + Shipping ~$3–4 = ~$12–15 tổng COGS
   - Profit hiện ngay trên màn hình → target ≥ 45% margin
6. Shipping → chọn "Set by Printify" (tự động) hoặc tự set:
   - Standard US: $4.99 đơn đầu + $1.99 mỗi item thêm
   - Free shipping từ $35 (cài trong Shopify Shipping Zones)
7. Publish to Shopify → sản phẩm tự xuất hiện trong Shopify Products (draft)
8. Vào Shopify Admin → Products → chỉnh: title, description, tags, collection, SEO
9. Set status: Active → sản phẩm hiện trên store
```

### Bước D: Mapping biến thể (Variant Mapping)

Printify tự map variant với Shopify theo: Size + Color. Kiểm tra sau khi publish:
```
Shopify Admin → Products → [sản phẩm] → Variants
- Xác nhận từng variant có "Fulfilled by Printify" gắn đúng SKU
- Nếu variant nào bị "Unlinked" → vào Printify → My Products → Edit → re-map
- Test: Add to Cart 1 variant → vào Printify Orders → xác nhận order nhảy vào đúng
```

### Bước E: Đặt mẫu QC trước khi bán (QUAN TRỌNG)

> Ngân sách: ~$450 (từ `budget.md`) cho 3–5 mẫu tự đặt để kiểm chất lượng in thật + chụp ảnh lifestyle.

```
1. Vào store → mua 1–2 áo (màu trắng + đen) với design dự kiến bán nhiều nhất
2. Nhập địa chỉ ship về nơi bạn có thể nhận (bạn bè/người thân ở Mỹ) HOẶC dùng dịch vụ
   forward package như Shipito/MyUS nếu cần ship về VN để review
3. Khi nhận hàng: chụp ảnh thật (flat lay + on-body nếu có)
4. So sánh: màu thực vs mockup trên screen, chất vải, độ bền in
5. Nếu OK → proceed live. Nếu có vấn đề → switch print partner trước khi bán
```

---

## 6. Checklist "Store Live"

Đây là danh sách 20 mục phải xanh hết trước khi tắt password protection và nhận đơn thật.

### A. Domain & SSL
- [ ] **Domain .com đã mua** và trỏ về Shopify (DNS propagation 24–48h) — NEED-APPROVAL
- [ ] **SSL certificate** active: Shopify Admin → Domains → "Your connection is secure" = xanh lá
- [ ] URL store hiển thị `https://` không phải `http://`
- [ ] Xóa subdomain `[store].myshopify.com` redirect về domain chính (Shopify tự làm, kiểm tra lại)

### B. Cổng thanh toán
- [ ] **PayPal Business** kết nối (xem checklist PayPal riêng — bước HUMAN-ONLY/NEED-APPROVAL)
- [ ] Hoặc **Payoneer Checkout / 2Checkout** kết nối nếu dùng thay PayPal
- [ ] Test thanh toán bằng thẻ sandbox (Shopify Bogus Gateway): đặt đơn $0 test — đơn thành công
- [ ] Refund test: hoàn tiền đơn test — xác nhận tiền về đúng

### C. 4 Trang Policy (từ W1-05)
- [ ] **Refund & Return Policy** đã điền đủ placeholder + publish — link ở footer hoạt động
- [ ] **Shipping Policy** đã điền đủ placeholder + publish — link ở footer hoạt động
- [ ] **Terms of Service** đã điền đủ placeholder + publish — link ở footer hoạt động
- [ ] **Privacy Policy** đã điền đủ placeholder + publish — link ở footer hoạt động
- [ ] Shopify Admin → Settings → Policies → gán đúng 4 trang này (Shopify dùng cho checkout)

### D. Sản phẩm & Printify
- [ ] Ít nhất **8 sản phẩm** publish (target khởi đầu 8–15 design — xem `strategy.md`)
- [ ] Mỗi sản phẩm có: ảnh mockup, mô tả đầy đủ, size guide, giá đúng
- [ ] Variant mapping Printify đã kiểm tra — không có "Unlinked" variant
- [ ] Đặt mẫu QC đã nhận và chấp nhận chất lượng

### E. Navigation & UX
- [ ] Menu chính hoạt động (tất cả link trỏ đúng trang)
- [ ] Footer có đủ 4 link policy + social icons
- [ ] Mobile view OK: mở store trên điện thoại, kiểm tra ảnh, font, nút CTA
- [ ] Tốc độ tải: chạy Google PageSpeed Insights (https://pagespeed.web.dev) → nhắm Mobile Score ≥ 60

### F. Tốc độ tải (Dawn + POD)
**Các việc đơn giản tăng tốc trên Dawn:**
- Nén ảnh hero/banner xuống < 300KB (dùng squoosh.app miễn phí trước khi upload)
- Không cài quá 5 app trong giai đoạn đầu (mỗi app = thêm JS)
- Tắt video autoplay nếu có
- Dùng Shopify CDN (tự động) — không host ảnh ngoài

### G. Tracking & Analytics
- [ ] **Google Analytics 4** cài qua Shopify Admin → Preferences → Google Analytics
- [ ] **Facebook Pixel + Conversions API (CAPI)** cài (chuẩn bị cho ads) — xem SOP chạy ads
- [ ] Shopify Analytics kiểm tra: vào Analytics → Overview → có data session
- [ ] **Password protection TẮT**: Online Store → Preferences → untick "Restrict access" → store public

### H. Email cơ bản
- [ ] Email liên hệ store đặt địa chỉ thật (không dùng @gmail cho khách email): ưu tiên `hello@dailyhumorco.com` qua Shopify Email hoặc Zoho Mail (miễn phí với domain riêng) — CEO xác nhận email sau khi mua domain
- [ ] Test: gửi test email từ form contact → nhận về đúng inbox

---

## Bảng tổng hợp ưu tiên thực thi

| Ưu tiên | Việc | Phân loại | Ghi chú |
|---|---|---|---|
| P0 | Chốt tên store + mua domain | NEED-APPROVAL | CEO chọn tên trước |
| P0 | Kết nối cổng thanh toán (PayPal Business) | HUMAN-ONLY | Cần KYC — xem bước riêng |
| P1 | Tạo Shopify trial, cài theme Dawn | AI-AUTO (hướng dẫn này) | Có thể bắt đầu ngay |
| P1 | Tạo Printify account + kết nối Shopify | AI-AUTO (hướng dẫn này) | Miễn phí |
| P1 | Điền 4 trang policy (từ W1-05) + publish | AI-AUTO | Paste nội dung W1-05 |
| P2 | Upload design + tạo 8+ sản phẩm | AI-AUTO sau khi có design | Xem bước W1-06/07 |
| P2 | Chỉnh layout Home theo hướng dẫn mục 3 | AI-AUTO | ~2–3h làm quen Customize |
| P2 | Đặt mẫu QC | NEED-APPROVAL ($) | ~$50–80 cho 3 mẫu test |
| P3 | Cài GA4 + Facebook Pixel | AI-AUTO (hướng dẫn riêng) | Cần trước khi chạy ads |
| P3 | Chạy checklist "store live" | AI-AUTO | Tick từng mục ở mục 6 |

---

## Ghi chú kỹ thuật nhanh (CEO bookmark)

**Shopify Admin shortcuts thường dùng:**
- Thêm trang: `Admin → Pages → Add page`
- Chỉnh theme: `Admin → Online Store → Customize`
- Quản lý sản phẩm: `Admin → Products`
- Cài app: `Admin → Apps → Shopify App Store`
- Cài payment: `Admin → Settings → Payments`
- Shipping zones: `Admin → Settings → Shipping and delivery`

**Printify shortcuts thường dùng:**
- Tạo sản phẩm mới: `My Products → + New product`
- Xem đơn đang in: `Orders`
- Đổi print provider (không ảnh hưởng đơn cũ): `My Products → Edit → Change provider`

**Công cụ miễn phí hỗ trợ:**
| Công cụ | Link | Dùng cho |
|---|---|---|
| Printify Mockup Generator | printify.com (trong product editor) | Mockup sản phẩm tự động |
| Placeit | placeit.net | Mockup lifestyle (1–3 ảnh/ngày free) |
| Squoosh | squoosh.app | Nén ảnh trước khi upload |
| Google PageSpeed | pagespeed.web.dev | Kiểm tra tốc độ store |
| USPTO TESS | tmsearch.uspto.gov | Kiểm tra nhãn hiệu trước khi đặt tên |

---

> **Tài liệu liên quan:**
> - W1-05 — 4 trang policy hoàn chỉnh (đã có trong vault)
> - VERIFY-1 — phí cổng thanh toán PayPal/Payoneer (đã có trong vault)
> - Bước P0 tiếp theo: CEO chốt tên store, sau đó hệ thống xin duyệt mua domain + Shopify plan

---

*Tạo tự động bởi hệ thống vn-opc | Bước W1-04-prep | 2026-06-25*
