# DECISION REPORT — Kế hoạch 30 ngày ra mắt store POD đầu tiên ($5k)

## TL;DR 30 giây
Cả 8 phòng đồng thuận: giải quyết cổng thanh toán TRƯỚC khi chi 1 đồng ads, chỉ bán áo thun, mọi design qua cổng kiểm duyệt IP, mục tiêu tháng 1 là tìm ≥1 angle ROAS ≥2.2 chứ không phải lãi. CEO cần chốt ngay 3 việc: (1) chọn TikTok hay Facebook chạy trước tùy năng lực quay video của founder, (2) bác đề xuất Stripe "vùng xám" của Operations — dùng PayPal Business + 2Checkout, (3) dùng ROAS hòa vốn thực ~2.3-2.4 (đã cộng phí cổng) thay vì 2.2 khi quyết định scale. Rủi ro tử vong lớn nhất: PayPal/cổng thanh toán bị giữ tiền (hold 21-180 ngày) khiến có đơn nhưng không thu được tiền.

## Khuyến nghị (theo ưu tiên)
1. **Mở PayPal Business + Payoneer (nhận tiền) + 2Checkout backup, test 1 giao dịch $1 thật** — Operations/Sales/Legal — Ngày 1-7 (hard-stop trước ads).
2. **Dựng 4 trang policy (Refund/Shipping/ToS/Privacy) + cổng kiểm duyệt IP nội bộ** — Legal — Ngày 1-7.
3. **Cài Pixel (TikTok+Meta) và verify event Purchase TRƯỚC mọi đồng ads** — Marketing/Reporting — trước launch.
4. **Upload 6-8 design áo thun đã qua IP gate (USPTO TESS + log)** — Product-Tech — Ngày 3-7.
5. **Chạy 1 kênh ads, chia $2,800 thành 4 đợt go/no-go (~$300→$600→$700-900→phần còn lại)** — Marketing/Growth — Tuần 2-4.
6. **Khóa cứng $500 dự phòng — tuyệt đối không dùng cho ads** — Finance — toàn kỳ.

## Điều chỉnh so với phương án ban đầu
- **Marketing** đề xuất cắt ads từ $2,800 xuống **$2,150** (để dư $650 scale nhanh). 6 phòng khác giữ $2,800 — đề xuất này thiếu căn cứ và mâu thuẫn với chính lo ngại "thiếu creative" của Marketing.
- **Finance + Marketing** điều chỉnh ROAS hòa vốn thực lên **~2.3-2.4** (cộng phí cổng VN 3-4.4% + chuyển đổi ngoại tệ), thay vì 2.2 lý thuyết.
- **Operations** đề xuất Stripe làm cổng primary qua Payoneer virtual account — bị 4 phòng phản đối (xem cảnh báo).

## Mỗi phòng nói gì
| Phòng | role_used | Tóm tắt |
|---|---|---|
| 02-Strategy | strategy-lead | TikTok trước; 3 micro-angle (introvert/burnout/pet-parent); thanh toán là nút sống còn. |
| 01-Governance | legal-officer | IP là rủi ro tử vong #1; bắt buộc USPTO TESS từng design; PayPal có thể giữ tiền. |
| 03-Finance | cfo | $5k là "single bullet"; ROAS thực ~2.3-2.4; chia ads 3 đợt, khóa $500. |
| 05-Operations | ops-manager | Monster Digital print partner; đề xuất Stripe+Payoneer (gây tranh cãi); SOP order solo. |
| 06-Sales | sales-lead | **Facebook trước** (hợp người mới); chỉ áo thun; PayPal là cổng khả thi duy nhất. |
| 07-Marketing | ads-specialist | **TikTok trước**; cấu trúc test chi tiết; đề xuất cắt ads xuống $2,150. |
| 09-Product-Tech | product-manager | TikTok trước; cảnh báo PayPal hold 21 ngày; Payoneer chỉ là ví, không phải checkout. |
| 11-Reporting | data-analyst | **Facebook trước** (attribution chắc); metric tree + dashboard Looker Studio. |
| 12-Growth | growth-strategist | **Facebook trước** (solo không kham nổi creative TikTok); ICE-scored angle. |

## Tranh luận Pro / Con

**XUNG ĐỘT #1 — TikTok hay Facebook trước? (chia 4-4, xung đột thật)**

| PRO TikTok trước (Strategy, Ops, Marketing, Product-Tech) | PRO Facebook trước (Sales, Reporting, Growth) |
|---|---|
| CPM rẻ hơn (~$5-10 vs $14+), tiền test đi xa hơn; humor native với TikTok; impulse buy tốt; tự quay CapCut rẻ | Attribution/Pixel trưởng thành hơn cho người mới; Advantage+ auto-optimize; targeting interest sâu; tài liệu tiếng Việt nhiều |
| CON: cần 3-5 creative video/tuần — quá tải solo founder | CON: CPM đắt ~50%, đốt budget nhanh với pixel trống |

→ Yếu tố quyết định mà KHÔNG phòng nào hỏi rõ: **founder có quay được video không?** Có → TikTok; Không → Facebook.

**XUNG ĐỘT #2 — Cổng thanh toán:** Operations đề xuất Stripe qua "Payoneer virtual US account + EIN ảo" làm primary. 4 phòng (Product-Tech, Sales, Strategy, Legal) phản đối: PayPal Business là checkout khả thi duy nhất; Payoneer chỉ là ví nhận tiền. → Stripe yêu cầu US entity thật; dùng danh tính ảo là vùng xám dễ bị khóa giữ tiền.

**XUNG ĐỘT #3 — ROAS hòa vốn:** Brain/đa số = 2.2; Finance+Marketing = 2.3-2.4 (sau phí); Growth = có thể 1.82 nếu biên 55%. → Chưa ai có giá Printify + giá bán thực để chốt.

## 3 góc nhìn đáng chú ý
1. **(Reporting) Rủi ro đo lường sai từ gốc lớn hơn rủi ro ads:** nếu Pixel chưa verify event Purchase trước khi chạy, mất toàn bộ conversion data — không biết ROAS thực, không tối ưu được. Nhiều người mới hỏng đúng ở khâu này.
2. **(Growth) Mâu thuẫn timeline chưa giải quyết:** "20-50 đơn/30 ngày" (mục tiêu Brain) vs "ROAS beginner tháng 1 thường 0.8-1.5" (cảnh báo của chính Strategy+Growth). Hai kỳ vọng này không tương thích — CEO phải chọn 1.
3. **(Finance/Product-Tech) PayPal hold khi đang nợ Printify:** kịch bản "có doanh thu nhưng không có dòng tiền" — bị hold 21-180 ngày trong khi vẫn phải trả COGS cho Printify. Chưa phòng nào có phương án dòng tiền cụ thể ngoài "upload tracking nhanh".

## ⚠️ Cảnh báo claim thiếu căn cứ
| Claim | Phòng | Vấn đề |
|---|---|---|
| Stripe qua "Payoneer virtual US + EIN ảo" làm cổng primary | **Operations** | Rủi ro pháp lý cao; chính Ops thừa nhận "cần nghiên cứu thêm". Đề nghị BÁC. |
| Cắt ads xuống $2,150, dư $650 | **Marketing** | Không giải thích vì sao tốt hơn test thêm; mâu thuẫn nội bộ. |
| Mọi benchmark CPM/CTR/CPC/ROAS (TikTok $5-10, Meta $14, ROAS ngành 2.49/4.11/4.2x, CVR 1.9%) | **Tất cả** | Đều là benchmark ngành, KHÔNG phải data store này — mọi phòng tự gắn "[cần CEO xác minh]". Không scale dựa trên đây. |
| ROAS ngành 4.11 (Meta)/4.2x | Sales, Reporting | Là số của brand có social proof, không áp dụng store zero-data — gây kỳ vọng sai. |
| AOV $28-35, biên gộp 45-55%, ROAS hòa vốn 2.2 | Tất cả | Phụ thuộc giá bán + giá Printify partner chưa chốt — toàn bộ phép tính xây trên số chưa xác nhận. |
| CPC apparel Facebook ~$0.45 | Reporting | Bất thường thấp so với mục tiêu CPC ~$1.5 các phòng khác — nghi sai nguồn. |
| Tư cách pháp lý người bán (cá nhân/hộ KD/DN) | Legal, Finance | Chưa xác minh — ảnh hưởng thuế TNCN + khấu trừ chi phí. |

**3 quyết định CEO phải chốt ngay:** (1) TikTok hay Facebook — theo năng lực quay video của founder; (2) Bác Stripe vùng xám, dùng PayPal + 2Checkout; (3) Quyết định scale dựa trên ROAS thực ~2.3-2.4 và data thật từ tuần 2, không dùng benchmark vay mượn.