import type { Metadata } from "next";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes`,
  description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
    url: `${siteConfig.domain}/codes`,
    images: ["/codes/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
    images: ["/codes/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes`}
        description="A Bizarre Village is in beta. We only list codes confirmed from the official Roblox description, with the date we checked them. Unverified codes are left off on purpose."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Active codes (checked 2026-06-28)"
          copy="BetaTestOpen is the only code confirmed from the official Roblox game description. If a code is not listed here, we could not verify it for A Bizarre Village."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {activeCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem codes"
            copy="Codes are redeemed from the in-game Bag menu. Steps are based on community reports during the beta and may change as the game updates."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open A Bizarre Village from the official Roblox page.</li>
            <li>2. Open the Menu, then go to your Bag.</li>
            <li>3. Type or paste the code (for example, BetaTestOpen).</li>
            <li>4. Press Redeem to claim your Stand Arrows.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="Code freshness policy"
            copy="Codes should show the date checked, source type, and conflict notes when trackers disagree. Never hide uncertainty."
          />
        </article>
      </section>
    </main>
  );
}
