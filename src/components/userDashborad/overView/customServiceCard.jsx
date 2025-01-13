"use client";
import UseUser from "@/Hooks/useUser";
import { useSession } from "next-auth/react";
import React from "react";

const CustomServiceCard = () => {
  const sesseion = useSession();
  const email = sesseion?.data?.user?.email;
  const [oneUser, isloading, refetch] = UseUser(email);
  console.log(oneUser?.customservices);
  if (isloading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="mt-24 flex gap-3">
      {oneUser?.customservices?.map((yourService) => {
        return (
          <div className="card glass w-96 ">
            <div className="card-body text-start">
              <h2 className="card-title">
                Car model: {yourService.vehicalName || yourService.vehical}
              </h2>
              <p className="text-start">
                service Time and date: {yourService.dateTime}
              </p>
              <p>service: {yourService.problem}</p>
              {(yourService.bookingStatus === "panding" && <div className="absolute top-24 h-6 w-6 rounded-full bg-blue-600 right-0 mr-3 tooltip"  data-tip={yourService.bookingStatus}></div>) ||
                (yourService.bookingStatus === "confirm" && <div className="absolute top-24 h-6 w-6 rounded-full bg-green-600 right-0 mr-3 tooltip" data-tip={yourService.bookingStatus}></div>) ||
                (yourService.bookingStatus === "rejected" && <div className="absolute top-24 h-6 w-6 rounded-full bg-red-600 right-0 mr-3 tooltip" data-tip={yourService.bookingStatus}></div>) ||
                (yourService.bookingStatus?"":  <div className="absolute top-24 h-6 w-6 rounded-full bg-red-600 right-0 mr-3 tooltip" data-tip="Rejected"></div>)
                } 
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomServiceCard;
