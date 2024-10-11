'use client'
import React, { useEffect, useState } from 'react'
import FacilityService from './facilityService';
import ServiceCatagory from './serviceCatagory';
import { getAllServices } from '@/utils/fetchServices';

const ServiceDetials = ({service}) => {
   const [services,setService]=useState([]);
   const [loading,setLoading]=useState(true)
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
      return <div>Loading for data</div>
    }
  return (
    <>
      <div className='w-[70%]'>
      <img src={service.img} alt={service.img} className="w-full h-[450px]"></img>
     <p className='my-6 text-3xl font-bold'>{service.title}</p> <br />
      <p>{service.description}</p>
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
     </section>
    </>
  )
}

export default ServiceDetials
