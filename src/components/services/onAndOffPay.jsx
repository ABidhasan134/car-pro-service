'use client'
import React from "react";
import logImg from "../../../public/assets/logo.png";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const OnAndOffPay = ({ service,serialNo }) => {
  const session=useSession();
  const userName=session?.data.user.name;
  const userEmail=session?.data.user.email;
  const router = useRouter();
  // console.log(service);
  const serviceId = service._id;
  const name = service.title;
  const price = service.price-2/100*service.price ;
  const typeOffPay = "online";
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  const payInfo={serviceId,name,userName,userEmail,price,typeOffPay,currentDate}
  // console.log('service on off serial No', serialNo)
  const handelPayOnline = async() => {
    console.log("this is from the online pay service",serialNo);
    const res= await axios.post('/api/service/make-online',{email:userEmail,serialNo})
    const data=res.data;
    console.log(data);
    // router.push(
    //   `/stripepayment?id=${serviceId}
    //   &price=${price}&type=service`
    // ); 
  };
  
  return (
    <section className="w-[92%] py-4 bg-black grid justify-center text-center text-white m-4 rounded-lg">
      <Image className="p-4 relative left-7" src={logImg}></Image>
      <h1 className="mx-4 flex text-center py-2">Pay Online Get 2% bonus</h1>
      <button
        onClick={handelPayOnline}
        className="mx-4 btn btn-outline text-[#FF3811] hover:text-white hover:bg-[#FF3811]"
      >
        pay Now
      </button>
    </section>
  );
};

export default OnAndOffPay;
