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
    <html lang="en" data-theme="light">
      <body className="antialiased text-black bg-gray-100">
        <AuthProvider>
          <QueryProvider>
            here is the user dash
            <div className="dashboard-container">{children}</div>
            <Link  href='/'>Home</Link>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
