import AboutUs from '../AboutUs/AboutUs';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import Category from '../Category/Category';
import { Helmet } from 'react-helmet-async';
import FeaturedPets from '../../FeaturedPets/FeaturedPets';
import CTASection from '../../CTASection/CTASection';
import ReviewsSection from '../../ReviewsSection/ReviewsSection';

const Home = () => {
  return (
    <div className="">
      <Helmet>
              <title>
                Pet-haven || Home
              </title>
            </Helmet>
      <SwiperSlider></SwiperSlider>
      <Category></Category>
      <AboutUs></AboutUs>
      <FeaturedPets></FeaturedPets>
      <CTASection></CTASection>
      <ReviewsSection></ReviewsSection>
    </div>
  );
};

export default Home;
