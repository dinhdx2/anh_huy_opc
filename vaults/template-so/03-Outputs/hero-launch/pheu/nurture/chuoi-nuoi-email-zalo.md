# Copy chuỗi nuôi Email + Zalo — 5 chạm (Chạm #0→#4) — BỘMẪU

> **TL;DR:** Đây là **copy đầy-đủ, dùng-được-ngay** cho 5 chạm nuôi lead (chạm #0 giao-hàng + 4 chạm nuôi ~7 ngày) của phễu Sheet-free → hero đầy-đủ 149.000đ, bám khung đã chốt ở `../../pheu-email-zalo.md` mục 3. Mỗi email có tiêu-đề A/B, preheader, thân bài, CTA, footer hủy-nhận; mỗi tin Zalo có mở-đầu, nội-dung, CTA, dòng "gõ DỪNG để ngừng". **KHÔNG có câu nào hứa kết-quả tài-chính** (đúng Điều 8 khoản 9 Luật Quảng cáo 2012) và chạm #2 chỉ dùng ví-dụ **minh-hoạ**, không phải case thật.

> ⚠️ **RANH-GIỚI CỨNG — NEED-APPROVAL:** File này là **COPY MẪU đã soạn sẵn**, chưa phải hành-động gửi. **Gửi email/Zalo hàng-loạt cho khách thật là hành-động thuộc ranh-giới cứng "gửi email/tin"** (`lib/flow.js#chamRanhGioiCung`) → **luôn cần CEO duyệt nội-dung cụ-thể + xác-nhận công-cụ (ConvertKit/MailerLite/Zalo OA…) trước khi bấm gửi lần đầu**, kể cả khi nội-dung đã đúng chuẩn dưới đây. Không tự-động hoá việc bấm gửi khi chưa có xác-nhận đó.

---

## 0. Cách dùng file này

- **Token cá-nhân-hoá** (thay bằng dữ-liệu thật khi nối công-cụ email/Zalo, xem `../../pheu-email-zalo.md` mục 2):
  - `{{ho_ten}}` — Họ tên khách (nếu trống ở form, fallback "bạn": *"Chào bạn,"* thay vì để trống).
  - `{{san}}` — Sàn khách chọn lúc điền form (TikTok Shop hoặc Shopee).
- **Chỗ CEO cần điền trước khi gửi thật** (đánh dấu `[CẦN CEO ĐIỀN]` trong bài): mức giảm mã ưu-đãi chạm #3, ngày hết-hạn ưu-đãi chạm #4, link Zalo OA thật, email liên-hệ thật, link Sheet cá-nhân-hoá thật (sinh theo cơ-chế ở `../../giao-hang/giao-hang-kiem-soat-spec.md` — KHÔNG BAO GIỜ gửi link bản gốc).
- **Căn-cứ pháp-lý consent/dữ-liệu:** theo **Luật Bảo-vệ dữ-liệu cá-nhân (Luật số 91/2025/QH15)** + **Nghị-định 356/2025/NĐ-CP** (hiệu-lực 01/01/2026) — KHÔNG dùng Nghị-định 13/2023/NĐ-CP làm căn-cứ chính (đã được thay-thế/nâng cấp, xem cảnh-báo ở `../../compliance/privacy-policy.md` mục 0). Mỗi email/Zalo dưới đây đều có cơ-chế rút đồng-ý dễ-dùng (`[Hủy nhận email]` / gõ "DỪNG").
- **Luật Quảng cáo:** toàn-bộ copy dưới đây **không** dùng các cụm bị cấm ở Điều 8 khoản 9 Luật Quảng cáo 2012 ("chắc-chắn lãi to", "tăng gấp đôi doanh-thu", "đảm-bảo ra đơn"…) — bán bằng **thấy-rõ con-số thật**, không bằng lời hứa kết-quả.
- **Link CTA cuối phễu:** `landing.html#gia` (khu-vực bảng giá). Link đăng-ký lại bản free (nếu cần nhắc): `landing.html#dang-ky`.

---

## Chạm #0 — Giao-hàng (ngay sau khi khách đăng-ký) — Email + Zalo

### 0a. Email

**Tiêu-đề (A/B — chọn 1, test sau khi có dữ-liệu mở):**
- A. `{{ho_ten}} ơi, Sheet Tính Lãi Thật của bạn đã sẵn-sàng 🎁`
- B. `Link Sheet MIỄN-PHÍ đã gửi — mở thử trong 5 phút`
- C. `Bắt đầu ngay: Sheet tính lãi thật {{san}} của bạn đây`

**Preheader:** Bấm để tạo bản-sao riêng của bạn — không cần cài thêm gì, không cần biết công-thức.

**Thân bài:**

```
Chào {{ho_ten}},

Cảm ơn bạn đã đăng-ký nhận "Sheet Tính Lãi Thật — bản 1 sàn ({{san}})" từ BỘMẪU.

Đây là link RIÊNG của bạn (không phải bản gốc, nên bạn thoải-mái nhập số-liệu
mà không ảnh-hưởng tới ai khác):

👉 [Tạo bản-sao Sheet của tôi] → [CẦN CEO/kỹ-thuật gắn LINK_SHEET_CA_NHAN_HOA
   thật — sinh theo cơ-chế make-a-copy ở giao-hang-kiem-soat-spec.md, KHÔNG
   BAO GIỜ gửi link bản gốc]

Cách bắt đầu trong 5 phút:
1) Bấm link trên → Google hỏi "Make a copy" → bấm để tạo bản riêng về Drive
   của bạn.
2) Mở tab "Cấu-hình phí sàn" → khai % phí {{san}} bạn đang áp-dụng (có
   hướng-dẫn ngay trong tab đầu-tiên của Sheet).
3) Mở tab "Nhập đơn" → nhập thử 3-5 đơn gần nhất của bạn.
4) Xem tab "Lãi thật/đơn" → con số lãi thật sau khi trừ đủ phí sẽ hiện ra
   ngay lập-tức.

Vướng ở bước nào cứ nhắn Zalo cho BỘMẪU (xem link bên dưới), mình hỗ-trợ
trực-tiếp.

Hẹn gặp lại vào ngày mai — mình sẽ chia-sẻ 3 khoản phí mà rất nhiều nhà bán
{{san}} hay quên trừ khi tự tính lãi bằng tay.
```

**CTA (nút chính):** `Nhập thử đơn đầu-tiên ngay hôm nay` → trỏ tới link Sheet cá-nhân-hoá ở trên.

**Footer hủy-nhận (dùng chung mọi email — xem khối chuẩn ở mục "Footer dùng chung" cuối file).**

### 0b. Zalo (gửi ngay sau khi khách kết-bạn Zalo OA / để lại SĐT)

```
Chào {{ho_ten}} 👋
Cảm ơn bạn đã đăng-ký "Sheet Tính Lãi Thật" (bản 1 sàn - {{san}}) của BỘMẪU!

Link Sheet riêng của bạn đây: [LINK_SHEET_CA_NHAN_HOA]
Dùng nhanh trong 5 phút:
1) Bấm link → chọn "Make a copy"
2) Khai % phí {{san}} ở tab đầu
3) Nhập thử vài đơn → xem tab "Lãi thật/đơn"

Có vướng gì cứ nhắn mình ngay trên Zalo này, mình hỗ-trợ trực-tiếp nhé.

(Muốn dừng nhận tin từ BỘMẪU, gõ "DỪNG" bất-cứ lúc nào — mình xử-lý ngay.)
```

---

## Chạm #1 — Ngày 1 — Email (giáo-dục, KHÔNG chào giá)

**Tiêu-đề (A/B):**
- A. `3 khoản phí nhà-bán hay quên khi tính lãi (khoản #2 dễ bỏ-sót nhất)`
- B. `Vì-sao tưởng lãi mà cuối tháng vẫn thiếu tiền?`
- C. `{{ho_ten}} ơi, bạn đã trừ đủ 3 khoản phí này chưa?`

**Preheader:** Không phải khoản phí nào cũng hiện rõ trên bảng doanh-thu của sàn — đọc 2 phút để biết.

**Thân bài:**

```
Chào {{ho_ten}},

Hôm qua bạn đã nhận Sheet Tính Lãi Thật rồi. Hôm nay mình muốn chia-sẻ 3
khoản phí mà rất nhiều nhà bán {{san}} hay QUÊN trừ khi tự tính lãi bằng
tay (không dùng Sheet) — khiến con số lãi "trên giấy" khác xa số tiền thật
còn lại trong tài-khoản:

1) Phí hoàn hàng COD (thu tiền khi giao hàng): đơn bị khách trả lại vẫn
   phát-sinh chi-phí vận-chuyển CẢ 2 CHIỀU + phí xử-lý, nhưng nhiều người
   chỉ trừ phí ship chiều đi.

2) Phí quảng-cáo (ads) phân-bổ theo đơn: nếu chạy ads cho nhiều sản-phẩm
   cùng lúc, phần chi-phí ads phải được chia đều cho từng đơn bán được —
   không thể tính lãi 1 đơn mà bỏ-qua phần ads đã "gánh" cho đơn đó.

3) Phí thanh-toán/phí sàn: mỗi sàn thu % hoa-hồng + phí thanh-toán khác
   nhau theo ngành-hàng, và các mức này có-thể đổi theo thời-gian — nếu
   không cập-nhật, số lãi bạn tự tính sẽ lệch dần mà không hay.

Đây là lý-do trong Sheet Tính Lãi Thật có hẳn 1 tab "Cấu-hình phí sàn"
riêng — để bạn khai đúng 1 lần và Sheet tự trừ đủ cả 3 khoản này mỗi khi
bạn nhập đơn.

Một câu hỏi nhỏ: bạn đang bán trên MẤY SÀN cùng lúc? Trả-lời email này 1
câu ngắn giúp mình gửi đúng nội-dung phù-hợp hơn cho bạn ở email sau.
```

**CTA:** `Trả-lời: Bạn đang bán mấy sàn?` (reply-to email, thu tín-hiệu cá-nhân-hoá, KHÔNG có nút mua hàng ở chạm này).

**Footer hủy-nhận (dùng chung — xem cuối file).**

---

## Chạm #2 — Ngày 3 — Zalo (hỏi-thăm + ví-dụ minh-hoạ, KHÔNG bán)

```
Chào {{ho_ten}} 👋
Bạn dùng thử Sheet được vài hôm rồi — mọi thứ ổn không? Có chỗ nào công-thức
khó hiểu hay cần mình hướng-dẫn thêm không, cứ nhắn mình nhé.

Nhân-tiện chia-sẻ với bạn 1 VÍ-DỤ MINH-HOẠ (không phải trường-hợp thật của
khách nào, chỉ để dễ hình-dung) mà mình hay gặp khi trò-chuyện với nhà-bán
{{san}}: nhìn bảng doanh-thu tưởng lãi vài chục nghìn/đơn, nhưng khi cộng đủ
phí ads phân-bổ + phí hoàn COD + phí sàn thì con số thật lại thành ÂM. Đây
là lý-do "lãi trên giấy" và "lãi thật" có-thể rất khác nhau — mỗi shop mỗi
khác, không phải ai cũng gặp tình-huống này.

Bạn thử nhập vài đơn thật của mình vào Sheet xem con số ra sao nhé — nếu
cần mình hỗ-trợ đọc kết-quả, cứ nhắn mình bất-cứ lúc nào.

(Gõ "DỪNG" nếu bạn không muốn nhận tin nữa — mình xử-lý ngay.)
```

> **Lưu-ý bắt-buộc khi gửi thật:** ví-dụ trên PHẢI giữ nguyên cụm "VÍ-DỤ MINH-HOẠ (không phải trường-hợp thật...)" — không được xoá/rút gọn cụm này để "cho gọn", vì đây là điều-kiện để không bị coi là case-study/số-liệu bịa theo mục 3 của `../../pheu-email-zalo.md`.

---

## Chạm #3 — Ngày 5 — Email (giới-thiệu bản đầy-đủ + order-bump)

**Tiêu-đề (A/B):**
- A. `Bản đầy-đủ đa-sàn: đối-soát + dashboard tự-động (ưu-đãi riêng cho bạn)`
- B. `{{ho_ten}} ơi, đây là phần bản FREE của bạn CHƯA làm được`
- C. `Từ 1 sàn lên đa-sàn — 149.000đ (dành cho người đã dùng bản free)`

**Preheader:** Bản bạn đang dùng chỉ có 2/5 tab — đây là 3 tab còn lại, giúp bạn đỡ cộng tay khi bán nhiều sàn.

**Thân bài:**

```
Chào {{ho_ten}},

Vài ngày qua bạn đã dùng thử "Sheet Tính Lãi Thật" bản 1 sàn ({{san}}).
Hôm nay mình giới-thiệu BẢN ĐẦY-ĐỦ — dành cho nhà-bán đang (hoặc sắp) bán
trên nhiều sàn cùng lúc.

Khác-biệt CỤ-THỂ so với bản miễn-phí bạn đang dùng (không thổi-phồng, đây
là bảng so-sánh thật):

| Bản FREE (đang dùng)                  | Bản ĐẦY-ĐỦ                              |
|----------------------------------------|------------------------------------------|
| 1 sàn ({{san}})                        | TikTok Shop + Shopee cùng lúc            |
| 2 tab: Nhập đơn, Lãi thật/đơn          | Đủ 5 tab: + Cấu-hình phí đa-sàn, Đối-soát, Dashboard |
| Tự cộng tay khi bán nhiều sàn          | Đối-soát tự-động giữa các sàn — không cần cộng tay |
| Xem lãi từng đơn                       | Dashboard tổng-quan — nhìn lãi/lỗ theo ngày/tuần/tháng |

Giá: 149.000đ (giá gốc 179.000đ) — thanh-toán 1 lần, dùng vĩnh-viễn, không
phí ẩn, không gia-hạn hàng tháng.

🎁 Thêm vào đơn (tuỳ-chọn): Mẫu tính thuế khoán (TT40) + bảng theo-dõi
tồn-kho — chỉ +49.000đ khi mua kèm bản đầy-đủ (giá lẻ 79.000đ nếu mua
riêng). Lưu-ý: mẫu tính thuế là MẪU tham-khảo, cần kế-toán rà trước khi
dùng để kê-khai chính-thức.

Vì bạn đã dùng bản free, mình dành riêng mã ưu-đãi cho bạn:

  Mã: [CẦN CEO ĐIỀN — ví-dụ FREE2FULL] — giảm [CẦN CEO ĐIỀN mức giảm/đ]
  Áp-dụng khi thanh-toán, có-hạn tới [CẦN CEO ĐIỀN ngày hết-hạn].

BỘMẪU không cam-kết tăng doanh-thu hay lợi-nhuận — Sheet là công-cụ giúp
bạn THẤY RÕ con số lãi/lỗ thật của chính mình để tự ra quyết-định tốt hơn;
kết-quả phụ-thuộc số-liệu bạn nhập và cách bạn vận-hành.
```

**CTA:** `Nâng-cấp bản đầy-đủ — 149.000đ` → `landing.html#gia`.

**Footer hủy-nhận (dùng chung — xem cuối file).**

---

## Chạm #4 — Ngày 7 (cuối) — Email + Zalo (nhắc ưu-đãi + FAQ + CTA cuối)

### 4a. Email

**Tiêu-đề (A/B):**
- A. `Ưu-đãi 149.000đ sắp kết-thúc — {{ho_ten}} còn phân-vân gì không?`
- B. `3 câu hỏi trước khi bạn quyết-định (đọc 2 phút)`
- C. `Ngày cuối nhận ưu-đãi bản đầy-đủ đa-sàn`

**Preheader:** 3 câu hỏi nhà-bán hay hỏi mình nhất — trả-lời nhanh trước khi ưu-đãi kết-thúc.

**Thân bài:**

```
Chào {{ho_ten}},

Đây là email cuối trong chuỗi 7 ngày này. Mã ưu-đãi 149.000đ (giá gốc
179.000đ) dành riêng cho người đã dùng bản free như bạn sẽ hết-hạn vào
[CẦN CEO ĐIỀN ngày hết-hạn] — nếu bạn đang cân-nhắc, đây là vài câu hỏi
mình hay được hỏi nhất:

Hỏi: Tôi không rành Excel/Sheet, dùng được không?
Đáp: Được — công-thức đã dựng sẵn, bạn chỉ nhập số-liệu đơn-hàng và khai
phí sàn 1 lần, phần còn lại Sheet tự tính.

Hỏi: Mua xong nhận hàng thế nào?
Đáp: Đây là sản-phẩm số — sau khi thanh-toán, bạn nhận link bản Sheet
cá-nhân-hoá riêng (chỉ mình bạn dùng được) để "Tạo bản-sao" về Drive của
mình, dùng ngay.

Hỏi: Có cam-kết tăng doanh-thu/lợi-nhuận không?
Đáp: Không cam-kết tăng doanh-thu hay lợi-nhuận — đây là công-cụ giúp bạn
thấy rõ con số lãi/lỗ thật để tự ra quyết-định tốt hơn; kết-quả phụ-thuộc
cách bạn vận-hành.

Nếu bạn chưa sẵn-sàng lúc này cũng không sao — bản free vẫn dùng được
bình-thường, và bạn luôn có-thể quay lại bản đầy-đủ bất-cứ lúc nào tại
link bên dưới (giá có-thể không còn ưu-đãi như hôm nay).
```

**CTA:** `Nhận bản đầy-đủ — 149.000đ` → `landing.html#gia`.

**Footer hủy-nhận (dùng chung — xem cuối file).**

### 4b. Zalo (gửi cùng ngày hoặc cách email vài giờ)

```
Chào {{ho_ten}} 👋
Đây là tin nhắn cuối trong chuỗi hỗ-trợ 7 ngày của mình. Ưu-đãi 149.000đ
cho bản đầy-đủ đa-sàn (đối-soát + dashboard, dành riêng cho người đã dùng
bản free) sẽ hết-hạn vào [CẦN CEO ĐIỀN ngày hết-hạn].

Nếu bạn còn câu hỏi gì trước khi quyết-định, cứ nhắn mình trực-tiếp ở đây,
mình trả-lời ngay.

👉 landing.html#gia

(Gõ "DỪNG" nếu không muốn nhận tin nữa — mình xử-lý ngay, không cần chờ.)
```

---

## Footer hủy-nhận dùng chung (chèn cuối MỌI email ở trên)

```
—
Bạn nhận được email này vì đã để lại email/Zalo để nhận "Sheet Tính Lãi
Thật" tại landing page BỘMẪU và đồng-ý nhận email/tin về sản-phẩm & ưu-đãi
liên-quan.

Không muốn nhận email từ BỘMẪU nữa? [Hủy nhận email] — yêu-cầu được xử-lý
trong vòng 24 giờ, theo Luật Bảo-vệ dữ-liệu cá-nhân (Luật số 91/2025/QH15)
và Nghị-định 356/2025/NĐ-CP.

BỘMẪU — Email: hi@bomau.vn [CẦN CEO xác-nhận domain/email thật trước khi
gửi] · Zalo OA: zalo.me/xxxxxxxxxxxxxxxxx [CẦN CEO điền link Zalo OA thật]
```

---

## Tự-kiểm trước khi bàn-giao CEO duyệt

- [x] Đủ **5 chạm** (#0→#4), mỗi chạm có copy đầy-đủ dùng được ngay (không phải outline).
- [x] Chạm #1, #2 **không chào giá** — đúng nguyên-tắc "giáo-dục trước, bán sau".
- [x] Chạm #2 dùng ví-dụ **minh-hoạ có đánh-dấu rõ**, không phải case/review thật.
- [x] **0 câu vi-phạm Điều 8 khoản 9 Luật Quảng cáo 2012** — không có "chắc-chắn lãi to/tăng gấp đôi doanh-thu/đảm-bảo ra đơn"; mọi chỗ nói về kết-quả đều kèm câu phủ-định cam-kết ("không cam-kết tăng doanh-thu/lợi-nhuận").
- [x] Mỗi email có **footer hủy-nhận**; mỗi Zalo có dòng **"gõ DỪNG"**.
- [x] Token cá-nhân-hoá `{{ho_ten}}` / `{{san}}` dùng xuyên-suốt.
- [x] Mọi chỗ cần số/link/ngày CEO tự quyết đều đánh dấu `[CẦN CEO ĐIỀN]` — không tự bịa mức giảm giá hay ngày hết-hạn.
- [ ] **CHƯA gửi cho khách thật** — đây vẫn là bước NEED-APPROVAL, chờ CEO duyệt nội-dung + xác-nhận công-cụ (xem cảnh-báo đầu file).
