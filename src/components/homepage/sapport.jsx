import React from 'react'
import location from '@/../../public/assets/icons/home/location.gif'
import Image from 'next/image';
import phone from '@/../../public/assets/icons/home/phone.gif'
import calender from '@/../../public/assets/icons/home/calender.gif'
const Sapport = () => {
  return (
    <section className='mt-10 relative flex justify-evenly rounded-2xl p-6 mb-20 bg-[#CBD5E1]'>
        {/* calender */}
        <div className='flex items-center'>
        <Image src={calender} height={200} width={100}></Image>      
        <div className='grid items-center'>
            <p>we are open monday-friday</p>
            <h1 className='text-3xl'>9.00 AM - 8.00 PM
            </h1>
        </div>
        <div>

        </div>
        </div>
        {/* phone */}
        <div className='flex items-center'>
        <Image src={phone} height={200} width={120} className='relative left-4'></Image>      
        <div className='grid items-center'>
            <p>Have a question?</p>
            <h1 className='text-3xl'>01234567890
            </h1>
        </div>
        <div>

        </div>
        </div>
        {/* location */}
        <div className='flex items-center'>
        <Image src={location} height={200} width={100}></Image>      
        <div className='grid items-center'>
        <p>Need a repair? our address</p>
            <h1 className='text-3xl'>Mohammadpur,Dhaka
            </h1>
        </div>
        <div>

        </div>
        </div>
        
        
    </section>
  )
}

export default Sapport
