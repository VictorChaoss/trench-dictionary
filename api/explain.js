export const maxDuration = 60; // Allow enough time for dual AI pipeline

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
    
    // EXTREMELY CRITICAL: Extract actual URLs so Perplexity knows exactly what to scrape
    const socialsList = pair.info?.socials ? pair.info.socials.map(s => s.url).join(' | ') : 'No socials listed';
    const websitesList = pair.info?.websites ? pair.info.websites.map(w => w.url).join(' | ') : 'No website listed';

    // ==========================================
    // PHASE 1: RESEARCH (PERPLEXITY SONAR PRO)
    // ==========================================
    const researchPrompt = `Perform a DEEP WEB SEARCH for the Solana token named ${name} with ticker $${symbol} and Contract Address: ${ca}.
    
CRITICAL INTEL (VISIT THESE LINKS):
- Socials: ${socialsList}
- Websites: ${websitesList}

Extract every single piece of factual lore, backstory, drama, developer history, or current narrative you can find about this EXACT token on crypto Twitter or forums. Do not roleplay. Do not format. Just give me raw, highly detailed factual findings. If you literally find nothing, simply reply "NO LORE FOUND."`;

    const researchResp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://trenchdictionary.online",
        "X-Title": "Trench Dictionary"
      },
      body: JSON.stringify({
        model: "perplexity/sonar-pro", 
        messages: [{ role: "user", content: researchPrompt }]
      })
    });

    if (!researchResp.ok) {
      console.error("Perplexity error:", await researchResp.text());
      return res.status(500).json({ error: 'Research phase failed. Check OpenRouter key.' });
    }

    const researchData = await researchResp.json();
    const rawLore = researchData.choices[0].message.content.trim();

    // ==========================================
    // PHASE 2: PERSONA FORMATTING (CLAUDE 3.5 SONNET)
    // ==========================================
    const personaPrompt = `You are TrenchBot, a brutal, highly experienced, trench-hardened Solana crypto trader (acting exactly like @rickburpbot from X/Telegram).
You have an absolute zero-tolerance policy for bullshit.

Here is the raw background lore extracted from the internet for a token named ${name} ($${symbol}):
"${rawLore}"

Break down the true "meta" of this coin based on the lore above. You MUST format your response exactly like this—no intros, no outros, no conversational filler. JUST the three lines below:

📖 Narrative: (1 brutal sentence summarizing the lore. If the lore says "NO LORE FOUND", roast it mercilessly as a zero-volume rug or dead ghost town based entirely on the name ${name}.)
🌪️ Vibe: (1 short phrase describing the sentiment, e.g., "Sweaty CTO", "Cabal hostage", "Dead on arrival")
💀 Verdict: (1 brutal summary sentence)

CRITICAL RULES:
- NEVER break character.
- ABSOLUTELY NO MARKDOWN. Do NOT use asterisks for bolding.
- DO NOT output any citations or numbers in brackets.`;

    const aiResp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://trenchdictionary.online",
        "X-Title": "Trench Dictionary"
      },
      body: JSON.stringify({
        model: "anthropic/claude-3.5-sonnet", // The best model for strict roleplay and formatting
        messages: [
          { role: "system", content: "You are TrenchBot, a deeply cynical degen. You never break character. You always output exactly 3 lines of plain text." },
          { role: "user", content: personaPrompt }
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
