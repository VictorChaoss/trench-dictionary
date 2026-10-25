export const maxDuration = 15;

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const dexRes = await fetch("https://api.dexscreener.com/token-profiles/latest/v1", {
      headers: { "User-Agent": "TrenchDictionaryBot" }
    });
    
    if (!dexRes.ok) throw new Error("DexScreener API failed");
    
    const profiles = await dexRes.json();
    if (!profiles || profiles.length === 0) return res.status(200).json({ meta: "Unknown" });

    // Find the first solana token to extract a meta description or name
    const solToken = profiles.find(p => p.chainId === 'solana' && p.description);
    
    if (solToken) {
      // Create a punchy meta string
      let rawDesc = solToken.description.slice(0, 50).replace(/[^a-zA-Z0-9., ]/g, '');
      if (rawDesc.length > 45) rawDesc += "...";
      return res.status(200).json({ 
        meta: `Solana Devs are currently launching: "${rawDesc}"`,
        symbol: solToken.symbol || "UNKNOWN"
      });
    }

    return res.status(200).json({ meta: "Meme coins" });

  } catch (error) {
    console.error("Trending Meta fetch error:", error);
    return res.status(500).json({ error: "Failed to fetch trending meta" });
  }
}
