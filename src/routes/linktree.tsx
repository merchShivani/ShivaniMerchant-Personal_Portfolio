import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import portraitMobile from "@/assets/portrait-mobile.webp.asset.json";
import portraitDesktop from "@/assets/portrait-desktop.webp.asset.json";
import { contact } from "@/data/portfolio";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const RESUME_URL = resumeAsset.url;

export const Route = createFileRoute("/linktree")({
  head: () => ({
    meta: [
      { title: "Shivani Merchant — Linktree" },
      { name: "description", content: "Everywhere Shivani Merchant creates — portfolio, resume, LinkedIn, GitHub and email, one tap away." },
      { property: "og:title", content: "Shivani Merchant — Linktree" },
      { property: "og:description", content: "Product Innovation × Design × Technology × Storytelling. Find me everywhere." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: portraitMobile.url, media: "(max-width: 767px)", fetchPriority: "high" },
      { rel: "preload", as: "image", href: portraitDesktop.url, media: "(min-width: 768px)", fetchPriority: "high" },
    ],
  }),
  component: LinktreePage,
});

type Tile = { label: string; icon: string; href: string; internal?: boolean; dot: string; note: string; download?: boolean };

const EMAIL_SUBJECT = encodeURIComponent("Hi Shivani ♡");
const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${EMAIL_SUBJECT}`;
const outlookCompose = `https://outlook.office.com/mail/deeplink/compose?to=${contact.email}&subject=${EMAIL_SUBJECT}`;

const tiles: Tile[] = [
  { label: "My Portfolio", icon: "▤", href: "/", internal: true, dot: "bg-pink", note: "The full experience" },
  { label: "My Resume", icon: "✎", href: RESUME_URL, dot: "bg-gold", note: "Experience & education", download: true },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/shmerchant006", dot: "bg-sky", note: "/in/shmerchant006" },
  { label: "GitHub", icon: "</>", href: "https://github.com/merchShivani", dot: "bg-mint", note: "github.com/merchShivani" },
  { label: "Email Me", icon: "✉", href: "#email", dot: "bg-coral", note: contact.email },
];

const marqueeWords = ["Product Innovation", "Design", "Technology", "Storytelling", "Human Experience", "Creativity"];
const marqueeTrack = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

function LinktreePage() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard?.writeText(contact.email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }).catch(() => {});
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-navy text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-16 h-72 w-72 rounded-full bg-pink/25 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 h-44 w-44 rounded-full bg-lilac/20 blur-3xl" />
        <div className="absolute left-8 top-24 text-xl text-gold/70">✦</div>
        <div className="absolute right-10 top-40 text-lg text-pink/80">✿</div>
        <div className="absolute bottom-28 left-12 text-lg text-lilac/80">♡</div>
        <div className="absolute bottom-40 right-8 text-xl text-coral/70">✦</div>
      </div>

      <div aria-hidden className="relative z-10 overflow-hidden border-b border-paper/10 py-2">
        <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap">
          {marqueeTrack.map((word, i) => (
            <span key={i} className="eyebrow flex items-center gap-6 text-[10px] text-paper/60">
              {word} <span className="text-pink-hot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-2.6rem)] w-full max-w-md flex-col justify-center px-5 py-5 sm:px-8">
        <header className="text-center">
          <Reveal>
            <div className="relative mx-auto w-28 sm:w-32">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-pink/60 via-gold/50 to-coral/60 blur-[2px]" />
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
                  className="relative aspect-square w-full rounded-full border-4 border-paper object-cover object-top drop-shadow-2xl"
                />
              </picture>
              <p className="script absolute -right-6 -top-1 z-20 rotate-6 text-xl text-pink-hot">hi ♡</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-4 text-3xl sm:text-4xl">Shivani Merchant<span className="align-top text-lg text-gold sm:text-xl">✦</span></h1>
            <p className="eyebrow mt-2 text-[10px] text-pink-hot sm:text-xs">Product Innovation × Design × Technology × Storytelling</p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-paper/70 sm:text-base">
              I build creative solutions with technology, a curious mind, and a heart for people.
            </p>
          </Reveal>
        </header>

        <nav aria-label="My links" className="mt-4 space-y-2">
          {tiles.map((tile, i) => {
            const inner = (
              <span className="flex min-h-[56px] w-full items-center gap-3 rounded-2xl bg-paper/95 px-4 py-3 text-left text-navy shadow-[0_14px_34px_-24px_oklch(1_0_0)] transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:px-5 md:min-h-[56px] md:gap-4">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-navy md:h-11 md:w-11 ${tile.dot}`}>{tile.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold leading-tight md:text-lg">{tile.label}</span>
                  <span className="mt-0.5 block truncate text-[11px] font-semibold text-navy/50 md:text-xs">{tile.label === "Email Me" && copied ? "Copied to clipboard ♡" : tile.note}</span>
                </span>
                <span className="shrink-0 text-base text-navy/60 md:text-lg" aria-hidden>↗</span>
              </span>
            );
            return (
              <Reveal key={tile.label} delay={i * 60}>
                {tile.internal ? (
                  <Link to="/">{inner}</Link>
                ) : (
                  <a href={tile.href} target={tile.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" download={tile.download ? "Shivani-Merchant-Resume.pdf" : undefined} onClick={tile.label === "Email Me" ? handleEmailClick : undefined}>{inner}</a>
                )}
              </Reveal>
            );
          })}
        </nav>

        <footer className="mt-4 text-center">
          <p className="text-[11px] text-paper/60">
            <Link to="/links" className="font-semibold text-paper/80 underline decoration-pink-hot/60 underline-offset-2">Prefer the pastel card? Visit /links</Link>
          </p>
          <p className="mt-2 text-[10px] text-paper/50">© {new Date().getFullYear()} Shivani Merchant · Find me everywhere ♡</p>
        </footer>
      </div>
    </main>
  );
}
