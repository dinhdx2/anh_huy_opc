<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Sổ đăng-ký tài-sản dữ-liệu & quản-trị (data catalog + governance)

> **Mục đích:** liệt-kê **các bảng/luồng dữ-liệu quan-trọng** cùng chủ-sở-hữu, độ nhạy-cảm, chất-lượng và quyền truy-cập — để dùng đúng, bảo-mật đúng và tuân-thủ. Bản sống.
> **Căn-cứ (MẪU):** NĐ 13/2023/NĐ-CP (bảo-vệ dữ-liệu cá-nhân) · Luật ANM 24/2018/QH14 · nguyên-tắc tối-thiểu-hoá & phân quyền theo vai.

- **Phạm-vi:** {{...}} · **Người quản-trị dữ-liệu:** {{tên/DPO}} · **Cập-nhật:** {{yyyy-mm-dd}}

## A. Danh-mục tài-sản dữ-liệu
| Tài-sản (bảng/luồng) | Mô-tả | Nguồn | Chủ-sở-hữu | Độ nhạy-cảm | Chứa PII? | Nơi lưu |
|---|---|---|---|---|---|---|
| {{users}} | {{...}} | {{app}} | {{...}} | {{cao}} | {{có}} | {{...}} |
| {{orders}} | {{...}} | {{...}} | {{...}} | {{trung}} | {{một-phần}} | {{...}} |
| {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} | {{...}} |

## B. Phân loại độ nhạy-cảm
| Mức | Ví-dụ | Quy-tắc |
|---|---|---|
| Công-khai | tài-liệu marketing | tự-do |
| Nội-bộ | chỉ-số vận-hành | chỉ nhân-viên |
| Bảo-mật | dữ-liệu cá-nhân KH | phân quyền, mã-hoá, log truy-cập |
| Nhạy-cảm | dữ-liệu nhạy-cảm theo luật | hạn-chế tối-đa, cơ-sở pháp-lý riêng |

## C. Quyền truy-cập & vòng đời
- ☐ Cấp quyền **theo vai & nhu-cầu tối-thiểu**; rà quyền định-kỳ, thu-hồi khi nghỉ việc.
- ☐ Mã-hoá khi lưu/truyền dữ-liệu bảo-mật; ẩn-danh/giả-danh khi phân-tích.
- ☐ **Thời-hạn lưu-trữ** & quy-trình **xoá theo yêu-cầu chủ-thể** (quyền của người dùng).
- ☐ Nhật-ký truy-cập dữ-liệu nhạy-cảm; cảnh-báo truy-cập bất-thường.

## D. Chất-lượng & tuân-thủ
| Tài-sản | Kiểm chất-lượng (đủ/đúng/tươi) | Tần-suất | Ai kiểm |
|---|---|---|---|
| {{...}} | {{completeness/accuracy/freshness}} | {{...}} | {{...}} |

- ☐ Có **bản-đồ dữ-liệu cá-nhân** (thu gì – vì-sao – ở đâu – ai truy-cập) phục-vụ tuân-thủ NĐ 13/2023.
- ☐ Quy-trình xử-lý & **thông-báo khi lộ/rò dữ-liệu** (liên-kết sổ-tay ứng-cứu sự-cố).

> MẪU — phối DPO/pháp-lý cho phần dữ-liệu cá-nhân & nhạy-cảm; đây là khung khởi-điểm, không thay tư-vấn pháp-lý.
