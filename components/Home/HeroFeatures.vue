<template>
	<div class="relative bg-white py-24 sm:py-32 lg:py-20">
		<div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
			<!-- <h2 class="text-lg font-semibold text-indigo-600">Deploy faster</h2> -->
			<p class="mt-2 text-3xl font-bold themeText sm:text-4xl">What To Expect</p>
			<p
				class="mx-auto mt-5 max-w-prose text-xl text-gray-500"
			>At Gynescope Specialist Hospital all patients are treated with respect and comprehensive care and up-to-date fertility treatments and options</p>
			<div class="mt-20">
				<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
					<div v-for="feature in features" :key="feature.name" class="pt-6">
						<div class="flow-root rounded-lg bg-white shadow-xl px-6 pb-8">
							<div class="-mt-6">
								<div>
									<span class="inline-flex items-center justify-center rounded-xl p-3 shadow-lg">
										<!-- <component :is="feature.icon" class="h-8 w-8 text-white" aria-hidden="true" /> -->
										<img :src="feature.icon" />
									</span>
								</div>
								<h3
									class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900"
								>{{ feature.heading }}</h3>
								<p class="mt-5 text-base leading-7 text-gray-600">{{ feature.body}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	CogIcon,
	LockClosedIcon,
	ServerIcon,
	ShieldCheckIcon
} from "@heroicons/vue/24/outline";
import icon from "/icon.png";
import icon1 from "/icons1.png";
const features = [
	{
		heading: "Qualified Doctors",
		icon: icon,
		body:
			"We have a team of world-class medical personnel with a long track record of delivering excellent pregnancy and success rates in a most friendly environment."
	},
	{
		heading: "Latest Technologies",
		icon: icon1,
		body:
			"We explore the latest medical technologies in our state-of-the-art facility within our laboratory, exam rooms, consultation rooms, and theaters to improve our clinical outcome, delivering outstanding results."
	},
	{
		heading: "Fertility Services",
		icon: icon,
		body:
			"We have patient-friendly IVF and a plethora of fertility treatments with reduced stress and cost. We understand how challenging infertility is to you emotionally, medically and financially, and leverage our expertise to assist you in your fertility journey."
	},
	{
		heading: "24/7 Services",
		icon: icon,
		body:
			"We are available 24-hours a day, seven days a week. Appointments are scheduled from Mondays to Saturdays. Sunday appointments are on special request."
	}
];
</script>