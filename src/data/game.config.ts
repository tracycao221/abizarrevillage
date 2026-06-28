import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "A Bizarre Village",
  slug: "a-bizarre-village",
  domain: "https://abizarrevillage.com",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Stand Arrows",
    abbr: "Arrows"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Checked frequently during the beta",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/7150360576/A-Bizarre-Village",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense",
    usesRuntimeConfig: true
  }
};
