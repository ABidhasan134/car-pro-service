'use client'
import React from "react";
import logImg from "../../../public/assets/logo.svg";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";
const OnAndOffPay = ({ service }) => {
  const session=useSession();
  console.log(service);
  const serviceId = service._id;
  const name = service.title;
  const price = service.price;
  const typeOffPay = "online";
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  const payInfo={serviceId,name,price,typeOffPay,currentDate}
  const handelPayOnline = () => {
    const email=session.data.user.email;
    console.log(payInfo);
    axios.post("/api/service/onlinePay",{payInfo});
  };
  return (
    <section className="w-[92%] py-4 bg-black grid justify-center text-center text-white m-4 rounded-lg">
      <Image className="p-4 relative left-7" src={logImg}></Image>
      <h1 className="flex text-center py-2">Pay Online Get 2% bonus</h1>
      <button
        onClick={handelPayOnline}
        className="btn btn-outline text-[#FF3811] hover:text-white hover:bg-[#FF3811]"
      >
        pay Now
      </button>
    </section>
  );
};

export default OnAndOffPay;
