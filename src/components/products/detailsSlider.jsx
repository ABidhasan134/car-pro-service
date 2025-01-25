'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './style.css';
import useOneProduct from '@/Hooks/useOneProduct';
import Image from 'next/image';

const DetailsSlider = ({ id }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [oneProduct, isLoading, refetch] = useOneProduct(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const images = oneProduct?.image;

  return (
    <div className="min-h-[600px] m-4">
      {/* Main Swiper */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {Array.isArray(images) && images.length > 0 ? (
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={`Product ${index + 1}`}
                className="rounded-xl mb-1"
              />
            </SwiperSlide>
          ))
        ) : (
          // Fallback to placeholder images
          [...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <img
                src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
                alt={`Placeholder ${index + 1}`}
                className="rounded-xl mb-1"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {Array.isArray(images) && images.length > 0 ? (
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={`Thumbnail ${index + 1}`}
                className="h-[50px] w-[50px]"
              />
            </SwiperSlide>
          ))
        ) : (
          [...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <Image height={200} width={200}
                src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
                alt={`Thumbnail Placeholder ${index + 1}`}
                className="h-[50px] w-[50px]"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default DetailsSlider;
