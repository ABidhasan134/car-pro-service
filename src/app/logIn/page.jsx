import Image from 'next/image'
import React from 'react'
import logImg from '@/../../public/assets/images/login/login.svg'
import LogInFrom from '@/components/log/logInFrom'
const page = () => {
  return (
    <div className='flex justify-center px-32 container mx-auto md:min-h-[400px] '>
      <Image src={logImg} alt='logIn' className='relative lg:left-0 mt-20 h-[550px] w-[700px]'></Image>
      <LogInFrom ></LogInFrom>
    </div>
  )
}

export default page
