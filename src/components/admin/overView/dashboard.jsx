'use client'
import React from 'react'
import OverViewPageCard from './overViewPageCard'
import useAllUser from '@/Hooks/useAllUser'
import useProducts from '@/Hooks/useProducts'
import useAllServices from '@/Hooks/useAllService'

const AdminDashboard = () => {
    const [AllUser,refetch,isLoading]=useAllUser();
    const [productss]=useProducts();
    const [products]=useAllServices();
    // Calculate total number of custom services
    const totalUser=AllUser.length
    const totalProductss=productss.length
    const totalProducts=products.length
    const totalCustomServices = AllUser?.reduce((sum, user) => {
        return sum + (user.customservices?.length || 0);
    }, 0);
    console.log("overView products",products)
  return (
   <div className='grid grid-cols-2 gap-6 justify-center w-[100%] md:ml-6 lg:ml-12'>
   <OverViewPageCard titel={`Total ${totalUser} is using your service`} totalUser={totalUser}></OverViewPageCard>
   <OverViewPageCard titel={`Total ${totalCustomServices} custom service`} ></OverViewPageCard>
   <OverViewPageCard titel={`Total ${totalProductss} products listed`} ></OverViewPageCard>
   <OverViewPageCard titel={`Total ${totalProducts} products listed`} ></OverViewPageCard>
   </div>
  )
}

export default AdminDashboard
