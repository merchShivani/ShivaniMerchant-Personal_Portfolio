import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/shivani-editorial-portrait.png";
import landscape from "@/assets/watercolor-landscape.jpg";
import {
  NOTION_URL,
  awards,
  contact,
  education,
  experience,
  leadership,
  projects,
  skills,
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
  }),
  component: Index,
});

const toolkit = [
  { title: "Product & Strategy", tone: "bg-butter", items: "Product thinking · Innovation strategy · Prototyping" },
  { title: "Design & Creative", tone: "bg-pink", items: "UX/UI · Figma · Adobe Creative Suite" },
  { title: "Technology", tone: "bg-sky", items: "ReactJS · HTML · CSS · JavaScript" },
  { title: "Research & Data", tone: "bg-mint", items: "User research · Analytics · Visualization" },
];

const interests = ["Movies & TV", "Travel", "Food", "Photography", "Music", "Fashion", "Chinese culture", "Exploration"];
const values = ["Curious", "Creative", "Driven", "Always learning", "People first"];

function Petal({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`inline-block text-coral ${className}`}>✣</span>;
}

function Hero() {
  return (
    <section id="top" className="pt-20 md:pt-24">
      <div className="portfolio-grid">
        <div className="relative overflow-hidden bg-paper px-5 py-8 md:col-span-6 md:px-8 md:py-10">
          <div className="grid min-h-[430px] items-center gap-4 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative z-10">
              <h1 className="display text-[clamp(3rem,5.2vw,5.5rem)] leading-[0.88] text-navy">Hi, I’m<br />Shivani<span className="align-top text-3xl text-gold">✦</span></h1>
              <p className="mt-5 max-w-sm text-sm leading-6 text-navy/75">I build thoughtful digital experiences with technology, a curious mind, and a heart for people.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Product thinker", "Designer", "Problem solver", "Creator", "Collaborator"].map((item, i) => (
                  <span key={item} className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${["bg-butter", "bg-pink", "bg-lilac", "bg-mint", "bg-sky"][i]}`}>{item}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#work" className="rounded-full bg-navy px-5 py-3 text-xs font-bold text-paper transition-transform hover:-translate-y-0.5">Explore my work →</a>
                <a href="#contact" className="rounded-full border border-navy/25 bg-paper px-5 py-3 text-xs font-bold text-navy transition-colors hover:bg-pink">Let’s talk ✦</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[430px] pt-8 lg:pt-0">
              <div className="absolute left-0 top-[18%] h-28 w-28 rounded-full bg-lilac" />
              <div className="absolute right-0 top-[8%] h-24 w-24 rounded-full bg-butter" />
              <img src={portrait} alt="Shivani Merchant in a thoughtful seated portrait" width={1024} height={1280} className="relative z-10 w-full rotate-[-2deg] drop-shadow-xl" />
              <p className="script absolute -left-3 top-3 z-20 -rotate-6 text-xl text-navy">Big dreams.<br />Good code. ↗</p>
              <p className="script absolute -right-2 top-20 z-20 rotate-3 text-xl text-navy">Always<br />curious ♡</p>
            </div>
          </div>
          <img src={landscape} alt="Watercolor mountains and pagoda" width={1920} height={640} className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full object-cover object-bottom opacity-75" />
        </div>

        <div id="about" className="relative bg-peach px-6 py-8 md:col-span-3">
          <h2 className="display text-2xl text-navy">A little about me <Petal /></h2>
          <p className="mt-5 text-sm leading-6 text-navy/70">I’m a product innovator and creative technologist who loves turning complex ideas into clear, human experiences.</p>
          <p className="mt-3 text-sm leading-6 text-navy/70">My path moves through computer science, data, UX, media and product innovation.</p>
          <div className="mt-6 space-y-3 border-t border-navy/10 pt-5 text-xs text-navy/70">
            <p><span className="font-bold text-navy">Based</span> · {contact.location}</p>
            <p><span className="font-bold text-navy">Studying</span> · M.S. Product Innovation</p>
            <p><span className="font-bold text-navy">Background</span> · Computer Science & Data Analytics</p>
          </div>
          <a href={NOTION_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-navy/20 px-4 py-2.5 text-xs font-bold text-navy hover:bg-lilac">View full portfolio ↗</a>
          <div className="mt-7 grid grid-cols-5 gap-2">
            {values.map((value, i) => <div key={value} className={`rounded-md px-1 py-4 text-center text-[10px] font-bold leading-tight ${["bg-pink", "bg-butter", "bg-lilac", "bg-sky", "bg-mint"][i]}`}>{value}</div>)}
          </div>
        </div>

        <div id="skills" className="bg-lilac px-5 py-8 md:col-span-3">
          <h2 className="display text-2xl text-navy">My toolkit ⚒</h2>
          <p className="mt-2 text-xs leading-5 text-navy/65">Technical, but technology is only one part of how I solve problems.</p>
          <div className="mt-5 space-y-3">
            {toolkit.map((item) => (
              <div key={item.title} className={`rounded-md px-4 py-3 ${item.tone}`}>
                <p className="text-xs font-bold text-navy">{item.title}</p>
                <p className="mt-1.5 text-[10px] leading-4 text-navy/65">{item.items}</p>
              </div>
            ))}
          </div>
          <p className="script mt-5 text-right text-lg text-navy">Different perspectives.<br />Better solutions. ✓</p>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="portfolio-grid">
      <div className="bg-paper px-5 py-8 md:col-span-7">
        <div className="flex items-end justify-between gap-4">
          <div><h2 className="display text-2xl text-navy">Featured projects <span className="text-gold">✦</span></h2><p className="mt-1 text-xs text-navy/60">A few things I’ve built, studied, and loved working on.</p></div>
          <a href={NOTION_URL} target="_blank" rel="noreferrer" className="text-xs font-bold text-navy">View all projects →</a>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-paper shadow-sm">
                <div className={`relative h-28 overflow-hidden ${["bg-pink", "bg-navy", "bg-mint", "bg-sky"][i]}`}>
                  {i === 3 ? <img src={landscape} alt="Watercolor pagoda landscape" width={1920} height={640} loading="lazy" className="h-full w-full object-cover" /> : <div className="absolute inset-4 rounded-md border border-paper/70 bg-paper/55 p-3"><p className="display text-lg text-navy">{project.index}</p><p className="mt-2 text-[10px] font-bold text-navy/60">{project.tags.join(" · ")}</p></div>}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="display text-base text-navy">{project.title}</h3>
                  <p className="mt-2 text-[11px] leading-4 text-navy/65">{project.made}</p>
                  <div className="mt-auto flex items-center justify-between pt-4"><span className="rounded-full bg-lilac px-2 py-1 text-[9px] font-bold text-navy">{project.tags[0] ?? "Project"}</span><span className="text-lg text-navy">↗</span></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="experience" className="bg-sky px-5 py-8 md:col-span-5">
        <h2 className="display text-2xl text-navy">Experience <Petal /></h2>
        <p className="mt-1 text-xs text-navy/60">Where I’ve been, what I’ve done, and what I’m excited for next.</p>
        <div className="relative mt-6 space-y-5 border-l border-navy/15 pl-5">
          {experience.slice(0, 4).map((job, i) => (
            <div key={job.company} className="relative">
              <span className={`absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full ${["bg-gold", "bg-coral", "bg-lilac", "bg-mint"][i]}`} />
              <div className="flex flex-wrap items-baseline gap-2"><h3 className="text-xs font-bold text-navy">{job.role}</h3><span className="text-[9px] text-navy/45">{job.period}</span></div>
              <p className="mt-1 text-[10px] text-navy/55">{job.company}</p>
              <ul className="mt-2 space-y-1 text-[10px] leading-4 text-navy/65">{job.points.slice(0, 2).map((point) => <li key={point}>• {point}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="portfolio-grid">
      <div className="bg-paper px-5 py-8 md:col-span-8">
        <h2 className="display text-2xl text-navy">What makes me, me</h2>
        <p className="mt-1 text-xs text-navy/60">A little moodboard of the things that light me up.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-72 overflow-hidden rounded-md bg-lilac p-4">
            <img src={landscape} alt="Chinese-inspired watercolor landscape" width={1920} height={640} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute bottom-4 left-4 rotate-[-3deg] rounded-sm border-8 border-paper bg-paper shadow-lg"><img src={portrait} alt="Shivani Merchant" width={1024} height={1280} loading="lazy" className="h-44 w-36 object-cover object-top" /></div>
            <p className="script absolute right-5 top-5 max-w-36 rotate-3 text-xl text-navy">Stories, places & details that stay with you ♡</p>
          </div>
          <div className="grid grid-cols-2 gap-2 content-start">
            {interests.map((item, i) => <div key={item} className={`rounded-md px-3 py-3 text-[11px] font-semibold text-navy ${["bg-butter", "bg-pink", "bg-sky", "bg-mint"][i % 4]}`}>{["◉", "⌁", "◌", "◇", "♫", "✿", "灯", "✦"][i]} &nbsp;{item}</div>)}
          </div>
        </div>
      </div>
      <div className="relative min-h-[430px] overflow-hidden bg-pink px-6 py-8 md:col-span-4">
        <img src={landscape} alt="Watercolor mountains" width={1920} height={640} loading="lazy" className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-right opacity-70" />
        <p className="script relative z-10 ml-auto max-w-48 rotate-[-3deg] text-3xl text-navy">Same girl…<br />Bigger dreams. ♡</p>
        <div className="absolute bottom-6 left-6 right-6 z-10 rounded-md bg-paper/85 p-4 backdrop-blur-sm">
          <p className="eyebrow text-navy/50">Now studying</p>
          <p className="mt-2 text-sm font-bold text-navy">{education[0]?.degree}</p>
          <p className="mt-1 text-[10px] text-navy/60">{education[0]?.school}</p>
        </div>
      </div>
    </section>
  );
}

function More() {
  return (
    <section className="portfolio-grid">
      <div className="bg-pink px-5 py-8 md:col-span-6">
        <h2 className="display text-2xl text-navy">Recognition & leadership ✦</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">{awards.slice(0, 4).map((award) => <div key={award.name} className="rounded-md bg-butter px-4 py-3"><p className="text-xs font-bold text-navy">{award.name}</p><p className="mt-1 text-[10px] text-navy/50">{award.date}</p></div>)}</div>
      </div>
      <div className="bg-mint px-5 py-8 md:col-span-6">
        <h2 className="display text-2xl text-navy">Community</h2>
        <div className="mt-5 space-y-2">{leadership.map((item) => <div key={item.role} className="flex items-center justify-between gap-4 rounded-md bg-paper/85 px-4 py-3"><p className="text-xs font-bold text-navy">{item.role}</p><p className="shrink-0 text-[9px] text-navy/50">{item.period}</p></div>)}</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-navy/10 bg-paper px-5 py-12 text-center md:py-16">
      <img src={landscape} alt="Watercolor landscape with cherry blossoms" width={1920} height={640} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-75" />
      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="display text-3xl text-navy md:text-5xl">Let’s create something great <span className="text-gold">✦</span></h2>
        <p className="mt-3 text-sm text-navy/70">Have a project in mind, a question, or just want to say hi?</p>
        <a href={`mailto:${contact.email}`} className="mt-6 inline-flex rounded-full bg-navy px-7 py-3 text-xs font-bold text-paper transition-transform hover:-translate-y-0.5">Get in touch →</a>
        <div className="mt-5 flex flex-wrap justify-center gap-5 text-xs font-bold text-navy"><a href={`mailto:${contact.email}`}>Email</a><a href={`tel:${contact.phone.replace(/-/g, "")}`}>{contact.phone}</a><a href={NOTION_URL} target="_blank" rel="noreferrer">Portfolio ↗</a></div>
      </div>
    </section>
  );
}

function Index() {
  return <main className="min-h-screen page-wash text-navy"><Nav /><Hero /><Work /><Story /><More /><Contact /><footer className="flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 bg-navy px-6 py-5 text-[10px] text-paper/65"><p>© {new Date().getFullYear()} Shivani Merchant</p><p>Built with curiosity, creativity and a lot of ♡</p></footer></main>;
}
