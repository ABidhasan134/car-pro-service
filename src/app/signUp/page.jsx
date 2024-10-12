import Image from 'next/image'
import React from 'react'
import logImg from '@/../../public/assets/images/login/login.svg'
import SignUpFrom from '@/components/signUp/signUpFrom'
const page = () => {
  return (
    <div className='m-6 flex justify-between'>
      <Image src={logImg} ></Image>
      <SignUpFrom></SignUpFrom>
    </div>
  )
}

export default page
