'use client'
import Image from 'next/image';
import img1 from '../../../public/assets/images/banner/1.jpg';
import img2 from '../../../public/assets/images/banner/2.jpg';
import img3 from '../../../public/assets/images/banner/3.jpg';
import img4 from '../../../public/assets/images/banner/4.jpg';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Bannar = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
    <Swiper
      spaceBetween={2}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper relative flex justify-center p-6 mb-20 w-[1500px] h-[400px]"
    >
      <SwiperSlide>
        <div className='w-[50%]'>
          here
        </div>
        <Image src={img1} height={600} className='w-[50%]'></Image>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle} className='hidden'>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span  ref={progressContent} className='hidden'></span>
      </div>
    </Swiper>
  </div>
  );
};

export default Bannar;
