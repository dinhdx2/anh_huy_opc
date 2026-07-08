<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Phiếu mô-hình ML (model card) + đánh-giá trước triển-khai

> **Mục đích:** tài-liệu-hoá một mô-hình ML/AI: **mục-đích, dữ-liệu, hiệu-năng, giới-hạn, rủi-ro** — để triển-khai có trách-nhiệm và tái-lập được. Mỗi mô-hình (mỗi phiên-bản) 1 phiếu.
> **Căn-cứ (MẪU):** NĐ 13/2023/NĐ-CP (dữ-liệu cá-nhân trong huấn-luyện/suy-luận) · minh-bạch & không phân-biệt-đối-xử.

- **Mô-hình:** {{tên}} · **Phiên-bản:** {{v..}} · **Chủ-sở-hữu:** {{tên}} · **Ngày:** {{yyyy-mm-dd}}

## A. Mục-đích & phạm-vi
- **Bài-toán:** {{phân-loại / hồi-quy / gợi-ý / xếp-hạng / sinh...}}
- **Dùng để:** {{quyết-định gì, cho ai}} · **KHÔNG dùng cho:** {{...}}
- **Người/hệ chịu tác-động:** {{...}}

## B. Dữ-liệu
| Mục | Nội-dung |
|---|---|
| Nguồn dữ-liệu | {{...}} |
| Khoảng thời-gian | {{...}} |
| Có dữ-liệu cá-nhân? | {{có/không — cơ-sở pháp-lý & xử-lý}} |
| Tiền-xử-lý / gán nhãn | {{...}} |
| Rủi-ro thiên-lệch (bias) nguồn | {{...}} |

## C. Hiệu-năng & đánh-giá
| Chỉ-số | Tập test | Ngưỡng chấp-nhận | Kết-quả |
|---|---|---|---|
| {{accuracy/precision/recall/F1/AUC}} | {{...}} | {{...}} | {{...}} |
| {{chỉ-số kinh-doanh liên-quan}} | {{...}} | {{...}} | {{...}} |
| Công-bằng theo nhóm | {{giới/vùng...}} | chênh ≤{{...}} | {{...}} |
- **So baseline:** {{mô-hình cũ / quy-tắc thủ-công}} → {{tốt hơn ở đâu}}.

## D. Giới-hạn & rủi-ro
- **Thất-bại khi:** {{phân-phối lệch, dữ-liệu hiếm, đầu vào bất-thường}}.
- **Hệ-quả nếu sai:** {{...}} · **Mức rủi-ro:** {{cao/trung/thấp}}.
- **Cơ-chế người-giám-sát (human-in-the-loop):** {{...}} cho quyết-định rủi-ro cao.

## E. Triển-khai & giám-sát
- ☐ Theo-dõi **trôi dữ-liệu/hiệu-năng (drift)**; ngưỡng cảnh-báo {{...}}.
- ☐ Kế-hoạch huấn-luyện lại / rollback mô-hình.
- ☐ Log dự-đoán đủ để kiểm-toán (không lưu PII thô).
- ☐ Có đường phản-hồi khi người dùng khiếu-nại kết-quả.

**Kết luận:** ☐ Duyệt triển-khai · ☐ Chưa đạt — {{...}}
> MẪU — mô-hình chạm quyết-định ảnh-hưởng người dùng cần rà đạo-đức & pháp-lý; không "đưa lên vì đẹp số offline".
