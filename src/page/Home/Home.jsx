import React, { useContext } from 'react';
import Banner from './Home/Banner/Banner';
import AboutUs from './Home/AboutUs/AboutUs';
import SwiperSlider from '../SwiperSlider/SwiperSlider';

const Home = () => {
  return (
    <div className="py-10">
      <SwiperSlider></SwiperSlider>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
