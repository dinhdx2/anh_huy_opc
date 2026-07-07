# Nhật ký quyết định (decisions-log.md)

> **Append-only.** Ghi quyết-định CEO đã DUYỆT (`status: locked`), kèm nhãn `altitude` ∈ {telos, dinh-vi, moat, cau-truc}.
> Orchestrator đọc mục `status: locked` TRƯỚC debate → nạp "QUYẾT ĐỊNH ĐÃ CHỐT — KHÔNG bàn lại".
> Đảo quyết-định → thêm mục `superseded`, KHÔNG xóa lịch-sử.

---
date: 2026-06-29
altitude: cau-truc
status: locked
decision: "Onboard vault 'san-pham-so' — ngành sản-phẩm số B2C VN (kết-hợp). Kích-hoạt 12 phòng nền + phòng pack 13-content-ip (Sản xuất Nội dung số & Bản quyền). Pack: digital-products."
by: CEO
---

---
date: 2026-06-29
altitude: dinh-vi
status: locked
task: 2026-06-29-1509-chot-4-diem-onboard-sp-so
decision: "Chốt 4 điểm onboard (hội-đồng 9 phòng STRATEGIC). NGÁCH: Marketing/bán hàng thực-chiến cho nhà bán MỚI TikTok Shop/Shopee VN (<6 tháng); dự-phòng ngách B (năng-suất/AI). HERO 2 tầng: kit 'lên đơn' 149–199k (validate) → khóa mini 299–999k → khóa lớn 1.5–5tr. GTM: PAID-LED có kỷ-luật (CEO override organic-first) — ads từ đầu, cổng PMF = contribution-margin/đơn DƯƠNG + CAC-payback mới scale; thu email+Zalo OA song song; kênh website/landing + cổng VN, chưa lên sàn khóa-học GĐ1. TELOS đã DUYỆT → cổng G0 mở."
by: "CEO (dinhdx2)"
rang_buoc_khong_ban_lai:
  - "Ngách = nhà bán mới Shopee/TikTok Shop (<6 tháng) — không quay lại 'dạy marketing đại-trà'."
  - "KHÔNG scale ads khi contribution-margin/đơn chưa DƯƠNG (CM âm → dừng sửa phễu). Trần burn validate 15–30tr/tháng."
  - "Hero: KHÔNG dùng Canva Pro elements / raw AI output / asset chưa license (red-team cờ đỏ — Luật SHTT)."
  - "Số thuế: ngưỡng ~1 tỷ/năm (NĐ 141/2026) — BẮT BUỘC kế-toán xác minh trước vận-hành; budget.md đã sửa từ 200tr."
  - "Tên thương-hiệu: chưa chốt — Legal tra Cục SHTT (Nhóm 41+9)+domain trước khi chi vào brand (first-to-file)."
---

---
date: 2026-06-30
altitude: cau-truc
status: locked
task: 2026-06-30-0450-pha1-sinh-viec-gd1
decision: "Duyệt PHA 1 sinh-thành (vn-architect) cho GĐ1 validate. Cổng A + Cổng B đã duyệt. Cây việc: 9 mục-tiêu (trạng-thái) + 23 nhiệm-vụ-chính (động-từ) từ 9/11 khía-cạnh active (asp-10/11 ngủ), đúng-tầng 0 lỗi (lib/tier.js). Cây cấu-trúc: 7 khối ↔ 9 phòng live + dept-13, GĐ1 solo → KHÔNG đẻ bộ-phận. Tra-KHO: bootstrap (mọi năng-lực NEW). Plan 24 hành-động ưu-tiên (08-execution-plan.md)."
by: "CEO (dinhdx2)"
rang_buoc_khong_ban_lai:
  - "Đường-tới-hạn validate: xác-nhận nỗi-đau → hero qua cổng bản-quyền → landing+cổng tiền → thu lead → đo CM/đơn → ads test."
  - "4 cổng cứng NEED-APPROVAL: đăng-ký cổng tiền · tạo Zalo OA · nộp đơn SHTT tên · CHI TIỀN ADS."
  - "2 cờ đỏ chặn mở bán: thuế (kế-toán xác-minh) · bản-quyền hero (no Canva Pro/raw-AI/asset chưa license)."
---

---
date: 2026-06-30
altitude: dinh-vi
status: locked
task: 2026-06-30-0450-pha1-sinh-viec-gd1
decision: "Cổng HITL lượt 1 của /vn-execute (thực-thi GĐ1). CEO chốt 3 quyết-định gỡ chặn: (1) TÊN thương-hiệu = **ĐơnThật** (đề-xuất, chờ Legal tra SHTT Nhóm 41+9 + domain chính-thức trước khi nộp đơn); (2) CỔNG THANH-TOÁN = **PayOS** (phí 0%, webhook sẵn — landing/checkout/webhook giao SP wiring theo PayOS); (3) NHÂN-LỰC GĐ1 = **Solo + AI** (founder làm một mình, dùng AI/tool thay đồng-đội & freelancer — RACI & bus-factor theo mô-hình này)."
by: "CEO (dinhdx2)"
rang_buoc_khong_ban_lai:
  - "Tên ĐơnThật là ĐỀ-XUẤT — chưa nộp đơn SHTT; chưa chi vào brand tới khi Legal xác-nhận khả-năng đăng-ký + domain."
  - "Cổng tiền = PayOS; CEO tự đăng-ký (KYC) để lấy link checkout + key webhook thật."
  - "Solo + AI → rủi-ro bus-factor 1 người CAO → bắt-buộc SOP-hoá + sao-lưu tài-khoản/asset (xem 5.2c)."
  - "CHƯA chốt: giá hero (149/179/199k), ngân-sách tool (6.1c), Zalo OA (3.1b), chi ads (TEST), kế-toán thuế (9.3b)."
---

---
date: 2026-07-05
altitude: dinh-vi
status: locked
task: 2026-06-30-0450-pha1-sinh-viec-gd1
decision: "Cổng HITL lượt 2 của /vn-execute — CEO chọn 'đi mặc-định'. (1) GIÁ hero = **179.000đ** (điểm giữa 149/179/199; PayOS 0% → CAC-trần break-even 179k @0% thuế/refund, 170.05k @5% refund). (2) CAC-payback mục-tiêu = CM/đơn DƯƠNG ngay đơn đầu (≤1 đơn). (3) NGÂN-SÁCH công-cụ = **500k–1tr/tháng** (Solo+AI: lõi free tier + 1 gói AI Plus; KHÔNG tính ads). (4) Cổng ngoài bật NGAY = **PayOS trước** (Zalo OA/SHTT/kế-toán hoãn). (5) Chi ads (TEST) = **HOÃN** tới khi hero live + kế-toán rà thuế."
by: "CEO (dinhdx2)"
rang_buoc_khong_ban_lai:
  - "Giá hero GĐ1 = 179k — không đổi giữa lô ads test (đổi giá làm nhiễu tín-hiệu CM/đơn)."
  - "Trần công-cụ 500k–1tr/tháng — chỉ trả phí khi hết free tier & có ROI rõ; KHÔNG mua Pro elements để bán."
  - "KHÔNG chi ads tới khi: landing+PayOS live & test đơn PASS + kế-toán xác-minh thuế. Bản-quyền kit đã PASS 5/5."
  - "PayOS: CEO tự KYC (định-danh) lấy 3 khoá — AI KHÔNG tự đăng-ký; chưa DONE 4.1b tới khi có key + test đơn PASS."
---

---
date: 2026-07-05
altitude: cau-truc
status: locked
supersedes: "Cổng thanh-toán = PayOS (quyết-định 2026-06-30 & lượt 2 2026-07-05)"
task: 2026-06-30-0450-pha1-sinh-viec-gd1
decision: "Đổi cổng thanh-toán **PayOS → SePay**. Lý-do: CEO đăng-ký PayOS trục-trặc; PayOS là SP của Casso (KYC nặng tương-tự). SePay cùng mô-hình **0% phí + webhook tự-giao**, KYC nhẹ (email + TK ngân-hàng, hỗ-trợ cá-nhân/hộ KD), free 35 tx/th (ưu-đãi 500 tx/th free 1 năm). Phí cổng unit-econ GIỮ 0% → CAC-trần/CM-đơn không đổi. SOP wiring: `10-thuc-thi-1-sepay-onboarding.md` (PayOS SOP superseded)."
by: "CEO (dinhdx2)"
rang_buoc_khong_ban_lai:
  - "Cổng tiền GĐ1 = SePay (0% phí, tiền vào thẳng TK ngân-hàng). PayOS gỡ khỏi đường tới-hạn."
  - "CEO tự đăng-ký SePay + kết-nối TK ngân-hàng — AI KHÔNG tự đăng-ký; 4.1b chưa DONE tới khi có API token + test đơn PASS."
  - "Đổi cổng KHÔNG né nghĩa-vụ thuế — tiền vào TK cá-nhân vẫn cần kế-toán rà (9.3b)."
  - "VietQR đối-soát bằng nội-dung (mã đơn) + số tiền → landing sinh mã đơn duy-nhất mỗi lượt mua."
---

(Các quyết-định tiếp theo ghi sau PAUSE 2/3 của `/vn-run`.)
