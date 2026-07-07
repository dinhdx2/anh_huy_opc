# SỔ THỰC THI (Run Ledger) — `10-run-state.md`

> Nguồn sự thật để **thực thi & resume** task `2026-06-30-0450-pha1-sinh-viec-gd1` (PHA 1 sinh-việc GĐ1 validate). Do skill `vn-executor` sinh & cập nhật. Mỗi dòng = **một bước nguyên-tử** (mã = `NVC.x`). Bất-biến: `lib/flow.js#validateRunState` (E1/E2) + **giám-sát tuân thủ** `lib/compliance.js` (E1/E4/E6/E7 · fail-closed) — sổ kiểm-toán `11-compliance.md`.

## TL;DR tiến độ
- Task: `2026-06-30-0450-pha1-sinh-viec-gd1` · Cập nhật: `2026-07-06 (lượt 7 — LUỒNG BÁN LIVE & TEST PASS: mua→VietQR→SePay→tải OK)`
- Hoàn thành: **54/59 bước DONE (92%)** — **cỗ-máy bán tự-động đã chạy end-to-end** (landing `donthat.vercel.app` + SePay 0% + giao kit tự-động).
- **Đang chặn (còn chờ CEO):** 3 BLOCKED-APPROVE (3.1b Zalo OA · 9.5c nộp SHTT · TEST chi ads) · 1 HUMAN (9.3b kế-toán thuế). BLOCKED-INFO = 0.
- **1 TODO** (8.2b test pixel conversion — cần tài-khoản ads).
- **🔒 Pre-ads hardening (chưa chạy ads nên chưa gấp):** gỡ `?debug=1` (order-status lộ danh-sách gd) · siết link tải `/dl/*.zip` (hiện là đường-dẫn tĩnh khó-đoán → nên chuyển link có token/hết-hạn trước khi scale).
- Output deliverable tại `vaults/san-pham-so/03-Outputs/gd1-validate/` (`kit/` + landing + function + policy + sheet). SOP/spec/quy-trình → `02-Tasks/.../process/` (16 file dời từ Outputs, retro-clean 2026-07-06).
- **Compliance: PHA2 PASS · 0 vi-phạm · cover 100%** (`npm run compliance` — sổ `11-compliance.md`). Retro-clean đợt E: dời 16 process-doc + sửa 7 F1 (evidence real).

## Chú giải
- **owner:** `AI` (máy làm trọn) · `AI+Human` (máy chuẩn-bị, CEO duyệt) · `Human` (chỉ người làm được).
- **cổng:** `none` · `NEED-INFO` (thiếu dữ-liệu/bí-mật) · `NEED-APPROVAL` (ra tiền/pháp-lý/công-bố/không hoàn-tác) · `HUMAN` (KYC/định-danh).
- **trạng thái:** `TODO` · `DOING` · `BLOCKED-INFO` · `BLOCKED-APPROVE` · `HUMAN` · `DONE` · `FAILED`.

## Bảng bước

| id | hành động | owner | tool | cần (input) | cổng | phụ thuộc | trạng thái | bằng chứng |
|----|-----------|-------|------|-------------|------|-----------|------------|------------|
| 2.2a | Lập khung nghiên-cứu đầu-cầu (nguồn + tiêu-chí "cầu xác-nhận") | AI | file | — | none | — | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/2.2a-khung-nghien-cuu-dau-cau.md` |
| 2.2b | Quét tín-hiệu cầu qua công-cụ (web/xu-hướng + cộng-đồng + đối-thủ + từ-khóa) | AI | web | — | none | 2.2a | DONE | `03-Outputs/gd1-validate/2.2b-bang-tin-hieu-cau.md` |
| 2.2c | Phân-tích đối-thủ & khoảng-trống định-vị | AI | web | — | none | 2.2b | DONE | `03-Outputs/gd1-validate/2.2c-ban-do-dinh-vi-doi-thu.md` |
| 2.2d | Kiểm chéo tín-hiệu (anti-bịa/rác) | AI | file | — | none | 2.2b | DONE | `03-Outputs/gd1-validate/2.2d-kiem-cheo-tin-hieu.md` |
| 2.2e | Tổng-hợp kết-luận đầu-cầu + bảng nỗi-đau + WTP | AI | file | — | none | 2.2c,2.2d | DONE | `03-Outputs/gd1-validate/2.2e-ket-luan-dau-cau-WTP.md` |
| 1.1a | Chọn 1 nỗi-đau từ kết-luận nghiên-cứu | AI | file | — | none | 2.2e | DONE | `03-Outputs/gd1-validate/1.1a-noi-dau-chot.md` |
| 1.1b | Phác mục-lục kit + định "đầu-ra dùng-được-ngay" | AI | file | — | none | 1.1a | DONE | `03-Outputs/gd1-validate/1.1b-outline-hero-kit.md` |
| 1.1c | Kiểm & cắt scope-creep | AI | file | — | none | 1.1b | DONE | `03-Outputs/gd1-validate/1.1c-scope-chot.md` |
| 9.1a | Viết checklist cổng bản-quyền (no Canva Pro/raw-AI/asset chưa license) | AI | file | — | none | — | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/9.1a-checklist-cong-ban-quyen.md` |
| 9.1b | Áp gate trước mỗi lần phát-hành | AI | file | — | none | 9.1a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/9.1b-quy-trinh-ap-gate.md` |
| 9.2a | Soạn Privacy Policy + consent string (NĐ 13) | AI | web/file | — | none | — | DONE | `03-Outputs/gd1-validate/9.2a-privacy-policy.md` |
| 9.2b | Rà cơ-sở pháp-lý thu/lưu/rút data | AI | file | — | none | 9.2a | DONE | `03-Outputs/gd1-validate/9.2b-ra-co-so-phap-ly-data.md` |
| 6.1a | Liệt-kê công-cụ (thiết-kế/quay/AI/landing/email) | AI | file | — | none | — | DONE | `03-Outputs/gd1-validate/6.1a-stack-cong-cu.md` |
| 6.1b | Kiểm điều-khoản TM mỗi công-cụ | AI | web/file | — | none | 6.1a | DONE | `03-Outputs/gd1-validate/6.1b-kiem-dieu-khoan-tm.md` |
| 6.1c | Chốt ngân-sách mua/subscription | AI | — | CEO khai ngân-sách công-cụ/tháng | NEED-INFO | 6.1b | DONE | `03-Outputs/gd1-validate/6.1c-chot-ngan-sach-tool.md` (trần 500k–1tr; áp budget.md) |
| 9.5a | Tra sơ-bộ SHTT Nhóm 41+9 + check domain | AI | web | — | none | — | DONE | Tra THẬT 2026-07-06: DNS `donthat.*` đều NXDOMAIN (trống) + web search không thấy tên trùng (nguồn trong file); tra chính-thức IP Vietnam → `9.5c`. `03-Outputs/gd1-validate/9.5a-tra-shtt-domain.md` |
| 9.5b | Shortlist 2–3 tên an-toàn | AI | file | — | none | 9.5a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/9.5b-shortlist-ten-an-toan.md` |
| 1.2d | Chuẩn-bị template/asset gốc có license | AI | file | — | none | 6.1b | DONE | `03-Outputs/gd1-validate/1.2d-asset-goc-co-license.md` |
| 6.2a | Lập asset register (cột nguồn + license) | AI | file | — | none | 1.2d | DONE | Sửa honest 2026-07-06: kit text v1.0 + logo = ACTIVE (tồn-tại thật); video/slide = PLANNED (chưa sản-xuất). `03-Outputs/gd1-validate/6.2a-asset-register.csv` |
| 6.2b | Cờ asset chưa rõ license → DỪNG dùng | AI | file | — | none | 6.2a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/6.2b-quy-tac-co-asset.md` |
| 1.2a | Soạn bộ mẫu content & ads bán hàng | AI | file | — | none | 1.1c | DONE | `03-Outputs/gd1-validate/1.2a-bo-mau-content-ads.md` |
| 1.2b | Viết checklist chốt đơn + thiết-kế bản trình-bày | AI | file | — | none | 1.2a | DONE | `03-Outputs/gd1-validate/kit/04-checklist-chot-don.md (+ kit/ 6 file nội-dung hero)` |
| 1.2c | Rà chính-tả + đối-chiếu cổng 9.1 (kit pass-gate) | AI | file | — | none | 1.2b,9.1a | DONE | `03-Outputs/gd1-validate/1.2c-gate-check-ban-quyen.md (PASS 5/5 cổng)` |
| 2.1a | Viết 1 câu wedge + 3–5 góc bán | AI | file | — | none | 1.1a,2.2c | DONE | `03-Outputs/gd1-validate/2.1a-messaging-wedge.md` |
| 2.1b/9.4 | Rà tránh "giàu nhanh"/cam-kết sai (Luật QC) | AI | file | — | none | 2.1a | DONE | `03-Outputs/gd1-validate/9.4-ra-noidung-ads-luatqc.md` |
| 1.3a | Tạo watermark + link cá-nhân-hóa/license key (thiết-kế) | AI | file | — | none | 1.2c | DONE | `03-Outputs/gd1-validate/1.3a-watermark-license-scheme.md` |
| 1.3b | Giao 1 đơn thật (webhook SePay cấp link tải) | AI | web | — | none | 1.3a | DONE | Giao THẬT end-to-end qua webhook SePay: `https://donthat.vercel.app` → sau thanh-toán tự cấp link tải kit; test PASS 2026-07-06 (xem bước 7.1b). Bản thử-nghiệm cũ lưu ở `process/` |
| 4.2a | Lập sheet công-thức CM/đơn | AI | file | — | none | — | DONE | `03-Outputs/gd1-validate/4.2a-sheet-cm-don.csv` |
| 4.2b | Chốt quy-tắc phanh (KHÔNG ROAS-từ-biên-gộp) | AI | file | — | none | 4.2a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/4.2b-quy-tac-phanh.md` |
| 4.3a | Thu số thật unit-econ (giá, phí cổng, CAC mục-tiêu) | AI | — | CEO khai giá bán/phí cổng/CAC mục-tiêu | NEED-INFO | 4.2a | DONE | giá=179k (CEO chốt) · phí cổng 0% PayOS · CAC-payback ≤1 đơn; sheet `4.3-cm-don-scenario-payos.md` |
| 4.3b | Cập-nhật products.md `[số thật DN]` | AI | file | số thật từ 4.3a | none | 4.3a | DONE | `00-Brain/products.md` mục Unit economics (179k, biên gộp ~179k, CAC-trần 179k/170.05k/157.52k) |
| 4.1a | Dựng landing bán hero (HTML build-ready) | AI | file | — | none | 2.1a,1.2c | DONE | `03-Outputs/gd1-validate/4.1a-landing-hero.html (+ README; rà Luật QC 8/8 PASS)` |
| 4.1b | Tích-hợp cổng thanh-toán VN (SePay — đổi từ PayOS) | AI+Human | web | CEO redeploy + rotate secret + set env | NEED-APPROVAL | 4.1a | DONE | LIVE & TEST PASS 2026-07-06: `https://donthat.vercel.app` (live) + function `03-Outputs/gd1-validate/deploy-donthat/api/order-status.js` (đối-soát SePay) + `.../api/sepay-webhook.js`; VietinBank 8666 (API Banking), QR tiền-tố `SEVQR`. Mua→QR→SePay nhận→auto xác-nhận OK |
| 4.1c | Kiểm thử 1 giao-dịch thử | AI | web | cổng đã bật (4.1b) | none | 4.1b | DONE | Test 179k qua VietQR → SePay ghi (SEVQR) → order-status trả `paid:true` → nút tải hiện. 2026-07-06 |
| 4.1d | Đăng-ký domain + đưa landing lên host (URL công-khai HTTPS cho webhook) | AI+Human | web | CEO mua domain / lập host + URL công-khai | NEED-APPROVAL | 4.1a | DONE | Landing + 2 function LIVE `donthat.vercel.app` (Vercel, org BoostGO). Domain thương-hiệu donthat.vn/.com để sau (chờ Legal). SOP `10-thuc-thi-2-domain-hosting.md` |
| 3.1a | Tạo form opt-in trên landing (email backend: pending) | AI | file | — | none | 9.2a | DONE | Form opt-in có THẬT trong landing live `03-Outputs/gd1-validate/deploy-donthat/index.html` (UI + consent NĐ13); bản thiết-kế `process/3.1a-form-optin-spec.md`. ⚠️ Backend email (MailerLite) CHƯA nối — TODO trước khi thu lead thật |
| 3.1b | Tạo Zalo OA | AI+Human | web | định-danh DN/cá-nhân | NEED-APPROVAL | — | BLOCKED-APPROVE | — |
| 3.1c | Gắn consent NĐ 13 vào form | AI | file | — | none | 3.1a,9.2a | DONE | `03-Outputs/gd1-validate/3.1c-consent-nd13-tren-form.md` |
| 3.2a | Viết 3–5 email/tin Zalo nuôi-dưỡng | AI | file | — | none | 3.1a | DONE | `03-Outputs/gd1-validate/3.2a-chuoi-nuoi-duong.md` |
| 3.2b | Thiết-lập cơ-chế rút/opt-out | AI | file | — | none | 3.2a | DONE | `03-Outputs/gd1-validate/3.2b-co-che-opt-out.md` |
| 8.1a | Dựng sheet gom 5 KPI phanh | AI | file | — | none | 4.2a | DONE | `03-Outputs/gd1-validate/8.1a-dashboard-5kpi.csv` |
| 8.1b | Định "1 nguồn-sự-thật" | AI | file | — | none | 8.1a | DONE | `03-Outputs/gd1-validate/8.1b-quy-uoc-1-nguon-su-that.md` |
| 8.2a | Cài pixel + UTM trên ads & landing (spec) | AI | file | — | none | 4.1a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/8.2a-tracking-pixel-utm-spec.md` |
| 8.2b | Kiểm dữ-liệu về đúng (test conversion) | AI | web | pixel cài thật (cần tài-khoản ads) | none | 8.2a | TODO | — |
| 7.1a | Cấu-hình webhook/automation cấp link/license (spec) | AI | file | — | none | 4.1b,1.3a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/7.1a-webhook-giao-sp-spec.md` |
| 7.1b | Kiểm thử end-to-end 1 đơn | AI | web | luồng live (cần cổng tiền) | none | 7.1a | DONE | End-to-end PASS trên `https://donthat.vercel.app`: mua→chuyển 179k (SEVQR)→SePay nhận→auto xác-nhận→**tải kit OK** (CEO xác-nhận "ra đơn, tải được"). 2026-07-06 |
| 7.2a | Viết chính-sách refund | AI | file | — | none | — | DONE | `03-Outputs/gd1-validate/7.2a-chinh-sach-refund.md` |
| 7.2b | Lập kênh hỗ-trợ (Zalo/email) + FAQ | AI | file | — | none | — | DONE | `03-Outputs/gd1-validate/7.2b-kenh-cskh-faq.md` |
| 7.2c | Ghi quy-tắc xử khiếu-nại/chargeback | AI | file | — | none | 7.2a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/7.2c-quy-tac-chargeback.md` |
| 5.1a | Lập bảng RACI tối-thiểu | AI | — | RACI Solo+AI (CEO chốt) | NEED-INFO | — | DONE | `03-Outputs/gd1-validate/5.1a-raci.md` |
| 5.1b | Lập danh-sách freelancer dự-phòng | AI | web/file | — | none | — | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/5.1b-shortlist-freelancer.md` |
| 5.2a | Viết SOP làm SP số | AI | file | — | none | 1.2c | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/5.2a-sop-lam-sp-so.md` |
| 5.2b | Viết SOP giao SP + xử đơn | AI | file | — | none | 7.1a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/5.2b-sop-giao-sp-xu-don.md` |
| 5.2c | Ghi rủi-ro "bus-factor 1 người" + cách giảm | AI | file | — | none | 5.1a | DONE | `03-Outputs/gd1-validate/5.2c-rui-ro-bus-factor.md` |
| 9.3a | Chuẩn-bị hồ-sơ/câu hỏi cho kế-toán (brief thuế) | AI | web/file | — | none | — | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/9.3a-brief-thue-cho-ketoan.md` |
| 9.3b | Kế-toán xác-minh ngưỡng ~1 tỷ + mô-hình (hộ/cá-nhân/công-ty) | Human | — | kế-toán có chứng-chỉ | HUMAN | 9.3a | HUMAN | CEO liên hệ kế toán với file 9.3a |
| 9.3c | Chốt: KHÔNG dùng số chưa rà làm căn-cứ vận-hành | AI | file | — | none | 9.3a | DONE | `02-Tasks/2026-06-30-0450-pha1-sinh-viec-gd1/process/9.3c-quy-tac-chan-so-chua-ra.md` |
| 9.5c | Nộp đơn SHTT first-to-file (sau khi CEO chốt tên) | AI+Human | web | CEO chốt tên + chi phí nộp đơn | NEED-APPROVAL | 9.5b | BLOCKED-APPROVE | hồ-sơ sẵn `9.5c-ho-so-nop-don-shtt.md` (tên=ĐơnThật); chờ Legal tra + CEO nộp |
| TEST | Ads test theo đợt (trần 15–30tr/th) → đo CM/đơn | AI+Human | web | duyệt chi tiền ads + tài-khoản ads | NEED-APPROVAL | 1.3b,4.1c,3.1a,8.2a,9.4 | BLOCKED-APPROVE | — |

## Nhật ký gỡ cổng (HITL)

| thời điểm | bước liên quan | CEO cung cấp / quyết định |
|---|---|---|
| 2026-06-30 (lượt 1) | 9.5c · 4.1b · 5.1a | Tên=**ĐơnThật** · cổng=**PayOS** · nhân-lực=**Solo+AI** (xem `03-clarification.md` Lượt 1) |
| 2026-07-05 (lượt 2) | 4.3a · 6.1c · 4.1b · TEST | "đi mặc-định": giá **179k** · tool **500k–1tr** · **bật PayOS trước** · **hoãn ads** tới khi hero live + kế-toán rà thuế |
| 2026-07-05 (lượt 3) | 4.1b | PayOS trục-trặc đăng-ký → CEO chốt **đổi sang SePay** (cùng 0% + webhook, KYC nhẹ). SOP mới `10-thuc-thi-1-sepay-onboarding.md` |
| 2026-07-05 (lượt 4) | 4.1b · 4.1d | CEO: deploy landing lên **Vercel** (`donthat.vercel.app`, org BoostGO); nối **VietinBank 8666**; tạo webhook #43701 (HMAC). Cung-cấp API token + webhook secret + TK. **⚠️ Secret lộ trong git (commit 2af75b6) → AI gỡ + yêu-cầu rotate + chuyển Vercel env.** Giao kit = **A (link tải trên trang)** |
| 2026-07-05 (lượt 5) | 4.1b · 4.1c | AI build **gói deploy v2** (checkout VietQR 179k + `api/order-status` đối-soát SePay + `api/sepay-webhook`). Verify layout OK. Chờ CEO redeploy + rotate/env + đổi webhook URL |
| 2026-07-06 (lượt 6) | 4.1c | Debug: SePay chỉ nhận gd có nội-dung **bắt đầu `SEVQR`** (yêu-cầu VietinBank). Đơn 179k thiếu SEVQR → không đồng-bộ. Fix: QR des = `SEVQR <mã đơn>` (v4). Cũng bỏ lọc `amount_in` + thêm `?debug=1` (order-status v2/v3) |
| 2026-07-06 (lượt 7) | 4.1b·4.1c·4.1d·7.1b | ✅ **TEST PASS**: CEO redeploy v4 → mua → chuyển 179k (SEVQR) → SePay nhận → trang auto "Đã nhận thanh toán" → **tải kit OK**. Chốt 4 bước DONE |

## Ghi chú thực-thi
- **"Live" cần tài-khoản ngoài:** các bước `4.1a/3.1a/8.2a/7.1a` được AI sản-xuất tới mức **build-ready artifact** (HTML/spec/cấu-hình) — phần **deploy lên domain/tài-khoản thật** phụ-thuộc cổng tiền (4.1b) + hosting/domain (NEED-INFO). Bước kiểm-thử `4.1c/7.1b/8.2b` chờ tài-khoản live.
- **1.3b** giao-thử = mô-phỏng quy-trình (chưa có cổng tiền) → log thiết-kế, đánh dấu rõ "mô-phỏng, chưa giao thật".
- **Brand placeholder:** tên thương-hiệu chưa chốt (9.5 NEED-APPROVAL) → mọi deliverable dùng placeholder `[TÊN-BRAND]`.
