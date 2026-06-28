import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} — How to Get Stands`,
  description: `How to get Stands in ${siteConfig.gameName}: use Stand Arrows, redeem BetaTestOpen for free Arrows, and decide whether to use, save, or reroll. Beta info with source notes.`,
  alternates: { canonical: `${siteConfig.domain}/guides/how-to-get-stands` },
  openGraph: {
    title: `${siteConfig.gameName} — How to Get Stands`,
    description: `How to get Stands in ${siteConfig.gameName}: Stand Arrows, the BetaTestOpen code, and reroll-vs-save decisions.`,
    url: `${siteConfig.domain}/guides/how-to-get-stands`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} — How to Get Stands`,
    description: `How to get Stands in ${siteConfig.gameName}: Stand Arrows, the BetaTestOpen code, and reroll-vs-save decisions.`,
    images: ["/opengraph-image"]
  }
};

const faqItems = [
  {
    q: "What do I need to get a Stand?",
    a: "You need a Stand Arrow. Using a Stand Arrow gives you a Stand (ability). The fastest way to get your first Arrows is to redeem the BetaTestOpen code from the Bag menu."
  },
  {
    q: "How do I get more Stand Arrows?",
    a: "Community reports say Arrows are also found by exploring the Village. Exact drop locations and rates are not verified yet, so treat farming routes as estimates during the beta."
  },
  {
    q: "Should I reroll my Stand?",
    a: "Rerolling swaps your Stand for another from the pool. The exact reroll odds are not confirmed, so save spare Arrows until you understand the system, and avoid rerolling in PvP zones where you can be attacked."
  }
];

export default function HowToGetStandsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "How to Get Stands", href: "/guides/how-to-get-stands" }
        ]}
      />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "How to Get Stands", href: "/guides/how-to-get-stands" }
        ]}
      />

      <PageIntro
        eyebrow="Beginner guide"
        title={`How to Get Stands in ${siteConfig.gameName}`}
        description="A Bizarre Village is in beta. This guide sticks to what is confirmed from the official Roblox description and clearly labels community-reported steps."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Step by step"
          title="Get your first Stand"
          copy="The quickest path uses the free code. Everything below is based on the official description plus community reports during the open beta."
        />
        <ol className="mt-6 grid gap-3 text-white/75">
          <li>1. Open A Bizarre Village from the <Link className="text-[color:var(--accent)] underline" href="/trello">official Roblox page</Link>.</li>
          <li>2. Open the Menu, then go to your Bag.</li>
          <li>3. Redeem <span className="font-mono text-[color:var(--accent)]">BetaTestOpen</span> to receive Stand Arrows. See the <Link className="text-[color:var(--accent)] underline" href="/codes">codes page</Link> for the checked date.</li>
          <li>4. Use a Stand Arrow to unlock a Stand. Your first Arrow is a safe pick &mdash; save extras until you understand rerolling.</li>
          <li>5. Learn dodge and block before fighting other players, then check the <Link className="text-[color:var(--accent)] underline" href="/tier-list">role-first tier list</Link>.</li>
        </ol>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Use, save, or reroll"
            title="Decide what to do with your Arrows"
            copy="Use the Stand & Arrow planner for a use-now, save, or reroll recommendation. It gives estimates, not exact odds, because reroll rates are not verified in the beta."
          />
          <Link className="mt-4 inline-block text-[color:var(--accent)] underline" href="/calculator">Open the Stand &amp; Arrow planner</Link>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="What is still unverified"
            title="Honest data notes"
            copy="The full Stand list, reroll odds, Arrow drop rates, and per-Stand viability are not confirmed yet. We mark these as needs-check until a reliable source verifies them, and update the checked date when they do."
          />
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="How to get Stands — quick answers" copy="" />
        <div className="mt-6 grid gap-4">
          {faqItems.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
