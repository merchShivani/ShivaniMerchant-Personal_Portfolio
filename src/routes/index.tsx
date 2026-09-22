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

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4 md:mb-12">
      <span className="eyebrow text-pink">{n}</span>
      <span className="eyebrow text-muted-foreground">{children}</span>
      <span className="rule-soft h-px flex-1" />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-28 pb-16 md:px-10 md:pt-36">
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-pink-soft/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-muted-foreground">
              Product Innovation · Design · Creative Technology
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mt-5 text-[17vw] leading-[0.82] md:text-[9.5vw]">
              SHIVANI
              <br />
              <span className="inline-flex items-baseline gap-3">
                MERCHANT
                <span className="script hidden text-pink text-[4vw] md:inline">creative</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I design experiences where technology meets human stories — moving between product
              thinking, research, interface design and the craft of making things feel considered.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center rounded-full bg-ink px-7 text-sm tracking-wide text-paper transition-transform hover:-translate-y-0.5"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full border border-ink/25 px-7 text-sm tracking-wide transition-colors hover:border-pink hover:text-pink"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={200}>
            <figure className="relative">
              <div className="absolute -inset-3 border border-pink/50" aria-hidden />
              <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden bg-ink">
                <div className="px-6 text-center">
                  <p className="script text-5xl text-pink">Shivani</p>
                  <p className="eyebrow mt-4 text-paper/60">Portrait coming soon</p>
                </div>
              </div>
              <figcaption className="eyebrow mt-5 flex justify-between text-muted-foreground">
                <span>Fayetteville, AR</span>
                <span>M.S. Product Innovation</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-border py-3 md:mt-24">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              {[
                "Technology",
                "Design",
                "Product",
                "Human Experience",
                "Creativity",
                "Storytelling",
              ].map((w) => (
                <span key={w} className="display text-2xl md:text-3xl">
                  {w}
                  <span className="text-pink"> ✦ </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const arc = [
    { k: "Computer Science", d: "Learning how things are built." },
    { k: "Data Analytics", d: "Learning what people actually do." },
    { k: "Design & UX", d: "Learning how it should feel." },
    { k: "Creative Technology", d: "Learning to make ideas tangible." },
    { k: "Product Innovation", d: "Learning what deserves to exist." },
  ];
  return (
    <section id="about" className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="01">About</SectionLabel>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <h2 className="display text-4xl md:text-6xl">
                An engineer who kept
                <br />
                wandering toward
                <span className="script text-pink"> the story.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-muted-foreground md:text-lg">
                <p>
                  I started in computer science and data analytics, then kept drifting to the
                  question the code never answered: how does this feel to the person using it?
                </p>
                <p>
                  That question moved me through user experience design, digital media and
                  front-end work — and now into an M.S. in Product Innovation, where technology,
                  creativity, consumer behavior and business strategy sit at the same table.
                </p>
                <p>
                  I like the middle ground: research that becomes a concept, a concept that becomes
                  a prototype, a prototype that someone can finally react to.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:pl-10">
            <ol className="rule-soft">
              {arc.map((step, i) => (
                <Reveal key={step.k} delay={i * 90}>
                  <li className="flex items-baseline gap-5 border-b border-border py-5">
                    <span className="eyebrow w-8 shrink-0 text-pink">0{i + 1}</span>
                    <span className="display text-2xl md:text-3xl">{step.k}</span>
                    <span className="ml-auto hidden max-w-[45%] text-right text-sm text-muted-foreground sm:block">
                      {step.d}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={400}>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {education.map((e) => (
                  <div key={e.degree}>
                    <p className="eyebrow text-pink">{e.period}</p>
                    <p className="mt-2 font-medium">{e.degree}</p>
                    <p className="text-sm text-muted-foreground">{e.school}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-ink px-5 py-20 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-baseline gap-4 md:mb-16">
          <span className="eyebrow text-pink">02</span>
          <span className="eyebrow text-paper/50">Selected Work</span>
          <span className="h-px flex-1 bg-paper/20" />
        </div>

        <Reveal>
          <h2 className="display mb-12 text-5xl md:mb-20 md:text-8xl">
            Selected
            <span className="script text-pink"> projects</span>
          </h2>
        </Reveal>

        <div className="space-y-4">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="group grid gap-6 border-t border-paper/20 py-8 transition-colors hover:border-pink md:grid-cols-12 md:py-10">
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="eyebrow text-pink">{p.index}</span>
                    <h3 className="display text-3xl transition-colors group-hover:text-pink md:text-5xl">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-paper/60 md:ml-12">{p.kicker}</p>
                  <div className="mt-5 flex flex-wrap gap-2 md:ml-12">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-paper/25 px-3 py-1 text-xs text-paper/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 md:col-span-8 md:grid-cols-2">
                  {[
                    { l: "The problem", v: p.problem },
                    { l: "My role", v: p.role },
                    { l: "What I made", v: p.made },
                    { l: "How I approached it", v: p.approach },
                  ].map((row) => (
                    <div key={row.l}>
                      <p className="eyebrow text-paper/40">{row.l}</p>
                      <p className="mt-2 text-sm leading-relaxed text-paper/85">{row.v}</p>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <p className="eyebrow text-pink">Outcome</p>
                    <p className="mt-2 text-sm leading-relaxed text-paper/85">{p.outcome}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={NOTION_URL}
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-12 inline-flex items-center gap-3 border-b border-paper/30 pb-1 text-paper/70 transition-colors hover:border-pink hover:text-pink"
          >
            More about my work — original digital portfolio ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="03">Experience</SectionLabel>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 60}>
                <article className="border-b border-border py-8 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="display text-2xl md:text-4xl">{job.role}</h3>
                    <span className="eyebrow text-pink">{job.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {job.company} · {job.place}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed md:text-base">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red" />
                        <span className="text-muted-foreground">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="md:col-span-4 md:pl-8">
            <Reveal>
              <h4 className="eyebrow text-muted-foreground">Leadership</h4>
              <ul className="mt-5 space-y-4">
                {leadership.map((l) => (
                  <li key={l.role} className="border-b border-border pb-4">
                    <p className="text-sm font-medium">{l.role}</p>
                    <p className="text-xs text-muted-foreground">{l.period}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h4 className="eyebrow mt-12 text-muted-foreground">Honors</h4>
              <ul className="mt-5 space-y-3">
                {awards.map((a) => (
                  <li key={a.name} className="flex justify-between gap-4 text-sm">
                    <span>{a.name}</span>
                    <span className="shrink-0 text-muted-foreground">{a.date}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="px-5 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="04">Toolkit</SectionLabel>
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="group h-full bg-paper p-7 transition-colors hover:bg-pink-soft/40">
                <p className="display text-3xl">
                  {group.label}
                  <span className="text-pink">.</span>
                </p>
                <ul className="mt-5 space-y-1.5">
                  {group.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Creative() {
  const cards = [
    {
      t: "Cinema & drama",
      d: "I study how films and Chinese dramas build tension, pacing and composition — it shows up in how I structure a product story.",
    },
    {
      t: "Typography",
      d: "Letterforms are the fastest way to set a mood. Most of my design instincts start here.",
    },
    {
      t: "Music & media",
      d: "Rhythm and editing taught me sequencing: what to reveal, and when.",
    },
    {
      t: "Fashion & beauty",
      d: "Where aesthetics meet identity — a constant reference for consumer behavior.",
    },
  ];
  return (
    <section id="creative" className="bg-pink-soft/40 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="05">Creative Side</SectionLabel>
        <Reveal>
          <h2 className="display max-w-3xl text-4xl md:text-7xl">
            The creative personality
            <span className="script text-red"> behind </span>
            the work.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="h-full border-t border-ink/20 pt-5">
                <p className="display text-2xl">{c.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-ink px-5 py-20 text-paper md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow text-pink">06 — Contact</p>
          <h2 className="display mt-6 text-5xl md:text-8xl">
            Let&apos;s create something
            <span className="script text-pink"> people remember.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-12 grid gap-8 border-t border-paper/20 pt-10 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-paper/40">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="display mt-2 block text-xl break-all transition-colors hover:text-pink md:text-2xl"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-paper/40">Phone</p>
              <a
                href={`tel:${contact.phone.replace(/-/g, "")}`}
                className="display mt-2 block text-xl transition-colors hover:text-pink md:text-2xl"
              >
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow text-paper/40">Based in</p>
              <p className="display mt-2 text-xl md:text-2xl">{contact.location}</p>
            </div>
          </div>
        </Reveal>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper/20 pt-6">
          <p className="text-xs text-paper/50">© {new Date().getFullYear()} Shivani Merchant</p>
          <a
            href={NOTION_URL}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-paper/60 transition-colors hover:text-pink"
          >
            Digital portfolio ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-paper text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Creative />
      <Contact />
    </main>
  );
}
