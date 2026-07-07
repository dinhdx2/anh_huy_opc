# A7 — Diễn-giải mô-hình CAC break-even (kèm bảng-nhạy) — hero BộMẫu

> **TL;DR:** Ngưỡng **CAC-trần an-toàn ước-tính ~140-190k/đơn** tuỳ kịch-bản (Base ~153k, Bull ~190k, Bear ~140k) — nếu CAC-thực chạy ads (ước 150-800k/đơn theo red-team) rơi vào **200-400k**, mọi kịch-bản đều **ÂM** (lỗ mỗi đơn quy-đổi). Đây là **công-cụ đặt phanh trước khi chi ads**, KHÔNG phải dự-báo doanh-thu — mọi số ads/CAC/refund đều là **[benchmark ngành — cần CEO xác minh]**, CAC thật chỉ biết sau lô ads test đầu-tiên (đã LOCKED trong cổng NO-GO, xem `decisions-log.md`).

---

## 1. Mô-hình tính là gì, tính ra sao

**Công-thức lõi (đọc `cac-breakeven.csv` — Bảng 1):**

```
AOV (giá trị đơn trung-bình) = Giá hero + (tỷ-lệ mua order-bump x giá order-bump)
Doanh-thu sau hoàn-tiền     = AOV x (1 - refund%)
Tiền thuế                   = 7% x Doanh-thu sau hoàn-tiền     [GTGT 5% + TNCN 2% khoán — MẪU, cần kế-toán rà]
Tiền phí cổng               = %phí-cổng x Doanh-thu sau hoàn-tiền  [SePay chuyển-khoản ~0%]
CM/đơn TRƯỚC ads            = Doanh-thu sau hoàn-tiền - Tiền thuế - Tiền phí cổng
CAC BREAK-EVEN              = CM/đơn TRƯỚC ads  (đây chính là mức chi-ads/đơn tối-đa để CM/đơn SAU ads = 0)
```

Logic: **CM/đơn SAU ads = CM/đơn TRƯỚC ads − CAC-thực**. Khi CAC-thực = CAC break-even → CM/đơn = 0 (hoà vốn biến-đổi/đơn). CAC-thực CAO HƠN break-even → **CM/đơn ÂM** = mỗi đơn bán ra đang LỖ sau khi trừ chi-phí ads phân-bổ (dù giá bán và biên gộp trông "gần 100%" trước ads — đây chính xác là điều `strategy.md`/`budget.md` cảnh-báo: "ROAS từ biên ~100%" KHÔNG phải tín-hiệu lãi).

---

## 2. Đối-chiếu tay 1 kịch-bản (Base) — tự-kiểm công-thức CSV

Lấy đúng số ở cột **Base** trong `cac-breakeven.csv`, tính lại bằng tay:

- Giá hero P = 149.000đ; order-bump giá = 69.000đ, attach 35%.
- **AOV** = 149.000 + (0,35 × 69.000) = 149.000 + 24.150 = **173.150đ**  ✅ khớp CSV.
- **Refund 5%** → Doanh-thu sau hoàn-tiền = 173.150 × (1 − 0,05) = 173.150 × 0,95 = **164.492,5 → làm tròn 164.493đ**  ✅ khớp CSV.
- **Thuế 7%** = 0,07 × 164.492,5 = 11.514,475 → làm tròn **11.514đ**  ✅ khớp CSV.
- **Phí cổng** = 0% × 164.492,5 = **0đ** (SePay chuyển-khoản ngân-hàng, không phí theo % — xem nguồn cuối file)  ✅ khớp CSV.
- **CM/đơn trước ads = CAC break-even** = 164.492,5 − 11.514,475 − 0 = 152.978,025 → làm tròn **152.978đ**  ✅ khớp CSV.

→ **Kết-luận đối-chiếu:** công-thức trong `cac-breakeven.csv` tính đúng, tự tái-lập được bằng tay cho kịch-bản Base. (Bull/Bear dùng đúng công-thức, chỉ đổi input — không lặp lại đối-chiếu tay ở đây để tránh dư-thừa, nhưng cùng 1 hàm số.)

---

## 3. Ý-nghĩa 3 kịch-bản

| Kịch-bản | Khi nào xảy ra | CAC break-even | Đọc như thế nào |
|---|---|---|---|
| **Base** | Giả-định trung-vị: giá 149k, refund 5%, order-bump 35% khách mua thêm giá 69k | **~153.000đ/đơn** | Nếu CAC-thực (chi ads/đơn) ≤ ~153k → mỗi đơn còn lãi biến-đổi. Đây là ngưỡng dùng làm **mặc-định để đặt phanh ads test**. |
| **Bull** | Kịch-bản tốt: giá cao hơn (179k), refund thấp (3%), order-bump tốt hơn (40% khách mua, giá 79k) | **~190.000đ/đơn** | Chỉ đạt được nếu conversion/offer thật-sự tốt hơn kỳ-vọng — **KHÔNG dùng số Bull để lập ngân-sách ads mặc-định** (dễ overspend nếu thực-tế rơi về Base/Bear). |
| **Bear** | Kịch-bản xấu: giá thấp (149k), refund cao (8%), order-bump kém (30% khách mua, giá 49k) + phí cổng phát-sinh nhỏ (0,3% dự-phòng) | **~140.000đ/đơn** | Đây là **ngưỡng an-toàn nên dùng khi mới chạy ads test lô đầu** (thận-trọng) — nếu CAC-thực vượt mức này, dừng ngay để sửa phễu/offer thay vì tiếp-tục đốt tiền. |

**Ngưỡng CAC an-toàn khuyến-nghị cho lô ads test đầu-tiên: ≤ 140.000đ/đơn (dùng số Bear làm phanh, không dùng Base/Bull).** Đây là đề-xuất thận-trọng — **CEO/CFO chốt số chính-thức** khi vào lô ads test thật (khớp `budget.md` mục "trần-burn/tháng chốt với CFO khi vào lô ads").

---

## 4. Bảng-nhạy: vì sao đây là cảnh-báo đỏ, không phải bài-tập lý-thuyết

Từ **Bảng 2** trong `cac-breakeven.csv` (giữ nguyên giả-định Base, chỉ đổi CAC-thực và giá bán):

| CAC-thực/đơn | Giá 149.000đ → CM/đơn | Giá 179.000đ → CM/đơn |
|---|---|---|
| 100.000đ | **+52.978đ (DƯƠNG)** | **+79.483đ (DƯƠNG)** |
| 200.000đ | **-47.022đ (ÂM)** | **-20.517đ (ÂM)** |
| 300.000đ | **-147.022đ (ÂM)** | **-120.517đ (ÂM)** |
| 400.000đ | **-247.022đ (ÂM)** | **-220.517đ (ÂM)** |

**Đọc bảng này với cảnh-báo red-team đã ghi trong brief:** CAC cold-ads (quảng-cáo lạnh, brand 0 audience, FB/TikTok) thường ước **150-800k/đơn** `[benchmark ngành — cần CEO xác minh]`. Nhìn bảng trên:
- Chỉ có vùng **CAC ≤ ~140-190k** (tuỳ giá bán) mới giữ CM/đơn dương.
- Toàn-bộ dải **200-400k** (rất có-thể rơi vào thực-tế cold-ads) đều làm **CM/đơn ÂM nặng** — tức là càng chạy ads càng lỗ, dù "trông có vẻ" bán chạy (nhiều đơn ra nhưng mỗi đơn đang bù lỗ).
- **Kết-luận bắt-buộc:** **TUYỆT ĐỐI không chạy ads cold quy-mô lớn trước khi có số CAC-thực từ lô test nhỏ.** Lô test đầu phải giới-hạn ngân-sách nhỏ (trần CEO/CFO chốt), đo CAC-thực, rồi mới đối-chiếu lại bảng này để quyết scale/dừng — đúng quy-trình "Cổng PMF (phanh) = contribution-margin/đơn DƯƠNG" đã ghi trong `budget.md`.

---

## 5. Cảnh-báo grounding (bắt-buộc đọc trước khi dùng số)

1. **Mọi số CPC/CVR/CAC/refund/attach-rate trong mô-hình này đều là `[benchmark ngành — cần CEO xác minh]`** — KHÔNG phải số thật của BộMẫu (doanh-thu hiện tại = 0đ, chưa kinh-doanh, theo `state.md`). Đây là khung để **đặt ngưỡng phanh trước khi chi tiền**, không phải dự-báo doanh-thu/lợi-nhuận.
2. **CAC THỰC chỉ biết được sau khi chạy lô ads test đầu-tiên** — mô-hình này giúp biết "nếu CAC-thực ra số X thì có nên tiếp-tục không", KHÔNG thay-thế được việc đo thật.
3. **Thuế khoán 7% (GTGT 5% + TNCN 2%) là MẪU** dựa trên Thông-tư 40/2021/TT-BTC — cần **kế-toán có chứng-chỉ xác-minh** trước khi vận-hành chính-thức (ngưỡng miễn thuế, hình-thức đăng-ký hộ/cá-nhân KD, và quy-định Nghị-định 117/2025/NĐ-CP về sàn khấu-trừ-nộp-thay nếu bán qua sàn số — xem `budget.md`).
4. **Phí cổng SePay ~0%** dựa trên cơ-chế chuyển-khoản ngân-hàng qua QR (không thu phí theo %) — đã kiểm-tra qua trang chính-thức SePay 2026-07-07; **CEO cần xác-minh trực-tiếp khi đăng-ký** vì bảng giá/điều-kiện gói có-thể thay-đổi, và mô-hình đã dự-phòng 0,3% ở kịch-bản Bear cho rủi-ro phí phát-sinh ngoài ngưỡng miễn-phí.
5. **Giá order-bump (49-79k) là giả-định để chạy mô-hình** — `products.md` mới chốt order-bump = "mẫu thuế khoán TT40/tồn-kho" nhưng **CHƯA chốt giá** → khi CEO chốt giá thật, cập-nhật lại `cac-breakeven.csv` (thay 3 ô giá order-bump) rồi tính lại toàn-bảng.
6. Đây là công-cụ **đặt ngưỡng phanh (break-even)**, không phải kế-hoạch tài-chính đầy-đủ (chưa gồm chi-phí cố-định: công-cụ, thời-gian founder, chi content — xem `budget.md` mục Cơ-cấu chi-phí).

---

## Nguồn tham-khảo
- Thông-tư 40/2021/TT-BTC (thuế khoán hộ/cá-nhân kinh-doanh GTGT 5% + TNCN 2%) — đã dẫn sẵn trong `00-Brain/budget.md`, không tra lại (tránh trùng-lặp căn-cứ).
- SePay — https://sepay.vn/ · https://sepay.vn/bang-gia.html (phí giao-dịch chuyển-khoản ngân-hàng qua QR — không thu phí theo %; quan-sát 2026-07-07) — ⚠️ [benchmark — cần CEO xác-minh bảng-giá & điều-kiện áp-dụng khi đăng-ký thật].
- Số liệu CAC cold-ads 150-800k/đơn: theo brief red-team đã cung-cấp (task này) — `[benchmark ngành — cần CEO xác minh nguồn cụ-thể trước khi dùng làm căn-cứ ngân-sách]`.
