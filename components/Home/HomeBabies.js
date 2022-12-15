import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";
export default function HomeBabies() {
  return (
    <div class="max-w-7xl mx-auto bg-gray-50">
      <h1 class="text-3xl text-center pb-16 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Babies
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Pagination, Autoplay, EffectCoverflow]}>
        <SwiperSlide>
          <img
            class="h-72 object-cover"
            src="https://images.pexels.com/photos/50692/brothers-family-siblings-boys-50692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img class="h-72 object-cover" src="/baby.jpeg" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img class="h-72 object-cover" src="/baby1.jpeg" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            class="h-72 object-cover"
            src="https://images.pexels.com/photos/421884/pexels-photo-421884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="h-72 object-cover"
            src="https://images.pexels.com/photos/1648383/pexels-photo-1648383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="h-72 object-cover"
            src="https://images.pexels.com/photos/3875222/pexels-photo-3875222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
