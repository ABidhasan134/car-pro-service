import React from "react";
import AuthProvider from "@/service/authProvider";
import QueryProvider from "@/service/queryClinte";
import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "User Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <QueryProvider>
        <div className="dashboard-wrapper antialiased text-black bg-gray-100 min-h-screen">
          <p>Here is the user dashboard</p>
          <div className="dashboard-container">{children}</div>
          <Link href="/">Home</Link>
        </div>
      </QueryProvider>
    </AuthProvider>
  );
}
