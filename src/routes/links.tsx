import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import portraitMobile from "@/assets/portrait-mobile.webp.asset.json";
import portraitDesktop from "@/assets/portrait-desktop.webp.asset.json";
import blossomMobile from "@/assets/blossom-mobile.webp.asset.json";
import blossomDesktop from "@/assets/blossom-desktop.webp.asset.json";
import { contact } from "@/data/portfolio";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const RESUME_URL = resumeAsset.url;


export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Shivani Merchant — Links" },
      { name: "description", content: "Shivani Merchant's digital business card — portfolio, resume, LinkedIn, GitHub and email, all in one place." },
      { property: "og:title", content: "Shivani Merchant — Links" },
      { property: "og:description", content: "Product Innovation × Design × Technology × Storytelling. Find all my links here." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: portraitMobile.url, media: "(max-width: 767px)", fetchPriority: "high" },
      { rel: "preload", as: "image", href: portraitDesktop.url, media: "(min-width: 768px)", fetchPriority: "high" },
    ],
  }),
  component: LinksPage,
});

const links = [
  { label: "View My Portfolio", icon: "▤", href: "/", internal: true, tone: "bg-navy text-paper", note: "The full experience ✦" },
  { label: "View My Resume", icon: "✎", href: RESUME_URL, internal: false, tone: "bg-white text-navy", note: "Experience & education", download: true },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/shmerchant006", internal: false, tone: "bg-pink/70 text-navy", note: "/in/shmerchant006" },
  { label: "GitHub", icon: "</>", href: "https://github.com/merchShivani", internal: false, tone: "bg-lilac/70 text-navy", note: "github.com/merchShivani" },
  { label: "Email Me", icon: "✉", href: `mailto:${contact.email}`, internal: false, tone: "bg-butter/70 text-navy", note: contact.email },
];

function LinksPage() {
  return (
    <main className="page-wash min-h-screen text-navy">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
      >
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-pink/30 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-52 w-52 rounded-full bg-lilac/40 blur-3xl" />
        <div className="absolute bottom-16 left-1/4 h-48 w-48 rounded-full bg-butter/50 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-36 w-36 rounded-full bg-mint/40 blur-3xl" />
        <div className="absolute left-6 top-24 text-xl text-coral/50">✿</div>
        <div className="absolute right-8 top-16 text-base text-gold/70">✦</div>
        <div className="absolute bottom-24 left-10 text-lg text-lilac/80">♡</div>
        <div className="absolute right-12 bottom-40 text-sm text-coral/50">✦</div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-5 py-10">
        <header className="text-center">
          <a href="/" className="script text-3xl text-navy" aria-label="Shivani Merchant home">Sm<span className="align-top text-sm text-coral">♡</span></a>
          <Reveal>
            <div className="relative mx-auto mt-6 w-40">
              <div className="absolute left-0 top-3 h-16 w-16 rounded-full bg-lilac/70" />
              <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-butter/70" />
              <div className="absolute -bottom-1 left-6 h-14 w-14 rounded-full bg-pink/60" />
              <picture>
                <source media="(min-width: 768px)" srcSet={portraitDesktop.url} type="image/webp" />
                <img
                  src={portraitMobile.url}
                  alt="Shivani Merchant"
                  width={640}
                  height={794}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative z-10 w-full rotate-[-3deg] rounded-2xl drop-shadow-2xl"
                />
              </picture>
              <p className="script absolute -right-4 -top-3 z-20 rotate-6 text-xl text-coral">hello ✦</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-6 text-3xl">Shivani Merchant<span className="align-top text-lg text-gold">✦</span></h1>
            <p className="eyebrow mt-3 text-[10px] text-coral">Product Innovation × Design × Technology × Storytelling</p>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-navy/70">
              I build creative solutions with technology, a curious mind, and a heart for people.
            </p>
          </Reveal>
        </header>

        <nav aria-label="My links" className="mt-8 space-y-3">
          {links.map((link, i) => {
            const inner = (
              <span className={`flex min-h-16 w-full items-center gap-4 rounded-2xl border border-navy/10 px-5 py-4 text-left shadow-[0_10px_30px_-22px_color-mix(in_oklch,var(--navy)_55%,transparent)] transition-transform hover:-translate-y-0.5 active:translate-y-0 ${link.tone}`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${link.tone.includes("text-paper") ? "bg-paper/15" : "bg-navy/5"}`}>{link.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold leading-tight">{link.label}</span>
                  <span className={`mt-0.5 block truncate text-[10px] font-semibold ${link.tone.includes("text-paper") ? "text-paper/60" : "text-navy/50"}`}>{link.note}</span>
                </span>
                <span className="shrink-0 text-base" aria-hidden>↗</span>
              </span>
            );
            return (
              <Reveal key={link.label} delay={i * 60}>
                {link.internal ? (
                  <Link to="/">{inner}</Link>
                ) : (
                  <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">{inner}</a>
                )}
              </Reveal>
            );
          })}
        </nav>

        <footer className="mt-10 text-center">
          <picture>
            <source media="(min-width: 768px)" srcSet={blossomDesktop.url} type="image/webp" />
            <img src={blossomMobile.url} alt="" width={480} height={800} loading="lazy" decoding="async" className="mx-auto h-20 w-36 rounded-xl object-cover object-[center_35%] opacity-80" />

          </picture>
          <p className="mt-4 text-[10px] text-navy/60">© {new Date().getFullYear()} Shivani Merchant · Built with a lot of ♡</p>
        </footer>
      </div>
    </main>
  );
}
