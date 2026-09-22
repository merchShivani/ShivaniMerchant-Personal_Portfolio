import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "creative", label: "Creative" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-paper/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="display text-lg tracking-tight md:text-xl">
          Shivani<span className="text-pink">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="eyebrow relative py-1 text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-pink after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-paper md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l.id} className="border-b border-border/60 last:border-none">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="display block py-4 text-3xl"
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
