// import React, { useRef, useState } from 'react';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../styles/components/pages/HomePage.css';

// if you want to use array
const Home = (props) => {
  return (
    <div className='container'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        //modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"

        
      >
        <SwiperSlide className="swiper-slide">
          <img src="front/images/home/carrusel_raices.png" alt="raíces"/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="front/images/home/carrusel_vida.png" alt="vida" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="front/images/home/carrusel_obra.png" alt="obra" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Home;
