'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/assets/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

export const sideLinks=[
  {
    url:'/admin',
    title: 'Admin panel'
  },
  {
    url:'/admin/profile',
    title: 'profile'
  }
  
]
const AdminSideBar = () => {
  const pathName = usePathname();
  
  return (
    <div className='z-40'>
      
      <Link href='/'>
      <Image src={logo} className='xl:h-[180px] lg:h-[160px] xl:w-[200px] lg:w-[180px] md:h-[140px] md:w-[140px] w-[100px] h-[80px]'></Image>
      </Link>
      {
        sideLinks.map((item,index)=>{
          return(
            <li key={index} className='list-none md:min-w-[150px] sm:min-w-[100px] my-4 xl:text-2xl md:text-xl text-xs'>
              <Link href={item.url} className={ pathName === item.url ? 'm-2 p-2 flex justify-center rounded-md  xl:text-2xl md:text-xl text-sm text-white bg-[#FF3811] !important' : 'p-2 m-2 text-2xl flex rounded-lg hover:bg-orange-100 min-w-[150px]'}><span className=''>{item.title}</span></Link>
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

export default AdminSideBar;