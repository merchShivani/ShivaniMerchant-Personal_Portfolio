import { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-8 md:pt-5">
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 py-3 transition-all duration-300 md:px-7 ${
          solid
            ? "bg-paper shadow-[0_10px_30px_-18px_rgba(120,40,10,0.45)]"
            : "bg-paper/80 backdrop-blur"
        }`}
      >
        <a href="#top" className="display text-lg leading-[0.95] text-orange md:text-xl">
          SHIVANI
          <br />
          MERCHANT
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="eyebrow text-ink transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="eyebrow hidden items-center gap-2 rounded-full bg-orange px-6 py-3 text-paper transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Let's create ✳
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded bg-orange transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-orange transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-[1400px] rounded-3xl bg-paper px-5 py-2 shadow-lg md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.id} className="border-b border-orange/15 last:border-none">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="display block py-3 text-2xl text-orange"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
