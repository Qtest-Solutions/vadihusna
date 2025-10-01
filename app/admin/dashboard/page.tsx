"use client";

import {
  FileText,
  Users,
  Settings,
  BarChart3,
  FileImage,
  Plus,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    {
      label: "Site Pages",
      value: "12",
      change: "+2 this week",
      icon: BarChart3,
      color: "blue",
      bg: "bg-blue-50",
      iconColor: "text-blue-700",
    },
    {
      label: "Admissions",
      value: "24",
      change: "+8 pending",
      icon: Users,
      color: "emerald",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-700",
    },
    {
      label: "News/Notices",
      value: "8",
      change: "3 published",
      icon: FileText,
      color: "amber",
      bg: "bg-amber-50",
      iconColor: "text-amber-700",
    },
    {
      label: "Total Assets",
      value: "156",
      change: "+12 this month",
      icon: FileImage,
      color: "indigo",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-700",
    },
  ];

  const quickActions = [
    {
      title: "Upload Logo",
      description: "Change your site's logo and manage other assets",
      icon: FileImage,
      color: "blue",
      bg: "bg-blue-50",
      iconColor: "text-blue-700",
      href: "/admin/assets",
    },
    {
      title: "Edit Content",
      description: "Update your website's content and pages",
      icon: FileText,
      color: "emerald",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-700",
      href: "/admin/content",
    },
    {
      title: "Settings",
      description: "Configure your site preferences",
      icon: Settings,
      color: "indigo",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-700",
      href: "/admin/settings",
    },
  ];

  const recentActivities = [
    {
      user: "John Doe",
      action: "Updated homepage content",
      time: "2 hours ago",
      type: "content",
    },
    {
      user: "Jane Smith",
      action: "Uploaded new gallery images",
      time: "4 hours ago",
      type: "media",
    },
    {
      user: "Admin",
      action: "Changed site settings",
      time: "1 day ago",
      type: "settings",
    },
    {
      user: "Mike Johnson",
      action: "Added new faculty member",
      time: "2 days ago",
      type: "user",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-xl">
        <h1 className="text-3xl font-semibold">
          Welcome to Admin Dashboard! 👋
        </h1>
        <p className="text-white/80 mt-2">
          Manage your school's content and settings from here.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${stat.bg}`}>
                    <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <TrendingUp className="h-4 w-4 text-green-500 ml-auto mb-1" />
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Quick Actions
            </h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} href={action.href}>
                  <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-md ${action.bg} group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`h-5 w-5 ${action.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold">
                            {action.title}
                          </h2>
                          <p className="text-sm text-gray-600 mt-1">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Add new action card */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-gray-400 transition-colors cursor-pointer group">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="p-3 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors mx-auto mb-3 w-fit">
                    <Plus className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Add Quick Action
                  </h3>
                  <p className="text-sm text-gray-500">
                    Customize your dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Activities
            </h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          activity.type === "content"
                            ? "bg-blue-100 text-blue-700"
                            : activity.type === "media"
                            ? "bg-green-100 text-green-700"
                            : activity.type === "settings"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {activity.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
