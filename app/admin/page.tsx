"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Lock,
  LogIn,
  Shield,
  FileText,
  Users,
  Settings,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

// Hardcoded credentials for now (no database)
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@example.com";
const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "change-me-123";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [authed, setAuthed] = useState(false);
  const [allowedHost, setAllowedHost] = useState<boolean | null>(null);

  // Only allow on localhost/127.0.0.1
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hostname;
    const ok = h === "localhost" || h === "127.0.0.1";
    setAllowedHost(ok);
  }, []);

  // Session backed by sessionStorage so it clears when the tab/browser closes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = sessionStorage.getItem("vh_admin_session");
    if (token === "1") setAuthed(true);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("vh_admin_session", "1");
      setAuthed(true);
    } else {
      setError("Invalid email or password");
    }
  };

  const onLogout = () => {
    if (typeof window !== "undefined")
      sessionStorage.removeItem("vh_admin_session");
    setAuthed(false);
  };

  if (allowedHost === false) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-max">
          <div className="rounded-xl border p-8 bg-white text-center">
            <Shield className="mx-auto mb-4 text-red-600" />
            <h1 className="text-2xl font-semibold mb-2">Admin is restricted</h1>
            <p className="text-gray-600">
              This page is only accessible from localhost for safety.
            </p>
            <div className="mt-6">
              <Link href="/" className="text-blue-600 hover:underline">
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Until we know the host, avoid flicker
  if (allowedHost === null) return null;

  if (authed) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Minimal header with logo and logout */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
          <div className="container-max flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src="/vadihusnaLogo.png"
                alt="Vadi Husna"
                className="h-8 w-auto"
              />
              <span className="text-sm text-gray-500">Admin</span>
            </div>
            <button
              onClick={onLogout}
              className="px-3 py-2 rounded-lg border hover:bg-gray-50 text-sm"
            >
              Log out
            </button>
          </div>
        </header>

        {/* Hero banner */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container-max py-10">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <p className="text-white/80 mt-1">
              Local access only. Session clears when the browser/tab closes.
            </p>
          </div>
        </section>

        {/* Content */}
        <main className="container-max py-8">
          {/* Quick stats (placeholders) */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-blue-50">
                  <BarChart3 className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Site Pages</p>
                  <p className="text-lg font-semibold">—</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-50">
                  <Users className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Admissions</p>
                  <p className="text-lg font-semibold">—</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-amber-50">
                  <FileText className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">News/Notices</p>
                  <p className="text-lg font-semibold">—</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-indigo-50">
                  <Settings className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Settings</p>
                  <p className="text-lg font-semibold">—</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-blue-50">
                  <FileText className="h-5 w-5 text-blue-700" />
                </div>
                <h2 className="text-lg font-semibold">Manage Content</h2>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Update home sections, about, or news (coming soon).
              </p>
              <button className="mt-4 btn-primary">Open</button>
            </div>
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-50">
                  <Users className="h-5 w-5 text-emerald-700" />
                </div>
                <h2 className="text-lg font-semibold">Admissions</h2>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                View and respond to inquiries (coming soon).
              </p>
              <button className="mt-4 px-4 py-2 rounded-lg border hover:bg-gray-50">
                Open
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-indigo-50">
                  <Settings className="h-5 w-5 text-indigo-700" />
                </div>
                <h2 className="text-lg font-semibold">Settings</h2>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Logo, colors, and preferences (coming soon).
              </p>
              <button className="mt-4 px-4 py-2 rounded-lg border hover:bg-gray-50">
                Open
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
            <p className="text-gray-600 text-sm">
              Accessible only on localhost
            </p>
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
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full btn-primary inline-flex items-center justify-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              Log in
            </button>
            <p className="text-xs text-gray-500 text-center">
              Use {ADMIN_EMAIL} / {ADMIN_PASSWORD}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
