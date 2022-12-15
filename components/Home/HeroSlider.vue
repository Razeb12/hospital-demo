<template>
	<swiper
		:autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
   :grabCursor="true"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        origin: 'left center',
        translate: ['-5%', 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: 'right center',
        translate: ['5%', 0, -200],
        rotate: [0, -100, 0],
      },
    }"
		:modules="modules"
		class="mySwiper6"    
	>
  
		<swiper-slide v-for="item in slideData" :key="item.heading">
			<div class="shadow-xl sm:overflow-hidden h-full w-full">
				<div class="absolute inset-0">
					<img
						class="h-full invert-0 w-full object-cover"
						:src="item.bg"
						alt="People working on laptops"
					/>
					<div class="absolute inset-0 bg-gradient-to-l from-sky-600 themeColor mix-blend-multiply" />
				</div>
				<section>
					<div class="relative px-6 lg:px-8">
						<div class="mx-auto inset-y-0 max-w-3xl pt-48 pb-32 sm:pb-40">
							<div>
								<div>
									<h1
										class="text-4xl text-white font-bold tracking-tight sm:text-center sm:text-7xl"
									>{{ item.heading }}</h1>
									<p class="mt-6 text-lg leading-8 text-white sm:text-center">{{ item.body }}</p>
									<div class="mt-8 flex gap-x-4 justify-center">
										<button
											class="inline-block rounded-xl bg-white px-4 py-1.5 text-base font-semibold leading-7 text-black hover:text-white shadow-sm ring-1 hover:bg-cyan-500"
										>
											Make
											An Appointment
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</swiper-slide>
	</swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// import required modules
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";

export default {
	components: {
		Swiper,
		SwiperSlide
	},
	setup() {
		return {
			modules: [Autoplay, Pagination, Navigation, EffectCreative]
		};
	}
};
</script>
<script setup>
import bg from "/slide-01.jpeg";
import bg2 from "/slide-02.jpeg";
import bg3 from "/slide-03.jpeg";
const slideData = [
	{
		heading: "Take Care of Your Health",
		body: "At Medina, we are dedicated to diagnosing all kinds of diseases",
		bg: bg
	},
	{
		heading: "Years of Experience",
		body: "Since our foundation, we've been delivering diagnotic solutions.",
		bg: bg2
	},
	{
		heading: " Qualified Team of Experts",
		body: "Our Team of diagnoticians is always ready to help you be healtheir",
		bg: bg3
	}
];
</script>


