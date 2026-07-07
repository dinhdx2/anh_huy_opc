# SOP Xử Lý Đơn 6 Bước — Store POD (Shopify + Printify + US Partner)

> **TL;DR:** Mỗi đơn từ lúc khách bấm mua đến khi tiền về PayPal cần đi qua 6 bước kiểm soát; điểm nút quan trọng nhất là **upload tracking ≤1h sau khi Printify đẩy số tracking** — thao tác này kích hoạt PayPal giải phóng tiền hold (thường trong 2–3 ngày thay vì 21 ngày). Phần lớn bước 1–4 tự động nhờ tích hợp Shopify–Printify–PayPal Tracking Sync App; người làm chỉ cần kiểm tra và xử lý ngoại lệ.

---

## Tổng quan luồng đơn (sơ đồ nhanh)

```
Khách đặt hàng
      ↓
[B1] Xác nhận thanh toán (Shopify + PayPal)
      ↓
[B2] Đẩy đơn sang Printify → chọn US print partner
      ↓
[B3] Theo dõi sản xuất (On Hold → In Production → Ready to Ship)
      ↓
[B4] Nhận tracking number (Printify shipped → Shopify fulfilled)
      ↓
[B5] Upload tracking lên Shopify + PayPal ≤1h ← ĐIỂM GIẢI NGÂN
      ↓
[B6] Chăm sóc sau bán → đóng đơn
```

---

## BƯỚC 1 — Xác nhận thanh toán & tạo đơn trong Shopify

| Hạng mục | Chi tiết |
|---|---|
| **Ai/Tool** | Tự động (Shopify + PayPal webhook) / Founder kiểm tra |
| **Hành động cụ thể** | 1. Shopify gửi email thông báo đơn mới. 2. Vào **Shopify Admin → Orders** kiểm tra trạng thái thanh toán = **Paid** (không phải Pending hoặc Authorized). 3. Xác minh địa chỉ giao hàng hợp lệ (có zip code Mỹ, không có ký tự lạ). 4. Kiểm tra email khách trùng với PayPal transaction. |
| **Xong = ?** | Trạng thái đơn trong Shopify = **Payment captured** · Không có cờ fraud (Shopify fraud analysis xanh hoặc vàng có thể chấp nhận) |
| **Thời gian mục tiêu** | < 30 phút sau khi đơn vào (Shopify notify realtime) |
| **Lỗi thường gặp** | **Đơn status "Pending":** PayPal chưa capture — chờ thêm 15 phút hoặc vào PayPal Activity kiểm tra. **Địa chỉ không hợp lệ:** liên hệ khách qua email xác nhận đơn, yêu cầu cung cấp lại trong 24h. **Đơn bị đánh dấu fraud cao (đỏ):** DỪNG, không đẩy sang Printify — hoàn tiền ngay hoặc liên hệ khách xác minh trước. |

---

## BƯỚC 2 — Đẩy đơn sang Printify & chọn US Print Partner

| Hạng mục | Chi tiết |
|---|---|
| **Ai/Tool** | Tự động (Printify–Shopify integration) / Founder giám sát |
| **Hành động cụ thể** | 1. **Printify auto-import:** Khi Shopify ghi nhận thanh toán, đơn xuất hiện trong **Printify → Orders** trong vòng vài phút đến vài giờ. 2. Mặc định Printify giữ đơn **24h** trước khi tự đẩy production (thay đổi trong Printify Settings → Orders). **Khuyến nghị:** bật **"Auto-submit after X hours" = 0** để đẩy ngay, tiết kiệm 1 ngày. 3. Xác nhận **print provider** được assign đúng (Printify chọn tự động theo địa chỉ khách — nếu khách ở Mỹ sẽ ưu tiên US partner). 4. **US print partner ưu tiên:** Monster Digital (nhanh nhất ~2 ngày giao, chất in tốt nhất DTG) · SwiftPOD · Printify Choice (Printify tự tối ưu). |
| **Xong = ?** | Trạng thái Printify = **"Sending to Production"** hoặc **"In Production"** |
| **Thời gian mục tiêu** | Đơn vào Printify trong 1–2h · Đẩy production trong 0–24h (tùy setting) |
| **Lỗi thường gặp** | **Đơn không xuất hiện trong Printify:** kiểm tra lại Printify–Shopify integration (Printify App → Connect → re-authorize nếu cần). **Đơn "On Hold: Payment Required":** thẻ Printify hết tiền — nạp thêm hoặc cập nhật payment method, sau đó Resubmit. **Print provider out of stock:** Printify sẽ báo — phải assign provider khác thủ công trong Printify Orders. |

> **Lưu ý thẻ riêng COGS:** Dùng thẻ Visa $500 chuyên dụng trả Printify (theo kế hoạch). Đảm bảo thẻ luôn có đủ số dư (mỗi áo thun ~$8–14 COGS + ship).

---

## BƯỚC 3 — Theo dõi sản xuất

| Hạng mục | Chi tiết |
|---|---|
| **Ai/Tool** | Printify Dashboard / Founder kiểm tra 1 lần/ngày |
| **Hành động cụ thể** | 1. Vào **Printify → Orders**, lọc theo trạng thái. 2. Chuỗi trạng thái bình thường: **On Hold → Sending to Production → In Production → Ready to Ship → Shipped**. 3. Theo dõi qua email Printify (Printify gửi email khi trạng thái thay đổi). |
| **Tiến độ thường gặp** | In production: **2–5 ngày làm việc** (thường 2–3 ngày với Monster Digital). Ready to Ship → Shipped: 1 ngày (chờ courier pickup). Giao tới khách Mỹ sau khi shipped: **2–5 ngày** (USPS/FedEx domestic). **Tổng từ order đến giao: ~7–10 ngày.** |
| **Xong = ?** | Trạng thái = **"Shipped"** + có tracking number trong Printify |
| **Thời gian mục tiêu** | Không can thiệp được — theo dõi để phát hiện tắc nghẽn sớm |
| **Lỗi thường gặp** | **Đơn kẹt "In Production" > 7 ngày:** mở ticket Printify Support (chat hoặc email, thường phản hồi trong 24–48h). **Printify network disruption:** kiểm tra printify.com/network-fulfillment-status để biết có sự cố tổng thể không. |

---

## BƯỚC 4 — Nhận tracking number & cập nhật Shopify

| Hạng mục | Chi tiết |
|---|---|
| **Ai/Tool** | Tự động (Printify webhook → Shopify) / Founder kiểm tra |
| **Hành động cụ thể** | 1. Khi carrier (USPS/FedEx/UPS) nhận hàng, Printify tạo tracking number và **tự động đẩy về Shopify** qua webhook. 2. Shopify ghi nhận order = **Fulfilled** + tracking number. 3. Shopify **tự gửi email "Your order has shipped"** kèm tracking cho khách. 4. Founder vào **Shopify Admin → Orders** xác nhận tracking number đã điền và order status = Fulfilled. |
| **Xong = ?** | Shopify order = **Fulfilled** + có tracking number thật (không phải placeholder) |
| **Thời gian mục tiêu** | Printify thường đẩy tracking trong 1–4h sau khi carrier nhận hàng |
| **Lỗi thường gặp** | **Tracking không tự đẩy về Shopify:** kiểm tra Printify integration còn active không · thử disconnect/reconnect Printify app trong Shopify · hoặc điền tracking thủ công vào Shopify (Orders → Fulfill → Add tracking). **Tracking number sai định dạng:** copy từ Printify dashboard, paste lại thủ công. |

---

## BƯỚC 5 — Upload tracking lên Shopify + PayPal (≤1h) [ĐIỂM QUAN TRỌNG NHẤT]

> Đây là bước quyết định **tiền PayPal được giải phóng sớm hay bị giữ 21 ngày**. Khi tracking được xác nhận giao thành công, PayPal thường release hold trong **2–3 ngày**.

| Hạng mục | Chi tiết |
|---|---|
| **Ai/Tool** | App tự động: **Synctrack** hoặc **TrackiPal** (Shopify App Store) / Founder backup thủ công |
| **Hành động cụ thể — Setup 1 lần:** | 1. Cài app **Synctrack – PayPal Tracking Sync** (hoặc TrackiPal) từ Shopify App Store. 2. Kết nối app với tài khoản PayPal Business (OAuth). 3. Bật chế độ **Auto-sync**: khi Shopify order = Fulfilled + có tracking → app tự gửi tracking lên PayPal API trong ≤2h. |
| **Hành động cụ thể — Mỗi đơn:** | 1. App tự động xử lý — không cần làm gì nếu setup đúng. 2. **Kiểm tra thủ công:** vào **PayPal Business → Activity → [transaction] → Add tracking info** — phải thấy tracking number đã được điền. 3. Nếu app chưa sync: upload thủ công ngay qua PayPal dashboard (Activity → chọn transaction → "Add tracking info" → nhập carrier + tracking number). |
| **Xong = ?** | Trong PayPal transaction details có tracking number đúng + carrier đúng · Thời điểm ghi nhận ≤1h từ khi Shopify fulfilled |
| **Thời gian mục tiêu** | **≤1h từ khi tracking xuất hiện trong Shopify** |
| **Lỗi thường gặp** | **App không sync:** kiểm tra OAuth token còn hiệu lực không (re-authorize định kỳ) · kiểm tra log lỗi trong app dashboard. **Tracking bị từ chối bởi PayPal:** tên carrier không match (VD: "USPS" vs "United States Postal Service") — dùng đúng tên carrier trong dropdown PayPal. **PayPal transaction ID không khớp:** đảm bảo Shopify Payment Gateway = PayPal và transaction ID được lưu đúng. |

> **Tại sao ≤1h quan trọng:** PayPal đánh dấu "seller uploaded tracking promptly" — đây là tín hiệu tích cực giúp giảm tỷ lệ reserve theo thời gian. Với tài khoản mới, mỗi đơn có tracking nhanh = tăng uy tín lũy tiến.

---

## BƯỚC 6 — Chăm sóc sau bán & đóng đơn

| Hạng mục | Chi tiết |
|---|---|
| **Ai/Tool** | Founder (email Shopify hoặc Gmail) |
| **Hành động cụ thể** | 1. **Ngày giao ước tính:** theo dõi tracking link (USPS/FedEx), nếu không cập nhật >3 ngày → chủ động email khách. 2. **Email D+1 sau giao:** "How's your [product]?" — ngắn gọn, hỏi phản hồi, nhắc để lại review nếu hài lòng. 3. **Đóng đơn:** khi tracking = Delivered → đánh dấu thủ công trong sổ theo dõi (hoặc Shopify tự cập nhật). 4. **Ghi nhận doanh thu:** PayPal release trong 2–3 ngày sau khi tracking = Delivered → kiểm tra số dư PayPal khớp với đơn. |
| **Xong = ?** | Tracking = **Delivered** · Không có dispute/complaint từ khách · PayPal balance tăng đúng số tiền |
| **Thời gian mục tiêu** | Email follow-up: trong 24–48h sau ngày giao ước tính |
| **Lỗi thường gặp** | **Tracking stale (không cập nhật):** đợi 24–48h (USPS thường chậm cập nhật), sau đó báo Printify nếu > 5 ngày. **Khách không nhận được (claim):** xem phần Xử lý ngoại lệ bên dưới. |

---

## XỬ LÝ NGOẠI LỆ

### NL-1: Đơn lỗi in (sai màu, sai thiết kế, chất lượng kém)

| Bước | Hành động |
|---|---|
| 1. Nhận complaint | Khách gửi ảnh chụp sản phẩm lỗi qua email/Shopify chat |
| 2. Xác nhận lỗi | Đánh giá ảnh — nếu rõ ràng là lỗi nhà in (không phải "buyer's remorse") → tiến hành bước 3 |
| 3. Báo Printify | **Printify Admin → Orders → [order] → Submit Issue** · Chọn "Request reprint" (hoặc "Request refund") · Upload ≤5 ảnh/video bằng chứng · Thêm mô tả lỗi cụ thể |
| 4. Deadline | Phải report **trong 30 ngày kể từ ngày giao** (Printify policy) |
| 5. Kết quả | Printify xử lý: **free reprint** (có order ID và tracking mới) hoặc **refund về Printify balance** |
| 6. Với khách | Thông báo sẽ gửi hàng mới (nếu reprint) hoặc hoàn tiền. **KHÔNG yêu cầu khách gửi trả** (POD không có return warehouse). |

**Tiêu chí lỗi Printify chấp nhận:** thiết kế in sai, màu lệch đáng kể, sản phẩm hỏng, giao sai size/màu so với đơn.
**Printify KHÔNG chấp nhận:** khách đổi ý, size không vừa (nếu khách chọn đúng), vấn đề do file design bị mờ/lỗi (lỗi của seller).

---

### NL-2: Giao sai (wrong item, wrong address)

| Nguyên nhân | Hành động |
|---|---|
| **Sai item (Printify lỗi)** | Báo Printify như NL-1 → free reprint + ship lại |
| **Sai địa chỉ (khách nhập sai)** | Nếu chưa shipped: vào Printify → Edit order → cập nhật địa chỉ. Nếu đã shipped: không thể thay đổi — khách tự nhận hoặc kiện theo carrier. Lesson: **luôn gửi email xác nhận địa chỉ cho đơn đầu tiên**. |
| **Delivered to wrong address (carrier lỗi)** | Mở claim với USPS/FedEx qua trang web của họ. Đồng thời báo Printify đính kèm bằng chứng claim. |

---

### NL-3: Refund cho khách

| Tình huống | Hành động |
|---|---|
| **Lỗi nhà in** | Offer reprint trước. Nếu khách muốn refund: hoàn tiền qua Shopify (Shopify Admin → Orders → Refund). Printify refund về balance của seller. |
| **Khách không nhận (INR — Item Not Received)** | Kiểm tra tracking trước (thường USPS chậm). Nếu >15 ngày kể từ ngày ship mà không có update: báo Printify → thường được reprint hoặc refund. Sau đó hoàn tiền hoặc ship lại cho khách. |
| **Khách đổi ý (change of mind)** | POD không hỗ trợ return/exchange theo chính sách Printify. Tùy quyết định của founder: có thể refund một phần như goodwill (VD 30%) hoặc từ chối — phải khớp với policy đã đăng trên store. |
| **Quy trình hoàn tiền Shopify** | Orders → [order] → Refund → chọn items → nhập lý do → confirm. Tiền về tài khoản PayPal của khách trong 3–5 ngày. |

---

### NL-4: Chargeback (tranh chấp qua ngân hàng/PayPal)

| Bước | Hành động |
|---|---|
| 1. Nhận thông báo | PayPal gửi email "A case has been opened against you" |
| 2. Phản hồi trong 10 ngày | Vào **PayPal Resolution Center → Respond** |
| 3. Tập hợp bằng chứng | Tracking number + proof of delivery (screenshot từ carrier) · Screenshot đơn Shopify · Ảnh sản phẩm đã gửi (nếu có) · Policy trang store (Refund/Shipping policy URL) |
| 4. Trường hợp "Item Not Received" | Upload tracking + delivery confirmation → PayPal Seller Protection **có thể** bảo vệ nếu: (a) địa chỉ là "confirmed PayPal address", (b) tracking xác nhận delivered. |
| 5. Trường hợp "Significantly Not as Described" | PayPal Seller Protection **không bảo vệ** trường hợp này. Cân nhắc hòa giải với khách trước khi mất toàn bộ tiền + phí chargeback. |
| 6. Phí chargeback | PayPal thường thu $15–20/case nếu thua. Ghi nhận vào chi phí vận hành. |

> [cần CEO xác minh] Tỷ lệ chargeback >1% có thể dẫn đến hạn chế tài khoản PayPal. Ưu tiên giải quyết trước khi leo thang.

---

## CHECKLIST NHANH — Mỗi đơn (in ra hoặc bookmark)

```
[ ] B1: Shopify order = "Paid" · địa chỉ hợp lệ · không fraud flag đỏ
[ ] B2: Printify nhận đơn · status "In Production" trong 24h
[ ] B3: Production ≤5 ngày (theo dõi hằng ngày)
[ ] B4: Shopify order = "Fulfilled" + tracking number thật
[ ] B5: PayPal transaction có tracking ≤1h (kiểm tra thủ công nếu app chưa sync)
[ ] B6: Email follow-up khách sau giao · PayPal balance tăng đúng
[ ] (ngoại lệ) Nếu có vấn đề → mở ticket Printify trong 30 ngày
```

---

## THỜI GIAN MỤC TIÊU TOÀN TRÌNH

| Giai đoạn | Thời gian mục tiêu |
|---|---|
| Đặt hàng → đẩy Printify | 0–2h (tự động) |
| Printify in xong → shipped | 2–5 ngày làm việc |
| Shipped → tracking về Shopify | 1–4h (webhook tự động) |
| Tracking về Shopify → upload PayPal | **≤1h** (app tự động, backup thủ công) |
| Tracking → giao tới khách Mỹ | 2–5 ngày (USPS/FedEx domestic) |
| Giao thành công → PayPal release | 2–3 ngày |
| **Tổng từ order đến tiền về** | **~10–15 ngày** |

---

## CÔNG CỤ & TÀI KHOẢN CẦN SETUP TRƯỚC KHI CÓ ĐƠN ĐẦU TIÊN

| Công cụ | Mục đích | Ghi chú |
|---|---|---|
| Shopify–Printify integration | Tự động đẩy đơn | Cài trong Printify App Store |
| **Synctrack** hoặc **TrackiPal** (Shopify App) | Auto-sync tracking → PayPal | Cài trước khi có đơn đầu |
| PayPal Business account | Nhận tiền + xử lý dispute | Đã setup ở W1 |
| Printify payment method (thẻ Visa COGS) | Trả tiền in | Thẻ riêng $500 |
| Printify Settings → Orders → Auto-submit | Đẩy production ngay, không chờ 24h | Bật "0h delay" |
| Printify Settings → Email notifications | Nhận cảnh báo mọi thay đổi trạng thái | Bật tất cả |

---

## PHỤ LỤC: Liên kết hữu ích

- Printify Order Status Guide: https://help.printify.com/hc/en-us/articles/15076632315665
- Printify Report Issue: https://help.printify.com/hc/en-us/articles/4483601288337
- Printify Reprint Policy: https://help.printify.com/hc/en-us/articles/4483625769105
- PayPal Release Payment Hold: https://www.paypal.com/us/cshelp/article/how-can-i-release-my-payments-on-hold-help129
- PayPal Seller Protection: https://www.paypal.com/us/legalhub/paypal/seller-protection
- Printify Network Status: https://printify.com/network-fulfillment-status/
- Synctrack App (Shopify): https://apps.shopify.com/synctrack
- TrackiPal App (Shopify): https://apps.shopify.com/trackipal

---

*Tài liệu vận hành — cập nhật khi có thay đổi chính sách Printify/PayPal. Cập nhật lần cuối: 2026-06-25.*
