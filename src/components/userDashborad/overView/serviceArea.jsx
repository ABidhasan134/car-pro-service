"use client";
import UseUser from "@/Hooks/useUser";
import { useSession } from "next-auth/react";
import React from "react";
import { FcApproval } from "react-icons/fc";

const ServiceArea = () => {
  const sesseion = useSession();
  // console.log(sesseion);
  const [oneUser, isloading, refetch] = UseUser(sesseion?.data?.user?.email);
  // console.log("service History overview", oneUser?.servicesHistory);
  if (isloading) {
    refetch();
    return <div>Loading...</div>;
  }
  return (
    <div className="grid gap-2">
      <p className="text-4xl font-semibold p-2 flex text-center">
        service Area
      </p>
      <div className='h-[350px] overflow-auto min-w-[400px]'>
      {oneUser?.servicesHistory?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex w-3/4 min-w-96 h-36 mt-4 bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <svg width="16" height="144" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 8 0 
         Q 4 6.4, 8 12.8 
         T 8 25.6 
         Q 4 32, 8 38.4 
         T 8 51.2 
         Q 4 57.6, 8 64 
         T 8 76.8 
         Q 4 83.2, 8 89.6 
         T 8 102.4 
         Q 4 108.8, 8 115.2 
         T 8 128 
         Q 4 134.4, 8 140.8 
         T 8 153.6 
         Q 4 160, 8 166.4 
         T 8 179.2 
         Q 4 185.6, 8 192 
         L 0 192 
         L 0 0 
         Z"
                fill="#8BC34A"
                stroke="#8BC34A"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
            <div className="mx-2.5 overflow-hidden w-full">
              <p className="mt-1.5 text-xl font-bold text-[#8BC34A] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                Success !
              </p>
              <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                serial No: {item.serialNo}
              </p>
              <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                service Date: {item.currentDate}
              </p>
              <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                service Date: {item.price}
              </p>

              <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                {item.name} <br />
                {item.typeOffPay === "offline"
                  ? "you have to payment in offline"
                  : "Payment success by online"}
              </p>
            </div>
            <p className="text-5xl flex items-center pr-2 text-[#66cdaa]">
              <FcApproval></FcApproval>
            </p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ServiceArea;
