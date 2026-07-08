<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Chuẩn review code & Định-nghĩa Hoàn-thành (code review standard · Definition of Done)

> **Mục đích:** thống-nhất **thế nào là một thay-đổi đủ tốt để merge** và **thế nào là một việc thực-sự xong** — giữ chất-lượng, giảm nợ kỹ-thuật, tránh "code chạy được là xong".
> **Căn-cứ (MẪU):** thực-hành review · NĐ 13/2023/NĐ-CP & Luật ANM 24/2018 cho phần chạm dữ-liệu/bảo-mật.

- **Đội:** {{...}} · **Áp-dụng từ:** {{yyyy-mm-dd}} · **Người ban-hành:** {{tên}}

## A. Nguyên-tắc review
- ☐ PR **nhỏ, một mục-đích**; mô-tả rõ *what/why* + cách test.
- ☐ Tối-thiểu {{1}} người duyệt; thay-đổi nhạy-cảm (bảo-mật/thanh-toán/dữ-liệu) cần {{2}}.
- ☐ Review **code, không review người**; góp-ý cụ-thể, đề-xuất cách sửa.
- ☐ Tác-giả phản-hồi mọi comment; bất-đồng lớn → thảo-luận trực-tiếp, ghi kết-luận.

## B. Checklist người review
| Nhóm | Điểm kiểm |
|---|---|
| Đúng | giải đúng yêu-cầu; xử-lý edge-case & lỗi |
| Test | có test cho logic mới; test có ý-nghĩa, không chỉ chạy cho xanh |
| Bảo-mật | không hard-code secret; validate input; kiểm quyền; không log dữ-liệu nhạy-cảm |
| Dữ-liệu | migration reversible; không phá tương-thích; tối-thiểu-hoá dữ-liệu cá-nhân |
| Hiệu-năng | không N+1 query, không vòng-lặp tốn-kém rõ-ràng |
| Bảo-trì | tên rõ, không trùng-lặp, theo quy-ước dự-án; xoá code chết |
| Tài-liệu | cập-nhật README/API/changelog khi cần |

## C. Definition of Done (DoD) — một việc xong khi:
- ☐ Đáp-ứng tiêu-chí chấp-nhận (acceptance criteria) của việc.
- ☐ Code đã review & merge; CI xanh.
- ☐ Test tự-động phủ phần mới; đã test thủ-công luồng chính.
- ☐ Đã deploy tới {{staging/prod}} và **quan-sát chạy thật** (không chỉ "code xong").
- ☐ Tài-liệu / changelog cập-nhật; feature flag & cấu-hình đúng.
- ☐ Không phát-sinh cảnh-báo/nợ nghiêm-trọng mới; nếu có → tạo ticket theo-dõi.

## D. Định-nghĩa Ready (trước khi bắt-đầu — chống việc mơ-hồ)
- ☐ Yêu-cầu rõ, có tiêu-chí chấp-nhận & phạm-vi; phụ-thuộc đã sẵn.

> MẪU — DoD phải **quan-sát được** (link/PR/deploy thật), không phải mô-tả suông; đội chỉnh theo bối-cảnh.
