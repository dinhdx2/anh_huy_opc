# 08 — Execution Plan: Ra-mắt hero BộMẫu (GĐ1 validate)

> Nguồn: `07-decision-report.md` (CEO duyệt 2026-07-07). Hero = **"Bộ Google Sheet đối-soát & tính LÃI THẬT đa-sàn TikTok Shop/Shopee" 149–179k**, order-bump = mẫu TT40/tồn-kho.
> **Thứ-tự CEO chốt:** làm **phần KHÔNG cần vốn TRƯỚC** → chỉ chạy ads SAU khi xong + CFO chốt trần-burn.

## NHÓM A — LÀM NGAY (không tốn vốn · AI-AUTO / máy làm được)

> ✅ **ĐÃ BUILD XONG 2026-07-07** → `03-Outputs/hero-launch/` (xem `README.md` gói). Tự-kiểm: công-thức hero & CAC khớp Python 100%; landing 0 asset ngoài; cổng bản-quyền hero+order-bump PASS. 3 điểm cần chuyên-gia rà: thuế khách 1,5% vs BộMẫu 7% · luật dữ-liệu NĐ13→L91/2025 · ngưỡng thuế 2026.

| # | Hành động | Người/phòng | Deliverable (03-Outputs) | KPI/nghiệm-thu |
|---|---|---|---|---|
| A1 | **Xây hero Google Sheet đối-soát & lãi-thật đa-sàn** (tabs: nhập đơn · cấu-hình phí sàn · đối-soát · lãi-thật/đơn · dashboard) | 13-content-ip / 09 | spec + CSV từng tab + công-thức + hướng-dẫn dùng | mở là chạy: nhập đơn mẫu → ra lãi thật/đơn đúng; tính đủ phí sàn+thanh-toán+COD+ads+giá-vốn+thuế |
| A2 | **Cổng bản-quyền** — checklist rà license 100% asset hero + order-bump | 13-content-ip / 01 | checklist + kết-luận PASS/FAIL từng asset | hero Sheet: 0 asset bên thứ ba (font Google mặc-định, không ảnh stock/Canva Pro) → PASS |
| A3 | **Order-bump: mẫu thuế khoán TT40 + bảng tồn-kho** (Sheet/CSV) | 13-content-ip / 03 | template TT40 + tồn-kho + hướng-dẫn | tính đúng GTGT 5%+TNCN 2% khoán; cảnh-báo MẪU cần kế-toán rà |
| A4 | **Landing page hero** (hook "biết lãi thật sau phí sàn/ads/COD", giá, order-bump, optin email/Zalo, CTA checkout) | 07 / 09 | `landing.html` self-contained | có hook 3-giây, offer rõ, form optin, chỗ gắn SePay (placeholder) |
| A5 | **Privacy Policy + consent NĐ 13/2023** (thu email/Zalo) | 01 | `privacy-policy.md` + consent copy | có cơ-sở pháp-lý, thông-báo, quyền rút — MẪU cần luật-sư rà |
| A6 | **Cơ-chế giao hàng kiểm-soát** — link cá-nhân-hóa / khóa "make a copy" / watermark cho Sheet | 09 | spec giao-hàng + quy-trình | chống copy lậu; mỗi khách 1 bản sao riêng |
| A7 | **Mô hình CAC break-even 3 kịch-bản (Base/Bull/Bear)** + bảng nhạy | 03-finance | `cac-breakeven.csv` + diễn-giải | ra ngưỡng CAC tối-đa để CM/đơn dương; cảnh-báo số benchmark |
| A8 | **Phễu thu email + Zalo OA** — spec lead-magnet + chuỗi nuôi | 07 / 08 | spec phễu + lead-magnet đề-xuất | biến traffic → tài-sản sở-hữu |

## NHÓM B — GÁC (cần vốn/ads hoặc CEO/bên-ngoài · NEED-APPROVAL / NEED-INFO)

| # | Hành động | Cổng | Điều-kiện mở |
|---|---|---|---|
| B1 | **Chạy ads test theo đợt** (FB/TikTok) | NEED-APPROVAL (chi tiền) | Nhóm A xong + CFO chốt **trần-burn/tháng** + đo CM/đơn |
| B2 | **Đăng-ký cổng SePay** (KYC) | HUMAN-ONLY | CEO tự làm (KYC ngân-hàng) |
| B3 | **Legal tra Cục SHTT tên "BộMẫu"** (nhóm 9+42) + domain | NEED-APPROVAL (nộp hồ-sơ) | trước khi đầu-tư brand |
| B4 | **Kế-toán rà thuế** (ngưỡng, hộ/cá-nhân KD) | NEED-INFO | trước khi mở bán chính-thức |
| B5 | **Xác-minh nguồn số người-bán 2025** (khóa ICP) | NEED-INFO | CEO/nguồn |

## Cổng phanh (giữ nguyên từ report)
- **KHÔNG chi ads** tới khi Nhóm A xong + CFO chốt trần-burn.
- **Cổng PMF:** contribution-margin/đơn = giá − (ads + phí cổng + refund + thuế) **DƯƠNG** mới scale; KHÔNG dùng "ROAS từ biên ~100%" làm tín-hiệu lãi.
- **Cổng bản-quyền A2 PASS** trước khi phát-hành bất-kỳ file bán.
