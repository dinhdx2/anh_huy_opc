# 06 — Cây sinh-thành PHA 1 (cây việc → cây cấu-trúc) · vault `san-pham-so`

> **TL;DR:** PHA 1 (vn-architect) đã sinh **cây việc GĐ1** từ 9/11 khía-cạnh (asp-10 đối-tác & asp-11 ESG ngủ), gồm **9 mục-tiêu (trạng-thái) → 23 nhiệm-vụ-chính (động-từ) → 58 nhiệm-vụ-con nguyên-tử** (mỗi nv-con có **chiều 🗡tấn/🛡thủ/📦hậu** + đầu-vào/đầu-ra/ràng-buộc). Mục-tiêu + nhiệm-vụ-chính validate ĐÚNG TẦNG qua `lib/tier.js` (0 lỗi). Gom-ngược thành cây cấu-trúc phủ **7 khối ↔ 9 phòng live + dept-13**. KHO ngành `digital-products` **rỗng** → **bootstrap: mọi năng-lực = NEW**.
>
> Sinh 2026-06-30 (rev-2: bổ-sung nhiệm-vụ-con soi-3-chiều · rev-3: NVC 1.1 & 2.2 grounded bằng công-cụ nghiên-cứu, bỏ phỏng-vấn bắt-buộc · rev-3.1: dedup — 2.2 là cỗ-máy nghiên-cứu duy-nhất, 1.1 tiêu-thụ) · stage **GĐ1 — validate** (câu-sống-còn: *"khả-thi? có bài-toán đáng giải & người chịu trả tiền?"*). Telos đã G0. Cuộn-sóng: chỉ GĐ1 chi-tiết, GĐ2+ ghi điều-kiện-cổng.

---

## A. Cây việc GĐ1 (telos → mục-đích → mục-tiêu theo khía-cạnh → nhiệm-vụ-chính → nhiệm-vụ-con)

**Mục-đích GĐ1** (câu-sống-còn, khoác chữ DN): *"Chứng-minh kit 'lên đơn' giải bài-toán có thật của nhà bán mới Shopee/TikTok Shop và họ chịu trả tiền — bằng paid-test có kỷ-luật, trước khi scale."*

> **Soi-3-chiều (Bước 1B-4):** mỗi nhiệm-vụ-chính tạo TRẠNG-THÁI; bẻ xuống nhiệm-vụ-con qua 3 chiều — 🗡 **tấn** (LÀM gì tạo state) · 🛡 **thủ** (state hỏng kiểu gì → việc GÁC) · 📦 **hậu** (cần CẤP gì để chạy). Mỗi nv-con nguyên-tử, kiểm-chứng được, ghi *vào→ra | ràng-buộc*.

### ① Khía-cạnh SẢN-PHẨM → K4 (dept-09) + pack dept-13
**Mục-tiêu (trạng-thái):** Hero kit "lên đơn" 149–199k **đạt chuẩn phát-hành** (giải 1 nỗi-đau nhà bán mới).

- **NVC 1.1 Chốt phạm-vi & outline nội-dung hero kit** *(rev-3.1: TIÊU-THỤ nghiên-cứu của NVC 2.2 — không lặp lại quét web/cộng-đồng/đối-thủ ở đây, chống trùng)*
  - 🗡 *Chọn 1 nỗi-đau từ kết-luận nghiên-cứu (2.2e)* — bảng nỗi-đau ứng-viên (2.2e) → 1 nỗi-đau chốt | đo được, không trừu-tượng; ưu-tiên nỗi-đau **cầu mạnh + có khoảng-trống đối-thủ**.
  - 🗡 *Phác mục-lục kit + định "đầu-ra dùng-được-ngay"* — nỗi-đau chốt → outline 1 trang | giải ĐÚNG 1 nỗi-đau.
  - 🛡 *Kiểm & cắt scope-creep* — outline → scope chốt | mọi mục không phục-vụ nỗi-đau → cắt.
- **NVC 1.2 Làm nội-dung kit** (content bán hàng + mẫu ads + checklist chốt đơn)
  - 🗡 *Soạn bộ mẫu content & ads bán hàng* — outline → bộ mẫu | bản-địa-hóa sàn VN (Shopee/TikTok Shop).
  - 🗡 *Viết checklist chốt đơn + thiết-kế bản trình-bày* — bộ mẫu → file kit draft | dùng-được-ngay.
  - 🛡 *Rà chính-tả + đối-chiếu cổng bản-quyền (9.1)* — kit draft → kit pass-gate | KHÔNG phát-hành nếu fail gate.
  - 📦 *Chuẩn-bị template/asset gốc có license* — asset register (6.2) → asset dùng-được | license rõ-ràng.
- **NVC 1.3 Thiết-lập đóng-gói & giao SP có kiểm-soát** (license/watermark)
  - 📦 *Tạo bản watermark + link cá-nhân-hóa/license key* — kit pass-gate → gói chống-copy.
  - 🛡 *Giao thử 1 đơn mẫu* — gói → log giao thành-công | tải đúng, không lộ link gốc.

### ② Khía-cạnh ĐỊNH-VỊ → K3 (dept-07) + K1 (dept-02)
**Mục-tiêu:** Đầu-cầu & thông-điệp hero **được xác-nhận** khớp nỗi-đau nhà bán mới.

- **NVC 2.1 Viết thông-điệp định-vị** (1 câu wedge) + 3–5 góc bán
  - 🗡 *Viết 1 câu wedge + 3–5 góc bán* — nỗi-đau chốt → messaging doc.
  - 🛡 *Rà tránh "giàu nhanh"/cam-kết sai (liên-kết 9.4)* — messaging → bản đã rà | tuân Luật Quảng-cáo.
- **NVC 2.2 Phân-tích đầu-cầu & nỗi-đau qua nghiên-cứu thị-trường** (web + cộng-đồng + đối-thủ — *rev-3: KHÔNG phụ-thuộc phỏng-vấn; WTP cuối-cùng do paid-test Đợt 5 chứng-minh*)
  - 📦 *Lập khung nghiên-cứu đầu-cầu* (nguồn + tiêu-chí "cầu xác-nhận") — → khung + checklist nguồn | định rõ thế nào là tín-hiệu cầu đủ mạnh.
  - 🗡 *Quét tín-hiệu cầu qua công-cụ* (web search/xu-hướng + hỏi-đáp trong group nhà bán + review/bán-chạy đối-thủ + tín-hiệu từ-khóa) — khung → bảng tín-hiệu cầu có dẫn-nguồn | số ngoài Brain = `[benchmark — cần CEO xác minh]`. `[AI-AUTO]`
  - 🗡 *Phân-tích đối-thủ & khoảng-trống định-vị* (kit/khóa hiện có: giá · thông-điệp · điểm yếu) — → bản-đồ định-vị + khoảng-trống.
  - 🛡 *Kiểm chéo tín-hiệu (anti-bịa/rác)* — bảng tín-hiệu → bảng đã lọc | mỗi luận-điểm cầu cần ≥1 nguồn độc-lập; loại tín-hiệu yếu/quảng-cáo.
  - 🛡 *Tổng-hợp kết-luận đầu-cầu + bảng nỗi-đau ứng-viên + WTP (xác-nhận/bác)* — bảng đã lọc + bản-đồ định-vị → kết-luận + **bảng nỗi-đau xếp-hạng** (đầu-vào cho NVC 1.1) | **phép-thử "đáng giải" GĐ1** (bằng-chứng thị-trường, chưa phải tiền thật); bác → quay điều-chỉnh ngách/thông-điệp.

### ③ Khía-cạnh KHÁCH → K3 (dept-08, dept-07)
**Mục-tiêu:** Hạ-tầng thu & nuôi lead (email + Zalo OA) **sẵn-sàng**, có tín-hiệu quan-tâm sớm. *(Tỷ-lệ quay-lại ≥Y% là mục-tiêu GĐ2.)*

- **NVC 3.1 Dựng kênh thu lead email + Zalo OA** — **MOAT chính GĐ1**
  - 📦 *Tạo form opt-in + kết-nối email tool* — → form live.
  - 📦 *Tạo Zalo OA* — → OA live `[NEED-APPROVAL: định-danh]`.
  - 🛡 *Gắn consent NĐ 13 vào form (liên-kết 9.2)* — form → form hợp-lệ | có cơ-sở pháp-lý thu data.
- **NVC 3.2 Soạn chuỗi nuôi-dưỡng welcome + nội-dung giá-trị**
  - 🗡 *Viết 3–5 email/tin Zalo giá-trị* — → chuỗi nội-dung | biến traffic trả-phí thành tài-sản sở-hữu.
  - 🛡 *Thiết-lập cơ-chế rút/opt-out* — chuỗi → chuỗi hợp-lệ NĐ 13.

### ④ Khía-cạnh TIỀN → K2 (dept-03)
**Mục-tiêu:** Hạ-tầng thu tiền **sẵn-sàng** & contribution-margin/đơn **đo được**.

- **NVC 4.1 Dựng landing + tích-hợp cổng thanh-toán VN** (PayOS/Sepay/MoMo/ZaloPay)
  - 📦 *Dựng landing bán hero* — messaging (2.1) + kit (1.2) → landing live.
  - 📦 *Tích-hợp cổng thanh-toán VN* — landing → checkout `[NEED-APPROVAL: đăng-ký cổng/định-danh]`.
  - 🛡 *Kiểm thử 1 giao-dịch thử* — checkout → log thanh-toán OK | tiền về đúng, refund được.
- **NVC 4.2 Lập bảng unit-economics & công-thức CM/đơn**
  - 🗡 *Lập sheet công-thức CM/đơn = giá − (ads + phí cổng + refund + thuế)* — → sheet CM/đơn.
  - 🛡 *Chốt quy-tắc phanh* — sheet → quy-tắc | **KHÔNG dùng "ROAS từ biên-gộp ~90%" làm tín-hiệu lãi** (red-team survives).
- **NVC 4.3 Cập-nhật số thật unit-econ vào products.md**
  - 🗡 *Thu số thật từ CEO* (giá, phí cổng, CAC mục-tiêu) — `[NEED-INFO]`.
  - 🗡 *Cập-nhật products.md* — số thật → products.md đánh dấu `[số thật DN]`.

### ⑤ Khía-cạnh NĂNG-LỰC/ĐỘI-NGŨ → K6 (dept-04, dept-10)
**Mục-tiêu:** Vai then-chốt (sản-xuất, ads, vận-hành) có người/quy-trình **thay được**, không kẹt 1 người.

- **NVC 5.1 Chốt vai founder kiêm & việc thuê freelance theo việc**
  - 🗡 *Lập bảng RACI tối-thiểu* — → RACI `[NEED-INFO: CEO khai thời-gian/đồng-đội]`.
  - 📦 *Lập danh-sách freelancer dự-phòng* (thiết-kế/video/viết) — → shortlist.
- **NVC 5.2 Lập SOP tối-thiểu cho sản-xuất & vận-hành giao SP**
  - 🗡 *Viết SOP làm SP số* — → SOP-1.
  - 🗡 *Viết SOP giao SP + xử đơn* — → SOP-2.
  - 🛡 *Ghi rủi-ro "bus-factor 1 người" + cách giảm* — → mục rủi-ro.

### ⑥ Khía-cạnh CHUỖI-CUNG/HẠ-TẦNG → K5 (dept-05) + pack dept-13
**Mục-tiêu:** Stack công-cụ & asset đầu-vào **hợp-lệ**, ổn-định.

- **NVC 6.1 Chốt stack công-cụ sản-xuất + giấy-phép thương-mại**
  - 🗡 *Liệt-kê công-cụ* (thiết-kế/quay/AI/landing/email) — → stack list.
  - 🛡 *Kiểm điều-khoản TM mỗi công-cụ* — stack → stack hợp-lệ | Canva Pro chỉ nội-bộ, KHÔNG bán Pro elements.
  - 📦 *Chốt ngân-sách mua/subscription* — `[NEED-INFO]`.
- **NVC 6.2 Lập danh-mục asset có license rõ-ràng** (font/ảnh/nhạc/template gốc)
  - 🗡 *Lập asset register có cột nguồn + license* — → register.
  - 🛡 *Cờ asset chưa rõ license → DỪNG dùng (liên-kết 9.1)* — register → register đã gắn cờ.

### ⑦ Khía-cạnh QUY-TRÌNH → K5 (dept-05)
**Mục-tiêu:** Quy-trình lõi mua → giao SP tự-động → CSKH chạy **ổn-định**, lặp được.

- **NVC 7.1 Thiết-lập luồng giao-hàng tự-động sau thanh-toán**
  - 🗡 *Cấu-hình webhook/automation cấp link/license* — checkout (4.1) + gói (1.3) → luồng live.
  - 🛡 *Kiểm thử end-to-end 1 đơn* — luồng → log thành-công.
- **NVC 7.2 Lập quy-trình refund & CSKH cơ-bản**
  - 🗡 *Viết chính-sách refund* — → policy.
  - 📦 *Lập kênh hỗ-trợ (Zalo/email) + FAQ* — → kênh CSKH.
  - 🛡 *Ghi quy-tắc xử khiếu-nại/chargeback* — → quy-tắc.

### ⑧ Khía-cạnh ĐO-LƯỜNG → K7 (dept-11)
**Mục-tiêu:** Số then-chốt (CM/đơn, CAC, CR, refund%, lead) **đo từ 1 nguồn-sự-thật**, tin-cậy.

- **NVC 8.1 Dựng dashboard/sheet KPI 1 nguồn-sự-thật**
  - 🗡 *Dựng sheet gom 5 KPI phanh* (CM/đơn, CAC, CR, refund%, lead) — sheet CM/đơn (4.2) → dashboard.
  - 🛡 *Định "1 nguồn-sự-thật"* — dashboard → quy-ước | tránh số mâu-thuẫn.
- **NVC 8.2 Gắn tracking (pixel/UTM/conversion) trên ads & landing**
  - 🗡 *Cài pixel + UTM* — landing (4.1) → tracking live.
  - 🛡 *Kiểm dữ-liệu về đúng* — tracking → test conversion OK.

### ⑨ Khía-cạnh RỦI-RO PHÁP-LÝ/IP → K1 (dept-01) + pack dept-13
**Mục-tiêu:** Rủi-ro IP, thuế, dữ-liệu cá-nhân & quảng-cáo **được chặn** bằng cổng kiểm.

- **NVC 9.1 Lập cổng kiểm bản-quyền hero** — **cờ đỏ #2**
  - 🗡 *Viết checklist gate* (no Canva Pro/raw-AI/asset chưa license) — → checklist.
  - 🛡 *Áp gate trước mỗi lần phát-hành* — checklist → gate sống | chặn nếu fail.
- **NVC 9.2 Soạn Privacy Policy + consent (NĐ 13/2023)**
  - 🗡 *Soạn PP + consent string* — → PP.
  - 🛡 *Rà cơ-sở pháp-lý thu/lưu/rút data* — PP → PP hợp-lệ.
- **NVC 9.3 Rà mô-hình thuế & ngưỡng ~1 tỷ** (NĐ 141/2026) — **cờ đỏ #1**
  - 📦 *Chuẩn-bị hồ-sơ/câu hỏi cho kế-toán* — → brief thuế.
  - 🛡 *Kế-toán có chứng-chỉ xác-minh ngưỡng + mô-hình (hộ/cá-nhân/công-ty)* — brief → xác-nhận `[HUMAN-ONLY]`.
  - 🛡 *Chốt: KHÔNG dùng số chưa rà làm căn-cứ vận-hành* — → quy-tắc chặn.
- **NVC 9.4 Rà nội-dung ads tuân Luật Quảng-cáo** (no giàu-nhanh)
  - 🛡 *Rà copy ads* — messaging (2.1) → ads đã rà | cấm cam-kết sai.
- **NVC 9.5 Tra tên thương-hiệu Cục SHTT (Nhóm 41+9) + domain**
  - 🗡 *Tra sơ-bộ SHTT Nhóm 41+9 + check domain* — → báo-cáo tra `[AI-AUTO]`.
  - 🛡 *Shortlist 2–3 tên an-toàn* — báo-cáo → shortlist.
  - 🗡 *Nộp đơn first-to-file* — shortlist → đơn `[NEED-APPROVAL]`.

---

## B. Cây cấu-trúc (gom NGƯỢC-LÊN: nhiệm-vụ-con → phòng → khối)

> **Quy-tắc INV-5:** cấu-trúc sinh SAU việc. **GĐ1 solo + việc lặp chưa đủ nhiều → KHÔNG đẻ bộ-phận** (treo NVC thẳng dưới phòng, tránh phình tổ-chức). `gd_kich_hoat`: tất-cả = **live** (GĐ1).

| Khối | Phòng (maps_to canonical) | Nhiệm-vụ-chính treo dưới | Khía-cạnh nguồn |
|---|---|---|---|
| **K1** Quản-trị & Chiến-lược | dept-02 strategy · dept-01 governance/legal | 2.1 · 9.1–9.5 | ②⑨ |
| **K2** Tài-chính | dept-03 finance | 4.1 · 4.2 · 4.3 | ④ |
| **K3** Thị-trường & Khách-hàng | dept-07 marketing · dept-08 customer · dept-06 sales | 2.2 · 3.1 · 3.2 | ②③ |
| **K4** Sản-phẩm & Công-nghệ | dept-09 product-tech | 1.1 · 1.2 | ① |
| **K5** Vận-hành & Chuỗi-cung | dept-05 operations | 1.3 · 6.1 · 6.2 · 7.1 · 7.2 | ①⑥⑦ |
| **K6** Con-người | dept-04 people · dept-10 training | 5.1 · 5.2 | ⑤ |
| **K7** Dữ-liệu & Đo-lường | dept-11 reporting | 8.1 · 8.2 | ⑧ |
| *(pack)* | **dept-13** content-ip (Sản xuất Nội dung số & Bản quyền) | đồng-chủ 1.2 · 6.2 · 9.1 | ①⑥⑨ |

**Khía-cạnh ngủ (không sinh phòng/việc GĐ1):** asp-10 đối-tác/kênh-liên-minh · asp-11 ESG/quản-chế. Sẽ kích-hoạt khi điều-kiện-cổng GĐ sau đạt.

---

## C. Báo-cáo TRA-KHO (mỗi tầng năng-lực)

> KHO ngành `digital-products`: `knowledge/playbook/_index.md` **chưa khởi-tạo cho pack này** → `tra(ctx)` trả **rỗng** ở mọi khóa → **bootstrap mode**.

| Năng-lực canonical (đề-xuất) | Quyết-định | Lý-do |
|---|---|---|
| `lam-hero-san-pham-so` (làm kit số bán được) | **NEW** | KHO rỗng; ứng-viên PROMOTE nếu CM/đơn dương |
| `landing-thu-tien-vn` (landing + cổng VN) | **NEW** | chưa có asset tái dùng |
| `thu-nuoi-lead-email-zalo` (moat owned-channel) | **NEW** | ứng-viên PROMOTE (lặp xuyên SP) |
| `do-cm-don` (đo contribution-margin/đơn) | **NEW** | công-thức phanh — PROMOTE ưu-tiên cao |
| `cong-kiem-ban-quyen-spso` | **NEW** | đặc-thù ngành — PROMOTE để tái dùng |
| `giao-spso-tu-dong` (license/link) | **NEW** | — |

> **Hệ-quả:** tất-cả NVC GĐ1 đều "đẻ mới". Sau khi chạy thật & đạt KPI (PHA 3), năng-lực grade A/B → `kho.them()` cất `playbook/` + 1 dòng `_index.md` để task/DN số sau REUSE/ADAPT.

---

## D. Cổng nghiệm (đủ · tối-thiểu · không-trùng · đúng-tầng)

- **Đủ:** mọi NVC + nv-con done → 9 mục-tiêu trạng-thái đạt → mục-đích GĐ1 (validate có người trả tiền) đo được qua paid-test. ✅
- **Tối-thiểu:** không NVC nào bỏ được mà vẫn validate (giữ thủ 🛡 9.x + hậu 📦 3.1/4.1/8.1). ✅
- **Không-trùng:** cổng bản-quyền nêu ở ① nhưng **neo 1 nơi** tại 9.1 (tránh đếm 2 lần); ads-compliance neo 9.4, 2.1 chỉ liên-kết. ✅
- **Soi-3-chiều đủ:** mỗi NVC có ≥1 nv-con tấn 🗡; các NVC tạo-state đều có nv-con thủ 🛡 (gác hỏng) và/hoặc hậu 📦 (cấp nguồn-lực). ✅
- **Đúng-tầng:** 9 mục-tiêu + 23 NVC validate `lib/tier.js` = 0 lỗi; nv-con nguyên-tử (kiểm-chứng được). ✅
