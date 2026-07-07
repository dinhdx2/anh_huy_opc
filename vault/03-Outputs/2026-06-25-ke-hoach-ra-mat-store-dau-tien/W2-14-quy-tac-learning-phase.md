# Quy tắc giữ Learning Phase & Kỷ luật vận hành Ads

**TL;DR:** Không can thiệp adset trong 3 ngày đầu — đây là thời gian Meta/TikTok học audience. Chỉ tắt angle khi vi phạm ngưỡng cứng (CTR<0.5% VÀ CPM>$20 cùng lúc), không tắt vì cảm tính. Mọi quyết định scale/kill đều theo GO/NO-GO tuần đã chốt trong execution plan.

---

## 1. Quy tắc Learning Phase (không thương lượng)

### 1.1 Thời gian tối thiểu trước khi can thiệp

- **Tối thiểu 3 ngày đủ spend** trước khi tắt bất kỳ adset nào.
- Với ngân sách ~$43–$45/ngày (W2) và ~$85–$100/ngày (W3), adset cần ít nhất **50 conversion events** để thoát learning. Trong giai đoạn test, 50 events không thực tế → chấp nhận adset ở trạng thái "learning" suốt W2–W3.
- **Không panic khi ngày 1–2 không có Purchase.** Learning phase thường tốn ngày 1–2 để tối ưu delivery trước khi convert.

### 1.2 Những thứ TUYỆT ĐỐI KHÔNG làm khi adset đang chạy

| Hành động cấm | Lý do |
|---|---|
| Tắt rồi bật lại adset | Reset hoàn toàn learning, mất data |
| Đổi audience/interest/targeting | Thuật toán phải học lại từ đầu |
| Thay đổi bid strategy hoặc budget >20% một lần | Gây "budget shock", thuật toán unstable |
| Chỉnh sửa creative đang chạy trong adset hiện tại | Creative mới = adset mới về mặt learning |
| Duplicate adset đang learning để "test nhanh" | Tạo overlap audience, cả 2 đều học chậm hơn |

### 1.3 Những thứ ĐƯỢC PHÉP làm mà không reset learning

- Thêm creative mới vào adset đã qua 3 ngày (không phải adset đang trong 72h đầu).
- Tắt creative kém trong adset mà không tắt adset (giữ creative tốt chạy tiếp).
- Đọc/phân tích số liệu bất cứ lúc nào — đọc không reset.
- Tăng budget tối đa 20% mỗi lần, cách nhau ít nhất 24h (W4, khi đã confirm ROAS).

---

## 2. Ngưỡng tắt Angle (Kill Rule)

### 2.1 Ngưỡng cứng — tắt angle, thay creative, GIỮ audience

> Tắt angle khi **CẢ HAI** điều kiện sau đồng thời đúng sau ≥3 ngày chạy:
>
> **CTR (Link Click) < 0.5%** VÀ **CPM > $20**

- Tắt angle = tắt creative/adset của angle đó. **KHÔNG thay audience.**
- Thay 2–3 creative mới (hook khác, format khác: nếu đang dùng ảnh thì thử video, nếu đang video thì thử carousel).
- Giữ nguyên adset structure, chỉ swap creative.

### 2.2 Ngưỡng quan sát — chưa tắt, theo dõi thêm

| Tình trạng | Hành động |
|---|---|
| CTR 0.5–1.5% + có ATC | Giữ nguyên, theo dõi thêm 2–3 ngày |
| CTR < 0.5% nhưng CPM ≤ $20 | Chưa tắt — CPM rẻ bù cho CTR thấp, quan sát |
| CPM > $20 nhưng CTR > 1.5% | Chưa tắt — audience đắt nhưng qualified |
| 0 ATC sau 3 ngày full spend | Soát lại landing page/giá/checkout, không chỉ ads |

### 2.3 Ngưỡng thắng — nhân rộng

| Tình trạng | Hành động |
|---|---|
| CTR > 1% + có ≥2 Purchase sau W2 | Angle đủ điều kiện sang W3 |
| Accounting_ROAS ≥ 1.5 xu hướng lên | Duplicate thành campaign riêng (W3, budget ~$300) |
| Cash_ROAS ≥ 2.3–2.4 | Scale mạnh: tăng budget 20–30%/ngày |

---

## 3. Lịch GO/NO-GO theo tuần

### Tuần 1 → Tuần 2 (ngày 7 kiểm tra)
**GO khi đủ CẢ 4:**
- [ ] Cổng thanh toán thông + $1 test về ví
- [ ] Pixel Purchase xanh ở Test Events
- [ ] ≥10 design qua IP Gate (log USPTO)
- [ ] Store live đủ 4 trang policy

**NO-GO:** Ở lại Tuần 1, không chạy một xu ads nào.

### Tuần 2 → Tuần 3 (ngày 14 kiểm tra, sau ~$300 spend)
**GO khi đủ CẢ 2:**
- [ ] ≥1 angle có CTR > 1%
- [ ] ≥2 Purchase verified (đã ghi nhận trong Shopify/Printify)

**NO-GO đặc biệt:** Nếu $300 hết mà **0 Purchase** → DỪNG ads hoàn toàn. Soát lại store UX, giá, checkout flow, không chạy thêm ads cho đến khi xác định được điểm nghẽn.

### Tuần 3 → Tuần 4 (ngày 21 kiểm tra, sau ~$600 spend W3)
**GO khi đủ CẢ 2:**
- [ ] ≥1 angle Cash_ROAS ≥ 1.5 đang có xu hướng lên
- [ ] ≥8–15 đơn cộng dồn verified

**HARD-STOP Tuần 3:** Nếu đã tiêu >$1,400 tổng mà Cash_ROAS < 0.8 và 0 đơn → DỪNG toàn bộ, pivot sang Etsy organic hoặc review lại product-market fit.

### Tuần 4 — Điều kiện Scale (đủ cả 4 mới scale)
- [ ] Cash_ROAS ≥ 1.5 đang có xu hướng lên
- [ ] ≥5–8 Purchase verified
- [ ] 1 angle rõ ràng vượt trội so với 2 angle còn lại
- [ ] PayPal không hold / không có cảnh báo limit

**Nếu không đủ sau $1,200 spend:** NO-GO scale — đánh giá lại product-market fit, không đổ thêm tiền vào cấu trúc hiện tại.

---

## 4. Stop-Loss tổng (bất kỳ tuần nào)

| Điều kiện | Hành động bắt buộc |
|---|---|
| Tổng spend > $3,500 mà chưa có angle ROAS ≥ 1.5 | DỪNG toàn bộ ads ngay lập tức |
| $500 dự phòng cuối kế hoạch | BẤT KHẢ XÂM PHẠM — không dùng cho ads |
| PayPal hold > 21 ngày, ảnh hưởng COGS | Chuyển 2Checkout làm cổng chính, không dừng ads |

---

## 5. Kỷ luật vận hành hằng ngày

### Giờ xem số (nhất quán, tránh reactive)
- Xem dashboard **1 lần/ngày** — buổi sáng (7–9h) hoặc buổi tối (20–22h). KHÔNG check liên tục.
- Lý do: số liệu trong ngày chưa settle, check giữa giờ dễ panic và ra quyết định sai.

### Checklist điền dashboard hằng ngày (file W2-15-dashboard-ads.csv)
1. Điền Spend, Impressions, CPM, Clicks, CTR, CPC từ Ads Manager.
2. Điền ATC, Checkout, Purchase từ Ads Manager (event) — cross-check với Shopify orders.
3. Điền Revenue = số đơn x giá bán thực (lấy từ Shopify, không dùng số Ads Manager).
4. Tính Accounting_ROAS = Revenue / Spend.
5. Tính Cash_ROAS = (Revenue từ đơn PayPal đã released) / Spend. Nếu chưa release = $0.
6. Ghi Note ngắn: có gì bất thường không (CPM tăng đột ngột, CTR drop, PayPal hold mới).

### Quy tắc ghi chép thay đổi
- Mọi thay đổi cấu trúc campaign (dù nhỏ) phải ghi vào cột Note với timestamp.
- Không thay đổi gì mà không ghi lại — đây là dữ liệu để học bài sau.

---

## 6. Tổng hợp nhanh — In ra dán cạnh màn hình

```
TRƯỚC KHI TẮT/THAY BẤT CỨ THỨ GÌ, HỎI:
1. Adset đã chạy đủ 3 ngày chưa?        → Chưa: ĐỢI
2. CTR < 0.5% VÀ CPM > $20 cùng lúc?   → Không: ĐỢI / Có: thay creative
3. Đã đủ GO-criteria tuần này chưa?     → Chưa: theo kế hoạch
4. Tổng spend đã > $3,500 chưa?         → Rồi: DỪNG TOÀN BỘ
```
