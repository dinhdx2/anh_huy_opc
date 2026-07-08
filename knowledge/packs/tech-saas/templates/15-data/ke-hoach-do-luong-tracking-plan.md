<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Kế-hoạch đo-lường & tracking plan (event taxonomy)

> **Mục đích:** định-nghĩa **đo cái gì, ở đâu, thuộc-tính nào** một cách thống-nhất để dữ-liệu sản-phẩm sạch, tin-được và trả-lời được câu-hỏi kinh-doanh. Nguồn chân-lý cho analytics.
> **Căn-cứ (MẪU):** NĐ 13/2023/NĐ-CP — chỉ thu dữ-liệu **cần & có cơ-sở**, xin đồng-ý, không log PII nhạy-cảm thô.

- **Sản-phẩm:** {{...}} · **Chủ-sở-hữu:** {{tên}} · **Công-cụ:** {{GA4/Amplitude/Mixpanel/self-host}} · **Cập-nhật:** {{yyyy-mm-dd}}

## A. Câu-hỏi kinh-doanh → chỉ-số (bắt đầu từ câu hỏi, không từ event)
| Câu-hỏi | Chỉ-số (metric) | Chiều phân-tích |
|---|---|---|
| Người dùng có kích-hoạt không? | activation rate | kênh, gói |
| Giữ chân thế nào? | retention D1/D7/D30 | cohort |
| Phễu chuyển-đổi hụt ở đâu? | funnel conversion | bước |
| Doanh-thu từ đâu? | MRR, ARPU | gói, nguồn |

## B. Quy-ước đặt tên (naming convention)
- ☐ Định-dạng event: {{`object_action` — vd `checkout_completed`}} (nhất-quán thì/động-từ).
- ☐ Thuộc-tính (property) snake_case; đơn-vị & kiểu dữ-liệu ghi rõ.
- ☐ Tránh event trùng nghĩa; 1 hành-động 1 event.

## C. Danh-mục event (tracking plan)
| Event | Kích-hoạt khi | Thuộc-tính | Kiểu | PII? | Nơi gắn |
|---|---|---|---|---|---|
| {{signup_completed}} | {{...}} | {{method, plan}} | {{string}} | {{không}} | {{web/app}} |
| {{checkout_completed}} | {{...}} | {{amount, currency, plan}} | {{number}} | {{không}} | {{...}} |
| {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |

## D. Danh-tính & quyền-riêng-tư
- ☐ Quy-ước **user_id** (ổn-định, không dùng dữ-liệu nhạy-cảm làm khoá).
- ☐ **Không log** mật-khẩu, số thẻ, dữ-liệu nhạy-cảm; ẩn-danh/băm khi cần.
- ☐ Cơ-chế **đồng-ý cookie/tracking** & tôn-trọng từ-chối; xoá theo yêu-cầu.

## E. Quản-trị chất-lượng
- ☐ Có môi-trường test event trước khi lên prod; giám-sát event hỏng/thiếu.
- ☐ Chủ-sở-hữu duyệt khi thêm/sửa event (versioning tracking plan).
- ☐ Rà định-kỳ: event chết, dữ-liệu lệch, trùng.

> MẪU — tracking plan là hợp-đồng giữa product–eng–data; sửa phải qua duyệt, không gắn event tuỳ-tiện.
