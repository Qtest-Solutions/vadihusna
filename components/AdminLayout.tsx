import React from "react";
import AdminSidebar from "@/components/AdminSidebar";

// Define the AdminUser type (adjust to match your actual type)
interface AdminUser {
  $id: string;
  username: string;
  password: string;
  role: string;
  $createdAt: string;
  $updatedAt: string;
}

interface AdminLayoutProps {
  children: React.ReactNode;
  currentUser: AdminUser | null;
  onLogout: () => void;
  activeMenuItem?: string;
  onMenuItemClick?: (itemId: string) => void;
}

export function AdminLayout({
  children,
  currentUser,
  onLogout,
  activeMenuItem,
  onMenuItemClick,
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <AdminSidebar
        currentUser={currentUser}
        onLogout={onLogout}
        activeMenuItem={activeMenuItem}
        onMenuItemClick={onMenuItemClick}
      />

      {/* Main content */}
      <div className="flex-1">
        {/* Content wrapper */}
        <div className="container max-w-7xl mx-auto p-8">{children}</div>
      </div>
    </div>
  );
}
