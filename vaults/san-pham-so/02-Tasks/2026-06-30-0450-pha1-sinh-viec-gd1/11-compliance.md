# SỔ KIỂM-TOÁN TUÂN THỦ (compliance ledger) — `11-compliance.md`

> Append-only. Ghi mỗi lần chạy CỔNG GIÁM-SÁT (SPEC `docs/design/giam-sat-tuan-thu/`). Engine: `npm run compliance <10-run-state.md>` + agent `kiem-soat-vien` (STRATEGIC/COMPLEX). Task `2026-06-30-0450-pha1-sinh-viec-gd1` (PHA 2 thực-thi GĐ1).

## Cổng đã chạy

| thời-điểm | pha | kiểm (engine + placement + coverage) | verdict | mã-lỗi | cách-xử |
|---|---|---|---|---|---|
| 2026-07-06 (retro lần 1) | PHA2 | E1/E4/E7 + placement + coverage | **FAIL** | 7×F1 (DENY) · 16×F3 (WARN) | Xem "Xử-lý retro" dưới |
| 2026-07-06 (retro sau xử) | PHA2 | E1/E4/E7 + placement + coverage | **PASS** | 0 | — |

## Xử-lý retro-clean (đợt E — SPEC §9.E)

**F3 (16) — process ở `03-Outputs/` → dời `02-Tasks/.../process/`:**
`1.3b · 2.2a · 3.1a · 4.2b · 5.1b · 5.2a · 5.2b · 6.2b · 7.1a · 7.2c · 8.2a · 9.1a · 9.1b · 9.3a · 9.3c · 9.5b` — `git mv` giữ lịch-sử; cập-nhật đường-dẫn bằng-chứng trong `10-run-state.md`.

**F1 (7) — mô-tả/proof-giả → sửa cho HONEST:**
| bước | bản-chất lỗi | cách xử |
|---|---|---|
| 9.1b · 6.2b · 5.1b | bước soạn-thảo hỗ-trợ bị chấm DELIVERABLE | engine tinh-chỉnh: bước không-động-từ-tool + output quy-trình (không mô-phỏng) → `SOP_SUPPORT` (hợp-lệ) |
| 4.1b · 7.1b | việc THẬT nhưng bằng-chứng viết bằng lời | gắn URL live `https://donthat.vercel.app` + đường-dẫn function → resolve được |
| 3.1a | form "spec build-ready" chưa nối backend | trỏ bằng-chứng vào form THẬT trong landing live + ghi rõ "backend email CHƯA nối — TODO" |
| 1.3b | "giao thử mô-phỏng" | giao đã THẬT qua webhook SePay (bước 7.1b) → cập-nhật bằng-chứng real, bỏ khung mô-phỏng; doc cũ lưu `process/` |

**Kết-quả:** `npm run compliance` → **PASS 0 vi-phạm** (59 bước). Cơ-chế (engine + hook fail-closed + agent) từ nay gác các lỗi này ở mọi lệnh/yêu-cầu vn-*.

## Cổng lần 2 — audit agent + engine E4b (2026-07-06)

| thời-điểm | kiểm | verdict | mã-lỗi | cách-xử |
|---|---|---|---|---|
| 2026-07-06 | agent `kiem-soat-vien` (đối-kháng, đọc từng file) | **VIOLATIONS** | F1 9.5a · F1 6.2a · F1(biên) 5.1b | Xem dưới |
| 2026-07-06 | engine + agent (sau xử) | **PASS** | 0 | — |

**Gốc lỗ-hổng:** engine cơ-học chỉ kiểm bằng-chứng TỒN-TẠI/resolve, KHÔNG kiểm nội-dung ĐÚNG/ĐỦ. Agent bắt được nhưng **trước đây là tùy-chọn & bị skip** → lọt.

**2 sửa để KHÔNG tái diễn:**
1. **Engine E4b (mechanical):** thêm `evidenceContentVerdict` — dò "kết-quả trống/điền-sau" (☐, `[…điền…]`, `[…sau tra…]`) → F1 tự-động; phân-biệt nhãn grounding `[cần CEO xác minh]` (không tính). Bắt 9.5a ngay ở tầng máy.
2. **Agent BẮT BUỘC (procedural):** skill `vn-executor` Bước 6.5 — chạy `kiem-soat-vien` TRƯỚC khi báo hoàn-thành, không skip (bắt fabrication như 6.2a mà máy khó thấy).

**Làm THẬT (không dán nhãn):**
- `9.5a`: tra DNS thật (donthat.* đều trống) + web search tên trùng (không thấy) → điền kết-quả thật; tra chính-thức IP Vietnam ghi rõ thuộc 9.5c.
- `6.2a`: sửa asset register — kit text + logo = ACTIVE (tồn-tại thật), video/slide = PLANNED (chưa sản-xuất).
- `5.1b`: bổ link freelancer THẬT (vLance/Fastlance — kiểm được) thay vì chỉ loại chung.
