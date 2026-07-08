<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Sơ-đồ bố-trí kho & quy-tắc lưu-trữ (layout · bin location · slotting)

> **Mục đích:** thiết-kế mặt-bằng kho và **quy-tắc đặt hàng theo vị-trí (slotting)** để đường đi picking ngắn nhất, hàng chạy gần cửa xuất, an-toàn & dễ kiểm-kê.
> **Căn-cứ (MẪU):** nguyên-tắc slotting theo tốc-độ luân-chuyển · PCCC (lối thoát, khoảng-cách) · FEFO/FIFO.

- **Kho:** {{...}} · **Diện-tích:** {{...}m²}} · **Người thiết-kế:** {{tên}} · **Ngày:** {{yyyy-mm-dd}}

## A. Phân khu chức-năng
| Khu | Chức-năng | Ghi-chú |
|---|---|---|
| Nhận hàng (inbound) | tiếp-nhận, kiểm | gần cửa nhập |
| Lưu-trữ (storage) | kệ/pallet theo nhóm | chia lối rõ |
| Soạn hàng (picking) | hàng chạy nhanh | gần khu đóng-gói |
| Đóng-gói (packing) | QC + đóng | gần cửa xuất |
| Xuất/chờ giao (outbound) | staging | sát bãi xe |
| Hàng lỗi/trả (returns) | cách-ly | không lẫn hàng bán |

## B. Quy-tắc đặt vị-trí (slotting)
- ☐ **Mã vị-trí (bin)** chuẩn: {{Dãy–Kệ–Tầng–Ô, ví-dụ A-03-2-05}}.
- ☐ Hàng **nhóm A (chạy nhanh)** đặt gần khu đóng-gói, tầm với dễ.
- ☐ Hàng nặng/cồng-kềnh tầng thấp; dễ-vỡ khu riêng; hàng theo hạn dùng bố-trí FEFO.
- ☐ Nhóm hàng hay mua kèm đặt gần nhau (giảm quãng đi).
- ☐ Chừa vị-trí trống dự-phòng cho mùa cao-điểm.

## C. Sơ-đồ (mô-tả / chèn ảnh)
```
[ Cửa nhập ] → [ Kiểm ] → [ Kệ A | B | C ... ] → [ Picking ] → [ Packing ] → [ Cửa xuất ]
                                   |
                              [ Returns – cách ly ]
```
*(Thay bằng sơ-đồ thực-tế; ghi kích-thước lối đi ≥{{...}}m cho xe nâng/xe đẩy.)*

## D. An-toàn & bảo-trì
- ☐ Lối thoát-hiểm & bình chữa-cháy không bị chắn; biển chỉ-dẫn rõ.
- ☐ Tải-trọng kệ ghi rõ, không chất quá; kiểm kệ định-kỳ.
- ☐ Chiếu-sáng & thông-gió đạt; khu hàng đặc-thù (lạnh/hoá-chất) đúng điều-kiện.
- ☐ Sơ-đồ được cập-nhật khi đổi layout & phổ-biến cho nhân-sự.

**Kết luận:** ☐ Layout chốt · ☐ Cần tối-ưu thêm — {{...}}
> MẪU — cân-đối chi-phí cải-tạo vs lợi-ích; tuân-thủ quy-định PCCC hiện-hành.
