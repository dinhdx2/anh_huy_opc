# 08 — Execution Plan (cuộn-sóng) · GĐ1 validate · vault `san-pham-so`

> **TL;DR:** Kế-hoạch cuộn-sóng đồng-bộ với `06-structure.md` rev-2 — xuống tới **cấp nhiệm-vụ-con nguyên-tử** (58 nv-con của 23 NVC; NVC 2.2 = cỗ-máy nghiên-cứu thị-trường duy-nhất, NVC 1.1 tiêu-thụ — bỏ phỏng-vấn & dedup nghiên-cứu), tổ-chức theo **6 đợt thực-thi** theo phụ-thuộc, mỗi bước gắn chiều 🗡tấn/🛡thủ/📦hậu + phân-loại 4 nhóm. Đường-tới-hạn validate paid-led: **xác-nhận nỗi-đau → cổng pháp-lý/bản-quyền → sản-xuất hero → landing+tiền+lead+đo → vận-hành/thuế → ads test (chi tiền)**.
>
> Sinh 2026-06-30 (rev-2: bẻ xuống nv-con) · nguồn: `06-structure.md` §A. Lớp thực-thi (`/vn-execute`) biến file này thành sổ `10-run-state.md`. Mã bước = `NVC.x · chiều`.

> **Phân-loại 4 nhóm:** **AI-AUTO** (máy tự chạy) · **NEED-INFO** (chờ CEO khai số) · **NEED-APPROVAL** (ra ngoài/tốn tiền — cổng cứng) · **HUMAN-ONLY** (người phải tự làm).

---

## Đợt 0 — Validate vấn-đề & chốt phạm-vi (làm TRƯỚC khi sản-xuất nhiều)

| Bước | Việc (nv-con) | Chiều | Phân-loại | Phụ-thuộc | Đầu-ra |
|---|---|---|---|---|---|
| 2.2a | Lập khung nghiên-cứu đầu-cầu (nguồn + tiêu-chí "cầu xác-nhận") | 📦 | AI-AUTO | — | Khung + checklist nguồn |
| 2.2b | Quét tín-hiệu cầu qua công-cụ (web/xu-hướng + cộng-đồng + đối-thủ + từ-khóa) | 🗡 | AI-AUTO | 2.2a | Bảng tín-hiệu cầu có dẫn-nguồn |
| 2.2c | Phân-tích đối-thủ & khoảng-trống định-vị | 🗡 | AI-AUTO | 2.2b | Bản-đồ định-vị + khoảng-trống |
| 2.2d | Kiểm chéo tín-hiệu (anti-bịa/rác) | 🛡 | AI-AUTO | 2.2b | Bảng đã lọc |
| 2.2e | Tổng-hợp kết-luận đầu-cầu + WTP (xác-nhận/bác) | 🛡 | AI-AUTO | 2.2c,2.2d | Kết-luận (bác → quay điều-chỉnh) |
| 1.1a | Chọn 1 nỗi-đau từ kết-luận nghiên-cứu (2.2e) | 🗡 | AI-AUTO | 2.2e | 1 nỗi-đau chốt (cầu mạnh + khoảng-trống) |
| 1.1b | Phác mục-lục kit + định "đầu-ra dùng-được-ngay" | 🗡 | AI-AUTO | 1.1a | Outline 1 trang |
| 1.1c | Kiểm & cắt scope-creep | 🛡 | AI-AUTO | 1.1b | Scope chốt |

> **Dedup (rev-3.1):** việc quét web/cộng-đồng/đối-thủ + kiểm nguồn nay **chỉ ở khối 2.2** (cỗ-máy nghiên-cứu). NVC 1.1 **tiêu-thụ** `2.2e` rồi quyết-định sản-phẩm — không lặp lại nghiên-cứu.

## Đợt 1 — Cổng pháp-lý & kiểm (rẻ, chặn rủi-ro sớm — song song Đợt 0)

| Bước | Việc (nv-con) | Chiều | Phân-loại | Phụ-thuộc | Đầu-ra |
|---|---|---|---|---|---|
| 9.1a | Viết checklist cổng bản-quyền (no Canva Pro/raw-AI/asset chưa license) | 🗡 | AI-AUTO | — | Checklist gate |
| 9.1b | Áp gate trước mỗi lần phát-hành | 🛡 | AI-AUTO | 9.1a | Gate sống (chặn nếu fail) |
| 9.2a | Soạn Privacy Policy + consent string (NĐ 13) | 🗡 | AI-AUTO | — | PP |
| 9.2b | Rà cơ-sở pháp-lý thu/lưu/rút data | 🛡 | AI-AUTO | 9.2a | PP hợp-lệ |
| 6.1a | Liệt-kê công-cụ (thiết-kế/quay/AI/landing/email) | 🗡 | AI-AUTO | — | Stack list |
| 6.1b | Kiểm điều-khoản TM mỗi công-cụ | 🛡 | AI-AUTO | 6.1a | Stack hợp-lệ (Canva Pro nội-bộ) |
| 6.1c | Chốt ngân-sách mua/subscription | 📦 | **NEED-INFO** | 6.1b | Ngân-sách công-cụ |
| 9.5a | Tra sơ-bộ SHTT Nhóm 41+9 + check domain | 🗡 | AI-AUTO | — | Báo-cáo tra |
| 9.5b | Shortlist 2–3 tên an-toàn | 🛡 | AI-AUTO | 9.5a | Shortlist tên |

## Đợt 2 — Sản-xuất hero (qua cổng bản-quyền)

| Bước | Việc (nv-con) | Chiều | Phân-loại | Phụ-thuộc | Đầu-ra |
|---|---|---|---|---|---|
| 1.2d | Chuẩn-bị template/asset gốc có license | 📦 | AI-AUTO | 6.1 | Asset dùng-được |
| 6.2a | Lập asset register (cột nguồn + license) | 🗡 | AI-AUTO | 1.2d | Register |
| 6.2b | Cờ asset chưa rõ license → DỪNG dùng | 🛡 | AI-AUTO | 6.2a | Register đã gắn cờ |
| 1.2a | Soạn bộ mẫu content & ads bán hàng | 🗡 | AI-AUTO | 1.1c | Bộ mẫu (bản-địa sàn VN) |
| 1.2b | Viết checklist chốt đơn + thiết-kế bản trình-bày | 🗡 | AI-AUTO | 1.2a | Kit draft |
| 1.2c | Rà chính-tả + đối-chiếu cổng 9.1 | 🛡 | AI-AUTO | 1.2b,9.1a | **Kit pass-gate** |
| 2.1a | Viết 1 câu wedge + 3–5 góc bán | 🗡 | AI-AUTO | 1.1a, 2.2c | Messaging doc |
| 2.1b / 9.4 | Rà tránh "giàu nhanh"/cam-kết sai (Luật QC) | 🛡 | AI-AUTO | 2.1a | Messaging + ads đã rà |
| 1.3a | Tạo watermark + link cá-nhân-hóa/license key | 📦 | AI-AUTO | 1.2c | Gói chống-copy |
| 1.3b | Giao thử 1 đơn mẫu | 🛡 | AI-AUTO | 1.3a | Log giao thành-công |

## Đợt 3 — Hạ-tầng thu tiền + lead + đo

| Bước | Việc (nv-con) | Chiều | Phân-loại | Phụ-thuộc | Đầu-ra |
|---|---|---|---|---|---|
| 4.2a | Lập sheet công-thức CM/đơn = giá − (ads+phí cổng+refund+thuế) | 🗡 | AI-AUTO | — | Sheet CM/đơn |
| 4.2b | Chốt quy-tắc phanh (KHÔNG dùng ROAS-từ-biên-gộp) | 🛡 | AI-AUTO | 4.2a | Quy-tắc |
| 4.3a | Thu số thật unit-econ (giá, phí cổng, CAC mục-tiêu) | 🗡 | **NEED-INFO** | 4.2a | Số thật |
| 4.3b | Cập-nhật products.md `[số thật DN]` | 🗡 | AI-AUTO | 4.3a | products.md |
| 4.1a | Dựng landing bán hero | 📦 | AI-AUTO | 2.1a,1.2c | Landing live |
| 4.1b | Tích-hợp cổng thanh-toán VN (PayOS/Sepay/MoMo/ZaloPay) | 📦 | **NEED-APPROVAL** | 4.1a | Checkout |
| 4.1c | Kiểm thử 1 giao-dịch thử | 🛡 | AI-AUTO | 4.1b | Log thanh-toán OK |
| 3.1a | Tạo form opt-in + kết-nối email tool | 📦 | AI-AUTO | 9.2a | Form live |
| 3.1b | Tạo Zalo OA | 📦 | **NEED-APPROVAL** | — | OA live |
| 3.1c | Gắn consent NĐ 13 vào form | 🛡 | AI-AUTO | 3.1a,9.2 | Form hợp-lệ |
| 3.2a | Viết 3–5 email/tin Zalo nuôi-dưỡng | 🗡 | AI-AUTO | 3.1a | Chuỗi nội-dung |
| 3.2b | Thiết-lập cơ-chế rút/opt-out | 🛡 | AI-AUTO | 3.2a | Chuỗi hợp-lệ |
| 8.1a | Dựng sheet gom 5 KPI phanh (CM/đơn, CAC, CR, refund%, lead) | 🗡 | AI-AUTO | 4.2a | Dashboard |
| 8.1b | Định "1 nguồn-sự-thật" | 🛡 | AI-AUTO | 8.1a | Quy-ước |
| 8.2a | Cài pixel + UTM trên ads & landing | 🗡 | AI-AUTO | 4.1a | Tracking live |
| 8.2b | Kiểm dữ-liệu về đúng (test conversion) | 🛡 | AI-AUTO | 8.2a | Conversion OK |
| 7.1a | Cấu-hình webhook/automation cấp link/license | 🗡 | AI-AUTO | 4.1b,1.3a | Luồng giao live |
| 7.1b | Kiểm thử end-to-end 1 đơn | 🛡 | AI-AUTO | 7.1a | Log e2e |
| 7.2a | Viết chính-sách refund | 🗡 | AI-AUTO | — | Policy |
| 7.2b | Lập kênh hỗ-trợ (Zalo/email) + FAQ | 📦 | AI-AUTO | — | Kênh CSKH |
| 7.2c | Ghi quy-tắc xử khiếu-nại/chargeback | 🛡 | AI-AUTO | 7.2a | Quy-tắc |

## Đợt 4 — Đội-ngũ & tuân-thủ còn lại (song song Đợt 3)

| Bước | Việc (nv-con) | Chiều | Phân-loại | Phụ-thuộc | Đầu-ra |
|---|---|---|---|---|---|
| 5.1a | Lập bảng RACI tối-thiểu | 🗡 | **NEED-INFO** | — | RACI |
| 5.1b | Lập danh-sách freelancer dự-phòng | 📦 | AI-AUTO | — | Shortlist freelancer |
| 5.2a | Viết SOP làm SP số | 🗡 | AI-AUTO | 1.2c | SOP-1 |
| 5.2b | Viết SOP giao SP + xử đơn | 🗡 | AI-AUTO | 7.1a | SOP-2 |
| 5.2c | Ghi rủi-ro "bus-factor 1 người" + cách giảm | 🛡 | AI-AUTO | 5.1a | Mục rủi-ro |
| 9.3a | Chuẩn-bị hồ-sơ/câu hỏi cho kế-toán | 📦 | AI-AUTO | — | Brief thuế |
| 9.3b | Kế-toán xác-minh ngưỡng ~1 tỷ + mô-hình (hộ/cá-nhân/công-ty) | 🛡 | **HUMAN-ONLY** | 9.3a | Xác-nhận chính-thức |
| 9.3c | Chốt: KHÔNG dùng số chưa rà làm căn-cứ vận-hành | 🛡 | AI-AUTO | 9.3a | Quy-tắc chặn |

## Đợt 5 — Paid-test (cổng chi tiền — chỉ chạy khi Đợt 0–4 xong)

| Bước | Việc | Chiều | Phân-loại | Phụ-thuộc | Đầu-ra |
|---|---|---|---|---|---|
| 9.5c | Nộp đơn SHTT first-to-file (sau khi CEO chốt tên) | 🗡 | **NEED-APPROVAL** | 9.5b | Đơn đã nộp |
| TEST | Ads test theo đợt (trần 15–30tr/th) → đo CM/đơn | 🗡 | **NEED-APPROVAL** (chi tiền) | 1.3,4.1,3.1,8.x,9.4 | CM/đơn thật theo đợt |

> **Cổng cứng (ranh-giới — luôn NEED-APPROVAL, AI KHÔNG tự làm):** `4.1b` đăng-ký cổng tiền · `3.1b` tạo Zalo OA · `9.5c` nộp đơn SHTT · **`TEST` chi tiền ads**. Gom hỏi CEO 1 lượt ở main loop (`/vn-execute`).

---

## Cổng & điều-kiện chuyển GĐ (cuộn-sóng — GĐ2+ chưa chi-tiết)

- **Cổng PMF (GĐ1→GĐ2):** `contribution-margin/đơn DƯƠNG` sau (ads + phí cổng + refund + thuế) **VÀ** CAC-payback < ngưỡng (CEO+CFO chốt), trên một-số đơn lặp. CM âm → **DỪNG** sửa phễu/offer/targeting, KHÔNG tăng ngân-sách.
- **GĐ2 (PMF) — chỉ điều-kiện-cổng (cuộn-sóng):** khi qua PMF → bật tầng khóa mini 299–999k → khóa lớn; tối-ưu retention/LTV; mở mục-tiêu asp-3 "tỷ-lệ quay-lại ≥Y%". Sẽ chi-tiết khi đạt cổng.
- **Re-debate SỐ THẬT trước khi chuyển GĐ** (chống mở-rộng-sớm) — guard `BLOCK_MO_RONG_SOM`.

## 2 cờ đỏ phải đóng trước khi mở bán
1. **Thuế** (9.3b, HUMAN-ONLY) — kế-toán xác-minh ngưỡng ~1 tỷ + mô-hình hộ/cá-nhân/công-ty.
2. **Bản-quyền hero** (9.1 → gate 1.2c) — không phát-hành kit nếu chưa qua cổng kiểm.

## 3 việc NEED-INFO chờ CEO khai
- `4.3a` số thật unit-econ (giá/phí cổng/CAC mục-tiêu) · `6.1c` ngân-sách công-cụ · `5.1a` vai founder kiêm + thời-gian/đồng-đội.

---

## Bàn-giao lớp thực-thi
Chạy `/vn-execute "2026-06-30-0450-pha1-sinh-viec-gd1"` → vn-executor đọc plan này → sinh `10-run-state.md` (bước nguyên-tử theo mã NVC.x + 4 nhóm) → tự chạy AI-AUTO theo đợt, gom cổng CEO 1 lượt. Việc nặng độc-lập (vd Đợt 2 làm kit, `4.1a` dựng landing) có thể giao agent `executor`.
