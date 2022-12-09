<template>
	<swiper
		:autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
		:navigation="true"
		:modules="modules"
		class="mySwiper"
	>
		<swiper-slide v-for="item in slideData" :key="item.heading">
			<div class="relative shadow-xl sm:overflow-hidden h-full w-full">
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
									>{{item.heading}}</h1>
									<p class="mt-6 text-lg leading-8 text-white sm:text-center">{{item.body}}</p>
									<div class="mt-8 flex gap-x-4 justify-center">
										<button
											class="inline-block rounded-xl bg-white px-4 py-1.5 text-base font-semibold leading-7 text-black hover:text-white shadow-sm ring-1 hover:bg-cyan-500"
										>Make An Appointment</button>
									</div>
								</div>
								<!-- <div
									class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
								>
									<svg
										class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
										viewBox="0 0 1155 678"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
											fill-opacity="0.3"
											d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
										/>
										<defs>
											<linearGradient
												id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
												x1="1155.49"
												x2="-78.208"
												y1=".177"
												y2="474.645"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="#9089FC" />
												<stop offset="{1}" stop-color="#FF80B5" />
											</linearGradient>
										</defs>
									</svg>
								</div>-->
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

// import required modules
import { Autoplay, Navigation } from "swiper";

export default {
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {};
	},
	setup() {
		return {
			modules: [Autoplay, Navigation]
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
