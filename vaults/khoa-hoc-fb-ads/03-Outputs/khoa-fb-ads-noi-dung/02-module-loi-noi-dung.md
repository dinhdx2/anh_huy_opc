# MODULE 1 (LÕI) — Nền-móng AN-TOÀN: Dựng Business Suite/BM đúng cách, không lo khóa nick

> **Nội-dung học** (student-facing), kiểu **cầm tay chỉ việc**. Nội-dung GỐC. Mỗi bài: **Mục-tiêu · Nội-dung · Thao-tác · Cạm-bẫy · Chốt.**
> Ranh-giới telos: dạy **hợp-lệ & an-toàn** (KHÔNG VIA/nick mua/lách policy).
> ⚠️ **Giao-diện Meta đổi liên-tục** → thao-tác quay theo giao-diện thực-tế; nắm **nguyên-lý** (bền), không học vẹt vị-trí nút. Số minh-hoạ gắn `[benchmark minh-hoạ]`.

## Vì sao Module này QUAN-TRỌNG NHẤT
Nỗi-sợ #1 của người mới: **"chạy vài hôm là bay tài-khoản, mất tiền mất công."** ~80% ca khóa nick `[benchmark minh-hoạ]` đến từ **nền-móng dựng sai** (danh-tính không rõ, dùng nick mua, thiếu 2FA, chạy nóng) — KHÔNG phải "xui". Dựng đúng **1 lần** = chạy bền về sau. Bỏ bài này để "chạy cho nhanh" = đặt tiền lên bàn cược.

---

## Bài 1.1 — Hiểu hệ-sinh-thái Meta (bản-đồ trước khi bấm)

**Mục-tiêu:** Vẽ được sơ-đồ 5 lớp và hiểu mỗi lớp để làm gì — để không thao-tác mù.

**Nội-dung:**
Meta xếp tài-sản theo 5 lớp, lồng nhau như hộp trong hộp:
1. **Trang cá-nhân (Personal Profile)** — con người thật, là "chìa khoá" đăng-nhập. KHÔNG phải nơi chạy ads.
2. **Business Portfolio / Business Manager (BM)** — "két sắt" chứa mọi tài-sản kinh-doanh. Tất-cả nằm trong đây.
3. **Tài-khoản quảng-cáo (Ad Account)** — nơi **tiêu tiền** chạy ads.
4. **Trang (Page)** — bộ mặt thương-hiệu; quảng-cáo hiển-thị dưới tên Page.
5. **Pixel / Dataset** — "mắt đo" hành-vi khách trên web/landing (ai xem, thêm giỏ, mua).
> Ghép lại: *Ad Account chạy quảng-cáo cho Page, đo bằng Pixel, tất-cả cất trong BM, mở khoá bằng Trang cá-nhân.*

**Thao-tác:**
1. Lấy giấy vẽ 5 ô lồng nhau theo thứ-tự trên (làm 1 lần, hiểu là nhớ mãi).
2. Mở `business.facebook.com` (Meta Business Suite) → dạo qua từng khu, đối-chiếu với sơ-đồ.

**Cạm-bẫy:** Chạy ads bằng nút **"Boost Post"** trên trang cá-nhân → không có Pixel, không kiểm-soát, khó scale, dễ dính lỗi. **Luôn chạy TRONG BM.**

**Chốt:** Ba tài-sản bắt-buộc phải là **CỦA BẠN**: BM · Ad Account · Page. Hiểu sơ-đồ 5 lớp là hết sợ "lạc" trong Ads Manager.

---

## Bài 1.2 — Chuẩn-bị "SẠCH" (quyết-định sống-còn về an-toàn)

**Mục-tiêu:** Setup danh-tính & môi-trường để Meta **tin bạn là người thật, kinh-doanh thật** — nền của mọi thứ về sau.

**Nội-dung:**
Meta chấm "độ tin" của bạn ngay từ đầu. 4 việc làm bạn "sạch":
1. **Trang cá-nhân thật, đã "chín"** (có lịch-sử dùng bình-thường, bạn-bè, hoạt-động) làm admin — ĐỪNG dùng nick vừa lập hôm-qua để quản BM (cờ đỏ ngay).
2. **Email ổn-định** (email doanh-nghiệp hoặc email chính bạn dùng lâu) — không email tạm 10 phút.
3. **BẬT 2FA (xác-thực 2 lớp)** cho tài-khoản admin — **bắt-buộc**, đây là ổ khoá chống mất tài-khoản.
4. **1 thiết-bị + mạng ổn-định** cho admin — đừng đăng-nhập từ 5 điện-thoại/wifi lạ trong 1 ngày (trông như bị hack).

⚠️ **KHÔNG dùng "VIA" / nick mua / tài-khoản thuê để né kiểm-duyệt.** Vì:
- **Trái Điều-khoản Meta** → khóa bất-cứ lúc nào, **mất sạch tài-sản + tiền đang chạy** (nhiều người mất tài-khoản đúng lúc camp đang ra đơn tốt nhất).
- **Trái telos khóa này** — ta xây bền, không đánh-nhanh-rút-gọn.
- **Rủi-ro dữ-liệu khách** nằm trên tài-sản không chính-chủ.

**Thao-tác (làm ngay, ~10 phút):**
1. Vào Cài-đặt Facebook cá-nhân → **Bảo-mật & đăng-nhập** → **Bật xác-thực 2 yếu-tố** (2FA) (ưu-tiên app Authenticator hơn SMS).
2. Kiểm email đang gắn là email dùng lâu-dài.
3. Ghi ra: bạn sẽ quản BM từ **1 điện-thoại/máy-tính cố-định** nào.

**Cạm-bẫy:** "Mượn" BM/nick người khác cho tiện → khi họ mất quyền hoặc đổi ý, **bạn mất theo**, không kêu ai được.

**Chốt:** Checklist "sạch" 4 mục (nick chín · email ổn · 2FA bật · thiết-bị cố-định) phải xanh **trước** khi sang 1.3. Đây là bảo-hiểm rẻ nhất cho tài-khoản.

---

## Bài 1.3 — Tạo Business Portfolio (BM) đúng cách

**Mục-tiêu:** Có **1 BM chính-chủ**, đặt tên & khai thông-tin đúng ngay từ đầu.

**Nội-dung:** BM là "két sắt" — sai ở đây kéo theo mọi thứ. 2 điểm dễ sai nhất:
- **Đặt tên:** KHÔNG dùng tên chứa **"Facebook / Meta / Ads / Quảng-cáo / Kiếm tiền"** hay từ nhạy-cảm → dễ bị gắn cờ + **khó kháng-nghị** về sau. Dùng **tên thương-hiệu thật** của bạn (vd shop "Áo Nhà Mình" → BM tên *"Ao Nha Minh"*, không phải *"Chạy Ads Kiếm Tiền"*).
- **Thông-tin:** khai đúng tên, email, thông-tin doanh-nghiệp — càng khớp thực-tế càng dễ **xác-minh doanh-nghiệp (Business Verification)** sau này (mở hạn-mức + tăng độ tin).

**Thao-tác:**
1. `business.facebook.com` → tạo **Business Portfolio** mới.
2. Điền **tên brand thật** + email ổn-định + thông-tin cơ-bản.
3. (Khi có giấy-tờ) cân-nhắc **Business Verification** để tăng hạn-mức & độ tin.

**Cạm-bẫy:** Tạo **nhiều BM lung-tung một lúc** từ 1 nick mới → nghi-vấn spam, khóa cả loạt. **Tạo 1 cái, làm cho chuẩn.**

**Chốt:** BM là tài-sản lớn nhất của bạn trên Facebook — đặt tên brand + danh-tính đúng ngay từ đầu, đừng để phải làm lại.

---

## Bài 1.4 — Ad Account + Page + Thanh-toán

**Mục-tiêu:** Có nơi tiêu tiền (Ad Account) gắn đúng Page + thẻ thanh-toán chính-chủ.

**Nội-dung:** 3 thứ phải khớp nhau và khớp với bạn:
- **Page** — bộ mặt SP của bạn (Page thật, có nội-dung, không trống trơn).
- **Ad Account** — chọn đúng **múi-giờ + tiền-tệ (VND)** ngay lúc tạo: **KHÔNG sửa được sau**, sai là phải tạo cái mới → lệch toàn-bộ báo-cáo.
- **Thanh-toán** — thẻ/ví **đúng tên bạn**; thẻ "lạ"/không chính-chủ = cờ rủi-ro.

**Thao-tác:**
1. Trong BM → tạo/kết-nối **Page** SP của bạn (đăng vài bài trước cho Page "có sống").
2. Tạo **Ad Account** → đặt **Timezone: (GMT+7) + Currency: VND** → kiểm 2 lần trước khi xác-nhận.
3. Thêm **phương-thức thanh-toán** đúng tên chủ.

**Cạm-bẫy:** Chọn sai timezone/tiền-tệ (rất hay gặp) → số-liệu lệch giờ, khó đối-chiếu; dùng thẻ không đúng tên → dễ bị hạn-chế thanh-toán.

**Chốt:** Ad Account đúng **VND + GMT+7**, Page thật, thẻ chính-chủ = phần "khung xương" đã xong.

---

## Bài 1.5 — Cài Pixel/Dataset + kiểm bằng Events Manager

**Mục-tiêu:** Gắn "mắt đo" để biết ai xem/thêm-giỏ/mua — **nền của tối-ưu (M4) và tính lãi (M5)**.

**Nội-dung:** Không có Pixel = chạy mù, không biết ai mua, không tối-ưu được. Thời 2026 mất cookie → nên bật thêm **Conversions API (CAPI)** để đo chính-xác hơn (gửi sự-kiện từ server, không chỉ từ trình-duyệt).

**Thao-tác:**
1. Vào **Events Manager** → tạo **Dataset/Pixel** mới.
2. Gắn Pixel vào website/landing: dán mã, hoặc dùng tích-hợp sẵn nếu bạn dùng nền-tảng (Ladipage/Haravan/Shopify…).
3. (Khuyến-nghị) bật **CAPI** — nhiều nền-tảng có nút bật sẵn.
4. Dùng **Test Events** kiểm các sự-kiện `ViewContent / AddToCart / Lead / Purchase` **bắn đúng** khi bạn thao-tác thử trên trang.

⚠️ **Consent (đồng-ý dữ-liệu):** thu dữ-liệu qua Pixel phải có **cơ-sở hợp-pháp + thông-báo theo Luật 91/2025** (nối việc Gate-0 pháp-lý) — **không bắn pixel lén**.

**Cạm-bẫy:** Không **Test Events** → chạy vài ngày mới phát-hiện pixel hỏng, mất tiền + mất dữ-liệu học-máy; đặt sai sự-kiện chuyển-đổi (đo "xem" tưởng "mua").

**Chốt:** **Pixel bắn đúng (đã Test Events) + có consent** = mới được phép chạy ads. Đây là "mắt" của cả cỗ-máy.

---

## Bài 1.6 — Cấu-hình AN-TOÀN & "warm-up" (làm ấm tài-khoản)

**Mục-tiêu:** Giảm tối-đa rủi-ro khóa trong 1–2 tuần đầu (giai-đoạn nhạy-cảm nhất).

**Nội-dung:** Tài-khoản mới như **xe mới — phải chạy rốt-đa**, không đạp ga hết cỡ ngay. 5 việc:
1. **2FA** mọi admin (nhắc lại — quan-trọng nhất).
2. **Phân-quyền tối-thiểu** — chỉ cấp quyền vừa đủ; đừng cấp full cho người lạ/freelancer.
3. **Đăng-nhập từ thiết-bị/IP ổn-định** — tránh nhảy nhiều nơi.
4. **Warm-up ngân-sách:** bắt đầu **nhỏ** — ví-dụ **~50.000–100.000đ/ngày** `[benchmark minh-hoạ]` vài ngày đầu, rồi **tăng từ-từ** (đừng nhân đôi liên-tục trong 1 ngày). Cho tài-khoản + hệ học-máy "làm quen".
5. **Creative & landing sạch policy** trước khi bật (nối M3 + Gate-0).

**Thao-tác:**
1. Kiểm lại 2FA + danh-sách người có quyền (gỡ ai không cần).
2. Đặt **ngân-sách ngày nhỏ** cho camp đầu (con-số cụ-thể học ở M4).
3. Lên kế-hoạch tăng ngân-sách **theo bậc, cách ngày**, không giật cục.

**Cạm-bẫy:** Nhảy vào chạy **5–10 triệu/ngày ngay từ tài-khoản mới** → hành-vi bất-thường → cờ đỏ → khóa. (Đây là lỗi khiến nhiều người "đốt" tài-khoản đầu-tiên.)

**Chốt:** Nick mới thì **warm-up**: nhỏ → ổn-định → tăng dần. Kiên-nhẫn 1–2 tuần đổi lấy tài-khoản sống lâu.

---

## Bài 1.7 — Checklist "trước đồng đầu-tiên" + Bảng lỗi khóa nick

**Mục-tiêu:** Có 1 cổng go/no-go rõ-ràng trước khi chi tiền, và thuộc lòng các lỗi gây khóa.

**Nội-dung — Checklist go/no-go (phải xanh HẾT mới chạy):**
- [ ] Trang cá-nhân thật + **2FA**
- [ ] **BM chính-chủ**, tên brand hợp-lệ
- [ ] Ad Account đúng **VND + GMT+7**
- [ ] **Page thật** + thẻ **chính-chủ**
- [ ] **Pixel bắn đúng** (đã Test Events) + **consent** (Luật 91/2025)
- [ ] Creative/landing **sạch claim-cấm** (M3)
- [ ] **Ngân-sách warm-up nhỏ**

**Bảng lỗi hay gặp → cách tránh (thuộc lòng):**
| Lỗi khiến khóa/hạn-chế | Hậu-quả | Cách tránh |
|---|---|---|
| Dùng VIA/nick mua/thuê | Mất sạch tài-sản + tiền | Xây tài-sản chính-chủ (Bài 1.2) |
| Thiếu 2FA, đăng-nhập IP lạ | Bị hack/khóa | Bật 2FA, 1 thiết-bị ổn-định |
| Đổ tiền lớn ngày đầu | Cờ bất-thường → khóa | Warm-up nhỏ (Bài 1.6) |
| Copy "giàu nhanh/đảm-bảo" | Từ-chối ad + gắn cờ | Cổng claim-cấm (M3) |
| Landing thiếu chính-sách/consent | Vi-phạm + từ-chối | Gate-0 pháp-lý (Luật 91/2025) |
| Tên BM chứa từ cấm | Khó kháng-nghị | Dùng tên thương-hiệu (Bài 1.3) |

**Thao-tác:** in checklist này ra/ghim màn-hình; **chỉ khi đủ 7 ô xanh** mới sang Module 2.

**Cạm-bẫy:** "Để chạy thử rồi sửa sau" — thử với tài-khoản chưa sạch = đánh cược chính tài-khoản đó.

**Chốt Module 1:** Nền-móng đúng = **90% sự an-tâm**. Xong Module này bạn đã có bộ tài-sản an-toàn để bắt đầu — Module 2 ta đi **tìm đúng khách**.

---
## Ghi-chú sản-xuất (cho founder)
- Quay **màn-hình thật** từng thao-tác 1.3–1.6 (che thông-tin nhạy-cảm: email/SĐT/thẻ).
- ⚠️ Menu Meta đổi tên liên-tục → quay theo **giao-diện thực-tế**, giữ đúng **ý-nghĩa từng bước** (chính-chủ, 2FA, warm-up). Nhấn học-viên hiểu **vì sao**, không học vẹt nút.
