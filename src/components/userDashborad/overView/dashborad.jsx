import React from 'react'
import ServiceArea from './serviceArea'
import ProductArea from './productArea'

const Dashborad = () => {
  return (
    <div className='flex w-full gap-4'>
      <div className='flex gap-4'>
      <ServiceArea></ServiceArea>
      <ProductArea></ProductArea>
      </div>
      
    </div>
  )
}

export default Dashborad
