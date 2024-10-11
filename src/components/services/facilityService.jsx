import React from 'react'

const FacilityService = ({facility}) => {
    // console.log(facility);
  return (
    <div className='border-t-2 border-blue-500 bg-orange-100 m-4 rounded-xl p-5'>
      <h1 className='text-3xl m-2 font-bold'>{facility.name}</h1>
      <p className='text-xl'>{facility.details}</p>
    </div>
  )
}

export default FacilityService
