import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCatagory = ({servicesTitle,serviceId}) => {
    console.log(serviceId);
  return (
    <Link href={`${serviceId}`} className='text-start'>
        <button className='text-start bg-white m-2 text-2xl py-4 px-8 w-[95%] rounded-md hover:bg-[#FF3811] flex items-center justify-between'>{servicesTitle} <FaArrowRightLong></FaArrowRightLong></button>
        
    </Link>
  )
}

export default ServiceCatagory
