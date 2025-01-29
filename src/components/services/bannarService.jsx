import Image from 'next/image'
import React from 'react'
import bannarImg from "@/../../public/assets/images/services/bannar/bannar.jpg"
const BannarService = () => {
  return (
    <figure className='flex justify-center '>
        <Image src={bannarImg} alt='bannar' className='lg:w-[1500px] lg:h-[650px] md:w-[1100px] md:h-[450px] w-[720px] h-[350px] rounded-xl'></Image>
    </figure>
  )
}

export default BannarService
