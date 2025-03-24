import React from 'react'
import parts from '@/../../public/assets/images/about_us/parts.jpg'
import person from '@/../../public/assets/images/about_us/person.jpg'
import Image from 'next/image'
const AboutSection = () => {
  return (
    <section className='relative flex justify-center p-6 mb-20 w-full'>
      <div className='w-[50%] mx-1'>
        <Image className='relative z-10 lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] h-[200px] w-[180px]' src={person} alt='parts img' ></Image>
        <Image  className='absolute z-20 lg:top-60 md:top-52 top-36 left-32 lg:left-48 md:left-40  border-[8px] border-white lg:h-[250px] lg:w-[300px] md:h-[200px] md:w-[200px] h-[80px] w-[80px]' src={parts} alt='parts img'></Image>
      </div>
      <div className='w-[50%]'>
        <h1 className='lg:text-3xl md:text-2xl text-xl text-[#e76637]'>About us</h1>
        <h6 className='lg:text-5xl md:text-3xl text-2xl font-semibold max-w-[400px]'>We are qualified & of experience in this field</h6>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        <button className='btn btn-outline btn-error mt-6'>Know more</button>
      </div>
    </section>
  )
}

export default AboutSection
