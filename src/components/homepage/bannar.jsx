'use client'
import Image from 'next/image';
import img3 from '../../../public/assets/images/banner/6.jpg';
import img2 from '../../../public/assets/images/banner/5.jpg';
import img1 from '../../../public/assets/images/banner/new2.jpg';
import img4 from '../../../public/assets/images/banner/new1.jpg';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

const Bannar = () => {

  useEffect(() => {
    axios('/data.json')
      .then((res) => {
        console.log("bannar components",res.data);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div >
    <Swiper
      spaceBetween={2}
      centeredSlides={true}
      autoplay={{
        delay: 30000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper m-0 py-0 px-6 relative flex justify-center bg-[#F3F4F6] w-[1500px] h-[600px]"
    >
      {/* 1st slider */}
      <SwiperSlide className='bg-[#F3F4F6] m-0 p-0 '>
        <div className='w-[50%] '>
          here
        </div>
        <Image src={img1}  className='w-[90%] h-[600px] rounded-lg'></Image>
      </SwiperSlide>
      {/* 2st slider */}
      <SwiperSlide className='bg-[#F3F4F6] m-0 p-0'>
        <div className='w-[50%] '>
          here
        </div>
        <Image src={img2}  className='w-[90%] h-[600px] rounded-lg'></Image>
      </SwiperSlide>
      {/* 3rd slider */}
      <SwiperSlide className='bg-[#F3F4F6] m-0 p-0'>
        <div className='w-[50%] '>
          here
        </div>
        <Image src={img3}  className='w-[90%] h-[600px] rounded-lg'></Image>
      </SwiperSlide>
      {/* 4th slider */}
      <SwiperSlide className='bg-[#F3F4F6] m-0 p-0'>
        <div className='w-[50%] '>
          here
        </div>
        <Image src={img4}  className='w-[90%] h-[600px] rounded-lg'></Image>
      </SwiperSlide>

      <div className="autoplay-progress" slot="container-end">
        <svg ref={progressCircle} className='hidden'>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span  ref={progressContent} className='hidden'></span>
      </div>
    </Swiper>
  </div>
  );
};

export default Bannar;
