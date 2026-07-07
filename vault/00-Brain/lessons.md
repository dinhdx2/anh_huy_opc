# lessons.md — Bài-học đơn-vòng (append-only)

> **File MỚI (luồng generic v3).** Khép-vòng PHA 3 (`03d`): mỗi **vòng đơn-vòng** (vá tại-chỗ trong khuôn cũ,
> KHÔNG leo tầng) ghi 1 dòng vào đây. Song-vòng (leo tầng) ghi vào file Brain của tầng + `decisions-log.md` (nhãn `altitude`).
> Cột: `ngày · action_id · vòng · quan-sát · vá · kết-quả(đo-hơn/chưa-đo/hết-K)`. Schema: spec 03d §3.2.

| ngày | action_id | vòng | quan-sát | vá (trong khuôn cũ) | kết-quả |
|---|---|---|---|---|---|
| _(chưa có vòng nào — DN ở GĐ1 pre-launch)_ | | | | | |
