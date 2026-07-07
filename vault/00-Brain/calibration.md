# Hiệu chỉnh độ tin cậy phòng ban (calibration.md)

> **Nền của vòng lặp học (append-only).** Khi một quyết định đã chạy và CÓ KẾT QUẢ THỰC, ghi 1 mục đối chiếu
> "phòng nào khuyến nghị gì → thực tế ra sao". Qua thời gian, dữ liệu này cho biết phòng nào đáng tin ở loại brief nào
> (nền tảng để sau này gắn trọng số ý kiến / hiệu chỉnh persona).
> Đây là bước thủ công có cấu trúc (CEO + orchestrator điền), CHƯA tự động hoá.

## Schema mỗi mục
```
### <YYYY-MM-DD> — <task slug>
- khuyến nghị (phòng → nội dung): <vd 07-marketing → "TikTok trước">
- CEO đã chọn: <phương án thực thi>
- kết quả thực (sau N ngày): <số đo: ROAS/đơn/chi phí... [số thật DN]>
- phán định: đúng | sai | một phần | chưa đủ dữ liệu
- bài học cho lần sau: <điều chỉnh persona/router/Brain nếu cần>
```

## Cách dùng trong vòng lặp
1. Sau khi task chạy thực tế (ví dụ 30 ngày), CEO cung cấp số thật → orchestrator ghi mục đối chiếu.
2. Khi một phòng nhiều lần "sai" ở 1 loại brief → cập nhật persona (`knowledge/departments/...`) hoặc đánh dấu để red-team soi kỹ hơn.
3. Khi một phòng nhiều lần "đúng" → có thể tăng trọng số ý kiến phòng đó trong synthesizer (cải tiến tương lai).

## Đối chiếu (append bên dưới)

> _Chưa có mục nào — sẽ điền sau khi task đầu tiên (POD launch) có số thực 30 ngày._
