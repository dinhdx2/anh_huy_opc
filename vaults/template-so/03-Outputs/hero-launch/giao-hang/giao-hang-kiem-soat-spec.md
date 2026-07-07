# A6 — Spec giao-hàng kiểm-soát cho hero Google Sheet (chống copy/chia-sẻ lậu)

> **TL;DR:** Giao hero bằng cách **KHÔNG BAO GIỜ public bản gốc** — sau khi SePay xác-nhận thanh-toán, hệ-thống tự tạo **1 bản-copy riêng cho từng khách** (owner vẫn là DN), gắn **watermark ẩn** (mã đơn + email) để truy-vết rò-rỉ, rồi cấp quyền cho đúng email khách. Đây là **SPEC để dựng** (chưa code/chưa chạy) — 3 phương-án kỹ-thuật kèm đánh-đổi, và **thừa-nhận thẳng**: vì khách cần **edit** để nhập số liệu, không có khoá kỹ-thuật nào chặn tuyệt-đối việc copy nội-dung ra file khác — hào thật là watermark truy-vết + tốc-độ cập-nhật + pháp-lý, không phải bản-thân file.

---

## 0. Nguyên-tắc cứng (không đổi dù chọn phương-án nào)

1. **Bản GỐC (master) không bao giờ ở chế-độ "Anyone with link"** — quyền chia-sẻ của master set **"Restricted"**, chỉ tài-khoản Drive của DN (owner) truy-cập được. Đây là lớp phòng-thủ số 1: không ai copy được master nếu không đứng tên DN.
2. Khách **KHÔNG BAO GIỜ nhận link master** — chỉ nhận link tới **bản-copy cá-nhân-hoá** được tạo riêng cho đơn của họ (1 file/1 khách, đặt tên `BoMau_DoiSoat_<mã đơn>`).
3. Mọi bản-copy đều **owner = tài-khoản DN**, khách chỉ được cấp quyền **Editor trên bản-copy đó** (không phải Owner) — DN giữ quyền thu-hồi truy-cập sau này nếu phát-hiện rò-rỉ/lạm-dụng (revoke share).
4. Mỗi bản-copy có **watermark ẩn** (mã đơn + email + thời-điểm cấp) để khi phát-hiện file bị rao bán/chia-sẻ công-khai, DN tra ra **khách nào làm rò-rỉ** → áp-dụng điều-khoản sử-dụng (nếu có) + gửi yêu-cầu gỡ.
5. ⚠️ **Giới-hạn thật (không overclaim):** hero là **công-cụ khách cần NHẬP số liệu** (không phải file chỉ-xem) → khách bắt-buộc có quyền Editor. Một khách có quyền Editor **luôn có thể** chọn-tất-cả → copy-paste nội-dung sang 1 Google Sheet mới do họ tạo, hoặc `File > Tải xuống > .xlsx` — **không kỹ-thuật nào trong Google Sheets chặn được thao-tác này 100%**. Do đó cơ-chế dưới đây là **giảm-nhẹ + truy-vết**, KHÔNG phải "bất-khả-xâm-phạm". Hào bền-vững thật-sự = cập-nhật liên-tục (bản lậu cũ dần lỗi-thời) + thương-hiệu/list-khách + hỗ-trợ/cộng-đồng (xem `products.md` mục Rủi-ro hàng-hoá-hoá).

---

## 1. Luồng tổng-quan (end-to-end)

```
Khách bấm "Mua ngay" trên landing
        │
        ▼
Thanh-toán qua SePay (QR chuyển-khoản ngân-hàng, ~0% phí)
        │
        ▼
SePay gửi WEBHOOK xác-nhận giao-dịch THÀNH-CÔNG (có mã đơn, số tiền, nội-dung CK chứa email/mã)
        │
        ▼
Backend giao-hàng (Apps Script Web App / hàm serverless) nhận webhook
        │
        ├─ 1) Gọi Drive API: DriveApp.makeCopy(masterFile, tên = "BoMau_DoiSoat_<mã đơn>")
        ├─ 2) Ghi watermark ẩn vào bản-copy (mã đơn, email khách, timestamp) — mục 3
        ├─ 3) Set quyền chia-sẻ bản-copy: CHỈ email khách, role = Editor (owner vẫn là DN)
        └─ 4) Trả link bản-copy về để giao khách (trang "Cảm ơn" sau thanh-toán + email xác-nhận
             đơn hàng theo quy-trình chuẩn của cổng thanh-toán — việc GỬI thật thuộc bước vận-hành
             sau này, KHÔNG nằm trong phạm-vi spec này)
        │
        ▼
Khách mở link → thấy đúng 1 bản Google Sheet của riêng mình → dùng ngay
```

**Lưu-ý ranh-giới:** spec này CHỈ mô-tả cơ-chế; việc **thật-sự gửi email/tin cho khách** là hành-động cần CEO duyệt & vận-hành thật (ngoài phạm-vi tài-liệu chuẩn-bị). Việc **tạo tài-khoản SePay/Apps Script và bật webhook thật** cũng cần CEO/người thực-thi làm tại thời-điểm triển-khai.

---

## 2. Ba phương-án kỹ-thuật (đánh-đổi)

### Phương-án A — Tự-động hoàn-toàn (webhook → Apps Script Web App → Drive API)
- **Cách làm:** Deploy 1 Google Apps Script làm Web App (endpoint nhận webhook SePay) → script dùng `DriveApp.makeCopy()` (built-in) hoặc **Advanced Drive Service** (để set quyền chi-tiết hơn: chỉ-định editor theo email, tắt "download/print/copy" ở role viewer nếu có) → ghi watermark → trả link.
- **Ưu:** Chạy 24/7 không cần founder can-thiệp; scale tốt khi đơn nhiều; đúng kiến-trúc "landing riêng + SePay ~0%" đã chốt trong `strategy.md`.
- **Nhược:** Cần viết + test script (Apps Script quota: 20.000 file-copy/ngày cho tài-khoản cá-nhân, dư cho GĐ1); cần thiết-lập OAuth/scope Drive đúng; founder solo phải tự code hoặc thuê ngoài.
- **Khi nào chọn:** Sau khi đã có vài chục đơn ổn-định, hoặc ngay từ đầu nếu founder tự tin code Apps Script (không tốn phí nền-tảng, nằm trong hệ Google Workspace/Drive miễn-phí).
- Tham-khảo kỹ-thuật: Google Apps Script Drive Service — `DriveApp.getFileById(id).makeCopy(tên, thư-mục-đích)`; Advanced Drive Service cho set permission chi-tiết theo email. *(Nguồn: Google Developers — Apps Script Drive Service/Advanced Drive Service, xem mục Nguồn cuối file.)*

### Phương-án B — Bán-tự-động (thủ-công có trợ-giúp script) — **khuyến-nghị cho GĐ1 (đơn còn ít)**
- **Cách làm:** SePay báo giao-dịch mới qua **thông-báo (app SePay/Zalo/email) cho founder** (không cần webhook backend riêng) → founder mở 1 **Google Apps Script "công-cụ nội-bộ"** (chạy trong chính Google Sheet quản-lý đơn-hàng của founder, dạng menu tuỳ-biến "Tạo bản-copy cho khách") → nhập mã đơn + email khách → bấm chạy → script tự `makeCopy` + ghi watermark + set quyền → founder copy link, gửi khách thủ-công qua kênh giao-hàng đã chọn (email/Zalo — bước gửi này là vận-hành thật, ngoài phạm-vi spec).
- **Ưu:** Không cần dựng webhook/Web App public (đơn-giản, an-toàn hơn cho founder solo mới); vẫn tự-động hoá phần tốn công nhất (tạo copy + watermark + set quyền) — chỉ 30 giây/đơn thay vì làm tay hoàn-toàn.
- **Nhược:** Founder phải trực trong giờ hành-chính để xử-lý đơn (chấp-nhận được ở GĐ1: đơn còn ít, chưa cần 24/7).
- **Khi nào chọn:** **Ngay từ ngày ra mắt** — độ phức-tạp thấp, đủ kiểm-soát, phù-hợp quy-mô "vài đơn/ngày" của GĐ1. Nâng-cấp lên Phương-án A khi volume đủ lớn để founder không xử-lý kịp thủ-công.

### Phương-án C — Dịch-vụ giao SP số bên-thứ-3 (Gumroad/SendOwl/Payhip…)
- **Cách làm:** Dùng nền-tảng giao hàng số có sẵn để phát link/license-key, nhưng các nền-tảng này được thiết-kế cho **file tải-về (PDF/zip)**, không có cơ-chế "tạo bản Google Sheet copy cá-nhân-hoá" sẵn — vẫn phải tự nối thêm Apps Script ở giữa.
- **Ưu:** Có sẵn hạ-tầng license-key, chống refund-fraud, analytics.
- **Nhược:** Thêm phí % (Gumroad ~10% theo `products.md`) — **mâu-thuẫn với quyết-định đã chốt** "kênh chính = landing riêng + SePay ~0%" (`strategy.md`); các nền-tảng này chỉ nên dùng làm **kênh discovery phụ** (đã note trong Brain), KHÔNG phải kênh giao-hàng chính.
- **Khuyến-nghị:** KHÔNG chọn cho kênh chính; chỉ cân-nhắc nếu sau này niêm-yết ở chợ quốc-tế (đã hoãn, xem `state.md` checklist mục 8).

**→ Khuyến-nghị: bắt đầu Phương-án B (GĐ1) → nâng Phương-án A khi đơn ổn-định/tăng.**

---

## 3. Cơ-chế watermark ẩn (chi-tiết)

**Mục-đích:** không ngăn copy (đã thừa-nhận ở mục 0.5), mà **để lại dấu-vết** giúp truy khách-nào-làm-rò-rỉ khi phát-hiện file bị rao bán công-khai (group Facebook, chợ đồ số, v.v.).

| Lớp | Cách làm | Ghi-chú |
|---|---|---|
| **Tab ẩn `_meta`** | Thêm 1 sheet-tab tên `_meta`, chứa: mã đơn, email khách, thời-điểm cấp, ID file-copy. Ẩn tab bằng `Right-click > Hide sheet`. | Ẩn chỉ tránh nhìn thấy tình-cờ, **không phải bảo-mật** — người biết Sheets có thể "Unhide" dễ-dàng. Dùng làm lớp gợi-ý, không phải lớp chính. |
| **Protect range "chỉ owner"** | `Data > Protect sheets and ranges` trên tab `_meta`, giới-hạn edit = "Only you" (chỉ tài-khoản DN, dù khách có role Editor toàn file). | Ngăn khách **vô-tình xoá/sửa** watermark trong khi dùng bản-copy hiện-tại. **KHÔNG** ngăn được nếu khách chủ-động `File > Make a copy` toàn-bộ file — bản copy MỚI đó khách sẽ là owner và protection không còn hiệu-lực (giới-hạn kỹ-thuật thật của Google Sheets, đã kiểm-tra qua tài-liệu Google — **cần TEST tay lại hành-vi này trước khi phụ-thuộc hoàn-toàn**, vì Google có thể thay hành-vi theo thời-gian). |
| **Watermark "câm" trong công-thức** | Nhúng mã-đơn dạng comment/note ẩn trong 1-2 công-thức của tab chính (vd `=SUM(...)&IF(FALSE,"<mã_đơn>","")`) — vẫn tính đúng, nhưng chứa chuỗi định-danh nếu ai đó paste công-thức nguyên-văn khi rao bán. | Lớp bổ-trợ, hiệu-quả thấp nếu khách paste **giá-trị** (paste-special values) thay vì công-thức. |
| **Watermark hình-ảnh/QR nhỏ trong logo/footer tab hướng-dẫn** | Chèn 1 QR nhỏ hoặc mã ẩn trong ảnh logo ở tab "Hướng dẫn" — QR mã-hoá mã đơn, decode được nếu cần xác-minh nguồn khi tìm thấy file/ảnh chụp màn-hình bị rao bán. | Hữu-ích cả khi rò-rỉ dạng **ảnh chụp màn-hình** (không phải file) — trường-hợp này text-watermark ẩn không giúp được vì ảnh chỉ chụp phần nhìn-thấy. |
| **Điều-khoản sử-dụng (ToS) trong tab đầu-tiên** | Ghi rõ: "Bản quyền thuộc BộMẫu — không được bán lại/chia-sẻ công-khai; vi-phạm bị thu-hồi quyền truy-cập + xử-lý theo điều-khoản." | Không chặn kỹ-thuật, nhưng là căn-cứ pháp-lý tối-thiểu khi cần yêu-cầu gỡ nội-dung bị rao bán (DMCA-style report tới nền-tảng lưu-trữ nơi phát-hiện rò-rỉ). **MẪU — cần luật-sư rà trước khi công-bố chính-thức.** |

---

## 4. Kiểm-soát bổ-sung ở tầng chia-sẻ (Drive/Sheets settings)

- **Tắt "Editors can change permissions and share"** trên bản-copy → khách (Editor) **không thể tự thêm người khác** vào file hoặc đổi link thành "Anyone with the link" — chặn kiểu rò-rỉ phổ-biến-nhất (khách vô-tình/cố-ý bấm "Share" rồi đổi thành public).
- **Tắt tuỳ-chọn download/print/copy** cho vai-trò Viewer/Commenter (không áp-dụng cho Editor — xem giới-hạn mục 0.5) → hữu-ích nếu sau này có bản "xem trước" công-khai (preview) trước khi mua, tránh preview bị tải trọn.
- **Theo-dõi Activity Dashboard / Version history** của từng bản-copy (Google Sheets có sẵn `File > Version history` và `Activity dashboard` cho tài-khoản Workspace) → nếu thấy 1 file bị truy-cập từ nhiều tài-khoản Google lạ ngoài email khách đã cấp → dấu-hiệu link đã bị forward/rò-rỉ → founder **thu-hồi quyền truy-cập (revoke)** vì owner vẫn là DN.
- **Không tặng kèm license "resell/redistribute".** Ghi rõ trên landing + tab đầu file: "1 giấy-phép = 1 người dùng nội-bộ, không bán lại/redistribute."

---

## 5. Checklist triển-khai (thứ-tự làm khi CEO/người triển-khai bắt tay dựng thật)

1. [ ] Tạo file master trên tài-khoản Drive của DN, set sharing = **Restricted** (chỉ owner).
2. [ ] Thêm tab `_meta` (ẩn) + ToS tab đầu-tiên + watermark câm trong công-thức + QR trong logo hướng-dẫn.
3. [ ] Set `Protect sheets and ranges` cho tab `_meta` = "Only you".
4. [ ] Viết Apps Script "công-cụ nội-bộ" (Phương-án B): menu tuỳ-biến `makeCopy` + ghi watermark + set quyền editor theo email.
5. [ ] Test tay: tạo 2-3 bản-copy giả-lập, xác-nhận (a) chỉ email chỉ-định mở được, (b) watermark tồn-tại đúng, (c) hành-vi khi khách tự "Make a copy" lần 2 (kiểm-chứng protection có mất không — ghi lại kết-quả thật, đừng giả-định).
6. [ ] Nối webhook SePay → xác-nhận thanh-toán → trigger bước 4 (khi lên Phương-án A hoặc bán-tự-động B).
7. [ ] Soạn ToS/điều-khoản sử-dụng bản đầy-đủ (giao **luật-sư/chuyên-gia rà** trước khi công-bố chính-thức) — file này mới là KHUNG, chưa phải bản pháp-lý cuối.
8. [ ] Vận-hành thử với 3-5 đơn thật đầu-tiên trước khi scale ads (khớp cổng NO-GO đã LOCKED trong `decisions-log.md`).

---

## 6. Rủi-ro còn lại (thành-thật, không che)

1. **Khách vẫn có thể copy-paste giá-trị sang file mới** — không có khoá kỹ-thuật nào chặn 100% với 1 công-cụ cần Editor. Giảm-thiểu = giá thấp (149-179k không đáng công đi lậu) + cập-nhật liên-tục (bản cũ dần lỗi-thời so-với sàn/luật đổi) + hào thương-hiệu/hỗ-trợ.
2. **Watermark có-thể bị gỡ nếu người rò-rỉ cố-ý và biết kỹ-thuật** (đặc-biệt nếu họ đọc chính spec này hoặc tự mò tab ẩn). Không nên PR công-khai chi-tiết cơ-chế chống-lậu.
3. **Google có thể đổi hành-vi permission/protection theo thời-gian** — mọi khẳng-định về "protection có/không giữ khi copy" **PHẢI test tay lại** trước khi launch thật, không dựa hoàn-toàn vào tài-liệu (đã ghi rõ ở mục 3).
4. **Quy-mô Apps Script quota** (20.000 lượt copy/ngày với tài-khoản cá-nhân — [benchmark kỹ-thuật, cần xác-minh lại số quota hiện-hành khi triển-khai vì Google có thể đổi]) — dư cho GĐ1, cần theo-dõi khi scale.

---

## Nguồn tham-khảo (đã tra-cứu, không bịa số)
- Google for Developers — *Drive Service | Apps Script*: `DriveApp`/`makeCopy()` API. https://developers.google.com/apps-script/reference/drive
- Google for Developers — *Advanced Drive Service | Apps Script* (set quyền/permission chi-tiết qua Drive API trong Apps Script). https://developers.google.com/apps-script/advanced/drive
- BizStream — *How to Copy Google Drive Files Using Apps Script* (hướng-dẫn thực-hành `makeCopy`, đặt quyền, đổi tên). https://www.bizstream.com/blog/how-to-copy-google-drive-files-using-apps-script/
- SePay — *SePay.vn* (chuyển-khoản ngân-hàng tự-động qua webhook, không thu phí theo %, quan-sát 2026-07-07). https://sepay.vn/ · https://sepay.vn/bang-gia.html — ⚠️ [benchmark — cần CEO xác-minh trực-tiếp bảng-giá mới nhất & điều-kiện gói miễn-phí khi đăng-ký thật, vì trang giá có-thể đổi].
