<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Sổ-tay ứng-cứu sự-cố (incident runbook · on-call)

> **Mục đích:** phản-ứng nhanh & nhất-quán khi hệ-thống production gặp sự-cố — phân mức, phân vai, khôi-phục, rồi rút bài-học. Giảm MTTR & tránh mất dữ-liệu.
> **Căn-cứ (MẪU):** Luật ANM 24/2018/QH14 · NĐ 13/2023/NĐ-CP (thông-báo khi lộ dữ-liệu cá-nhân — nghĩa-vụ báo cơ-quan trong thời-hạn quy-định).

- **Dịch-vụ:** {{...}} · **On-call kỳ này:** {{tên/SĐT}} · **Kênh sự-cố:** {{#incidents ...}} · **Cập-nhật:** {{yyyy-mm-dd}}

## A. Phân mức sự-cố (severity)
| Mức | Định-nghĩa | Ví-dụ | Thời-gian phản-hồi |
|---|---|---|---|
| SEV-1 | Ngừng toàn-bộ / mất dữ-liệu / lộ dữ-liệu | site down, DB hỏng, rò-rỉ | ngay ({{<15}} phút) |
| SEV-2 | Suy-giảm nặng 1 chức-năng chính | thanh-toán lỗi | {{<30}} phút |
| SEV-3 | Ảnh-hưởng nhẹ, có workaround | 1 tính-năng phụ lỗi | trong ngày |

## B. Quy-trình ứng-cứu
1. **Phát-hiện** (alert/khách báo) → xác-nhận & phân mức.
2. **Điều-phối:** chỉ-định **Incident Commander** (IC); mở kênh, ghi timeline.
3. **Giảm thiệt-hại:** ưu-tiên khôi-phục dịch-vụ (rollback/failover/scale) trước khi truy nguyên gốc.
4. **Truyền-thông:** cập-nhật trạng-thái nội-bộ & KH ({{status page}}) theo nhịp.
5. **Khôi-phục & xác-nhận** ổn-định.
6. **Đóng sự-cố**, lên lịch hậu-kiểm (post-mortem).

## C. Vai-trò
| Vai | Trách-nhiệm |
|---|---|
| Incident Commander | điều-phối, quyết-định, giữ timeline |
| Kỹ-thuật xử-lý | thao-tác khắc-phục |
| Truyền-thông | cập-nhật KH & nội-bộ |
| Ghi-chép | log mốc thời-gian & hành-động |

## D. Liên-hệ & phụ-thuộc (escalation)
| Hệ-thống/NCC | Liên-hệ | Khi nào gọi |
|---|---|---|
| Cloud/hosting | {{...}} | hạ-tầng down |
| Cổng thanh-toán | {{...}} | lỗi giao-dịch |
| DPO/pháp-lý | {{...}} | nghi lộ dữ-liệu cá-nhân |

## E. Hậu-kiểm (post-mortem — không đổ lỗi)
- Dòng thời-gian · Nguyên-nhân gốc · Vì-sao phát-hiện chậm · **Hành-động phòng-ngừa** (có người & hạn).
- ☐ Nếu **lộ dữ-liệu cá-nhân**: đánh-giá nghĩa-vụ thông-báo theo NĐ 13/2023/NĐ-CP.

> MẪU — gắn với alerting & SLA thực-tế; diễn-tập sự-cố định-kỳ để runbook không "chết trên giấy".
