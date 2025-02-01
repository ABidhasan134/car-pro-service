'use client'
import React from 'react'
import './profile.css'
import Image from 'next/image'
import userBg from '../../../../public/assets/images/userDash/bgUser1.jpg'
import { useSession } from 'next-auth/react'
import BasicInfo from './basicInfo'

const ProfileCard = () => {
  const { data: session, status } = useSession();
  const userImage = session?.user?.image 
  const userName = session?.user?.name || "Guest";


  return (
<div class="card">
    <Image className='opacity-30 relative md:-top-32 xl:top-0 w-[1350px] -top-36 h-[450px] rounded-lg'  src={userBg}></Image>
    <div class="absolute grid justify-center text-center w-[80%] h-auto ">
      {status === "loading" ? (
              <div className="animate-pulse w-10 h-10 rounded-full " />
            ) : (
              <Image
                className="relative left-20 rounded-full border-2 border-orange-600 p-[2px] flex justify-center md:-top-24 -top-24 xl:top-0"
                src={userImage}
                height={120}
                width={120}
                alt={`${userName}'s avatar`}
              />
            )}
            <BasicInfo user={session?.user}></BasicInfo>
    </div>

</div>
  )
}

export default ProfileCard
