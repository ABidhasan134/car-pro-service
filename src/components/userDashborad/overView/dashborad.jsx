import React from 'react'
import ServiceArea from './serviceArea'
import ProductArea from './productArea'
import CoustomService from './customService'
import CustomServiceCard from './customServiceCard'
import TitleCustomService from './titleCustomService'

const Dashborad = () => {
  return (
    <>
    <div className='flex w-full gap-4'>
      <div className='flex gap-4'>
      <ServiceArea></ServiceArea>
      <ProductArea></ProductArea>
      </div>
      <CoustomService></CoustomService>
    </div>
    <TitleCustomService></TitleCustomService>
    <CustomServiceCard></CustomServiceCard>
    </>
  )
}

export default Dashborad
