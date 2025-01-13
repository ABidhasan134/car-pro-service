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
  return <div className="mt-24">
    {
      oneUser?.customservices.map((yourService)=>{
        return <div className="card glass w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      })
    }
  </div>;
};

export default CustomServiceCard;
