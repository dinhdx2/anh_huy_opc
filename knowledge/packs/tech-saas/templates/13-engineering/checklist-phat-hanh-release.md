<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Checklist phát-hành (release / deploy) & kế-hoạch rollback

> **Mục đích:** cổng kiểm trước–trong–sau khi **đưa bản mới lên production** để giảm sự-cố, có đường lui rõ-ràng. Mỗi lần phát-hành 1 bản.
> **Căn-cứ (MẪU):** thực-hành CI/CD · NĐ 13/2023/NĐ-CP (nếu thay-đổi chạm dữ-liệu cá-nhân) · Luật ANM 24/2018.

- **Phiên-bản:** {{vX.Y.Z}} · **Ngày:** {{yyyy-mm-dd}} · **Người phụ-trách (release owner):** {{tên}} · **Loại:** {{tính-năng / vá-lỗi / hotfix}}

## A. Trước phát-hành (pre-deploy)
- ☐ Toàn-bộ thay-đổi đã **review & merge** (xem chuẩn review code); CI xanh.
- ☐ Test tự-động (unit/integration/e2e) đạt; coverage vùng ảnh-hưởng đủ.
- ☐ **Migration DB** (nếu có) reversible & test trên staging.
- ☐ Biến môi-trường / secrets / feature flag đã cấu-hình đúng môi-trường đích.
- ☐ Đánh-giá tác-động: hiệu-năng, tương-thích API, dữ-liệu cá-nhân (DPIA nếu cần).
- ☐ Thông-báo bên liên-quan (support/sales) & lịch bảo-trì nếu gián-đoạn.

## B. Khi phát-hành (deploy)
- ☐ Backup / snapshot trước khi chạy migration.
- ☐ Chiến-lược triển-khai: {{blue-green / canary / rolling}} — % traffic tăng dần.
- ☐ Theo-dõi **health check, log lỗi, latency, tỷ-lệ 5xx** ngay sau deploy.
- ☐ Chạy **smoke test** các luồng quan-trọng (đăng-nhập, thanh-toán, luồng chính).

## C. Kế-hoạch rollback
| Điều-kiện kích rollback | Ngưỡng | Hành-động |
|---|---|---|
| Tỷ-lệ lỗi tăng | >{{...}}% trong {{...}} phút | rollback về {{v cũ}} |
| Latency tăng | > {{...}} | rollback / tắt feature flag |
| Sự-cố dữ-liệu | bất-kỳ | dừng, khôi-phục backup, báo cáo |

- **Cách rollback:** {{revert deploy / down migration / toggle flag}} — thời-gian mục-tiêu (MTTR) ≤{{...}} phút.

## D. Sau phát-hành (post-deploy)
- ☐ Theo-dõi {{...}} giờ; xác-nhận chỉ-số ổn-định.
- ☐ Cập-nhật **changelog / release notes**.
- ☐ Đóng ticket, ghi bài-học nếu có sự-cố (liên-kết sổ-tay ứng-cứu).

**Kết luận:** ☐ Phát-hành thành-công · ☐ Đã rollback — lý-do: {{...}}
> MẪU — điều-chỉnh theo hạ-tầng (cloud/self-host) & mức-độ rủi-ro từng bản.
