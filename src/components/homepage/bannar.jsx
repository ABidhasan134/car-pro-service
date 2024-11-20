"use client";
import Image from "next/image";
import img3 from "../../../public/assets/images/banner/6.jpg";
import img2 from "../../../public/assets/images/banner/5.jpg";
import img1 from "../../../public/assets/images/banner/new2.jpg";
import img4 from "../../../public/assets/images/banner/new1.jpg";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useBannar from "@/Hooks/useBannar";
import CustomBtn from "../shared/customBtn";
import BoxReveal from "../ui/box-reveal";

const Bannar = () => {
  const [bannarList, isLoading, refetch] = useBannar();
  const ispanding=true
  const bannarImage = [img1, img2, img3, img4];
  console.log("this is bannar data", bannarList);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  if (isLoading) {
    refetch()
    return <div
    class="flex bg-neutral-300 w-[100%] h-72 animate-pulse rounded-xl p-4 gap-4"
  >
    <div class="grid w-[49%] items-center">
      <div class="bg-neutral-400/50 w-full p-0 m-0 h-8 animate-pulse rounded-md"></div>
      <div class="bg-neutral-400/50 w-4/5 p-0 m-0 h-4 animate-pulse rounded-md"></div>
      <div class="bg-neutral-400/50 w-full p-0 m-0 h-4 animate-pulse rounded-md"></div>
      <div class="bg-neutral-400/50 w-[100px] p-0 m-0 h-12 animate-pulse rounded-md"></div>
    </div>
    <div class="w-[50%] bg-neutral-400/50 h-64 animate-pulse rounded-md"></div>
  </div>
  ;}
  if (!bannarList.length) return <div>No banners available</div>;

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
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper m-0 py-0 px-6 relative flex justify-center bg-[#F3F4F6] w-[1500px] h-[600px]"
      >
        {/* 1st slider */}
        {bannarList.map((bannar, index) => {
          return (
            <SwiperSlide key={index} className="bg-[#F3F4F6] m-0 p-0 ">
              <div className="w-[50%] grid justify-center text-start">
                <BoxReveal>
                  <h1 className="text-3xl font-semibold w-[300px]">
                    {bannar.title}
                  </h1>
                  </BoxReveal>
                  <BoxReveal>
                  <h6 className="text-xl">{bannar.offer}</h6>
                  </BoxReveal>

                <CustomBtn title="Get Offer" color="e76637"></CustomBtn>
              </div>
              <Image
                src={bannarImage[index]}
                alt={bannar.image}
                className="w-[90%] h-[600px] rounded-lg"
              ></Image>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg ref={progressCircle} className="hidden">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className="hidden"></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Bannar;
