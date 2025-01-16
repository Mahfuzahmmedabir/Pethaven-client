import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Banner from '../Home/Home/Banner/Banner';
const SwiperSlider = () => {
  return (
    <div>
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
          <div className=" bg-cover bg-center bg-pet-haven1 h-[600px]">
            <div className="py-11 flex items-center justify-center">
              <h2 className="text-white text-9xl">imgss</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-cover bg-center bg-pet-haven2 h-[600px]">
            <div className="py-11 flex items-center justify-center">
              <h2 className="text-white text-9xl">imgss</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-cover bg-center bg-pet-haven3 h-[600px]">
            <div className="py-11 flex items-center justify-center">
              <h2 className="text-white text-9xl">imgss</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className=" bg-cover bg-center bg-pet-haven4 h-[600px]">
            <div className="py-11 flex items-center justify-center">
              <h2 className="text-white text-9xl">imgss</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
