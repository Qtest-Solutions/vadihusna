"use client";

import { useEffect, useState } from "react";
import { Lock, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authService, AdminUser } from "@/lib/auth-service";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Removed useEffect for allowedHost check.

  useEffect(() => {
    // Check if user is already logged in, redirect to dashboard
    authService.getCurrentUser().then((user) => {
      if (user) {
        router.push("/admin/dashboard");
      }
    });
  }, [router]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await authService.login(email, password);
      if (result.success && result.user) {
        router.push("/admin/dashboard");
      } else {
        setError(result.error || "Invalid credentials");
      }
    } catch (error: any) {
      setError(error.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  // Removed conditional rendering for allowedHost === false and allowedHost === null

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="container-max h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/vadihusnaLogo.png"
              alt="Vadi Husna"
              className="h-8 w-auto"
            />
            <span className="text-sm text-gray-500">Admin</span>
          </div>
        </div>
      </header>
      <div className="container-max py-10">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6">
          <div className="text-center mb-6">
            <Lock className="mx-auto text-blue-600" />
            <h1 className="text-2xl font-semibold mt-2">Admin Login</h1>
            {/* Removed the text describing localhost restriction */}
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              disabled={loading}
            >
              <LogIn className="h-4 w-4" />
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
