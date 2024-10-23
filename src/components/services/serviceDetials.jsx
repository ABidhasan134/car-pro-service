'use client'
import React, { useEffect, useState } from 'react'
import FacilityService from './facilityService';
import ServiceCatagory from './serviceCatagory';
import { getAllServices } from '@/utils/fetchServices';
import DetialsLoading from '../shared/detialsLoading';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Swal from 'sweetalert2'
import PdfInvoice from '../invoice/pdfInvoice';

const ServiceDetials = ({service}) => {
   const [services,setService]=useState([]);
   const [loading,setLoading]=useState(true);
   const session = useSession();
   const [tempData,setTempData]=useState(false);
  //  console.log(session.data.user);
    useEffect(() => {
        const fetchData = async () => {
            const serviceData = await getAllServices();
            // console.log(serviceData.result);
            setService(serviceData.result)
            setLoading(false)
        };
        fetchData();
    }, []);
   
    if(loading)
    {
      return <DetialsLoading></DetialsLoading>
    }
    const handleBookNow = async (payment) => {
      console.log(payment);
      const email=session.data.user.email;

      if (!email) {
          console.error("User email not available");
          return;
      }
  
      try {
          const res = await axios.post(`/api/service/email/${email}`,{payment:payment})
          console.log("Response from backend:", res.data.paymentUpdate);
          // paymentUpdate.modifiedCount
          if(res.data.paymentUpdate.modifiedCount>0){
            setTempData(true);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          }
      } catch (error) {
          console.error("Error booking service:", error);
      }
  };
  return (
    <>
      <div className='w-[70%]'>
      <img src={service.img} alt={service.img} className="w-full h-[450px]"></img>
     <p className='my-6 text-3xl font-bold'>{service.title}</p> <br />
      <p>{service.description}</p>
      <button className='btn btn-outline btn-error w-[30%] mt-2' onClick={()=>handleBookNow(service.price)}>Book Now</button>
      <div className='grid grid-cols-2 justify-evenly'>
      {
            service.facility.map((facility, index)=>{
                return <FacilityService facility={facility} key={index}></FacilityService>
            })
        }
        
      </div>
      {/* 20% side section */}
     </div>
     <section className='w-[30%]'>
      <div className=' bg-orange-100 mx-4 py-2'>
      {
        services.map((service)=>{
          return <ServiceCatagory servicesTitle={service.title} ></ServiceCatagory>
        })
      }
      
      </div>
      {
        tempData ? null : <PdfInvoice service={service} user={session}></PdfInvoice>
       }
     </section>
    </>
  )
}

export default ServiceDetials
