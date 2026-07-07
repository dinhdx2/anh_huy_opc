# Execution Plan — Cải tiến vn-opc-claude (P0→P4)

> Lộ trình thực thi bám sát `07-decision-report.md`. Mỗi đợt commit & push riêng. Update doc liên quan sau mỗi đợt.

## ✅ Trạng thái: ĐÃ HOÀN TẤT toàn bộ P0→P4 (2026-06-26)
| Đợt | Commit | Kết quả |
|---|---|---|
| P0 | `1545260` | Drift D1/D2/D3 sạch; `knowledge/brain-schema.md` (Brain Contract); orchestrator validator + grounding. |
| P1 | `66b8d92` | `debate.js` 4 pha: Perspectives → Cross-examination → Red-team → Synthesize; luật sư của quỷ; synthesizer có mục ⚔️ Red-team. |
| P2 | `5400637` | `decisions-log.md` + write-back sau PAUSE + task linking (khử hardcode round). |
| P3 | `2c32d57` | Model tiering enforce trong `debate.js` + escalation ladder + router JSON schema. |
| P4 | `8814701` | `decision-template-map.md` + `pack-contract.md` + `calibration.md` + Bước 8/10 orchestrator. |

---

## P0 — Khép vòng tin cậy (TRỤ 1)
| # | Hành động | Phụ trách | KPI / Tiêu chí xong | Deadline |
|---|---|---|---|---|
| 1 | Viết lại SKILL.md Bước 1-8 web-native (Read/Write/Glob trên `vault/`, bỏ Drive/MCP) | Eng | 0 tham chiếu Drive/`vault_read`/MCP | Đợt P0 |
| 2 | Thống nhất Brain schema: sửa persona refs (finance/market → budget/products) + thêm map | Eng | persona không trỏ file không tồn tại | Đợt P0 |
| 3 | Dọn code chết: tham-số-hóa hoặc xóa `debate-run.js` | Eng | 1 engine debate duy nhất | Đợt P0 |
| 4 | Thêm Brain validator (báo thiếu file) vào SKILL.md | Eng | có bước kiểm Brain trước fan-out | Đợt P0 |
| 5 | Update README (bỏ Obsidian-first) + CLAUDE.md nếu cần | Eng | README khớp web-native | Đợt P0 |

## P1 — Engine tranh luận v2 (TRỤ 2)
| # | Hành động | KPI |
|---|---|---|
| 1 | Thêm phase Cross-examination vào debate.js | phòng thấy view phòng khác + đổi ý |
| 2 | Thêm agent red-team/verifier (refute mặc định) | tấn công ≥ top khuyến nghị |
| 3 | Vai luật sư của quỷ luân phiên | 1 phòng/task phản đối đa số |
| 4 | Convergence loop tùy chọn cho STRATEGIC | loop-until-dry có guard token |
| 5 | Cập nhật agents/synthesizer + README mô tả engine | doc khớp code |

## P2 — Bộ nhớ tổ chức (TRỤ 3)
| # | Hành động | KPI |
|---|---|---|
| 1 | decisions-log.md schema trong vault | có log quyết định đã chốt |
| 2 | SKILL.md: write-back state.md + decisions-log sau PAUSE | tự cập nhật, không tay |
| 3 | Task linking: đọc quyết định đã chốt trước debate | không tái tranh luận |

## P3 — Kỷ luật chi phí (TRỤ 4)
| # | Hành động | KPI |
|---|---|---|
| 1 | Model tiering map trong debate.js | Opus 4 phòng + red-team; còn lại Sonnet |
| 2 | Escalation ladder SIMPLE/COMPLEX/STRATEGIC | số phòng + model theo scale |
| 3 | Router trả schema JSON {departments, lý_do, độ_phủ} | router truy xuất được |

## P4 — Template sống (TRỤ 5)
| # | Hành động | KPI |
|---|---|---|
| 1 | Decision→template mapping | bảng map loại quyết định→template |
| 2 | Kiểm thử office-docs / fallback | có đường render hoặc fallback rõ |
| 3 | Pack validator | pack lạ không lệch schema |
| 4 | Calibration loop nền | cấu trúc ghi outcome |
