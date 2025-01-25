'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './team.css';

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import ProfileOfmechanic from './profileOfmechanic';
import useMechanic from '@/Hooks/useMechanic';

const CardTeam = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [mechanics, isLoading, refetch]=useMechanic();
  // console.log("machanics list", mechanics)
  return (
    <>
     <Swiper
  onSwiper={setSwiperRef}
  slidesPerView={3}
  centeredSlides={false}
  spaceBetween={30}
 
  navigation={true}
  modules={[ Navigation]}
  className="swiperX" 
>
  
  {
    mechanics.map((person,index)=>{
     return <SwiperSlide key={index} className="swiper-slideX">
 <ProfileOfmechanic person={person}></ProfileOfmechanic>
</SwiperSlide>
    })
  }
</Swiper>
    </>
  );
};

export default CardTeam;
