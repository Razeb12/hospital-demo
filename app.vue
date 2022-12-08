<template>
	<div class="flex max-w-2xl mx-auto min-h-full flex-col bg-white pt-16 pb-12">
		<main
			class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8"
		>
			<div class="flex flex-shrink-0 justify-center">
				<a href="/" class="inline-flex">
					<span class="sr-only">Your Company</span>
					<img class="h-24  w-auto" :src="logo" alt />
				</a>
			</div>
			<div class="py-16">
				<div class="text-center">
					<!-- <p class="text-base font-semibold text-indigo-600">404</p> -->
					<h1 class="mt-2 text-5xl font-bold tracking-tight text-[#4DA9EA] sm:text-5xl">{{header}}</h1>
					<p class="mt-2 text-base text-gray-800">{{text}}</p>
				</div>
			</div>
		</main>
		<footer class="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
			<nav class="flex flex-col lg:flex-row justify-center lg:space-x-4">
				<a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
				<span class="inline-block border-l border-gray-300" aria-hidden="true" />
				<a href="tel:+2348166593030"  class="text-sm font-medium text-[#4DA9EA] hover:text-gray-600">{{phone}}</a>
				<span class="inline-block border-l border-gray-300" aria-hidden="true" />
				<a href="mailto:info@gynescope.com" class="text-sm font-medium text-[#4DA9EA] hover:text-gray-600">{{email}}</a>
			</nav>
		</footer>
	</div>
</template>

<script setup>
import logo from "./assets/logo1.png";

useHead({
	title: "Gynescope Specialist Hospital",
	meta: [
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{
			hid: "description",
			name: "description",
			content:
				"We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals, with optimal success rates in a congenial."
		}
	],
	link: [{ rel: "icon", type: "img/x-icon", href: "/favicon.ico" }]
});
</script>
<script >
export default {
	data() {
		return {
			header: "Scheduled Maintenance",
			text:
				"We apologize for the inconvenience, but our website is currently undergoing scheduled maintenance. We should be back online shortly. Thank you for your patience.",
			phone: "+2348166593030",
			email: "info@gynescope.com"
		};
	}
};
</script>