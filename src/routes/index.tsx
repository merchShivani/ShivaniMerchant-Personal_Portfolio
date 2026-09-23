import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import portrait from "@/assets/shivani-hero-fashion.png";
import landscape from "@/assets/watercolor-landscape.jpg";
import blossom from "@/assets/blossom-panel.jpg";
import desk from "@/assets/editorial-desk.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
import { NOTION_URL, contact, education, projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivani Merchant — Product Innovator & Multidisciplinary Designer" },
      { name: "description", content: "Shivani Merchant turns ideas into thoughtful products, digital experiences and stories." },
      { property: "og:title", content: "Shivani Merchant — Product Innovator & Multidisciplinary Designer" },
      { property: "og:description", content: "Designing ideas into experiences that matter." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projectImages = [proj1, proj3, proj4, proj2];
const projectCards = projects.slice(0, 4);
const capabilities = [
  ["◎", "Product Strategy", "From insights to impact"],
  ["▣", "UX/UI Design", "Thoughtful and intuitive"],
  ["⌘", "User Research", "People-centered solutions"],
  ["◉", "Innovation Strategy", "Solving meaningful problems"],
  ["╱", "Prototyping", "Ideas into tangible concepts"],
  ["✣", "AI Product Concepts", "Exploring what’s next"],
  ["▷", "Digital Media", "Multiplatform storytelling"],
  ["↗", "Creative Direction", "Bringing ideas to life"],
];

function Hero() {
  return (
    <section id="top" className="editorial-shell relative min-h-[680px] overflow-hidden pt-24 md:min-h-[650px] md:pt-28">
      <img src={landscape} alt="" aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full object-cover opacity-35 mix-blend-multiply" />
      <img src={blossom} alt="" aria-hidden="true" className="pointer-events-none absolute -left-28 top-52 h-64 w-64 -rotate-12 object-cover opacity-80 mix-blend-multiply" />
      <div className="relative z-10 grid md:grid-cols-[1.03fr_0.97fr]">
        <div className="pt-5 md:pt-10">
          <h1 className="display ink-shadow max-w-[690px] text-[clamp(3.25rem,6.6vw,6.7rem)] uppercase text-ink">
            Designing<br />ideas into<br /><span className="text-crimson">experiences</span><br />that matter.
          </h1>
          <p className="script ml-16 mt-1 text-[clamp(2rem,3.4vw,3.5rem)] leading-none text-crimson">with curiosity &amp; purpose.</p>
          <p className="mt-7 max-w-[500px] text-sm leading-6 text-ink/80">I’m Shivani, a product innovator and designer exploring the intersection of technology, strategy, human behavior, and creative experiences.</p>
          <div className="mt-6 flex items-center gap-6">
            <a href="#work" className="rounded-full bg-crimson px-8 py-4 text-[10px] font-bold uppercase text-paper">View my work <span className="ml-5">→</span></a>
            <a href="#about" className="text-[10px] font-bold uppercase text-ink">About me <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-ink">→</span></a>
          </div>
        </div>
        <div className="relative min-h-[560px] md:min-h-[610px]">
          <div className="absolute left-[48%] top-[7%] aspect-square w-[80%] -translate-x-1/2 overflow-hidden rounded-full bg-crimson">
            <img src={blossom} alt="" aria-hidden="true" className="absolute -right-[10%] -top-[7%] h-[56%] w-[56%] object-cover object-top opacity-90 mix-blend-screen" />
            <img src={blossom} alt="" aria-hidden="true" className="absolute -bottom-[15%] -left-[20%] h-[48%] w-[58%] -rotate-12 object-cover opacity-50 mix-blend-screen" />
          </div>
          <div className="absolute -right-2 top-[6%] z-20 text-[9px] font-semibold uppercase leading-5 text-crimson/70">Ideas<br />People<br />Culture<br />Technology<br />A brighter<br />tomorrow</div>
          <img src={portrait} alt="Shivani Merchant in a black editorial suit" className="absolute bottom-0 left-[48%] z-10 h-[96%] w-[96%] -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_22px_color-mix(in_oklch,var(--ink)_18%,transparent)]" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = ["Product Innovation", "Product Strategy", "UX/UI Design", "User Research", "Digital Experiences", "Creative Strategy"];
  return (
    <section id="about" className="editorial-shell paper-panel relative z-20 -mt-3 grid gap-6 p-5 md:grid-cols-[0.9fr_1fr_0.75fr] md:p-6">
      <div className="relative overflow-hidden rounded-[1.4rem]"><img src={desk} alt="Creative workspace with cherry blossoms" className="h-full min-h-64 w-full object-cover" /><p className="script absolute bottom-4 left-5 max-w-32 -rotate-6 text-2xl text-crimson">A more creative you</p></div>
      <div className="border-crimson/20 py-2 md:border-r md:pr-6"><p className="text-sm font-black uppercase text-crimson">Hi, I’m</p><h2 className="text-3xl font-black uppercase leading-none text-ink">Shivani Merchant.</h2><p className="mt-1 text-lg font-black uppercase leading-none text-crimson">Product innovator &amp;<br />digital creative</p><p className="mt-5 text-xs leading-5 text-ink/75">I help turn bold ideas into meaningful experiences by combining user research, strategic thinking, technology, and design. I’m passionate about creating products that not only look good, but truly make people’s lives better.</p><p className="script mt-2 text-4xl text-ink">Shivani ♡</p></div>
      <ul className="grid content-center gap-2">{skills.map((skill, i) => <li key={skill} className="flex items-center gap-3 text-xs font-bold text-ink"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush text-crimson">{["◎","⌁","✣","⌘","▣","◉"][i]}</span>{skill}</li>)}</ul>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="editorial-shell mt-3 rounded-[1.8rem] bg-crimson p-5 text-paper md:p-7">
      <div className="flex items-center justify-between"><h2 className="text-2xl font-black uppercase">Selected works</h2><a href={NOTION_URL} target="_blank" rel="noreferrer" className="rounded-full border border-paper/50 px-5 py-2 text-[9px] font-bold uppercase">View all projects &nbsp; →</a></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{projectCards.map((project, i) => <article key={project.title} className="overflow-hidden rounded-[1.3rem] bg-paper text-ink"><div className="px-4 pt-4"><div className="flex gap-3"><span className="brand-serif text-3xl text-sage">{String(i+1).padStart(2,"0")}</span><div><p className="text-[8px] font-semibold uppercase text-ink/60">{project.tags[0] ?? "Product"}</p><h3 className="text-base font-black leading-tight">{project.title}</h3><p className="mt-1 text-[10px] leading-4">{project.made}</p></div></div></div><div className="relative mt-3"><img src={projectImages[i]} alt={project.title} className="aspect-[1.35] w-full object-cover" /><span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper font-bold text-crimson">↗</span></div></article>)}</div>
    </section>
  );
}

function CapabilityJourney() {
  const journey = [["Computer Science & Data Analytics","Built a strong technical foundation"],["UX & Design","Discovered my love for user-centered design"],["Digital Media & Industry Experience","Worked on real-world creative and product projects"],["Product Innovation","Bringing everything together to create what’s next"]];
  return (
    <section id="experience" className="editorial-shell mt-3 grid overflow-hidden rounded-[1.8rem] bg-paper/85 lg:grid-cols-2">
      <div className="p-6 md:p-8"><h2 className="text-2xl font-black uppercase text-crimson">My capabilities</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{capabilities.map(([icon,title,copy],i)=><div key={title} className="flex items-center gap-3 rounded-lg bg-card/80 p-3"><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${i%3===0?"bg-sage text-paper":"bg-blush text-crimson"}`}>{icon}</span><div><h3 className="text-[11px] font-bold">{title}</h3><p className="text-[9px] text-ink/60">{copy}</p></div></div>)}</div></div>
      <div className="relative overflow-hidden p-6 md:p-8"><h2 className="text-2xl font-black uppercase text-crimson">My journey</h2><div className="relative mt-8 grid gap-6 sm:grid-cols-4 before:absolute before:left-3 before:right-3 before:top-1 before:h-px before:bg-crimson">{journey.map(([title,copy])=><div key={title} className="relative pt-5 before:absolute before:left-2 before:top-0 before:h-2.5 before:w-2.5 before:rounded-full before:bg-crimson"><h3 className="text-[10px] font-bold leading-tight">{title}</h3><p className="mt-2 text-[9px] leading-4 text-ink/60">{copy}</p></div>)}</div><img src={landscape} alt="" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 w-full object-cover opacity-55 mix-blend-multiply" /></div>
    </section>
  );
}

function Values() {
  const values = [["Curious by nature","I keep asking better questions and looking beyond the obvious."],["Human at heart","I care deeply about people and the impact of the work."],["Creative in practice","I bring fresh ideas, visual thinking, and momentum to every challenge."]];
  return <section id="playground" className="editorial-shell relative py-7"><h2 className="text-2xl font-black uppercase text-crimson">What guides my work</h2><div className="mt-4 grid gap-3 md:grid-cols-3">{values.map(([title,copy])=><article key={title} className="rounded-xl bg-blush/55 p-5"><span className="text-3xl font-black text-crimson">“</span><h3 className="text-sm font-bold">{title}</h3><p className="mt-2 text-[11px] leading-5 text-ink/70">{copy}</p></article>)}</div></section>;
}

function Contact() {
  return <section id="contact" className="editorial-shell relative min-h-64 overflow-hidden pb-4 pt-5"><img src={landscape} alt="" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-44 w-full object-cover opacity-55 mix-blend-multiply" /><div className="relative z-10 grid items-center gap-5 md:grid-cols-[1.2fr_0.35fr_0.55fr]"><div><h2 className="display text-[clamp(3.5rem,7vw,6.8rem)] uppercase text-crimson">Let’s build</h2><p className="script ml-16 -mt-2 text-4xl text-crimson md:text-5xl">Something meaningful.</p></div><p className="text-[9px] font-bold uppercase leading-5 text-crimson/75">Turning<br />ideas into<br />a brighter<br />tomorrow</p><div className="rounded-[1.4rem] bg-crimson p-6 text-paper"><h3 className="text-lg font-black uppercase leading-none">Have a project<br />in mind?</h3><p className="mt-3 text-[10px] leading-4">I’d love to hear about it and explore how we can create something great together.</p><a href={`mailto:${contact.email}`} className="mt-4 inline-flex rounded-full bg-crimson-deep px-5 py-3 text-[9px] font-bold uppercase">Get in touch &nbsp; →</a></div></div></section>;
}

function Index() {
  return <main className="page-wash min-h-screen overflow-hidden text-ink"><Nav /><Hero /><About /><Work /><CapabilityJourney /><Values /><Contact /><footer className="editorial-shell relative z-10 flex flex-wrap justify-between gap-3 border-t border-crimson/15 py-5 text-[9px] text-ink/65"><a href={`mailto:${contact.email}`}>✉ &nbsp; {contact.email}</a><a href={NOTION_URL} target="_blank" rel="noreferrer">▣ &nbsp; Portfolio</a><span>⌖ &nbsp; Fayetteville, AR</span><span>{education[0]?.degree}</span></footer></main>;
}