'use client'
import React from 'react'
import './profile.css'
import Image from 'next/image'
import userBg from '../../../../public/assets/images/userDash/bgUser1.jpg'
import { useSession } from 'next-auth/react'
import BasicInfo from './basicInfo'
import TruckLoader from '@/components/shared/TruckLoader'
import avater from "../../../../public/assets/avater.png";

const ProfileCard = () => {
  const { data: session, status } = useSession();
  const userImage = session?.user?.image 
  const userName = session?.user?.name || "Guest";


  return (
<div className="card">
    <Image className='opacity-30 relative md:-top-32 xl:top-0 w-[1350px] -top-36 h-[450px] rounded-lg'  src={userBg} alt='user background'></Image>
    <div className="absolute grid justify-center text-center w-[80%] h-auto ">
      {status === "loading" ? (
              <TruckLoader></TruckLoader>
            ) : (
              <Image
                className="relative left-20 rounded-full border-2 border-orange-600 p-[2px] flex justify-center md:-top-24 -top-24 xl:top-0"
                src={userImage || avater}
                alt='user avater'
                height={120}
                width={120}
              />
            )}
            <BasicInfo user={session?.user}></BasicInfo>
    </div>

</div>
  )
}

export default ProfileCard
