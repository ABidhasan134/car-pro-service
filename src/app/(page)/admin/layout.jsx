import AdminNavBar from "@/app/api/admin/adminNavBar/adminNavBar";
import AdminSideBar from "@/components/admin/adminSideBar/adminSideBar";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import UserNavbar from "@/components/userDashborad/navbar/userNavbar";
import Sidebar from "@/components/userDashborad/sidebar/sidebar";
import AuthProvider from "@/service/authProvider";
import QueryProvider from "@/service/queryClinte";

export const metadata = {
  title: "Admin panel",
  description: "Admin Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <QueryProvider>
        <AnimatedGridPattern></AnimatedGridPattern>
        <div className="flex  bg-[#F3F4F6] min-h-screen">
          {/* Decorative Grid Pattern */}

          <div className="hidden md:grid text-lg font-medium p-6 bg-[#e2d3c2] text-black">
           <AdminSideBar></AdminSideBar>
          </div>
          {/* Main Dashboard Content */}
          <main className="bg-[#d6dde6] flex-grow pb-4 text-white relative w-[70%]">
            <div className='text-2xl font-bold text-white bg-[#e2d3c2] p-6 h-[110px]'>
            <AdminNavBar></AdminNavBar>
            </div>
            <div className="relative ml-0 p-6 h-[80%] text-black">
            {children}
            </div>
          </main>
        </div>
      </QueryProvider>
    </AuthProvider>
  );
}
