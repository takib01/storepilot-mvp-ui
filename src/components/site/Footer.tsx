import { Logo } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              StorePilot helps Bangladeshi sellers launch a professional ecommerce store in minutes — no coding required.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end text-sm">
            <a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} StorePilot. All rights reserved.</p>
          <p>Made with care for Bangladeshi entrepreneurs.</p>
        </div>
      </div>
    </footer>
  );
}
