import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  FileText,
  FileImage,
  Settings,
  Users,
  BarChart3,
  LogOut,
} from "lucide-react";

// Define the user type (adjust to match your AdminUser interface)
interface AdminUser {
  $id: string;
  username: string;
  password: string;
  role: string;
  $createdAt: string;
  $updatedAt: string;
}

// Define the component props interface
interface AdminSidebarProps {
  currentUser: AdminUser | null;
  onLogout: () => void;
  activeMenuItem?: string;
  onMenuItemClick?: (itemId: string) => void;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentUser,
  onLogout,
  activeMenuItem = "dashboard",
  onMenuItemClick,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigationItems: NavigationItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      href: "/admin/dashboard",
    },
    { id: "content", label: "Content", icon: FileText, href: "/admin/content" },
    { id: "assets", label: "Assets", icon: FileImage, href: "/admin/assets" },
    { id: "users", label: "Users", icon: Users, href: "/admin/users" },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ];

  const handleMenuClick = (itemId: string) => {
    if (onMenuItemClick) {
      onMenuItemClick(itemId);
    }
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

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-white shadow-lg transition-all duration-300 flex flex-col`}
    >
      {/* Logo and Toggle */}
      <div className="p-4 border-b flex items-center justify-between">
        {sidebarOpen && (
          <div className="flex items-center gap-3">
            <img
              src="/vadihusnaLogo.png"
              alt="Vadi Husna"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-gray-900">Admin Panel</span>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {sidebarOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenuItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  isActive ? "text-blue-700" : "text-gray-500"
                }`}
              />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      {currentUser && (
        <div className="p-4 border-t">
          <div
            className={`flex items-center gap-3 ${
              !sidebarOpen && "justify-center"
            }`}
          >
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              {getUserInitials(currentUser)}
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {getDisplayName(currentUser)}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {currentUser.role || "Admin"}
                </p>
              </div>
            )}
            {sidebarOpen && (
              <button
                onClick={onLogout}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
          {!sidebarOpen && (
            <div className="mt-2 flex justify-center">
              <button
                onClick={onLogout}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
