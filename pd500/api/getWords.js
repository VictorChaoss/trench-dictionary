export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { status } = req.query; // pass ?status=pending for admin, or ?status=approved for public

  const SUPA_URL = "https://hyblyfssbjozuctekuak.supabase.co/rest/v1/dictionary";
  const SUPA_KEY = "sb_publishable_naX6qqbRp_AdtXNpHtpI2g_bHhNAErA";

  try {
    let url = `${SUPA_URL}?select=*&order=created_at.desc`;
    if (status) {
      url += `&status=eq.${status}`;
    }

    const authHeaders = {
      "apikey": SUPA_KEY,
      "Authorization": `Bearer ${SUPA_KEY}`,
      "Content-Type": "application/json"
    };

    const response = await fetch(url, { headers: authHeaders });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Fetch error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
