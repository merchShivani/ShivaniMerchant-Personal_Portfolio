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

/* ---------- decorative shapes ---------- */

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c1.1 6.2 4.7 9.8 12 12-7.3 2.2-10.9 5.8-12 12-1.1-6.2-4.7-9.8-12-12C7.3 9.8 10.9 6.2 12 0z" />
    </svg>
  );
}

function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="12" cy="5.4" r="4.1" />
        <circle cx="18.3" cy="9.9" r="4.1" />
        <circle cx="15.9" cy="17.3" r="4.1" />
        <circle cx="8.1" cy="17.3" r="4.1" />
        <circle cx="5.7" cy="9.9" r="4.1" />
      </g>
      <circle cx="12" cy="12.4" r="2.6" className="fill-orange-deep" />
    </svg>
  );
}

/* ---------- shared pieces ---------- */

const PORTRAIT_URL = "/__l5e/assets-v1/8aee22de-0dcc-4cf4-b2ac-b82898174c70/shivani-portrait-v2.jpg";

function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden bg-peach ${className}`}>
      <img
        src={PORTRAIT_URL}
        alt="Shivani Merchant"
        className="h-full w-full object-cover object-[50%_22%]"
        loading="eager"
      />
    </div>
  );
}

/* ---------- sections ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-24 md:px-8 md:pt-28">
      <Spark className="absolute top-24 left-[4%] h-6 w-6 text-pink-hot md:h-8 md:w-8" />
      <Spark className="absolute top-16 right-[6%] h-5 w-5 text-orange md:h-7 md:w-7" />
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-12">
        <div className="relative md:col-span-7">
          <p className="display text-5xl text-orange md:text-7xl">
            ENGINEERED
          </p>
          <p className="display text-5xl text-orange md:text-7xl">
            TO{" "}
            <span className="script align-baseline text-6xl text-pink-hot md:text-8xl">Shine</span>
          </p>
          <p className="mt-7 max-w-md text-sm leading-relaxed font-medium text-ink/80 md:text-base">
            I'm Shivani — a product innovation grad student and former engineer crafting
            intuitive products, visual systems and digital experiences that connect with the
            person on the other side of the screen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#work"
              className="eyebrow inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-paper transition-transform hover:-translate-y-0.5"
            >
              View my work →
            </a>
            <a
              href="#about"
              className="eyebrow inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-60"
            >
              About me ♡
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute -top-8 right-0 h-40 w-40 rounded-full bg-pink md:h-56 md:w-56" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-peach md:h-32 md:w-32" />
          <Reveal>
            <Portrait className="relative aspect-4/5 w-full rounded-t-[10rem] rounded-b-[2.5rem] shadow-[0_30px_60px_-30px_rgba(120,40,10,0.35)]" />
          </Reveal>
          <div className="absolute -bottom-7 -left-5 flex h-28 w-28 items-center justify-center rounded-full bg-pink text-center shadow-lg md:-left-10 md:h-32 md:w-32">
            <p className="eyebrow text-orange-deep">
              Built
              <br />
              with
              <br />
              heart
            </p>
          </div>
          <Spark className="absolute top-6 -left-3 h-8 w-8 text-orange" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="grid gap-6 rounded-[2.5rem] bg-peach px-6 py-10 md:grid-cols-12 md:px-12 md:py-14">
            <div className="md:col-span-6">
              <h2 className="display text-4xl text-orange md:text-6xl">
                Hi, I'm Shivani.
              </h2>
              <p className="display mt-2 text-2xl text-ink md:text-4xl">
                PRODUCT INNOVATOR
              </p>
              <p className="display text-2xl text-ink md:text-4xl">
                & DIGITAL STORYTELLER
              </p>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/80 md:text-base">
                I started in computer science and data analytics, then kept drifting toward the
                question the code never answered: how does this feel to the person using it? That
                question moved me through UX design, digital media and front-end work — and now
                into an M.S. in Product Innovation.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/80 md:text-base">
                Not a traditional developer — a builder of experiences, working where technology,
                design, product and storytelling meet.
              </p>
              <p className="script mt-7 text-4xl text-pink-hot md:text-5xl">Shivani ♡</p>
              <p className="eyebrow mt-8 text-ink/50">
                M.S. Product Innovation · University of Arkansas · {education[0].period}
              </p>
            </div>
            <div className="md:col-span-6 md:pl-8">
              <ul className="space-y-3">
                {[
                  "Product Innovation",
                  "UX / UI Design",
                  "Creative Technology",
                  "Design Research",
                  "Storytelling & Content",
                ].map((n, i) => (
                  <Reveal key={n} delay={i * 70}>
                    <li className="flex items-center gap-4 border-b border-orange/20 pb-3">
                      <Flower className="h-7 w-7 shrink-0 text-orange" />
                      <span className="display text-lg text-ink md:text-xl">{n}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <p className="script mt-8 text-2xl text-ink/70">
                cinema, typography, music & fashion — the places where taste is made
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="px-4 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2.5rem] bg-orange px-6 py-10 md:px-12 md:py-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="display text-4xl text-paper md:text-6xl">Selected works</h2>
              <a
                href={NOTION_URL}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-orange transition-transform hover:-translate-y-0.5"
              >
                View digital portfolio →
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <article className="flex h-full flex-col rounded-[1.75rem] bg-paper px-6 py-7">
                    <p className="eyebrow text-orange">{p.tags[0]}</p>
                    <h3 className="display mt-3 text-3xl text-orange-deep">{p.title}</h3>
                    <p className="mt-2 text-xs font-semibold tracking-wide text-ink/60 uppercase">
                      {p.kicker}
                    </p>
                    <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink/75">
                      <p>
                        <span className="eyebrow text-orange-deep">Problem · </span>
                        {p.problem}
                      </p>
                      <p>
                        <span className="eyebrow text-orange-deep">Role · </span>
                        {p.role}
                      </p>
                    </div>
                    <div className="mt-auto pt-5">
                      <p className="text-sm leading-relaxed font-medium text-ink/85">
                        {p.outcome}
                      </p>
                      <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-pink text-orange-deep transition-transform group-hover:rotate-45">
                        ↗
                      </span>
                    </div>
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

function ServicesAndNumbers() {
  const tiles = [
    { n: "4+", l: "Years experience", bg: "bg-pink", tc: "text-orange-deep" },
    { n: "20+", l: "Products designed", bg: "bg-orange", tc: "text-paper" },
    { n: "40–50", l: "Assets per week", bg: "bg-butter", tc: "text-ink" },
    { n: "5", l: "Honors & awards", bg: "bg-peach", tc: "text-orange-deep" },
  ];
  return (
    <section id="skills" className="px-4 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-12">
        <Reveal>
          <div className="h-full rounded-[2.5rem] bg-paper px-6 py-10 ring-1 ring-orange/20 md:px-10 md:py-12 lg:col-span-7">
            <h2 className="display text-3xl text-orange md:text-5xl">What I bring</h2>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {skills.map((g, i) => (
                <div key={g.label} className="flex gap-4">
                  <Flower className={`h-8 w-8 shrink-0 ${i % 2 ? "text-pink-hot" : "text-orange"}`} />
                  <div>
                    <p className="display text-lg text-ink">{g.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                      {g.items.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-[2.5rem] bg-pink px-6 py-10 md:px-10 md:py-12 lg:col-span-5">
            <h2 className="display text-3xl text-orange-deep md:text-5xl">
              Experience by
              <br />
              the numbers
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {tiles.map((t) => (
                <div key={t.l} className={`rounded-[1.5rem] px-5 py-6 ${t.bg}`}>
                  <p className={`display text-4xl md:text-5xl ${t.tc}`}>{t.n}</p>
                  <p className="eyebrow mt-2 text-ink/60">{t.l}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-4 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2.5rem] bg-peach px-6 py-10 md:px-12 md:py-14">
            <h2 className="display text-4xl text-orange md:text-6xl">Experience</h2>
            <div className="mt-8">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 60}>
                  <article className="border-t border-orange/20 py-7 first:border-none first:pt-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="display text-2xl text-orange-deep md:text-3xl">{job.role}</h3>
                      <span className="eyebrow text-ink/50">{job.period}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink/70">
                      {job.company} · {job.place}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                          <Flower className="mt-0.5 h-4 w-4 shrink-0 text-pink-hot" />
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

function Honors() {
  return (
    <section className="px-4 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2.5rem] bg-pink px-6 py-10 md:px-12 md:py-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="display text-4xl text-orange-deep md:text-6xl">Honors</h2>
              <Flower className="h-10 w-10 text-orange" />
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {awards.slice(0, 3).map((a, i) => (
                <Reveal key={a.name} delay={i * 80}>
                  <div className="h-full rounded-[1.75rem] bg-paper px-6 py-6">
                    <p className="display text-5xl text-pink-hot">“</p>
                    <p className="display mt-1 text-lg text-orange-deep">{a.name}</p>
                    <p className="eyebrow mt-3 text-ink/50">{a.date}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {awards.slice(3).map((a, i) => (
                <Reveal key={a.name} delay={i * 80}>
                  <div className="flex items-center justify-between rounded-full bg-paper px-6 py-4">
                    <p className="display text-base text-orange-deep md:text-lg">{a.name}</p>
                    <p className="eyebrow text-ink/50">{a.date}</p>
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

function Leadership() {
  return (
    <section className="px-4 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="rounded-[2.5rem] bg-butter px-6 py-10 md:px-12 md:py-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="display text-4xl text-orange md:text-6xl">Leadership</h2>
              <Spark className="h-9 w-9 text-pink-hot" />
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {leadership.map((l, i) => (
                <Reveal key={l.role} delay={i * 70}>
                  <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-paper px-6 py-6">
                    <p className="display text-lg text-orange-deep md:text-xl">{l.role}</p>
                    <p className="eyebrow mt-4 text-ink/50">{l.period}</p>
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

function Contact() {
  return (
    <section id="contact" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-orange px-6 py-12 text-paper md:px-12 md:py-16">
            <Spark className="absolute top-8 right-10 h-10 w-10 text-pink" />
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <h2 className="display text-5xl md:text-7xl">Let's build</h2>
                <p className="script mt-2 text-5xl text-pink md:text-7xl">Something Amazing!</p>
                <div className="mt-10 grid gap-5 border-t border-paper/30 pt-7 sm:grid-cols-3">
                  <div>
                    <p className="eyebrow text-paper/60">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="display mt-2 block text-lg break-all transition-opacity hover:opacity-70 md:text-xl"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow text-paper/60">Phone</p>
                    <a
                      href={`tel:${contact.phone.replace(/-/g, "")}`}
                      className="display mt-2 block text-lg transition-opacity hover:opacity-70 md:text-xl"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow text-paper/60">Based in</p>
                    <p className="display mt-2 text-lg md:text-xl">{contact.location}</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-[2rem] bg-pink px-7 py-8 text-orange-deep">
                  <p className="display text-2xl md:text-3xl">
                    Have a project in mind?
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">
                    I'd love to hear about it and bring your ideas to life.
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="eyebrow mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-paper transition-transform hover:-translate-y-0.5"
                  >
                    Get in touch ♡
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-paper/30 pt-6">
              <p className="text-xs text-paper/70">
                © {new Date().getFullYear()} Shivani Merchant
              </p>
              <a
                href={NOTION_URL}
                target="_blank"
                rel="noreferrer"
                className="eyebrow text-paper/80 transition-opacity hover:opacity-70"
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
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <About />
      <Work />
      <ServicesAndNumbers />
      <Experience />
      <Honors />
      <Leadership />
      <Contact />
    </main>
  );
}
