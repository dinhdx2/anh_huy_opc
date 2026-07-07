# VERIFY-2 — Giá Vốn (COGS) & ROAS Hoà Vốn theo Sản Phẩm

**TL;DR:** T-shirt có COGS ~$13.89 (giá bán gợi ý $28), hoodie ~$30.00 (giá bán $55); mug và sticker là order-bump với COGS thấp, biên gộp cao hơn. Với cổng PayPal ~9–10%/đơn, ROAS hoà vốn từng SP dao động **1.94–2.31×** — T-shirt và mug đạt ngưỡng "tiếp tục" (≥1.5×) nhưng cần tối ưu để chạm ngưỡng scale (≥2.3×). AOV mix $35 cho ROAS HV ~2.06× — sát ngưỡng scale, cần kiểm soát chặt COGS và phí thanh toán.

---

## 1. Phương pháp & Nguồn dữ liệu

- **Dữ liệu sản xuất/shipping:** Tổng hợp từ WebSearch nhiều vòng ngày 25/06/2026 — cross-reference podvector.ai, costbench.com, ecommercetom.com (Monster Digital review), printondemandbusiness.com, wisersell.com, fourthwall.com (Printify 2025 guide).
- **Provider tham chiếu:** Monster Digital (US-based, Printify network), Bella+Canvas 3001 cho T-shirt, Gildan 18500 cho Hoodie.
- **Lưu ý độ tin cậy:** Printify.com và nhiều trang review trả 403 qua proxy — số liệu thu từ nguồn tổng hợp độc lập. Các ô ghi `[CEO xác minh]` là chỗ chưa có số trực tiếp từ Printify dashboard. **Bắt buộc CEO vào Printify → chọn provider → xem tab Shipping để lấy số chính xác trước khi dùng tài chính.**
- **Phí thanh toán:** Dùng PayPal ~9–10%/đơn từ VERIFY-1 (=4.49% transaction + 3–4% FX + $0.49 fixed, ví dụ đơn $30 ≈ $2.74–$3.04 ≈ 9–10%).

---

## 2. Bảng Giá Vốn (COGS) — 4 Sản Phẩm

> Tất cả giá USD, giao nội địa Mỹ, Free plan Printify (chưa có Premium -20%).

### 2A. T-Shirt (Bella+Canvas 3001, in DTG 1 mặt — Monster Digital)

| Khoản mục | Giá | Ghi chú / Nguồn |
|---|---|---|
| Base print cost (blank + DTG print) | **$9.90** | Monster Digital Free plan; ~$8.05 với Premium. Nguồn: podvector.ai, ecommercetom.com — truy cập 25/06/2026 |
| Ship first item (US domestic) | **$3.99** | Monster Digital t-shirt US domestic. Nguồn: podvector.ai, tổng hợp nhiều nguồn 2025 |
| Ship additional item | **~$1.50** | Ước tính standard Printify structure; [CEO xác minh trên Printify dashboard Monster Digital] |
| **COGS / đơn 1 SP (first item)** | **$13.89** | = $9.90 + $3.99 |

### 2B. Hoodie (Gildan 18500 hoặc tương đương — US provider)

| Khoản mục | Giá | Ghi chú / Nguồn |
|---|---|---|
| Base print cost (blank + DTG print) | **$23.50** | Dải US provider Free plan $21–26; lấy mid-point ~$23–24. Nguồn: printondemandbusiness.com, costbench.com 2026; riêng Monster Digital hoodie chưa có số trực tiếp → **[CEO xác minh Monster Digital dashboard]** |
| Ship first item (US domestic) | **$6.50** | Hoodie nặng hơn t-shirt; ước tính $5.50–$8.49 từ tổng hợp nguồn (Monster Digital sweatshirt $8.49 per một nguồn; t-shirt $3.99); dùng $6.50 trung bình. **[CEO xác minh]** |
| Ship additional item | **~$2.00** | Ước tính; **[CEO xác minh]** |
| **COGS / đơn 1 SP (first item)** | **$30.00** | = $23.50 + $6.50 |

### 2C. Mug 11oz (ceramic — US provider, vd Sensaria/SwiftPOD/Monster Digital)

| Khoản mục | Giá | Ghi chú / Nguồn |
|---|---|---|
| Base print cost | **$7.00** | Dải $6.45–$8.25 Free plan; Sensaria/Monster Digital/SwiftPOD thấp nhất. Nguồn: podvector.ai, costbench.com 2026 |
| Ship first item (US domestic) | **$4.55** | Nguồn: podvector.ai (ổn định nhiều nguồn 2025–2026) |
| Ship additional item | **~$1.50** | Ước tính; **[CEO xác minh]** |
| **COGS / đơn 1 SP (first item)** | **$11.55** | = $7.00 + $4.55 |

### 2D. Sticker (Kiss-cut vinyl, đơn chiếc — US provider)

| Khoản mục | Giá | Ghi chú / Nguồn |
|---|---|---|
| Base print cost | **$2.50** | Dải $1.21–$2.80; lấy mid-point an toàn. Nguồn: printondemandbusiness.com, podvector.ai 2026 |
| Ship first item (US domestic) | **$3.50** | Ước tính dải $3–4 cho sticker nhẹ. **[CEO xác minh]** |
| Ship additional item | **~$0.50** | Ước tính (sticker thường nhét chung gói); **[CEO xác minh]** |
| **COGS / đơn 1 SP (first item)** | **$6.00** | = $2.50 + $3.50 |

---

## 3. Bảng Tổng Hợp COGS

| SP | Base Print Cost | Ship (1st item) | Ship (add.) | **COGS/đơn (1 SP)** |
|---|---|---|---|---|
| T-shirt | $9.90 | $3.99 | ~$1.50 | **$13.89** |
| Hoodie | $23.50 [*] | $6.50 [*] | ~$2.00 [*] | **$30.00** |
| Mug 11oz | $7.00 | $4.55 | ~$1.50 | **$11.55** |
| Sticker | $2.50 [*] | $3.50 [*] | ~$0.50 [*] | **$6.00** |

[*] = cần CEO xác minh trực tiếp trên Printify dashboard trước khi dùng tài chính.

---

## 4. Giá Bán Gợi Ý để Đạt Biên Gộp ~45–55% (trước ads)

> Biên gộp = (Giá bán − COGS) / Giá bán. Dải mục tiêu 45–55%.

| SP | COGS | Biên 45% → giá bán | Biên 50% → giá bán | Biên 55% → giá bán | **Giá bán gợi ý** | **Biên thực tế** |
|---|---|---|---|---|---|---|
| T-shirt | $13.89 | $25.25 | $27.78 | $30.87 | **$28.00** | 50.4% |
| Hoodie | $30.00 | $54.55 | $60.00 | $66.67 | **$55.00** | 45.5% |
| Mug 11oz | $11.55 | $21.00 | $23.10 | $25.67 | **$22.00** | 47.5% |
| Sticker | $6.00 | $10.91 | $12.00 | $13.33 | **$11.00** | 45.5% |

**AOV ước tính (mix đơn hàng điển hình):**
- Kịch bản A — Chỉ 1 SP chủ lực: T-shirt $28 hoặc Hoodie $55
- Kịch bản B — T-shirt + Sticker order-bump: $28 + $11 = **$39** (sticker đơn bổ sung ship ~$0.50 thêm → COGS tổng ~$14.39)
- Kịch bản C — Hoodie + Mug order-bump: $55 + $22 = **$77** (mug add. ship ~$1.50 thêm → COGS tổng ~$33.00)
- **AOV trung bình tham chiếu: ~$35** (weighted: nhiều T-shirt, ít Hoodie, order-bump trung bình)

---

## 5. Tính ROAS Hoà Vốn

**Công thức:**

```
ROAS_HV = Giá bán / (Giá bán − COGS − Phí PayPal)
Phí PayPal = max(Giá bán × 9%, Giá bán × 10%)  → dùng 9.5% trung bình
```

> Lấy 9.5% (trung bình dải 9–10% từ VERIFY-1) cho tính toán base case. CEO có thể thay bằng 9% (optimistic) hoặc 10% (conservative).

### 5A. Từng SP (đơn 1 sản phẩm)

| SP | Giá bán (P) | COGS (C) | Phí PayPal 9.5% (F) | Biên còn lại (P−C−F) | **ROAS HV** | Nhận xét |
|---|---|---|---|---|---|---|
| T-shirt | $28.00 | $13.89 | $2.66 | $11.45 | **2.45×** | Vượt ngưỡng scale (≥2.3×) |
| Hoodie | $55.00 | $30.00 | $5.23 | $19.78 | **2.78×** | Vượt ngưỡng scale tốt |
| Mug 11oz | $22.00 | $11.55 | $2.09 | $8.36 | **2.63×** | Vượt ngưỡng scale |
| Sticker | $11.00 | $6.00 | $1.05 | $3.95 | **2.78×** | Vượt ngưỡng scale |

### 5B. AOV Mix $35 (T-shirt + partial order-bump)

| Kịch bản | AOV | COGS (est.) | PayPal 9.5% | Biên còn lại | **ROAS HV** |
|---|---|---|---|---|---|
| T-shirt ($28) + Sticker add-on ($7 upsell) | $35 | $14.39 | $3.33 | $17.29 | **2.02×** |
| T-shirt đơn thuần ($28) | $28 | $13.89 | $2.66 | $11.45 | **2.45×** |
| Hoodie đơn thuần ($55) | $55 | $30.00 | $5.23 | $19.78 | **2.78×** |
| AOV trung bình tham chiếu $35 | $35 | $15.50* | $3.33 | $16.18 | **2.16×** |

*COGS $15.50 là ước tính weighted: mix t-shirt + nhỏ mug/sticker add-on.

### 5C. Sensitivity: Phí PayPal 9% vs 10%

| SP | ROAS HV @PayPal 9% | ROAS HV @PayPal 9.5% | ROAS HV @PayPal 10% |
|---|---|---|---|
| T-shirt $28 | 2.54× | 2.45× | 2.37× |
| Hoodie $55 | 2.88× | 2.78× | 2.68× |
| Mug $22 | 2.73× | 2.63× | 2.53× |
| Sticker $11 | 2.91× | 2.78× | 2.67× |
| AOV mix $35 | 2.22× | 2.16× | 2.09× |

---

## 6. So Sánh Với Ngưỡng Kế Hoạch

| Ngưỡng | Mục tiêu | T-shirt $28 | Hoodie $55 | Mug $22 | Sticker $11 | AOV $35 mix |
|---|---|---|---|---|---|---|
| **Tiếp tục** (ROAS ≥ 1.5×) | Tối thiểu | Dat (2.45×) | Dat (2.78×) | Dat (2.63×) | Dat (2.78×) | Dat (2.16×) |
| **Scale** (ROAS ≥ 2.3×) | Mục tiêu | Dat (2.45×) | Dat (2.78×) | Dat (2.63×) | Dat (2.78×) | Chua (2.16×) |

**Nhận định:**
- T-shirt $28, Hoodie $55, Mug $22, Sticker $11 đều **vượt ngưỡng scale 2.3×** khi bán đơn lẻ.
- AOV mix $35 (T-shirt + order-bump sticker rẻ hơn) chỉ đạt 2.16× — **chưa tới ngưỡng scale**. Cần đẩy AOV lên ~$40+ hoặc giảm COGS (dùng Printify Premium -20%) để chạm scale.
- **Hoodie là SP có ROAS HV tốt nhất** (2.78×) và biên tuyệt đối cao nhất ($19.78/đơn) — ưu tiên test ads hoodie.

---

## 7. Khuyến Nghị Giá Bán & Chiến Lược

### Giá bán chốt (gợi ý)

| SP | Vai trò | Giá bán gợi ý | COGS | Biên gộp | ROAS HV |
|---|---|---|---|---|---|
| **T-shirt** | Chủ lực | **$28** | $13.89 | 50.4% | 2.45× |
| **Hoodie** | Chủ lực | **$55** | $30.00 | 45.5% | 2.78× |
| **Mug 11oz** | Order-bump | **$22** | $11.55 | 47.5% | 2.63× |
| **Sticker** | Order-bump | **$11** | $6.00 | 45.5% | 2.78× |

### Chiến lược tăng ROAS mix:
1. **Tăng sticker upsell lên $13–15** (vẫn cạnh tranh, biên ~54–59%) → AOV mix $28+$13 = $41, ROAS HV >2.3×.
2. **Dùng Printify Premium** ($29–39/tháng, -20% base cost) khi đạt ≥20 đơn/tháng: T-shirt giảm về ~$8.05 → COGS ~$12.04, ROAS HV tăng ~0.2–0.3 điểm.
3. **Bundle hoodie + mug** ($55+$22=$77): COGS ~$33, biên còn lại sau PayPal = $77−$33−$7.32=$36.68 → ROAS HV = 2.10× — acceptable nhưng không vượt scale. Nếu muốn scale bundle, nâng giá hoodie lên $59.

---

## 8. Danh Sách Cần CEO Xác Minh Trên Printify Dashboard

- [ ] **Monster Digital — Hoodie base cost:** Vào Printify → tìm Gildan 18500 (hoặc Bella Canvas hoodie) → chọn Monster Digital → xem giá trước khi thêm print
- [ ] **Monster Digital — Hoodie shipping first/additional item US:** Tab Shipping khi xem product
- [ ] **Mug 11oz — provider cụ thể và shipping:** Printify → mugs → US provider → xem tab Shipping
- [ ] **Sticker — base cost và shipping:** Printify → stickers → US provider
- [ ] **Printify Premium worth it?** Tính khi đạt ≥20 đơn/tháng (Premium $29.99/tháng; tiết kiệm 20% × $13.89 COGS t-shirt × N đơn)

---

## 9. Nguồn Tham Khảo

| Nguồn | Nội dung | Ngày truy cập |
|---|---|---|
| podvector.ai — How Much Does Printify Charge Per Shirt | T-shirt Monster Digital $8.70/$9.90, ship $3.99 US | 25/06/2026 |
| ecommercetom.com — Monster Digital Review Printify | T-shirt ~$9.90 Free plan, shipping US ~$3.99 | 25/06/2026 |
| costbench.com — Printify Pricing 2026 | Mug $6.45–$8.25, hoodie dải $21–25, Premium -20% | 25/06/2026 |
| podvector.ai — Complete Guide Printify Most Profitable Products | Mug $6.45–$8.25, ship $4.55 first item US | 25/06/2026 |
| printondemandbusiness.com — Best POD Stickers 2026 | Sticker base $1.21–$2.80 | 25/06/2026 |
| printondemandbusiness.com — Printful vs Printify 2026 | Hoodie Gildan 18500 range $21–27 | 25/06/2026 |
| printify.com/shipping-rates/monster-digital/ | Monster Digital shipping page (403 via proxy — không fetch được; số từ aggregate sources) | 25/06/2026 |
| wisersell.com — Printify POD 2025 | Sticker cost rise $3.99→$4.29 (Feb 2026); hoodie dải US | 25/06/2026 |
| VERIFY-1-phi-cong-thanh-toan.md | PayPal phí 9–10%/đơn (4.49%+$0.49 transaction + 3–4% FX) | 25/06/2026 |

---

*File được tạo bởi AI (VERIFY-2, vn-opc-claude) ngày 25/06/2026. Số liệu base cost và shipping có ô `[CEO xác minh]` — bắt buộc kiểm tra trực tiếp trên Printify dashboard trước khi lập kế hoạch tài chính chính thức. Biên tính ROAS là trước chi phí quảng cáo, Shopify/platform, và chi phí vận hành khác.*
