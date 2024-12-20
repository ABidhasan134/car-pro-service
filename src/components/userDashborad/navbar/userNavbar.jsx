'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const UserNavbar = () => {
    const session=useSession()
    console.log(session?.data?.user)
  return (
    <div className='flex justify-between items-center'>
      <p>Dashborad</p>
      <Image className="rounded-full border-2 border-orange-600 p-[2px]" src={session?.data?.user?.image} height={80} width={80} alt={session?.data?.user?.name}></Image>
    </div>
  )
}

export default UserNavbar
