import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Store } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.45_0.2_262)] shadow-lg shadow-primary/30">
        <Store className="h-5 w-5 text-white" />
      </span>
      <span className="text-lg font-bold tracking-tight">
        Store<span className="text-gold">Pilot</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition">
              Login
            </Link>
            <Link to="/register" className="btn-gold btn-gold-hover text-sm px-4 py-2 rounded-lg">
              Create Your Website
            </Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2 border-t border-white/5 pt-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-2">
                {l.label}
              </a>
            ))}
            <Link to="/login" className="text-sm py-2">Login</Link>
            <Link to="/register" className="btn-gold btn-gold-hover text-sm px-4 py-2 rounded-lg text-center">
              Create Your Website
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
