<template>
  <div class="bg-gray-50">
    <div class="relative h-64 bg-sky-800">
      <div class="absolute inset-0">
        <img class="h-full w-full object-cover" src="https://babymigo.com/public/uploads/Wojre0qDCtJ4_resized.png"
          alt />
        <div class="absolute inset-0 bg-sky-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-18 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
        <p class="mt-6 max-w-3xl text-xl text-indigo-100">Get to know us.</p>
      </div>
    </div>
    <div class="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <dl class="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name">
            <dt>
              <div class="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-sky-500 text-white">
                <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
              </div>
              <p class="mt-6 text-2xl lg:text-4xl text-center font-bold leading-8 tracking-tight text-gray-900">{{
                  feature.name
              }}</p>
            </dt>
            <dd class="mt-2 text-center text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
    <!-- <section class="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
			<h1 class="text-4xl text-center font-bold tracking-tight themeText sm:text-5xl lg:text-6xl">Enhancing Health. Excelling in care.</h1>
		</section>-->
    <section class="relative bg-sky-900">
      <div class="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div class="h-full w-full xl:grid xl:grid-cols-2">
          <div class="h-full xl:relative xl:col-start-2">
            <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://media.timbu.com/poi/600/gyn4.jpg-600-5736040ee7b17.jpg?w=300?w=300"
              alt="People working on laptops" />
            <div aria-hidden="true"
              class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
          </div>
        </div>
      </div>
      <div
        class="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <p class="mt-3 text-3xl font-bold tracking-tight text-white">Enhancing Health. Excelling in care.</p>
          <p class="mt-5 text-lg text-gray-300">All of our doctors, nurses and embryologists are very highly trained in
            the field of assisted reproduction. This ensures that we will always offer you the most cutting edge
            treatments and the highest standard of care. Our practice is based on medical and scientific expertise,
            which continually informs our methods.</p>
          <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-1">
            <p v-for="item in metrics" :key="item.id">
              <!-- <span class="block text-2xl font-bold text-white">{{ item.stat }}</span> -->
              <CheckIcon class="absolute mt-1 h-6 w-6 text-green-500" aria-hidden="true" />
              <span class="mt-1 mx-8 block text-lg text-gray-200">
                <span class="font-black text-white">{{ item.emphasis }}</span>
                {{ item.rest }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Next Section -->
    <div class="py-20 bg-gray-50"></div>

    <section class="relative bg-gray-50">
      <h2 class="text-4xl text-center z-20 mb-20 themeText relative -mt-12 font-black tracking-tight sm:text-6xl">Our
        Story</h2>
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:mt-24 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-contain lg:absolute lg:h-full"
            src="https://babymigo.com/public/uploads/Wojre0qDCtJ4_resized.png" alt />
        </div>
      </div>
      <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-8">
        <div class="lg:pr-8">
          <div class="mx-auto max-w-md sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl font-black tracking-tight sm:text-5xl">Who We Are</h2>
            <p class="mt-4 text-lg text-gray-500 sm:mt-3">Gynescope Specialist Hospital commenced operations on the 1st
              of April, 2010. It was like the proverbial mustard seed which has grown and blossomed over a relative
              short space of time. It is a centre born out of the desire to put smiles on the faces of infertile couples
              while not constituting a huge financial burden on them. Within a space of six years, over 1,189 babies
              have been delivered following IVF/ICSI treatment at Gynescope and by the grace of God it has remained one
              of the fastest growing IVF/ICSI centres in Nigeria. The centre is accredited to also carry out Minimal
              Access Surgery which some people call “pin hole” surgeries, such as Laparoscopy and Hysteroscopy. Through
              these procedures, fibroids; ovarian cysts; adhesion removal and many other advanced procedures can be
              carried out, obviating the need for unsightly scars, while being able to discharge the patient within 24
              hours of surgery.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-50 pt-16 lg:py-24">
      <div class="bg-sky-600 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div class="relative lg:-my-8">
            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div
                class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img class="object-cover lg:h-full lg:w-full"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEXj8uH2sVBtA/profile-displayphoto-shrink_800_800/0/1658778564317?e=2147483647&v=beta&t=Wa8Dyfvoa8Pqx1To6J1kQpXMsrCJn2k2fGmcECEUI8M"
                  alt="" />
              </div>
            </div>
          </div>
          <div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="mt-6 text-base font-medium text-white">Jude Okohue is a Professor of obstetrics and
                    gynaecology. He is currently the Vice President of the Association of
                    Gynaecological Endoscopy Surgeons (AGES) Nigerial and Board member, American Association of
                    Gynecologic Laparoscopists
                    (AAGL) Hysteroscopy SIG. Prof. Okohue has been invited as faculty at numerous international
                    conferences and workshops.</p>
                </div>
                <footer class="mt-6">
                  <p class="text-base font-medium text-white">Prof. Jude Okohue</p>
                  <p class="text-base font-medium text-indigo-100">CEO at Gynescope Specialist Hospital</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-50  mx-auto max-w-6xl px-4 lg:px-8">
      <h2 class="text-4xl text-center z-20 mb-20 themeText relative mt-12 font-black tracking-tight sm:text-6xl">Our
        Statistics</h2>
      <p class="-mt-12 max-w-3xl lg:-mt-12 text-center mx-auto text-xl text-black">At Gynescope Specialist Hospital, we
        have exceptionally high pregnancy success rates. Below is the approximate 2016/17 clinical pregnancy rates (%)
        per fresh embryo transfer. (Jan 2016 – April 2017)</p>
      <div class="mt-10 bg-sky-600 pb-12 sm:pb-16">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-50" />
          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl">
              <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-5">
                <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt class="order-1 mt-2 text-xl mb-4 font-medium leading-6 text-black">Ages 0 - 35 </dt>
                  <dd class="order-2 text-3xl font-bold tracking-tight text-sky-500">68%</dd>
                </div>
                <div
                  class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-1 mt-2 text-xl mb-4 font-medium leading-6 text-black">Ages 35 - 37</dt>
                  <dd class="order-2 text-3xl font-bold tracking-tight text-sky-500">62%</dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-1 mt-2 text-xl mb-4 font-medium leading-6 text-black">Ages 38 - 40</dt>
                  <dd class="order-2 text-3xl font-bold tracking-tight text-sky-500">65%</dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-1 mt-2 text-xl mb-4 font-medium leading-6 text-black">Ages 41 - 42</dt>
                  <dd class="order-2 text-3xl font-bold tracking-tight text-sky-500">47%</dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-1 mt-2 text-xl mb-4 font-medium leading-6 text-black">Ages 43 - 44</dt>
                  <dd class="order-2 text-3xl font-bold tracking-tight text-sky-500">22%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>

import {
  BoltIcon,
  CheckIcon,
  GlobeAltIcon,
  ScaleIcon
} from "@heroicons/vue/24/outline";
useHead({
  title: "About us",
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
const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Achieving",
    rest: " superior pregnancy rates."
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "World-class",
    rest: "medical team on staff and a caring environment."
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Providing affordable",
    rest: "infertility treatment options."
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Safer IVF",
    rest: "and healthier babies."
  }
];
const features = [
  {
    name: "Our Mission",
    description:
      "Our mission is to provide fertility treatment including IVF/ICSI treatment, with a human face. At Gynescope Specialist Hospital, we pride ourselves on our ability to treat even the most difficult of cases.",
    icon: GlobeAltIcon
  },
  {
    name: "Our Vision",
    description:
      "Our vision is medical excellence achieved through delivery of world-class, personalized care, providing comprehensive infertility services on the leading edge of technology, with compassion, in a warm and caring environment.",
    icon: ScaleIcon
  },
  {
    name: "Our Focus",
    description:
      "Through use of advanced techniques in artificial reproductive technology, and individualized treatment plans, we help our patients conceive in the safest, and most seamless way possible.",
    icon: BoltIcon
  }
];
</script>