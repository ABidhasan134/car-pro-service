import React from 'react'
import ServiceArea from './serviceArea'
import ProductArea from './productArea'
import CoustomService from './customService'
import CustomServiceCard from './customServiceCard'
import TitleCustomService from './titleCustomService'

const Dashborad = () => {
  return (
    <>
    <div className=' w-full gap-4 md:grid lg:flex-row-reverse xl:justify-center justify-start  ml-0 p-0'>
      <CoustomService></CoustomService>
      <div className='lg:grid xl:flex gap-4'>
      <ServiceArea></ServiceArea>
      <ProductArea></ProductArea>
      </div>
    </div>
    <TitleCustomService></TitleCustomService>
    <CustomServiceCard></CustomServiceCard>
    </>
  )
}

export default Dashborad
