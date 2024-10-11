import React from 'react'
import FacilityService from './facilityService';

const ServiceDetials = ({service}) => {
    // console.log(service.facility);
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
      {/* You can add more service details here */}
     </div>
     <div className='w-[30%]'>
       
     </div>
    </>
  )
}

export default ServiceDetials
