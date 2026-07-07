# DECISION REPORT — KẾ HOẠCH THỰC THI FACEBOOK-FIRST 30 NGÀY (VÒNG 2)

## TL;DR 30 giây
6/7 phòng thống nhất hạ mục tiêu từ "20-50 đơn" xuống "15-25 đơn + tìm 1 angle ROAS ≥2.2 + chạy 1 đơn A-Z không lỗi" — vì pixel trống tháng 1 không thể đạt 50 đơn. Hành động ngay: Tuần 1 KHÔNG chi ads, dồn lực verify Pixel/CAPI event Purchase + mở 3 cổng thanh toán + lập quỹ ứng COGS $600 tách riêng. Rủi ro lớn nhất: PayPal hold 21+ ngày làm cạn tiền nạp Printify dù vẫn có đơn — đứt fulfillment dẫn tới chargeback và khóa tài khoản.

## Khuyến nghị (ưu tiên)
1. **Verify Pixel + CAPI bắn đúng event Purchase trước khi chi 1 đồng ads** — Product-Tech — Ngày 2-3.
2. **Lập quỹ ứng COGS $600 tách riêng (không trộn ví ads) + buffer thẻ Visa $500 chỉ trả Printify** — Finance/Operations — Ngày 5-7.
3. **Mở PayPal Business (khai đúng mô hình POD retail/drop-ship, KHÔNG khai cá nhân/freelance) + Payoneer + 2Checkout, test $1 mỗi cổng** — Operations/Governance — Ngày 1-5.
4. **Dựng IP Gate: mọi design qua tmsearch.uspto.gov (KHÔNG dùng TESS — đã ngừng 30/11/2023) + 4 trang policy FTC** — Governance — Ngày 2-7 và liên tục.
5. **Chạy 1 Advantage+ Shopping Campaign test 3 angle (introvert/burnout/pet-parent) + retargeting từ ngày 10** — Marketing — Tuần 2.
6. **Chi ads theo 4 đợt go/no-go $700, mỗi đợt là 1 cổng giải ngân** — Finance — Tuần 1-4.
7. **Dựng cây KPI với North Star = ROAS 7 ngày rolling, dashboard Google Sheets + Looker Studio** — Reporting — Ngày 2-3.

## Điều chỉnh so với phương án ban đầu
- **Growth + Marketing + Reporting**: bỏ mục tiêu "50 đơn" (vanity metric) → "15-25 đơn + 1 angle ROAS ≥2.2". Lý do: pixel trống cho CTR/CVR thấp tháng 1.
- **Marketing (RỦI RO #4)**: tách ngưỡng ROAS — *tiếp tục* ≥1.5x có trend tăng (tháng 1) vs *scale mạnh* ≥2.3-2.4x (tháng 2). Lý do: ép 2.3-2.4 ngay tháng 1 sẽ tắt ads khi pixel đang học.
- **Governance**: sửa "USPTO TESS" thành tmsearch.uspto.gov (TESS đã ngừng vận hành).
- **Operations/Growth**: đề xuất 2Checkout làm cổng chính nếu PayPal hold kéo dài (payout 7-15 ngày < hold 21 ngày).

## Mỗi phòng nói gì
| Phòng | role_used | Tóm tắt |
|---|---|---|
| Marketing | ads-specialist | ASC test 3 angle; tuần 1 $0 ads; tiêu chí tắt CTR<0.5%, scale ROAS>1.5x; 50 đơn bất khả. |
| Finance | cfo | Quỹ COGS $600 tách riêng; 4 đợt go/no-go $700; stop-loss $1,400 nếu 0 đơn ROAS<0.8. |
| Operations | ops-manager | 3 cổng thanh toán + buffer $500; SOP 6 bước/đơn; upload tracking ≤1h để release PayPal sớm. |
| Product-Tech | tech-lead | Shopify Dawn + Printify; CAPI native; verify Purchase event là việc số 1; 18-24 mockup. |
| Governance | legal-officer | IP Gate 5 mục/design; khai PayPal đúng mô hình; 4 trang policy FTC; tmsearch thay TESS. |
| Reporting | data-analyst | NSM = ROAS 7 ngày rolling; cây KPI CPM/CTR/CPC/CVR; track Cash ROAS vs Accounting ROAS. |
| Growth | growth-strategist | 4 milestone tuần; ICE score 3 angle; hard-stop $3,500 nếu ROAS<1.5; pivot Etsy/TikTok. |

## Tranh luận Pro / Con
| Điểm nóng | PRO | CON |
|---|---|---|
| Mục tiêu 50 đơn | Số đơn dễ truyền đạt, khả thi "về toán học" (Marketing) | 30 đơn ROAS 1.0 = lỗ; là vanity metric (Reporting, Growth, Finance) |
| ROAS tháng 1 2.3-2.4 | Hòa vốn thực, tránh scale mù (Finance) | Cold traffic thực 0.8-2.0x → tắt ads quá sớm (Marketing RỦI RO #4) |
| Tốc độ chi ads | Cần $20-25/adset/ngày để có data ý nghĩa (Marketing, Growth) | 4 đợt $700 go/no-go bảo vệ runway (Finance, Reporting) |
| Số angle test | 3 angle qua ASC, Meta tự phân (Tech, Marketing) | $15/adset×3 quá mỏng, nên 2 angle (Growth RỦI RO #4) |
| Cổng chính | PayPal khách US tin (CEO chốt) | 2CO payout nhanh hơn nếu PayPal hold (Operations, Growth) |

Phân giải đa số: dùng ASC (1 campaign Meta tự phân creative) giải được nỗi lo budget mỏng mà vẫn test 3 angle; Tuần 1 chỉ chi ads ngày 5-7 (~$100) sau khi pixel verified.

## 3 góc nhìn đáng chú ý
1. **Reporting**: tồn tại 2 loại ROAS — "Accounting ROAS" (Shopify Revenue) vs "Cash ROAS" (tiền PayPal đã release). Vì PayPal hold 21 ngày, quyết định scale dựa Accounting ROAS sẽ quá lạc quan khi tiền chưa về. Track riêng cả hai.
2. **Governance**: gốc của rủi ro dòng tiền #3 không chỉ là chính sách PayPal, mà là **khai sai mô hình kinh doanh** — khai "cá nhân/freelance" để né phí là lý do bị limit phổ biến nhất. Khai đúng POD retail từ ngày 1 giảm nguy cơ hold.
3. **Reporting/Tech**: với $233/adset, exit learning phase (cần ~50 Purchase/7 ngày) gần như bất khả — nên đặt optimization event xuống Add-to-Cart tuần 1-2 để thu data nhanh, chuyển sang Purchase khi đủ.

## ⚠️ Cảnh báo claim thiếu căn cứ
- **CPM $9.23 / CPC $0.45-0.78** (Marketing, Reporting) — số của brand có pixel data, store mới cao hơn 30-50% [đã tự gắn cần xác minh].
- **CVR POD 1.5-2.5%** (Reporting, Tech) — benchmark ngành, chưa có data thật.
- **CPA cold traffic POD $35-60/đơn** (Growth) — [cần CEO xác minh].
- **iOS14 mất 30-40% attribution** (Tech) — benchmark chung chưa xác minh cho POD.
- **PayPal VN hold 21 ngày + phí rút 1-2.5%** (Finance, Operations) — [cần xác minh rate hiện tại].
- **DN đã có pháp nhân VN hay bán danh nghĩa cá nhân?** (Governance, Finance) — CHƯA RÕ, ảnh hưởng trực tiếp cách khai PayPal + nghĩa vụ thuế/hóa đơn TT78. **CEO PHẢI trả lời.**
- **Mọi mục tiêu số đơn (15-25, 30-45)** (tất cả phòng) — suy từ benchmark, không phải data thật, chỉ dùng đặt ngưỡng.

---

**3 quyết định CEO cần chốt (pause points):** (1) Đổi KPI sang "15-25 đơn + 1 angle ROAS ≥2.2 + 1 đơn A-Z sạch"? (2) Chấp nhận tách ngưỡng ROAS *tiếp tục* ≥1.5x vs *scale* ≥2.3-2.4x? (3) DN đã có ĐKKD VN chưa?

**2 điều kiện tiên quyết KHÔNG thương lượng (mọi phòng đồng ý):** (a) Pixel/CAPI verify event Purchase trước khi chạy ads; (b) quỹ ứng COGS $600 tách riêng + 100% design qua IP Gate.

Tài liệu tham chiếu (đường dẫn tuyệt đối): `/home/user/vn-opc-claude/vault/strategy.md`, `/home/user/vn-opc-claude/vault/budget.md`, `/home/user/vn-opc-claude/vault/products.md`, `/home/user/vn-opc-claude/vault/07-decision-report.md`; persona tại `/home/user/vn-opc-claude/knowledge/`.