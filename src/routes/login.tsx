import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import AuthLayout, { TextField } from "@/components/site/AuthLayout";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — StorePilot" },
      { name: "description", content: "Login to your StorePilot store dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError("Invalid email or password. Please try again.");
    }, 1100);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to manage your store and orders."
      sideTitle="Run your store from one simple dashboard"
      sideBullets={[
        "Track orders as they come in",
        "Manage your products and stock",
        "Update store colors and details",
        "Get paid via bKash or COD",
      ]}
    >
      <form onSubmit={submit} className="space-y-4" noValidate>
        <TextField
          label="Email" type="email" placeholder="you@example.com"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <TextField
          label="Password" type="password" placeholder="Your password"
          value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input
              type="checkbox" checked={form.remember}
              onChange={(e) => setForm({ ...form, remember: e.target.checked })}
              className="h-4 w-4 rounded border-white/20 bg-white/5 accent-[oklch(0.58_0.22_262)]"
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-gold hover:underline">Forgot password?</Link>
        </div>

        {error && (
          <div className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-gold btn-gold-hover w-full py-3 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading && <span className="h-4 w-4 border-2 border-gold-foreground/40 border-t-gold-foreground rounded-full animate-spin" />}
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="text-gold hover:underline font-medium">Create account</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
