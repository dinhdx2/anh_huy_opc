# Cổng bản-quyền TRƯỚC phát-hành — BộMẫu

> **TL;DR:** Đây là cổng bắt-buộc chạy TRƯỚC khi đăng bán bất-kỳ SP nào (Sheet, Canva, Notion, bundle...): rà license từng asset đầu-vào (font/ảnh-icon/nội-dung/nguồn-gốc-file), 1 dòng FAIL = DỪNG phát-hành cả SP. Áp cho **hero (Sheet đối-soát đa-sàn)** và **order-bump (TT40 + tồn-kho)**: cả hai đã rà — **KẾT-LUẬN: PASS**, không dùng asset bên thứ-ba nào cần xin phép. Từ SP thứ 3 trở đi (đặc-biệt khi mở Canva/Notion) BẮT-BUỘC điền lại bảng này, không suy-diễn từ lần trước.

---

## 0. Vì sao cổng này tồn-tại (rủi-ro #1 của DN)

Red-team hội-đồng `/vn-run` (2026-07-07, `02-Tasks/2026-07-07-1023-phan-tich-ngach-doi-thu/07-decision-report.md`) đã xác-nhận **CẢNH BÁO ĐỎ #1 — SURVIVES**: dùng **Canva Pro elements**/font/ảnh/AI-output chưa rà license trong file bán → vi-phạm Content License Agreement của Canva → hệ-quả thật đã xảy ra với người bán khác trên thị-trường:
- Canva **cấm bán lại/tái-phân-phối template chứa Pro Content dưới dạng file tải-về** (PDF/JPG/PNG, kể cả đã "flatten"): *"you can't sell templates with Pro Content as a PDF or other file types, whether flattened or not"* — chỉ được bán dưới dạng **link Canva template** (khách tự copy trong Canva), không được xuất file bán đứt nếu chứa Pro Content ([Canva Content License Agreement](https://www.canva.com/policies/content-license-agreement/); [tổng-hợp LicenseOrg 2026](https://www.licenseorg.com/blog/canva-license-explained)).
- **Không được bán "standalone element"** (1 icon/graphic Pro tách riêng) dưới bất-kỳ hình-thức nào.
- Hệ-quả nếu vi-phạm: **takedown sản-phẩm đang bán + khóa/treo tài-khoản seller trên chợ (Etsy/Gumroad...) + rủi-ro trách-nhiệm SHTT tại VN** (Luật SHTT sửa-đổi 2022 số 07/2022/QH15, hiệu-lực 01/01/2023; Nghị-định 17/2023/NĐ-CP hướng-dẫn quyền tác-giả/quyền liên-quan) — khóa cổng thanh-toán chỉ là hệ-quả **gián-tiếp**, gốc rễ là vi-phạm hợp-đồng license + SHTT.

→ **Nguyên-tắc:** rà license là việc **làm 1 lần/SP, tốn 15–30 phút, không tốn tiền** — rẻ hơn RẤT nhiều so với mất 1 vòng doanh-thu + tài-khoản đang chạy ads. Không fast-track dù áp-lực tiến-độ ra mắt.

---

## 1. Quy-tắc rà (áp cho MỌI asset đầu-vào của MỌI SP)

| # | Loại asset | Được dùng khi nào | TUYỆT-ĐỐI KHÔNG |
|---|---|---|---|
| 1 | **Font** | Chỉ dùng **Google Fonts (giấy-phép OFL — Open Font License)** hoặc font hệ-thống (system font: Arial, Calibri, Times New Roman...). OFL cho-phép bundle font vào SP bán thương-mại (template/app), chỉ cấm bán RIÊNG file font (.ttf/.woff2) như 1 sản-phẩm độc-lập. | Font mua bản-quyền cá-nhân (personal-use only) dùng cho SP thương-mại; font Canva Pro-only; font không rõ nguồn (tải từ web lạ). |
| 2 | **Ảnh/icon/hình minh-hoạ** | Chỉ nguồn **CC0** (Unsplash, Pexels, Pixabay — free thương-mại không cần credit) hoặc **đã mua license thương-mại rõ-ràng** (có hoá-đơn/link license, cho-phép resell/redistribute trong SP số). | **Canva Pro elements/photo/graphic** dùng trong file XUẤT BÁN (PDF/xls/copy Sheet) — chỉ được nếu khách **tự thao-tác trong Canva qua link template** (không xuất file); ảnh Google Images/Pinterest không rõ license; ảnh AI-generated chưa qua Adobe Firefly/Midjourney có điều-khoản thương-mại rõ. |
| 3 | **Nội-dung/công-thức/logic** | **Tự viết 100%** (công-thức Sheet, câu chữ hướng-dẫn, cấu-trúc bảng) — kể cả tham-khảo ý-tưởng chung (VD "công-thức lãi-thật" là kiến-thức phổ-thông, không ai độc-quyền). | Copy nguyên công-thức/cấu-trúc từ 1 template trả-phí cụ-thể của người khác (kể cả sửa tên cột) — đây là đạo nhái, không phải bản-quyền asset nhưng vẫn vi-phạm quyền tác-giả nếu cấu-trúc đủ tính sáng-tạo/đặc-thù. |
| 4 | **Bán lại template người khác** | **KHÔNG BAO GIỜ** — dù có mua license "resell rights"/"PLR (private label rights)", vẫn cần đọc kỹ điều-khoản gốc trước khi tin; mặc-định coi là rủi-ro cao, cần luật-sư xác-nhận riêng từng trường-hợp. | — |
| 5 | **Raw AI output** | Có thể dùng AI (ChatGPT/Claude/Gemini...) **hỗ-trợ soạn draft**, nhưng SP bán phải qua **chỉnh-sửa/biên-tập/tổ-chức lại có tính sáng-tạo của người** (Luật SHTT VN yêu-cầu "tính nguyên-gốc" để được bảo-hộ quyền tác-giả — output AI thô không qua biên-tập có rủi-ro pháp-lý về quyền-sở-hữu chưa rõ-ràng tại VN, `[cần luật-sư xác minh]`). | Copy-paste nguyên-văn output AI (kể cả công-thức Sheet do AI viết) mà không tự kiểm-tra/chỉnh-sửa/thêm giá-trị. |

---

## 2. Bảng rà từng asset — điền cho MỖI SP trước khi phát-hành

| Asset | Nguồn | License | Được bán không? | Bằng-chứng | Kết-luận |
|---|---|---|---|---|---|
| *(VD: Font tiêu-đề)* | *(VD: Google Fonts — Inter)* | *(OFL 1.1)* | *(Có — bundle vào SP, không bán rời file font)* | *(Link: fonts.google.com/specimen/Inter + copy OFL license text kèm README)* | *(PASS)* |
| *(VD: Icon cảnh-báo)* | *(VD: Flaticon — free)* | *(Free with attribution / đã mua Premium license)* | *(Có nếu attribution đúng / license Premium cho-phép resell)* | *(Link tải + screenshot điều-khoản license)* | *(PASS/FAIL)* |
| *(VD: Công-thức tính lãi-thật)* | *(Tự viết)* | *(Sở-hữu 100% — tác-giả BộMẫu)* | *(Có)* | *(File gốc .xlsx/Gsheet có lịch-sử chỉnh-sửa)* | *(PASS)* |
| ... | | | | | |

**Quy-tắc chấm:** 1 dòng **FAIL** (không rõ license / dùng Canva Pro trong file xuất / không có bằng-chứng) → **DỪNG phát-hành TOÀN BỘ SP** cho tới khi thay-thế asset đó bằng nguồn PASS. Không "tạm bán rồi sửa sau".

---

## 3. Áp dụng cho hero + order-bump (đã rà — kết-luận CEO có thể dùng ngay)

### Hero — "Bộ Google Sheet đối-soát & tính LÃI THẬT đa-sàn TikTok Shop/Shopee" (149–179k)

| Asset | Nguồn | License | Được bán không? | Bằng-chứng | Kết-luận |
|---|---|---|---|---|---|
| Toàn-bộ công-thức/cấu-trúc bảng (đối-soát, tính lãi sau phí sàn/ads/COD) | Tự viết (BộMẫu) | Sở-hữu 100% | Có | File Google Sheet gốc do founder tạo, không import template có sẵn | **PASS** |
| Font trong Sheet | Font mặc-định Google Sheet (Arial/hệ-thống) — chưa dùng font custom | System font | Có | Google Sheet mặc-định | **PASS** |
| Icon/màu sắc/conditional formatting | Dựng bằng công-cụ built-in của Google Sheet (không icon ngoài) | Không có asset bên thứ-ba | Có | Không cần license | **PASS** |
| Hướng-dẫn sử-dụng (video/PDF kèm) | Tự quay/tự viết | Sở-hữu 100% | Có | *[cần làm khi có bản demo — chưa phát-sinh asset]* | **PASS (chưa có rủi-ro)** |

**→ HERO = 0 asset bên thứ-ba cần xin phép → PASS. Đây là lý-do hero được hội-đồng chọn là "sạch bản-quyền nhất" trong các phương-án (xem `07-decision-report.md` mục 13-content-ip).**

### Order-bump — Mẫu thuế khoán TT40 + Bảng tồn-kho (+49–79k)

| Asset | Nguồn | License | Được bán không? | Bằng-chứng | Kết-luận |
|---|---|---|---|---|---|
| Bảng tính thuế khoán (công-thức GTGT 5%/TNCN 2%) | Tự viết dựa trên **quy-định công-khai của Thông-tư 40/2021/TT-BTC** (luật là kiến-thức công-cộng, không ai độc-quyền công-thức thuế) | Sở-hữu 100% phần trình-bày/công-thức Sheet | Có | File CSV/Sheet gốc `order-bump/tt40-tinh-thue-khoan.csv` | **PASS** |
| Bảng tồn-kho (nhập/xuất/tồn/cảnh-báo) | Tự viết — cấu-trúc bảng tồn-kho phổ-thông (không đặc-thù, không đạo từ SP cụ-thể nào) | Sở-hữu 100% | Có | File CSV/Sheet gốc `order-bump/ton-kho-don-gian.csv` | **PASS** |
| Font/icon | Không dùng — thuần bảng-tính, không hình-ảnh | — | Có | — | **PASS** |

**→ ORDER-BUMP = tự-viết 100%, không đạo/copy template thuế/tồn-kho của ai → PASS.**

### Kết-luận chung cho lô ra-mắt đầu (hero + order-bump)
**PASS toàn-bộ — đủ điều-kiện phát-hành về mặt bản-quyền.** Không phát-sinh rủi-ro Canva Pro elements vì lô đầu KHÔNG dùng Canva. Khi mở Canva/Notion (theo lộ-trình "HOÃN thành upsell sau cổng PMF" trong `products.md`), **PHẢI chạy lại bảng ở mục 2** trước khi bán — không suy-diễn từ kết-luận PASS này.

---

## 4. Căn-cứ pháp-lý (MẪU — cần luật-sư rà trước khi dùng làm cơ-sở tranh-tụng)

- **Luật Sở hữu trí tuệ** (Luật số 07/2022/QH15 sửa-đổi, hiệu-lực 01/01/2023) — quyền tác-giả bảo-hộ tác-phẩm có **tính nguyên-gốc**; dùng trái-phép tác-phẩm người khác (kể cả template số) có thể bị xử-lý dân-sự/hành-chính.
- **Nghị-định 17/2023/NĐ-CP** (26/4/2023) — hướng-dẫn chi-tiết thi-hành Luật SHTT về quyền tác-giả, quyền liên-quan (định-nghĩa "sao chép", "phân-phối", ngoại-lệ sử-dụng hợp-lý).
- **Điều-khoản hợp-đồng nền-tảng** (Canva Content License Agreement, Google Fonts OFL) — vi-phạm điều-khoản dân-sự này dẫn tới **chấm-dứt hợp-đồng dịch-vụ (khóa acc)**, độc-lập với Luật SHTT nhà-nước nhưng thường đi kèm.
- ⚠️ **Đây là bảng KIỂM-SOÁT NỘI-BỘ (MẪU), không thay-thế tư-vấn pháp-lý.** Trước khi mở-rộng sang SP có dùng ảnh/font/asset bên thứ-ba phức-tạp hơn (đặc-biệt Canva Pro, stock photo trả-phí, AI-art thương-mại), **cần luật-sư SHTT rà lại toàn-bộ quy-trình + hợp-đồng license cụ-thể**.

---

## 5. Quy-trình vận-hành cổng (ai làm, khi nào)

1. Trước khi tạo file bán chính-thức (final) cho MỌI SP mới → điền bảng mục 2.
2. Founder (hoặc người phụ-trách content/13-content-ip) tự rà — không cần chờ luật-sư cho asset rõ-ràng (Google Fonts, CC0, tự viết).
3. Asset KHÔNG rõ license (mua từ nguồn lạ, "resell rights", AI-art thương-mại) → **DỪNG, hỏi CEO/luật-sư trước khi dùng.**
4. Lưu bằng-chứng (screenshot license, link nguồn, hoá-đơn mua) kèm file SP — để tra-cứu khi có tranh-chấp/khiếu-nại DMCA từ chợ (Etsy/Gumroad) hoặc từ chủ sở-hữu bản-quyền.
5. Cổng này chạy **TRƯỚC** bước "đăng landing page + mở bán" (A2, trước A3/A4) — không đảo thứ-tự.
