import React from 'react'
import ServiceArea from './serviceArea'
import ProductArea from './productArea'
import CoustomService from './coustomService'

const Dashborad = () => {
  return (
    <div className='flex w-full gap-4'>
      <div className='flex gap-4'>
      <ServiceArea></ServiceArea>
      <ProductArea></ProductArea>
      </div>
      
      <CoustomService></CoustomService>
    </div>
  )
}

export default Dashborad
