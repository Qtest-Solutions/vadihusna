"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authService, AdminUser } from "@/lib/auth-service";
import {
  LogOut,
  Menu,
  X,
  Home,
  FileText,
  Users,
  Settings,
  FileImage,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [allowedHost, setAllowedHost] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hostname;
    const ok = h === "localhost" || h === "127.0.0.1";
    setAllowedHost(ok);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await authService.getCurrentUser();
        if (!user) {
          router.push("/admin");
          return;
        }
        setCurrentUser(user);
      } catch (error) {
        router.push("/admin");
      } finally {
        setLoading(false);
      }
    };

    if (allowedHost !== null) {
      checkAuth();
    }
  }, [router, allowedHost]);

  const onLogout = async () => {
    await authService.logout();
    router.push("/admin");
  };

  // Helper function to get display name
  const getDisplayName = (user: AdminUser | null) => {
    if (!user) return "Admin";
    return user.username || "Admin";
  };

  // Helper function to get user initials
  const getUserInitials = (user: AdminUser | null) => {
    if (!user || !user.username) return "A";
    return user.username.charAt(0).toUpperCase();
  };

  if (allowedHost === false) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="rounded-xl border p-8 bg-white text-center max-w-md">
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
    );
  }

  if (loading || allowedHost === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Assets", href: "/admin/assets", icon: FileImage },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:flex lg:flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="/vadihusnaLogo.png"
              alt="Vadi Husna"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-gray-900">Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User section */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
              {getUserInitials(currentUser)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {getDisplayName(currentUser)}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {currentUser?.role || "Administrator"}
              </p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Welcome back, {getDisplayName(currentUser)}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
