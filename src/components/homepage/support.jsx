import React from 'react'
import location from '@/../../public/assets/icons/home/location.gif'
import Image from 'next/image';
import phone from '@/../../public/assets/icons/home/phone.gif'
import calender from '@/../../public/assets/icons/home/calender.gif'
const Sapport = () => {
  return (
    <section className='mt-10 relative flex justify-evenly rounded-2xl p-6 mb-20 bg-[#CBD5E1] mx-4'>
        {/* calender */}
        <div className='flex items-center'>
        <Image src={calender} alt='calender' className='lg:h-[80px] lg:w-[60px] md:h-[40px] md:w-[40px] w-[60px] h-[60px] '></Image>      
        <div className='grid items-center'>
            <p>we are open monday-friday</p>
            <h1 className=' md:text-xl lg:text-2xl'>9.00 AM - 8.00 PM
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
            <h1 className=' md:text-xl lg:text-2xl'>01234567890
            </h1>
        </div>
        <div>

        </div>
        </div>
        {/* location */}
        <div className='flex items-center'>
        <Image src={location} alt='location' className='relative lg:h-[120px] lg:w-[100px] md:h-[80px] md:w-[80px] w-[100px] h-[80px]' ></Image>      
        <div className='grid items-center relative md:left-0 -left-6'>
        <p>Need a repair? our address</p>
            <h1 className=' md:text-xl lg:text-2xl'>Mohammadpur,Dhaka
            </h1>
        </div>
        <div>

        </div>
        </div>
        
        
    </section>
  )
}

export default Sapport
