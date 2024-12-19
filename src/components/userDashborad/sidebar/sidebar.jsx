'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/assets/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

const Sidebar = () => {
  const pathName = usePathname();
  const sideLinks=[
    {
      url:'/userDeshborad',
      title: 'Overview'
    },
    {
      url:'/userDeshborad/profile',
      title: 'profile'
    },
    {
      url:'/userDeshborad/services',
      title: 'services'
    },
    {
      url:'/userDeshborad/products',
      title: 'products'
    },
    {
      url:'/userDeshborad/plans',
      title: 'Update plans'
    },
    {
      url:'/userDeshborad/payment-history',
      title: 'Payments'
    },
    
  ]
  return (
    <div>
      
      <Link href='/'>
      <Image src={logo} className='h-[180px] w-[200px]'></Image>
      </Link>
      {
        sideLinks.map((item,index)=>{
          return(
            <li key={index} className='list-none min-w-[150px] my-4'>
              <Link href={item.url} className={ pathName === item.url ? 'm-2 p-2 flex justify-center rounded-md  text-2xl text-white bg-[#FF3811] !important' : 'p-2 m-2 text-2xl flex rounded-lg hover:bg-orange-100 min-w-[150px]'}><span className=''>{item.title}</span></Link>
            </li>
          )
        })
      }
      <button
    onClick={() => signOut({ callbackUrl: '/logIn' })}
    className="m-2 p-2 flex rounded-md text-2xl hover:bg-orange-100 min-w-[150px]"
  >
    Log out
  </button>
    </div>
  )
}

export default Sidebar
