"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <div
            className="text-xl font-bold uppercase tracking-[0.2em] text-white mb-2"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            District{" "}
            <span className="bg-white text-[#0a0a0a] px-1.5 font-bold text-sm">
              11
            </span>
          </div>
          <div className="text-white/30 text-sm uppercase tracking-widest">
            Admin
          </div>
        </div>

        <div className="bg-[#111111] rounded-2xl border border-white/5 p-8">
          <h1
            className="text-2xl font-bold uppercase mb-8"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Sign In
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-white/20 text-sm"
              />
            </div>
            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm hover:bg-[#f5f0e8] transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
