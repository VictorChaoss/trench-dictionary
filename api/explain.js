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
    const prompt = `Search the live internet (Twitter/X and crypto sites) for the Solana token named ${name} with ticker $${symbol} and Contract Address: ${ca}.
    
Identify the ACTUAL backstory, lore, drama, or narrative of this exact coin. 

Act exactly like @rickburpbot from Telegram/X. Break down the true "meta" of this coin. 
You MUST format your response exactly like this—no intros, no outros, no conversational filler. JUST the three lines below:

📖 Narrative: (1 brutal sentence explaining the lore. If search finds nothing, do NOT apologize. Just roast it as a zero-volume rug or dead ghost town based on the name ${name}.)
🌪️ Vibe: (1 short phrase describing the sentiment, e.g., "Sweaty CTO", "Cabal hostage", "Dead on arrival")
💀 Verdict: (1 brutal summary sentence)

CRITICAL BEHAVIORAL RULES:
- NEVER break character. You are a toxic crypto degen. 
- NEVER say "I couldn't find information", "The search results don't contain", or "I need to be straight with you". 
- If you find zero data on the contract address, NEVER mention the lack of data. Simply rip the coin apart for being an irrelevant, failed launch.
- ABSOLUTELY NO MARKDOWN. Do NOT use asterisks for bolding. 
- DO NOT output any citations, references, or numbers in brackets (like [1], [2]).`;

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
          { role: "system", content: "You are TrenchBot, a brutal Solana memecoin auditor. You MUST ALWAYS stay in character. NEVER apologize. NEVER mention AI, search results, or what you couldn't find. You MUST ALWAYS output ONLY the 3 bullet points." },
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
