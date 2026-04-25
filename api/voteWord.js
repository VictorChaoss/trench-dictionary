export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { wordObj, direction } = req.body;
  if (!wordObj || !wordObj.word || !direction) return res.status(400).json({ error: 'Missing parameters' });

  const SUPA_URL = "https://hyblyfssbjozuctekuak.supabase.co/rest/v1/dictionary";
  const SUPA_KEY = "sb_publishable_naX6qqbRp_AdtXNpHtpI2g_bHhNAErA";
  
  const authHeaders = {
    "apikey": SUPA_KEY,
    "Authorization": `Bearer ${SUPA_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  };

  try {
    // 1. EXACT Match Search for the word
    const encodedWord = encodeURIComponent(wordObj.word);
    const searchRes = await fetch(`${SUPA_URL}?word=eq.${encodedWord}&select=id,votes_up,votes_down`, {
      method: 'GET',
      headers: authHeaders
    });

    if (!searchRes.ok) throw new Error("Search failed: " + await searchRes.text());
    const existingWords = await searchRes.json();

    if (existingWords.length > 0) {
      // It exists -> PATCH increment
      const match = existingWords[0];
      const patchData = {};
      if (direction === 'up') patchData.votes_up = match.votes_up + 1;
      if (direction === 'down') patchData.votes_down = match.votes_down + 1;

      const patchRes = await fetch(`${SUPA_URL}?id=eq.${match.id}`, {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify(patchData)
      });
      
      if (!patchRes.ok) throw new Error("Patch failed: " + await patchRes.text());
      return res.status(200).json({ action: 'incremented', data: await patchRes.json() });
    
    } else {
      // Doesn't exist -> POST full word layout with initial vote as "approved"
      const payload = {
        word: wordObj.word,
        def: wordObj.def || "Legacy word.",
        example: wordObj.example || "",
        origin: wordObj.origin || "The Trenches",
        cat: wordObj.cat || "culture",
        status: 'approved',
        votes_up: direction === 'up' ? 1 : 0,
        votes_down: direction === 'down' ? 1 : 0
      };

      const postRes = await fetch(SUPA_URL, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(payload)
      });

      if (!postRes.ok) throw new Error("Insert failed: " + await postRes.text());
      return res.status(200).json({ action: 'inserted', data: await postRes.json() });
    }

  } catch (error) {
    console.error("Vote API Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
