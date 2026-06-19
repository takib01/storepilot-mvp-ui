import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import AuthLayout, { TextField } from "@/components/site/AuthLayout";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create your account — StorePilot" },
      { name: "description", content: "Create your StorePilot account and launch your ecommerce store today." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [form, setForm] = useState({ email: "", password: "", confirm: "", terms: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const update = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.email) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Use at least 6 characters";
    if (form.confirm !== form.password) errs.confirm = "Passwords do not match";
    if (!form.terms) errs.terms = "You must accept the terms";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your 7-day free trial. No credit card required."
      sideTitle="Everything you need to launch your store"
      sideBullets={[
        "Your own store website in minutes",
        "Cash on Delivery & manual bKash",
        "Easy product and order management",
        "Customize your store's colors",
      ]}
    >
      <form onSubmit={submit} className="space-y-4" noValidate>
        <TextField
          label="Email" type="email" placeholder="you@example.com"
          value={form.email} onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <TextField
          label="Password" type="password" placeholder="At least 6 characters"
          value={form.password} onChange={(e) => update("password", e.target.value)}
          error={errors.password}
        />
        <TextField
          label="Confirm password" type="password" placeholder="Re-enter password"
          value={form.confirm} onChange={(e) => update("confirm", e.target.value)}
          error={errors.confirm}
        />
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox" checked={form.terms}
            onChange={(e) => update("terms", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-[oklch(0.58_0.22_262)]"
          />
          <span className="text-muted-foreground">
            I agree to the <a href="#" className="text-foreground underline underline-offset-2">Terms</a> and <a href="#" className="text-foreground underline underline-offset-2">Privacy Policy</a>
          </span>
        </label>
        {errors.terms && <p className="-mt-2 text-xs text-destructive">{errors.terms}</p>}

        <button type="submit" className="btn-gold btn-gold-hover w-full py-3 rounded-xl text-sm">
          Create Account
        </button>

        {done && (
          <div className="text-sm text-success text-center bg-success/10 border border-success/20 rounded-xl p-3">
            Account created (demo). Connect a backend to complete signup.
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-gold hover:underline font-medium">Login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
