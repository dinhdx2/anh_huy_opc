# Nhật ký quyết định (decisions-log.md)

> **Append-only.** Chỉ ghi quyết-định CEO đã DUYỆT (`status: locked`). Orchestrator đọc mục `locked` TRƯỚC debate → "QUYẾT ĐỊNH ĐÃ CHỐT — KHÔNG bàn lại". Đảo quyết-định → thêm mục `superseded`, KHÔNG xóa lịch-sử.
> Mỗi mục gắn nhãn `altitude ∈ {telos, dinh-vi, moat, cau-truc}` khi liên-quan lớp sinh-thành. Khởi tạo 2026-07-03 (onboard).

<!-- format:
## [YYYY-MM-DD] <tiêu-đề quyết-định>
status: locked | superseded
altitude: <telos|dinh-vi|moat|cau-truc> (nếu có)
- Nội-dung: ...
- Căn-cứ: task/07-decision-report...
-->

## [2026-07-03] Onboard — chọn ngách & mô-hình khi thiết-lập vault
status: locked
- **Ngành/pack:** khóa học online dạy chạy quảng-cáo Facebook (pack `digital-products`).
- **Beachhead:** người Việt mới muốn tạo thu-nhập online.
- **Uy-tín founder:** mới — xây song song (moat phải bồi-đắp; xem positioning.md).
- **Mô-hình SP:** 1 khóa chính + quà free (lead magnet).
- Căn-cứ: phiên onboard `/vn-onboard` 2026-07-03 (4 câu hỏi CEO duyệt).

## [2026-07-03] Duyệt telos — MỞ cổng G0
status: locked
altitude: telos
- **Telos:** "Giúp người Việt mới bắt đầu tự chạy quảng-cáo Facebook một cách bài-bản, minh-bạch và tiết-kiệm để tạo thu-nhập thật — bằng kiến-thức thực-chiến, trung-thực, không thổi-phồng."
- CEO (dinhdx2) duyệt câu telos AI đề-xuất → cổng G0 MỞ (đủ điều-kiện chạy `/vn-run`). Ranh-giới "không giàu nhanh" giữ nguyên (BẮT-BUỘC).
- Căn-cứ: `telos.md`; lệnh CEO "Mở cổng G0" 2026-07-03.

## [2026-07-03] Chốt số nền GĐ1 (giá · ads · vốn · cổng validate)
status: locked
altitude: dinh-vi
- **Giá khóa chính:** 399–599k. **Ngân-sách ads/tháng:** 10–20tr. **Vốn ~6 tháng:** 50–100tr. **Cổng validate:** 20–30 học-viên LẠ trả tiền / 60 ngày.
- Lưu-ý economics: giá thấp + ads lạnh → CM/đơn dễ ÂM → ads để XÂY LIST là chính; **bài-toán CM dương là trọng-tâm /vn-run** (xem `products.md` cảnh-báo CM).
- Căn-cứ: phiên CEO chọn số 2026-07-03 (4 câu hỏi, benchmark thị-trường VN).

## [2026-07-03] DUYỆT Decision Report GĐ1 (PAUSE 2) + 4 quyết-định CONG_CEO
status: locked
altitude: dinh-vi
- **Khung chiến-lược (hội-đồng 10 phòng, 9/10 hội-tụ):** KHÔNG bán khóa 399–599k thẳng bằng ads lạnh (CM âm 0,5–7,1tr/đơn mọi kịch-bản benchmark) → phễu **lead→nurture→bán + backend**; **2 cổng đo TÁCH-BIỆT** (20–30 học-viên LẠ / 60 ngày **VÀ** CM/cohort ≥0); **Gate-0 pháp-lý cứng** (claim-cấm + consent Luật 91/2025 + landing 3 văn-bản + Pixel/CAPI) TRƯỚC khi chi đồng ads đầu-tiên.
- **ICP thu hẹp (chốt):** "người ĐÃ có SP/DV thật, CHƯA tự chạy FB Ads cho mình" — outcome neo "ra đơn cho SP của BẠN" (KHÔNG neo "kiếm X đồng"; giữ ranh-giới telos + giảm rủi-ro Meta).
- **4 quyết-định CONG_CEO:** vốn THẬT **~100tr** · test **1 khung ICP** (dồn lực) · việc #0 (founder tự chạy ads lấy proof) **song-song** với validate · trần ads **bậc-thang 8–10tr→10–20tr** (mở khi CM/cohort ≥0).
- **Sửa căn-cứ pháp-lý (red-team):** NĐ 13/2023 HẾT HIỆU-LỰC 01/01/2026 → **Luật 91/2025 + NĐ 356/2025**; ngưỡng thuế 200tr lỗi-thời → [cần kế-toán rà]; rủi-ro Meta là "business-opportunity/misleading-claims" (KHÔNG phải Special Ad Category).
- Căn-cứ: `02-Tasks/2026-07-03-0645-ra-mat-gd1-khoa-fb-ads/07-decision-report.md` + `05-debate.md`; PAUSE 2 CEO duyệt 2026-07-03.

## [2026-07-03] Execution Plan GĐ1 DUYỆT (PHA 1 — Cổng A/B)
status: locked
altitude: cau-truc
- Cây việc: 9 khía-cạnh → **11 nhiệm-vụ-chính / 25 nhiệm-vụ-con** (đủ 3 chiều tấn/thủ/hậu); **cổng tự-kiểm 1B PASS** (validateCayViec loi=[] + validateDungTang 0 lỗi).
- Execution Plan: **12 việc / 4 đợt**; ⛔ 2 cổng cứng trước ads (Gate-0 pháp-lý + tracking Pixel/CAPI); 🎯 2 cổng validate (20–30 học-viên LẠ/60 ngày + CM/cohort ≥0); mốc ngày-30 pivot nếu <10.
- Cấu-trúc: 10 phòng LIVE (04,05 nhẹ; 10,12 ngủ); KHO trống → NEW (REUSE 2 template pack digital-products cho bản-quyền/lịch sản-xuất).
- Bàn giao: **`/vn-execute`** (Đợt 0 pre-flight trước). Căn-cứ: `06-structure.md` + `08-execution-plan.md`.
