<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Tài-liệu hệ-thống thiết-kế tối-thiểu (design system starter)

> **Mục đích:** thiết-lập **nguồn chân-lý dùng chung** cho giao-diện (token + thành-phần + quy-tắc) để thiết-kế & code nhất-quán, nhanh, dễ bảo-trì. Bản sống, cập-nhật liên-tục.
> **Căn-cứ (MẪU):** nguyên-tắc atomic/token-based · chuẩn tiếp-cận (a11y) tối-thiểu.

- **Sản-phẩm:** {{...}} · **Chủ-sở-hữu:** {{tên/đội}} · **Phiên-bản:** {{v..}} · **Cập-nhật:** {{yyyy-mm-dd}}

## A. Nền-tảng (foundations / design tokens)
| Token | Giá-trị | Ghi-chú |
|---|---|---|
| Màu chính (primary) | {{#...}} | dùng cho hành-động chính |
| Màu phụ / trạng-thái | {{success/warning/danger/info}} | {{...}} |
| Màu nền / chữ | {{...}} | đạt tương-phản a11y |
| Typography | {{font, cỡ H1–body, line-height}} | thang bậc rõ |
| Spacing scale | {{4/8/12/16/24/32...}} | dùng bội-số nhất-quán |
| Bo góc / đổ bóng | {{...}} | {{...}} |
| Breakpoint | {{mobile/tablet/desktop}} | responsive |

## B. Thành-phần (components) — mỗi cái nêu: dùng khi nào · trạng-thái · biến-thể
| Thành-phần | Biến-thể | Trạng-thái | Ghi-chú a11y |
|---|---|---|---|
| Button | primary/secondary/ghost | default/hover/focus/disabled/loading | vùng chạm, focus ring |
| Input/Form | text/select/checkbox... | + error/helper | nhãn + thông-báo lỗi |
| Modal/Toast | {{...}} | {{...}} | bẫy focus, đóng bằng ESC |
| Card/Table/Nav | {{...}} | {{...}} | {{...}} |

## C. Mẫu (patterns) & quy-tắc nội-dung
- ☐ Mẫu lặp: form, trạng-thái rỗng, phân-trang, tìm-kiếm, xác-nhận xoá.
- ☐ **Giọng & microcopy:** ngắn, rõ, nhất-quán thuật-ngữ; nút = động-từ.
- ☐ Quy-tắc thông-báo lỗi: nói *chuyện gì + cách khắc-phục*.

## D. Quản-trị (governance)
- ☐ Nguồn chân-lý: {{Figma library + repo token/component}} — đồng-bộ 2 nơi.
- ☐ Quy-trình **đề-xuất thành-phần mới** / thay-đổi (ai duyệt, versioning).
- ☐ Chống trôi (drift): dev dùng token/component chung, không tự chế lẻ.
- ☐ Changelog & thông-báo khi có breaking change.

> MẪU — bắt-đầu nhỏ (token + vài component lõi), mở-rộng theo nhu-cầu thật; đừng "vẽ" toàn-bộ trước khi dùng.
