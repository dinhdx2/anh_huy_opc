# Phễu thu Email + Zalo OA — Lead-magnet & chuỗi nuôi (A8)

> TL;DR: Free lead-magnet **"Sheet tính lãi thật — bản 1 sàn"** đổi lấy email + Zalo (form đã có sẵn trên `landing/landing.html#dang-ky`), sau đó nuôi **4 chạm trong ~7 ngày** để upsell bản đa-sàn 149–179k; kèm 1 vòng-lặp Zalo zero-CAC (tặng free → khách tự lan) để giảm phụ-thuộc ads trả-phí, đúng moat "tài-sản sở-hữu" đã chốt ở `positioning.md`.

Tài liệu này tương-ứng mục **A8** trong `02-Tasks/2026-07-07-1023-phan-tich-ngach-doi-thu/08-execution-plan.md`. Đây là **spec/thiết-kế phễu** (MẪU chiến-thuật) — chưa phải hàng-động thật (chưa dựng lead-magnet, chưa cấu-hình email/Zalo tool) nên **không tính là NEED-APPROVAL**; nhưng bước **gửi email/Zalo thật cho khách** (khi có khách) là hành-động thuộc ranh-giới cứng "gửi email/tin" → luôn cần CEO duyệt nội-dung + xác-nhận công-cụ trước khi bấm gửi.

---

## 1. Lead-magnet miễn-phí (free) — đề xuất

- **Tên:** "Sheet Tính LÃI THẬT — bản 1 SÀN (miễn-phí)"
- **Nội dung:** rút gọn từ hero — chỉ 1 sàn (TikTok Shop **hoặc** Shopee, khách chọn lúc điền form; mặc-định gợi-ý TikTok Shop vì tăng-trưởng nhanh hơn theo xu-hướng gần đây `[benchmark ngành — cần CEO xác minh nguồn/kỳ, xem strategy.md]`). Giữ **2 tab lõi**: *Nhập đơn* + *Lãi thật/đơn*. **Bỏ** *Cấu-hình đa-sàn / Đối-soát / Dashboard* — đây chính là lý-do để khách nâng-cấp lên bản đầy-đủ.
- **Value prop 1 câu:** "Biết lãi thật ngay hôm nay — miễn-phí, 1 sàn — nâng-cấp khi cần đối-soát đa-sàn + dashboard."
- **Giao hàng:** gửi qua email tự-động link Google Sheet dạng "**make a copy**" cá-nhân-hoá cho từng khách (không gửi bản gốc — chống copy lậu, đồng-bộ với A6 "cơ-chế giao-hàng kiểm-soát" trong execution-plan). Trong email kèm link Zalo OA để nhận hỗ-trợ + xem ưu-đãi bản đầy-đủ.
- **Trạng-thái:** ĐÂY LÀ ĐỀ-XUẤT SPEC — file Sheet rút-gọn thật **CHƯA được dựng** (việc dựng file thuộc phạm-vi A1, cần làm sau khi hero Sheet đầy-đủ xong, bằng cách bớt tab).

## 2. Form thu thập (đã dựng sẵn trên landing)

Form đã có tại `landing/landing.html` section `#dang-ky`, gồm:

| Trường | Bắt buộc | Ghi chú |
|---|---|---|
| Họ tên | Không | Cá-nhân-hoá email sau này |
| Email | Có | Kênh nuôi chính |
| Số điện-thoại Zalo | Có | Dùng để kết-bạn/mời vào Zalo OA |
| Checkbox đồng-ý | Có, **không pre-check** | "Tôi đồng-ý để BỘMẪU dùng email/SĐT liên-hệ về template & ưu-đãi liên-quan. Xem Chính-sách bảo-mật. Tôi có thể rút đồng-ý bất-cứ lúc nào." |

- **Căn-cứ pháp-lý (MẪU — cần luật-sư rà):** **Nghị định 13/2023/NĐ-CP về bảo-vệ dữ-liệu cá-nhân** — yêu-cầu sự đồng-ý phải "rõ-ràng, tự-nguyện, xác-nhận được"; im-lặng/không phản-hồi KHÔNG được coi là đồng-ý; phải thông-báo mục-đích/phạm-vi xử-lý TRƯỚC khi thu-thập; chủ-thể dữ-liệu có quyền rút đồng-ý bất-cứ lúc nào. *(Nguồn: Nghị định 13/2023/NĐ-CP, Chính phủ — xem `vanban.chinhphu.vn` / `thuvienphapluat.vn`.)*
- ⚠️ **Form hiện tại CHỈ LÀ TĨNH** (`action="#"`), **chưa nối backend** — nếu launch ngay sẽ MẤT toàn-bộ lead. Cần chọn 1 trong các công-cụ trước khi chạy traffic thật:
  - Google Form/Sheet + Zapier/Make (rẻ, dễ set-up, phù-hợp GĐ1 solo).
  - ConvertKit / GetResponse / MailerLite (có sẵn chuỗi email tự-động — khuyến-nghị nếu cần chạy chuỗi nuôi ở mục 3 tự-động).
  - Form/webhook riêng của nền-tảng Zalo OA (nếu dùng Zalo Official Account có tính-năng form).
  → `[cần CEO/dept-09-product-tech chọn công-cụ cụ-thể]`.

## 3. Chuỗi nuôi 4 chạm (đề xuất — khung ~7 ngày)

| Chạm | Thời điểm | Kênh | Nội dung | CTA |
|---|---|---|---|---|
| **#0 Giao hàng** | Ngay sau đăng-ký | Email + Zalo | Link Sheet free (bản 1 sàn) + hướng-dẫn ngắn "cách nhập đơn đầu-tiên trong 5 phút" | "Nhập thử đơn đầu-tiên ngay hôm nay" |
| **#1** | Ngày 1 | Email | Nội-dung giáo-dục (KHÔNG bán): "3 khoản phí nhà-bán hay quên trừ khi tính lãi" — ví-dụ cụ-thể phí COD hoàn / phí ads phân-bổ theo đơn | Đọc + trả-lời 1 câu "Bạn đang bán mấy sàn?" (thu tín-hiệu để cá-nhân-hoá upsell) |
| **#2** | Ngày 3 | Zalo OA (1-1 hoặc broadcast nhỏ) | Hỏi-thăm trải-nghiệm bản free + 1 ví-dụ minh-hoạ (ẩn-danh, đánh dấu rõ "ví-dụ minh-hoạ — không phải cam-kết kết-quả") kiểu "tưởng lãi dương, hoá ra âm sau khi trừ đủ phí ads + COD" | Trả-lời khảo-sát nhanh / đặt câu hỏi cho BỘMẪU |
| **#3** | Ngày 5 | Email | Giới-thiệu bản ĐẦY-ĐỦ đa-sàn (thêm Cấu-hình phí đa-sàn + Đối-soát + Dashboard) + order-bump TT40/tồn-kho — nêu rõ khác-biệt cụ-thể so bản free (không thổi-phồng) | Nút "Nâng-cấp bản đầy-đủ" — mã ưu-đãi cho người dùng free nếu CEO duyệt mức giảm |
| **#4 (cuối)** | Ngày 7 | Email + Zalo | Nhắc ưu-đãi sắp hết-hạn (nếu có) + FAQ ngắn + review/minh-chứng thật (CHỈ dùng khi đã có khách thật đồng-ý, tuyệt-đối không bịa) | CTA mua cuối, link `landing.html#gia` |

**Nguyên tắc nội-dung bắt buộc** (đúng ràng-buộc `strategy.md` mục 4 + Luật Quảng cáo):
- Giáo-dục trước, bán sau — chạm #1, #2 KHÔNG chào giá.
- **Tuyệt-đối KHÔNG** dùng ngôn-ngữ "chắc-chắn lãi to / tăng gấp đôi doanh-thu / đảm-bảo ra đơn" — vi-phạm **Điều 8 khoản 9 Luật Quảng cáo 2012** (quảng-cáo gây nhầm-lẫn về công-dụng/khả-năng của sản-phẩm — mức phạt hành-chính tham-khảo 60–80 triệu đồng theo các nguồn tổng-hợp pháp-lý `[cần luật-sư xác minh mức phạt hiện-hành]`).
- Case-study/số-liệu minh-hoạ trong chạm #2 phải ghi rõ "**ví-dụ minh-hoạ**", KHÔNG dùng số liệu như bằng-chứng thống-kê cho tới khi có khách hàng thật đồng-ý chia-sẻ.

## 4. Vòng-lặp Zalo zero-CAC (viral loop)

- Sau khi khách dùng bản free hoặc mua hero, khuyến-khích **share Zalo cho 1 người-bán khác** để đổi lấy 1 lợi-ích nhỏ (vd: mở thêm 1 tab mẫu, hoặc mã giảm cho order-bump) — cơ-chế referral đơn-giản qua **link "make a copy" cá-nhân-hoá** (gắn tham-số/mã theo khách để đếm được referral).
- Zalo OA đóng vai "cộng-đồng nhẹ": broadcast tips định-kỳ (khoảng 1–2 lần/tuần, KHÔNG spam) để giữ top-of-mind — biến người nhận bản free thành kênh lan-toả **không tốn ads**, đúng "moat #3" đã chốt ở `positioning.md` ("tài-sản sở-hữu = email list + Zalo OA + cộng-đồng — hạ CAC theo thời-gian, kênh phát template free tạo viral loop zero-CAC").
- **Đo lường (khi có dữ-liệu thật):** tỉ-lệ share/referral trên tổng lead, số lead mới từ referral / tổng lead mới, tỉ-lệ free → trả-phí. Hiện `[cần CEO xác minh khi có dữ-liệu thật — chưa chạy phễu]`; đưa vào báo-cáo phòng 11-reporting khi có số.

## 5. Compliance nhanh (checklist trước khi bật phễu thật)

- [ ] Form có checkbox consent rõ-ràng, không pre-check, có link chính-sách bảo-mật SỐNG (không 404) — theo NĐ 13/2023.
- [ ] Có cơ-chế rút đồng-ý dễ-dùng: link "hủy nhận email" ở cuối mỗi email + trả-lời "dừng" trên Zalo được xử-lý thật (không chỉ nói suông).
- [ ] KHÔNG mua/thuê danh-sách email/SĐT bên ngoài để nhồi vào phễu — chỉ dùng data tự thu qua opt-in.
- [ ] Toàn-bộ copy trong 4 chạm nuôi đã rà theo mục 3 (không hứa kết-quả tài-chính cụ-thể).
- [ ] Đã chọn và test xong công-cụ backend cho form (mục 2) — **KHÔNG chạy traffic trả-phí vào form còn tĩnh** (sẽ mất toàn-bộ lead).

> Toàn-bộ tài liệu này là **SPEC/kế-hoạch** (MẪU chiến-thuật) — hành-động gửi email/Zalo hàng-loạt cho khách thật vẫn thuộc **ranh-giới cứng NEED-APPROVAL** (gửi email/tin) và cần CEO duyệt nội-dung cụ-thể + xác-nhận công-cụ trước khi bấm gửi lần đầu.
