<template>
	<div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
		<div class="absolute inset-0">
			<div class="h-1/3 bg-white sm:h-2/3" />
		</div>
		<div class="relative mx-auto max-w-7xl">
			<div class="text-center">
				<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Treatments</h1>
				<p
					class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"
				>At Gynescope Special Hospital We help you maximize your time at your Consultation in our Various Departments.</p>
			</div>
			<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
				<div
					v-for="post in posts"
					:key="post.title"
					class="flex flex-col overflow-hidden rounded-lg shadow-lg"
				>
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" :src="post.imageUrl" alt />
					</div>
					<div class="flex flex-1 flex-col justify-between bg-white p-6">
						<div class="flex-1">
							<!-- <p class="text-sm font-medium text-indigo-600">
								<a :href="post.category.href" class="hover:underline">{{ post.category.name }}</a>
							</p>-->
							<a :href="post.href" class="mt-2 block">
								<p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
								<p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
							</a>
						</div>
						<div class="mt-6 flex items-center">
							<div class="mt-8 flex gap-x-4 justify-center">
								<button
									class="inline-block rounded-xl themeColor px-4 py-1.5 text-base font-semibold leading-7 text-white hover:text-white shadow-sm ring-1 hover:bg-cyan-500"
								>View Details</button>
							</div>
							<!-- <div class="flex-shrink-0">
								<a :href="post.author.href">
									<span class="sr-only">{{ post.author.name }}</span>
									<img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt />
								</a>
							</div>-->
							<!-- <div class="ml-3">
								<p class="text-sm font-medium text-gray-900">
									<a :href="post.author.href" class="hover:underline">{{ post.author.name }}</a>
								</p>
								<div class="flex space-x-1 text-sm text-gray-500">
									<time :datetime="post.datetime">{{ post.date }}</time>
									<span aria-hidden="true">&middot;</span>
									<span>{{ post.readingTime }} read</span>
								</div>
							</div>-->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const posts = [
	{
		title: "In Vitro Fertilization /IVF",
		href: "#",
		category: { name: "Article", href: "#" },
		description:
			"With the advancement of modern science in the last few decades, assisted...",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		imageUrl:
			"https://images.pexels.com/photos/11730899/pexels-photo-11730899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		readingTime: "6 min",
		author: {
			name: "Roel Aufderehar",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		}
	},
	{
		title: "Intracytoplasmic Sperm Injection",
		href: "#",
		category: { name: "Video", href: "#" },
		description:
			"The process of ICSI revolutionized the treatment of male infertility. For a...",
		date: "Mar 10, 2020",
		datetime: "2020-03-10",
		imageUrl:
			"http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2020/05/Intracytoplasmic-550x550.jpg",
		readingTime: "4 min",
		author: {
			name: "Brenna Goyette",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		}
	},
	{
		title: "Hysteroscopic Surgery",
		href: "#",
		category: { name: "Case Study", href: "#" },
		description:
			"Hysteroscopy is a procedure by which a hysteroscope is placed through the...",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		imageUrl:
			"https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		readingTime: "11 min",
		author: {
			name: "Daniela Metz",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		}
	},
	{
		title: "Laparoscopic Surgery",
		href: "#",
		category: { name: "Case Study", href: "#" },
		description:
			"Laparoscopy is performed under general anesthesia with minimal discomfort. It is a...",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		imageUrl:
			"http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2019/04/Laparoscopic-Surgery-Room-550x550.jpg",
		readingTime: "11 min",
		author: {
			name: "Daniela Metz",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		}
	},
	{
		title: "Fertility Preservation",
		href: "#",
		category: { name: "Case Study", href: "#" },
		description:
			"Egg freezing, sperm freezing, and embryo freezing are all methods of fertility...",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		imageUrl:
			"http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2019/04/Laparoscopic-Surgery-Room-550x550.jpg",
		readingTime: "11 min",
		author: {
			name: "Daniela Metz",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		}
	},
	{
		title: "Gestational Surrogacy",
		href: "#",
		category: { name: "Case Study", href: "#" },
		description:
			"Gestational surrogacy refers to a treatment process in which another woman (gestational..",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		imageUrl:
			"http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2019/04/Laparoscopic-Surgery-Room-550x550.jpg",
		readingTime: "11 min",
		author: {
			name: "Daniela Metz",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		}
	}
];
</script>