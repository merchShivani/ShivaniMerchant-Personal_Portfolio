import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import portrait from "@/assets/shivani-crimson-cutout.png";
import landscape from "@/assets/watercolor-landscape.jpg";
import blossom from "@/assets/blossom-panel.jpg";
import desk from "@/assets/editorial-desk.jpg";
import filmstrip from "@/assets/interests-filmstrip.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
import { NOTION_URL, contact, education, experience, projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivani Merchant — Product Thinker & Multidisciplinary Creative" },
      { name: "description", content: "Shivani Merchant designs products, experiences and stories at the intersection of technology, people and creativity." },
      { property: "og:title", content: "Shivani Merchant — Product Thinker & Multidisciplinary Creative" },
      { property: "og:description", content: "Designing products people remember, with curiosity." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projectImages = [proj1, proj2, proj3, proj4, desk];
const projectCards = [
  ...projects,
  {
    index: "05",
    title: "Digital Campaign Systems",
    kicker: "Nexstar Media Group",
    made: "Scalable digital campaign systems and interactive HTML5 experiences.",
    tags: ["Creative Direction", "Digital Design"],
  },
];

const capabilities = [
  ["◉", "Product Thinking"], ["⌕", "Research & Strategy"],
  ["⌘", "Human-Centered Design"], ["✣", "AI Experimentation"],
  ["▣", "UI/UX Design"], ["✦", "Creative Direction"],
  ["▷", "Visual Storytelling"], ["◎", "Cross-Cultural Perspective"],
];

const personalLabels = ["Film & Visual Storytelling", "Travel & Culture", "Languages & Learning", "Media & Dramas", "Creative Experimentation"];

function Hero() {
  return (
    <section id="top" className="editorial-shell relative min-h-[735px] overflow-hidden pt-24 md:pt-28">
      <img src={blossom} alt="" aria-hidden="true" className="pointer-events-none absolute -left-24 top-14 h-60 w-72 rotate-12 object-cover opacity-65 mix-blend-multiply" />
      <div className="relative z-10 grid items-start gap-8 md:grid-cols-[1.02fr_0.98fr]">
        <div className="pt-5 md:pl-16 md:pt-10">
          <p className="text-[11px] font-bold uppercase text-ink/70">Technology × Design × People × Storytelling</p>
          <h1 className="display mt-4 max-w-[650px] text-[clamp(3.9rem,7.2vw,7.4rem)] uppercase text-ink">
            Designing<br /><span className="text-crimson">Products</span><br /><span className="text-crimson">People</span><br />Remember.
          </h1>
          <p className="script -mt-1 ml-16 text-[clamp(2.5rem,4vw,4.5rem)] leading-none text-crimson">with curiosity</p>
          <p className="mt-6 max-w-[560px] text-sm leading-6 text-ink/75">I’m Shivani — a product innovator and multidisciplinary designer exploring how technology, design, human behavior, and storytelling come together to create meaningful experiences.</p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a href="#work" className="rounded-full bg-crimson px-7 py-4 text-[10px] font-bold uppercase text-paper">View my work <span className="ml-4">→</span></a>
            <a href="#about" className="text-[10px] font-bold uppercase text-ink">About me <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-ink">›</span></a>
          </div>
        </div>
        <div className="relative min-h-[610px] self-end">
          <div className="absolute left-[8%] top-[2%] aspect-square w-[75%] rounded-full bg-crimson" />
          <img src={landscape} alt="" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[46%] w-full object-cover object-bottom opacity-55 mix-blend-multiply" />
          <img src={blossom} alt="" aria-hidden="true" className="absolute right-0 top-4 h-64 w-48 object-cover opacity-80 mix-blend-multiply" />
          <img src={portrait} alt="Shivani Merchant seated and looking over her shoulder" width={1200} height={1500} className="absolute bottom-0 left-[2%] z-10 h-[93%] w-[94%] object-contain object-bottom" />
          <p className="script absolute right-1 top-0 z-20 text-5xl text-crimson">SM</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = ["Product Innovation", "UI/UX Design", "Product Strategy", "Visual Design", "AI + Emerging Technology", "Storytelling"];
  return (
    <section id="about" className="editorial-shell paper-panel relative z-20 -mt-5 grid gap-7 p-5 md:grid-cols-[0.95fr_1.1fr_0.75fr] md:p-7">
      <div className="relative overflow-hidden rounded-sm">
        <img src={desk} alt="Creative workspace with laptop and cherry blossoms" width={1408} height={912} loading="lazy" className="h-full min-h-72 w-full object-cover" />
        <p className="script absolute left-5 top-5 -rotate-6 text-2xl text-ink">Design a life you love —</p>
      </div>
      <div className="py-3">
        <h2 className="brand-serif text-4xl uppercase leading-none text-crimson">Hi, I’m Shivani.</h2>
        <p className="brand-serif mt-2 text-2xl uppercase leading-5 text-crimson">Product thinker &<br />multidisciplinary creative.</p>
        <p className="mt-5 text-xs leading-5 text-ink/75">I started in computer science and data analytics, but somewhere between designing interfaces, building digital experiences, creating visual stories, and studying how people interact with technology, I realized I was most interested in the space between disciplines.</p>
        <p className="mt-3 text-xs leading-5 text-ink/75">Today, I explore how technology, design, business, human behavior, and storytelling can work together to create products people genuinely connect with.</p>
        <p className="script mt-2 text-4xl text-ink">Shivani ♡</p>
      </div>
      <ul className="space-y-3 py-2">{skills.map((skill, i) => <li key={skill} className="flex items-center gap-3 text-xs font-bold text-ink"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush text-lg text-crimson">{["♧", "▣", "⌁", "✿", "◉", "▤"][i]}</span>{skill}</li>)}</ul>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="editorial-shell paper-panel mt-3 p-5 md:p-7">
      <div className="flex items-end justify-between border-b border-crimson/25 pb-2"><h2 className="brand-serif text-3xl uppercase text-crimson">Selected Work</h2><a href={NOTION_URL} target="_blank" rel="noreferrer" className="text-[9px] font-bold uppercase text-ink">View all projects →</a></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {projectCards.map((project, i) => <article key={project.title} className="group min-w-0"><div className="relative overflow-hidden rounded-lg"><img src={projectImages[i]} alt={project.title} width={800} height={600} loading="lazy" className="aspect-[1.18] w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-crimson text-paper">↗</span></div><p className="brand-serif mt-2 text-lg leading-none text-crimson">{String(i + 1).padStart(2, "0")}<br />{project.title.toUpperCase()}</p><p className="mt-2 text-[10px] leading-4 text-ink/70">{project.made}</p><p className="mt-1 text-[10px] font-semibold text-ink">{project.tags.slice(0, 2).join(" + ")}</p></article>)}
      </div>
    </section>
  );
}

function SkillsJourney() {
  return (
    <section id="skills" className="editorial-shell mt-3 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="paper-panel p-6 md:p-8"><h2 className="brand-serif border-b border-crimson/25 pb-2 text-3xl uppercase text-crimson">What I bring to the table</h2><div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">{capabilities.map(([icon,label]) => <div key={label} className="flex items-center gap-3 text-xs font-semibold text-ink"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-crimson">{icon}</span>{label}</div>)}</div></div>
      <div className="paper-panel relative overflow-hidden p-6 md:p-8"><h2 className="brand-serif border-b border-crimson/25 pb-2 text-3xl uppercase text-crimson">My journey, so far</h2><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-lg bg-blush p-4"><b className="brand-serif text-4xl text-crimson">4+</b><p className="text-[9px] font-bold uppercase">Creative disciplines</p></div><div className="rounded-lg bg-sage/60 p-4"><b className="brand-serif text-4xl text-crimson">150+</b><p className="text-[9px] font-bold uppercase">Volunteer / service hours</p></div><div className="rounded-lg bg-sage/60 p-4"><b className="brand-serif text-4xl text-crimson">3+</b><p className="text-[9px] font-bold uppercase">Leadership roles</p></div><div className="rounded-lg bg-blush p-4"><b className="brand-serif text-2xl text-crimson">Multiple</b><p className="text-[9px] font-bold uppercase">Product & UX projects</p></div></div><p className="brand-serif absolute bottom-7 right-6 hidden max-w-32 border-l border-crimson/40 pl-5 text-lg italic text-ink/75 xl:block">A more curious, compassionate and creative world.</p></div>
    </section>
  );
}

function Experience() {
  const timeline = [
    ["Undergraduate", "B.S. Computer Science", "University of Arkansas"],
    ["Graphic Designer", "Nexstar Media Group", "Inc."],
    ["UI/UX Designer", "Product & App Projects", ""],
    ["Commercialization Intern", "Aurum Endeavors", "Science Venture Studio"],
    ["International Student Leader", "ICT, SASA, ISO", "University of Arkansas"],
    ["M.S. Product Innovation", "Sam M. Walton College", "University of Arkansas"],
  ];
  return <section id="experience" className="editorial-shell mt-3 px-3 py-5"><div className="flex items-center gap-4"><h2 className="brand-serif shrink-0 text-3xl uppercase text-crimson">Experience</h2><div className="h-px flex-1 bg-crimson/35" /><span className="text-[8px] font-semibold uppercase text-ink/55">A journey of exploration, learning and impact</span></div><div className="mt-5 grid gap-5 md:grid-cols-6">{timeline.map(([title, sub, place]) => <div key={title} className="relative border-t border-crimson/40 pt-4 before:absolute before:-top-1 before:left-3 before:h-2 before:w-2 before:rounded-full before:bg-crimson"><h3 className="text-[11px] font-bold leading-tight text-ink">{title}</h3><p className="mt-1 text-[9px] text-ink/70">{sub}</p><p className="text-[8px] text-ink/50">{place}</p></div>)}</div></section>;
}

function Playground() {
  return <section id="playground" className="editorial-shell paper-panel mt-3 p-5 md:p-7"><div className="grid items-end gap-5 lg:grid-cols-[1fr_250px]"><div><h2 className="brand-serif text-3xl uppercase text-crimson">Beyond the screen</h2><div className="mt-4 overflow-hidden rounded-lg"><img src={filmstrip} alt="Film, travel, learning, dramas and creative experimentation" width={1808} height={608} loading="lazy" className="aspect-[5/1.22] w-full object-cover" /></div><div className="mt-2 grid grid-cols-5 gap-2">{personalLabels.map(label => <p key={label} className="text-[9px] font-bold leading-tight text-ink">{label}</p>)}</div></div><p className="script pb-4 text-center text-3xl text-crimson">Same curiosity.<br />Different stories ♡</p></div></section>;
}

function Contact() {
  return <section id="contact" className="editorial-shell relative mt-3 overflow-hidden rounded-[1.7rem] bg-crimson px-7 py-8 text-paper md:px-16"><img src={landscape} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-screen" /><div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]"><div><h2 className="display text-5xl uppercase leading-[0.88] md:text-7xl">Let’s build<br />something<br />people feel.</h2><p className="script ml-24 mt-1 text-3xl">and remember.</p></div><div className="text-xs"><div className="space-y-3"><a href={`mailto:${contact.email}`} className="block">✉ &nbsp; {contact.email}</a><a href={NOTION_URL} target="_blank" rel="noreferrer" className="block">▣ &nbsp; Portfolio</a><a href={`tel:${contact.phone.replace(/-/g, "")}`} className="block">☏ &nbsp; {contact.phone}</a></div><a href={`mailto:${contact.email}`} className="mt-6 inline-flex rounded-full bg-paper px-7 py-4 text-[10px] font-bold uppercase text-crimson">Get in touch <span className="ml-5">→</span></a></div></div></section>;
}

function Index() {
  return <main className="page-wash min-h-screen overflow-hidden pb-5 text-ink"><Nav /><Hero /><About /><Work /><SkillsJourney /><Experience /><Playground /><Contact /><footer className="editorial-shell flex flex-wrap justify-between gap-3 py-6 text-[9px] text-ink/55"><p>© {new Date().getFullYear()} Shivani Merchant · Designed with curiosity.</p><p>{education[0]?.degree} · Fayetteville, Arkansas</p></footer></main>;
}