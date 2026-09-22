import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/Reveal";
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
      { title: "Shivani Merchant — Product Innovation, Design & Creative Technology" },
      {
        name: "description",
        content:
          "Portfolio of Shivani Merchant: product innovation, UX design, creative technology and data-driven storytelling.",
      },
      {
        property: "og:title",
        content: "Shivani Merchant — Product Innovation, Design & Creative Technology",
      },
      {
        property: "og:description",
        content:
          "Designing experiences where technology meets human stories. Selected work, experience and creative practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- shared pieces ---------- */

function Portrait({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-3xl bg-blue/15 ring-1 ring-blue/25 ${className}`}
    >
      <div className="px-6 py-10 text-center">
        <p className="script text-4xl text-blue">Shivani</p>
        <p className="eyebrow mt-3 text-blue/60">Photo coming soon</p>
      </div>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="display text-3xl text-blue md:text-5xl">{n}</p>
      <p className="eyebrow mt-2 text-ink/60">{l}</p>
    </div>
  );
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section id="top" className="px-3 pt-24 md:px-6 md:pt-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-butter px-6 py-10 md:px-12 md:py-14">
            <div className="grid items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="display text-2xl text-blue md:text-3xl">Product</p>
                <h1 className="display text-[19vw] leading-[0.82] text-blue md:text-[9.5vw]">
                  PORTFOLIO
                </h1>
                <p className="mt-6 max-w-md text-sm leading-relaxed font-medium text-blue/80 md:text-base">
                  Designing experiences where technology meets human stories — product thinking,
                  research, interface design and visual storytelling.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Product Innovation", "UX/UI", "Creative Tech", "Data Storytelling"].map(
                    (t) => (
                      <span
                        key={t}
                        className="eyebrow rounded-full bg-blue px-4 py-2 text-paper"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="md:col-span-5">
                <Portrait className="aspect-4/5 w-full" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* intro block */}
        <Reveal delay={100}>
          <div className="mt-3 grid gap-3 md:grid-cols-12">
            <div className="rounded-[2rem] bg-blue px-6 py-10 text-paper md:col-span-8 md:px-12 md:py-14">
              <h2 className="display text-5xl md:text-7xl">Hi, I&apos;m Shivani</h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-paper/85">
                I started in computer science and data analytics, then kept drifting toward the
                question the code never answered: how does this feel to the person using it? That
                question moved me through UX design, digital media and front-end work — and now into
                an M.S. in Product Innovation.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-paper/85">
                I work at the intersection of technology, design, product and storytelling. Not a
                traditional developer — a builder of experiences.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-paper/25 pt-7 sm:grid-cols-4">
                {[
                  { n: "4+", l: "Years experience" },
                  { n: "20+", l: "Products designed" },
                  { n: "40–50", l: "Assets / week" },
                  { n: "5", l: "Honors & awards" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="display text-3xl md:text-4xl">{s.n}</p>
                    <p className="eyebrow mt-2 text-paper/60">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-butter px-6 py-8 md:col-span-4 md:px-8">
              <p className="eyebrow text-blue/70">Currently</p>
              {education.map((e) => (
                <div key={e.degree} className="mt-5 border-t border-blue/20 pt-5 first:border-none first:pt-0">
                  <p className="display text-xl text-blue md:text-2xl">{e.degree}</p>
                  <p className="mt-2 text-sm text-ink/70">{e.school}</p>
                  <p className="eyebrow mt-2 text-ink/50">{e.period}</p>
                </div>
              ))}
              <a
                href={NOTION_URL}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-8 inline-flex rounded-full bg-blue px-5 py-2.5 text-paper"
              >
                Digital portfolio ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Niches() {
  const niches = [
    "Product Innovation",
    "UX / UI Design",
    "Creative Technology",
    "Design Research",
    "Data Visualization",
  ];
  return (
    <section id="about" className="px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2rem] bg-butter px-6 py-10 md:px-12 md:py-14">
            <h2 className="display text-5xl text-blue md:text-8xl">What I work on</h2>
            <div className="mt-9 grid gap-8 md:grid-cols-12">
              <ul className="space-y-3 md:col-span-5">
                {niches.map((n, i) => (
                  <Reveal key={n} delay={i * 70}>
                    <li className="flex items-center gap-4 rounded-full bg-blue px-6 py-3.5 text-paper">
                      <span className="eyebrow text-paper/50">0{i + 1}</span>
                      <span className="display text-lg md:text-xl">{n}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <div className="md:col-span-7 md:pl-6">
                <p className="display text-3xl text-blue md:text-4xl">
                  As a designer & product thinker, I bring a
                </p>
                <p className="script mt-3 text-3xl text-ink md:text-4xl">
                  human, cinematic perspective
                </p>
                <p className="mt-6 leading-relaxed text-ink/75">
                  I&apos;ve worked across media, healthcare, higher education and early-stage
                  ventures — bringing the same level of research rigor and visual craft to each one.
                  Research becomes a concept, a concept becomes a prototype, a prototype becomes
                  something people can finally react to.
                </p>
                <div className="mt-9 grid grid-cols-3 gap-6 border-t border-blue/20 pt-7">
                  <Stat n="4" l="Industries" />
                  <Stat n="100%" l="End-to-end" />
                  <Stat n="∞" l="Curiosity" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discovery", d: "Understanding the people, the business and the real problem." },
    { n: "02", t: "Planning", d: "Turning research into concepts, flows and a point of view." },
    { n: "03", t: "Production", d: "Designing, prototyping and building the actual experience." },
    { n: "04", t: "Delivery", d: "Polished, tested work handed off and ready to ship." },
  ];
  return (
    <section id="process" className="px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2rem] bg-butter px-6 py-10 md:px-12 md:py-14">
            <h2 className="display text-4xl text-blue md:text-6xl">My creative process</h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="h-full rounded-3xl bg-blue px-6 py-7 text-paper">
                    <p className="display text-4xl text-paper/40">{s.n}</p>
                    <p className="display mt-4 text-2xl">{s.t}</p>
                    <p className="mt-3 text-sm leading-relaxed text-paper/80">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2rem] bg-blue px-6 py-10 text-paper md:px-12 md:py-14">
            <p className="eyebrow text-paper/60">Case studies</p>
            <h2 className="display mt-3 text-5xl md:text-8xl">Real results</h2>
            <p className="display text-3xl text-butter md:text-5xl">created with purpose</p>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <article className="flex h-full flex-col rounded-3xl bg-butter px-6 py-7 text-ink">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="display text-3xl text-blue md:text-4xl">{p.title}</h3>
                      <span className="eyebrow text-ink/50">{p.index}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink/70">{p.kicker}</p>

                    <div className="mt-6 space-y-4">
                      {[
                        { l: "The problem", v: p.problem },
                        { l: "My role", v: p.role },
                        { l: "What I made", v: p.made },
                      ].map((row) => (
                        <div key={row.l}>
                          <p className="eyebrow text-blue/70">{row.l}</p>
                          <p className="mt-1 text-sm leading-relaxed text-ink/80">{row.v}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl bg-blue px-5 py-4 text-paper">
                      <p className="eyebrow text-paper/60">The results</p>
                      <p className="mt-1 text-sm leading-relaxed">{p.outcome}</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="eyebrow rounded-full bg-blue/12 px-3 py-1.5 text-blue"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <a
              href={NOTION_URL}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-8 inline-flex rounded-full bg-butter px-6 py-3 text-blue transition-transform hover:-translate-y-0.5"
            >
              See the full digital portfolio ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2rem] bg-butter px-6 py-10 md:px-10 md:py-14">
            <h2 className="display text-4xl text-blue md:text-6xl">Experience</h2>
            <div className="mt-8">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 60}>
                  <article className="border-t border-blue/20 py-7 first:border-none first:pt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="display text-2xl text-blue md:text-3xl">{job.role}</h3>
                      <span className="eyebrow text-ink/50">{job.period}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink/70">
                      {job.company} · {job.place}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SkillsBlock() {
  return (
    <section className="px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2rem] bg-blue px-6 py-10 text-paper md:px-12 md:py-14">
            <h2 className="display text-4xl md:text-6xl">Toolkit</h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group, i) => (
                <Reveal key={group.label} delay={i * 60}>
                  <div className="h-full rounded-3xl bg-butter px-6 py-6 text-ink">
                    <p className="display text-2xl text-blue">{group.label}</p>
                    <ul className="mt-4 space-y-1.5">
                      {group.items.map((it) => (
                        <li key={it} className="text-sm text-ink/75">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Creative() {
  const cards = [
    {
      t: "Cinema & drama",
      d: "How films and Chinese dramas build tension, pacing and composition — it shows up in how I structure a product story.",
    },
    { t: "Typography", d: "Letterforms set the mood fastest. Most of my design instincts start here." },
    { t: "Music & media", d: "Rhythm and editing taught me sequencing: what to reveal, and when." },
    { t: "Fashion & beauty", d: "Where aesthetics meet identity — a constant reference for consumer behavior." },
  ];
  return (
    <section id="creative" className="px-3 pt-3 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2rem] bg-butter px-6 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <h2 className="display text-4xl text-blue md:text-6xl">The creative side</h2>
                <p className="script mt-3 text-3xl text-ink">behind the work</p>
                <p className="mt-6 leading-relaxed text-ink/75">
                  Outside of product work, my references come from film, music, fashion and
                  typography — the places where taste is made.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-blue/70">Leadership</p>
                    <ul className="mt-3 space-y-2">
                      {leadership.map((l) => (
                        <li key={l.role} className="text-sm text-ink/75">
                          {l.role}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow text-blue/70">Honors</p>
                    <ul className="mt-3 space-y-2">
                      {awards.map((a) => (
                        <li key={a.name} className="text-sm text-ink/75">
                          {a.name} <span className="text-ink/45">· {a.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:col-span-7">
                {cards.map((c, i) => (
                  <Reveal key={c.t} delay={i * 80}>
                    <div className="h-full rounded-3xl bg-blue px-6 py-6 text-paper">
                      <p className="display text-2xl">{c.t}</p>
                      <p className="mt-3 text-sm leading-relaxed text-paper/80">{c.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-3 py-3 md:px-6 md:py-6">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2rem] bg-blue px-6 py-12 text-paper md:px-12 md:py-16">
            <p className="eyebrow text-paper/60">Contact</p>
            <h2 className="display mt-4 text-5xl md:text-8xl">
              Let&apos;s create something
              <span className="block text-butter">people remember</span>
            </h2>
            <div className="mt-10 grid gap-6 border-t border-paper/25 pt-8 sm:grid-cols-3">
              <div>
                <p className="eyebrow text-paper/50">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="display mt-2 block text-xl break-all hover:text-butter md:text-2xl"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="eyebrow text-paper/50">Phone</p>
                <a
                  href={`tel:${contact.phone.replace(/-/g, "")}`}
                  className="display mt-2 block text-xl hover:text-butter md:text-2xl"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow text-paper/50">Based in</p>
                <p className="display mt-2 text-xl md:text-2xl">{contact.location}</p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-paper/25 pt-6">
              <p className="text-xs text-paper/60">© {new Date().getFullYear()} Shivani Merchant</p>
              <a
                href={NOTION_URL}
                target="_blank"
                rel="noreferrer"
                className="eyebrow text-paper/70 hover:text-butter"
              >
                Digital portfolio ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <Niches />
      <Process />
      <Work />
      <Experience />
      <SkillsBlock />
      <Creative />
      <Contact />
    </main>
  );
}
