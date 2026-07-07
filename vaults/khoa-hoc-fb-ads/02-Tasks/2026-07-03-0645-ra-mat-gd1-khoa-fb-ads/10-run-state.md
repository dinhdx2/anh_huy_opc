# 10-run-state.md — Sổ thực-thi (run ledger)

> Nguồn sự-thật để resume. `/vn-execute` lần sau đọc sổ này, KHÔNG làm lại bước DONE.
> Kiểm bất-biến: `lib/flow.js#validateRunState` — E1 (DONE⇒bằng-chứng) + E2 (cổng⟂loại) **PASS** (errors=[]).
> Task: `2026-07-03-0645-ra-mat-gd1-khoa-fb-ads` · Plan: `08-execution-plan.md`.

## VIỆC #5 — Dựng khung + module lõi khóa — **AI-AUTO XONG** (chỉ còn founder quay video)

Quyết-định gỡ cổng (03-clarification.md): running-example **GENERIC** · chiến-lược **BETA SỚM (M0+M1)** · **không** xuất Drive.

| id | hành động | owner | tool | cổng | phụ-thuộc | trạng-thái | bằng-chứng |
|---|---|---|---|---|---|---|---|
| W1-05b | Viết outline khóa đầy-đủ (M0–M6 + Bonus) | AI | file | none | — | ✅ DONE | `03-Outputs/khoa-fb-ads-noi-dung/01-outline-khoa.md` |
| W1-05c | Viết nội-dung chi-tiết **Module lõi** (M1, 7 bài) | AI | file | none | 05b | ✅ DONE | `03-Outputs/.../02-module-loi-noi-dung.md` |
| W1-05i | Viết nội-dung **Module 0** (beta cần M0+M1) | AI | file | none | 05b | ✅ DONE | `03-Outputs/.../03-module-0-noi-dung.md` |
| W1-05j | Viết nội-dung **Module 2** (hiểu khách & target 2026) | AI | file | none | 05b | ✅ DONE | `03-Outputs/.../04-module-2-noi-dung.md` |
| W1-05k | Viết nội-dung **Module 4** (dựng campaign đầu-tay) | AI (agent) | file | none | 05b | ✅ DONE | `03-Outputs/.../06-module-4-noi-dung.md` (đã kiểm telos+chất-lượng) |
| W1-05m | Bonus **worksheet chân-dung/audience** + **Bài 2.1 deepdive & kịch-bản quay** | AI | file | none | 05j | ✅ DONE | `bonus-worksheet-chan-dung-audience.md` · `bai-2-1-deepdive-kich-ban-quay.md` |
| W1-05n | Viết nội-dung **M3 · M5 · M6** (3 agent song song) | AI (agent) | file | none | 05b | ✅ DONE | Cả 3 kiểm telos+chất-lượng: M3 (claim-cấm+chống bịa review) · M5 (CM/đơn "ROAS 1,8 vẫn lỗ") · M6 (cấm VIA, bảng hợp-lệ-vs-bẫy) |
| W1-05d | Soạn SOP quay + kịch-bản cho founder | AI | file | none | 05c | ✅ DONE | `10-thuc-thi-5-quay-module-loi.md` |
| W1-05e | Tự-kiểm bản-quyền sơ-bộ (nội-dung gốc) | AI | file | none | 05c | ✅ DONE | nội-dung tự soạn 100% gốc; cổng chính-thức = việc #1 (Gate-0) |
| W1-05f | Chốt running-example + beta/full | AI | — | NEED-INFO | 05b | ✅ DONE | 03-clarification.md: GENERIC + BETA SỚM |
| W1-05h | Xuất Google Drive? | AI | drive | NEED-INFO | 05c | ✅ DONE | 03-clarification.md: KHÔNG — giữ repo |
| W1-05g | **Quay/dựng video M0 + M1** (beta) | Human | — | HUMAN | 05d,05f,05i | 🧑 HUMAN | SOP `10-thuc-thi-5-quay-module-loi.md` — chờ founder quay |

**Tiến-độ nội-dung khóa:** ✅ **ĐỦ M0–M6** (7 module) + worksheet + Bài 2.1 deepdive/kịch-bản-quay — tất-cả đã kiểm telos & lên master. Còn 1 HUMAN: founder quay video (beta cần M0+M1; M2–M6 quay dần).

## Việc khác của Plan (chưa mở — TODO, xem `08-execution-plan.md`)
Đợt 0: **#1 Gate-0 pháp-lý** · #2 tracking · #3 hạ-tầng. Đợt 1: **#4 quà free** · #6 việc-#0 proof · #7 giờ founder. Đợt 2: #8 test thông-điệp · #9 phễu · #10 backend. Đợt 3: #11 ads+cổng CM · #12 ĐKKD/thuế.
> Gợi-ý `/vn-execute` tiếp: **#4 (quà free — AI-AUTO cao)** hoặc **#1 (Gate-0 pháp-lý — soạn được nhiều)**.

## Chờ CEO (Human)
- **Quay M0 + M1** theo SOP `10-thuc-thi-5-quay-module-loi.md` (M0 talking-head ~20’ + M1 màn-hình ~60–75’). Xong → nhắn "đã quay + link" → AI cập-nhật DONE + soạn tiếp M2–M6 nếu muốn.
