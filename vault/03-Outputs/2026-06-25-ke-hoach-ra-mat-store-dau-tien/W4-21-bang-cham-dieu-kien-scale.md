# W4-21 — Bảng chấm điều kiện SCALE (Ngày 22)

**TL;DR:** Checklist tự đánh giá trước khi quyết định scale ngân sách Tuần 4. Phải tick du ca 4 tieu chi chinh moi duoc scale; thieu bat ky 1 → NO-GO. Kem theo cac hard-stop/stop-loss can kiem tra truoc khi cham tieu chi chinh.

> Nguon so: `vault/03-Outputs/2026-06-25-ke-hoach-ra-mat-store-dau-tien/W2-15-dashboard-ads.csv` (dashboard hang ngay).
> Nguoi cham: Founder, deadline Ngay 22 (truoc 9:00 SA).

---

## PHAN 0 — KIEM TRA HARD-STOP TRUOC (bat buoc truoc khi cham tieu chi chinh)

| # | Hard-stop / Stop-loss | Nguong | Cach do | Ket qua | Hanh dong neu vi pham |
|---|---|---|---|---|---|
| HS-1 | Tong Spend vuot moc $1,400 ma Cash_ROAS < 0.8 | Spend > $1,400 VA Cash_ROAS < 0.8 | Loc dashboard: `=SUMIF(Week,"<=W3",Spend)` va `=SUMIF(Week,"<=W3",Cash_ROAS)/COUNTA(...)` | `[ ] Vi pham` `[ ] OK` | **DUNG NGAY** — khong cham tieu chi chinh. Pivot creative hoac thu Etsy organic. |
| HS-2 | Tong Spend vuot $1,400 va 0 Purchase cong don | Spend > $1,400 VA Purchase_total = 0 | Dashboard: `=SUM(Purchase)` toan bo W2+W3 | `[ ] Vi pham` `[ ] OK` | **DUNG NGAY** — soa lai store UX / gia / checkout. |
| HS-3 | Tong Spend tich luy > $3,500 chua co angle ROAS >= 1.5 | Spend_tong > $3,500 VA khong co angle nao dat Cash_ROAS >= 1.5 qua >= 3 ngay lien tiep | Loc dashboard theo Angle, tinh ROAS trung binh 3 ngay gan nhat | `[ ] Vi pham` `[ ] OK` | **DUNG TOAN BO** — review lai product-market fit, xem xet dong du an. |
| HS-4 | PayPal bi limit / ban tai khoan | Tat ca giao dich PayPal bi tu choi hoac tai khoan bi restrict | Dang nhap PayPal Business → kiem tra Resolution Centre | `[ ] Vi pham` `[ ] OK` | DUNG SCALE. Chuyen 2Checkout lam cong chinh, xu ly vi pham truoc. |

> **Neu bat ky HS nao vi pham → DUNG, KHONG xem tiep Phan 1.**

---

## PHAN 1 — 4 TIEU CHI CHINH (PHAI DU CA 4)

### Tieu chi 1 — Cash ROAS >= 1.5 va dang huong len

| Hang muc | Chi tiet |
|---|---|
| **Nguong bat buoc** | Cash_ROAS >= 1.5 tinh theo 3 ngay gan nhat W3 (Ngay 19–21) |
| **"Dang huong len"** | Cash_ROAS Ngay 21 >= Cash_ROAS Ngay 20 >= Cash_ROAS Ngay 19 (hoac it nhat 2/3 ngay tang) |
| **Cach do** | Dashboard → loc Ngay 19–21 → `=SUM(Revenue_released)/SUM(Spend)` cho tung ngay |
| **Nguon so** | Cot `Cash_ROAS` trong `W2-15-dashboard-ads.csv` |
| **Vi du tinh** | Ngay 19: 1.3 · Ngay 20: 1.6 · Ngay 21: 1.8 → ROAS tang → tick |
| **Ket qua do duoc** | Cash_ROAS 3 ngay: `[dien so]` · `[dien so]` · `[dien so]` |
| **Xu huong** | `[ ] Tang` `[ ] Giam` `[ ] Phang` |
| **GO / NO-GO** | `[ ] GO` `[ ] NO-GO` |

---

### Tieu chi 2 — >= 5–8 Purchase verified (cong don tu W2)

| Hang muc | Chi tiet |
|---|---|
| **Nguong bat buoc** | Tong Purchase da duoc PayPal RELEASE (khong tinh don test, khong tinh don dang hold) |
| **Nguong toi thieu** | >= 5 don (de scale tham do); >= 8 don (de scale tu tin) |
| **Cach do** | Dashboard → `=SUMIF(Note,"<>*hold*",Purchase)` hoac dem thu cong don co Cash_Revenue > 0 |
| **Kiem tra cheo** | Hop hop PayPal Business → Transactions → loc "Completed" → dem so luong don match voi Shopify order ID |
| **Nguon so** | Cot `Purchase` va `Cash_ROAS` trong dashboard; Shopify Orders; PayPal Transactions |
| **Ket qua do duoc** | Tong Purchase verified: `[dien so]` don |
| **GO / NO-GO** | `[ ] GO (>= 5)` `[ ] NO-GO (< 5)` `[ ] GO manh (>= 8)` |

---

### Tieu chi 3 — 1 angle ro rang vuot troi

| Hang muc | Chi tiet |
|---|---|
| **Nguong bat buoc** | Angle thang co Cash_ROAS cao hon angle thu 2 it nhat 30% VA co >= 3 Purchase rieng |
| **"Ro rang vuot troi"** | Angle thang: ROAS >= 1.5 · Angle thu 2: ROAS < 1.15 (hoac chenh lech >= 0.35 ROAS) |
| **Cach do** | Dashboard → Group by `Angle` → `=SUMIF(Angle,"introvert",Revenue)/SUMIF(Angle,"introvert",Spend)` (lam tuong tu cho burnout, pet-parent) |
| **So sanh** | Angle thang: `[ten]` ROAS `[so]` · Angle thu 2: `[ten]` ROAS `[so]` · Chenh lech: `[so]` |
| **Nguon so** | Cot `Angle`, `Cash_ROAS` trong `W2-15-dashboard-ads.csv` |
| **Ket qua** | Angle thang xac dinh: `[dien]` · Purchase cua angle nay: `[so]` |
| **GO / NO-GO** | `[ ] GO` `[ ] NO-GO` |

---

### Tieu chi 4 — PayPal khong hold / khong limit

| Hang muc | Chi tiet |
|---|---|
| **Nguong bat buoc** | Khong co "Payment on hold" > 48h lien tiep; tai khoan khong bi flag/restrict/limit |
| **"Hold chap nhan duoc"** | Hold < 24h do don moi la binh thuong; hold > 48h hoac hold > 30% doanh thu trong 7 ngay la van de |
| **Cach do** | PayPal Business → Activity → kiem tra trang thai tung giao dich · Resolution Centre → xem co case nao mo khong |
| **Nguon so** | Giao dien PayPal Business (khong co trong dashboard CSV) |
| **Ket qua kiem tra** | So don dang hold: `[so]` · Tong value hold: `$[so]` · Co restriction khong: `[ ] Co` `[ ] Khong` |
| **GO / NO-GO** | `[ ] GO` `[ ] NO-GO` |

---

## PHAN 2 — TONG HOP QUYET DINH

| Tieu chi | Nguong | Ket qua | GO? |
|---|---|---|---|
| HS-1: Spend > $1,400 & ROAS < 0.8 | Khong vi pham | `[dien]` | `[ ]` |
| HS-2: Spend > $1,400 & 0 Purchase | Khong vi pham | `[dien]` | `[ ]` |
| HS-3: Spend > $3,500 & chua co ROAS >= 1.5 | Khong vi pham | `[dien]` | `[ ]` |
| HS-4: PayPal limit/ban | Khong vi pham | `[dien]` | `[ ]` |
| TC-1: Cash ROAS >= 1.5 dang len | ROAS 3 ngay gan nhat | `[dien]` | `[ ]` |
| TC-2: >= 5 Purchase verified | Tong don W2+W3 | `[dien]` | `[ ]` |
| TC-3: 1 angle vuot troi | Chenh lech >= 30% | `[dien]` | `[ ]` |
| TC-4: PayPal OK | Khong hold/limit | `[dien]` | `[ ]` |

### Ket luan cuoi cung Ngay 22:

```
[ ] TAT CA 4 tieu chi chinh GO + 0 hard-stop vi pham
    → SCALE: tang budget angle thang 20–30%/ngay (KHONG gap doi)
    → Hanh dong: thuc hien W4-22

[ ] THIEU >= 1 tieu chi chinh (nhung khong co hard-stop)
    → NO-GO SCALE: giu nguyen budget W3, tiep tuc toi uu
    → Ghi ro tieu chi con thieu: [dien]
    → Review lai Ngay 25

[ ] CO hard-stop vi pham
    → DUNG: [ghi ro HS nao] → thuc hien hanh dong tuong ung
```

**Nguoi cham + ky ten (ghi ngay gio):** _____________________ Ngay 22 / ___:___ SA

---

## PHU LUC — Nguong tham chieu nhanh (trich 08-execution-plan.md)

| Nguong | Gia tri | Nguon |
|---|---|---|
| ROAS tiep tuc chay | >= 1.5 huong len | execution-plan §Muc tieu 30 ngay |
| ROAS scale manh | >= 2.3–2.4 | execution-plan §Muc tieu 30 ngay |
| Hard-stop 1 | Spend > $1,400 & ROAS < 0.8 | execution-plan §Tuan 3 GO/NO-GO |
| Hard-stop 2 | Spend > $3,500 & chua ROAS >= 1.5 | execution-plan §Quan tri dong tien |
| Scale NO-GO (budget) | Sau $1,200 tieu chua du 4 tieu chi | execution-plan §Tuan 4 |
| Nguong Purchase verified | 5–8 don | execution-plan §Tuan 4 |
| CTR tat angle | < 0.5% VA CPM > $20 | execution-plan §Tuan 2 |
