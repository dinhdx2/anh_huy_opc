# 08-execution-plan.md — Kế-hoạch thực-thi GĐ1 (cuộn-sóng)

> Nguồn: Decision Report `07-decision-report.md` + cây việc `06-structure.md` (PHA 1). Stage GĐ1 validate.
> Phân-loại cho `/vn-execute`: **AUTO** (AI/máy làm) · **INFO** (cần dữ-liệu CEO) · **APPROVAL** (chi tiền/pháp-lý/công-bố — cổng cứng) · **HUMAN** (KYC/ký).
> ⛔ **2 CỔNG CỨNG TRƯỚC MỌI ĐỒNG ADS:** (a) Gate-0 pháp-lý xong · (b) tracking Pixel/CAPI + 1-nguồn-sự-thật xong.
> 🎯 **Cổng validate GĐ1 (2 tách-biệt):** (1) 20–30 học-viên LẠ / 60 ngày **VÀ** (2) CM/cohort ≥0. Mốc ngày-30: <10 học-viên lạ → chẩn-đoán/pivot ngay (không đợi ngày 60).

## ĐỢT 0 — Pre-flight (cổng cứng, tuần 1–2) — PHẢI xong trước khi chi ads

| # | [Hành động] | Phòng | KPI | Deadline | Loại |
|---|---|---|---|---|---|
| 1 | **Dựng Gate-0 pháp-lý**: danh-sách claim-CẤM + wording "kỹ-năng" (không "thu-nhập đảm-bảo") · consent-flow + Privacy/Terms/Refund (Luật 91/2025 + NĐ 356/2025) · rà & làm sạch bản-quyền tài-liệu | dept-01 + dept-13 | 3 văn-bản landing live + checklist claim-cấm ký + asset sạch quyền | Tuần 1–2 | APPROVAL (pháp-lý) |
| 2 | **Dựng tracking + 1-nguồn-sự-thật**: cài Pixel + CAPI + consent-log server-side · Google Sheet đo 2 cổng · khóa công-thức CM/cohort + ngưỡng bậc-thang | dept-11 + dept-09 | Pixel/CAPI test-fire OK + sheet công-thức chạy | Tuần 1–2 | AUTO (+INFO số phí cổng) |
| 3 | **Dựng hạ-tầng phễu + dự-phòng**: landing + LMS/host khóa + email/Zalo tool · nhiều BM/tài-khoản ads + fanpage dự-phòng · cổng thanh-toán VN + kênh ngoài-FB | dept-09 + dept-05 | Phễu bấm-thử end-to-end chạy + ≥2 BM sẵn | Tuần 1–2 | AUTO (+APPROVAL nếu mua tool) |

## ĐỢT 1 — Sản-phẩm + proof (tuần 1–4, song-song Đợt 0)

| # | [Hành động] | Phòng | KPI | Deadline | Loại |
|---|---|---|---|---|---|
| 4 | **Làm quà free (lead magnet)**: checklist setup camp an-toàn nick + file ngân-sách/kịch-bản test | dept-13 | Lead magnet tải được, qua cổng bản-quyền | Tuần 1–2 | AUTO |
| 5 | **Dựng khung + module lõi khóa** (1 use-case): outline (setup BM/pixel an-toàn→target→content→đọc số→tối-ưu) + quay/dựng module lõi | dept-13 | Outline duyệt + module lõi quay xong (đủ dạy, không cầu-toàn) | Tuần 2–4 | AUTO (+HUMAN quay) |
| 6 | **Việc #0 — founder tự chạy 1–2 camp thật lấy proof** (build-in-public), ghi số liệu công-khai | dept-07 | ≥1 camp có số liệu công-khai làm case | Tuần 1–4 (song-song) | APPROVAL (chi ads) |
| 7 | **Lập cơ-chế bảo-vệ giờ founder**: hợp-đồng freelancer editor + luồng giao việc AI cho việc lặp | dept-04 | Editor onboard + lịch giữ giờ webinar/objection | Tuần 1–2 | APPROVAL (thuê ngoài) |

## ĐỢT 2 — Test định-vị + mở phễu (tuần 2–5) — SAU khi Đợt 0 xong

| # | [Hành động] | Phòng | KPI | Deadline | Loại |
|---|---|---|---|---|---|
| 8 | **Chạy test thông-điệp** (2–3 biến-thể "ra đơn cho SP của bạn") → chốt 1 khung ICP | dept-02 + dept-07 | Winner theo CPL + reject-rate, chốt ~ngày 14–21 | Tuần 2–3 | APPROVAL (chi ads test) |
| 9 | **Triển-khai phễu lead→nurture→bán**: chuỗi nurture (email/Zalo) + webinar "nhẹ" (demo Ads Manager sống) + quy-trình giao khóa/refund | dept-06 + dept-07 | Chuỗi nurture + ≥1 webinar chạy; giao khóa tự-động | Tuần 3–5 | AUTO |
| 10 | **Lập backend + cộng-đồng**: order-bump ~99–149k tại checkout + cộng-đồng Zalo/FB (tách kênh lead-gen khỏi hỗ-trợ); coaching/membership dời tuần 5+ | dept-08 + dept-06 | Order-bump live + group mở | Tuần 3–5 | AUTO (+INFO giá bump) |

## ĐỢT 3 — Kỷ-luật vốn + đo cổng validate (tuần 3–8)

| # | [Hành động] | Phòng | KPI | Deadline | Loại |
|---|---|---|---|---|---|
| 11 | **Chạy ads theo đợt** trần bậc-thang **8–10tr/th** + **gác cổng CM/cohort** (âm → dừng/sửa phễu, KHÔNG tăng ads) | dept-03 + dept-07 | 2 cổng validate: 20–30 học-viên LẠ/60 ngày **+** CM/cohort ≥0 | Tuần 3–8 | APPROVAL (chi ads) |
| 12 | **ĐKKD hộ kinh-doanh + hóa-đơn điện-tử + kê-khai thuế** (kế-toán rà ngưỡng hiện-hành) | dept-01 + dept-03 | ĐKKD xong trước khi nhận tiền học-viên #1 | Trước đơn #1 | HUMAN + APPROVAL |

## Điều-kiện-cổng mở-bán (checklist go/no-go)
- [ ] Gate-0 pháp-lý PASS (việc 1) · [ ] tracking PASS (việc 2) · [ ] hạ-tầng + ≥2 BM dự-phòng (việc 3) · [ ] quà free + khung khóa (việc 4–5) · [ ] cổng thanh-toán + ĐKKD (việc 3, 12).
- **CONG_CEO chốt "ngày đồng ads đầu-tiên"** sau khi 4 ô trên xanh.

## GĐ sau (cuộn-sóng — chỉ điều-kiện-cổng, chưa chi-tiết)
- **→ GĐ2 (PMF):** mở khi qua **2 cổng validate** + tín-hiệu lặp-lại. Khi đó chi-tiết: scale ads (mở trần 10–20tr), bật tầng backend (coaching/membership), mở đường-cong 2.
