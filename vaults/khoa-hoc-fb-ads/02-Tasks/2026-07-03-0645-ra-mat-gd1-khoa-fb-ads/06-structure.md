---
altitude: cau-truc
proposed_by: AI (vn-architect PHA 1)
stage: GĐ1
gate_1b: "validateCayViec loi=[] · validateDungTang 0 lỗi (mục-tiêu STATE / nv-chính VERB) — PASS"
---

# 06-structure.md — Cây cấu-trúc GĐ1 (gom-NGƯỢC-lên từ cây việc)

> Sinh CUỐI PHA 1 (INV-5): việc → bộ-phận → phòng → khối. KHÔNG vẽ org-chart trước.
> `gd_kich_hoat`: GĐ1 = **live**; phòng khác = **ngủ** (kích-hoạt-theo-GĐ, KHÔNG đẻ thêm phòng).
> Solo founder + AI → **CHƯA đẻ bộ-phận** (việc lặp chưa đủ nhiều) — việc treo thẳng dưới phòng, founder/AI/thuê-ngoài đảm-nhận.

## Cây việc GĐ1 (11 nhiệm-vụ-chính / 25 nhiệm-vụ-con · 9 khía-cạnh)

| Khía-cạnh | Mục-tiêu (TRẠNG-THÁI) | Nhiệm-vụ-chính (ĐỘNG-TỪ) | nv-con (chiều 🗡tấn/🛡thủ/📦hậu) |
|---|---|---|---|
| 9 Rủi-ro | Rủi-ro pháp-lý/policy được chặn (Gate-0 qua cổng) | **9.1 Dựng Gate-0 tuân-thủ trước khi chi ads** | claim-CẤM+wording 🛡 · consent+landing 3 văn-bản (Luật 91/2025) 🗡 · rà bản-quyền 🛡 |
| 8 Đo-lường | Số then-chốt được đo & tin-cậy (1 nguồn-sự-thật) | **8.1 Dựng 1 nguồn-sự-thật + tracking trước khi chi ads** | Pixel+CAPI+consent-log 🗡 · Google Sheet 2 cổng 🗡 · khóa công-thức CM/cohort 🛡 |
| 1 Sản-phẩm | Nội-dung khóa+quà free đủ dạy 1 use-case, bản-quyền đã sạch | **1.1 Làm quà free (lead magnet)** · **1.2 Dựng khung+module lõi khóa** | lead magnet 🗡 · outline 🗡 · quay/dựng module lõi 🗡 |
| 2 Định-vị | Thông-điệp "ra đơn cho SP của bạn" + 1 khung ICP được xác-nhận | **2.1 Chạy test thông-điệp + chốt 1 khung ICP hẹp** | 2-3 biến-thể thông-điệp 🗡 · test đo CPL+reject-rate 🗡 · guard "kiếm X đồng" 🛡 |
| 6 Hạ-tầng | Hạ-tầng phễu + dự-phòng nền-tảng đã sẵn-sàng | **6.1 Dựng hạ-tầng phễu + dự-phòng nền-tảng** | landing+LMS+email/Zalo 🗡 · nhiều BM/fanpage dự-phòng 📦 · cổng thanh-toán VN + ngoài-FB 📦 |
| 7 Quy-trình | Phễu lead→nurture→bán chạy lặp được | **7.1 Triển-khai phễu lead→nurture→bán** · **7.2 Chạy việc #0 (proof, song-song)** | nurture+webinar nhẹ 🗡 · giao khóa+refund 🛡 · camp thật build-in-public 🗡 |
| 3 Khách | Cơ-chế nurture giữ & chuyển lead thành học-viên sẵn-sàng | **3.1 Lập cơ-chế giữ & kích-hoạt lead + backend AOV** | cộng-đồng Zalo/FB (tách kênh) 🗡 · order-bump + kế-hoạch coaching/membership 🗡 |
| 4 Tiền | Hạ-tầng thu tiền sẵn-sàng + CM/cohort đo được & tiến ≥0 | **4.1 Thiết-lập kỷ-luật vốn + cổng CM + tuân-thủ thuế** | ads theo đợt bậc-thang 8-10tr 🗡 · gác cổng CM/cohort 🛡 · ĐKKD+HĐĐT+thuế 📦 |
| 5 Đội-ngũ | Thời-gian founder cho việc CHỐT được bảo-vệ | **5.1 Lập cơ-chế bảo-vệ thời-gian founder cho việc CHỐT** | hợp-đồng editor+luồng AI 🗡 · lịch bảo-vệ giờ webinar/objection 🛡 |

## Cây cấu-trúc (khối ▷ phòng ▷ việc) — gd_kich_hoat

```
K1 Quản-trị&Chiến-lược
├─ dept-01-governance   [LIVE]  ← 9.1 Gate-0 pháp-lý · 4.1(ĐKKD/HĐĐT/thuế)
├─ dept-02-strategy     [LIVE]  ← 2.1 chốt use-case/ICP (dẫn)
└─ dept-12-growth       [ngủ]   (gộp vào strategy/marketing ở GĐ1)
K2 Tài-chính
└─ dept-03-finance      [LIVE]  ← 4.1 kỷ-luật vốn + cổng CM/cohort
K3 Thị-trường&Khách-hàng
├─ dept-07-marketing    [LIVE]  ← 2.1 test thông-điệp · 7.1 nurture/webinar · 7.2 việc #0 proof
├─ dept-06-sales        [LIVE]  ← 7.1 offer/phễu bán · 3.1 backend order-bump
└─ dept-08-customer     [LIVE]  ← 3.1 giữ lead/cộng-đồng/CSKH
K4 Sản-phẩm&Công-nghệ
├─ dept-13-content-ip   [LIVE]  ← 1.1 quà free · 1.2 khóa · cổng bản-quyền
└─ dept-09-product-tech [LIVE]  ← 6.1 hạ-tầng phễu · 8.1 Pixel/CAPI/consent-tech
K5 Vận-hành&Chuỗi-cung
└─ dept-05-operations   [LIVE nhẹ] ← 6.1 cổng thanh-toán/giao khóa (ops)
K6 Con-người
├─ dept-04-people       [LIVE nhẹ] ← 5.1 bảo-vệ giờ founder + thuê ngoài
└─ dept-10-training     [ngủ]
K7 Dữ-liệu&Đo-lường
└─ dept-11-reporting    [LIVE]  ← 8.1 1-nguồn-sự-thật + công-thức CM/cohort
```

## Báo-cáo tra-KHO (reuse/adapt/new) — `lib/kho.js#tra`
KHO `knowledge/playbook/_index.md` **TRỐNG** (DN/ngành mới) → **mọi tầng = NEW**. Tài-sản chạy tốt GĐ1 → **ứng-viên PROMOTE** ở PHA 3 (`/vn-loop`).

| Tầng/việc | Quyết-định | Nguồn tái-dùng |
|---|---|---|
| 9.1 checklist bản-quyền | **REUSE** (pack, không phải KHO) | `knowledge/packs/digital-products/templates/13-content-ip/checklist-ban-quyen-truoc-phat-hanh.md` |
| 1.1/1.2 lịch sản-xuất nội-dung | **ADAPT** (pack) | `.../13-content-ip/lich-san-xuat-noi-dung-so.md` |
| 8.1 công-thức CM/cohort · 6.1 hạ-tầng · 7.1 phễu · 2.1 test · 4.1 cổng vốn | **NEW** | — (ứng-viên PROMOTE sau validate) |

> `reused_from`: 9.1←pack-checklist-banquyen · 1.x←pack-lich-sanxuat. Còn lại `reused_from: null` (NEW).
