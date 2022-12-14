<template>
  <div class="max-w-7xl mx-auto bg-gray-50">
    <h1 class="text-3xl text-center pb-16 font-bold tracking-tight text-gray-900 sm:text-4xl">Our Babies</h1>

    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'3'" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :coverflowEffect="{
  rotate: 25,
  slideShadows: false,
}" :pagination="true" :modules="modules">
      <swiper-slide>
        <img class="h-72 object-cover"
          src="https://images.pexels.com/photos/50692/brothers-family-siblings-boys-50692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </swiper-slide>
      <swiper-slide>
        <img class="h-72 object-cover" src="/baby.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="h-72 object-cover" src="/baby1.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img class="h-72 object-cover"
          src="https://images.pexels.com/photos/421884/pexels-photo-421884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </swiper-slide>
      <swiper-slide>
        <img class="h-72 object-cover"
          src="https://images.pexels.com/photos/1648383/pexels-photo-1648383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </swiper-slide>
      <swiper-slide>
        <img class="h-72 object-cover"
          src="https://images.pexels.com/photos/3875222/pexels-photo-3875222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay]
    };
  }
};
</script>
