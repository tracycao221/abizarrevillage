import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki for the Roblox Stand game: active codes, how to get Stands, a role-first tier list, Trello/Discord status, a reroll planner, and source-backed beginner guides.`,
  valueProposition: `Grab the latest ${gameConfig.name} code, learn how to get and reroll Stands, and check what is actually verified before you spend Arrows in this beta Roblox game.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial, fan-made resource. Roblox and the game's creator (72982x) remain the source of record for official support and updates. This site is not affiliated with Bizarre Lineage or A Bizarre Day.`,
  lastUpdated: "2026-06-28",
  freshnessLabel: "codes and Stand info checked during the open beta",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} stands`,
    `${gameConfig.name} how to get stands`,
    `${gameConfig.name} stand arrow`,
    `${gameConfig.name} reroll`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    "A Bizarre Village Roblox",
    "Roblox Stand game codes"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known code and how to redeem it." },
        { label: "Sources", href: "/sources", description: "Where code and update claims are checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Stand Tiers", href: "/tier-list", description: "Role-first Stand ranking with confidence labels." },
        { label: "Stand & Arrow Planner", href: "/calculator", description: "Decide whether to use, save, or reroll Arrows." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Stands, Stand Arrows, items, map, and controls." },
        { label: "Guides", href: "/guides", description: "Beginner, how-to-get-Stands, reroll, and PvP help." },
        { label: "Trello/Discord", href: "/trello", description: "Official vs community board and Discord status." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "Stand tier list" },
  { href: "/calculator", label: "Reroll planner" },
  { href: "/trello", label: "Official links" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Active codes", value: "1", note: "BetaTestOpen — checked 2026-06-28" },
  { label: "Game status", value: "Beta", note: "Expect bugs and unfinished features" },
  { label: "Roblox visits", value: "6.7M+", note: "Lifetime visits, creator 72982x" },
  { label: "Source model", value: "Clear", note: "Official, community, and needs-check labels" }
];

export const activeCodes: GameCode[] = [
  {
    code: "BetaTestOpen",
    reward: "Stand Arrows (from the official Roblox description)",
    status: "Verified",
    addedDate: "Checked 2026-06-28"
  }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Starter Stand pick",
    tier: "A",
    role: "First Stand",
    reason: "Use your first Stand Arrow on a Stand with simple, reliable moves so you can learn dodge and block before chasing the meta.",
    confidence: "Needs check",
    bestFor: ["beginner", "learning combat"],
    sourceNote: "No verified Stand list exists yet during beta. This is role guidance, not a named ranking.",
    teamNote: "A good starter Stand should not depend on rare drops."
  },
  {
    name: "PvP Stand pick",
    tier: "S",
    role: "Player vs player",
    reason: "Slot reserved for the strongest fighting Stand once the community confirms move data and matchups in the beta meta.",
    confidence: "Needs check",
    bestFor: ["PvP", "duels"],
    sourceNote: "Held until reroll odds and per-Stand viability are verified. Do not treat as final."
  },
  {
    name: "Farming Stand pick",
    tier: "B",
    role: "Money / Arrow farming",
    reason: "Slot for a Stand that clears mobs or farm routes efficiently, to be confirmed once currency and drop rates are known.",
    confidence: "Needs check",
    bestFor: ["farming", "grinding Arrows"],
    sourceNote: "Replace with checked Roblox, creator, or community testing evidence."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: "Stand & Arrow Planner",
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A decision helper for whether to use a Stand Arrow now, save it, or reroll — with confidence labels instead of fake odds."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Role-first Stand ranking for starter, PvP, and farming play, with clear confidence notes during the beta."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks the active code (BetaTestOpen) and how to redeem it via the Bag menu, with a visible checked date."
  },
  {
    title: "Trello, Discord & Wiki status",
    href: "/trello",
    eyebrow: "Community status",
    description: "Separates the official Roblox page from unverified community boards, and warns against Bizarre Lineage mix-ups."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "Redeem BetaTestOpen, get your first Stand, and learn dodge and block before fighting other players."
  },
  {
    title: "How to get Stands",
    href: "/guides/how-to-get-stands",
    eyebrow: "Guide",
    description: "What Stand Arrows do, how to use one to unlock a Stand, and how to find more while exploring the Village."
  },
  {
    title: "Reroll & Arrow decisions",
    href: "/guides",
    eyebrow: "Guide",
    description: "When to save Arrows versus reroll, plus why rerolling in PvP zones is risky. Odds shown as estimates only."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Stands & abilities",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Scaffold for Stand and ability entries. Named Stands and move data stay 'Needs check' until verified."
  },
  {
    title: "Stand Arrows & items",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "How Arrows, currency, and items work in the loop. Drop rates and values are not yet confirmed."
  },
  {
    title: "Map & controls",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Village map, farming spots, and controls (dodge and block are community-reported as Q and F on PC)."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "The source of record for the game title, creator (72982x), beta status, and the live code in the description."
  },
  {
    title: "Trello, Discord, and board status",
    href: "/trello",
    eyebrow: "Community",
    description: "An official Discord is referenced but no invite is confirmed, and no official Trello is verified. Use this page before trusting community links."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Shows which claims are official, which are community-reported, and which still need checking."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes and Stand info show a visible checked date. During the beta, only BetaTestOpen is confirmed and the rest stays clearly labeled."
  },
  {
    title: "No invented data",
    body: "Stand names, reroll odds, drop rates, and tier rankings are not faked. Unverified items are marked 'Needs check' until a real source confirms them."
  },
  {
    title: "Right game, right links",
    body: "This site covers A Bizarre Village only. It is not Bizarre Lineage or A Bizarre Day, and it points players back to the official Roblox page."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Slot for a current YouTube guide showing the Stand loop and real A Bizarre Village gameplay."
  },
  {
    title: "How to get & reroll Stands",
    href: "#",
    eyebrow: "Video",
    description: "Slot for a recent walkthrough on using Stand Arrows and rerolling safely."
  },
  {
    title: "PvP / meta showcase",
    href: "#",
    eyebrow: "Video",
    description: "Slot for a video that supports Stand rankings once the beta meta is clearer."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name}?`,
      a: `${gameConfig.name} is a JoJo's Bizarre Adventure-inspired Roblox action game where you explore a village, collect Stand Arrows, unlock Stands, and fight other players. It is currently in beta.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and the creator's channels for official support, purchases, and account issues."
    },
    {
      q: `What are the active ${gameConfig.name} codes?`,
      a: "As of the last check on 2026-06-28, the only verified active code is BetaTestOpen, which the Roblox description lists as giving Stand Arrows. Redeem it from the Bag menu."
    },
    {
      q: "Is A Bizarre Village the same as Bizarre Lineage or A Bizarre Day?",
      a: "No. They are different Roblox games with their own codes, Trello, and Discord. Codes and links from those games do not work here."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "The most reliable source is the official Roblox game description, which currently lists BetaTestOpen. Creator Discord and update posts may add more during the beta."
    },
    {
      q: "How do I redeem a code?",
      a: "Open the Menu, go to your Bag, type or paste the code, then press Redeem. If a code does not work, it may be expired, mistyped, or for a different game."
    },
    {
      q: "Why is only one code listed?",
      a: "Only BetaTestOpen is verified from the official description right now. We do not list unconfirmed codes so the page stays honest during the beta."
    }
  ],
  tierList: [
    {
      q: "Why are the Stand tiers role-based instead of named?",
      a: "The beta has no verified Stand list, reroll odds, or move data yet, so we rank by role (starter, PvP, farming) and mark everything 'Needs check' until sources confirm specifics."
    }
  ],
  calculator: [
    {
      q: "Does the planner show real reroll odds?",
      a: "No. Reroll odds and drop rates are not confirmed in the beta, so the Stand & Arrow planner gives use-now / save / reroll guidance as estimates, not exact probabilities."
    }
  ]
};
