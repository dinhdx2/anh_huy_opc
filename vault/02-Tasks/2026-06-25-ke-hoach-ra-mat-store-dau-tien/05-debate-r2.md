# Biên bản tranh luận vòng 2 (Facebook-first) — 2026-06-25

Tôi sẽ phân tích các quan điểm phòng ban và xây dựng tranh luận. Đây là bước tổng hợp debate, không cần đọc thêm file — dữ liệu đã đầy đủ trong input.

# TRANH LUẬN HỘI ĐỒNG — STORE POD FACEBOOK-FIRST (30 NGÀY)

**TL;DR:** 7 phòng đồng thuận 3 điểm cứng: (1) mục tiêu "50 đơn" KHÔNG thực tế — đổi sang 15-25 đơn + 1 angle ROAS ≥2.2; (2) Pixel/CAPI phải verify Purchase event TRƯỚC khi chi 1 đồng ads; (3) rủi ro dòng tiền PayPal-hold-21-ngày là nút thắt sống còn, cần quỹ ứng COGS riêng. Mâu thuẫn chính còn lại: tốc độ chi ads (Growth/Ads muốn $2,800 vs Finance/CFO siết go/no-go 4 đợt) và ngưỡng ROAS tháng 1 (2.3-2.4 hay 1.5).

---

## I. TRANH LUẬN PRO / CON THEO 5 ĐIỂM NÓNG

### Điểm 1 — Mục tiêu "20-50 đơn/30 ngày"

| PRO (giữ mục tiêu đơn) | CON (bỏ/đổi KPI) |
|---|---|
| Số đơn là tín hiệu cầu thực tế, dễ truyền đạt cho founder solo | Ads, Finance, Ops, Growth, Reporting ĐỀU phản bác: 50 đơn cần CTR>2% + CVR>1.5% ngay tuần 1 — bất khả với pixel trống |
| 50 đơn khả thi "về mặt toán học" ($2,800 / CPA ~$56) nếu mọi thứ tối ưu | Reporting: "30 đơn ROAS 1.0 = lỗ"; số đơn là **vanity metric**, NSM phải là ROAS |

**Đồng thuận 6/7 phòng:** thay bằng *"15-25 đơn + 1 angle ROAS ≥2.2 + 1 đơn chạy A-Z không lỗi"*. **Ads + Growth + Reporting hội tụ cùng con số** → độ tin cậy cao.

### Điểm 2 — Ngưỡng ROAS tháng 1: 2.3-2.4 (CEO chốt) hay 1.5?

| PRO (giữ 2.3-2.4) | CON (hạ xuống 1.5 + trend) |
|---|---|
| Là ngưỡng hòa vốn thực + đệm phí cổng; CEO đã chốt; tránh scale mù | Ads (RỦI RO #4): cold traffic tháng 1 thực tế 0.8-2.0x; ép 2.3-2.4 ngay → **tắt ads quá sớm khi pixel đang học** |
| Bảo toàn runway, không đốt tiền theo ROAS ảo | CFO/Growth: dùng 2.3-2.4 làm ngưỡng **SCALE** (tháng 2), còn 1.5x + trend tăng 2 tuần là đủ để **tiếp tục** tháng 1 |

**Phân giải (đồng thuận ngầm):** tách 2 ngưỡng — *tiếp tục* ≥1.5x có trend tăng; *scale mạnh* ≥2.3-2.4x. Đây không mâu thuẫn với CEO, chỉ làm rõ giai đoạn.

### Điểm 3 — Tốc độ chi $2,800 ads

| PRO Tăng trưởng (Ads/Growth/Tech) | CON Thận trọng (CFO/Reporting) |
|---|---|
| Cần đủ budget/adset ($20-25/ngày) để thuật toán có data ý nghĩa; budget quá mỏng = không bao giờ thoát learning | CFO: chia **4 đợt $700 go/no-go**, mỗi đợt là 1 cổng; chỉ giải ngân đợt sau khi đợt trước qua cửa |
| ASC cần ≥50 Purchase event/7 ngày để exit learning | Reporting: $233/adset → ~11 đơn/tuần để exit learning — **rất khó**; đổi optimization event sang Add-to-Cart tuần 1-2 |

**Mâu thuẫn còn mở** (cần CEO quyết): Ads đề xuất Tuần 1 = $0 (setup), Growth đề xuất Tuần 1 = $105-315 (test sớm). **Khuyến nghị cân bằng:** Tuần 1 chỉ chi ads cuối tuần (ngày 5-7) SAU khi pixel verified, ~$100, để vừa giữ kỷ luật của Ads vừa lấy signal sớm như Growth.

### Điểm 4 — Số angle test song song: 2 hay 3?

| PRO 3 angle (Ads/Tech/Reporting) | CON 2 angle (Growth RỦI RO #4) |
|---|---|
| ASC tự phân bổ, test rộng tìm winner nhanh | $15/ngày/adset × 3 quá mỏng để Meta tối ưu; nên chạy 2 angle mạnh nhất trước |

**Phân giải:** dùng ASC (1 campaign, Meta tự phân creative) thay vì 3 adset thủ công → giải quyết được nỗi lo budget mỏng của Growth mà vẫn test 3 angle. Tech + Ads đã đồng ý dùng ASC.

### Điểm 5 — Cổng thanh toán chính: PayPal hay 2Checkout?

| PRO PayPal-first (CEO chốt kênh) | CON ưu tiên 2Checkout (Ops/Growth) |
|---|---|
| PayPal phổ biến, khách US tin tưởng, checkout nhanh | Ops/Growth: 2CO payout 7-15 ngày < PayPal hold 21 ngày → **vòng tiền ngắn hơn**, nên set 2CO làm cổng chính nếu PayPal hold kéo dài |

**Đồng thuận:** chạy song song, PayPal mặc định nhưng 2CO + Payoneer là van xả dòng tiền bắt buộc có từ ngày 1.

---

## II. BA GÓC NHÌN TỔNG HỢP

### 🚀 Góc TĂNG TRƯỞNG (Ads + Growth + Tech)
Chi đủ mạnh để vượt learning phase, test 3 angle qua ASC, tìm winner trong 2 tuần rồi scale 20-30%/lần. Chấp nhận ROAS <2.2 tháng 1 như "học phí". Mục tiêu: tìm 1 angle viral sớm → 30-45 đơn nếu may mắn. **Rủi ro nếu nghe theo:** đốt budget trong learning phase, panic-scale sớm.

### 🛡️ Góc THẬN TRỌNG (Finance + Governance + Reporting)
Vốn $5k là TOÀN BỘ → runway thực ~1 tháng. 4 đợt go/no-go $700, quỹ ứng COGS $600 tách riêng, stop-loss cứng tại $1,400-2,000 nếu 0 đơn. IP Gate cho mọi design (tránh takedown mất sạch ad spend), khai PayPal đúng mô hình POD. **Rủi ro nếu nghe theo:** quá rụt rè, không bao giờ đủ data để kết luận angle nào tốt.

### ⚖️ Góc CÂN BẰNG (Operations + tổng hợp)
- **Tuần 1:** $0-100 ads, dồn lực setup hạ tầng (Pixel/CAPI verified, 3 cổng thanh toán, 18-24 creative, 4 trang policy, IP Gate).
- **Tuần 2-3:** chi có kỷ luật theo cổng go/no-go, ASC 3 angle, retargeting từ ngày 10.
- **Tuần 4:** go/no-go cuối — scale chỉ khi ROAS ≥2.3 + ≥5 đơn verified; nếu không, giữ $1,500 buffer.
- **Dòng tiền:** quỹ COGS $600 riêng + buffer thẻ $500 + upload tracking ≤1h để release PayPal sớm. Giới hạn ~30-35 đơn fulfill trong 14 ngày đầu.

---

## III. CLAIM THIẾU CĂN CỨ (cần CEO/data xác minh)

| Claim | Phòng nêu | Vấn đề |
|---|---|---|
| CPM apparel US ~$9.23; CPC $0.45-0.78 | Ads/Reporting | Số của brand có pixel data — **store mới cao hơn 30-50%**, đã tự gắn [cần xác minh] |
| CVR POD 1.5-2.5% | Reporting/Tech | Benchmark ngành, chưa có data thật store này |
| CPA cold traffic POD $35-60/đơn | Growth | Tự gắn [cần CEO xác minh] |
| iOS14 mất 30-40% attribution | Tech | Benchmark chung, chưa xác minh cho ngành POD |
| PayPal VN hold 21 ngày + rate rút 1-2.5% | Finance/Ops | [cần xác minh rate hiện tại]; phụ thuộc hồ sơ từng tài khoản |
| **DN đã có pháp nhân VN hay bán danh nghĩa cá nhân?** | Governance/Finance | **Chưa rõ — ảnh hưởng lớn: cách khai PayPal, nghĩa vụ thuế/hóa đơn TT78. CEO PHẢI trả lời.** |
| ROAS Facebook báo cao hơn thực ~15-25% (attribution + PayPal hold) | Reporting/Growth | Cần track "Cash ROAS" vs "Accounting ROAS" riêng |
| Mọi mục tiêu số đơn (15-25, 30-45...) | Tất cả | Suy ra từ benchmark, **không phải data thật** — chỉ dùng đặt ngưỡng |

**Lỗi factual đã được Governance bắt:** brief ghi "USPTO TESS" — công cụ này đã NGỪNG 30/11/2023, phải dùng tmsearch.uspto.gov. (Đây là correction có căn cứ, không phải claim thiếu căn cứ.)

---

## IV. 3 QUYẾT ĐỊNH CEO CẦN CHỐT (pause points)

1. **KPI mục tiêu:** giữ "20-50 đơn" hay đổi sang "15-25 đơn + 1 angle ROAS ≥2.2 + 1 đơn A-Z sạch"? (6/7 phòng đề xuất đổi)
2. **Ngưỡng ROAS tháng 1:** chấp nhận tách "tiếp tục ≥1.5x + trend" vs "scale ≥2.3-2.4x"? (giải mâu thuẫn Ads RỦI RO #4 vs CEO chốt cũ)
3. **Pháp nhân:** DN đã có ĐKKD VN chưa, hay đang bán danh nghĩa cá nhân? (chặn việc khai PayPal đúng mô hình — gốc rủi ro dòng tiền #3)

Hai điều kiện tiên quyết KHÔNG thương lượng (mọi phòng đồng ý): **(a) Pixel/CAPI verify Purchase event trước khi chạy ads; (b) quỹ ứng COGS $600 tách riêng + 100% design qua IP Gate.**

Đường dẫn liên quan (vault, đường dẫn tuyệt đối khi ghi tài liệu): `/home/user/vn-opc-claude/vault/` — strategy.md, budget.md, products.md, 07-decision-report.md và persona trong `/home/user/vn-opc-claude/knowledge/`.