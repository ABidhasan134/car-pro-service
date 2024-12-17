import Image from 'next/image'
import React from 'react'
import logImg from '@/../../public/assets/images/login/login.svg'
import LogInFrom from '@/components/log/logInFrom'
const page = () => {
  return (
    <div className='flex justify-center px-32 container mx-auto'>
      <Image src={logImg} ></Image>
      <LogInFrom ></LogInFrom>
    </div>
  )
}

export default page
