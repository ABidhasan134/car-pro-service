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
  const [serialNo, setSerialNo] = useState("1");

  useEffect(() => {
    const fetchData = async () => {
      const serviceData = await getAllServices();
      console.log("All services:", serviceData.result);
      setSerialNo(uuid4(0, 10).replace(/-/g, "").substring(0, 10));
      setService(serviceData.result);
      setLoading(false);
    };
    fetchData();
  }, []); // 

  if (!service) {
    return <DetialsLoading />;
  }

  const handleBookNow = async (payment) => {
    console.log("This is offline payment method:", payment);
    const email = session.data?.user?.email;
    if (!email) {
      console.error("User email not available");
      return;
    }
    const payInfo = {
      serialNo,
      serviceId: service._id,
      name: service.title,
      price: service.price,
      typeOffPay: "offline",
      currentDate: new Date().toLocaleDateString(),
      status: "soon",
    };

    try {
      const res = await axios.post(`/api/service/email/${email}`, {
        payInfo: payInfo,
      });

      if (res.data.paymentUpdate?.modifiedCount > 0) {
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
    <div className="lg:flex md:grid justify-center">
      <div className="lg:w-[70%] w-full lg:ml-2 m-0 grid justify-center">
        <Image
          height={200}
          width={200}
          className="w-full h-[450px] rounded-sm"
          src={service.img}
          alt={service.img}
        />
        <p className="my-6 text-3xl font-bold">{service.title}</p>
        <p>{service.description}</p>
        <div className="grid grid-cols-2 justify-evenly">
          {service.facility?.map((facility, index) => (
            <FacilityService facility={facility} key={index} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <section className="lg:w-[30%] w-full">
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
    </div>
  );
};

export default ServiceDetials;
