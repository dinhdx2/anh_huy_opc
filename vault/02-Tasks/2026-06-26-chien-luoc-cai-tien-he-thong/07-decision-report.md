# CHIẾN LƯỢC CẢI TIẾN HỆ THỐNG vn-opc-claude

> Phân tích & chiến lược dưới góc nhìn hội đồng CEO vận hành hệ đa tác nhân. Ngày: 2026-06-26.

## TL;DR (≤3 câu)
Hệ có lõi tốt thật (output debate POD chất lượng đáng nể: phát hiện xung đột thật, gắn cờ claim thiếu căn cứ, tìm ra "yếu tố quyết định không phòng nào hỏi") nhưng kiến trúc "debate" hiện chỉ là **độc thoại song song + 1 lần hòa giải**, không phải tranh luận thật, và đang **trôi dạt tài liệu/cấu hình nghiêm trọng** (SKILL.md trỏ Google Drive/MCP Obsidian trong khi thực tế chạy web-native bằng file). Chiến lược xoay quanh 5 trụ: **(1) khép vòng tin cậy**, **(2) engine tranh luận đối kháng + phản biện**, **(3) bộ nhớ tổ chức**, **(4) kỷ luật chi phí/định tuyến**, **(5) template sống**.

---

## 1. Phân tích qua các lăng kính tư duy bậc cao

### 1.1. Nguyên lý đệ nhất — hệ này thực chất là gì
Bóc marketing đi, hệ quy về: `1 brief → N góc nhìn song song (mỗi góc 1 lần gọi LLM cô lập) → 1 lần tổng hợp Pro/Con → 1 báo cáo`. Giá trị thật không nằm ở "12 phòng ban" mà ở **kỷ luật ép mô hình đa-góc-nhìn + tự gắn cờ điều không chắc**. → Đầu tư nên đổ vào *chất lượng cơ chế bất đồng & kiểm chứng*, không phải thêm phòng ban.

### 1.2. Tư duy hệ thống — 3 điểm gãy
- **Các phòng KHÔNG nhìn thấy nhau** — `parallel()` chạy 12 monologue cô lập; "debate" là 1 agent đọc JSON viết Pro/Con → hòa giải hậu kỳ, không phải tranh luận.
- **Không có vòng phản hồi** — quyết định không tự ghi vào Brain; `state.md` cập nhật tay; round 2 phải hardcode kết luận round 1 vào `debate-run.js`.
- **Không có cổng kiểm chứng** — synthesizer gắn cờ claim yếu nhưng không ai *tấn công* claim mạnh.

### 1.3. Hệ quả bậc 2 — điều gì hỏng khi hệ thành công
Output dày disclaimer "[cần CEO xác minh]" + toàn benchmark → founder mới không đủ năng lực xác minh chính những số đó → an tâm giả tạo từ báo cáo trông chuyên nghiệp. Ví dụ thực: Operations từng đề xuất "Stripe qua danh tính ảo/EIN ảo" — lần này hệ bắt được, nhưng một lần chạy kém may có thể để lọt khuyến nghị vi phạm pháp lý/khóa tài khoản.

### 1.4. Tư duy phản chứng — nếu giả định cốt lõi sai
- "12 phòng = 12 góc nhìn đa dạng": **sai một phần** — cùng model nền, cùng scaffolding → thiên về đồng thuận (8/8 đồng ý "thanh toán trước"). Đa dạng bề mặt, không đa dạng nhận thức. Thiếu vai "luật sư của quỷ".
- "web-native, không MCP": đúng theo CLAUDE.md — nhưng SKILL.md orchestrator viết ngược lại.

### 1.5. Defect kiểm chứng thực địa
| # | Defect | Bằng chứng | Mức |
|---|---|---|---|
| D1 | Drift tài liệu lõi: orchestrator trỏ Drive + MCP Obsidian | SKILL.md Bước 1 `G:\My Drive\LS_OPC`, `vault_read/write/list`; README "lưu trữ qua Obsidian" — mâu thuẫn CLAUDE.md | 🔴 Cao |
| D2 | Brain schema lệch: persona yêu cầu `finance.md`+`market.md`, Brain thật không có | `strategy-lead.md` required_refs strategy/finance/market; Brain thật = budget/products/state/headcount/strategy | 🔴 Cao |
| D3 | Code chết/trùng: `debate-run.js` hardcode brief+brain round 2 | song song `debate.js` | 🟠 Vừa |
| D4 | "Debate" không phải debate: 1 agent đọc JSON, phòng không phản biện nhau | `debate.js` 40-45 | 🟠 Vừa (cơ hội lớn nhất) |
| D5 | Không enforce model tiering | `dept-02` hardcode opus, `debate.js` không set model | 🟡 Thấp |
| D6 | Router không schema/log/guard phủ | SKILL.md Bước 3 | 🟡 Thấp |

### 1.6. Điểm mạnh phải bảo toàn
Chất lượng output cao thật; human-in-the-loop 3 chặng; kỷ luật chống ảo giác ("[cần CEO xác minh]"); tách tầng sạch (agents/personas/templates/vault/packs); bám luật VN + ephemeral-aware (git push sau mỗi ghi).

---

## 2. Chiến lược — 5 trụ cột

### TRỤ 1 — Khép vòng tin cậy (ưu tiên #1)
- Sửa drift D1/D2/D3: SKILL.md web-native (Read/Write/Glob trên `vault/`), bỏ Drive/MCP; thống nhất tên file Brain; xóa/tham-số-hóa `debate-run.js`.
- Brain contract: schema bắt buộc + validator báo thiếu file thay vì để agent bịa.
- Data-grounding: phân biệt rõ "số thật DN" vs "benchmark ngành" (2 tag riêng).
- Tầng kiểm chứng pháp lý/thuế: WebSearch bắt buộc + "độ tươi nguồn".

### TRỤ 2 — Engine tranh luận v2 (đối kháng thật)
1. Perspectives (giữ parallel). 2. **Cross-examination**: phòng phản biện/đổi ý. 3. **Red-team/Verifier**: agent tấn công khuyến nghị mạnh (refute mặc định). 4. Synthesize (nhận thêm red-team).
- Luật sư của quỷ luân phiên; convergence loop tùy chọn cho STRATEGIC (loop-until-dry).

### TRỤ 3 — Bộ nhớ tổ chức
- Decision write-back: cập nhật `state.md` + `decisions-log.md` sau PAUSE duyệt.
- Task linking: đọc quyết định đã chốt → không tái tranh luận.
- Calibration loop (dài hạn): ghi "phòng X khuyến nghị → kết quả thực".

### TRỤ 4 — Kỷ luật chi phí & định tuyến
- Enforce model tiering thật trong `debate.js`.
- Escalation ladder: SIMPLE→ít phòng+Sonnet; STRATEGIC→bung 12 phòng Opus + loop.
- Router schema JSON `{departments, lý_do, độ_phủ}`.

### TRỤ 5 — Template sống
- Decision→template mapping điền tự động.
- Kiểm thử office-docs hoặc fallback Markdown→export.
- Pack validator cho pack ngành lạ.

---

## 3. Lộ trình ưu tiên
| Đợt | Hạng mục | Vì sao trước | Chi phí |
|---|---|---|---|
| P0 | TRỤ 1 (D1/D2/D3) + Brain contract | hệ đang tự mâu thuẫn; rẻ, rủi ro cao | Thấp |
| P1 | TRỤ 2: cross-examination + red-team | nâng đúng lõi giá trị | Vừa |
| P2 | TRỤ 3: decision write-back + decisions-log | khử nợ hardcode round 2 | Vừa |
| P3 | TRỤ 4: model tiering + ladder + router schema | dùng được hàng ngày, không đốt token | Thấp |
| P4 | TRỤ 5 + calibration | mở khóa template; học dài hạn | Cao |

## 4. Chỉ số đo thành công
- Tỷ lệ tự-mâu-thuẫn = 0. Red-team bắt ≥1 khuyến nghị rủi ro pháp lý mà bản cũ để lọt. % bất đồng được *giải* (không chỉ nêu) tăng. Token/quyết định giảm cho SIMPLE. Tái tranh luận việc đã chốt = 0.

## 5. Phản biện với chính chiến lược
Thêm vòng debate + red-team + loop sẽ tăng token & độ trễ cho solo founder dùng subscription → TRỤ 4 (escalation ladder) **không tùy chọn mà là điều kiện sống** của TRỤ 2, phải triển khai cùng nhau. Đó là hệ quả bậc 2 cần chặn trước.
