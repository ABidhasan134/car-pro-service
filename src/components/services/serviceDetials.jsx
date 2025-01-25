"use client";
import React, { useEffect, useState } from "react";
import FacilityService from "./facilityService";
import ServiceCatagory from "./serviceCatagory";
import { getAllServices } from "@/utils/fetchServices";
import DetialsLoading from "../shared/detialsLoading";
import { useSession } from "next-auth/react";
import axios from "axios";
import Swal from "sweetalert2";
import PdfInvoice from "../invoice/pdfInvoice";
import OnAndOffPay from "./onAndOffPay";
import uuid4 from "uuid4";
import Image from "next/image";

const ServiceDetials = ({ service }) => {
  const [services, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const [tempData, setTempData] = useState(false);
  const [serialNo,setSerialNo]=useState('1')
  //  console.log(session.data.user);
  useEffect(() => {
    const fetchData = async () => {
      const serviceData = await getAllServices();
      // console.log(serviceData.result);
      setSerialNo(uuid4(0,10).replace(/-/g, '').substring(0, 10))
      setService(serviceData.result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <DetialsLoading></DetialsLoading>;
  }
  const handleBookNow = async (payment) => {
    console.log("this is ofline payment methord", payment);
    const email = session.data.user.email;
    const serviceId = service._id;
    const name = service.title;
    const price = service.price;
    const typeOffPay = "offline";
    const date = new Date();
    const status='soon'

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    const payInfo = { serialNo,serviceId, name, price, typeOffPay, currentDate,status };

    if (!email) {
      console.error("User email not available");
      return;
    }

    try {
      const res = await axios.post(`/api/service/email/${email}`, {
        payInfo: payInfo,
      });
      console.log("Response from backend:", res.data.paymentUpdate);
      // paymentUpdate.modifiedCount
      if (res.data.paymentUpdate.modifiedCount > 0) {
        setTempData(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error booking service:", error);
    }
  };
  return (
    <>
      <div className="w-[70%]">
        <Image height={200} width={200}
          src={service.img}
          alt={service.img}
          className="w-full h-[450px]"
        />
        <p className="my-6 text-3xl font-bold">{service.title}</p> <br />
        <p>{service.description}</p>
        <div className="grid grid-cols-2 justify-evenly">
          {service.facility.map((facility, index) => {
            return (
              <FacilityService
                facility={facility}
                key={index}
              ></FacilityService>
            );
          })}
        </div>
        {/* 20% side section */}
      </div>
      <section className="w-[30%]">
        <div className=" bg-orange-100 mx-4 py-2">
          {services.map((service,index) => {
            return (
              <ServiceCatagory key={index} servicesTitle={service.title} serviceId={service._id}></ServiceCatagory>
            );
          })}
        </div>
        {tempData ? (
          <div>
                      <PdfInvoice service={service} user={session}></PdfInvoice>
                      <OnAndOffPay service={service} serialNo={serialNo}></OnAndOffPay>
          </div>
        ) : <><p className="text-5xl font-semibold mx-4">Price: ${service.price}</p>
        <button
          className="my-2 mx-4 btn btn-outline btn-error w-[90%] flex justify-center mt-2"
          onClick={handleBookNow}
        >
          Book Now
        </button></>}
        
        
      </section>
    </>
  );
};

export default ServiceDetials;
