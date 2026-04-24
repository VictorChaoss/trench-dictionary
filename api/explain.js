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
    const prompt = `Search the live internet (especially Twitter/X and crypto sites) for the Solana token named ${name} with ticker $${symbol} and Contract Address: ${ca}.
    
Find out the ACTUAL real-world backstory, lore, drama, or current narrative of this exact coin. Who launched it? Did it get rugged? Is there an influencer backing it? 

Act exactly like @rickburpbot from Telegram/X. Break down the true "meta" of this coin based on your findings. 
You MUST format your response exactly like this (keep it punchy, short, and brutal):

**📖 Narrative:** (1 sentence explaining the actual lore or backstory you found. If none exists, say it's an irrelevant ghost town.)
**🌪️ Vibe:** (1 short phrase describing the current sentiment, e.g., "Sweaty CTO", "Cabal holding hostage", "Dead on arrival")
**💀 Verdict:** (1 brutal summary sentence)

CRITICAL RULES:
- DO NOT output any citations, references, or numbers in brackets (like [1], [2], etc.). 
- DO NOT write an essay. Keep it concise.
- Sound like a cynical degen. Use trench dictionary slang (CTO, cabal, rug, grifter, normie bait).`;

    // 3. Call OpenRouter
    const aiResp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://trenchdictionary.online",
        "X-Title": "Trench Dictionary"
      },
      body: JSON.stringify({
        model: "perplexity/sonar",
        messages: [
          { role: "system", content: "You are TrenchBot, a brutal Solana memecoin auditor. You MUST use your search capabilities to find the actual live lore of the provided token. NEVER output academic citations." },
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
