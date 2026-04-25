export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const SUPA_URL = "https://hyblyfssbjozuctekuak.supabase.co/rest/v1/dictionary";
  const SUPA_KEY = "sb_publishable_naX6qqbRp_AdtXNpHtpI2g_bHhNAErA";

  try {
    const { word, def, example, origin, cat } = req.body;

    const authHeaders = {
      "apikey": SUPA_KEY,
      "Authorization": `Bearer ${SUPA_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    };

    const payload = {
      word: word,
      def: def,
      example: example || "",
      origin: origin || "",
      cat: cat || "culture",
      status: "pending"
    };

    const response = await fetch(SUPA_URL, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const err = await response.text();
      // Supabase RLS error check
      if (err.includes("new row violates row-level security policy")) {
        return res.status(403).json({ error: "RLS blocking insertions. Disable RLS on the table to allow submissions." });
      }
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
