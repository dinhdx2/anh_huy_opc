# MODULE 4 — Dựng campaign đầu-tay

> Deliverable việc #5 (soạn tiếp theo yêu-cầu CEO — nối M1 nền-móng + M2 khách/target + M3 creative thành **1 campaign sống**). Nội-dung GỐC. Mỗi bài: **Mục-tiêu · Nội-dung · Thao-tác · Cạm-bẫy · Chốt.**
> Ranh-giới telos (bất-biến): KHÔNG hứa "giàu nhanh/đảm-bảo doanh-số"; KHÔNG dạy né/lách chính-sách quảng-cáo; nội-dung GỐC, trung-thực; số nào không phải số thật DN đều gắn nhãn benchmark/minh-hoạ.
> ⚠️ **Grounding 2026 [benchmark — cần đối-chiếu khi quay]:** từ tháng 2/2026 Ads Manager đã **gộp hẳn luồng tạo campaign** — không còn màn chọn "Manual" vs "Advantage+" riêng; phần lớn campaign Sales/Leads/App giờ mặc-định chạy dạng **Advantage+** (AI tự-động hoá nhiều lựa-chọn vốn thủ-công). Tên nút cũng đổi (CBO → **Advantage+ Campaign Budget**). Script này dạy **nguyên-lý cấu-trúc & tối-ưu** — sống lâu hơn 1 cái tên nút — KHÔNG phải ảnh-chụp giao-diện cố-định; quay cần đối-chiếu màn-hình thật tại thời-điểm quay.
> ⚠️ Mọi con-số ví-dụ dưới đây (ngân-sách, %, số sự-kiện, số click…) là **minh-hoạ để hình-dung nguyên-lý**, KHÔNG phải cam-kết kết-quả và KHÔNG phải số của bạn — số thật của học-viên chỉ có sau khi tự chạy và đo (nối M5).

## Vì sao Module này quan-trọng
Đây là module học-viên **lần đầu bấm nút khiến tiền THẬT chảy khỏi thẻ**. M1 dựng nền an-toàn, M2 hiểu khách, M3 có creative — Module 4 là nơi ba mảnh đó **ráp lại thành 1 campaign sống**. Sai ở đây không chỉ là "chưa ra đơn" mà có-thể **đốt tiền thật**: chọn sai mục-tiêu, tối-ưu sai sự-kiện, ngân-sách bung quá sớm, hoặc bấm Publish khi chưa sẵn-sàng. Học kỹ Module này nghĩa là biết **cầm lái cỗ máy, tự quyết có kiểm-soát** — không phải nhắm mắt bấm rồi cầu may. Cả 5 bài dưới đây dồn về đúng 1 khoảnh-khắc ở Bài 4.5: **nút Publish** — sau đó tiền bắt-đầu chảy, không có nút "hoàn tác" cho cú click đã lỡ chạy.

---

## Bài 4.1 — Cấu-trúc 3 tầng: Campaign → Ad set → Ad (mỗi tầng quyết gì)

**Mục-tiêu:** hiểu rõ vai-trò từng tầng để sửa đúng chỗ, không "trộn" quyết-định (vd đi tìm nút đổi đối-tượng ở tầng Ad — sai chỗ, nó nằm ở Ad set).

**Nội-dung:**

**1) Ba tầng lồng nhau, tầng trên bao tầng dưới.** Mọi chiến-dịch Meta đều có cấu-trúc cố-định:

| Tầng | Quyết gì | Nối tới bài nào |
|---|---|---|
| **Campaign** | **Mục-tiêu** (objective — Sales/Leads…) + ngân-sách CHUNG nếu dùng Advantage+ Campaign Budget | Bài 4.2, 4.3 |
| **Ad set** | **Đối-tượng** (audience) · vị-trí hiển-thị · lịch & ngân-sách riêng (nếu không gộp) · **sự-kiện tối-ưu** (Purchase/Lead) | Bài 4.3, 4.4 (+ nối M2) |
| **Ad** | **Creative** (ảnh/video) · copy · nút CTA · đường-dẫn đến (website/form) | Nối M3 |

**2) Vì sao Objective KHOÁ CỨNG ở tầng Campaign.** Objective không chỉ là 1 cái tên chọn cho vui — nó quyết-định **toàn-bộ cách Meta xây thuật-toán phân-phối, đấu-giá và báo-cáo** phía sau. Đổi objective nghĩa là đổi cả kiến-trúc đó → Meta **không cho sửa tại chỗ**, bạn buộc phải dựng campaign MỚI, và mọi dữ-liệu "học" (learning) đã tích-luỹ ở campaign cũ **mất sạch**, phải học lại từ đầu. Đây là lý-do Bài 4.2 (chọn đúng mục-tiêu) phải làm **nghiêm-túc TRƯỚC** khi đi tiếp — không phải kiểu "chọn đại rồi sửa sau".

**3) Nhiều ad set, nhiều ad — nhưng đừng lẫn tầng.** Bên trong 1 campaign có-thể có nhiều ad set (test nhiều đối-tượng khác nhau); bên trong 1 ad set có-thể có nhiều ad (test nhiều creative khác nhau). Nhưng **objective và sự-kiện tối-ưu là CHUNG cho cả campaign/ad set**, không đổi theo từng ad — test creative không có nghĩa là mỗi ad được tối-ưu theo một mục-tiêu riêng.

**Ví-dụ SỐ minh-hoạ — phân-mảnh vs gộp ngân-sách (giả-định để hình-dung):**

| Cách dựng | Ngân-sách/ngày | Điều gì xảy ra |
|---|---|---|
| **Phân-mảnh:** 5 ad set riêng, mỗi cái 1 campaign | 5 × 50.000đ = 250.000đ | Mỗi ad set tự học riêng với ~50.000đ — tín-hiệu quá mỏng để thuật-toán học ổn (nối Bài 4.3) |
| **Gộp:** 1 campaign, Advantage+ Campaign Budget, 2 ad set | 250.000đ chung, AI tự chia | Ngân-sách đủ tập-trung để có cơ-hội tích-luỹ tín-hiệu nhanh hơn; AI tự dồn tiền cho ad set đang hiệu-quả hơn |

`[benchmark minh-hoạ]` — cùng 1 tổng ngân-sách, cách gộp thường học nhanh hơn cách chia vụn vì mỗi "ô học" nhận đủ tín-hiệu hơn.

**Thao-tác:**
1. Mở Ads Manager → bấm **"Tạo"** (Create).
2. Ở màn hiện ra, xác-định dòng trên cùng là **tên + mục-tiêu campaign**.
3. Bấm vào 1 campaign đã có (hoặc campaign demo) → xem danh-sách **ad set** hiện bên dưới nó.
4. Mở 1 ad set bất-kỳ → xem danh-sách **ad** nằm bên trong ad set đó.
5. Trước khi sửa bất-kỳ thứ gì, tự hỏi: "Cái tôi muốn đổi thuộc tầng nào?" — rồi mới bấm đúng tầng.

**Cạm-bẫy:** (1) nhồi quá nhiều ad set nhỏ-lẻ vào nhiều campaign khác nhau (phân-mảnh ngân-sách) → **HẬU-QUẢ:** mỗi ad set tự học riêng với tín-hiệu yếu, khó thoát giai-đoạn học (nối Bài 4.3), CPA cao hơn, mất nhiều ngày hơn mới đủ dữ-liệu để đọc đúng ở M5; (2) tìm sai tầng để sửa (vd cố tìm nút đổi đối-tượng ở tầng Ad) → **HẬU-QUẢ:** mất thời-gian loay-hoay, tưởng "Meta không cho sửa" trong khi chỉ đang bấm sai chỗ.

**Chốt:** Mục-tiêu quyết ở Campaign, Ai/Ở-đâu/Bao-nhiêu-tiền quyết ở Ad set, Người-ta-thấy-gì quyết ở Ad — nhớ đúng tầng để không tìm nút sai chỗ, và để hiểu vì sao Bài 4.2 không được chọn ẩu.

---

## Bài 4.2 — Chọn mục-tiêu (objective) đúng: SALES hay LEADS?

**Mục-tiêu:** chọn đúng objective ngay từ đầu vì đây là quyết-định **không sửa được** sau khi tạo campaign (nối logic Bài 4.1).

**Nội-dung:**

**1) Khung 6 lựa-chọn ODAX.** Meta gom mục-tiêu quảng-cáo vào khung 6 lựa-chọn gọi là **ODAX** (Outcome-Driven Ads Experience — trải-nghiệm quảng-cáo theo kết-quả): **Awareness** (nhận-diện), **Traffic** (lưu-lượng), **Engagement** (tương-tác), **Leads** (khách tiềm-năng), **App Promotion** (quảng-bá app), **Sales** (doanh-số) [benchmark — cần đối-chiếu khi quay]. Khóa này tập-trung **Sales** và **Leads** — hai mục-tiêu ra-đơn thật cho SP/DV của bạn; 4 mục-tiêu còn lại phục-vụ mục-đích khác (xây thương-hiệu, tăng tương-tác…), không phải trọng-tâm của khóa "ra đơn".

**2) Chọn SALES khi nào — vì sao.** Hợp khi bạn có **website/landing page riêng** + đã gắn **Pixel/CAPI** (nối M1 Bài 1.5) + có khả-năng ghi-nhận đủ sự-kiện **Purchase** (mua) một cách ổn-định. Vì sao: Sales tối-ưu thẳng cho người **CÓ KHẢ-NĂNG MUA**, dùng chính dữ-liệu chuyển-đổi từ website làm tín-hiệu học — không có pixel tốt, Sales không có gì để học.

**3) Chọn LEADS khi nào — vì sao.** Hợp khi bạn CHƯA có website bán trực-tiếp, hoặc SP/DV cần **tư-vấn/chốt qua chat, điện-thoại** trước khi mua (dịch-vụ, SP giá cao, cần giải-thích) — dùng **Instant Form** (biểu-mẫu-nhanh ngay trên Facebook/Instagram), **Messenger**, hoặc **cuộc gọi**. Vì sao: hành-trình mua cần **con người chốt**, không chỉ 1 cú click "Mua ngay" — tối-ưu Purchase lúc này vô-nghĩa vì chưa có đủ sự-kiện Purchase để học.

**Ví-dụ phổ-biến (áp cho SP của bạn):** shop thời-trang/mỹ-phẩm bán trực-tiếp trên website có sẵn giỏ-hàng + đã gắn pixel → hợp **Sales**. Dịch-vụ tư-vấn, SP giá cao cần giải-thích trước khi chốt (mỹ-phẩm cao-cấp cần tư-vấn da, khóa học, dịch-vụ B2B) → hợp **Leads**.

| Tiêu-chí | SALES | LEADS |
|---|---|---|
| Website/landing riêng + pixel/CAPI ổn-định | Bắt-buộc | Không bắt-buộc |
| Tối-ưu tới sự-kiện | Purchase (mua) | Lead (form/chat/gọi hoàn-tất) |
| Cần người CHỐT trước khi mua | Thường không | Thường có |

**4) Nguyên-lý chọn bền hơn tên nút.** Tối-ưu cho **sự-kiện SÂU NHẤT mà bạn nuôi đủ tín-hiệu ổn-định**. Có pixel bắn Purchase đều-đặn → chọn Sales, tối-ưu Purchase. SP mới, chưa đủ dữ-liệu Purchase → tối-ưu sự-kiện nông hơn (Lead, hoặc Add to Cart) để thuật-toán có đủ tín-hiệu học trước, rồi nâng dần lên Purchase khi đã có traction (đà bán) [benchmark — cần đối-chiếu khi quay]. (Ghi thêm: đầu 2025 Meta cũng đổi tên "Advantage+ Shopping Campaign" thành "Advantage+ Sales Campaign" — vì objective Sales giờ bao luôn cả Leads/App, không chỉ ecommerce thuần [benchmark — cần đối-chiếu khi quay].)

**Ví-dụ SỐ minh-hoạ — cái giá của chọn sai objective:** cùng chi **500.000đ**, chọn **Traffic** (tưởng "traffic = khách hàng") → thuật-toán đuổi theo **lượt click rẻ nhất**, có-thể ra ~**500 click** nhưng phần lớn là người lướt-xem, KHÔNG tối-ưu nhắm người mua → thường **rất ít hoặc 0 đơn**. Cùng 500.000đ chọn đúng **Sales** (tối-ưu Purchase) → có-thể chỉ ra ~**80–150 click** nhưng đúng nhóm có xu-hướng mua hơn → tỷ-lệ ra đơn thường cao hơn hẳn dù click ít hơn nhiều `[benchmark minh-hoạ]`. **Số click nhiều không phải thắng — số ĐÚNG NGƯỜI mới thắng.**

**Thao-tác:**
1. Ở bước "Chọn mục-tiêu" khi tạo campaign → đọc kỹ mô-tả từng objective, đừng chọn theo tên nghe quen.
2. Chọn **Sales** hoặc **Leads** dựa trên bảng tiêu-chí ở trên.
3. Xem màn-hình gợi-ý **nguồn chuyển-đổi** (Website/Instant Form/Messenger/Cuộc gọi) hiện ra.
4. Chọn đúng nguồn khớp **mô-hình bán thật** của SP bạn (đừng chọn Website nếu thật-ra bạn chốt qua Messenger).

**Cạm-bẫy:** (1) chọn objective theo cảm-tính (vd chọn **Traffic** vì tưởng "traffic = khách hàng") → **HẬU-QUẢ:** tốn tiền cho lượt click rẻ, không tối-ưu người mua, rồi kết-luận oan "ads không hiệu-quả" trong khi lỗi nằm ở bước chọn mục-tiêu từ đầu; (2) chọn **Sales** nhưng pixel/CAPI chưa gắn đúng → **HẬU-QUẢ:** thuật-toán tối-ưu "mù" (không có tín-hiệu Purchase thật để học), tiêu tiền ngẫu-nhiên, không hội-tụ về đúng khách.

**Chốt:** Chọn objective theo SỰ-KIỆN bạn muốn thuật-toán đuổi theo — không phải theo tên nghe kêu; sai ở đây phải dựng lại từ đầu, không sửa vá được.

---

## Bài 4.3 — Ngân-sách & lịch: bắt-đầu NHỎ, hiểu Advantage+ Campaign Budget & learning phase

**Mục-tiêu:** đặt ngân-sách warm-up an-toàn (nối M1 Bài 1.6) và hiểu đúng "giai-đoạn học" để không hoảng khi số chưa đẹp những ngày đầu.

**Nội-dung:**

**1) Advantage+ Campaign Budget (trước đây gọi CBO) vs Ad set budget (ABO).** **Advantage+ Campaign Budget** [benchmark — cần đối-chiếu khi quay, Meta đổi tên liên-tục]: đặt **1 ngân-sách chung ở tầng Campaign**, AI tự phân-bổ tiền giữa các ad set theo hiệu-quả thời-gian-thực. **Ad set budget (ABO):** đặt ngân-sách **cố-định riêng từng ad set**, bạn kiểm-soát chặt hơn nhưng AI không được tự-do điều-tiết. Từ 2026 Meta khuyến-nghị Advantage+ Campaign Budget làm **mặc-định** cho hầu-hết trường-hợp; ABO chỉ hợp khi bạn **cố-tình** muốn giữ ngân-sách tách-biệt cho 1–2 đối-tượng đang test riêng-biệt.

**2) "Giai-đoạn học" (learning phase) là gì & vì sao số xấu tạm-thời.** Khi 1 ad set mới hoặc vừa đổi lớn (ngân-sách, đối-tượng, creative), thuật-toán cần thời-gian "học" ai nên thấy quảng-cáo của bạn. Trong lúc này chi-phí thường **cao hơn bình-thường** và kết-quả **chưa ổn-định** — CPA (chi-phí mỗi kết-quả) trong giai-đoạn học có-thể cao hơn 20–50% so với mức ổn-định về sau `[benchmark minh-hoạ]`. Vì sao: thuật-toán đang THỬ nhiều nhóm người khác nhau để tìm ai phản-hồi tốt — chưa "biết" nên chưa "khôn", giống người mới học lái chưa quen đường. **Đừng tắt/sửa vội** trong lúc này — mỗi lần sửa lớn (ngân-sách, đối-tượng, creative) sẽ khiến nó **học lại từ đầu**, cùng cơ-chế với hậu-quả đổi objective ở Bài 4.1 nhưng ở quy-mô nhỏ hơn.

**3) Mốc ~50 sự-kiện chuyển-đổi/tuần — con số cần nhớ.** Meta nêu mốc tham-khảo: mỗi ad set cần khoảng **~50 sự-kiện tối-ưu-hoá trong 1 tuần** (cửa-sổ trượt 7 ngày) để có đủ tín-hiệu thoát giai-đoạn học `[benchmark minh-hoạ]`. Mốc này **tính gộp** cả sự-kiện từ Pixel (trình-duyệt) + CAPI (máy chủ) + sự-kiện suy-diễn (modeled), đo ở **cấp ad set** — không phải cấp từng ad. Đây là ngưỡng **tín-hiệu tối-thiểu** để thuật-toán ra quyết-định đáng-tin, KHÔNG phải "cứ đạt 50 là tự-động chạy tốt".

**Ví-dụ SỐ minh-hoạ — công-thức ngân-sách quốc-tế (tham-khảo, KHÔNG phải lệnh phải theo):** giới marketing quốc-tế hay dùng công-thức **Ngân-sách/ngày tối-thiểu ≈ (CPA mục-tiêu × 50) ÷ 7** để ước-lượng ngân-sách đủ thoát learning trong 1 tuần `[benchmark quốc-tế — cần đối-chiếu & quy-đổi khi quay; đây là cách tính phổ-biến trong giới marketing, KHÔNG phải văn-bản chính-thức của Meta]`. Ví-dụ: nếu bạn **kỳ-vọng** CPA (chi-phí mỗi đơn) khoảng **150.000đ**, công-thức cho ra ngân-sách khoảng (150.000 × 50) ÷ 7 ≈ **1.070.000đ/ngày/ad set**. Con số này **THƯỜNG QUÁ CAO** cho người mới ở VN mới bắt-đầu — đây chính-xác là lý-do nguyên-tắc (4) dưới đây khuyên bắt-đầu NHỎ và **chấp-nhận** learning phase có-thể kéo dài hơn 1 tuần, thay vì ép ngân-sách lớn ngay chỉ để chạy đúng công-thức.

**Ví-dụ SỐ minh-hoạ — cấu-trúc ngân-sách warm-up 7 ngày đầu (giả-định để hình-dung, không phải số của bạn):**

| Ngày | Ngân-sách/ngày (minh-hoạ) | Cộng-dồn | Việc làm |
|---|---|---|---|
| 1–3 | 100.000đ | 300.000đ | CHỈ quan-sát (Events Manager, Bài 4.4) — KHÔNG sửa gì dù số chưa đẹp |
| 4–5 | 100.000đ (giữ nguyên) | 500.000đ | Có-thể vẫn trong learning — chưa đủ dữ-liệu để kết-luận, tiếp-tục giữ nguyên |
| 6–7 | 100.000đ (giữ nguyên) | 700.000đ | Đủ 7 ngày — dùng M5 để ĐỌC số (không phải cảm-tính) rồi mới quyết tăng/giảm/tắt |

`[benchmark minh-hoạ]` — 100.000đ/ngày chỉ là ví-dụ để thấy NHỊP (giữ nguyên đủ lâu, không sửa theo cảm-xúc từng ngày); số thật của bạn phụ-thuộc ngân-sách + SP + Bài 1.6.

**4) Nguyên-tắc ngân-sách khi mới (bền hơn 1 con số cụ-thể).** (a) **bắt-đầu nhỏ** — đủ để có dữ-liệu, không đủ để "đau" nếu sai; (b) **gộp ad set, đừng chia vụn** (nối 4.1); (c) **đừng sửa liên-tục** trong vài ngày đầu (nối mục 2); (d) khi đã có vài đơn/lead sạch và tin dữ-liệu → dùng M5 để quyết tăng ngân-sách **có kỷ-luật**, KHÔNG tăng vì cảm-tính. Benchmark quốc-tế 2026 gợi-ý ngân-sách đủ để thoát giai-đoạn học nhanh dao-động khoảng 50–150 USD/ngày mỗi ad set [benchmark quốc-tế — cần đối-chiếu & quy-đổi khi quay; thực-tế người mới ở VN thường bắt-đầu thấp hơn nhiều, ưu-tiên AN-TOÀN warm-up hơn tốc-độ thoát learning phase].

**5) Lịch chạy.** Chọn chạy **liên-tục** (không giới-hạn ngày) cho giai-đoạn warm-up, để thuật-toán có đủ thời-gian học — tránh đặt lịch ngắt-quãng những ngày đầu.

**Thao-tác:**
1. Ở tầng Campaign → bật **Advantage+ Campaign Budget** (hoặc chỉnh riêng ở từng ad set nếu chủ-động tắt để dùng ABO).
2. Nhập số tiền/ngày — **nhỏ**, theo mức đã tính ở Bài 1.6, KHÔNG theo công-thức quốc-tế phía trên nếu số đó vượt khả-năng "đau-được" của bạn.
3. Chọn lịch **"Chạy liên-tục từ hôm nay"**.
4. Ghi lại ngày bắt-đầu vào file theo-dõi (Bài 0.4) — để biết chính-xác đã qua bao nhiêu ngày khi đọc số ở M5.
5. Trong 5–7 ngày đầu: chỉ MỞ Ads Manager để **xem**, không bấm sửa (trừ khi phát-hiện lỗi kỹ-thuật rõ-ràng như sai chính-tả, sai đường-dẫn).

**Cạm-bẫy:** (1) thấy 2–3 ngày đầu CPA cao/chưa ra đơn → hoảng, tắt/sửa liên-tục → **HẬU-QUẢ:** giai-đoạn học bị reset lặp đi lặp lại, không bao giờ tích-luỹ đủ tín-hiệu để ổn-định, tốn tiền "học lại" nhiều lần thay vì 1 lần; (2) ép ngân-sách thật lớn ngay từ đầu để chạy đúng công-thức (CPA×50)/7 → **HẬU-QUẢ:** cháy ngân-sách nhanh trong khi creative/pixel/landing chưa chắc đã ổn, rủi-ro mất tiền cao hơn lợi-ích "thoát learning nhanh".

**Chốt:** Ngân-sách nhỏ + ít ad set + đừng sửa vội = cách warm-up một campaign đúng-đắn; ~50 sự-kiện/tuần là cái ĐÍCH để hiểu, không phải cái ÉP phải đạt ngay tuần đầu.

---

## Bài 4.4 — Gắn pixel/CAPI & chọn đúng sự-kiện chuyển-đổi (nối M1 Bài 1.5)

**Mục-tiêu:** đảm-bảo ad set "nhìn thấy" đúng chuyển-đổi thật (Purchase/Lead) trước khi để nó tiêu tiền.

**Nội-dung:**

**1) Nhắc lại vị-trí của bước này.** Pixel/Dataset + CAPI (Conversions API) đã **cài** ở M1 Bài 1.5 — đó là lắp "con mắt". Ở Module 4, việc cần làm là **chọn ĐÚNG sự-kiện** ở tầng Ad set để thuật-toán tối-ưu tới đúng nó — đây là bước nối "mắt đo" (M1) vào "cỗ máy chạy tiền" (M4). Thiếu bước này, campaign vẫn chạy được nhưng chạy **mù**.

**2) Ưu-tiên sự-kiện theo độ-sâu.** Thứ-tự điển-hình cho bán-hàng online (sâu → nông): **Purchase** (mua) → **Initiate Checkout** (bắt-đầu thanh-toán) → **Add to Cart** (thêm giỏ) → **View Content** (xem trang SP) [benchmark — cần đối-chiếu khi quay]. Nguyên-tắc: chọn sự-kiện **sâu nhất mà bạn có đủ dữ-liệu ổn-định** (nối nguyên-lý Bài 4.2). Với mục-tiêu Leads: chọn **Lead** (hoàn-tất form/chat) làm sự-kiện chính — không có sự-kiện nào sâu hơn để tối-ưu trong mô-hình này.

**3) Xác-minh domain (domain verification).** Làm trong **Business Settings** (không nằm trong Ads Manager) — giúp pixel/CAPI ghi-nhận chuyển-đổi chính-xác hơn, đặc-biệt trên iOS. Vì sao cần: hệ-điều-hành iOS giới-hạn dữ-liệu chia-sẻ cho quảng-cáo, xác-minh domain là cách Meta "tin" domain đó thuộc về bạn để ưu-tiên phân-bổ đúng sự-kiện về đúng domain khi dữ-liệu bị giới-hạn. Nên làm bước này **trước** khi chạy Sales nếu SP có website riêng [benchmark — cần đối-chiếu khi quay].

**4) CAPI & khử trùng-lặp (dedup).** **CAPI** gửi sự-kiện từ **máy chủ** (không phụ-thuộc trình-duyệt/cookie hay bị chặn), chạy **song-song** với Pixel (trình-duyệt) → giảm mất dữ-liệu do trình-duyệt/thiết-bị chặn cookie. Hai nguồn cần khớp **event ID** (mã sự-kiện — 1 chuỗi ký-tự sinh ra cho mỗi lượt mua) để Meta **không đếm trùng** 1 chuyển-đổi 2 lần — cơ-chế này hoạt-động trong **cửa-sổ 48 giờ**: Pixel và CAPI cùng gửi 1 event ID cho cùng 1 lượt mua trong 48 giờ → Meta tự nhận ra là CÙNG 1 sự-kiện và chỉ tính 1 lần `[benchmark minh-hoạ]`. Các nền-tảng bán-hàng phổ-biến thường có nút bật CAPI "1-chạm" trong Events Manager, không cần code tay [benchmark — cần đối-chiếu khi quay].

**Ví-dụ SỐ minh-hoạ — cái giá của dedup sai:** nếu event ID giữa Pixel và CAPI **không khớp** (kể cả lệch hoa/thường hoặc khoảng-trắng), Meta đếm **2 lần** cho cùng 1 đơn hàng. Giả-sử thật-sự có **50 đơn** trong tuần, Events Manager có-thể báo-cáo **~100 "Purchase"** — nhìn tưởng đang tốt gấp đôi, CPA tưởng rẻ đi một nửa `[benchmark minh-hoạ]`. Qua M5 đọc số theo báo-cáo sai này → quyết tăng ngân-sách vì "đang lãi" trong khi thật-ra đơn hàng chỉ bằng một nửa số thấy. Đây là lý-do phải **kiểm Test Events** trước khi tin bất-kỳ con số nào.

**5) Kiểm TRƯỚC khi chạy (bắt-buộc, nối Test Events Bài 1.5).** Vào **Events Manager** → tự thử mua/điền form → xem sự-kiện Purchase/Lead có bắn về gần-như-ngay-lập-tức, và xem **Test Events** không báo lỗi trùng-lặp/thiếu tham-số. **KHÔNG thấy đúng** → ĐỪNG bật ads, quay lại sửa pixel/CAPI trước.

**Thao-tác:**
1. Tạo/chỉnh ad set → vào khu **"Chuyển-đổi"** (Conversion) hoặc **"Mục-tiêu hiệu-suất"** (Performance goal).
2. Chọn đúng **Dataset/Pixel** đã gắn với Page của bạn.
3. Chọn **sự-kiện tối-ưu** (Purchase cho Sales / Lead cho Leads) theo nguyên-tắc "sâu nhất có dữ-liệu ổn-định".
4. Mở **Business Settings** → xác-nhận domain đã verify (nếu chạy Sales trên website riêng).
5. Quay lại **Events Manager** → kiểm **Test Events** lần cuối, tự thử 1 giao-dịch/1 form thật trước khi rời màn-hình.

**Cạm-bẫy:** (1) chọn nhầm sự-kiện nông (vd tối-ưu "View Content" trong khi thật-ra cần "Purchase") → **HẬU-QUẢ:** tốn tiền cho người XEM, không phải người MUA, CPA trông "rẻ" trên báo-cáo nhưng không ra doanh-thu thật; (2) bỏ-qua xác-minh domain → **HẬU-QUẢ:** dữ-liệu chuyển-đổi thiếu (đặc-biệt trên iOS), báo-cáo sai, khó tối-ưu đúng ở M5; (3) event ID Pixel/CAPI không khớp → **HẬU-QUẢ:** đếm trùng chuyển-đổi, số liệu ảo (nối ví-dụ số ở trên), ra quyết-định scale ngân-sách dựa trên đơn hàng không có thật.

**Chốt:** Không thấy sự-kiện bắn đúng trong Events Manager = CHƯA ĐƯỢC bấm Publish; số liệu đẹp mà chưa kiểm dedup = số liệu chưa đáng tin.

---

## Bài 4.5 — Checklist TRƯỚC KHI BẤM PUBLISH (bật tiền)

**Mục-tiêu:** có 1 checklist go/no-go cuối-cùng trước khi CHI TIỀN THẬT.

⚠️ **Bấm Publish = bắt-đầu chi tiền thật từ thẻ/tài-khoản của bạn, ngay lập-tức, không có nút "hoàn tác".** Đây LUÔN LUÔN là quyết-định của **CHÍNH BẠN** — khóa học này trang-bị checklist để bạn **tự quyết có kiểm-soát**, dựa trên bằng-chứng đã rà đủ, không phải theo cảm-hứng nhất-thời hay áp-lực "phải ra mắt cho kịp".

**Nội-dung — Checklist go/no-go (phải xanh HẾT mới bấm):**
- [ ] **1. Creative** (ảnh/video/copy) đã qua **cổng claim-cấm** (nối M3) — không "giàu nhanh / cam-kết doanh-số / thổi-phồng".
- [ ] **2. Pixel/CAPI đã bắn đúng** sự-kiện Purchase/Lead, Test Events xanh, **không báo lỗi trùng-lặp** (nối Bài 4.4).
- [ ] **3. Ngân-sách đặt Ở MỨC NHỎ** warm-up (nối Bài 4.3) — KHÔNG đổ số lớn ngày đầu, KHÔNG chạy theo công-thức quốc-tế nếu vượt mức "đau-được".
- [ ] **4. Đúng đối-tượng:** kiểm-soát cứng đã đặt đúng (vị-trí VN, tuổi, loại-trừ nếu cần — nối M2).
- [ ] **5. Landing page khớp với ad:** hệ-thống kiểm-duyệt Meta quét **ad và trang đích như 1 khối thống-nhất** — lệch nhau (ad hứa 1 đằng, trang đích nói khác) là lý-do bị từ-chối phổ-biến [benchmark — cần đối-chiếu khi quay].
- [ ] **6. Landing page có chính-sách/consent hợp-lệ** (Luật 91/2025 — nối Gate-0 + Bài 1.5) — không thu dữ-liệu khách khi chưa xin phép.
- [ ] **7. Đã xem trước ad** (Ad Preview) trên các vị-trí hiển-thị chính (Feed/Story/Reels) — không vỡ layout, không sai chính-tả.
- [ ] **8. Đã đọc lại màn "xem lại trước khi đăng"** (preview-to-publish summary) của Ads Manager và **đồng-ý rõ mức chi mỗi ngày** trước khi bấm.

**Ví-dụ minh-hoạ cách dùng checklist (kỷ-luật go/no-go):** rà xong, còn **7/8 dòng xanh**, riêng dòng 2 (Test Events) vẫn báo lỗi thiếu tham-số → **KHÔNG bấm Publish**, dù đã rất gần và rất nóng-lòng. Quay lại sửa pixel, chạy lại Test Events tới khi xanh, RỒI mới rà lại cả 8 dòng từ đầu. 1 dòng đỏ = **CHƯA XONG**, không có ngoại-lệ "gần xong rồi, bấm luôn cho lẹ".

**Thao-tác:**
1. Rà **từng dòng** checklist ngay trên màn-hình, theo đúng thứ-tự 1→8, không nhảy cóc.
2. Với mỗi dòng chưa chắc → quay lại đúng Bài đã nối (4.3/4.4/M2/M3/M1) để xác-nhận, KHÔNG tự suy-diễn "chắc ổn".
3. Chụp/lưu lại màn **"xem lại trước khi đăng"** làm bằng-chứng đã rà đủ.
4. Chỉ khi cả 8 dòng xanh → **tự tay BẠN** bấm Publish, không nhờ ai bấm hộ.

**Cạm-bẫy:** (1) bấm Publish vội vì nóng-lòng thấy kết-quả trong khi 1–2 dòng checklist chưa xanh → **HẬU-QUẢ:** dễ bị từ-chối ad (mất thời-gian sửa & nộp lại), cháy ngân-sách oan cho ad chưa tối-ưu đúng, hoặc nặng hơn là dính đúng cạm-bẫy khóa tài-khoản đã học ở M1; (2) coi checklist là thủ-tục hình-thức, tick cho có mà không thật-sự kiểm-tra từng dòng → **HẬU-QUẢ:** ảo-tưởng "đã sẵn-sàng" trong khi lỗi thật (vd landing lệch ad) vẫn còn nguyên, tiền vẫn chảy vào chỗ sai.

**Chốt:** Checklist xanh hết → BẠN tự quyết bấm, với ngân-sách nhỏ, có kiểm-soát. Đó là khác-biệt giữa "chạy ads bài-bản" và "đốt tiền may-rủi" — và khác-biệt đó nằm gọn trong 8 dòng ở trên.

---
## Ghi-chú sản-xuất (cho founder)
- Quay **màn-hình Ads Manager sống**: dựng 1 campaign demo (SP generic, có-thể dùng ví-dụ thời-trang/mỹ-phẩm) đi hết 4.1→4.4; dừng NGAY TRƯỚC khi bấm Publish thật ở 4.5 — quay phần checklist bằng cách rà từng dòng trên màn "xem lại trước khi đăng". Nếu muốn bấm Publish thật để minh-hoạ, dùng tài-khoản/ngân-sách demo cực nhỏ và tự chịu trách-nhiệm khoản chi đó (ngoài phạm-vi sản-xuất nội-dung). ~65–70’, cắt 5 clip theo 5 bài (4.3 dài hơn vì có 2 bảng số + công-thức — có-thể tách thêm slide riêng).
- Các **bảng số** (phân-mảnh vs gộp 4.1, cấu-trúc ngân-sách 4.3, dedup 4.4) nên làm **slide** minh-hoạ thay vì chỉ đọc trên màn Ads Manager — dễ theo hơn cho học-viên mới.
- ⚠️ **Nguyên-lý bền hơn nút-bấm:** Meta đổi tên nút/luồng tạo campaign liên-tục (CBO → Advantage+ Campaign Budget, gộp Manual/Advantage+ tháng 2/2026…) — script này là **khung nội-dung**, không phải ảnh-chụp giao-diện cố-định. Nhấn học-viên nhớ: **3 tầng quyết-định** (Bài 4.1), **chọn sự-kiện sâu-nhất-đo-được** (Bài 4.2, 4.4), **giai-đoạn học cần tín-hiệu ổn-định trước khi phán-xét** (Bài 4.3), **tự quyết có kiểm-soát trước Publish** (Bài 4.5) — những nguyên-lý này sống lâu hơn vị-trí 1 cái nút trên màn-hình.
