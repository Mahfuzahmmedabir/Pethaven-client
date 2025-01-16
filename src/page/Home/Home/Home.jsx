import AboutUs from '../AboutUs/AboutUs';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div className="py-10">
      <SwiperSlider></SwiperSlider>
      <Category></Category>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
