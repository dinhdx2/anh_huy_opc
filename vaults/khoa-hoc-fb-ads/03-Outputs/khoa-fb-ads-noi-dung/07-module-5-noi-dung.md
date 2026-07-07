# MODULE 5 — Đọc số & Tối-ưu (bản chi-tiết, thực-chiến)

> **Nội-dung học** kiểu cầm-tay-chỉ-việc. Nội-dung GỐC. Mỗi bài: **Mục-tiêu · Nội-dung · Thao-tác · Cạm-bẫy · Chốt.**
> ⚠️ **Grounding 2026 `[benchmark minh-hoạ]`:** CPM/CPC/CTR/CPA/ROAS trong bài lấy từ số-liệu ngành công-khai (KHÔNG phải số của bạn), dao-động RẤT rộng → chỉ để có **cảm-giác thang-đo**, không cam-kết. **Telos:** dạy nhìn **LÃI THẬT**, không tự-huyễn bằng ROAS/biên-gộp đẹp.

## Vì sao Module này quan-trọng
Sai-lầm lớn nhất của người mới KHÔNG phải "chạy ads không ra đơn" — mà là **chạy RA đơn, thấy ROAS đẹp, tưởng lãi to, trong khi đang LỖ ÂM-THẦM**. ROAS và "biên-gộp" là 2 con-số DỄ NHÌN THẤY NHẤT nhưng cũng DỄ ĐÁNH-LỪA NHẤT (chưa trừ ads + phí cổng + hoàn + thuế). Module này dạy "con mắt kế-toán" cho quảng-cáo: đọc đúng 6 chỉ-số, chẩn đúng bệnh theo phễu, ra quyết-định TẮT/GIỮ/SCALE bằng **kỷ-luật số** — không bằng hy-vọng.

---

## Bài 5.1 — Sáu chỉ-số phải hiểu (và vì sao ROAS/biên-gộp KHÔNG PHẢI LÃI)

**Mục-tiêu:** Định-nghĩa & tự tính được 6 chỉ-số (CPM, CPC, CTR, CPA, ROAS) và quan-trọng NHẤT: **CM/đơn (biên đóng-góp)** & **CM/cohort**; hiểu vì sao ROAS/biên-gộp đẹp vẫn có-thể đang lỗ.

**Nội-dung — bảng 6 chỉ-số (cheat-sheet):**
| # | Chỉ-số | Công-thức | Đo cái gì |
|---|---|---|---|
| 1 | **CPM** | Chi-phí ÷ Hiển-thị × 1.000 | Độ đắt/rẻ của việc "được THẤY" |
| 2 | **CPC** | Chi-phí ÷ Click | Chi-phí kéo 1 người ra khỏi Facebook |
| 3 | **CTR** | Click ÷ Hiển-thị × 100% | Độ HẤP-DẪN của creative + audience |
| 4 | **CPA** | Chi-phí ÷ Kết-quả (Lead/Purchase) | Chi-phí cho 1 kết-quả mong-muốn |
| 5 | **ROAS** | Doanh-thu ÷ Chi-phí ads | Doanh-thu/1đ ads — **CHƯA phải lãi** |
| 6 | **CM/đơn** ⚠️ | Giá bán − Giá-vốn − CPA − Phí cổng − Refund − Thuế | **LÃI THẬT/đơn — quyết-định TẮT/GIỮ/SCALE** |

**Thang-đo tham-khảo `[benchmark minh-hoạ — lệch rất nhiều theo nguồn/ngành/mùa]`:**
1. **CPM:** VN rẻ ~45.000–50.000đ/1.000 hiển-thị; ngành cạnh-tranh/mùa cao-điểm (Tết, 11.11) 250.000–800.000đ. → đừng neo 1 con-số, hãy so **CPM CỦA CHÍNH BẠN qua thời-gian**.
2. **CPC:** ~4.000–20.000đ/click tùy ngành/mục-tiêu.
3. **CTR** (dùng **"CTR — link click-through rate"**, KHÔNG phải "CTR (all)"): VN thường ~1–1,5%, trung-vị toàn-cầu ~2%.
4. **CPA:** dao-động RẤT rộng (vài chục nghìn → vài triệu). Chỉ có ý-nghĩa khi so với **CM/đơn của chính SP bạn** (Bài 5.3), KHÔNG so benchmark chung.
5. **ROAS:** TMĐT toàn-cầu ~2–3 lần, "tốt" 3–5 lần. Đây là con-số **DỄ ĐÁNH-LỪA NHẤT** nếu dừng ở đây — xem mục 6.
6. ⚠️ **CM/đơn — chỉ-số QUAN-TRỌNG NHẤT, không chỉ-số nào thay được:**
```
CM/đơn = Giá bán
         − Giá-vốn hàng (SP số/dịch-vụ thuần thường ≈ 0)
         − Chi-phí ads phân-bổ/đơn (≈ CPA)
         − Phí cổng thanh-toán
         − Dự-phòng hoàn/refund
         − Thuế phải nộp
```
**CM/đơn DƯƠNG mới là "có lãi thật". ROAS > 1 hay biên-gộp cao KHÔNG PHẢI LÃI** — vì đều CHƯA trừ hết các khoản trên.

**Ví-dụ số minh-hoạ (giả-định — giá bán 300.000đ, giá-vốn 40% = 120.000đ, ads 500.000đ/ngày, phí cổng 2,5%, refund 5% — SỐ THẬT phải lấy từ SP của bạn):**
| Kịch-bản | Hiển-thị | Click | Đơn | CPM | CTR | CPA | Doanh-thu | **ROAS** | **CM/đơn** |
|---|---|---|---|---|---|---|---|---|---|
| **A — nhìn "ngon"** | 20.000 | 300 | 6 | 25.000đ | 1,5% | ≈83.000đ | 1.800.000đ | **3,6 lần** | **≈ +74.000đ** (dương — ổn) |
| **B — bẫy "ROAS>1"** | 20.000 | 300 | 3 | 25.000đ | 1,5% | ≈167.000đ | 900.000đ | **1,8 lần** (vẫn >1!) | **≈ −9.000đ** (ÂM — đang lỗ) |

Tính CM/đơn kịch-bản B: 300.000 − 120.000 − 167.000 (CPA) − 7.500 (cổng 2,5%) − 15.000 (refund 5%) − 0 (thuế) ≈ **−9.000đ/đơn**. **ROAS 1,8 "nghe vẫn ổn" — SAI: mỗi đơn LỖ ~9.000đ.** Đúng cái bẫy khiến người mới tưởng lãi khi đang đốt tiền.

⚠️ **Dòng "Thuế" `[quy-định 2026 — cần kế-toán xác-minh]`:** hộ/cá-nhân kinh-doanh **doanh-thu năm dưới 1 tỷ** — từ 2026 **bỏ thuế khoán**, dưới ngưỡng này KHÔNG nộp GTGT lẫn TNCN (nên ví-dụ để thuế = 0). Vượt 1 tỷ: chịu GTGT (~1–5% tùy ngành) + TNCN → cộng vào công-thức. Hình-thức công-ty thì áp TNDN riêng. → số CHÍNH-XÁC **luôn hỏi kế-toán**.

**CM/cohort** = tổng CM của MỘT NHÓM khách mua trong 1 khoảng (vd 1 tuần), sau khi trừ chi-phí biến-đổi trực-tiếp. Khác lãi ròng toàn DN (còn trừ chi-phí cố-định: mặt-bằng/lương). ⚠️ Phải đợi đủ **cửa-sổ hoàn-tiền** (vd 7–30 ngày) mới chốt — chốt sớm = "lãi ảo".

**Thao-tác:**
1. Ads Manager → xem đủ cột CPM/CPC/CTR (link)/Cost per Result/Purchase value.
2. Tự tính tay **CM/đơn** bằng số THẬT (giá-vốn/phí-cổng/thuế/tỷ-lệ hoàn) của CHÍNH SP bạn — không copy số ví-dụ.
3. Ghi vào 1 bảng theo-dõi (Excel/Sheet) — dùng lại làm template Bài 5.3.

**Cạm-bẫy:** (1) thấy ROAS>1 hoặc "biên-gộp 60–90%" rồi kết-luận lãi (bẫy kịch-bản B); (2) quên trừ phí/refund/thuế vì nghĩ "tiền lẻ" — cộng dồn thành số lớn; (3) chốt CM/cohort ngày đầu, chưa qua cửa-sổ hoàn → lãi ảo bị "rút lại".

**Chốt:** Chỉ tin CON-SỐ CUỐI: **CM/đơn = Giá bán − (giá-vốn + ads + phí cổng + refund + thuế)**. Dương THẬT mới vui — ROAS chỉ là gợi-ý, không phải phán-quyết.

---

## Bài 5.2 — Đọc dashboard, tìm nút-thắt theo phễu CPM → CTR → CPA

**Mục-tiêu:** Tự chẩn campaign đang tắc ở tầng nào — "không ai thấy? thấy không click? click không mua?" — để sửa ĐÚNG chỗ.

**Nội-dung:** quảng-cáo chạy qua 3 tầng phễu, mỗi tầng đọc 1 nhóm chỉ-số:
| Tầng phễu | Chỉ-số đọc | "Đèn đỏ" | Bệnh | Chỗ cần sửa |
|---|---|---|---|---|
| 1. Hiển-thị | CPM, Reach, tốc-độ tiêu ngân-sách | CPM cao bất-thường / Reach thấp / "learning limited" | **Không ai thấy** | Audience quá hẹp / ngân-sách quá thấp (Bài 2.2), hoặc ad gắn cờ policy (M6) |
| 2. Click | CTR (link), CPC | CTR thấp dù CPM ổn (vd <~0,8–1% `[benchmark minh-hoạ]`) | **Thấy nhưng không click** | Creative/hook/offer chưa hấp-dẫn (M3), hoặc target sai nhu-cầu (Bài 2.1) |
| 3. Chuyển-đổi | CPA, Purchase ÷ Landing View | CTR/CPC ổn nhưng CPA cao / tỷ-lệ landing thấp | **Click nhưng không mua** | Landing/giá/offer yếu, HOẶC pixel bắn sai sự-kiện (kiểm TRƯỚC khi đổ lỗi landing — Bài 1.5) |

**Nguyên-tắc:** đọc từ **TRÊN xuống DƯỚI**, dừng ở tầng ĐẦU-TIÊN có đèn đỏ — đừng nhảy xuống sửa landing khi bệnh nằm ở "không ai thấy" phía trên.

**Thao-tác:**
1. Ads Manager → **Customize Columns** → thêm: CPM, CTR (link), CPC (link), Cost per Result, Purchases, Landing Page Views/Add to Cart.
2. Tự tính tỷ-lệ chuyển-đổi landing = Purchases ÷ Landing Page Views.
3. Đọc theo đúng thứ-tự bảng phễu.

**Cạm-bẫy:** (1) đổi nhiều thứ 1 lúc (creative + audience + landing) → không biết cái nào chữa được + làm thuật-toán mất dữ-liệu học; (2) đổ lỗi landing khi pixel bắn sai sự-kiện (số ảo); (3) đọc nhầm "CTR (all)" thay "CTR (link)" → tưởng creative tốt hơn thực-tế.

**Chốt:** Đi từ TRÊN xuống DƯỚI phễu, tìm đúng tầng tắc rồi mới sửa — sửa bừa vừa tốn tiền vừa mất dữ-liệu học của thuật-toán.

---

## Bài 5.3 — Khi nào TẮT / GIỮ / SCALE — kỷ-luật theo ngưỡng số, không cảm-tính

**Mục-tiêu:** Ra quyết-định TẮT/GIỮ/SCALE dựa NGƯỠNG đặt TRƯỚC (không phải cảm-giác "ads chạy ổn"); khắc nguyên-tắc **chỉ scale khi CM/cohort ≥ 0**.

**Nội-dung:**
1. **Đặt "Max-CPA" TRƯỚC khi bật campaign** (không đặt SAU khi thấy số — dễ tự bào-chữa): `Max-CPA = Giá bán − Giá-vốn − Phí cổng − Refund − Thuế − CM tối-thiểu mong-muốn`. Đây là "cái trần" so với CPA thực-tế mỗi ngày.
2. **Đủ dữ-liệu mới đọc:** đừng quyết khi mới 1–2 kết-quả/vài giờ — campaign còn **learning phase** (số biến-động tự-nhiên). Nên có ~**50 sự-kiện tối-ưu/tuần** để thoát learning ổn-định `[benchmark minh-hoạ]`.
3. **Bảng ngưỡng quyết-định:**

| Quyết-định | Điều-kiện |
|---|---|
| **TẮT** | CPA > Max-CPA **kéo-dài** (đủ dữ-liệu) **HOẶC** CM/đơn âm liên-tục **HOẶC** vi-phạm policy (M6) |
| **GIỮ** | Còn ít dữ-liệu (learning) **HOẶC** CPA dao-động quanh Max-CPA, xu-hướng chưa rõ → **không sờ vào**, chờ |
| **SCALE** | (a) CPA < Max-CPA có biên an-toàn **VÀ** (b) **CM/cohort ≥ 0** qua đủ 1 cửa-sổ hoàn-tiền **VÀ** (c) ổn-định vài ngày liên-tiếp |

4. ⚠️ **Scale AN-TOÀN `[benchmark minh-hoạ]`:** tăng ngân-sách từng đợt **~10–20%/lần**, cách vài ngày. Tăng **>20%/lần** thường **reset learning phase** (CPA vọt lên tạm-thời). KHÔNG nhân đôi/ba đột-ngột. Kết-hợp "scale ngang" (mở audience/campaign mới) + "scale dọc" (tăng budget) để không lệ-thuộc 1 audience.
5. ⚠️ **NHẤN MẠNH NHẤT: "Chỉ scale khi CM/cohort ≥ 0."** Tăng ngân-sách cho campaign đang CM ÂM = **nhân LỖ nhanh hơn**. Đây là lỗi nguy-hiểm nhất của người mới: thấy "có đơn đều", "ROAS>1" → đổ thêm tiền, trong khi mỗi đơn âm-thầm lỗ (kịch-bản B, Bài 5.1).

**Thao-tác:**
1. Trước khi bật campaign, viết **Max-CPA** của SP bạn ra sheet (công-thức mục 1).
2. Mỗi ngày đối-chiếu CPA thực-tế với Max-CPA.
3. Ra quyết-định theo đúng bảng ngưỡng, không theo cảm-giác.

**Cạm-bẫy:** (1) tắt quá sớm khi mới vài giờ (chưa qua learning); (2) scale khi ROAS "đẹp" mà chưa tính CM/cohort qua cửa-sổ hoàn; (3) tăng ngân-sách gấp đôi/ba → reset learning, CPA vọt đúng lúc scale; (4) giữ campaign lỗ vì tiếc tiền đã đổ (**sunk cost** — quyết-định phải dựa số SẮP-TỚI, không dựa số ĐÃ MẤT).

**Chốt:** Đặt ngưỡng TRƯỚC khi chạy — không đặt SAU khi thấy số. Scale là phần-thưởng cho **CM dương ĐÃ kiểm-chứng**, không phải cho hy-vọng.

---

## Bài 5.4 — A/B test đúng cách: đổi 1 biến/lần, đủ ngân-sách + thời-gian

**Mục-tiêu:** Tự thiết-kế & đọc 1 A/B test đáng tin, tránh kết-luận sai vì test ẩu rồi tối-ưu nhầm hướng.

**Nội-dung:**
1. **Nguyên-tắc "1 biến/lần":** giữa 2 phiên-bản chỉ đổi ĐÚNG 1 thứ (vd 2 creative), GIỮ NGUYÊN audience/ngân-sách/landing/copy. Đổi nhiều thứ cùng lúc → thắng/thua không biết do đâu.
2. **Thứ-tự ưu-tiên biến cần test** (theo mức ảnh-hưởng): **hook/creative** (ảnh-hưởng CTR nhất) → **offer/giá/khuyến-mãi** → **audience** → **landing** → placement. Test cái lớn trước.
3. **Dùng công-cụ A/B Test chính-thức (Experiments)** thay vì tự tạo 2 campaign riêng — 2 campaign riêng dễ **cạnh-tranh nhau trong cùng phiên đấu-giá** (audience overlap), sai-lệch kết-quả cả hai.
4. **Đủ ngân-sách + thời-gian `[benchmark minh-hoạ]`:** tối-thiểu ~**250.000–500.000đ/ngày/phiên-bản** (SP giá cao/audience nhỏ cần hơn); chạy tối-thiểu **~7 ngày** (đủ 1 chu-kỳ tuần), tốt tới ~2 tuần; cần ~**100 kết-quả/phiên-bản** mới đủ tin. Đừng kết-luận sau vài giờ.
5. **Đọc "thô" đáng tin chưa:** Experiments báo % **confidence**; Meta dùng ~**65%** để gợi-ý người thắng cho A/B thường `[benchmark minh-hoạ]`. Mẫu nhỏ/thời-gian ngắn → "thắng" tạm-thời có-thể **ĐẢO-CHIỀU** — đừng vội nhân-rộng khi confidence thấp.
6. ⚠️ A/B test chỉ giúp **CHỌN biến-thể tốt hơn** — quyết-định SCALE vẫn phải qua **CM/cohort ≥ 0** (Bài 5.3). Biến-thể "thắng" A/B vẫn có-thể đang lỗ nếu CPA cả 2 đều vượt Max-CPA.

**Thao-tác:**
1. Ads Manager → **Experiments (A/B Test)** → chọn đúng 1 biến.
2. Chia ngân-sách đều 2 phiên-bản, cùng ngày bắt-đầu/kết-thúc.
3. Chờ đủ ngưỡng thời-gian + sự-kiện (mục 4) → đọc kết-quả + % confidence trước khi chốt.

**Cạm-bẫy:** (1) tự tạo 2 campaign trùng audience → cạnh-tranh đấu-giá nội-bộ; (2) đổi 2–3 biến cùng lúc rồi "đoán"; (3) kết-luận vội khi mẫu nhỏ/confidence thấp; (4) quên A/B cũng tốn tiền thật — thiết-kế gọn, đừng test tràn-lan.

**Chốt:** Test ĐÚNG 1 biến, đủ TIỀN + đủ THỜI-GIAN, đọc con-số với sự HOÀI-NGHI lành-mạnh — rồi mới tin và nhân-rộng.

---
## Ghi-chú sản-xuất (cho founder)
- Quay **màn-hình Ads Manager thật** (che số/tên khách): 5.1 khu Reporting + demo file Excel tính CM/đơn (có-thể thành template tải về); 5.2 Customize Columns + đọc phễu trên campaign mẫu; 5.3 bảng Max-CPA + demo tăng ngân-sách 10–20%/lần; 5.4 khu Experiments. ~50', cắt 4 clip.
- ⚠️ Nguyên-lý bền hơn nút-bấm: phễu CPM→CTR→CPA, công-thức CM, ngưỡng TẮT/GIỮ/SCALE, "1-biến/lần" — **bền hơn** tên cột/vị-trí nút (mau lỗi-thời). Quay theo giao-diện thực-tế.
- ⚠️ Telos: ví-dụ số Bài 5.1 là **MINH-HOẠ TOÁN-HỌC** (không cam-kết) — khi quay nói RÕ số thật của học-viên chắc-chắn khác; tránh hiểu lầm thành "cam-kết CM +74k/đơn".
- Nguồn benchmark đã đối-chiếu (tham-khảo, kiểm lại khi quay): CPM/CPC/CTR VN — [ADCostly](https://adcostly.com/facebook-ads-cost-in-vietnam) · [AdAmigo 2026](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026); ROAS — [Hawky](https://hawky.ai/blog/average-roas-ecommerce-benchmarks); A/B test — [Meta Help](https://en-gb.facebook.com/business/help/290009911394576); learning phase — [Cometly](https://www.cometly.com/post/how-to-improve-facebook-ads-learning-phase); thuế hộ KD 2026 — [Thư Viện Pháp Luật](https://thuvienphapluat.vn/phap-luat/cach-tinh-thue-ho-kinh-doanh-2026-moi-nhat-theo-luat-thue-tncn-thue-gtgt-sua-doi-nang-muc-doanh-thu-100181-236579.html). ⚠️ Số thuế/kế-toán là khung tham-khảo, KHÔNG thay tư-vấn kế-toán.
