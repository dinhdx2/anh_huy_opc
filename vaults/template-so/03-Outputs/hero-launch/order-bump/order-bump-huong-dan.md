# Hướng dẫn dùng Order-bump: Mẫu thuế khoán TT40 + Bảng tồn-kho (+49–79k)

> **TL;DR:** Order-bump gồm 2 file Sheet/CSV bán kèm hero (+49–79k): (1) tự tính thuế khoán TT40/2021 cho người bán online — **mặc-định nhóm HÀNG HÓA (GTGT 1% + TNCN 0,5% = 1,5%)** đúng với nhà bán TikTok Shop/Shopee (khớp bộ Sheet lãi-thật/hero), có tùy-chọn nhóm **DỊCH VỤ (5%+2%)**; (2) quản tồn-kho đơn-giản đa-kênh. Cả hai là **MẪU tham-khảo**, khách hàng **PHẢI có kế-toán có chứng-chỉ hành-nghề rà lại trước khi kê-khai/nộp thật**. ⚠️ **Phân-biệt:** bảng này tính thuế của **KHÁCH** (nhà bán hàng-hóa = 1,5%); còn thuế của **chính BộMẫu** khi bán template số = **dịch-vụ 5%+2%** (nhóm khác — xem mô-hình CAC `../tai-chinh/`).

---

## 1. Order-bump là gì, bán khi nào

Order-bump = ưu-đãi thêm hiện ngay tại trang thanh-toán (checkout) khi khách đang mua hero, giá +49–79k (rẻ hơn nhiều so với mua riêng), tick 1 ô là mua thêm — không cần rời trang. Mục-tiêu: tăng AOV (giá-trị đơn trung-bình) 25–35% mà không tốn thêm chi-phí marketing cho đơn đó (đã có khách sẵn ở checkout).

**Vì sao chọn TT40 + tồn-kho làm order-bump** (quyết-định hội-đồng `07-decision-report.md`): cùng **job-to-be-done** với hero (người bán online đa-sàn cần biết lãi thật + biết còn hàng + biết thuế phải đóng) → mua liền-mạch, không lệch chủ-đề như Canva kit. Đồng thời **sạch bản-quyền tuyệt-đối** (tự viết công-thức từ quy-định công-khai của nhà-nước, không dùng asset bên thứ-ba) — xem `../compliance/cong-ban-quyen-checklist.md` mục "Order-bump" (kết-luận PASS).

## 2. Nội-dung 2 file

### a) `tt40-tinh-thue-khoan.csv` — Bảng tự tính thuế khoán
- **Khu-vực A:** căn-cứ pháp-lý + **chọn nhóm ngành** (mặc-định **"hàng-hóa"** cho nhà bán TikTok Shop/Shopee → Thuế GTGT = Doanh-thu × **1%**, TNCN = Doanh-thu × **0,5%**; đổi sang **"dịch-vụ"** → 5% + 2% nếu khách bán dịch-vụ). Công-thức `=IF(nhóm="hàng hóa";…)` tự đổi tỷ-lệ. *(Đây là nhóm của thứ KHÁCH bán — hàng-hóa vật-lý; khác với BộMẫu bán template số = dịch-vụ.)*
- **Khu-vực B:** bảng điền theo tháng — khách nhập doanh-thu thật, cột còn lại tự tính theo công-thức (mở trong Google Sheet để công-thức chạy tự-động: `=SUM()`, `=IF()`...).
- **Khu-vực C:** ví-dụ minh-hoạ bằng số giả-định (không phải số thật) để hiểu cách tính trước khi điền số thật.
- **Ngưỡng miễn thuế:** ghi rõ ngưỡng cũ (100 triệu đ/năm, áp-dụng đến hết 2025) và tình-trạng **đang biến-động mạnh trong 2025–2026** (Quốc-hội/Chính-phủ điều-chỉnh nhiều lần: 200tr → 500tr → có nguồn ghi 1 tỷ đ/năm từ 1/1/2026) — gắn rõ `[cần kế-toán xác minh ngưỡng chính-xác đang áp-dụng]` vì đây là quy-định rất mới, chưa thống-nhất giữa các nguồn tại thời-điểm soạn tài-liệu (2026-07-07).

### b) `ton-kho-don-gian.csv` — Bảng tồn-kho đa-kênh
- Theo-dõi **Tồn đầu kỳ → Nhập → Xuất-bán theo từng kênh (TikTok Shop / Shopee / kênh khác) → Tồn cuối kỳ**, có cột **Trạng-thái cảnh-báo tự-động** (Còn hàng / Sắp hết — cần nhập thêm / Hết hàng — dừng bán) dựa trên ngưỡng cảnh-báo tự đặt.
- Dùng **song-song với hero**: hero cho biết LÃI THẬT, bảng này cho biết CÒN HÀNG hay không — tránh nhận đơn khi hết hàng (gây hủy đơn, tụt điểm shop trên TikTok Shop/Shopee).

## 3. Cách khách dùng (checklist bàn giao)

1. Mở file `.csv` bằng Google Sheets (File → Import → Upload) hoặc Excel.
2. Đọc Khu-vực A (công-thức) trước, đọc Khu-vực C (ví-dụ) để hiểu cách điền.
3. Xóa dòng ví-dụ ở Khu-vực C nếu không cần (chỉ để tham-khảo).
4. Điền số thật của SHOP MÌNH vào Khu-vực B — công-thức trong Google Sheets tự tính khi gõ đúng `=` ở đầu công-thức (bảng CSV chỉ ghi công-thức dạng chữ, khách cần tự gõ lại thành công-thức Sheet thật hoặc BộMẫu cung-cấp bản `.gsheet` có công-thức sẵn nếu nâng-cấp gói).
5. **Trước khi dùng số thuế để kê-khai/nộp thuế thật → liên-hệ kế-toán/dịch-vụ kế-toán có chứng-chỉ hành-nghề để rà lại toàn-bộ** (ngưỡng miễn thuế, cách phân-loại ngành, kỳ kê-khai...).

## 4. Cảnh-báo bắt-buộc hiển-thị cho khách (đưa vào trang SP + trong file)

> ⚠️ **MẪU — cần kế-toán có chứng-chỉ hành-nghề rà trước khi kê-khai thật.** Bảng tính thuế khoán này giúp bạn ƯỚC-TÍNH nhanh, KHÔNG thay-thế tờ khai thuế chính-thức và KHÔNG chịu trách-nhiệm pháp-lý thay bạn. Ngưỡng miễn thuế, tỷ-lệ %, cách phân-loại ngành-nghề có-thể thay-đổi theo quy-định mới — luôn kiểm-tra với cơ-quan thuế/kế-toán tại thời-điểm bạn kê-khai.

## 5. Việc CÒN LẠI cần CEO/kế-toán xác-minh trước khi bán chính-thức

- [ ] Xác-minh ngưỡng miễn thuế GTGT/TNCN chính-xác đang áp-dụng (500 triệu hay 1 tỷ đồng/năm — các nguồn 2025-2026 chưa thống-nhất).
- [ ] Xác-nhận cách phân-loại "dịch-vụ" (GTGT 5%/TNCN 2%) có đúng cho mô-hình bán template số qua landing+SePay hay rơi vào nhóm khác.
- [ ] Rà bảng tồn-kho với 1-2 khách mẫu (nhà bán TikTok Shop/Shopee thật) để xác-nhận cột/công-thức đủ dùng trước khi coi là bản final bán ra.
