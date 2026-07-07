# 03 — Làm rõ & Gỡ cổng (clarification) · task pha1-sinh-viec-gd1

> Ghi lại mọi lần CEO cấp thông-tin / phê-duyệt trong lúc `/vn-execute` chạy (append-only).

## Lượt 1 — Cổng HITL sau khi chạy hết AI-AUTO (2026-06-30)

AI đã tự chạy 46/58 bước AI-AUTO → gom 4 câu hỏi cổng. CEO trả lời:

| # | Câu hỏi (cổng) | CEO chốt | Gỡ bước |
|---|---|---|---|
| 1 | Tên thương-hiệu | **ĐơnThật** (đề-xuất, chờ Legal tra SHTT/domain) | 9.5c (chuẩn-bị hồ-sơ), brand placeholder landing |
| 2 | Cổng thanh-toán VN | **PayOS** (phí 0%, webhook sẵn) | 4.1b wiring, 7.1a webhook, phí cổng cho 4.3 |
| 3 | Giá hero cho paid-test | *(CEO chưa chọn)* | 4.3a vẫn chờ giá + CAC mục-tiêu |
| 4 | Năng-lực đội-ngũ GĐ1 | **Solo + AI** (founder solo, dùng AI thay người) | 5.1a RACI, 5.2c bus-factor |

**Hệ-quả AI tự chạy tiếp (không cần hỏi lại):**
- Thay `[TÊN-BRAND]` → **ĐơnThật** trong landing HTML.
- Lập **RACI Solo + AI** (`5.1a-raci.md`) + hoàn-thiện rủi-ro bus-factor.
- Chuẩn-bị **hồ-sơ nộp đơn SHTT** cho "ĐơnThật" (`9.5c-ho-so-nop-don-shtt.md`) — CEO/Legal nộp thật.
- Dựng **sheet CM/đơn theo PayOS (phí 0%)** cho 3 mốc giá 149/179/199k (`4.3-cm-don-scenario.md`) để CEO thấy biên mỗi mốc → chốt giá sau.
- Cập-nhật `.vncoderc` (company_name) + `decisions-log.md` (altitude: dinh-vi).

**Còn chờ CEO (chưa gỡ):** giá hero (4.3a) · ngân-sách tool/tháng (6.1c) · đăng-ký Zalo OA (3.1b) · chi tiền ads (TEST — hoãn tới khi hero live + 2 cờ đỏ đóng) · kế-toán xác-minh thuế (9.3b, HUMAN-ONLY).

## Lượt 2 — CEO chọn "đi mặc-định" (2026-07-05)

CEO gõ **"đi mặc-định"** cho 4 cổng đã trình:

| # | Câu hỏi (cổng) | CEO chốt | Gỡ bước |
|---|---|---|---|
| 1 | Giá hero cho paid-test | **179k** (điểm giữa; CAC-trần 179k @0% thuế/refund) | 4.3a → 4.3b (điền `products.md`) |
| 2 | Ngân-sách công-cụ/tháng | **500k–1tr** (Solo+AI: lõi free + 1 gói AI Plus) | 6.1c (`6.1c-chot-ngan-sach-tool.md`) |
| 3 | Cổng ngoài bật NGAY | **PayOS trước** (Zalo OA / SHTT / kế-toán → hoãn) | 4.1b (SOP `10-thuc-thi-1-payos-onboarding.md`) |
| 4 | Chi tiền ads (TEST) | **Hoãn tới khi hero live + kế-toán rà thuế** | TEST giữ BLOCKED-APPROVE (điều-kiện rõ) |

**CAC-payback mặc-định:** CM/đơn DƯƠNG ngay đơn đầu (payback ≤ 1 đơn) — CEO không override.

**Hệ-quả AI tự chạy tiếp (đã làm lượt này):**
- Điền `products.md` unit-econ số thật: P=179k, phí cổng 0% (PayOS), biên gộp ≈179k, CAC-trần break-even 179k/170.05k/157.52k.
- Chốt stack tool trong trần 500k–1tr (`6.1c-chot-ngan-sach-tool.md`) + áp vào `budget.md`.
- Soạn SOP onboarding+wiring PayOS (`10-thuc-thi-1-payos-onboarding.md`) — CEO tự KYC lấy 3 khoá → AI ráp & test đơn (gỡ 4.1c/7.1b/8.2b).

**Còn chờ CEO (sau lượt 2):**
- **CEO tự KYC PayOS** (Phần A của SOP) → dán 3 khoá → AI wiring + test (gỡ 4.1b→4.1c→7.1b→8.2b).
- Hoãn (CEO chưa bật): Zalo OA (3.1b) · nộp đơn SHTT (9.5c, cần Legal tra tên "ĐơnThật") · kế-toán thuế (9.3b) · chi ads (TEST).

## Lượt 3 — Đổi cổng thanh-toán PayOS → SePay (2026-07-05)

CEO báo **đăng-ký PayOS trục-trặc** → hỏi phương-án khác. AI tra 4 phương-án (SePay · VietQR thủ-công · MoMo/ZaloPay/VNPay · Gumroad/Lemon Squeezy) — phát-hiện **PayOS là SP của Casso** nên cùng vướng; **SePay** là drop-in sát nhất (cùng 0% + webhook, KYC nhẹ: email + TK ngân-hàng, hỗ-trợ cá-nhân/hộ). CEO chốt **"đi SePay"**.

**AI tự chạy tiếp (lượt này):**
- Đổi cổng trong `products.md` (phí vẫn 0%) + `budget.md`.
- Soạn SOP mới `10-thuc-thi-1-sepay-onboarding.md`; đánh dấu SOP PayOS **superseded**.
- Cập-nhật sổ `4.1b` (SePay) + `decisions-log` (supersede quyết-định PayOS).

**Còn chờ CEO:** **đăng-ký SePay** (Phần A SOP — nhẹ) → dán API token → AI ráp & test đơn (gỡ 4.1b→4.1c→7.1b→8.2b). Các mục hoãn khác giữ nguyên. ⚠️ Đổi cổng KHÔNG né thuế — vẫn cần kế-toán rà (9.3b).
