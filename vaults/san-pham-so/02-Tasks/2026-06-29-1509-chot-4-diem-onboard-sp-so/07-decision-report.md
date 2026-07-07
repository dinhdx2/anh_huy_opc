# 07 — Decision Report · PAUSE 2

> Task `2026-06-29-1509-chot-4-diem-onboard-sp-so` · vault `san-pham-so` · 2026-06-29
> Hội-đồng: **9 phòng** (STRATEGIC) · luật-sư-của-quỷ = `dept-03-finance` · 2 vòng cross-exam (8/9 → 6/9 phòng đổi ý) · Red-team 4 claim (3 survives, 1 refuted, **2 cờ đỏ pháp-lý**).
> *Lưu ý orchestrator: synthesizer ghi "11/11 phòng" — thực-tế 9 phòng tham-gia; nội-dung khuyến-nghị không đổi. Phòng 13-content-ip có quan-điểm ở vòng 1 nhưng lỗi kỹ-thuật (StructuredOutput) ở 1 vòng cross-exam.*

---

## TL;DR 30 giây
Hội đồng đồng thuận chọn ngách **Marketing & Bán hàng thực chiến cho nhà bán mới TikTok Shop/Shopee VN (<6 tháng)**, hero là **template/kit 149–199k bán organic-first**, tuyệt đối **KHÔNG chạy ads trước khi có 20+ đơn organic**. Hành động ngay: CEO khai Vốn khởi động + chọn 2–3 tên để Legal tra Cục SHTT + duyệt TELOS mở G0. Rủi ro lớn nhất: founder vốn lớn + giỏi ads dễ đốt vốn trước PMF, và 1 cảnh báo đỏ pháp lý về số thuế sai trong budget.md.

## Khuyến nghị (ưu tiên)
1. **CEO khai Vốn khởi động thật + CFO tính runway = Vốn/burn, đặt trần burn/tháng cho giai đoạn validate** — 03-Finance — trước mọi kế hoạch chi tiết (cổng gốc).
2. **Sửa budget.md dòng 26 ngưỡng thuế 200tr → con số đúng do kế toán xác minh** — 03-Finance + 01-Governance — trước khi mô hình hóa hòa vốn.
3. **CEO chọn 2–3 tên ứng viên → Legal tra Cục SHTT Nhóm 41+9 + domain + MXH → chốt tên + nộp đơn first-to-file** — 01-Governance — trước khi chi vào brand.
4. **CEO duyệt TELOS để mở cổng G0** — 02-Strategy — ngay (đang chặn PHA 1).
5. **Chốt ngách A + beachhead <6 tháng + hero 2 tầng 149–199k** — 02-Strategy — tại phiên onboard này.
6. **Dựng Zalo OA + FAQ tự động + Privacy Policy/consent + cơ chế watermark file** — 09-Product-Tech + 08-CS + 13-Content-IP — trước khi publish landing/đơn 1.

## Điều chỉnh so với phương án ban đầu
- **TÊN thương hiệu**: hội đồng nhất trí **KHÔNG chốt tên ở vòng này** (rủi ro first-to-file) → CEO đưa 2–3 ứng viên, Legal tra cứu trước.
- **Beachhead thu hẹp** từ "ai muốn học marketing" → "nhà bán mới TikTok Shop/Shopee <6 tháng" (để thoát red ocean Unica/Kyna).
- **CFO thêm cổng-0 cash-runway**: không cổng PMF nào hợp lệ trước khi CEO khai Vốn thật.

## Mỗi phòng nói gì
| Phòng (role) | Tóm tắt |
|---|---|
| 02-strategy | Chốt ngách A, beachhead <6 tháng, hero 2 tầng, 3 cổng vốn. |
| 07-marketing | Giữ ngách A + hero 149–199k; bỏ ROAS biên gộp; ưu tiên Notion/Google thay Canva. |
| 06-sales | Hero 149–249k rút ngắn time-to-first-deal; "ý định mua ≠ mua thật". |
| 13-content-ip | Dừng phát hành nếu asset chưa sạch license; bắt buộc chống tải lậu. |
| 03-finance | Bỏ ROAS biên gộp → contribution margin/đơn; kill-switch cash-runway; sửa số thuế. |
| 08-customer | Zalo OA + FAQ trước launch; dashboard CSAT/Refund/CM; SOP refund. |
| 12-growth | Rút ads về sau organic; Zalo viral loop zero-CAC; ICE-score. |
| 09-product-tech | Stack tối giản Carrd/Notion+PayOS/Sepay; watermark file. |
| 01-governance | First-to-file nhãn hiệu trước ads; checklist license; số thuế đúng. |

## ⚔️ Red-team / Kiểm chứng đối kháng

🔴 **CẢNH BÁO ĐỎ 1 (pháp-lý) — Số thuế sai trong budget.md**
- budget.md dòng 26 ghi ngưỡng miễn thuế **200tr/năm — SAI**. Số hội-đồng xác-minh (WebSearch 2026-06-29, nguồn Chính phủ) là **1 tỷ đồng/năm** (NĐ 141/2026/NĐ-CP, hiệu lực 01/01/2026). *Có lệch giữa các phòng (500tr vs 1 tỷ) + lệch mốc GTGT/TNCN.*
- **Rủi ro**: mô hình hòa vốn lệch ~5x; tự áp HĐĐT quá sớm HOẶC bỏ sót nghĩa-vụ khi vượt 1 tỷ.
- **Bắt buộc kế toán xác minh chính thức** trước khi mở bán — không dùng số của bất kỳ phòng nào (kể cả 1 tỷ) làm căn-cứ vận-hành mà chưa qua kế toán.

🔴 **CẢNH BÁO ĐỎ 2 (pháp-lý/IP) — Canva TOS + raw AI output**
- KHÔNG dùng **Canva Pro elements** để bán template tải về; KHÔNG bán **raw AI output** không có người chỉnh-sửa sáng-tạo; asset chưa rõ commercial license → **dừng phát hành**.
- **Rủi ro**: Canva terminate account đúng lúc scale; raw AI output không được bảo hộ + rủi ro kiện SHTT/DMCA; 1 font/ảnh chưa license đủ để bị takedown.
- *Sắc thái*: Canva **FREE** content vẫn được dùng trong template bán lại; người nhập prompt vẫn giữ quyền khai-thác thương-mại output (chỉ là không được bảo hộ quyền tác-giả).

⛔ **CLAIM BỊ BÁC — Chạy ads trước/song song organic**
- Đề-xuất chạy ads sớm (12-Growth/07-Marketing vòng 1) **đã bị bác + 2 phòng tự rút lại**. Lý do: vi-phạm luật cứng Brain (KHÔNG scale ads trước PMF); unit-economics chưa có số thật → không biết CAC < giá bán. Founder vốn lớn đốt vốn qua phễu chưa tối ưu.

✅ **Survives**: "ROAS 1.5x từ biên gộp ≠ có lãi → phải dùng **contribution-margin/đơn dương + CAC-payback**" — đứng vững, là phanh tài-chính lớn nhất.

## 3 góc nhìn đáng chú ý
1. **Zalo viral loop là unfair advantage VN mà paid không mua được** (Growth): embed "tặng bạn 1 template free" + optin riêng trong file hero → mỗi người mua thành 1 điểm phân-phối zero-CAC.
2. **"Vốn lớn" là tính-từ, không phải con số** (CFO): đang lập cổng tiêu tiền cho khoản chưa lượng-hóa; founder full-time còn có burn ẩn = lương cơ-hội.
3. **Ý định mua ≠ mua thật** (Sales): khảo-sát "sẵn trả tiền" yếu hơn "đơn có tiền vào tài-khoản" (chuyển-đổi ý-định→mua ~10–30%). PMF phải neo vào đơn trả tiền thật.

## ⚠️ 5 xung đột CHƯA giải — cần CEO chốt
1. **Số thuế cuối cùng** (kế toán xác minh: 500tr hay 1 tỷ + mốc hiệu lực).
2. **Vốn khởi động + trần burn/tháng** GĐ validate.
3. **Tên thương hiệu** (2–3 ứng viên để Legal tra).
4. **Định nghĩa PMF duy nhất** (số đơn organic + số tuần contribution-margin dương + ngưỡng email list).
5. **Tính khả thi webhook PayOS/Sepay** cho chống tải lậu (Product-Tech chưa xác nhận dứt khoát).

## Mọi con số là benchmark [cần CEO/kế-toán xác minh]
Quy mô thị trường (online-edu VN ~397tr USD, Unica >500k học-viên) & unit-economics (CPL 30–100k, CAC 50–300k, refund 5–15%, conversion >1.5%) — KHÔNG dùng làm căn-cứ scale; chỉ cổng PMF của CFO mới mở ads.
