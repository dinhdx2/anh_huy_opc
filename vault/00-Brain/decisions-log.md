# Nhật ký quyết định (decisions-log.md)

> **Bộ nhớ tổ chức — append-only.** Mỗi quyết định CEO đã DUYỆT (sau PAUSE 2/PAUSE 3) ghi 1 mục vào đây.
> Orchestrator ĐỌC file này TRƯỚC mỗi debate và nạp các mục `status: locked` vào `brainContext` dưới nhãn
> **"QUYẾT ĐỊNH ĐÃ CHỐT — KHÔNG bàn lại"**, để hội đồng không tái tranh luận việc đã chốt.
> Khi một quyết định bị đảo, KHÔNG xóa — thêm mục mới `status: superseded` trỏ về mục cũ.

## Schema mỗi mục
```
### <YYYY-MM-DD> — <tiêu đề ngắn>
- task: <slug task trong 02-Tasks/>
- status: locked | superseded | revisit
- altitude: telos | dinh-vi | moat | cau-truc   # tầng quyết-định (luồng generic v3) — để truy "quyết-định này thuộc tầng nào"
- quyết định: <1-3 câu CEO đã chốt>
- ràng buộc (không bàn lại): <gạch đầu dòng các điều khoản cứng>
- lý do/đánh đổi: <vì sao>
- người phụ trách: <phòng/người>
- supersedes: <slug+ngày mục bị thay, nếu có>
```

---

## Các quyết định đã chốt

### 2026-06-25 — Ra mắt store POD đầu tiên ($5k, 30 ngày)
- task: `2026-06-25-ke-hoach-ra-mat-store-dau-tien`
- status: locked
- altitude: dinh-vi
- quyết định: Chốt định hướng thực thi 30 ngày Facebook-first cho store POD niche Vlog/Lifestyle/Comedy, B2C, thị trường Mỹ, vốn $5,000.
- ràng buộc (không bàn lại):
  - Chạy **Facebook/Instagram Ads trước** (founder KHÔNG quay video → creative ảnh sản phẩm/mockup tĩnh + carousel + Advantage+). KHÔNG bàn lại lựa chọn kênh.
  - Cổng thanh toán = **PayPal Business + 2Checkout backup**. ĐÃ BÁC phương án Stripe-qua-danh-tính-ảo (rủi ro pháp lý/khóa tiền). KHÔNG bàn lại cổng.
  - Ngưỡng **ROAS để scale = 2.3–2.4** (đã cộng phí cổng VN). Không scale dưới mức này.
  - Mọi design qua **cổng kiểm duyệt IP** (USPTO TESS) trước khi đăng. 4 trang policy FTC bắt buộc.
  - Khóa cứng **$500 dự phòng** — tuyệt đối không dùng cho ads.
- lý do/đánh đổi: founder solo chưa có kỹ năng quay video → FB attribution trưởng thành hơn cho người mới; PayPal là cổng khả thi hợp pháp duy nhất cho seller VN; benchmark ROAS chưa có data thật nên dùng ngưỡng thận trọng.
- người phụ trách: founder (Marketing/Operations/Finance/Legal phối hợp)
