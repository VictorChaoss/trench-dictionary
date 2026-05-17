export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const SUPA_URL = "https://hyblyfssbjozuctekuak.supabase.co/rest/v1/dictionary";
  const SUPA_KEY = "sb_publishable_naX6qqbRp_AdtXNpHtpI2g_bHhNAErA";

  try {
    // Fetch all pending + approved submissions with a twitter_handle
    const url = `${SUPA_URL}?select=twitter_handle,status,votes_up&twitter_handle=not.is.null&status=in.(pending,approved)`;

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

    // Aggregate by handle
    const map = {};
    for (const row of data) {
      const h = (row.twitter_handle || '').trim().toLowerCase();
      if (!h) continue;
      if (!map[h]) map[h] = { handle: row.twitter_handle, submissions: 0, approved: 0, votes: 0 };
      map[h].submissions++;
      if (row.status === 'approved') map[h].approved++;
      map[h].votes += (row.votes_up || 0);
    }

    const leaderboard = Object.values(map)
      .sort((a, b) => b.approved - a.approved || b.votes - a.votes)
      .slice(0, 50);

    return res.status(200).json(leaderboard);

  } catch (error) {
    console.error("Leaderboard error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
