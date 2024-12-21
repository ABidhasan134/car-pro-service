"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { sideLinks } from "../sidebar/sidebar";

const UserNavbar = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();

  // Find the current path in sideLinks
  const currentLink = sideLinks.find((link) => link.url === pathName);

  // Fallback values
  const userImage = session?.user?.image || "/default-avatar.png";
  const userName = session?.user?.name || "Guest";

  return (
    <div className="flex justify-between items-center px-11 py-2">
      <p className="font-medium text-gray-800 text-4xl">
        {currentLink?.title || "Dashboard"}
      </p>

      {status === "loading" ? (
        <div className="animate-pulse w-10 h-10 rounded-full " />
      ) : (
        <Image
          className="rounded-full border-2 border-orange-600 p-[2px]"
          src={userImage}
          height={40}
          width={40}
          alt={`${userName}'s avatar`}
        />
      )}
    </div>
  );
};

export default UserNavbar;
