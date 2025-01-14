import Image from 'next/image'
import React from 'react'
import bannarImg from "@/../../public/assets/images/services/bannar/bannar.jpg"
const BannarService = () => {
  return (
    <figure className='flex justify-center '>
        <Image src={bannarImg} className='w-[1500px] h-[650px] rounded-xl'></Image>
    </figure>
  )
}

export default BannarService
