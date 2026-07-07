// POST /api/sepay-webhook  — SePay ban tin khi co tien vao.
// Luong xac nhan don dung /api/order-status (truy van API) => webhook chi can tra 200.
// Xac thuc HMAC-SHA256 (header X-SePay-Signature) la BEST-EFFORT: log ket qua, khong chan,
// vi so do ky chinh xac cua SePay can xac minh tu log webhook that. Sau khi xac minh -> siet lai.
import crypto from "crypto";

export const config = { api: { bodyParser: false } };

function readRaw(req) {
  return new Promise(function (resolve) {
    let d = "";
    req.on("data", function (c) { d += c; });
    req.on("end", function () { resolve(d); });
    req.on("error", function () { resolve(d); });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true, note: "sepay webhook endpoint alive" });
  }
  const raw = await readRaw(req);
  const secret = process.env.SEPAY_WEBHOOK_SECRET;
  const sig = req.headers["x-sepay-signature"] || req.headers["x-sepay-signature".toLowerCase()] || null;

  let verified = null;
  if (secret && sig) {
    try {
      const calc = crypto.createHmac("sha256", secret).update(raw).digest("hex");
      verified = (calc === String(sig).trim());
    } catch (e) { verified = null; }
  }

  let payload = {};
  try { payload = JSON.parse(raw || "{}"); } catch (e) {}

  console.log("[sepay-webhook]", JSON.stringify({
    verified: verified,
    amount_in: payload.transferAmount || payload.amount_in || payload.amount || null,
    content: payload.content || payload.transaction_content || payload.description || null,
    ref: payload.referenceCode || payload.reference_number || null
  }));

  return res.status(200).json({ success: true });
}
