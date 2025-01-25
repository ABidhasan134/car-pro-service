import React from 'react'
import parts from '@/../../public/assets/images/about_us/parts.jpg'
import person from '@/../../public/assets/images/about_us/person.jpg'
import Image from 'next/image'
const AboutSection = () => {
  return (
    <section className='relative flex justify-center p-6 mb-20'>
      <div className='w-[50%]'>
        <Image className='relative z-10' src={person} width={600} height={600}></Image>
        <Image  className='absolute z-20 top-60 left-80  border-[8px] border-white' src={parts} width={350} height={350}></Image>
      </div>
      <div className='w-[50%]'>
        <h1 className='text-3xl text-[#e76637]'>About us</h1>
        <h6 className='text-5xl font-semibold max-w-[400px]'>We are qualified & of experience in this field</h6>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        <button className='btn btn-outline btn-error mt-6'>Know more</button>
      </div>
    </section>
  )
}

export default AboutSection
