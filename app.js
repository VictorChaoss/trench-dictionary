// ========================
// TRENCH DICTIONARY – app.js
// ========================

const WORDS = [
  {
    word: "NGMI",
    phonetic: "/ɛn-dʒiː-ɛm-aɪ/",
    def: "Not Gonna Make It. A death sentence handed out to those who sell early, FUD endlessly, or make the kind of moves that would make your on-chain therapist cry. Often self-diagnosed.",
    example: '"Bro just sold his SOL at $20. NGMI."',
    origin: "Crypto Twitter, circa 2020",
    cat: "culture",
    votes: { up: 2847, down: 41 }
  },
  {
    word: "WAGMI",
    phonetic: "/wæɡ-miː/",
    def: "We Are Gonna Make It. The collective hopium of a thousand degens clutching bags. Usually chanted after a -40% candle to restore morale. Also used ironically when nothing is fine.",
    example: '"Portfolio is down 80% but WAGMI never forget."',
    origin: "Crypto Twitter, circa 2020",
    cat: "culture",
    votes: { up: 3201, down: 89 }
  },
  {
    word: "Rug Pull",
    phonetic: "/rʌɡ pʊl/",
    def: "When a project's devs yank all liquidity and vanish into the void, leaving investors holding worthless tokens and profound trust issues. The crypto equivalent of your landlord disappearing with the deposit.",
    example: '"The dev wallet just swapped everything to ETH. We got rugged, ser."',
    origin: "DeFi Summer 2020",
    cat: "risk",
    votes: { up: 5512, down: 23 }
  },
  {
    word: "Degen",
    phonetic: "/ˈdiːdʒɛn/",
    def: "Short for 'degenerate.' A term of endearment for someone who YOLOs into sketchy protocols at 3am, borrows against their bags to buy more bags, and calls it 'risk management.' Worn as a badge of honor.",
    example: '"Pure degen hours right now. Just aped $10K into a fork of a fork."',
    origin: "DeFi community, 2020",
    cat: "culture",
    votes: { up: 4100, down: 102 }
  },
  {
    word: "Diamond Hands",
    phonetic: "/ˈdaɪ.mənd hændz/",
    def: "Holding your bags through 90% drawdowns, liquidations, Twitter meltdowns, and your own mental breakdown. Either the mark of conviction or an inability to accept losses. Often both.",
    example: '"Down 95% but diamond hands, they can\'t take what they can\'t see."',
    origin: "WallStreetBets → Crypto, 2021",
    cat: "trading",
    votes: { up: 3890, down: 150 }
  },
  {
    word: "Paper Hands",
    phonetic: "/ˈpeɪ.pər hændz/",
    def: "Selling at the first sign of danger. If diamond hands is conviction, paper hands is wisdom — but nobody in the trenches will call it that. The ultimate insult hurled at anyone who takes profit.",
    example: '"He sold at $2 and it went to $200. Paper hands broke his heart."',
    origin: "WallStreetBets → Crypto, 2021",
    cat: "trading",
    votes: { up: 2760, down: 200 }
  },
  {
    word: "Aping",
    phonetic: "/ˈeɪ.pɪŋ/",
    def: "To blindly throw money into a project without research, reading the whitepaper, or asking questions. Named because you're acting like an ape — which in crypto circles is considered aspirational.",
    example: '"I just aped $5K into this new protocol. No idea what it does. LFG."',
    origin: "DeFi community, 2020",
    cat: "trading",
    votes: { up: 4230, down: 67 }
  },
  {
    word: "GM",
    phonetic: "/dʒiːˈɛm/",
    def: "Good Morning. A ritual greeting exchanged on Crypto Twitter every morning regardless of timezone, portfolio losses, or personal devastation. The protocol handshake of web3 culture.",
    example: '"GM ser. Did you see BTC just dumped 15%? GM regardless."',
    origin: "NFT / Crypto Twitter, 2021",
    cat: "culture",
    votes: { up: 2990, down: 30 }
  },
  {
    word: "GN",
    phonetic: "/dʒiːˈɛn/",
    def: "Good Night. Crypto Twitter's formal sign-off, usually at 4am after watching candles dump. Often followed by waking up 3 hours later to check charts.",
    example: '"GN everyone. See you in 2 hours when something crashes."',
    origin: "NFT / Crypto Twitter, 2021",
    cat: "culture",
    votes: { up: 1870, down: 18 }
  },
  {
    word: "Rekt",
    phonetic: "/rɛkt/",
    def: "Past tense of being financially obliterated. Could be a bad trade, a liquidation, a rug, a hack, or just the market deciding you personally don't deserve money today. There is no scale — being rekt is rekt. The guy down 5% and the guy who lost his house are both rekt. One of them is just more rekt. Getting rekt is the universe's way of teaching you risk management the hard way. Some people learn. Most don't.",
    example: '"100x long, no stop loss, fell asleep. Woke up fully rekt. Wife is still asleep. She doesn\'t know yet."',
    origin: "Gaming slang → Crypto, ~2017",
    cat: "risk",
    votes: { up: 9800, down: 44 }
  },
  {
    word: "Hopium",
    phonetic: "/ˈhoʊ.pi.əm/",
    def: "The powerful, reality-distorting drug of choice in the trenches. Made from 100% pure hope, usually inhaled when staring at a -80% portfolio. Side effects include delusion, Twitter manifestations, and never selling.",
    example: '"The chart looks terrible but I\'m on pure hopium right now."',
    origin: "Crypto Twitter, ~2019",
    cat: "culture",
    votes: { up: 3450, down: 55 }
  },
  {
    word: "Probably Nothing",
    phonetic: "/ˈprɒb.ə.bli ˈnʌθ.ɪŋ/",
    def: "Sarcastic phrase used when something is obviously a massive signal. Crypto Twitter's way of acknowledging something huge while maintaining plausible deniability. Often followed by quietly buying.",
    example: '"New partnership with BlackRock leaked. Probably nothing."',
    origin: "Crypto Twitter, 2021",
    cat: "culture",
    votes: { up: 4780, down: 29 }
  },
  {
    word: "Ser",
    phonetic: "/sɜːr/",
    def: "Intentional misspelling of 'sir.' The universal form of address in crypto, regardless of the actual gender, title, or psychological state of the recipient. Tone shifts from respectful to condescending based on context.",
    example: '"Ser, this is not financial advice but you might want to check your portfolio."',
    origin: "Crypto Twitter, ~2020",
    cat: "culture",
    votes: { up: 3100, down: 12 }
  },
  {
    word: "Wen Lambo",
    phonetic: "/wɛn ˈlæm.boʊ/",
    def: "The eternal battle cry asking when crypto gains will be enough to buy a Lamborghini. First asked in 2017, still being asked. A philosophical question about wealth, time, and self-delusion.",
    example: '"Wen lambo ser? I\'ve been holding since 2018."',
    origin: "Bitcoin community, 2017",
    cat: "culture",
    votes: { up: 5200, down: 300 }
  },
  {
    word: "DYOR",
    phonetic: "/diːˈwɔːr/",
    def: "Do Your Own Research. The legal disclaimer of the trenches. Used by influencers before shilling garbage and by everyone trying to avoid blame after your bags go to zero. Often abbreviated to avoid responsibility.",
    example: '"Up 1000% in 2 weeks. DYOR though, NFA."',
    origin: "Crypto Twitter, ~2017",
    cat: "trading",
    votes: { up: 3870, down: 22 }
  },
  {
    word: "NFA",
    phonetic: "/ɛn-ɛf-eɪ/",
    def: "Not Financial Advice. The magic words that legally absolve you of responsibility after telling 50,000 followers to buy a coin you're already holding. Similar to 'I'm not a doctor, but' in medicine.",
    example: '"This could 100x easily. NFA. Do your own research. (I hold 40%)."',
    origin: "Crypto Twitter, ~2018",
    cat: "culture",
    votes: { up: 4910, down: 18 }
  },
  {
    word: "Moonshot",
    phonetic: "/ˈmuːn.ʃɒt/",
    def: "A token with such astronomical upside potential that your target is the literal moon. Usually applied with zero basis in fundamentals and maximum basis in vibes and chart patterns.",
    example: '"This microcap is a moonshot, fundamentals are vibes and founder has 2 followers."',
    origin: "Crypto community, ~2017",
    cat: "trading",
    votes: { up: 2830, down: 60 }
  },
  {
    word: "Whale",
    phonetic: "/weɪl/",
    def: "An entity with enough capital to move markets, absorb your stops, and ruin your day with a single transaction. They don't trade the market — the market is their hunting ground and you are the fish.",
    example: '"Whale just dumped 80K ETH. That explains the candle."',
    origin: "Trading terminology → Crypto",
    cat: "trading",
    votes: { up: 5100, down: 30 }
  },
  {
    word: "Bag Holder",
    phonetic: "/bæɡ ˈhoʊl.dər/",
    def: "Someone still holding a position long after rational hope has departed. The bags grow heavier with time. Some bag holders ascend to legend status. Most do not.",
    example: '"Still holding my 2021 NFTs. Full bag holder mode. Won\'t sell. Can\'t sell."',
    origin: "Stock trading → Crypto",
    cat: "trading",
    votes: { up: 4400, down: 90 }
  },
  {
    word: "Alpha",
    phonetic: "/ˈæl.fə/",
    def: "Inside knowledge, early signals, or exclusive tips that give you an edge before the crowd arrives. The most sought-after commodity in crypto next to actual gains. Quality varies wildly — mostly vibes.",
    example: '"Dropping some alpha in the server. Don\'t share this."',
    origin: "Finance terminology → Crypto",
    cat: "trading",
    votes: { up: 4620, down: 33 }
  },
  {
    word: "Liquidation",
    phonetic: "/ˌlɪk.wɪˈdeɪ.ʃən/",
    def: "The moment your leveraged position is forcibly closed by the exchange because you had the audacity to be wrong. The market's way of telling you that 50x leverage was, in fact, not a good idea.",
    example: '"Got liquidated at $42,001. The wick was 1 dollar. Beautiful."',
    origin: "Finance → Crypto DeFi",
    cat: "risk",
    votes: { up: 5880, down: 22 }
  },
  {
    word: "Airdrop",
    phonetic: "/ˈɛər.drɒp/",
    def: "Free tokens rained down on wallets, sometimes as a reward for early usage, sometimes as a scheme to dump on recipients. The crypto equivalent of a free sample — sometimes delicious, sometimes poison.",
    example: '"Got $4K from an airdrop I forgot I qualified for. This is the way."',
    origin: "Crypto ecosystem, ~2017",
    cat: "wallet",
    votes: { up: 5500, down: 14 }
  },
  {
    word: "Floor Price",
    phonetic: "/flɔːr praɪs/",
    def: "The cheapest NFT available in a collection. The floor is both a price point and a state of mind. Degens obsess over whether the floor is 'holding.' It is never truly holding.",
    example: '"Floor dropped from 5 ETH to 0.05 ETH overnight. The floor is lava."',
    origin: "NFT ecosystem, 2021",
    cat: "nft",
    votes: { up: 3900, down: 110 }
  },
  {
    word: "Sweep the Floor",
    phonetic: "/swiːp ðə flɔːr/",
    def: "To buy all the cheapest listings of an NFT collection in one coordinated move. Usually done to artificially pump the floor price. In polite society, considered market manipulation. In the trenches, considered alpha.",
    example: '"Whales just swept the floor. Get in before the pump."',
    origin: "NFT community, 2021",
    cat: "nft",
    votes: { up: 3100, down: 55 }
  },
  {
    word: "Gas Fees",
    phonetic: "/ɡæs fiːz/",
    def: "The toll you pay to the Ethereum blockchain for the privilege of doing anything at all. During peak congestion, gas fees can exceed the value of what you're actually trying to do. Ethereum's way of saying 'please don't.'",
    example: '"Tried to move $20 of tokens. $180 in gas. Makes sense."',
    origin: "Ethereum ecosystem",
    cat: "tech",
    votes: { up: 6200, down: 88 }
  },
  {
    word: "Mint",
    phonetic: "/mɪnt/",
    def: "To create an NFT by committing it to the blockchain. The moment of birth for a JPEG that may one day be worth everything or absolutely nothing. Everyone thinks their mint will be different. Most are not.",
    example: '"Minting live in 2 mins. Gas is spiking. This is fine."',
    origin: "NFT ecosystem, 2020+",
    cat: "nft",
    votes: { up: 2700, down: 44 }
  },
  {
    word: "Pump and Dump",
    phonetic: "/pʌmp ænd dʌmp/",
    def: "A coordinated scheme where early holders hype a token to inflate the price, then sell all their holdings on the excited buyers. As old as markets themselves, but in crypto it happens every 6 minutes.",
    example: '"That influencer was clearly orchestrating a pump and dump. Clocked that early."',
    origin: "Stock manipulation → Crypto",
    cat: "risk",
    votes: { up: 5700, down: 30 }
  },
  {
    word: "FOMO",
    phonetic: "/ˈfoʊ.moʊ/",
    def: "Fear Of Missing Out. The emotional force that causes rational humans to buy tokens at all-time highs because they're going up. The primary driver of every irrationally priced asset in history.",
    example: '"Pure FOMO buy at $69K. Should have waited 5 minutes."',
    origin: "Psychology → Crypto/Finance",
    cat: "trading",
    votes: { up: 5900, down: 55 }
  },
  {
    word: "FUD",
    phonetic: "/fʌd/",
    def: "Fear, Uncertainty, and Doubt. Negative sentiment spread organically by people who are scared, or artificially by people who are short. Part of every crypto cycle. Differentiating real FUD from fake FUD is an art.",
    example: '"SEC announced an investigation. This is just FUD, probably. Maybe."',
    origin: "Tech industry → Crypto",
    cat: "culture",
    votes: { up: 4800, down: 70 }
  },
  {
    word: "Shill",
    phonetic: "/ʃɪl/",
    def: "To aggressively promote a token, project, or investment, usually while holding a bag. Shilling exists on a spectrum from enthusiastic evangelism to outright fraud. CT runs on shilling.",
    example: '"He\'s been shilling this token for 3 weeks straight. Check his wallet."',
    origin: "Carnival barker origin → Crypto",
    cat: "culture",
    votes: { up: 4100, down: 88 }
  },
  {
    word: "CT",
    phonetic: "/siːˈtiː/",
    def: "Crypto Twitter (now Crypto X). The pulsating, chaotic, occasionally brilliant hive mind where price action is predicted, influencers are built and destroyed, and every take is simultaneously right and wrong.",
    example: '"CT is oscillating between $100K predictions and end-of-bitcoin takes simultaneously."',
    origin: "Crypto community",
    cat: "culture",
    votes: { up: 3300, down: 20 }
  },
  {
    word: "Ponzinomics",
    phonetic: "/ˌpɒn.ziˈnɒm.ɪks/",
    def: "Tokenomics designed to enrich early entrants at the cost of later investors. Named after Charles Ponzi. In crypto, recognized as a flaw by observers and as 'innovative yield mechanics' by developers.",
    example: '"The 10,000% APY is giving ponzinomics. I\'m still aping in."',
    origin: "Crypto community, DeFi Summer",
    cat: "risk",
    votes: { up: 5100, down: 44 }
  },
  {
    word: "Cold Wallet",
    phonetic: "/koʊld ˈwɒl.ɪt/",
    def: "A hardware wallet kept offline to protect assets from hacks. The responsible thing all degens say they'll get tomorrow. Some actually use one. Those are the degens who survived.",
    example: '"Move your stuff off exchanges ser. Cold wallet is non-negotiable."',
    origin: "Crypto security",
    cat: "wallet",
    votes: { up: 4500, down: 11 }
  },
  {
    word: "Seed Phrase",
    phonetic: "/siːd freɪz/",
    def: "The 12 or 24 words that are the master key to your entire crypto existence. Losing this means losing everything. Sharing this means losing everything faster. Often stored on a sticky note on a monitor.",
    example: '"Never share your seed phrase. Not with your wife, not with your therapist, not with God."',
    origin: "Crypto wallet design",
    cat: "wallet",
    votes: { up: 6800, down: 5 }
  },
  {
    word: "Vaporware",
    phonetic: "/ˈveɪ.pər.wɛər/",
    def: "A project, product, or feature that has been promised but never shipped. The trenches are littered with beautiful whitepapers for vaporware. Some projects raise millions before anyone notices.",
    example: '"Four years of roadmap updates and still no product. Peak vaporware."',
    origin: "Tech industry → Crypto",
    cat: "tech",
    votes: { up: 4200, down: 33 }
  },
  {
    word: "Smart Contract",
    phonetic: "/smɑːrt ˈkɒn.trækt/",
    def: "Self-executing code on a blockchain that enforces agreements automatically. Called 'smart' because it's smart enough to also contain bugs, backdoors, and logic errors that drain $200M in under 12 seconds.",
    example: '"Smart contract exploit just drained the protocol. Code is law, apparently."',
    origin: "Ethereum / blockchain tech",
    cat: "tech",
    votes: { up: 3800, down: 60 }
  },
  {
    word: "Cope",
    phonetic: "/koʊp/",
    def: "The psychological mechanism employed by bag holders to rationalize why their investment didn't go to zero on purpose. Used as both a noun and a verb. Copium is the gaseous form.",
    example: '"That\'s just cope. The token is dead, sir. The dev left the Telegram."',
    origin: "Internet culture → Crypto",
    cat: "culture",
    votes: { up: 3600, down: 77 }
  },
  {
    word: "Tokenomics",
    phonetic: "/ˌtoʊ.kəˈnɒm.ɪks/",
    def: "The supply, distribution, and economic mechanics of a token. Good tokenomics align incentives. Bad tokenomics are a sophisticated mechanism to distribute wealth from latecomers to early insiders.",
    example: '"80% to the team, 10% airdrop, 10% public. Interesting tokenomics."',
    origin: "Crypto community",
    cat: "tech",
    votes: { up: 3100, down: 40 }
  },
  {
    word: "Wen Moon",
    phonetic: "/wɛn muːn/",
    def: "The question that has haunted every crypto investor since the dawn of time. When will my bags achieve lunar velocity? Nobody knows. Everyone asks. The moon remains elusive.",
    example: '"Bought in 2019. Wen moon ser. Wen."',
    origin: "Bitcoin community, ~2017",
    cat: "culture",
    votes: { up: 4400, down: 200 }
  },
  {
    word: "LFG",
    phonetic: "/ɛl-ɛf-dʒiː/",
    def: "Let's F***ing Go. The battle cry of the trenches. Deployed when a token launches, when price pumps, when you're about to do something probably inadvisable, or when morale needs an emergency injection.",
    example: '"New ATH. LFG!!!!! We are SO back."',
    origin: "Gaming → Crypto Twitter",
    cat: "culture",
    votes: { up: 5900, down: 22 }
  },
  {
    word: "We Are So Back",
    phonetic: "/wiː ɑːr soʊ bæk/",
    def: "Chanted after any positive price movement following a prolonged dump. The amplitude of celebration is inversely proportional to how bad things actually were. Frequently premature.",
    example: '"Up 3% after -60%. WE ARE SO BACK."',
    origin: "Crypto Twitter, ~2022",
    cat: "culture",
    votes: { up: 5300, down: 90 }
  },
  {
    word: "It's Over",
    phonetic: "/ɪts ˈoʊ.vər/",
    def: "Declared at every significant price dip, every regulatory announcement, and every hack. Has been declared hundreds of times. So far, it has not been over. This is crypto's version of 'the boy who cried wolf.'",
    example: '"BTC under $20K. It\'s over." (It wasn\'t over.)',
    origin: "Crypto Twitter, recurring",
    cat: "culture",
    votes: { up: 4800, down: 55 }
  },
  {
    word: "This Is The Way",
    phonetic: "/ðɪs ɪz ðə weɪ/",
    def: "Expression of collective agreement and affirmation. Borrowed from The Mandalorian. Used to endorse both wise security practices and spectacularly reckless financial decisions with equal conviction.",
    example: '"Hardware wallet, no KYC, self-custody. This is the way."',
    origin: "The Mandalorian → Crypto",
    cat: "culture",
    votes: { up: 3200, down: 44 }
  },
  {
    word: "Alon",
    phonetic: "/ˈeɪ.lɒn/",
    def: "The co-creator of Pump.fun and one of the most brazen extractors in crypto history. Built a machine that prints billions in fees off the backs of degens, dangled an airdrop like a carrot for over a year, then quietly shelved it while pocketing the bag. Absolute scum of the earth. The kind of guy who shakes your hand, smiles, and has already emptied your wallet before you finish the handshake. The trenches will never forgive. NGMI in the karma department.",
    example: '"Waited 14 months for that airdrop. Alon said probably. He meant never. Scum."',
    origin: "Pump.fun, Solana ecosystem, 2024",
    cat: "person",
    votes: { up: 8100, down: 190 }
  },
  {
    word: "Bundling",
    phonetic: "/ˈbʌn.dl.ɪŋ/",
    def: "When a dev or insider buys multiple wallets worth of a new token in the same block as the launch, simulating organic demand while secretly hoarding 20-40% of supply. Looks like community excitement. Is actually a coordinated snipe. The on-chain equivalent of a casino dealing from the bottom. Almost always precedes a rug.",
    example: '"Chain showed 47 buys in block 1. It was one guy bundling. Classic."',
    origin: "Solana meme coin meta, 2024",
    cat: "risk",
    votes: { up: 3700, down: 28 }
  },
  {
    word: "Mooning",
    phonetic: "/ˈmuː.nɪŋ/",
    def: "When a token is actively going parabolic — price ascending with such velocity that chart-watchers start manifesting Lamborghinis in real time. Not to be confused with 'about to moon' which is what people say when it's actually distributing. True mooning is rare. Charts claiming to be mooning are not.",
    example: '"It was mooning so hard I forgot to take profit. Now I\'m poor again. Classic."',
    origin: "Crypto trading culture, ~2017",
    cat: "trading",
    votes: { up: 4900, down: 60 }
  },
  {
    word: "Rugging",
    phonetic: "/ˈrʌɡ.ɪŋ/",
    def: "The active, present-tense form of a rug pull — the moment the dev is in the process of draining liquidity, dumping their wallet, and deleting the Telegram while your buy order is still pending. Rugging is to rug pull what dying is to death: the experience in real time. Often detected one block too late.",
    example: '"Bro the chart just went vertical down. He\'s rugging us live. RIP the chat."',
    origin: "DeFi / Solana trenches, 2021–present",
    cat: "risk",
    votes: { up: 5400, down: 15 }
  },
  {
    word: "Orangie",
    phonetic: "/ˈɒr.ɪn.dʒi/",
    def: "Massively large CT influencer with an even bigger appetite for fucking over his own followers. This fat clown buys a bag, tweets the call to his audience, dumps on their heads the moment they ape in, then wipes his mouth and orders another meal. His followers aren't customers — they're the food. Every call is a setup. Every entry alert is a exit notice for him. Probably the most brazen insider-trading grifter on CT. Do not engage. Do not follow. Do not buy what this man tweets. Block and move on.",
    example: '"Just saw Orangie tweet it with a fire emoji. He\'s already out. His followers are fucked. Again."',
    origin: "Crypto Twitter influencer lore",
    cat: "person",
    votes: { up: 9200, down: 310 }
  },
  {
    word: "KOL",
    phonetic: "/kɒl/",
    def: "Key Opinion Leader. Fanciest possible name for a professional liar with a large following. This person woke up, checked their DMs, saw a project offering them $30K worth of tokens to post bullish, accepted, and is now standing in front of their ring light telling YOU this is the next 100x while their sell orders are already queued. They do not believe a single word they are saying. They have not read the whitepaper. They will not hold past the next block. You are not their community — you are their exit. The moment you ape in because your favourite KOL called it, you become the reason they got paid. Your loss is their invoice. Some of them will even come back the next week with another call, and the week after that, forever, because there is always a new project that needs a shill and always a new batch of degens who haven't been burned yet. Block every single one of them.",
    example: '"Trusted a KOL call. Bought the top. Watched him dump. Saw him post another call 3 days later. I am so tired."',
    origin: "Crypto marketing, 2022–present",
    cat: "person",
    votes: { up: 14800, down: 190 }
  },
  {
    word: "Kek",
    phonetic: "/kɛk/",
    def: "The purest unit of crypto laughter. Imported from 4chan where 'kek' replaced 'lol' as the laugh of the terminally online, then colonised by degens who needed a sound for watching charts nuke in real time. Kek is not ha-ha funny. Kek is the laugh you make when you've been rugged three times in a week, your leverage just got liquidated, and someone in chat posts a crying Pepe. It's the sound of someone who has accepted they have no control and found peace in the chaos. Kek is also the name of the ancient frog god of darkness worshipped unironically on the internet. His prophet is Pepe. His currency is chaos. Kek wills what Kek wills.",
    example: '"Dev just posted \'we are building\' while the chart is down 97%. Kek. Absolute kek."',
    origin: "4chan → Crypto Twitter, ~2016",
    cat: "culture",
    votes: { up: 8800, down: 22 }
  },
  {
    word: "Farmer",
    phonetic: "/ˈfɑː.mər/",
    def: "A tragic creature who spends 14 hours a day clicking testnet buttons, bridging 0.001 ETH between obscure Layer-2s, and authenticating in 4,000 different Discord servers. All for the promise of a token airdrop that will ultimately be worth $12 and cost $14 in gas to claim. Farmers don't trade. They perform unpaid data entry for protocols that will eventually rug them.",
    example: '"Been farming this testnet for 9 months. Token launched. I got 4 tokens. I am broken."',
    origin: "Crypto airdrop culture",
    cat: "culture",
    votes: { up: 6100, down: 45 }
  },
  {
    word: "LARP",
    phonetic: "/lɑːrp/",
    def: "Live Action Role Play. Pretending to be rich on Crypto Twitter while eating instant noodles in real life. LARPers post Canva-edited screenshots of $2M portfolios, claim they 'rotated out at the exact top', and give unsolicited trading advice to their 42 followers. The absolute giveaway of a LARP is talking about 'preservation of capital' when their net worth is less than a used Honda Civic.",
    example: '"Bro is LARPing as a whale again. We literally saw him ask for $5 gas money yesterday."',
    origin: "Gaming slang → Crypto trenches",
    cat: "person",
    votes: { up: 8900, down: 110 }
  },
  {
    word: "TLDR",
    phonetic: "/tiː-ɛl-diː-ɑːr/",
    def: "Too Long; Didn't Read. In crypto, this means: 'I refused to read the 40-page whitepaper, I ignored the tokenomics, I skipped the lockup schedule, just tell me what the ticker is so I can market buy the absolute top.' Reading is for people who want to preserve their capital. True degens execute blindly on a single rocket emoji.",
    example: '"TLDR on this protocol? Is it a dog? Ok aping in."',
    origin: "Internet culture → Crypto",
    cat: "culture",
    votes: { up: 7700, down: 25 }
  },
  {
    word: "Pump.fun",
    phonetic: "/pʌmp fʌn/",
    def: "The absolute lowest, darkest ring of the Solana casino. A PvP slaughterhouse where any degenerated teenager with $2 and a stolen JPEG can launch a token. 99.9% of tokens launched here will be brutally rugged within 180 seconds. It is a psychological experiment in how fast human beings can evaporate their own wealth. The developers are extracting millions while the users are fighting over pennies.",
    example: '"I said I was done with pump.fun. Then I saw a coin named CumRocket69 and went all in. Lost everything."',
    origin: "Solana ecosystem, 2024",
    cat: "trading",
    votes: { up: 12500, down: 420 }
  },
  {
    word: "Retardio",
    phonetic: "/rɪˈtɑːr.di.oʊ/",
    def: "The highest state of enlightenment in the meme coin trenches. A total abandonment of logic, charts, and rational thought. Aping blindly into the most catastrophically stupid ticker available. When the market stops making sense, the only way to survive is to become retardio. It is the evolution of the degen. No thoughts. Just pure, unadulterated buy pressure on a coin with a misspelled name and a MS Paint logo. Send it.",
    example: '"Fundamentals are zero. Dev is high. Going full retardio on this one."',
    origin: "Solana trenches, 2024",
    cat: "culture",
    votes: { up: 15400, down: 88 }
  },
  {
    word: "Study",
    phonetic: "/ˈstʌ.di/",
    def: "A patronising, one-word command deployed by CT gigabrains to tell you that you are a complete idiot. Usually placed at the end of an entirely schizo, unhinged thesis about why a shitcoin will 1000x. It implies that if you don't agree with them, it's simply because you haven't done enough homework. The crypto equivalent of 'educate yourself.'",
    example: '"Solana is going to flip the global real estate market by Friday. Study."',
    origin: "Crypto Twitter gigabrain culture",
    cat: "culture",
    votes: { up: 6600, down: 40 }
  },
  {
    word: "FSH",
    phonetic: "/ɛf-ɛs-eɪtʃ/",
    def: "Full Stack Hitler. A deeply hated trader who drops a nuclear bomb on a chart by market selling 100% of their bag in a single transaction, causing an immediate 8%+ slippage and price impact. It instantly shatters the chart structure, triggers a cascade of panic jeeting, and brutally murders the momentum of the run. Absolute financial terrorism. The lowest form of life in any Telegram chat.",
    example: '"Chart was looking parabolic until some FSH market dumped his whole bag and killed the vibe. We are ruined."',
    origin: "Deep Solana trenches",
    cat: "risk",
    votes: { up: 10200, down: 85 }
  },
  {
    word: "Memescope Monday",
    phonetic: "/ˈmiːm.skoʊp ˈmʌn.deɪ/",
    def: "The biggest, most ruthless rapefest of the week. This is when all the KOLs, insiders, and cabals group up, coordinate their targets, and ruthlessly extract maximum liquidity from the innocent degens trying to make a quick buck on pump.fun. It is a scheduled massacre. If you are trading on Memescope Monday and you are not part of the cabal, you are showing up to a firing squad with a water pistol.",
    example: '"Got completely destroyed on Memescope Monday. They farmed us like cattle."',
    origin: "Pump.fun culture",
    cat: "trading",
    votes: { up: 9500, down: 120 }
  },
  {
    word: "Pajeet",
    phonetic: "/pəˈdʒiːt/",
    def: "The archetypal low-effort serial rugger. Deploys 40 identical tokens a day with misspelled tickers, promises '1000x sir' in the Telegram, and nukes the liquidity the exact second it hits $40 profit. Immediately launches the next one without taking a breath. The final boss of the Fiverr dev underworld. The reason your 'safe contract' scanner means absolutely nothing.",
    example: '"Dev said liquidity burnt sir. Turns out it was a classic Pajeet rug. Lost 2 SOL in four seconds."',
    origin: "Crypto scammer lore",
    cat: "person",
    votes: { up: 13100, down: 340 }
  },
  {
    word: "Cabal",
    phonetic: "/kəˈbɑːl/",
    def: "A private, invite-only Telegram group of influencers, whales, and OTC desk managers who secretly coordinate to pump a token and dump it on their collective followers. If you are not in the cabal, you are the cabal's product. Every natural-looking 'community takeover' or organic viral narrative was written in a cabal chat three weeks before you ever heard of it.",
    example: '"The cabal front-ran the announcement, dumped the top, and left retail holding the bag. Business as usual."',
    origin: "Crypto Twitter conspiracy → Reality",
    cat: "culture",
    votes: { up: 14200, down: 45 }
  },
  {
    word: "Wife Changing Money",
    phonetic: "/waɪf ˈtʃeɪn.dʒɪŋ ˈmʌn.i/",
    def: "Profits so disgustingly large they alter your entire socioeconomic reality, enabling you to literally upgrade your spouse. The holy grail of the trenches. Ironically, attempting to achieve wife changing money via 100x leverage usually results in 'wife changing loss,' where your spouse finds out you blew the family savings on a coin called PepeElonCum and leaves you.",
    example: '"I\'m not selling for a 2x. I am here for wife changing money or absolute ruin. There is no in-between."',
    origin: "Crypto slang, ~2020",
    cat: "culture",
    votes: { up: 18500, down: 120 }
  },
  {
    word: "Round-tripping",
    phonetic: "/raʊnd ˈtrɪp.ɪŋ/",
    def: "The psychological torture of watching your portfolio go up 800%, refusing to take a single dollar of profit because you got greedy and convinced yourself it was going to a billion market cap, and then riding it all the way back down past your original entry price. The financial equivalent of climbing Everest just to throw yourself off the peak.",
    example: '"I was up $60K on Tuesday. Today my bag is worth $400. I round-tripped the entire cycle like a complete retardio."',
    origin: "Traditional Finance → Trading Trenches",
    cat: "trading",
    votes: { up: 16700, down: 88 }
  },
  {
    word: "Cope",
    phonetic: "/koʊp/",
    def: "The delusion degens inject straight into their veins when a trade goes horribly wrong. 'The dev is just shaking out weak hands.' 'We are finding the floor here.' 'Zoom out on the monthly.' All of this is cope. It is the lies you tell yourself to avoid clicking the sell button and locking in a 95% loss. If you are explaining why the chart is actually bullish while it looks like a ski slope, you are coping.",
    example: '"Dev sold his entire wallet and deleted Telegram. Community says it\'s decentralized now. Maximum cope."',
    origin: "Internet culture → Crypto",
    cat: "culture",
    votes: { up: 13900, down: 65 }
  },
  {
    word: "Nuke",
    phonetic: "/nuːk/",
    def: "A sudden, apocalyptic red candle that wipes months of chart progress—and your net worth—in a single 1-minute interval. Caused by whales exiting, a protocol getting hacked, or a Full Stack Hitler (FSH) market selling a massive bag. When the nuke hits, Binance stops loading, the Telegram chat freezes in sheer terror, and the suicide hotline gets pinned to the crypto subreddit.",
    example: '"I stepped away to make a coffee. Came back and the chart had fully nuked. Five years of gains gone in an instant."',
    origin: "Crypto trading slang",
    cat: "risk",
    votes: { up: 15100, down: 22 }
  },
  {
    word: "Bagholder",
    phonetic: "/ˈbæɡˌhoʊl.dər/",
    def: "A tragic entity who bought the absolute top and refused to sell as the asset ground down to zero. They are now permanently trapped, holding a heavy bag of worthless tokens. In order to emotionally survive, bagholders often transform into the project's most aggressive defenders on Twitter, desperately trying to convince others to buy so they can finally exit. A bagholder is just exit liquidity that got stuck.",
    example: '"He\'s still posting bullish charts for a coin that dropped 99.9% in 2021. Terminal bagholder syndrome."',
    origin: "Stock market → Crypto",
    cat: "person",
    votes: { up: 11800, down: 75 }
  },
  {
    word: "Sniper",
    phonetic: "/ˈsnaɪ.pər/",
    def: "Bots designed to buy a token the exact millisecond liquidity is added in block zero. Snipers are the reason you can never get a good entry on a hyped launch. They buy the bottom instantaneously, artificially pump the price, and then dump their bags onto the actual humans who are trying to buy manually seconds later. The ultimate PvP weapon in the meme coin wars.",
    example: '"Liquidity was added and 14 snipers bought 60% of the supply before the tweet even went out. Dead on arrival."',
    origin: "DeFi / DEX trading",
    cat: "tech",
    votes: { up: 9400, down: 40 }
  },
  {
    word: "Dev Did Something",
    phonetic: "/dɛv dɪd ˈsʌm.θɪŋ/",
    def: "The infamous battle cry of a community in absolute denial. Shouted in Telegram right after the chart violently nukes by 90%. Instead of accepting that the developer just rugged them and absconded with the liquidity pool, the remaining bagholders try to violently cope by convincing themselves the massive sell-off was a strategic 5D-chess maneuver by the team. They are wrong. The dev did not 'do something'. The dev bought a Porsche with their money.",
    example: '"Chart is down 95% in one candle. Stay calm guys, dev did something. (Dev is currently on a flight to Dubai)."',
    origin: "Solana/BSC trenches",
    cat: "culture",
    votes: { up: 17200, down: 62 }
  },
  {
    word: "Raydium",
    phonetic: "/ˈreɪ.di.əm/",
    def: "The Solana decentralized exchange that actively hates you. Raydium will process your FOMO market-buy instantly at the absolute top of the candle, but the exact second the chart begins to nuke and you desperately try to sell, it will fail your transaction 18 times in a row with 'custom program error.' By the time the swap finally clears, your $500 is worth $3.20.",
    example: '"Chart dumping, trying to sell, but Raydium gave me a slippage error six times. Bag is now dust."',
    origin: "Solana DeFi ecosystem",
    cat: "tech",
    votes: { up: 18500, down: 420 }
  },
  {
    word: "Phantom",
    phonetic: "/ˈfæn.təm/",
    def: "A highly polished, aesthetically pleasing wallet extension that exists primarily to hold 0.02 SOL dust and a museum of 400 rugged meme coins you can't bring yourself to hide. Notorious for magically lagging, spinning, or going down for 'node maintenance' the exact critical minute you need to snipe a launch or escape a dump.",
    example: '"Button is greyed out. Phantom is lagging and the token is up 400%. My life is a tragedy."',
    origin: "Solana ecosystem",
    cat: "tech",
    votes: { up: 14200, down: 210 }
  },
  {
    word: "DexScreener",
    phonetic: "/dɛks ˈskriː.nər/",
    def: "The blinking lights of the trench casino. A website that has caused more clinical depression than actual chemical imbalances. Staring at the 1-second candles on DexScreener at 4:30 AM while listening to lo-fi beats is the closest a modern human can get to being completely lobotomized. The UI of financial ruin.",
    example: '"I haven\'t blinked in 45 minutes. The DexScreener sounds are playing in my head when I try to sleep."',
    origin: "Crypto trading tooling",
    cat: "culture",
    votes: { up: 19600, down: 85 }
  },
  {
    word: "Alpha Group",
    phonetic: "/ˈæl.fə ɡruːp/",
    def: "A $150-a-month Discord subscription where a 19-year-old feeds you the exact same trades he is actively front-running you on. Paid alpha groups are the ultimate scam: you pay a monthly fee for the privilege of being someone else's organized exit liquidity.",
    example: '"Joined the premium tier Alpha Group. They called a token, I bought it, then the admin dumped 5% of the supply on my head."',
    origin: "Crypto Twitter grifting culture",
    cat: "culture",
    votes: { up: 16100, down: 300 }
  },
  {
    word: "Jito Tip",
    phonetic: "/ˈdʒiː.toʊ tɪp/",
    def: "The mafia protection money you are forced to pay the Solana validators just to get a transaction through when the network is congested. If you don't pay the Jito bribe, your transaction doesn't exist. If you do pay the Jito bribe, you just get front-run and sandwiched by an MEV bot anyway. Lose-lose.",
    example: '"Set my Jito tip to 0.1 SOL just to sell this shitcoin and it still failed. I am paying for my own execution."',
    origin: "Solana infrastructure",
    cat: "tech",
    votes: { up: 11200, down: 115 }
  },
  {
    word: "Rugcheck",
    phonetic: "/rʌɡ tʃɛk/",
    def: "An automated scanning platform that gives you a false sense of security by telling you a token is 'Good' and 'Safe' exactly 30 seconds before the dev uses a hidden bypass function to mint 5 billion extra tokens and drain the entire pool. A comforting lie for degens who think they can outsmart a 14-year-old sociopath with a laptop.",
    example: '"Rugcheck said it was 100% safe. Mint revoked. Liquid locked. Still went to zero. Trust nothing."',
    origin: "Solana trading tools",
    cat: "tech",
    votes: { up: 12900, down: 180 }
  },
  {
    word: "Cented",
    phonetic: "/ˈsɛn.tɪd/",
    def: "A former Fortnite professional who realized there is significantly more money in dumping on teenagers in the Solana trenches than winning gaming tournaments. He pivoted from cranking 90s directly into cranking pumps and dumps. His trading strategy consists entirely of entering a low-cap coin, waiting for his massive following of underage copy-traders to artificially pump his bags, and then market selling down to zero without hesitation. The transition from eSports athlete to professional grifter was seamless.",
    example: '"Cented just bought a new wallet. Watch him nuke the chart the second his followers ape in."',
    origin: "Fortnite → Solana Grift Pipeline",
    cat: "person",
    votes: { up: 16500, down: 420 }
  },
  {
    word: "Cupsey",
    phonetic: "/ˈkʌp.si/",
    def: "Another branch of the Fortnite-to-fraud pipeline. Moves fast, types fast, and rugs even faster. Teams up with other washed-up gamers to form highly toxic trench cabals that treat the Solana blockchain like a private ATM funded entirely by their fans' lunch money. If you are copy-trading Cupsey, you are not trading — you are actively financing his luxury lifestyle one brutal slippage error at a time.",
    example: '"Cupsey called it a high-conviction play while simultaneously dumping 10% of the supply. A classic esports maneuver."',
    origin: "Fortnite culture → Crypto trenches",
    cat: "person",
    votes: { up: 15300, down: 380 }
  },
  {
    word: "Ice Poseidon",
    phonetic: "/aɪs pəˈsaɪ.dən/",
    def: "A streamer who raised $500,000 for a token, bought a Tesla with it, and then explicitly told his audience on a livestream that he was keeping the money because 'he was just looking out for himself.' The gold standard of unapologetic crypto sociopathy. If a streamer launches a coin, you are buying their next sports car.",
    example: '"He pulled an Ice Poseidon. Dumped the liquidity and then went on Twitch to gloat about it."',
    origin: "Twitch streamer lore",
    cat: "person",
    votes: { up: 18400, down: 520 }
  },
  {
    word: "Save The Kids",
    phonetic: "/seɪv ðə kɪdz/",
    def: "The token that proved eSports organizations are just organized crime syndicates with energy drink sponsors. FaZe Clan members promoted a 'charity' token to their millions of underage fans, only to instantly dump their pre-sale allocations the second it launched. They trickshotted their own fans' wallets.",
    example: '"Bro launched a coin for saving the whales but it ended up being a Save The Kids situation. Pure extraction."',
    origin: "FaZe Clan scandal",
    cat: "culture",
    votes: { up: 19100, down: 215 }
  },
  {
    word: "CryptoZoo",
    phonetic: "/ˈkrɪp.toʊzuː/",
    def: "The final boss of influencer exit liquidity, orchestrated by Logan Paul. He sold his audience on a multi-million dollar blockchain game that consisted entirely of stolen stock photos of animals, blaming developers, hackers, and the weather when absolutely nothing was delivered. An absolute masterclass in farming your own fans while pretending to be the victim.",
    example: '"The roadmap looks amazing but I\'m pretty sure it\'s just another CryptoZoo. Not touching it."',
    origin: "Influencer grift culture",
    cat: "culture",
    votes: { up: 21500, down: 480 }
  },
  {
    word: "Teenage Dev",
    phonetic: "/ˈtiːn.eɪdʒ dɛv/",
    def: "A 14-year-old sociopath operating out of a suburban bedroom. Launches 10 tokens a day on pump.fun, exploits a hidden mint function, and extracts more wealth in a 48-hour weekend than their parents will accumulate in an entire lifetime. Often types 'im 15 and i just made $1.2M' in Telegram before permanently deleting the group.",
    example: '"Chart got nuked to zero. Turns out the dev had to leave to do his middle school algebra homework. Teenage dev strikes again."',
    origin: "Solana pump.fun trenches",
    cat: "person",
    votes: { up: 15800, down: 110 }
  },
  {
    word: "BitBoy",
    phonetic: "/ˈbɪt.bɔɪ/",
    def: "The loud, sweating, unhinged embodiment of peak crypto grift. Known for shilling pure garbage to his massive YouTube audience at the exact top, then claiming he never told anyone to buy it. Will aggressively threaten to sue anyone who calls him out, while paradoxically begging his community for donations to fund his legal battles.",
    example: '"He went full BitBoy. Shilled a coin, rugged his fans, then threatened to sue the blockchain explorer for showing his wallet transactions."',
    origin: "Crypto YouTube",
    cat: "person",
    votes: { up: 14200, down: 390 }
  },
  {
    word: "ZachXBT",
    phonetic: "/zæk-ɛks-biː-tiː/",
    def: "The grim reaper of Crypto Twitter. An anonymous on-chain detective who operates with the cold, mechanical precision of a bloodhound. When ZachXBT quotes your tweet with an incredibly detailed spreadsheet mapping your secret wallets to a previously rugged scam, your crypto career is immediately and permanently over. He is the only entity influencers fear more than the SEC.",
    example: '"Bro launched a new meme coin but ZachXBT just dropped a 14-part thread exposing his old rugs. Pack it up."',
    origin: "Crypto Twitter justice",
    cat: "person",
    votes: { up: 28400, down: 12 }
  },
  {
    word: "LA Vape Cabal",
    phonetic: "/ɛl-eɪ veɪp kəˈbɑːl/",
    def: "A hyper-specific ecosystem of Los Angeles-based crypto streamers and influencers who treat the Solana blockchain like their personal piggy bank. Characterised by podcast mics, disposable vapes, and launching insider-traded meme coins to their audiences. Whenever this group 'organically' rallies around a new ticker, just assume the pre-sale wallets are already queuing market sell orders.",
    example: '"The LA Vape Cabal is shilling it on stream right now. I give it 45 minutes before the catastrophic dump."',
    origin: "Solana influencer meta, 2024-2025",
    cat: "culture",
    votes: { up: 17300, down: 410 }
  },
  {
    word: "Frank DeGods",
    phonetic: "/fræŋk diː-ɡɒdz/",
    def: "A walking masterclass in weaponized hype. Created some of the biggest NFT projects on Solana, bridged them to Ethereum, bridged them back, launched a token, and managed to polarize the entire timeline twice a week. He operates on the philosophy that any attention, whether it's absolute adoration or pure venom, is liquidity. Deeply embedded in the LA Vape Cabal ecosystem.",
    example: '"Frank just tweeted an upside-down picture of a shoe. The community thinks it\'s a bullish signal for the token. Mass delusion."',
    origin: "Solana NFT ecosystem",
    cat: "person",
    votes: { up: 15100, down: 980 }
  },
  {
    word: "FaZe Banks",
    phonetic: "/feɪz bæŋks/",
    def: "A pioneer in the art of deploying gaming audiences as exit liquidity. While his organization was busy promoting 'Save The Kids', he was perfecting the influencer pump-and-dump. He treats crypto the same way he treats highly stylized YouTube drama: loud, heavily monetized, and leaving a trail of furious teenagers in the dust.",
    example: '"FaZe Banks is hyping up a new Solana coin. Someone lock the kids away from their parents\' credit cards."',
    origin: "Esports → Crypto Pipeline",
    cat: "person",
    votes: { up: 18900, down: 230 }
  },
  {
    word: "Cryptolyxe",
    phonetic: "/ˈkrɪp.toʊ lɪks/",
    def: "An on-chain sniper and auditor known for flagging absolute garbage before it ruins the timeline. If an influencer launches a coin and Cryptolyxe highlights the contract, it means there is a 99% chance the dev wallet is currently configured to drain the entire liquidity pool in exactly four minutes. A beacon of warning in a sea of rugs.",
    example: '"I was about to ape, but Cryptolyxe showed they can pause trading anytime. Dodged a bullet."',
    origin: "CT contract auditors",
    cat: "person",
    votes: { up: 14200, down: 88 }
  },
  {
    word: "Ethan Prosper",
    phonetic: "/ˈiː.θən ˈprɒs.pər/",
    def: "A prominent Solana influencer and member of 'SOLMAFIA'. Provides trading tutorials and on-chain analysis to navigate the meme coin trenches. However, in the hyper-paranoid PVP environment of crypto, any prominent figure offering 'education' is simultaneously viewed by the broader timeline as simply training the next generation of exit liquidity for their own bags.",
    example: '"Ethan Prosper just dropped a thread on how to trade this narrative. That means the narrative is already topping out."',
    origin: "Solana trading influencers",
    cat: "person",
    votes: { up: 11900, down: 340 }
  },
  {
    word: "Scharo",
    phonetic: "/ˈʃɑːr.oʊ/",
    def: "Extremely active CT personality deeply embedded in the Web3/NFT/Meme coin crossfire. Known for intense posting schedules and having a meme coin ticker literally named after them. Represents the modern meta where an influencer's primary utility is eventually just becoming a tradable asset themselves.",
    example: '"We aren\'t even trading coins anymore, we\'re just trading influencer proxy tokens like Scharo. The market is fully broken."',
    origin: "Crypto Twitter meta",
    cat: "person",
    votes: { up: 10400, down: 280 }
  },
  {
    word: "Rektober",
    phonetic: "/rɛkˈtoʊ.bər/",
    def: "The historically cursed month of October where entire portfolios are routinely dragged behind a shed and put out of their misery. Despite historical data suggesting Q4 is bullish, Rektober exists specifically to violently shake out max-leverage degens right before the actual run begins.",
    example: '"Surviving Rektober is the hardest part. My bag went down 80% just because it got slightly cold outside."',
    origin: "Crypto cyclical lore",
    cat: "culture",
    votes: { up: 16100, down: 45 }
  },
  {
    word: "Beaver",
    phonetic: "/ˈbiː.vər/",
    def: "A CT persona known for orchestrating hyper-niche pump and dumps while maintaining the aesthetic of a friendly woodland creature. Classic example of the 'cute animal avatar = absolute sociopath' rule on Crypto Twitter.",
    example: '"Got completely destroyed by the Beaver token launch. Never trusting an animal pfp again."',
    origin: "Crypto Twitter persona",
    cat: "person",
    votes: { up: 11200, down: 320 }
  },
  {
    word: "Mitch (idrawline)",
    phonetic: "/mɪtʃ/",
    def: "One of the rare, genuinely respected TA (Technical Analysis) accounts in the meme coin space. Famous for his 'I draw line in sand' philosophy, he maps out complex market structures using simple MS Paint lines and is notoriously, shockingly accurate. In an ecosystem full of grifters using overly complex jargon to hide the fact they are dumping on you, Mitch simply draws a line and helps the community survive the chaos. A genuine force for good in the trenches.",
    example: '"Mitch drew the line in the sand exactly at 50M market cap and the chart bounced off it pixel-perfectly. The man is a wizard."',
    origin: "CT Charting Lore",
    cat: "person",
    votes: { up: 21500, down: 45 }
  },
  {
    word: "Mr Frog",
    phonetic: "/ˈmɪs.tər frɒɡ/",
    def: "An unhinged, Pepe-adjacent entity often used as a visual representation of the psychological damage sustained from trading Solana meme coins 18 hours a day. Represents the total collapse of rational thought.",
    example: '"The dev dumped again. Posting Mr Frog memes until the pain stops."',
    origin: "Trench meme culture",
    cat: "culture",
    votes: { up: 18900, down: 22 }
  },
  {
    word: "Trenchhouse",
    phonetic: "/ˈtrɛntʃ.haʊs/",
    def: "A physical location (usually a disgusting Airbnb) where 4-6 degens lock themselves in a room with Monster energy drinks, Adderall, and multiple monitors to trade a specific meta. It usually ends with everyone losing money, not showering for a week, and secretly hating each other.",
    example: '"The boys got a trenchhouse for the weekend. We are either coming out millionaires or fighting in the driveway."',
    origin: "Degen IRL culture",
    cat: "culture",
    votes: { up: 15400, down: 310 }
  },
  {
    word: "DV",
    phonetic: "/diː-viː/",
    def: "Dev Wallet. The single most terrifying wallet on the blockchain. The moment the 'DV' starts moving tokens to Raydium, the chat instantly devolves into pure panic and chaos. When the DV sells, it's over.",
    example: '"The DV just transferred 20% of the supply to a new wallet. We are about to get nuked from orbit."',
    origin: "On-chain scanning",
    cat: "tech",
    votes: { up: 19800, down: 45 }
  },
  {
    word: "Lexapro",
    phonetic: "/ˈlɛk.sə.proʊ/",
    def: "The unofficial sponsor of the Solana trading ecosystem. A required daily medication for anyone trying to manage the extreme chemical imbalances caused by watching a token go from $1M to $0 in five seconds.",
    example: '"Chart dumping, dev rugged, popping a Lexapro and going back to sleep."',
    origin: "Degen mental health",
    cat: "culture",
    votes: { up: 21200, down: 150 }
  },
  {
    word: "MLG",
    phonetic: "/ɛm-ɛl-dʒiː/",
    def: "Major League Gaming. The ancestral origin point for half the current crypto grifters. Back in 2013 they were yelling over Call of Duty matches; now they are yelling over pump.fun charts. The aggression is exactly the same, but the financial ruin is real.",
    example: '"He brought that 2012 MLG energy to the spaces just to hype up a dog coin."',
    origin: "Gaming history",
    cat: "culture",
    votes: { up: 13400, down: 88 }
  },
  {
    word: "Bonk",
    phonetic: "/bɒŋk/",
    def: "The Solana dog coin that paradoxically saved the entire ecosystem from total death during the depths of the bear market. A complete joke that accidentally mutated into a multi-billion dollar financial pillar, proving crypto makes absolutely zero sense.",
    example: '"I faded Bonk at $10M because it was a stupid dog coin. It is now a multi-billion dollar asset. I am stupid."',
    origin: "Solana ecosystem, 2022",
    cat: "trading",
    votes: { up: 24500, down: 120 }
  },
  {
    word: "Gake",
    phonetic: "/ɡeɪk/",
    def: "A legendary meme coin trader and influencer operating at the absolute pinnacle of the Solana trenches. Widely regarded as a 'meme god' for his uncanny ability to identify, snipe, and successfully trade early-stage pump.fun coins before they go parabolic. His timeline is obsessively monitored by thousands of degens hoping to catch a sliver of the alpha. When Gake is involved in a ticker, extreme PVP trading immediately follows.",
    example: '"Just saw Gake enter the chat. This coin is either going to a billion or zero in the next five minutes."',
    origin: "Solana trader lore",
    cat: "person",
    votes: { up: 19200, down: 110 }
  },
  {
    word: "Letterbomb",
    phonetic: "/ˈlɛt.ər.bɒm/",
    def: "When a dev or 'team' drops a massive, devastating medium article or Google Doc explaining why they are shutting down the project or delaying utility for 2 years, intentionally dropping it at 3 AM to avoid immediate backlash while simultaneously dumping their bags.",
    example: '"They dropped the letterbomb at 3 AM. By the time America woke up, the liquidity was completely drained."',
    origin: "Project failure meta",
    cat: "culture",
    votes: { up: 12800, down: 85 }
  },
  {
    word: "Lynk",
    phonetic: "/lɪŋk/",
    def: "An influencer who is physically incapable of not attaching an affiliate link or referral code to every single sentence they type on the internet. Their entire existence revolves around farming literal pennies from their timeline.",
    example: '"He posted a deeply emotional thread about mental health and put a Bybit referral Lynk at the bottom. Shameless."',
    origin: "Crypto Twitter affiliate meta",
    cat: "person",
    votes: { up: 11500, down: 210 }
  },
  {
    word: "Ansem (Sphere)",
    phonetic: "/ˈæn.sɛm/",
    def: "The cat-wearing prophet of the Solana supercycle who successfully mobilized the timeline to donate over $650,000 to put the Dogwifhat (WIF) logo on the Las Vegas Sphere. The timeline spent months staring at an empty Vegas skyline while the funds sat in a multisig wallet. A masterclass where the meme transitioned from organic hype into a half-million-dollar phantom event.",
    example: '"Ansem is calling for 100x. Don\'t forget we are still waiting for the hat on the Sphere. I will ape anyway."',
    origin: "Solana WIF Lore, 2024",
    cat: "person",
    votes: { up: 31200, down: 1200 }
  },
  {
    word: "Zack Morris",
    phonetic: "/zæk ˈmɒr.ɪs/",
    def: "A battle-tested legendary trader who did the impossible: went head-to-head with the SEC in court over market manipulation charges, beat them, and walked free. However, the ultimate final boss was not the US government—it was the Solana trenches. Shortly after beating the feds, he notoriously got out-PVP'd and farmed as exit liquidity by KOL vitalyxyz on a meme coin near a $120M market cap. Absolute, undeniable proof that the SEC is light work compared to a 2024 crypto grifter cabal.",
    example: '"Zack Morris literally beat the SEC in federal court just to become exit liquidity for a KOL\'s scam coin. The timeline is completely undefeated."',
    origin: "Fintwit → Crypto Pipeline",
    cat: "person",
    votes: { up: 22400, down: 85 }
  },
  {
    word: "Quant",
    phonetic: "/kwɒnt/",
    def: "A highly sophisticated algorithmic trader who writes complex Python scripts and utilizes machine learning models to analyze market inefficiencies, only to get completely destroyed and front-run by a 14-year-old on pump.fun using a free Telegram bot. Proof that a Ph.D. in Mathematics is useless against raw, weaponized autism.",
    example: '"The quant firm deployed a $50M market-making strategy on Solana and got drained by a deployer named \'skibidi_toilet\'. Absolute poetry."',
    origin: "Traditional Finance vs Crypto",
    cat: "person",
    votes: { up: 18400, down: 210 }
  },
  {
    word: "Utility",
    phonetic: "/juːˈtɪl.ɪ.ti/",
    def: "The biggest and most persistent lie in all of crypto. The delusional belief that your badly drawn dog coin will eventually be used to purchase real-world goods and services, or power a 'decentralized AI cloud computing ecosystem.' In reality, 'Utility' is just a buzzword developers use to stall for time while they slowly sell their unlocked tokens into the liquidity pool.",
    example: '"Bro, don\'t sell yet, the dev said the staking utility drops next week. (The dev is currently pricing Lamborghinis)."',
    origin: "Crypto fundamentals meta",
    cat: "culture",
    votes: { up: 26500, down: 450 }
  },
  {
    word: "X (formerly Twitter)",
    phonetic: "/ɛks/",
    def: "The digital psychiatric ward where all global financial decisions are made. A scrolling feed of pure, weaponized FOMO, fake PNL screenshots, deeply unhinged conspiracy theories, and influencers coordinating their next massive exit liquidity event. If you are getting your trading alpha from X, you are already the yield.",
    example: '"I spent 14 hours on X today reading threads about how a cat with a hat represents the singularity. My brain is fully fried."',
    origin: "The main arena",
    cat: "culture",
    votes: { up: 32100, down: 180 }
  },
  {
    word: "Yield Farming",
    phonetic: "/jiːld ˈfɑː.mɪŋ/",
    def: "The convoluted, highly stressful process of staking one completely worthless governance token to earn 10,000% APY of a second, even more worthless governance token. Essentially, a digital Ponzi scheme disguised as sophisticated decentralized finance, inevitably ending when the platform gets 'hacked' by its own creator.",
    example: '"I was yield farming on an obscure DeFi protocol and making $500 a day in emissions, then the dev drained the pool and I lost $40,000."',
    origin: "DeFi Summer 2020",
    cat: "tech",
    votes: { up: 21400, down: 320 }
  }
];

// ---- STATE ----
let words = [...WORDS];
let filteredWords = [...words];
let activeCategory = 'all';
let activeLetter = 'ALL';
let searchQuery = '';
let votes = {};

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  loadVotes();
  duplicateTicker();
  setWordOfTheDay();
  renderWords();
  bindEvents();
  updateWordCount();
  highlightAZButtons();
});

// ---- WORD COUNT ----
function updateWordCount() {
  document.getElementById('word-count').textContent = WORDS.length;
}

// ---- HIGHLIGHT A-Z ----
function highlightAZButtons() {
  const firstLetters = new Set(WORDS.map(w => w.word[0].toUpperCase()));
  document.querySelectorAll('.az-btn').forEach(btn => {
    const l = btn.dataset.letter;
    if (l !== 'ALL' && l !== '#' && firstLetters.has(l)) {
      btn.classList.add('has-words');
    }
  });
}

// ---- TICKER DUPLICATE ----
function duplicateTicker() {
  const track = document.getElementById('ticker');
  track.innerHTML += track.innerHTML;
}

// ---- WORD OF THE DAY ----
function setWordOfTheDay() {
  const dayIndex = Math.floor(Date.now() / 86400000) % WORDS.length;
  const w = WORDS[dayIndex];
  document.getElementById('wotd-word').textContent = w.word;
  document.getElementById('wotd-phonetic').textContent = w.phonetic || '';
  document.getElementById('wotd-def').textContent = w.def;
  document.getElementById('wotd-example').textContent = w.example || '';
  document.getElementById('wotd-origin').textContent = w.origin ? `📍 Origin: ${w.origin}` : '';
  const catColors = { trading:'#2ecc71', culture:'#a855f7', risk:'#e84040', wallet:'#60a5fa', nft:'#ec4899', tech:'#eab308', person:'#ff8c00' };
  const badge = document.getElementById('wotd-cat-badge');
  badge.textContent = (w.cat || 'culture').toUpperCase();
  badge.style.background = (catColors[w.cat] || '#d4a017') + '22';
  badge.style.color = catColors[w.cat] || '#d4a017';
  badge.style.border = `1px solid ${catColors[w.cat] || '#d4a017'}55`;
}

// ---- RENDER ----
function renderWords() {
  const list = document.getElementById('entries-list');
  const empty = document.getElementById('empty-state');
  const resultCount = document.getElementById('result-count');

  let filtered = words.filter(w => {
    const matchCat = activeCategory === 'all' || w.cat === activeCategory;
    const matchLetter = activeLetter === 'ALL' ||
      (activeLetter === '#' ? /^[^a-zA-Z]/.test(w.word) : w.word[0].toUpperCase() === activeLetter);
    const q = searchQuery.toLowerCase();
    const matchQ = !q || w.word.toLowerCase().includes(q) || w.def.toLowerCase().includes(q) || (w.example || '').toLowerCase().includes(q);
    return matchCat && matchLetter && matchQ;
  });

  filteredWords = filtered;
  resultCount.textContent = filtered.length ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''}` : '';

  if (!filtered.length) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  const catAccents = {
    trading: '#2ecc71',
    culture: '#a855f7',
    risk:    '#e84040',
    wallet:  '#60a5fa',
    nft:     '#ec4899',
    tech:    '#eab308',
    person:  '#ff8c00',
  };

  // Group by first letter when showing ALL
  const showGroups = activeLetter === 'ALL' && !searchQuery;

  if (showGroups) {
    const groups = {};
    filtered.forEach(w => {
      const key = /^[^a-zA-Z]/.test(w.word) ? '#' : w.word[0].toUpperCase();
      if (!groups[key]) groups[key] = [];
      groups[key].push(w);
    });
    const sortedKeys = Object.keys(groups).sort((a, b) => {
      if (a === '#') return 1;
      if (b === '#') return -1;
      return a.localeCompare(b);
    });
    list.innerHTML = sortedKeys.map(letter => `
      <div class="letter-group" id="group-${letter}">
        <div class="letter-anchor">${letter}</div>
        ${groups[letter].map(w => buildCard(w, catAccents)).join('')}
      </div>
    `).join('');
  } else {
    list.innerHTML = filtered.map(w => buildCard(w, catAccents)).join('');
  }
}

function buildCard(w, catAccents) {
  const id = encodeURIComponent(w.word).replace(/'/g, '%27');
  const safeWord = w.word.replace(/'/g, "\\'");
  const savedVotes = votes[w.word] || { up: w.votes.up, down: w.votes.down };
  const upVoted   = votes[`${w.word}_voted`] === 'up';
  const downVoted = votes[`${w.word}_voted`] === 'down';
  const accent = catAccents[w.cat] || '#d4a017';
  return `
    <div class="entry-card" style="--card-accent: ${accent};" id="card-${id}">
      <div class="card-head">
        <h3 class="card-word">${w.word}</h3>
        <span class="card-cat cat-${w.cat}">${w.cat.toUpperCase()}</span>
      </div>
      ${w.phonetic ? `<p class="card-phonetic">${w.phonetic}</p>` : ''}
      <p class="card-def">${w.def}</p>
      ${w.example ? `<p class="card-example">${w.example}</p>` : ''}
      <div class="card-footer">
        <div class="vote-wrap">
          <button class="vote-btn ${upVoted ? 'voted-up' : ''}" id="up-${id}" onclick="vote('${safeWord}', 'up')">
            👍 ${savedVotes.up.toLocaleString()}
          </button>
          <button class="vote-btn ${downVoted ? 'voted-down' : ''}" id="down-${id}" onclick="vote('${safeWord}', 'down')">
            👎 ${savedVotes.down.toLocaleString()}
          </button>
        </div>
        <span class="card-origin">📍 ${w.origin}</span>
      </div>
    </div>
  `;
}

// ---- VOTE ----
function vote(wordName, direction) {
  const w = words.find(x => x.word === wordName);
  if (!w) return;
  if (!votes[wordName]) votes[wordName] = { up: w.votes.up, down: w.votes.down };

  const prev = votes[`${wordName}_voted`];
  if (prev === direction) return; // already voted this way

  if (prev) votes[wordName][prev]--;
  votes[wordName][direction]++;
  votes[`${wordName}_voted`] = direction;

  saveVotes();
  renderWords();
}

// ---- PERSIST VOTES ----
function saveVotes() {
  try { localStorage.setItem('td_votes', JSON.stringify(votes)); } catch(e) {}
}
function loadVotes() {
  try {
    const saved = localStorage.getItem('td_votes');
    if (saved) votes = JSON.parse(saved);
  } catch(e) { votes = {}; }
}

// ---- EVENTS ----
function bindEvents() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  input.addEventListener('input', () => {
    searchQuery = input.value.trim();
    clearBtn.classList.toggle('visible', searchQuery.length > 0);
    renderWords();
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { searchQuery = input.value.trim(); renderWords(); }
    if (e.key === 'Escape') { input.value = ''; searchQuery = ''; clearBtn.classList.remove('visible'); renderWords(); }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    searchQuery = '';
    clearBtn.classList.remove('visible');
    renderWords();
  });

  // Category filters
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      activeCategory = tag.dataset.cat;
      renderWords();
    });
  });

  // A-Z nav
  document.querySelectorAll('.az-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.az-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLetter = btn.dataset.letter;
      renderWords();
    });
  });

  // Submit form
  document.getElementById('submit-form').addEventListener('submit', handleSubmit);

  // Request form
  document.getElementById('request-form').addEventListener('submit', handleRequest);

  // Char counter
  const defArea = document.getElementById('new-def');
  const defCount = document.getElementById('def-count');
  defArea.addEventListener('input', () => {
    defCount.textContent = `${defArea.value.length} / 500`;
  });
}

// ---- SUBMIT FORM ----
function handleSubmit(e) {
  e.preventDefault();
  const word    = document.getElementById('new-word').value.trim();
  const def     = document.getElementById('new-def').value.trim();
  const example = document.getElementById('new-example').value.trim();
  const origin  = document.getElementById('new-origin').value.trim();
  const cat     = document.getElementById('new-cat').value;

  if (!word || !def) {
    showToast('submit-toast', '⚠️ At least give us a word and a definition, ser.', 'error');
    return;
  }

  if (words.find(w => w.word.toLowerCase() === word.toLowerCase())) {
    showToast('submit-toast', '🔁 That word already exists in the trenches.', 'error');
    return;
  }

  const newEntry = {
    word,
    phonetic: '',
    def,
    example: example || '',
    origin: origin || 'Community Submission, 2025',
    cat,
    votes: { up: 0, down: 0 }
  };

  words.unshift(newEntry);
  document.getElementById('submit-form').reset();
  document.getElementById('def-count').textContent = '0 / 500';

  // Reset to ALL view to show the new word
  activeLetter = 'ALL';
  searchQuery = '';
  document.getElementById('search-input').value = '';
  document.getElementById('search-clear').classList.remove('visible');
  document.querySelectorAll('.az-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.az-btn[data-letter="ALL"]').classList.add('active');

  renderWords();
  showToast('submit-toast', '✅ Word added to the trenches! It\'s live.', 'success');
}

// ---- REQUEST FORM ----
function handleRequest(e) {
  e.preventDefault();
  const reqWord = document.getElementById('req-word').value.trim();
  if (!reqWord) {
    showToast('request-toast', '⚠️ Tell us what word you want defined, ser.', 'error');
    return;
  }
  const list = document.getElementById('pending-list');
  const li = document.createElement('li');
  li.className = 'pending-item';
  li.innerHTML = `${reqWord} <span class="pending-votes" onclick="upvoteRequest(this)">👍 <span>0</span></span>`;
  list.appendChild(li);
  document.getElementById('request-form').reset();
  showToast('request-toast', '📨 Request logged! The trenches will answer.', 'success');
}

// ---- UPVOTE REQUEST ----
function upvoteRequest(el) {
  if (el.classList.contains('voted')) return;
  el.classList.add('voted');
  const counter = el.querySelector('span');
  counter.textContent = parseInt(counter.textContent) + 1;
}

// ---- TOAST HELPER ----
function showToast(id, msg, type) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.display = 'block';
  el.className = 'submit-toast' + (type === 'error' ? ' toast-error' : '');
  setTimeout(() => { el.style.display = 'none'; }, 3500);
}
