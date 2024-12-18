import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
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

          <p className="text-lg font-medium p-6 bg-[#e2d3c2] text-black">
            Here is the user dashboard
          </p>

          {/* Main Dashboard Content */}
          <main className="grid gap-0 bg-[#d6dde6] flex-grow pb-4 text-white h-[100%]]\">
            <h1 className=" text-2xl font-bold text-white bg-[#e2d3c2] p-6 h-[15%]">
              Dashboard
            </h1>
            <div className="absolute top-[150px] p-6 h-[80%] grid items-start text-black">
            {children}
            </div>
          </main>
        </div>
      </QueryProvider>
    </AuthProvider>
  );
}
