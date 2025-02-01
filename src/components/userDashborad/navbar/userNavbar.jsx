"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Sidebar, { sideLinks } from "../sidebar/sidebar";

const UserNavbar = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();

  // Find the current path in sideLinks
  const currentLink = sideLinks.find((link) => link.url === pathName);

  // Fallback values
  const userImage = session?.user?.image || "/default-avatar.png";
  const userName = session?.user?.name || "Guest";

  return (
    <div className="flex justify-between items-center px-11 py-2 relative lg:w-full">
      <p className="font-medium text-4xl text-[#FF3811]">
        {currentLink?.title || "Dashboard"}
      </p>

      {status === "loading" ? (
        <div className="animate-pulse w-10 h-10 rounded-full " />
      ) : (
      
        <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} className="m-1">
                  <Image
          className="rounded-full border-2 border-orange-600 p-[2px]"
          src={userImage}
          height={40}
          width={40}
          alt={`${userName}`}
        />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow relative -left-32 text-black"
                  >
                   <Sidebar></Sidebar>
                  </ul>
                </div>
        
      )}
    </div>
  );
};

export default UserNavbar;
