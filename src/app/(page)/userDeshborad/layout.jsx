import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import UserNavbar from "@/components/userDashborad/navbar/userNavbar";
import Sidebar from "@/components/userDashborad/sidebar/sidebar";
import AuthProvider from "@/service/authProvider";
import QueryProvider from "@/service/queryClinte";

export const metadata = {
  title: "Dashboard",
  description: "User Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <QueryProvider>
        <AnimatedGridPattern></AnimatedGridPattern>
        <div className="flex  bg-[#F3F4F6] min-h-screen">
          {/* Decorative Grid Pattern */}

          <div className="text-lg font-medium p-6 bg-[#e2d3c2] text-black">
           <Sidebar></Sidebar>
          </div>
          {/* Main Dashboard Content */}
          <main className="grid gap-0 bg-[#d6dde6] flex-grow pb-4 text-white ">
            <div className='text-2xl font-bold text-white bg-[#e2d3c2] p-6 h-[90px]'>
            <UserNavbar ></UserNavbar>
            </div>
            <div className="relative  p-6 h-[80%] grid items-start text-black">
            {children}
            </div>
          </main>
        </div>
      </QueryProvider>
    </AuthProvider>
  );
}
