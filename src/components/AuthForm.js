"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthForm({ mode }) {
  const isSignup = mode === "signup";
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/${isSignup ? "signup" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      // Redirect: admins to the dashboard, everyone else to their account.
      const dest = data.user?.role === "admin" ? "/admin" : "/account";
      router.push(dest);
      router.refresh();
    } catch {
      setError("Could not reach the server. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="card p-8">
        <h1 className="font-display text-3xl text-ink">
          {isSignup ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {isSignup
            ? "Save your favourite sarees and check out faster."
            : "Sign in to your Little Looms account."}
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {isSignup && (
            <div>
              <label className="label" htmlFor="name">Full name</label>
              <input
                id="name" name="name" type="text" autoComplete="name"
                className="field" value={form.name} onChange={update}
                placeholder="Your name" required
              />
            </div>
          )}
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email" autoComplete="email"
              className="field" value={form.email} onChange={update}
              placeholder="you@example.com" required
            />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password" name="password" type="password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              className="field" value={form.password} onChange={update}
              placeholder={isSignup ? "At least 6 characters" : "Your password"}
              required minLength={6}
            />
          </div>

          {error && (
            <p className="rounded-lg bg-wine/10 px-4 py-3 text-sm text-wine">{error}</p>
          )}

          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          {isSignup ? (
            <>Already have an account?{" "}
              <Link href="/login" className="text-wine link-underline">Sign in</Link>
            </>
          ) : (
            <>New here?{" "}
              <Link href="/signup" className="text-wine link-underline">Create an account</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
