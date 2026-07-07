# 10 — THỰC THI Việc 1: Mở PayPal Business (POD retail + ĐKKD)

> TL;DR: Đây là việc **CEO phải tự làm** vì PayPal bắt định danh chủ tài khoản (KYC — Know Your Customer: xác minh danh tính). AI đã chuẩn bị **toàn bộ**: khai gì, điền gì, tránh lỗi gì để giảm rủi ro bị *hold/limit*. CEO làm theo checklist; xong thì báo lại để máy chạy tiếp các bước phụ thuộc.
>
> ⚙️ Bước: **W1-01** · owner: **Human** · cổng: **NEED-INFO** (giấy tờ KYC) · trạng thái: **HUMAN (đã giao CEO)**.
> Vì sao AI không làm thay: cần giấy tờ định danh cá nhân/DN + có thể có OTP/xác minh khuôn mặt — không thể uỷ quyền cho AI. AI đã làm sẵn mọi thứ quanh nó.

---

## 0. Chuẩn bị trước (gom 1 lần — 10 phút)
- [ ] **Giấy ĐKKD** (đăng ký kinh doanh) — bản scan rõ, đúng tên & địa chỉ.
- [ ] **CMND/CCCD** chủ DN (mặt trước + sau), còn hạn.
- [ ] **Email** riêng cho DN (khuyến nghị tạo email theo tên store, không dùng email cá nhân lẫn lộn).
- [ ] **Số điện thoại** nhận OTP.
- [ ] **Tài khoản ngân hàng / thẻ** để liên kết nhận tiền (có thể thêm sau).
- [ ] **Thông tin DN**: tên pháp lý, địa chỉ, mã số thuế, mô tả ngành nghề.

## 1. Khai ĐÚNG mô hình — điểm sống còn để giảm hold
PayPal hay **giữ tiền (hold)** tài khoản mới ngành e-commerm xuyên biên. Giảm rủi ro bằng cách khai nhất quán, đúng sự thật:
- [ ] Chọn loại **Business** (KHÔNG chọn Personal).
- [ ] **Business type:** doanh nghiệp đã ĐKKD (khớp giấy tờ) — KHÔNG khai cá nhân/individual nếu đã có pháp nhân.
- [ ] **Ngành nghề / category:** chọn nhóm **Retail / E-commerce — Print-on-Demand / apparel & accessories**. Mô tả rõ: "bán merch in theo yêu cầu (POD), giao qua đối tác in tại Mỹ, không giữ tồn kho".
- [ ] **Website:** điền đúng domain store (làm sau khi W1-04 có domain — có thể quay lại bổ sung).
- [ ] **Doanh số dự kiến:** khai con số **thực tế, khiêm tốn** giai đoạn đầu (vài nghìn USD/tháng) — khai vống dễ bị soi.

## 2. Hoàn tất xác minh (KYC)
- [ ] Xác minh **email** + **số điện thoại** (OTP).
- [ ] Upload **giấy tờ định danh** + **ĐKKD** khi PayPal yêu cầu.
- [ ] **Liên kết & xác minh ngân hàng** (PayPal có thể gửi 2 khoản nhỏ để xác nhận — chờ 1–3 ngày).
- [ ] Hoàn tất mọi mục PayPal đánh dấu "đang chờ/cần bổ sung" trong **Resolution/Account setup**.

## 3. Giảm rủi ro hold ngay từ đầu (làm luôn)
- [ ] Vào **Settings → cập nhật mô tả doanh nghiệp** đúng POD retail.
- [ ] Bật thông báo để phản hồi nhanh khi PayPal hỏi thêm.
- [ ] Ghi nhớ chính sách vận hành: **upload tracking ≤1h** sau mỗi đơn (giải phóng tiền sớm) — đã đưa vào SOP xử lý đơn (W2-16).
- [ ] Chuẩn bị sẵn **2Checkout/Verifone** làm cổng backup (W1-02) phòng PayPal hold kéo dài.

## 4. "XONG" = tiêu chí nghiệm thu (KPI)
- ✅ Tài khoản **Business** ở trạng thái **verified / active** (không còn mục pending bắt buộc).
- ✅ Khai đúng **POD retail + pháp nhân ĐKKD** (không phải Personal/Individual).
- ✅ Liên kết ngân hàng nhận tiền thành công.
- ➡️ Sẵn sàng cho **W1-03** (test giao dịch $1 thật).

## 5. Báo lại cho hệ thống (để máy chạy tiếp)
Khi xong, CEO chỉ cần nhắn 1 trong các mốc — máy sẽ cập nhật sổ `10-run-state.md` và tự chạy tiếp:
- "PayPal đã verified" → mở khoá **W1-03** (test $1) và bổ sung cổng PayPal vào **W1-04** (store).
- "Bị hold/limit" → máy kích hoạt nhánh dự phòng: ưu tiên **2Checkout** làm cổng chính + soạn hồ sơ kháng nghị hold.

> ⚠️ Lưu ý pháp lý/thuế: nghĩa vụ thuế khi nhận USD về VN (W1-11) là **MẪU phương án** — cần kế toán/chuyên gia rà trước khi áp dụng.
