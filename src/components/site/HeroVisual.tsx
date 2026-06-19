import { Bell, ShoppingBag, TrendingUp, Package } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 via-transparent to-gold/20 blur-3xl -z-10" />

      {/* Main store preview card */}
      <div className="glass-card rounded-3xl p-5 shadow-2xl">
        {/* Banner */}
        <div className="h-28 rounded-2xl bg-gradient-to-br from-primary via-[oklch(0.45_0.2_262)] to-[oklch(0.30_0.10_280)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
          <div className="relative p-4 flex items-center justify-between h-full">
            <div>
              <p className="text-xs text-white/70">storepilot.shop/rina</p>
              <h3 className="text-white font-bold text-lg">Rina's Boutique</h3>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-gold text-gold-foreground font-semibold">LIVE</span>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { name: "Silk Saree", price: "৳2,499", c: "from-rose-400/80 to-rose-600/80" },
            { name: "Kurti Set", price: "৳1,299", c: "from-amber-400/80 to-orange-500/80" },
            { name: "Hijab Pack", price: "৳699", c: "from-emerald-400/80 to-teal-600/80" },
          ].map((p) => (
            <div key={p.name} className="rounded-xl bg-white/5 p-2 border border-white/5">
              <div className={`h-16 rounded-lg bg-gradient-to-br ${p.c}`} />
              <p className="text-[11px] mt-2 font-medium truncate">{p.name}</p>
              <p className="text-[10px] text-gold font-semibold">{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating order notification */}
      <div className="absolute -left-4 sm:-left-12 top-32 glass-card rounded-2xl p-3 w-56 shadow-xl animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-success/20 text-success shrink-0">
            <Bell className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold">New order received</p>
            <p className="text-[11px] text-muted-foreground truncate">Saree × 1 • ৳2,499 • COD</p>
          </div>
        </div>
      </div>

      {/* Floating dashboard preview */}
      <div className="absolute -right-4 sm:-right-10 -bottom-6 glass-card rounded-2xl p-4 w-60 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground">Today</p>
          <TrendingUp className="h-3.5 w-3.5 text-success" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5"><ShoppingBag className="h-3 w-3" /> Orders</span>
            <span className="text-sm font-bold">24</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5"><Package className="h-3 w-3" /> Products</span>
            <span className="text-sm font-bold">48</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mt-2">
            <div className="h-full w-3/4 bg-gradient-to-r from-primary to-gold" />
          </div>
          <p className="text-[10px] text-muted-foreground">৳18,420 in sales today</p>
        </div>
      </div>

      <style>{`@keyframes float { 0%,100% { transform: translateY(0)} 50% { transform: translateY(-8px)} }`}</style>
    </div>
  );
}
