---
altitude: cau-truc
proposed_by: AI
---

# structure.md — Cây cấu-trúc (khối ▷ phòng ▷ bộ-phận)

> **Lớp đổi nhanh nhất.** Cây này là **KẾT-QUẢ gom-ngược-lên** ở CUỐI PHA 1 (việc → bộ-phận → phòng → khối),
> KHÔNG nhập tay từ đầu (INV-5 spec 01). Mỗi nút mang **tên-kép** + `activation` (GĐ thức) + `reused_from` (con-trỏ KHO).
> Schema: spec 02 §3.3 · taxonomy canonical: `knowledge/taxonomy/blocks.yaml`. Validator `reused_from`: `lib/brain.js`.

## tree
# GĐ1 (pre-launch) chỉ thức tối-thiểu các bộ-phận lõi để ra-mắt + đơn đầu. Đẻ bộ-phận khi việc lặp đủ nhiều.
- block: K3                       # Thị-trường & Khách-hàng
  dept: dept-07                   # Marketing
  unit: "Test angle & chạy ads FB/IG"
  capability: "thi-truong-test-angle"
  activation: [GĐ1, GĐ2]
  reused_from: ""                 # NEW — chưa có KHO ngành POD
- block: K2                       # Tài-chính
  dept: dept-03
  unit: "Cổng thanh-toán & dòng tiền"
  capability: "thu-tien-quoc-te"
  activation: [GĐ1, GĐ2, GĐ3]
  reused_from: ""
- block: K5                       # Vận-hành & Chuỗi-cung
  dept: dept-05
  unit: "Fulfillment POD (Printify) + xử-lý đơn"
  capability: "van-hanh-don-hang"
  activation: [GĐ1, GĐ2, GĐ3]
  reused_from: ""
- block: K1                       # Quản-trị & Pháp-lý
  dept: dept-01
  unit: "Cổng kiểm IP + 4 trang policy FTC"
  capability: "tuan-thu-ip-tos"
  activation: [GĐ1, GĐ2]
  reused_from: ""

> Phòng còn lại NGỦ ở GĐ1 (kích-hoạt-theo-GĐ, KHÔNG đẻ thêm phòng). Khi PROMOTE tài-sản đạt chuẩn →
> tạo nhánh `knowledge/playbook/pod/...` và điền `reused_from` cho lần sau.
