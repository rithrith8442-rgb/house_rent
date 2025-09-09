import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slidebar() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full h-[250px] md:h-[400px] lg:h-[500px] bg-cyan-950'>
                <div className='w-full h-full'>
                    <img src="public/house/house1.png" alt="" className='w-full h-full object-contain' />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[250px] md:h-[400px] lg:h-[500px] bg-cyan-950'>
                <div className='w-full h-full'>
                    <img src="public/house/house1.png" alt="" className='w-full h-full object-contain' />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
