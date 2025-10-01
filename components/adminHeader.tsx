import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

// Define the user type (adjust this to match your actual AdminUser interface)
interface AdminUser {
  $id: string;
  username: string;
  password: string;
  role: string;
  $createdAt: string;
  $updatedAt: string;
}

// Define the component props interface
interface AdminHeaderProps {
  currentUser: AdminUser | null;
  pageTitle?: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  currentUser,
  pageTitle = "Dashboard",
}) => {
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
    <header className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* User Menu */}
          {currentUser && (
            <div className="flex items-center gap-2 pl-4 border-l cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                {getUserInitials(currentUser)}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">
                  {getDisplayName(currentUser)}
                </p>
                <p className="text-xs text-gray-500">
                  {currentUser.role || "Admin"}
                </p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
