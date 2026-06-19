import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Navbar";
import { Check } from "lucide-react";

export default function AuthLayout({
  title, subtitle, children, sideTitle, sideBullets,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  sideTitle: string;
  sideBullets: string[];
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Form side */}
      <div className="flex flex-col px-6 sm:px-10 py-8">
        <Logo />
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-md mx-auto py-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">← Back to home</Link>
        </p>
      </div>

      {/* Visual side */}
      <div className="hidden lg:flex relative items-center justify-center p-10 bg-card/40 border-l border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.2_262/0.5),transparent_50%),radial-gradient(circle_at_70%_80%,oklch(0.82_0.15_82/0.25),transparent_50%)]" />
        <div className="relative glass-card rounded-3xl p-8 max-w-md">
          <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wider">StorePilot</span>
          <h2 className="mt-3 text-2xl font-bold leading-tight">{sideTitle}</h2>
          <ul className="mt-6 space-y-3">
            {sideBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-muted-foreground italic">
              "I set up my boutique's website in one evening and got my first order the next day."
            </p>
            <p className="mt-2 text-xs">— Rina, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TextField({
  label, error, ...props
}: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        {...props}
        className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition ${
          error
            ? "border-destructive/50 focus:ring-destructive/40"
            : "border-white/10 focus:ring-primary/50 focus:border-primary/50"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
