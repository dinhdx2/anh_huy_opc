# SỔ THỰC THI (Run Ledger) — Ra mắt store POD đầu tiên

> Nguồn sự thật để **thực thi & resume**. Sinh từ `08-execution-plan.md` bởi skill `vn-executor`.
> Mỗi dòng = một bước nguyên tử. Cập nhật ngay sau mỗi thay đổi trạng thái.

## TL;DR tiến độ
- Task: `2026-06-25-ke-hoach-ra-mat-store-dau-tien` · Cập nhật: `2026-06-25 09:45`
- **Máy đã làm xong TẤT CẢ việc tự động hoá được: 16 deliverable** qua 3 vòng. Phần còn lại đều là việc người thật (KYC, mua/đổ tiền, xác minh trademark thủ công, render design).
- **✅ Vòng 1 (9):** W1-05 policy, W1-09 ad copy, W2-14 learning phase, W2-15 dashboard, W2-16 SOP đơn, W3-20 ROAS, W4-21 scale gate, W4-24 báo cáo tổng kết, VERIFY-1 phí cổng.
- **✅ Vòng 2 (5):** W1-02 SOP Payoneer/2CO, W1-06 SOP Meta Pixel+CAPI, W1-08 concept design+brief, W1-04 cấu trúc store, KYC-PREP.
- **✅ Vòng 3 (chốt + 3):** áp danh tính **Daily Humor Co.** vào policy+store; W1-07 IP Gate (4 PASS, 2 cần CEO xác minh); VERIFY-2 giá vốn+ROAS.
- **⛔ Phần còn lại = CEO thực hiện ngoài đời** (xem cuối file): chuẩn bị KYC→mở cổng; tự xác minh USPTO 2 concept; duyệt mua domain/Shopify; render design (FD); rồi chạy `/vn-execute` lại để tiếp.

## Chú giải
- **owner:** `AI` máy làm trọn · `AI+Human` máy chuẩn bị, người làm/duyệt phần cuối · `Human` chỉ người làm được.
- **cổng:** `none` · `NEED-INFO` (thiếu dữ liệu/bí mật/quyết định) · `NEED-APPROVAL` (ra tiền/pháp lý/công bố/không hoàn tác → CEO duyệt mới chạy).
- **trạng thái:** `TODO` · `DOING` · `BLOCKED-INFO` · `BLOCKED-APPROVE` · `HUMAN` (đã giao CEO) · `DONE` · `FAILED`.

## Bảng bước

### Tuần 1 — Setup, $0 ads
| id | hành động | owner | tool | cần (input) | cổng | phụ thuộc | trạng thái | bằng chứng |
|----|-----------|-------|------|-------------|------|-----------|------------|------------|
| W1-01 | Mở **PayPal Business** (khai POD retail + ĐKKD, KYC) | Human | browser | CMND/CCCD, ĐKKD, email/SĐT, tài khoản nhận | NEED-INFO | KYC-PREP | HUMAN | SOP sẵn: `10-thuc-thi-viec1-paypal-business.md` ✅ |
| W1-02 | Mở **Payoneer** + đăng ký **2Checkout/Verifone** (backup) | Human | browser | giấy tờ KYC, ĐKKD | NEED-INFO | KYC-PREP | HUMAN | SOP sẵn: `10-thuc-thi-viec2-cong-thanh-toan.md` ✅ |
| W1-03 | **Test giao dịch $1 thật** qua từng cổng → xác nhận tiền về | Human | browser | W1-01/02 xong, 1 thẻ test | NEED-APPROVAL | W1-01,W1-02 | TODO | — |
| W1-04 | Mua **domain .com** + dựng **Shopify** (Dawn) + gắn Printify + chọn **US print partner** | AI+Human | browser | tên domain CEO chốt, thẻ thanh toán Shopify | NEED-INFO + NEED-APPROVAL | — | BLOCKED-INFO | Bản dựng sẵn: `W1-04-cau-truc-store-shopify.md` ✅ (sitemap 13 trang, 5 gợi ý tên/domain); chờ CEO chốt tên + duyệt mua |
| W1-05 | Soạn **4 trang policy** (Refund/Shipping/ToS/Privacy) theo FTC | AI | web/file | (đã soạn bản placeholder; CEO điền tên/email/số ngày) | none (đăng = thuộc W1-04) | — | **DONE** | `03-Outputs/.../W1-05-4-trang-policy.md` ✅ |
| W1-06 | Cài **Meta Pixel + CAPI**, verify 4 event (View/ATC/Checkout/**Purchase**) | AI+Human | browser | quyền Business Manager, Pixel ID, store live | NEED-INFO | W1-04 | BLOCKED-INFO | SOP đầy đủ: `10-thuc-thi-viec-meta-pixel-capi.md` ✅ — cài cần store live + quyền Meta |
| W1-07 | **IP Gate:** tra mỗi design trên **tmsearch.uspto.gov** + log 5 mục/design | AI | browser/web | 6 concept đã chọn | NEED-APPROVAL | W1-08 | **DONE (cần CEO xác minh 2 mục)** | `W1-07-ip-gate-log.md` ✅ — 4 PASS (A-01,A-02,B-03,C-01); B-01 rủi ro trung (đổi "POWERED BY CAFFEINE & SPITE"); C-02 rủi ro cao (thay C-03). CEO tự tra USPTO B-01+C-02 trước khi sản xuất |
| W1-08 | Concept design 3 angle + brief mockup/video (→ 15–18 mockup + 3–6 video) | AI+Human | file | — (concept đã có); render cần tài khoản/FD | none (brief) | — | **DONE** (brief) | `03-Outputs/.../W1-08-concept-design-brief.md` ✅ — 11 concept + brief FD + 5 kịch bản video |
| W1-09 | Viết **9 ad copy** (3/angle), tránh "số 1/tốt nhất" | AI | file | 3 angle (introvert/burnout/pet-parent) — đã có | none | — | **DONE** | `03-Outputs/.../W1-09-ad-copy-9-mau.md` ✅ |
| W1-10 | Lập **quỹ COGS $600** tách ví + thẻ Visa $500 chỉ trả Printify | Human | — | tài khoản ngân hàng/thẻ | NEED-APPROVAL | — | HUMAN | việc ngân hàng — CEO tự làm |
| W1-11 | **Hoá đơn điện tử TT78** + ghi nhận nghĩa vụ thuế | AI+Human | web | nhà cung cấp HĐĐT, mã số thuế | NEED-INFO | — | BLOCKED-INFO | AI soạn phương án (MẪU — cần kế toán rà); đăng ký = CEO |

### Tuần 2 — Test 3 angle, $300
| id | hành động | owner | tool | cần (input) | cổng | phụ thuộc | trạng thái | bằng chứng |
|----|-----------|-------|------|-------------|------|-----------|------------|------------|
| W2-12 | Tạo **Advantage+ Shopping Campaign** (~$43/ngày) | AI+Human | browser | W1-06 xanh, ngân sách duyệt | NEED-APPROVAL | W1-06 | TODO | AI soạn cấu hình campaign; bật = đổ tiền → CEO duyệt |
| W2-13 | 3 angle × 3 ad (ảnh + carousel + **video**) | AI+Human | browser | mockup W1-08, copy W1-09 | NEED-APPROVAL | W1-08,W1-09,W2-12 | TODO | AI map ad↔angle sẵn; xuất bản = duyệt |
| W2-14 | Giữ learning phase (không tắt adset <3 ngày) | AI | file | campaign live | none | W2-12 | **DONE** | `03-Outputs/.../W2-14-quy-tac-learning-phase.md` ✅ |
| W2-15 | Khung **dashboard** CTR/CPC/CPM/ATC theo dõi hằng ngày | AI | file | — | none | — | **DONE** | `03-Outputs/.../W2-15-dashboard-ads.csv` ✅ |
| W2-16 | **SOP xử lý đơn 6 bước** + upload tracking ≤1h | AI | file | — | none | — | **DONE** | `10-thuc-thi-viec-xu-ly-don-6-buoc.md` ✅ |

### Tuần 3 — Scale angle thắng + retarget, $600
| id | hành động | owner | tool | cần (input) | cổng | phụ thuộc | trạng thái | bằng chứng |
|----|-----------|-------|------|-------------|------|-----------|------------|------------|
| W3-17 | Duplicate angle thắng → campaign riêng ~$300 | AI+Human | browser | dữ liệu T2, angle thắng | NEED-APPROVAL | W2-13 | TODO | — |
| W3-18 | Kill angle tệ + thay 2–3 creative mới | AI+Human | browser/file | dữ liệu T2 | NEED-APPROVAL | W2-13 | TODO | AI soạn creative mới; áp dụng = duyệt |
| W3-19 | Bật **retargeting** (VC 7d + ATC 14d), $150–200 | AI+Human | browser | pixel có audience | NEED-APPROVAL | W1-06 | TODO | — |
| W3-20 | Track **Cash ROAS** vs **Accounting ROAS** | AI | file | dữ liệu PayPal release | none | W2-15 | **DONE** | đã có 2 cột trong `W2-15-dashboard-ads.csv` ✅ |

### Tuần 4 — Go/No-Go scale, $700–900
| id | hành động | owner | tool | cần (input) | cổng | phụ thuộc | trạng thái | bằng chứng |
|----|-----------|-------|------|-------------|------|-----------|------------|------------|
| W4-21 | Đánh giá điều kiện scale (đủ cả 4 tiêu chí) | AI | file | dữ liệu T1–T3 | none | W3-* | **DONE** (khung) | `03-Outputs/.../W4-21-bang-cham-dieu-kien-scale.md` ✅ — điền số ở Tuần 4 |
| W4-22 | Nếu đủ: tăng budget angle thắng 20–30%/ngày | AI+Human | browser | quyết định scale | NEED-APPROVAL | W4-21 | TODO | — |
| W4-23 | Thêm order-bump **mug/sticker** tăng AOV | AI+Human | browser | sản phẩm bump | NEED-APPROVAL | W4-22 | TODO | AI cấu hình bump; bật = duyệt |
| W4-24 | **Tổng kết 30 ngày** → quyết định tháng 2 | AI | file | toàn bộ dữ liệu | none | tất cả | **DONE** (khung) | `03-Outputs/.../W4-24-khung-bao-cao-tong-ket.md` ✅ — điền số ngày 30 |

### Số liệu cần xác minh (làm sắc kế hoạch)
| id | hành động | owner | tool | cần (input) | cổng | phụ thuộc | trạng thái | bằng chứng |
|----|-----------|-------|------|-------------|------|-----------|------------|------------|
| VERIFY-1 | Tra **phí PayPal/Payoneer/2Checkout** thật cho merchant VN nhận USD | AI | web | — | none | — | **DONE** | `03-Outputs/.../VERIFY-1-phi-cong-thanh-toan.md` ✅ — ROAS hoà vốn 2.5–3.6× tuỳ cổng |
| VERIFY-2 | **Giá bán thực** mỗi SP + **giá in+ship** Printify US partner | AI+Human | web | dòng SP CEO chốt (Tee/Hoodie/Mug/Sticker) | none | — | **DONE** | `VERIFY-2-gia-von-roas.md` ✅ — COGS + giá gợi ý + ROAS HV 2.45–2.78×/SP, AOV mix 2.16×; 5 số cần CEO xác minh trên Printify |
| KYC-PREP | **Checklist chuẩn bị hồ sơ KYC** dùng chung 3 cổng | AI | web/file | — | none | — | **DONE** | `10-thuc-thi-chuan-bi-kyc.md` ✅ — giấy tờ, email DN, thứ tự mở cổng |

## Nhật ký gỡ cổng (HITL)
| thời điểm | bước liên quan | CEO cung cấp / quyết định |
|---|---|---|
| 2026-06-25 08:10 | (khởi tạo) | Sổ sinh từ `08-execution-plan.md`. Chờ CEO chạy `/vn-execute`. |
| 2026-06-25 08:55 | (vòng 1) | Máy đã tự chạy xong 9 bước AI-AUTO. Hết việc máy tự làm → gom cổng hỏi CEO. |
| 2026-06-25 09:05 | cổng chính, bước kế | CEO chốt **PayPal chính + Payoneer/2CO backup**; chọn làm tiếp cả 4 (SOP Payoneer/2CO, SOP Meta Pixel, concept design, cấu trúc store); design: chưa có → AI gợi ý concept trước; KYC: chưa, cần chuẩn bị. |
| 2026-06-25 09:20 | (vòng 2) | Máy soạn xong 5 bản chuẩn bị. Hỏi CEO 3 cổng tiếp. |
| 2026-06-25 09:30 | concept, store, SP | CEO: **AI tự chọn 6 concept + chạy IP Gate**; store **Daily Humor Co.** (dailyhumorco.com); SP **Tee+Hoodie chủ lực, Mug/Sticker bump**. |
| 2026-06-25 09:45 | (vòng 3) | Máy xong IP Gate + áp danh tính + VERIFY-2. **Hết việc tự động hoá được** — phần còn lại là việc người thật. |

## Phần còn lại = CEO THỰC HIỆN NGOÀI ĐỜI (máy đã chuẩn bị sẵn mọi SOP)
**A. Tự xác minh trademark (IP — máy không kết luận "sạch" thay được):**
- Tra `tmsearch.uspto.gov`: (1) **B-01** "CAFFEINE & SPITE" vs Reg#5370719 (RANGER UP) class 25/21; (2) **C-02** "DOG MOM" lọc LIVE class 25. Hướng dẫn trong `W1-07-ip-gate-log.md`. → 4 concept PASS có thể đưa render ngay.

**B. KYC & mở cổng (HUMAN-ONLY, SOP sẵn):**
1. Chuẩn bị hồ sơ theo `10-thuc-thi-chuan-bi-kyc.md` → **W1-01 PayPal** (`10-thuc-thi-viec1-paypal-business.md`) → **W1-02 Payoneer/2CO** → **W1-03 test $1** → **W1-10 quỹ COGS**.

**C. NEED-APPROVAL (CEO duyệt, máy thực thi/hướng dẫn tiếp):**
1. Mua **domain dailyhumorco.com + gói Shopify** (W1-04 — bản dựng đã sẵn). 2. Bật & đổ tiền ads (W2-12 → W4-22) sau khi Pixel Purchase xanh.

**D. Việc cần tài khoản/người (render):**
1. **W1-08 render:** thuê FD/dùng Placeit+CapCut tạo mockup+video theo brief đã có (4 concept PASS).

**Điền số thật còn thiếu (máy đã chừa chỗ):** W1-05 [PROCESSING/SHIPPING TIME] + [STATE] (luật điều chỉnh — DN VN, cần chuyên gia pháp lý); VERIFY-2 5 số trên Printify dashboard.

> ▶️ Sau khi làm xong nhóm nào, chạy lại **`/vn-execute`** — máy đọc sổ này và tự tiếp tục (vd: store live → tự hướng dẫn cài Pixel; design render xong → map ad↔angle cho W2-13).
