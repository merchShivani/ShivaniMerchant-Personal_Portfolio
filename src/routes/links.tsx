import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import portraitMobile from "@/assets/portrait-mobile.webp.asset.json";
import portraitDesktop from "@/assets/portrait-desktop.webp.asset.json";
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

type LinkItem = { label: string; icon: string; href: string; internal: boolean; tone: string; note: string; download?: boolean };

const links: LinkItem[] = [

  { label: "View My Portfolio", icon: "▤", href: "/", internal: true, tone: "bg-navy text-paper", note: "The full experience ✦" },
  { label: "View My Resume", icon: "✎", href: RESUME_URL, internal: false, tone: "bg-white text-navy", note: "Experience & education", download: true },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/shmerchant006", internal: false, tone: "bg-pink/70 text-navy", note: "/in/shmerchant006" },
  { label: "GitHub", icon: "</>", href: "https://github.com/merchShivani", internal: false, tone: "bg-lilac/70 text-navy", note: "github.com/merchShivani" },
  { label: "Email Me", icon: "✉", href: `mailto:${contact.email}`, internal: false, tone: "bg-butter/70 text-navy", note: contact.email },
];

function LinksPage() {
  return (
    <main className="page-wash min-h-dvh overflow-hidden text-navy">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-gradient-to-br from-pink/25 via-peach/30 to-lilac/30"
      >
        <div className="absolute -left-24 top-6 h-72 w-72 rounded-full bg-pink/45 blur-3xl" />
        <div className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-lilac/55 blur-3xl" />
        <div className="absolute bottom-10 left-1/5 h-60 w-60 rounded-full bg-butter/60 blur-3xl" />
        <div className="absolute bottom-1/4 right-6 h-48 w-48 rounded-full bg-mint/55 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-coral/30 blur-3xl" />
        <div className="absolute -left-10 bottom-1/3 h-44 w-44 rounded-full bg-sky/45 blur-3xl" />
        <div className="absolute left-5 top-20 text-3xl text-coral/60">✿</div>
        <div className="absolute right-8 top-14 text-2xl text-gold/80">✦</div>
        <div className="absolute bottom-24 left-8 text-2xl text-lilac/90">♡</div>
        <div className="absolute right-14 bottom-40 text-xl text-coral/60">✦</div>
        <div className="absolute left-1/2 top-8 text-xl text-sky/70">✿</div>
        <div className="absolute right-6 top-2/3 text-2xl text-gold/60">♡</div>
        <div className="absolute bottom-12 right-1/3 text-xl text-mint/80">✦</div>
        <div className="absolute left-10 top-1/2 text-lg text-peach/80">✿</div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-dvh w-full max-w-xl grid-cols-1 content-center justify-items-center px-5 py-6 sm:px-8 md:max-w-5xl md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-10 lg:gap-16 lg:px-12">
        <header className="flex flex-col items-center text-center md:items-start md:text-left">
          <a href="/" className="script text-3xl text-navy" aria-label="Shivani Merchant home">Sm<span className="align-top text-sm text-coral">♡</span></a>
          <Reveal>
            <div className="relative mx-auto mt-3 w-32 sm:w-36 md:mt-5 md:w-44 lg:w-52">
              <div className="absolute left-0 top-3 h-14 w-14 rounded-full bg-lilac/70 md:h-16 md:w-16" />
              <div className="absolute right-0 top-0 h-10 w-10 rounded-full bg-butter/70 md:h-12 md:w-12" />
              <div className="absolute -bottom-1 left-5 h-12 w-12 rounded-full bg-pink/60 md:left-6 md:h-14 md:w-14" />
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
              <p className="script absolute -right-3 -top-2 z-20 rotate-6 text-lg text-coral md:-right-4 md:-top-3 md:text-xl">hello ✦</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-3 text-3xl sm:text-4xl md:mt-5 lg:text-5xl">Shivani Merchant<span className="align-top text-lg text-gold sm:text-xl lg:text-2xl">✦</span></h1>
            <p className="eyebrow mt-2 text-[11px] sm:text-xs text-coral md:text-sm">Product Innovation × Design × Technology × Storytelling</p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-navy/70 sm:text-base md:mx-0 md:mt-3 lg:text-lg">
              I build creative solutions with technology, a curious mind, and a heart for people.
            </p>
          </Reveal>
        </header>

        <div className="w-full">
          <nav aria-label="My links" className="mt-6 w-full space-y-2.5 md:mt-0 md:space-y-3">
            {links.map((link, i) => {
              const inner = (
                <span className={`flex min-h-[56px] w-full items-center gap-3 rounded-2xl border border-navy/10 px-4 py-3 text-left shadow-[0_10px_30px_-22px_color-mix(in_oklch,var(--navy)_55%,transparent)] transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:px-5 md:min-h-[64px] md:gap-4 md:px-6 md:py-4 ${link.tone}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold md:h-12 md:w-12 md:text-lg ${link.tone.includes("text-paper") ? "bg-paper/15" : "bg-navy/5"}`}>{link.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold leading-tight md:text-lg">{link.label}</span>
                    <span className={`mt-0.5 block truncate text-[11px] font-semibold md:mt-1 md:text-xs ${link.tone.includes("text-paper") ? "text-paper/60" : "text-navy/50"}`}>{link.note}</span>
                  </span>
                  <span className="shrink-0 text-base md:text-lg" aria-hidden>↗</span>
                </span>
              );
              return (
                <Reveal key={link.label} delay={i * 60}>
                  {link.internal ? (
                    <Link to="/">{inner}</Link>
                  ) : (
                    <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" download={link.download ? "Shivani-Merchant-Resume.pdf" : undefined}>{inner}</a>
                  )}
                </Reveal>
              );
            })}
          </nav>

          <footer className="mt-5 text-center md:mt-6 md:text-left">
            <p className="text-[10px] text-navy/60">© {new Date().getFullYear()} Shivani Merchant · Built with a lot of ♡</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
