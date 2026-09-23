import { useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "playground", label: "Playground" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-crimson/10 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-[min(100%-2rem,1240px)] items-center justify-between">
        <a href="#top" className="text-base font-black leading-[0.88] text-crimson md:text-xl" aria-label="Shivani Merchant home">SHIVANI<br />MERCHANT</a>
        <ul className="hidden items-center gap-8 md:flex">{links.map((link) => <li key={link.id}><a href={`#${link.id}`} className="text-[11px] font-bold text-ink transition-colors hover:text-crimson">{link.label}</a></li>)}</ul>
        <a href="#contact" className="hidden rounded-full bg-crimson px-7 py-3 text-[10px] font-bold uppercase text-paper transition-transform hover:-translate-y-0.5 md:inline-flex">Let’s connect <span className="ml-4">→</span></a>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center text-xl text-crimson md:hidden">{open ? "×" : "☰"}</button>
      </nav>
      {open ? <div className="border-t border-crimson/10 bg-paper px-5 py-4 md:hidden"><ul className="grid grid-cols-2 gap-2">{links.map((link) => <li key={link.id}><a href={`#${link.id}`} onClick={() => setOpen(false)} className="block rounded-md bg-blush px-4 py-3 text-sm font-bold text-crimson">{link.label}</a></li>)}</ul></div> : null}
    </header>
  );
}
