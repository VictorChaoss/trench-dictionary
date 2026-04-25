export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Basic security: require a secret admin password passed in body
  // You would set ADMIN_PASS in Vercel Environment variables. For local testing, default to 'trench'.
  const ADMIN_PASS = process.env.ADMIN_PASS || 'trench';
  const { id, action, password } = req.body;

  if (password !== ADMIN_PASS) {
    return res.status(403).json({ error: 'Unauthorized. Invalid admin password.' });
  }

  const SUPA_URL = "https://hyblyfssbjozuctekuak.supabase.co/rest/v1/dictionary";
  const SUPA_KEY = "sb_publishable_naX6qqbRp_AdtXNpHtpI2g_bHhNAErA";

  try {
    const authHeaders = {
      "apikey": SUPA_KEY,
      "Authorization": `Bearer ${SUPA_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    };

    if (action === 'approve') {
      const response = await fetch(`${SUPA_URL}?id=eq.${id}`, {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify({ status: 'approved' })
      });
      if (!response.ok) throw new Error(await response.text());
      return res.status(200).json({ success: true, action: 'approved' });
      
    } else if (action === 'reject') {
      // Just delete the row or set it to rejected
      const response = await fetch(`${SUPA_URL}?id=eq.${id}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      if (!response.ok) throw new Error(await response.text());
      return res.status(200).json({ success: true, action: 'deleted' });
    }

    return res.status(400).json({ error: 'Invalid action' });

  } catch (error) {
    console.error("Admin error:", error);
    return res.status(500).json({ error: error.message });
  }
}
