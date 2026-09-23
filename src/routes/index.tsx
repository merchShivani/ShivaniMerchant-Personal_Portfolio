import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BlossomTrail } from "@/components/BlossomTrail";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/Reveal";
import portraitMobile from "@/assets/portrait-mobile.webp.asset.json";
import portraitDesktop from "@/assets/portrait-desktop.webp.asset.json";
import landscapeMobile from "@/assets/landscape-mobile.webp.asset.json";
import landscapeDesktop from "@/assets/landscape-desktop.webp.asset.json";
import blossomMobile from "@/assets/blossom-mobile.webp.asset.json";
import blossomDesktop from "@/assets/blossom-desktop.webp.asset.json";
import moodboardMobile from "@/assets/moodboard-mobile.webp.asset.json";
import moodboardDesktop from "@/assets/moodboard-desktop.webp.asset.json";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
import {
  NOTION_URL,
  awards,
  contact,
  education,
  experience,
  leadership,
  projects,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivani Merchant — Product, Design & Creative Technology" },
      { name: "description", content: "Shivani Merchant's portfolio of product innovation, UX design, creative technology and human-centered storytelling." },
      { property: "og:title", content: "Shivani Merchant — Product, Design & Creative Technology" },
      { property: "og:description", content: "Creative solutions where technology, product thinking and human stories meet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: portraitMobile.url, media: "(max-width: 767px)", fetchPriority: "high" },
      { rel: "preload", as: "image", href: portraitDesktop.url, media: "(min-width: 768px)", fetchPriority: "high" },
    ],
  }),
  component: Index,
});

const projectShots = [proj1, proj2, proj3, proj4];

type ResponsiveArtworkProps = {
  mobile: string;
  desktop: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  eager?: boolean;
};

function ResponsiveArtwork({ mobile, desktop, alt, width, height, className, eager = false }: ResponsiveArtworkProps) {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} type="image/webp" />
      <img
        src={mobile}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

const toolkit = [
  { title: "Languages", icon: "</>", tone: "bg-butter/60", items: ["JavaScript", "HTML", "CSS", "SQL"] },
  { title: "Frameworks & Libraries", icon: "▤", tone: "bg-lilac/60", items: ["ReactJS", "Node.js", "Figma API"] },
  { title: "Tools & Platforms", icon: "☁", tone: "bg-sky/60", items: ["Git", "GitHub", "Notion", "Tableau"] },
  { title: "Design & Creative", icon: "✎", tone: "bg-pink/60", items: ["Figma", "Canva", "Adobe Creative Suite"] },
  { title: "Human Skills", icon: "♡", tone: "bg-mint/60", items: ["Communication", "Teamwork", "Problem Solving", "Collaboration"] },
];

const values = [
  { label: "Curious", icon: "♡", tone: "bg-pink/60" },
  { label: "Creative", icon: "✎", tone: "bg-butter/60" },
  { label: "Driven", icon: "➚", tone: "bg-lilac/60" },
  { label: "Always Learning", icon: "▤", tone: "bg-mint/60" },
  { label: "People First", icon: "✦", tone: "bg-sky/60" },
];

const interests = [
  { label: "Movies & TV Shows", icon: "☺" },
  { label: "Travel", icon: "✈" },
  { label: "Foodie", icon: "☕" },
  { label: "Photography", icon: "◎" },
  { label: "Music", icon: "♫" },
  { label: "Fashion", icon: "✿" },
  { label: "Chinese Culture", icon: "灯" },
  { label: "Exploration", icon: "✦" },
];

function Hero() {
  return (
    <section id="top" className="pt-20 md:pt-24">
      <div className="portfolio-grid">
        <div className="card-soft relative overflow-hidden px-5 py-8 md:col-span-6 md:px-9 md:py-10">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink/25 via-peach/35 to-lilac/25" />
          <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-butter/60 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -right-12 top-1/4 h-48 w-48 rounded-full bg-lilac/45 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-12 left-1/3 h-44 w-44 rounded-full bg-mint/45 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute left-1/4 top-1/2 h-32 w-32 rounded-full bg-pink/35 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute right-8 top-7 text-2xl text-coral/60">✿</div>
          <div aria-hidden className="pointer-events-none absolute right-16 top-14 text-sm text-gold/70">✦</div>
          <div aria-hidden className="pointer-events-none absolute left-[44%] top-10 text-xl text-gold/60">✦</div>
          <div aria-hidden className="pointer-events-none absolute left-8 bottom-36 text-lg text-lilac/80">♡</div>
          <div aria-hidden className="pointer-events-none absolute right-[38%] bottom-40 text-base text-coral/50">✿</div>
          <div className="relative z-10 grid items-center gap-7 pb-28 sm:min-h-[440px] sm:pb-28 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative z-10 min-w-0">
              <h1 className="display text-4xl text-navy sm:text-5xl lg:text-6xl">
                Hi, I’m<br />Shivani<span className="align-top text-2xl text-gold">✦</span>
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-6 text-navy/70">
                I build creative solutions with technology, a curious mind, and a heart for people.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Developer", "Designer", "Problem Solver", "Creator", "Collaborator", "Lifelong Learner"].map((item, i) => (
                  <span key={item} className={`rounded-full px-3.5 py-2 text-[11px] font-semibold text-navy ${["bg-butter/70", "bg-pink/70", "bg-mint/70", "bg-lilac/70", "bg-sky/70", "bg-peach/70"][i]}`}>{item}</span>
                ))}
              </div>
              <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                <a href="#work" className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-6 py-3 text-center text-xs font-bold text-paper transition-transform hover:-translate-y-0.5">Explore My Work →</a>
                <a href="#contact" className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/20 bg-white px-6 py-3 text-center text-xs font-bold text-navy transition-colors hover:bg-pink/40">Let’s Talk ✦</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:pt-0">
              <div className="absolute left-2 top-[24%] h-32 w-32 rounded-full bg-lilac/70" />
              <div className="absolute right-6 top-[8%] h-24 w-24 rounded-full bg-butter/70" />
              <div className="absolute -bottom-2 left-12 h-28 w-28 rounded-full bg-pink/60" />
              <ResponsiveArtwork mobile={portraitMobile.url} desktop={portraitDesktop.url} alt="Shivani Merchant portrait" width={928} height={1152} eager className="relative z-10 w-full rotate-[-3deg] drop-shadow-2xl" />
            </div>
          </div>
          <ResponsiveArtwork mobile={landscapeMobile.url} desktop={landscapeDesktop.url} alt="Watercolor mountains and pagoda" width={1600} height={533} className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-24 w-full object-cover object-bottom opacity-55" />
        </div>

        <div id="about" className="card-soft relative overflow-hidden px-6 py-8 md:col-span-3">
          <h2 className="display text-2xl text-navy">A little about me <span className="text-coral">✿</span></h2>
          <p className="mt-5 text-sm leading-6 text-navy/70">
            I’m a product innovator and creative technologist who loves turning complex ideas into clear, human experiences — combining creativity, technology and problem-solving.
          </p>
          <div className="mt-6 space-y-3 text-xs text-navy/70">
            <p><span className="font-bold text-navy">◎ Based in</span> &nbsp;{contact.location}</p>
            <p><span className="font-bold text-navy">▤ Studying</span> &nbsp;M.S. Product Innovation</p>
            <p><span className="font-bold text-navy">✉ Background</span> &nbsp;Computer Science & Data Analytics</p>
          </div>
          <a href={NOTION_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-bold text-navy hover:bg-lilac/40">View Full Portfolio ↗</a>
          <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {values.map((value) => (
              <div key={value.label} className={`rounded-xl px-1 py-4 text-center ${value.tone}`}>
                <p className="text-base">{value.icon}</p>
                <p className="mt-2 text-[10px] font-bold leading-tight text-navy">{value.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="card-soft relative overflow-hidden px-5 py-8 md:col-span-3">
          <ResponsiveArtwork mobile={blossomMobile.url} desktop={blossomDesktop.url} alt="" width={768} height={1280} className="pointer-events-none mb-6 h-32 w-full rounded-xl object-cover object-[center_32%] opacity-80 md:h-24" />
          <div className="relative z-10">
            <h2 className="display text-2xl text-navy">My Toolkit ✎</h2>
            <p className="mt-2 text-xs leading-5 text-navy/65">I’m technical, but technology is just one part of how I solve problems.</p>
            <div className="mt-5 space-y-2.5">
              {toolkit.map((item) => (
                <div key={item.title} className={`rounded-xl px-4 py-3 md:px-3 md:py-2.5 ${item.tone}`}>
                  <p className="break-words text-xs font-bold text-navy">{item.icon} &nbsp;{item.title}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.items.map((chip) => <span key={chip} className="rounded-md bg-white/80 px-2 py-1 text-[9px] font-semibold text-navy/75">{chip}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipCard({ project, shot }: { project: (typeof projects)[number]; shot: string }) {
  const [flipped, setFlipped] = useState(false);
  const hasLink = Boolean(project.url);
  const card = (
    <div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-navy/10 bg-white [backface-visibility:hidden]">
        <img src={shot} alt={project.title} width={944} height={704} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover sm:h-32 sm:aspect-auto xl:h-24" />
        <div className="flex flex-1 flex-col p-3.5">
          <h3 className="text-sm font-bold text-navy">{project.title}</h3>
          <p className="mt-2 text-xs leading-5 text-navy/60 sm:text-[10px] sm:leading-4">{project.made}</p>
          <div className="mt-auto pt-3">
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-md bg-lilac/50 px-2 py-1 text-[8px] font-bold text-navy/75">{tag}</span>)}
            </div>
            <p className="script mt-2 text-right text-sm text-coral">{hasLink ? "open the project ↗" : "flip for the story ↻"}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col rounded-xl bg-navy p-4 text-paper [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="eyebrow text-[9px] text-gold">{project.kicker}</p>
          <p className="mt-2 text-[10px] leading-4 text-paper/85"><span className="font-bold text-paper">The problem — </span>{project.problem}</p>
          <p className="mt-1.5 text-[10px] leading-4 text-paper/85"><span className="font-bold text-paper">My approach — </span>{project.approach}</p>
          <p className="mt-1.5 text-[10px] leading-4 text-paper/85"><span className="font-bold text-paper">The outcome — </span>{project.outcome}</p>
        </div>
        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => <span key={tag} className="rounded-md bg-paper/15 px-2 py-1 text-[8px] font-bold text-paper/85">{tag}</span>)}
          </div>
          <p className="script mt-2 text-right text-sm text-gold">{hasLink ? "click anywhere to open ↗" : "flip back ↻"}</p>
        </div>
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — open the project`}
        className="group relative block h-full min-h-72 cursor-pointer select-none [perspective:1100px]"
      >
        {card}
      </a>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${project.title} — flip the card for the full story`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      className="group relative h-full min-h-72 cursor-pointer select-none [perspective:1100px]"
    >
      {card}
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="portfolio-grid">
      <div className="card-soft px-5 py-8 md:col-span-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3">
          <div className="min-w-0">
            <h2 className="display text-2xl text-navy">Featured Projects <span className="text-gold">✦</span></h2>
            <p className="mt-1 text-xs text-navy/60">A few things I’ve built, designed, and loved working on.</p>
          </div>
          <a href={NOTION_URL} target="_blank" rel="noreferrer" className="shrink-0 text-right text-[10px] font-bold text-navy sm:text-[11px]">View All<br className="sm:hidden" /> Projects →</a>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <FlipCard project={project} shot={projectShots[i] ?? proj1} />
            </Reveal>
          ))}
        </div>
      </div>

      <div id="experience" className="card-soft relative px-5 py-8 md:col-span-4">
        <h2 className="display text-2xl text-navy">Experience <span className="text-coral">✿</span></h2>
        <p className="mt-1 text-xs text-navy/60">Where I’ve been, what I’ve done, and what I’m excited for next.</p>
        <div className="relative mt-6 space-y-5 border-l border-navy/15 pl-5">
          {experience.slice(0, 4).map((job, i) => (
            <div key={job.company} className="relative">
              <span className={`absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full ${["bg-gold", "bg-coral", "bg-lilac", "bg-mint"][i]}`} />
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-xs font-bold text-navy">{job.role}</h3>
                <span className="text-[9px] text-navy/45">| {job.company}</span>
              </div>
              <p className="mt-1 text-[9px] text-navy/50">{job.period}</p>
              <ul className="mt-2 space-y-1 text-[10px] leading-4 text-navy/65">{job.points.slice(0, 2).map((point) => <li key={point}>• {point}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="card-soft px-5 py-8 md:col-span-3">
        <h2 className="display text-2xl text-navy">What Makes Me, Me</h2>
        <p className="mt-1 text-xs text-navy/60">A little moodboard of the things that light me up.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-xl">
            <ResponsiveArtwork mobile={moodboardMobile.url} desktop={moodboardDesktop.url} alt="Moodboard of films, travel, food, books and photography" width={1024} height={1024} className="h-full min-h-56 w-full object-cover" />
          </div>
          <div className="space-y-1.5">
            {interests.map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-lg bg-peach/40 px-2.5 py-2 text-[10px] font-semibold text-navy">
                <span>{item.icon}</span>{item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function More() {
  return (
    <section className="portfolio-grid">
      <div className="card-soft px-5 py-8 md:col-span-4">
        <h2 className="display text-2xl text-navy">Recognition ✦</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {awards.slice(0, 4).map((award) => (
            <div key={award.name} className="rounded-xl bg-butter/50 px-4 py-3">
              <p className="text-xs font-bold text-navy">{award.name}</p>
              <p className="mt-1 text-[10px] text-navy/50">{award.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-soft px-5 py-8 md:col-span-4">
        <h2 className="display text-2xl text-navy">Community</h2>
        <div className="mt-5 space-y-2">
          {leadership.map((item) => (
            <div key={item.role} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-mint/40 px-4 py-3">
              <p className="min-w-0 text-xs font-bold text-navy">{item.role}</p>
              <p className="shrink-0 text-[9px] text-navy/50">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-soft relative min-h-64 overflow-hidden md:col-span-4">
        <ResponsiveArtwork mobile={blossomMobile.url} desktop={blossomDesktop.url} alt="Cherry blossoms over a watercolor landscape" width={768} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/85 p-4 backdrop-blur-sm">
          <p className="eyebrow text-navy/50">Now studying</p>
          <p className="mt-2 text-sm font-bold text-navy">{education[0]?.degree}</p>
          <p className="mt-1 text-[10px] text-navy/60">{education[0]?.school}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="portfolio-grid">
      <div className="card-soft relative overflow-hidden px-5 py-14 text-center md:col-span-12">
        <ResponsiveArtwork mobile={landscapeMobile.url} desktop={landscapeDesktop.url} alt="Watercolor landscape with cherry blossoms" width={1600} height={533} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="display text-3xl text-navy md:text-5xl">Let’s Create Something Great <span className="text-gold">✦</span></h2>
          <p className="mt-3 text-sm leading-6 text-navy/70">Have a project in mind, a question, or just want to say hi? I’d love to hear from you.</p>
          <a href={`mailto:${contact.email}`} className="mt-6 inline-flex rounded-full bg-navy px-7 py-3.5 text-xs font-bold text-paper transition-transform hover:-translate-y-0.5">Get In Touch →</a>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-bold text-navy">
            <a href={NOTION_URL} target="_blank" rel="noreferrer">▤ Portfolio</a>
            <a href={`mailto:${contact.email}`}>✉ Email</a>
            <a href={`tel:${contact.phone.replace(/-/g, "")}`}>☏ {contact.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Splash() {
  return (
    <div aria-hidden className="splash-fade fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[oklch(0.25_0.07_318)]" style={{ animationDelay: "4.3s" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="splash-bloom absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-pink/15 blur-3xl" />
        <div className="splash-bloom absolute right-1/5 bottom-1/4 h-64 w-64 rounded-full bg-lilac/15 blur-3xl" style={{ animationDelay: "0.4s" }} />
        <div className="splash-bloom absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-gold/15 blur-3xl" style={{ animationDelay: "0.7s" }} />
      </div>
      <div className="relative z-10 text-center">
        <p aria-label="Sm" className="splash-logo script inline-flex items-center text-8xl text-paper sm:text-9xl">
          Sm<span className="ml-1 inline-block align-middle text-[0.62em] text-[oklch(0.71_0.16_358)] drop-shadow-[0_0_26px_oklch(0.71_0.16_358_/_0.75)]">♡</span>
        </p>
        <p className="splash-tagline eyebrow mt-3 text-[11px] font-bold uppercase text-paper/80 sm:text-xs" style={{ animationDelay: "1.5s" }}>
          welcome to my world <span className="text-gold">✦</span>
        </p>
      </div>
    </div>
  );
}

function Index() {
  const [splash, setSplash] = useState<"hidden" | "showing">("hidden");

  useEffect(() => {
    if (sessionStorage.getItem("sm-splash-seen")) return;
    sessionStorage.setItem("sm-splash-seen", "1");
    setSplash("showing");
    const timer = window.setTimeout(() => setSplash("hidden"), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="page-wash min-h-screen pb-3 text-navy">
      {splash === "showing" && <Splash />}
      <Nav />
      <BlossomTrail />
      <Hero />
      <Work />
      <More />
      <Contact />
      <footer className="mx-auto grid w-[min(100%-1.5rem,1560px)] gap-4 py-6 text-center text-[10px] text-navy/60 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Shivani Merchant <span className="hidden sm:inline">&nbsp;|&nbsp;</span><span className="block sm:inline">Built with curiosity, creativity and a lot of ♡</span></p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-semibold sm:justify-end">
          <a href="#top">Home</a><a href="#about">About</a><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a><Link to="/links">Links ♡</Link><Link to="/linktree" className="text-coral">Quick Links ✦</Link>
        </div>
      </footer>
    </main>
  );
}
