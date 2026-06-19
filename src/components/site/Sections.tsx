import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Globe, Package, ShoppingCart, Truck, Wallet, Palette,
  UserPlus, Settings2, Rocket, Check, ChevronDown,
} from "lucide-react";
import HeroVisual from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Built for Bangladeshi sellers
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Create your ecommerce <br />
            website in <span className="text-gold">minutes</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            Launch a professional online store for your business, manage products, and receive orders without technical knowledge.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/register" className="btn-gold btn-gold-hover px-6 py-3 rounded-xl text-sm">
              Create Your Website
            </Link>
            <a href="#pricing" className="px-6 py-3 rounded-xl text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition">
              View Pricing
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> 7-day free trial</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> bKash & COD</span>
          </div>
        </div>
        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Globe, title: "Your own store link", desc: "Get a clean storepilot.shop/yourbrand URL to share anywhere." },
  { icon: Package, title: "Add & manage products", desc: "Upload products with photos, prices, stock and variants." },
  { icon: ShoppingCart, title: "Receive customer orders", desc: "All orders land in one organised dashboard with status tracking." },
  { icon: Truck, title: "Cash on Delivery", desc: "Built-in COD support — the way Bangladesh shops online." },
  { icon: Wallet, title: "Manual bKash support", desc: "Accept bKash payments via transaction ID verification." },
  { icon: Palette, title: "Customize store colors", desc: "Match your brand with simple color palette customization." },
];

export function Benefits() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider">Everything you need</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">A complete store, ready to sell</h2>
          <p className="mt-3 text-muted-foreground">Tools designed for boutiques, cosmetics, gadgets, and home-based sellers — no developer required.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group glass-card rounded-2xl p-6 hover:border-gold/30 transition-all hover:-translate-y-0.5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-gold/15 group-hover:text-gold transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: UserPlus, title: "Register your account", desc: "Sign up free in less than a minute with just your email." },
  { icon: Settings2, title: "Set up your shop", desc: "Add your store name, logo, colors, and your first products." },
  { icon: Rocket, title: "Publish & start selling", desc: "Share your store link on Facebook, Instagram, or WhatsApp." },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 border-y border-white/5 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider">How it works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Launch in 3 simple steps</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gold/40">0{i + 1}</span>
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const planFeatures = [
  "Your own ecommerce website",
  "Product management",
  "Cart and Buy Now checkout",
  "Guest checkout",
  "Cash on Delivery support",
  "Manual bKash support",
  "Store dashboard",
  "Basic color palette customization",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider">Pricing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">One simple plan. Everything included.</h2>
          <p className="mt-3 text-muted-foreground">Start free for 7 days. No credit card required.</p>
        </div>
        <div className="mt-12 mx-auto max-w-md">
          <div className="relative glass-card rounded-3xl p-8 border-gold/30 shadow-2xl shadow-primary/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-gold text-gold-foreground">
                7-day free trial
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Basic</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold">৳499</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">BDT • Billed monthly</p>
            </div>
            <ul className="mt-8 space-y-3">
              {planFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/register" className="mt-8 block text-center btn-gold btn-gold-hover py-3 rounded-xl text-sm">
              Start Free Trial
            </Link>
            <p className="mt-5 text-[11px] text-muted-foreground text-center leading-relaxed">
              Custom domain, courier integration, and online payment gateway will come in future versions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is StorePilot?", a: "StorePilot is a no-code ecommerce platform that lets you create and run your own online store in minutes — designed for Bangladeshi small businesses." },
  { q: "Who is this for?", a: "Facebook sellers, boutique shops, cosmetics sellers, gadget sellers, and home-based ecommerce businesses who want a real website without hiring a developer." },
  { q: "How much does it cost?", a: "Our Basic plan is BDT 499/month. You can try every feature free for 7 days before paying anything." },
  { q: "Is there a free trial?", a: "Yes, you get a 7-day free trial with full access. No credit card required to start." },
  { q: "Does it support bKash?", a: "Yes. We support manual bKash payments using transaction ID verification, ideal for sellers in Bangladesh." },
  { q: "Does it support Cash on Delivery?", a: "Absolutely. Cash on Delivery is enabled by default — the most popular payment method in Bangladesh." },
  { q: "Can I use my own domain?", a: "Custom domain support is on our roadmap and will be available in a future version. For now, you get a clean storepilot.shop/yourbrand link." },
  { q: "Do customers need an account to order?", a: "No. Guest checkout is enabled so your customers can order in seconds without signing up." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider">FAQ</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-gold uppercase tracking-wider">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Have questions? Let's talk.</h2>
          <p className="mt-3 text-muted-foreground">Tell us about your business and we'll get back to you within a day.</p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-10 glass-card rounded-3xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your full name" required />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <Field label="Phone" name="phone" placeholder="+880 1XXX-XXXXXX" />
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              required
              rows={4}
              placeholder="How can we help?"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
            />
          </div>
          <button type="submit" className="btn-gold btn-gold-hover w-full py-3 rounded-xl text-sm">
            Send Message
          </button>
          {sent && (
            <p className="text-center text-sm text-success">Thanks! We'll be in touch soon.</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition"
      />
    </div>
  );
}
