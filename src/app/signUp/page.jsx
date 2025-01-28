import Image from 'next/image'
import React from 'react'
import logImg from '@/../../public/assets/images/login/login.svg'
import SignUpFrom from '@/components/signUp/signUpFrom'
const page = () => {
  return (
    <div className='m-6 flex justify-between w-full container mx-auto sm:min-h-[500px] min-h-[700px]' >
      <Image src={logImg} alt='log Image' ></Image>
      <SignUpFrom ></SignUpFrom>
    </div>
  )
}

export default page
