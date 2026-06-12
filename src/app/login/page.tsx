"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/admin/enquiries",
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120c07] px-6 text-white">
      <form
        onSubmit={handleLogin}
        className="glass w-full max-w-md p-10"
      >
        <p className="section-label mb-6">
          Admin Login
        </p>

        <h1 className="text-5xl font-black uppercase tracking-[-0.05em]">
          Sign In
        </h1>

        <div className="mt-10 grid gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white/20 bg-black/35 px-5 py-4 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-white/20 bg-black/35 px-5 py-4 text-white"
          />

          <button
            type="submit"
            className="bg-[#e8d5b5] px-6 py-5 text-xs font-black uppercase tracking-[0.35em] text-black transition hover:bg-white"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
