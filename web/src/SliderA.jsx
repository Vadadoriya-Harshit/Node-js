import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SliderA() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
            // When window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // When window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 5,
            },
          }}
      >
        <SwiperSlide> <img src="img/vendor-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="img/vendor-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="img/vendor-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="img/vendor-4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="img/vendor-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="img/vendor-6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="img/vendor-7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="img/vendor-8.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}