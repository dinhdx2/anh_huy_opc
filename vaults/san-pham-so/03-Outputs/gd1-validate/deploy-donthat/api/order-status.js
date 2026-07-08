// GET /api/order-status?code=DTxxxx&amount=179000
// Doi soat don qua SePay User API (nguon su that) — khong can luu DB.
// Doc: https://developer.sepay.vn/vi/sepay-api/v1/api-giao-dich
// v2: BO loc amount_in trong query (tranh lech bieu dien) -> lay 50 gd gan nhat, khop trong code.
// v5 (pre-ads hardening 2026-07-08): nhanh ?debug=1 CONG SAU bi-mat env DEBUG_KEY.
//     Prod KHONG dat DEBUG_KEY => debug tat hoan-toan (khong con ro danh-sach giao-dich cong-khai).
//     Can chan-doan lai: dat env DEBUG_KEY=<chuoi bi-mat> roi goi ?debug=<chuoi do>.
export default async function handler(req, res) {
  const rawCode = (req.query.code || "").toString();
  const code = rawCode.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const amount = parseInt(req.query.amount, 10) || 179000;
  const DL = process.env.KIT_DOWNLOAD_URL || "/dl/donthat-kit-9f4k2p7q.zip";

  const token = process.env.SEPAY_API_TOKEN;
  if (!token) return res.status(500).json({ paid: false, error: "server_missing_SEPAY_API_TOKEN" });

  const norm = function (s) { return (s == null ? "" : ("" + s)).toUpperCase().replace(/[^A-Z0-9]/g, ""); };
  const amtOf = function (t) { return Number(t.amount_in || t.amountIn || 0); };
  const conOf = function (t) { return norm(t.transaction_content || t.content || ""); };

  try {
    const r = await fetch("https://my.sepay.vn/userapi/transactions/list?limit=50", {
      headers: { Authorization: "Bearer " + token }
    });
    if (!r.ok) return res.status(200).json({ paid: false, error: "sepay_http_" + r.status });
    const data = await r.json();
    const txns = Array.isArray(data.transactions) ? data.transactions : [];

    // Che do debug: CHI mo khi env DEBUG_KEY duoc dat VA query debug khop dung bi-mat do.
    // Prod khong dat DEBUG_KEY => dieu-kien luon false => khong ro giao-dich ra ngoai.
    const dbgKey = process.env.DEBUG_KEY;
    if (dbgKey && req.query.debug === dbgKey) {
      return res.status(200).json({
        _debug: true,
        count: txns.length,
        looking_for: { code: code, amount: amount },
        sample: txns.slice(0, 10).map(function (t) {
          return { amount_in: amtOf(t), content: (t.transaction_content || t.content || ""), date: t.transaction_date || null };
        })
      });
    }

    if (!code) return res.status(400).json({ paid: false, error: "missing_code" });

    const match = txns.find(function (t) {
      return conOf(t).indexOf(code) !== -1 && amtOf(t) >= amount;
    });

    if (match) {
      return res.status(200).json({
        paid: true, ref: code, download: DL,
        txn_date: match.transaction_date || null, amount: amtOf(match)
      });
    }
    return res.status(200).json({ paid: false });
  } catch (e) {
    return res.status(200).json({ paid: false, error: "query_failed" });
  }
}
