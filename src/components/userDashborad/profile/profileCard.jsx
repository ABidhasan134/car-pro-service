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
    <div class="card__img bg-blue-400"></div>
    <Image className='card__img_bg opacity-30 w-[1350px] h-[450px] rounded-lg'  src={userBg}></Image>
    <div class="card__avatar bg-red-500 left-[400px] top-[390px]">
      {status === "loading" ? (
              <div className="animate-pulse w-10 h-10 rounded-full " />
            ) : (
              <Image
                className="rounded-full border-2 border-orange-600 p-[2px]"
                src={userImage}
                height={200}
                width={200}
                alt={`${userName}'s avatar`}
              />
            )}
    </div>
    <div className='relative flex justify-between mt-20 gap-6 w-2/3'>
    <BasicInfo user={session?.user}></BasicInfo>
            ganta
    </div>

</div>
  )
}

export default ProfileCard
