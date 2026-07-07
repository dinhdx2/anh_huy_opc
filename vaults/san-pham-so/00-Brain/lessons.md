# Bài học (lessons.md)

> Append-only, 1 dòng/vòng học (luồng generic v3). Ghi sau mỗi task chạy xong để vòng-lặp học. Khởi tạo 2026-06-29.

<!-- Định dạng: YYYY-MM-DD · [altitude] · bài-học 1 dòng · nguồn task -->
2026-07-06 · [cau-truc] · **VietinBank + SePay: nội-dung chuyển-khoản BẮT BUỘC bắt đầu bằng `SEVQR`** thì SePay mới nhận biến-động số-dư (API Banking). QR checkout phải để des = `SEVQR <mã đơn>`; thiếu SEVQR → giao-dịch "tàng-hình" với SePay. · task pha1-sinh-viec-gd1 (wiring cổng tiền)
2026-07-06 · [cau-truc] · **Cổng tiền cho SP số B2C VN (solo): SePay 0% + VietQR + đối-soát qua `userapi/transactions/list`** là combo rẻ+nhanh nhất; KYC nhẹ hơn PayOS (đã trục-trặc). Đối-soát nên khớp bằng **nội-dung chứa mã đơn** (không lọc `amount_in` trong query — dễ lệch biểu-diễn). · task pha1-sinh-viec-gd1
2026-07-06 · [cau-truc] · **Vercel: env var chỉ áp cho bản deploy TẠO SAU khi thêm env; drag-drop tạo Preview → phải "Promote to Production"** thì domain chính mới đổi. Bẫy hay vấp khi debug "code không cập-nhật". · task pha1-sinh-viec-gd1
2026-07-06 · [dinh-vi] · **Secret KHÔNG bao giờ để trong repo** — đã lộ 1 lần (commit rồi push) → phải rotate + chuyển Vercel env. Quy-tắc: secret chỉ sống ở env, file chỉ tham-chiếu `process.env.*`. · task pha1-sinh-viec-gd1
