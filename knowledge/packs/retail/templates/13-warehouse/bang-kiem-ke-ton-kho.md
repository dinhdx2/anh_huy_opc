<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Bảng kiểm-kê & đối-soát tồn kho (cycle count / stocktake)

> **Mục đích:** đối-chiếu **tồn sổ-sách vs tồn thực-tế**, tìm chênh-lệch, truy nguyên và điều-chỉnh — giữ số tồn đáng tin để mua-hàng & bán-hàng không sai.
> **Căn-cứ (MẪU):** kiểm-kê định-kỳ (cuối kỳ kế-toán) + đếm xoay-vòng (cycle count) theo nhóm ABC.

- **Kho:** {{...}} · **Kỳ kiểm:** {{...}} · **Loại:** {{toàn-bộ / cycle count nhóm A}} · **Người kiểm:** {{tên}} · **Ngày:** {{yyyy-mm-dd}}

## A. Bảng đối-soát
| SKU | Tên hàng | Vị-trí (bin) | Tồn sổ | Tồn thực | Chênh (±) | Giá-trị chênh | Nguyên-nhân |
|---|---|---|---|---|---|---|---|
| {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |
| {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |
| **Tổng** | | | {{...}} | {{...}} | {{...}} | **{{...}}** | |

## B. Phân-loại ABC (ưu-tiên tần-suất đếm)
| Nhóm | Tiêu-chí | Tần-suất đếm |
|---|---|---|
| A | {{~80% giá-trị}} | {{hàng tháng}} |
| B | {{~15%}} | {{hàng quý}} |
| C | {{~5%}} | {{6 tháng}} |

## C. Truy nguyên chênh-lệch (nếu vượt ngưỡng)
- Ngưỡng cho-phép: ≤{{1%}} giá-trị hoặc ≤{{...}} đơn-vị/SKU.
- ☐ Rà giao-dịch: nhập/xuất chưa ghi, nhầm SKU, hư-hỏng chưa loại, trộm-cắp.
- ☐ Đếm lại vùng lệch (đếm mù lần 2).
- ☐ Lập **biên-bản chênh-lệch** + đề-xuất điều-chỉnh trình duyệt.

## D. Điều-chỉnh & phòng-ngừa
- ☐ Điều-chỉnh tồn hệ-thống **sau khi được duyệt** (có chứng-từ, không tự sửa).
- ☐ Cập-nhật hao-hụt vào giá-vốn (phối kế-toán).
- ☐ Hành-động phòng-ngừa: {{siết quy-trình quét mã / camera / phân quyền sửa tồn}}.

**Kết luận:** ☐ Tồn khớp trong ngưỡng · ☐ Có chênh cần xử-lý — giá-trị {{...}}
> MẪU — điều-chỉnh tồn phải có duyệt & chứng-từ; phối kế-toán cho ảnh-hưởng giá-vốn/BCTC.
