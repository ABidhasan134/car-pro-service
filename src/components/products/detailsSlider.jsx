'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './style.css'

const DetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // console.log(id);
  return (
    <div className='min-h-[600px] m-4'>
      {/* Main Swiper */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} // Ensure valid thumbsSwiper
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 "
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
              alt={`Nature ${index + 1}`}
              className='rounded-xl mb-1'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper} // Initialize thumbsSwiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <img className='h-[50px] w-[50px]'
              src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
              alt={`Nature ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetailsSlider;
