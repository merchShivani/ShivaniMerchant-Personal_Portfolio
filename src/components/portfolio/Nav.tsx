import { useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto grid h-16 max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:flex md:justify-between md:px-8">
        <a href="#top" className="script text-3xl text-navy" aria-label="Shivani Merchant home">Sm<span className="align-top text-sm text-coral">♡</span></a>
        <ul className="hidden items-center gap-7 md:flex">{links.map((link) => <li key={link.id}><a href={`#${link.id}`} className="text-[11px] font-semibold text-navy transition-colors hover:text-coral">{link.label}</a></li>)}<li><Link to="/linktree" className="text-[11px] font-semibold text-navy transition-colors hover:text-coral">Linktree ✦</Link></li></ul>
        <a href="#contact" className="hidden rounded-full bg-pink px-5 py-2.5 text-xs font-bold text-navy transition-transform hover:-translate-y-0.5 md:inline-flex">Let’s talk →</a>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex h-9 w-9 items-center justify-center text-xl text-navy md:hidden">{open ? "×" : "☰"}</button>
      </nav>
      {open ? <div className="border-t border-navy/10 bg-paper px-5 py-4 md:hidden"><ul className="grid grid-cols-2 gap-2">{links.map((link) => <li key={link.id}><a href={`#${link.id}`} onClick={() => setOpen(false)} className="block rounded-md bg-pink/50 px-4 py-3 text-sm font-bold text-navy">{link.label}</a></li>)}<li><Link to="/linktree" onClick={() => setOpen(false)} className="block rounded-md bg-pink/50 px-4 py-3 text-sm font-bold text-navy">Linktree ✦</Link></li></ul></div> : null}
    </header>
  );
}
