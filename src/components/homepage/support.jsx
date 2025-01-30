import React from 'react'
import location from '@/../../public/assets/icons/home/location.gif'
import Image from 'next/image';
import phone from '@/../../public/assets/icons/home/phone.gif'
import calender from '@/../../public/assets/icons/home/calender.gif'
const Sapport = () => {
  return (
    <section className='border-2 border-red-500 mt-10 relative md:w-[95%] md:left-4 left-0 w-full flex justify-evenly rounded-2xl p-1 mb-20 bg-[#CBD5E1] mx-0'>
        {/* calender */}
        <div className='flex items-center'>
        <Image src={calender} alt='calender' className='lg:h-[70px] lg:w-[55px] md:h-[40px] md:w-[40px] w-[60px] h-[60px] '></Image>      
        <div className='grid items-center'>
            <p>we are open monday-friday</p>
            <h1 className=' md:text-xl lg:text-xl'>9.00 AM - 8.00 PM
            </h1>
        </div>
        <div>

        </div>
        </div>
        {/* phone */}
        <div className='flex items-center'>
        <Image src={phone} alt='phone'className='relative lg:h-[120px] lg:w-[100px] md:h-[80px] md:w-[80px] w-[100px] h-[80px]'></Image>      
        <div className='grid items-center relative md:left-0 -left-6'>
            <p>Have a question?</p>
            <h1 className=' md:text-xl lg:text-xl'>01234567890
            </h1>
        </div>
        <div>

        </div>
        </div>
        {/* location */}
        <div className='flex items-center'>
        <Image src={location} alt='location' className='relative lg:h-[100px] lg:w-[90px] md:h-[80px] md:w-[80px] w-[100px] h-[80px]' ></Image>      
        <div className='grid items-center relative md:left-0 -left-6'>
        <p>Need a repair? our address</p>
            <h1 className=' md:text-xl lg:text-xl flex whitespace-normal text-wrap'>Mohammadpur, Dhaka
            </h1>
        </div>
        <div>

        </div>
        </div>
        
        
    </section>
  )
}

export default Sapport
