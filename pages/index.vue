<template>
	<div>
		<HeroSlider />
		<HeroContainers />
		<HeroFeatures />
		<HomeWelcomeSection />
		<HomeTreatmentSection />
		<HomeBabiesSection />
	</div>
</template>

<script setup>
import HeroFeatures from "~~/components/Home/HeroFeatures.vue";
import HeroContainers from "~~/components/Home/HeroContainers.vue";
import HeroSlider from "~~/components/Home/HeroSlider.vue";
// import logo from "../assets/logo1.png";

useHead({
	title: "Gynescope Specialist Hospital - Excelling in care",
	meta: [
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{
			hid: "description",
			name: "description",
			content:
				"We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals, with optimal success rates in a congenial."
		},
		{
			hid: "og:type", // open graph type
			property: "og:type",
			content: "website"
		},
		{
			hid: "apple-mobile-web-app-title", // Gynescope Specialist Hospital mobile web app title
			name: "apple-mobile-web-app-title",
			content: "Gynescope Specialist Hospital"
		},
		{
			hid: "og:title", // Gynescope Specialist Hospital title
			property: "og:title",
			content: "Gynescope Specialist Hospital "
		},
		{
			hid: "og:description", // Gynescope Specialist Hospital description
			property: "og:description",
			content:
				"We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals."
		},
		{
			hid: "og:url", // Gynescope Specialist Hospital url
			property: "og:url",
			content: "https://gynescope.com.ng"
		},
		{
			hid: "og:image", // Gynescope Specialist Hospital image
			property: "og:image",
			content:
				"https://d33wubrfki0l68.cloudfront.net/f602ffaa7d56bbd9f27db7a08a0a7068462149e3/143f6/_nuxt/img/f9c805f.png"
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
	},
	components: { HeroSlider, HeroContainers, HeroFeatures }
};
</script>