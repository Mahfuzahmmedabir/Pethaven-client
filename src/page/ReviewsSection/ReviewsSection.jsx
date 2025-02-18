import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Star } from 'lucide-react';
import reviews from '../../reviews';
const ReviewsSection = () => {

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Adopters Say
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {reviews.map(review => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {review.name}
                </h3>
                <div className="flex justify-center gap-1 my-2 text-yellow-500">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="currentColor"
                      stroke="none"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
