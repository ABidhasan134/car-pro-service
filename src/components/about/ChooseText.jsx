import Link from 'next/link';
import React from 'react';
import { TbCheckbox } from "react-icons/tb";


const ChooseText = () => {
  return (
    <div className='w-full lg:w-1/2 m-4 p-4'>
      <h1 className='w-full lg:text-4xl text-xl  text-[#FF3811] font-semibold mb-4'>
        Why people choose us ?
      </h1>
      <p className='opacity-50 my-2 text-sm md:text-base'>
      Our skilled professionals ensure top-quality service for your vehicle. Get reliable repairs without breaking the bank. We value your time and ensure prompt service delivery. Your trust drives us to provide exceptional care and support.
      </p>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#FF3811]' /> Expert Mechanics
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#FF3811]' /> Affordable Pricing
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#FF3811]' /> Fast Turnaround
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#FF3811]' /> Modern Tools & Techniques
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#FF3811]' /> Customer Satisfaction
        </li>
        <li className='flex items-center gap-1 text-lg md:text-2xl'>
          <TbCheckbox className='text-[#FF3811]' /> customization
        </li>
      </ul>
      <p className='my-3 text-sm md:text-base'>
        Ask Any Question: <span className='text-xl text-[#7555FD]'><Link href="/contact">Contact Us</Link></span>
      </p>
    </div>
  );
};

export default ChooseText;
