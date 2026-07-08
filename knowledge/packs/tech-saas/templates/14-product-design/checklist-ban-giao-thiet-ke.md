<!-- MẪU: Điều chỉnh theo thực tế doanh nghiệp -->
# Checklist bàn-giao thiết-kế (design handoff) + khả-năng tiếp-cận (a11y)

> **Mục đích:** bảo-đảm bản thiết-kế **đủ để dev dựng đúng, không đoán** — đủ trạng-thái, thông-số, tài-nguyên và đạt chuẩn tiếp-cận cơ-bản. Mỗi tính-năng 1 lần.
> **Căn-cứ (MẪU):** nguyên-tắc WCAG (tương-phản, bàn-phím) · design system nội-bộ (nếu có).

- **Tính-năng:** {{...}} · **Designer:** {{tên}} · **Dev nhận:** {{tên}} · **Ngày:** {{yyyy-mm-dd}}

## A. Đủ trạng-thái & luồng
- ☐ Đủ trạng-thái màn: **mặc-định · rỗng (empty) · đang tải · lỗi · thành-công**.
- ☐ Trạng-thái phần-tử: hover / focus / active / disabled / selected.
- ☐ Luồng đầy-đủ (happy path + các nhánh lỗi & edge-case).
- ☐ Nội-dung dài/tràn, số nhiều/ít, tên dài, ảnh thiếu — đã tính.

## B. Thông-số kỹ-thuật (specs)
- ☐ Spacing, kích-thước, grid, breakpoint responsive ({{mobile/tablet/desktop}}).
- ☐ Màu/typography **tham-chiếu token** design system (không màu lẻ tuỳ-tiện).
- ☐ Tài-nguyên xuất đúng định-dạng (SVG/PNG @1x@2x, icon).
- ☐ Chuyển-động/micro-interaction: thời-lượng, easing mô-tả rõ.
- ☐ Nội-dung/microcopy chốt (không "lorem ipsum" khi bàn-giao).

## C. Khả-năng tiếp-cận (a11y cơ-bản)
- ☐ Tương-phản màu đạt (văn-bản thường ≥{{4.5:1}}).
- ☐ Thao-tác được bằng bàn-phím; thứ-tự focus hợp-lý.
- ☐ Vùng chạm ≥{{44×44}}px trên mobile.
- ☐ Nhãn cho ảnh/nút biểu-tượng (alt / aria) — ghi chú cho dev.
- ☐ Không dùng **chỉ màu-sắc** để truyền thông-tin (thêm icon/chữ).

## D. Bàn-giao & thống-nhất
- ☐ Link file (Figma…) mở được, quyền xem/inspect cho dev.
- ☐ Buổi walkthrough: designer giải-thích, dev hỏi, chốt phạm-vi.
- ☐ Thống-nhất phần **ngoài phạm-vi** & bản kế-tiếp.
- ☐ Kênh hỏi-đáp khi dev vướng trong lúc dựng.

**Kết luận:** ☐ Sẵn-sàng dev · ☐ Còn thiếu — {{...}}
> MẪU — điều-chỉnh mức a11y theo cam-kết sản-phẩm & đối-tượng người dùng.
