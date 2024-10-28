import React from 'react'
import logImg from '../../../public/assets/logo.svg';
import Image from 'next/image';
const OnAndOffPay = () => {
  return (
    <section className='w-[92%] py-4 bg-black grid justify-center text-center text-white m-4 rounded-lg'>
      <Image className='p-4 relative left-7' src={logImg}></Image>
      <h1 className='flex text-center py-2'>Pay Online Get 2% bonus</h1>
      <button className='btn btn-outline text-[#FF3811] hover:text-white hover:bg-[#FF3811]'>pay Now</button>
    </section>
  )
}

export default OnAndOffPay
