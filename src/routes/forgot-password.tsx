import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import AuthLayout, { TextField } from "@/components/site/AuthLayout";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot password — StorePilot" },
      { name: "description", content: "Reset your StorePilot account password." },
    ],
  }),
  component: ForgotPage,
});

function ForgotPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter the email tied to your account and we'll send you a reset link."
      sideTitle="We've got your back"
      sideBullets={[
        "Secure password reset via email",
        "Your store stays safe and online",
        "Reset takes less than a minute",
      ]}
    >
      <form onSubmit={submit} className="space-y-4" noValidate>
        <TextField
          label="Email" type="email" placeholder="you@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-gold btn-gold-hover w-full py-3 rounded-xl text-sm">
          Send Reset Link
        </button>

        {sent && (
          <div className="text-sm text-success bg-success/10 border border-success/20 rounded-xl p-3 text-center">
            If an account exists, password reset instructions will be sent.
          </div>
        )}

        <p className="text-center text-sm text-muted-foreground">
          Remembered it?{" "}
          <Link to="/login" className="text-gold hover:underline font-medium">Back to login</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
