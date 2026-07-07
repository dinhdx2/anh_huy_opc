# Vault — Dữ liệu doanh nghiệp

Đây là "kho não" của DN cho hệ vn-opc, chạy trực tiếp trong phiên Claude Code web/mobile.
Toàn bộ thư mục này được commit vào git → dữ liệu **không mất** giữa các phiên (môi trường web là tạm thời).

```
vault/
├── 00-Brain/             # Bộ não: 5 file canonical (strategy, products, state, budget, headcount — điền trước /vn-run)
│                         #         + 2 file bộ nhớ tự sinh: decisions-log, calibration
├── 00-Templates-Custom/  # Template riêng của DN (ưu tiên cao nhất khi sinh tài liệu)
├── 02-Tasks/             # Mỗi phiên = 1 thư mục: brief, clarification, decision-report, execution-plan, 10-run-state (thực thi)
├── 03-Outputs/           # Tài liệu sinh ra (.md/.csv, hoặc .docx/.xlsx nếu có office-docs)
└── .vncoderc             # Cấu hình DN (ngành, phòng ban active) — sinh bởi /vn-onboard
```

## Bắt đầu
1. `/vn-onboard "<mô tả DN + ngành>"` — thiết lập ngành + phòng ban.
2. Điền 5 file canonical trong `00-Brain/` bằng thông tin thật của DN.
3. `/vn-run "<câu hỏi/quyết định cần>"` — hội đồng các phòng liên quan debate → quyết định → kế hoạch.
4. `/vn-execute "<task>"` — thực thi kế hoạch (tự chạy bước máy làm được, dừng hỏi khi cần).
5. `/vn-status` — kiểm tra trạng thái nhanh.
