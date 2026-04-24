export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { ca } = req.body;
  if (!ca || ca.trim() === '') {
    return res.status(400).json({ error: 'Contract Address is required.' });
  }

  try {
    // 1. Fetch data from DexScreener
    const dexResp = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${ca.trim()}`);
    const dexData = await dexResp.json();

    if (!dexData.pairs || dexData.pairs.length === 0) {
      return res.status(404).json({ error: 'Token not found on DexScreener. It might be too fresh or the dev rugged it unconditionally.' });
    }

    const pair = dexData.pairs[0];
    const name = pair.baseToken.name;
    const symbol = pair.baseToken.symbol;
    const fdv = pair.fdv ? `$${pair.fdv.toLocaleString()}` : 'Unknown';
    const socialsInfo = pair.info?.socials ? pair.info.socials.map(s => s.type).join(', ') : 'No socials';

    // 2. Prepare OpenRouter prompt
    const prompt = `You are a cynical, highly experienced, trench-hardened Solana crypto trader. 
A user has just pasted a contract address for a coin. 
Coin Name: ${name}
Ticker: $${symbol}
Current FDV (Market Cap): ${fdv}
Socials listed: ${socialsInfo}

Explain the "narrative" or "meta" of this coin in exactly 2-3 extremely brutal, trench-slang heavy sentences. 
Analyze the name and ticker to figure out what kind of meta it is (e.g., cat coin, misspelled celeb, AI agent, random object). Assume everything is a rug, a cabal coin, or an engagement farm unless proven otherwise. Be witty, aggressively honest, and sound exactly like a degen on Crypto Twitter. Do NOT use hashtags. Do NOT use emojis.`;

    // 3. Call OpenRouter
    const aiResp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://trenchdictionary.online", // Optional
        "X-Title": "Trench Dictionary" // Optional
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-haiku",
        messages: [
          { role: "system", content: "You are TrenchBot, a brutal Solana memecoin auditor with zero filter." },
          { role: "user", content: prompt }
        ]
      })
    });

    if (!aiResp.ok) {
      console.error("OpenAPI error:", await aiResp.text());
      return res.status(500).json({ error: 'AI failed to analyze the token. Tell the dev to check the OpenRouter API key on Vercel.' });
    }

    const aiData = await aiResp.json();
    const explanation = aiData.choices[0].message.content.trim();

    return res.status(200).json({
      name,
      symbol,
      fdv,
      explanation
    });

  } catch (error) {
    console.error("Explainer error:", error);
    return res.status(500).json({ error: 'Internal server error while scanning the trenches.' });
  }
}
