# VERIFY-1 — Phí Cổng Thanh Toán Quốc Tế cho Merchant Việt Nam (POD E-commerce)

**TL;DR:** Với AOV ~$25–35, PayPal có tổng phí gộp cao nhất (~7–9% khi tính cả FX), Payoneer phù hợp nếu bạn dùng nền tảng marketplace tích hợp sẵn (phí ~3–5%), còn 2Checkout/Verifone là giải pháp toàn diện nhất cho store riêng nhưng phí giao dịch cao (5–9%) và có rolling reserve. **CEO cần tự xác minh các con số trong bảng trước khi tính ROAS**, vì phí phụ thuộc vào loại giao dịch, lượng doanh thu và thỏa thuận tài khoản cụ thể.

---

## 1. Bối cảnh & Phương pháp

- **Mô hình:** Merchant Việt Nam, nhận USD từ khách Mỹ qua POD store (Printify/Printful + Shopify/Etsy).
- **Dữ liệu:** Tổng hợp từ WebSearch ngày 25/06/2026 — PayPal VN, Payoneer, 2Checkout/Verifone. Các trang chính thức trả về 403 qua proxy; số liệu lấy từ nguồn độc lập có uy tín (Tipalti, Wise, VALO Vietnam, Tekpon, G2, NerdWallet).
- **Lưu ý:** Đây là số liệu tham khảo. Một số khoản phí phụ thuộc vào volume, loại tài khoản và thỏa thuận riêng. Ghi `[cần CEO xác minh]` chỗ không chắc chắn.

---

## 2. Chi Tiết Từng Cổng

### 2A. PayPal Business

| Khoản phí | Mức phí | Ghi chú |
|---|---|---|
| Phí giao dịch quốc tế (nhận từ Mỹ) | **4.49% + $0.49/giao dịch** | = base 2.99–3.49% + surcharge 1.50% international |
| Phí chuyển đổi ngoại tệ (FX markup) | **+3.0% – 4.0%** trên tỷ giá thị trường | Áp dụng khi rút USD → VND |
| Phí rút về tài khoản VN | **≈ VND 60,000/lần** (~$2.30–2.50 USD) | Rút về Visa debit ngân hàng VN |
| Thời gian giữ tiền (hold) | **Lên đến 21 ngày** với account mới | Có thể 180 ngày nếu có tranh chấp/spike |
| Thời gian xử lý rút tiền | **2–4 ngày làm việc** sau khi released | |

**Tổng phí gộp ước lượng/giao dịch:**
- Phần trăm: 4.49% (transaction) + 3–4% (FX) = **~7.5–8.5% của doanh thu**
- Phí cố định: $0.49 + ~$2.30 amortized (nếu rút nhiều lần nhỏ, ảnh hưởng lớn hơn)
- **Ví dụ: đơn $30** → Phí % = $2.25–$2.55; cộng fixed ~$0.49 = **~$2.74–$3.04 (~9–10%)**

> **Nguồn:** Tipalti (tipalti.com/blog/paypal-international-transaction-fees), VALO Vietnam (valovietnam.com/blog/does-paypal-work-in-vietnam), Exiap (exiap.com/guides/paypal-fees) — truy cập 25/06/2026.

---

### 2B. Payoneer

| Khoản phí | Mức phí | Ghi chú |
|---|---|---|
| Phí nhận từ marketplace (Etsy, Amazon, Fiverr…) | **1%** | Marketplace tích hợp Payoneer sẵn |
| Phí nhận qua payment request (client tự chuyển) | **3%** | Khách trả bằng thẻ tín dụng qua link |
| Phí rút về tài khoản VND (cross-currency) | **Lên đến 2%** trên mid-market rate | FX markup USD→VND |
| Phí rút cùng loại tiền tệ | $1.50/lần (< $50K/tháng) hoặc 0.5% (> $50K) | USD→USD bank (ít áp dụng ở VN) |
| Phí rút dưới $400 | **$4 cố định** | Thay thế $1.50 với giao dịch nhỏ |
| Phí tài khoản hàng năm | **$29.95/năm** | Miễn nếu nhận > $2,000 USD/12 tháng |

**Tổng phí gộp ước lượng/giao dịch (qua marketplace):**
- 1% (nhận) + 2% (FX khi rút VND) + $1.50 amortized = **~3–3.5% + ~$1.5 cố định**
- **Ví dụ: đơn $30** → $0.30 nhận + $0.60 FX + $0.30 amortized phí rút = **~$1.20 (~4%)**
- Nếu nhận qua payment request: 3% + 2% = 5% → **~$1.50–$1.80/đơn $30**

> **Lưu ý:** Việt Nam có quy định kiểm soát ngoại hối; SBV hạn chế tài khoản USD cá nhân. Merchant VN thường rút sang VND (áp dụng mức FX 2%). [cần CEO xác minh tỷ giá thực tế Payoneer USD→VND tại thời điểm dùng]

> **Nguồn:** Payoneer FAQ (payoneer.custhelp.com/app/answers/detail/a_id/44821), VaultLeap (vaultleap.com/blog/payoneer-fees-explained-2026), NerdWallet Payoneer Review 2026 — truy cập 25/06/2026.

---

### 2C. 2Checkout / Verifone

| Khoản phí | Mức phí | Ghi chú |
|---|---|---|
| **2SELL** (thanh toán một lần) | **3.5% + $0.35/giao dịch** | Phù hợp POD store |
| **2SUBSCRIBE** (subscription) | 4.5% + $0.40/giao dịch | Cho SaaS/membership |
| **2MONETIZE** (digital goods, software) | 6.0% + $0.50/giao dịch | MoR đầy đủ nhất |
| Phí cross-border (khách từ nước khác) | **+2%** (thêm 3% cho nước rủi ro cao) | Thêm vào transaction fee |
| Phí FX (currency conversion markup) | **+2–5%** trên daily bank rate | Áp dụng khi convert sang VND |
| Rolling reserve | **% doanh thu, giữ 90–180 ngày** | [cần CEO xác minh tỷ lệ cụ thể với 2CO] |
| Payout cycle | Weekly / bi-weekly / monthly | Tự động khi đủ threshold |
| Threshold payout | $50 (2SELL/2SUBSCRIBE); $100 (2MONETIZE) | |
| Payout method | Wire transfer, PayPal, Payoneer | |

**Tổng phí gộp ước lượng/giao dịch (gói 2SELL, khách Mỹ, nhận VND):**
- 3.5% (transaction) + 2% (cross-border) + 2–5% (FX) = **~7.5–10.5% của doanh thu**
- Cộng fixed $0.35
- **Ví dụ: đơn $30** → $2.25 + $0.60 + $0.60–$1.50 + $0.35 = **~$3.80–$4.70 (~12–16%)**
- *Tuy nhiên nếu payout bằng Payoneer (USD, không convert tại 2CO) thì bớt được phần FX của 2CO, chỉ còn 5.5% + $0.35.*

> **Lưu ý quan trọng:** 2Checkout là **Merchant of Record** — họ xử lý thuế VAT/GST quốc tế thay bạn. Đây là lợi thế lớn cho store toàn cầu. Rolling reserve là rủi ro về dòng tiền cần CEO cân nhắc.

> **Nguồn:** Tekpon (tekpon.com/software/2checkout-now-verifone/pricing, 2026), G2 (g2.com/products/2checkout-monetization-platform/pricing), 2Checkout docs (verifone.cloud/docs/2checkout/Documentation) — truy cập 25/06/2026.

---

## 3. Bảng So Sánh Tổng Hợp

| Tiêu chí | PayPal Business | Payoneer | 2Checkout/Verifone |
|---|---|---|---|
| **Phí giao dịch (%)** | 4.49% | 1% (marketplace) / 3% (card) | 3.5% (2SELL) |
| **Phí cố định/giao dịch** | $0.49 | $1.50–$4.00 khi rút | $0.35 |
| **FX markup (USD→VND)** | 3–4% | lên đến 2% | 2–5% |
| **Phí rút về VN** | ~$2.30/lần (VND 60K) | Bao gồm trong FX 2% | Qua Payoneer/Wire |
| **Tổng phí gộp ước tính (đơn $30)** | ~$2.74–$3.04 (~9–10%) | ~$1.20–$1.80 (~4–6%) | ~$3.80–$4.70 (~12–16%) hoặc ~5.5% nếu payout USD qua Payoneer |
| **Hold/Rolling reserve** | Lên đến 21 ngày (account mới) | Không có hold tiêu chuẩn | Rolling reserve 90–180 ngày [cần xác minh %] |
| **Payout cycle** | 2–4 ngày sau khi released | Ngay sau khi nhận (rút thủ công) | Weekly/bi-weekly/monthly |
| **Phù hợp cho POD** | Trung bình (hold + phí cao) | Tốt nếu dùng qua Etsy/marketplace | Tốt nhất cho store riêng (Shopify) |
| **Xử lý thuế VAT/GST** | Không | Không | Có (Merchant of Record) |
| **Phí hàng năm** | Không | $29.95 (miễn nếu > $2K/năm) | Không |
| **Hỗ trợ VN** | Có (chính thức) | Có | Có |

---

## 4. Ước Lượng Ảnh Hưởng Tới ROAS Hoà Vốn

> **QUAN TRỌNG:** Các con số dưới đây dùng giả định. CEO cần thay bằng số thật của store.

**Giả định đầu vào (CEO điền số thật):**
- AOV: **$30** (dải $25–35, lấy trung bình)
- Biên gộp POD: **47%** (dải 40–55%, lấy trung bình; = doanh thu - giá vốn sản phẩm + ship POD)
- Biên gộp bằng tiền: $30 × 47% = **$14.10/đơn**
- Chi phí vận hành khác (Shopify, email, v.v.): giả định **$1.00/đơn** (ước lượng, CEO xác minh)
- Biên khả dụng cho quảng cáo: $14.10 - $1.00 = **$13.10/đơn**

### Tác động phí thanh toán lên biên khả dụng:

| Cổng | Phí ước lượng/đơn $30 | Biên còn lại sau phí | ROAS hoà vốn |
|---|---|---|---|
| **Payoneer** (qua marketplace) | ~$1.20–$1.80 | $11.30–$11.90 | **2.52–2.65×** |
| **PayPal** | ~$2.74–$3.04 | $10.06–$10.36 | **2.89–2.98×** |
| **2Checkout** (payout USD qua Payoneer) | ~$1.95–$2.00 (5.5%) | $11.10–$11.15 | **2.69–2.71×** |
| **2Checkout** (payout VND trực tiếp) | ~$3.80–$4.70 | $8.40–$9.30 | **3.23–3.57×** |

**Công thức ROAS hoà vốn = AOV ÷ Biên còn lại sau tất cả chi phí (ngoại trừ ads)**

Ví dụ: Với Payoneer và biên $11.50 → ROAS HV = $30 / $11.50 = **2.61×**

### Nhận định:

1. **Phí thanh toán chiếm 4–16% doanh thu** — đây là con số đáng kể với biên POD vốn không dày. Chênh lệch giữa cổng tốt nhất (Payoneer ~4%) và tệ nhất (2CO payout VND ~16%) tương đương **0.9–1.0 điểm ROAS**.

2. **Payoneer qua Etsy/marketplace** là lựa chọn phí thấp nhất nếu store của bạn chạy trên Etsy. Nhưng nếu store Shopify riêng, Payoneer không nhận thanh toán trực tiếp từ khách hàng.

3. **PayPal** phù hợp nhất cho Shopify store (cổng phổ biến với khách Mỹ) nhưng hold 21 ngày ảnh hưởng dòng tiền nghiêm trọng ở giai đoạn đầu.

4. **2Checkout** là lựa chọn hợp lý nếu payout bằng USD qua Payoneer (bỏ qua FX của 2CO). Lợi thế: Merchant of Record (không lo thuế VAT). Bất lợi: Rolling reserve chiếm vốn.

5. **Chiến lược đề xuất (giai đoạn đầu):** PayPal (cổng chính, khách Mỹ ưa chuộng) + xây lịch sử để giải hold nhanh. Hoặc 2Checkout 2SELL + payout Payoneer nếu muốn tránh phức tạp thuế quốc tế.

---

## 5. Những Điểm Cần CEO Xác Minh

- [ ] Tỷ giá FX thực tế Payoneer USD→VND tại thời điểm rút (vào thẳng account Payoneer để kiểm tra live rate)
- [ ] Rolling reserve % và thời gian cụ thể của 2Checkout với merchant VN mới (liên hệ sales@2checkout.com)
- [ ] Phí rút PayPal VND hiện tại (VND 60,000 là số từ 2025, có thể thay đổi)
- [ ] Annual fee Payoneer: threshold $2,000 hay $6,000? (nguồn khác nhau ghi khác nhau — xác minh tại payoneer.com/about/pricing)
- [ ] Biên gộp POD thực tế của store (40–55% là dải chung, cần tính cụ thể theo từng SKU)
- [ ] Chi phí vận hành khác/đơn hàng (Shopify plan, app, email tool)

---

## 6. Nguồn Tham Khảo

| Nguồn | URL | Ngày truy cập |
|---|---|---|
| Tipalti — PayPal International Fees | tipalti.com/blog/paypal-international-transaction-fees | 25/06/2026 |
| VALO Vietnam — Does PayPal Work in VN | valovietnam.com/blog/does-paypal-work-in-vietnam | 25/06/2026 |
| Exiap — PayPal Fees 2026 | exiap.com/guides/paypal-fees | 25/06/2026 |
| PayPal US — New Sellers Payment Hold | paypal.com/us/cshelp/article/...help848 | 25/06/2026 |
| Payoneer Official FAQ — Pricing & Fees | payoneer.custhelp.com/app/answers/detail/a_id/44821 | 25/06/2026 |
| VaultLeap — Payoneer Fees 2026 | vaultleap.com/blog/payoneer-fees-explained-2026 | 25/06/2026 |
| NerdWallet — Payoneer Review 2026 | nerdwallet.com/business/software/reviews/payoneer | 25/06/2026 |
| Tekpon — 2Checkout Pricing 2026 | tekpon.com/software/2checkout-now-verifone/pricing | 25/06/2026 |
| G2 — 2Checkout Pricing 2026 | g2.com/products/2checkout-monetization-platform/pricing | 25/06/2026 |
| 2Checkout Docs — Cross-border fees | verifone.cloud/docs/2checkout/Documentation/...Cross-border_fee_charges | 25/06/2026 |
| Playto — 2Checkout Alternative India | playto.so/blogs/2checkout-verifone-alternative-india | 25/06/2026 |

---

*File được tạo tự động bởi AI (VERIFY-1, vn-opc-claude). Số liệu chỉ mang tính tham khảo — CEO cần xác minh trực tiếp với cổng thanh toán trước khi đưa vào kế hoạch tài chính chính thức.*
