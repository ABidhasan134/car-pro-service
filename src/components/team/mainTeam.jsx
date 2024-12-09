'use client'
import React from 'react'
import TitleAndSub from '../shared/titleAndSub'
import useMechanic from '@/Hooks/useMechanic'

const MainTeam = () => {
  const [mechanics, isLoading, refetch]=useMechanic();
  console.log("here is the mechanics in the fontend", mechanics);
  return (
    <div className='relative grid justify-center p-6 mb-20'>
       <TitleAndSub title='Our Team' subtitle='Our team at Magic Motor consists of skilled and experienced mechanics dedicated to providing top-notch automotive services. With expertise across various specialties, we ensure your vehicle gets the care it deserves.'></TitleAndSub>
      here is our team
    </div>
  )
}

export default MainTeam
