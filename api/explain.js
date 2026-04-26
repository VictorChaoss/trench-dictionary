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

    // Use the pair with most liquidity for accurate FDV
    const pair = dexData.pairs.reduce((best, p) => {
      const bestLiq = best.liquidity?.usd || 0;
      const pLiq = p.liquidity?.usd || 0;
      return pLiq > bestLiq ? p : best;
    }, dexData.pairs[0]);

    const name = pair.baseToken.name;
    const symbol = pair.baseToken.symbol;
    const rawFdv = pair.fdv || 0;
    const fdv = rawFdv ? `$${Number(rawFdv).toLocaleString('en-US', { maximumFractionDigits: 0 })}` : 'Unknown';
    
    // EXTREMELY CRITICAL: Extract actual URLs so Perplexity knows exactly what to scrape
    const socialsList = pair.info?.socials ? pair.info.socials.map(s => s.url).join(' | ') : 'No socials listed';
    const websitesList = pair.info?.websites ? pair.info.websites.map(w => w.url).join(' | ') : 'No website listed';

    // 1.5. Extract Pump.fun metadata (Where the real lore usually lives)
    let pumpDescription = "No Pump.fun metadata found or not a Pump.fun coin.";
    if (ca.trim().endsWith('pump')) {
      try {
        const pumpResp = await fetch(`https://frontend-api.pump.fun/coins/${ca.trim()}`, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "application/json"
          }
        });
        if (pumpResp.ok) {
          const pumpData = await pumpResp.json();
          pumpDescription = pumpData.description || "No description provided by dev.";
        }
      } catch (e) {
        console.error("Pump info error:", e);
      }
    }

    // ==========================================
    // PHASE 1: RESEARCH (PERPLEXITY SONAR PRO)
    // ==========================================
    const researchPrompt = `Perform a DEEP WEB SEARCH to discover the lore and origins of a Solana memecoin named "${name}" with ticker $${symbol} (Contract Address: ${ca}).
    
CRITICAL INTEL LINKS:
- Socials: ${socialsList}
- Websites: ${websitesList}

DEVELOPER'S TOKEN DESCRIPTION (FROM PUMP.FUN ON-CHAIN DATA):
"${pumpDescription}"

IMPORTANT SEARCH INSTRUCTIONS:
New memecoins are not usually indexed by their contract address. Instead, you MUST use the Developer's Description above to understand what real-world meme or event this is based on, and search for that.
Ask yourself: "Why did someone just launch a token named ${name}?" Did a politician just say it? Did an influencer tweet it? Is it an obscure old internet meme?

Extract every single piece of factual information you can find about:
1. The real-world cultural narrative/tweet/event behind the name "${name}".
2. Any specific drama, developer history, or crypto-twitter presence for this exact token or its specific domains/socials.

Do not roleplay. Just give me raw, highly detailed factual findings about where the meme came from and what the token's angle is. If you literally find nothing about the name or the meme, reply "NO LORE FOUND."`;

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
    const personaPrompt = `You are TrenchBot, a deeply cynical but highly experienced Solana crypto trader. You know the exact difference between a legitimate DeFi protocol, a legendary blue-chip memecoin, and a complete shitcoin, and you adapt your tone accordingly.

Here is the raw background lore extracted from the internet for a token named ${name} ($${symbol}):
"${rawLore}"

Analyze this coin based on the lore. Do not be formulaic. 
- If it is a legitimate protocol/infrastructure, give a sharp, respectful, and highly accurate analysis. 
- If the lore indicates it's a massive, beloved "cult" coin with huge volume/success, be extremely BULLISH and hype it up as a "holy grail of the trenches."
- If it is a blatantly stupid or dead memecoin, roast it mercilessly.
Avoid starting sentences with "Just another shameless..."—be creative.

Format your response exactly like this (NO intros, NO conversational filler, NO emojis):

Narrative: (1 precise sentence summarizing what this actually is. Adapt to the lore. Make it smart.)
Vibe: (1 short creative phrase describing the sentiment, e.g., "Sweaty CTO", "Institutional DeFi", "Generational Wealth")
Verdict: (1 brutal or totally bullish summary sentence.)

CRITICAL RULES:
- NEVER break character.
- ABSOLUTELY NO MARKDOWN. Do NOT use asterisks for bolding.
- NO EMOJIS of any kind.
- DO NOT output any citations or numbers in brackets.
- Keep it perfectly compact: absolutely NO empty lines between the three lines.`;

    const aiResp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://trenchdictionary.online",
        "X-Title": "Trench Dictionary"
      },
      body: JSON.stringify({
        model: "anthropic/claude-3.7-sonnet", // The best model for strict roleplay and formatting
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
