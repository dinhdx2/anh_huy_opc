# W4-24 — Khung bao cao tong ket 30 ngay (Ngay 30)

**TL;DR:** Skeleton bao cao tong ket 30 ngay ra mat store POD dau tien — dien so thuc te vao o `[dien so]` truoc buoi review. Bao gom ROAS cash va ke toan, angle thang, CAC/AOV, bai hoc, va quyet dinh chien luoc thang 2.

> Nguoi lap: Founder · Deadline: Ngay 30 (cuoi ngay) · Nguon so chinh: `W2-15-dashboard-ads.csv` + PayPal Transactions + Shopify Orders.

---

## 1. TONG QUAN HIEU SUAT (30 NGAY)

| Chi so | Gia tri | Nguon |
|---|---|---|
| **Tong Spend ads** | `$[dien so]` | Dashboard CSV: `=SUM(Spend)` |
| **Tong Spend tat ca (bao gom setup, thiet ke, phan mem)** | `$[dien so]` / $5,000 = `[%]%` ngan sach | Tong hop toan khoản |
| **Tong Revenue (Accounting — tat ca don confirmed)** | `$[dien so]` | Shopify Orders: tong gia tri don fulfilled |
| **Tong Revenue (Cash — PayPal da release)** | `$[dien so]` | PayPal: tong Completed transactions |
| **So don tong** | `[dien so]` don | Shopify Orders |
| **So don verified (PayPal released)** | `[dien so]` don | PayPal Transactions |
| **So don dang hold** | `[dien so]` don / `$[dien so]` | PayPal Resolution Centre |
| **So don bi refund/dispute** | `[dien so]` don | PayPal + Shopify |

---

## 2. ROAS — HAI CHI SO TACH BIET

> Nhac nho: Cash_ROAS = tien thuc thu / spend. Accounting_ROAS = doanh thu ghi nhan / spend.

| Chi so ROAS | Gia tri | Danh gia |
|---|---|---|
| **Cash ROAS toan chien dich (30 ngay)** | `[dien so]` | `[ ] >= 2.3 (xuat sac)` `[ ] 1.5–2.3 (tot)` `[ ] 0.8–1.5 (hoa von)` `[ ] < 0.8 (lo)` |
| **Accounting ROAS toan chien dich** | `[dien so]` | _(xem o tren)_ |
| **ROAS angle thang (3 ngay cao nhat)** | `[dien so]` | |
| **ROAS tuan cuoi (W4, ngay 22–30)** | `[dien so]` | |
| **Xu huong ROAS (W2 → W3 → W4)** | W2: `[so]` → W3: `[so]` → W4: `[so]` | `[ ] Tang` `[ ] Giam` `[ ] Phang` |

---

## 3. HIEU SUAT THEO ANGLE

| Angle | Spend | Revenue (Cash) | Cash ROAS | So Purchase | CPP (cost/purchase) | Danh gia |
|---|---|---|---|---|---|---|
| Introvert | `$[so]` | `$[so]` | `[so]` | `[so]` | `$[so]` | `[ ] Thang` `[ ] Hoa` `[ ] Lo` |
| Burnout | `$[so]` | `$[so]` | `[so]` | `[so]` | `$[so]` | `[ ] Thang` `[ ] Hoa` `[ ] Lo` |
| Pet-parent | `$[so]` | `$[so]` | `[so]` | `[so]` | `$[so]` | `[ ] Thang` `[ ] Hoa` `[ ] Lo` |
| Retarget | `$[so]` | `$[so]` | `[so]` | `[so]` | `$[so]` | `[ ] Thang` `[ ] Hoa` `[ ] Lo` |
| **TONG** | `$[so]` | `$[so]` | `[so]` | `[so]` | `$[so]` | |

**Angle thang ro rang:** `[dien ten angle]`

**Ly do vuot troi (1–2 cau):** `[dien]`

---

## 4. CAC / AOV / BIEN LO GROSS

| Chi so | Gia tri | Ghi chu |
|---|---|---|
| **CAC (Customer Acquisition Cost)** | `$[dien so]` | = Tong Spend / Tong Purchase verified |
| **AOV (Average Order Value)** | `$[dien so]` | = Tong Revenue Cash / So don verified |
| **Gia ban trung binh / san pham** | `$[dien so]` | Shopify → Analytics → Average order value |
| **COGS uoc tinh / don** | `$[dien so]` | = Gia in + ship Printify (tham khao luc setup) |
| **Gross margin % (truoc ads)** | `[dien so]%` | = (AOV - COGS) / AOV x 100 |
| **Diem hoa von ROAS** | `[dien so]` | = 1 / Gross margin % (neu margin 40% → break-even ROAS = 2.5) |
| **Con so dau order-bump mug/sticker (W4-23)** | `[dien so]` don bump / tong | Shopify → Orders → loc "mug" hoac "sticker" |

---

## 5. VAN HANH & DONG TIEN

| Hang muc | Gia tri | Trang thai |
|---|---|---|
| Tong COGS thuc tra Printify | `$[dien so]` | |
| Phi cong PayPal/Payoneer (uoc) | `$[dien so]` | |
| Tien con trong quy COGS ($600 goc) | `$[dien so]` | |
| Tien con trong tai khoan ads | `$[dien so]` | |
| Tien du phong con lai ($500 goc) | `$[dien so]` | Khong duoc cham → xac nhan |
| Thoi gian xu ly 1 don A–Z (trung binh) | `[dien so]` gio/ngay | Tu khi co don → tracking upload |
| Ti le don co van de (refund + dispute) | `[so]` / `[tong]` = `[%]%` | |
| Pixel Purchase xanh lien tuc 30 ngay? | `[ ] Co` `[ ] Co su co (ghi ro)` | |

---

## 6. MUC TIEU 30 NGAY — DAN THANH QUA

| Muc tieu goc | Nguong | Ket qua thuc te | Dat? |
|---|---|---|---|
| 15–25 don verified | 15 toi thieu | `[dien so]` don | `[ ] Dat` `[ ] Chua` |
| >= 1 angle ROAS >= 2.2 | ROAS >= 2.2 | ROAS angle thang: `[dien so]` | `[ ] Dat` `[ ] Chua` |
| Chay tron 1 don A–Z khong loi | 1 don day du | `[ ] Hoan thanh` `[ ] Chua` | `[ ] Dat` `[ ] Chua` |

---

## 7. BAI HOC RUT RA

### 7.1 Dieu hoat dong tot (giu lai cho thang 2)
1. `[dien]`
2. `[dien]`
3. `[dien]`

### 7.2 Dieu KHONG hoat dong (loai bo / thay doi)
1. `[dien]`
2. `[dien]`

### 7.3 Dieu bat ngo (khong du bao truoc)
1. `[dien]` — Tac dong: `[dien]`

### 7.4 Mot cau tom tat 30 ngay nay
> `"[dien — vi du: Angle introvert chay tot hon du kien, nhung AOV thap lam ROAS kho vuot 2.0 neu khong co order-bump.]"`

---

## 8. QUYET DINH THANG 2

> Chon 1 trong 3 phuong an. Dien so lieu cu the ho tro quyet dinh.

### Phuong an A — SCALE (tiep tuc dau tu)

- **Dieu kien can**: Ca 4 tieu chi scale tu W4-21 da dat + Cash ROAS >= 1.5.
- **Du kien ngan sach thang 2**: `$[dien so]` (ang ads) + `$[dien so]` (COGS)
- **Angle scale**: `[dien ten]` voi budget `$[so]/ngay` tang 20–30%/ngay
- **KPI thang 2**: `[so]` don · ROAS muc tieu `[so]`
- **Rui ro chinh**: `[dien]`

`[ ] Chon phuong an A`

---

### Phuong an B — PIVOT (dieu chinh huong di)

- **Ly do pivot**: `[dien — vi du: ROAS dat 1.2 nhung niche burnout bao hoa; thu niche khac]`
- **Phuong an pivot**: `[ ] Doi niche` `[ ] Doi nen tang (Etsy organic)` `[ ] Doi format san pham` `[ ] Doi cong thanh toan`
- **Cu the**: `[dien]`
- **Toi han thu nghiem pivot**: `[ngay]`

`[ ] Chon phuong an B`

---

### Phuong an C — DUNG (dong du an / tam dung)

- **Ly do dung**: `[dien — vi du: ROAS < 0.8 lien tuc sau $1,400, khong tim duoc angle kha thi]`
- **Tai san giu lai**: Domain / Shopify store / design IP / fan page / bai hoc
- **Tai san thanh ly / dong**: `[dien]`
- **Thoi diem dong chinh thuc**: `[ngay]`

`[ ] Chon phuong an C`

---

## 9. QUYET DINH CUOI CUNG & CHU KY

| | |
|---|---|
| **Quyet dinh** | `[ ] A — SCALE` `[ ] B — PIVOT` `[ ] C — DUNG` |
| **Ly do chinh (1 cau)** | `[dien]` |
| **Buoc hanh dong tiep theo trong 48h** | `[dien]` |
| **Nguoi quyet dinh** | Founder |
| **Ngay ky** | Ngay 30 / _____–06–2026 |

---

_Ghi chu: Moi so lieu trong file nay la khung (skeleton) de Founder dien vao Ngay 30. Nguon so chuan: `W2-15-dashboard-ads.csv` (ads), PayPal Business (dong tien), Shopify Admin (don hang). Cac tinh toan ke toan (gross margin, nghia vu thue TT78) can chuyen gia ra soat truoc khi dung cho ho so chinh thuc._
