'use client'
import UseUser from '@/Hooks/useUser'
import { getAllServices } from '@/utils/fetchServices'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const ServiceArea = () => {
    const sesseion = useSession()
  // console.log(sesseion?.data?.user)
  const [oneUser,isloading,refetch]=UseUser(sesseion?.data?.user?.email)
  console.log('payHistory booking from table',oneUser.servicesHistory);
  if (isloading) {
    refetch();
    
    return <div>Loading...</div>;
  }
  return (
    <div>
      here
    </div>
  )
}

export default ServiceArea
