<template>
  <div class="bg-gray-50">
    <div class="relative h-96 bg-sky-800">
      <div class="absolute inset-0">
        <img class="h-full w-full object-cover" src="https://cdn.vanguardngr.com/wp-content/uploads/2013/07/Badejo.jpg"
          alt="" />
        <div class="absolute inset-0 bg-sky-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Treatments</h1>
        <p class="mt-6 max-w-3xl text-xl text-indigo-100">At Gynescope, we simplify the entire treatment
          process, making it as stress-free and seamless as possible. Your journey
          starts with an initial consultation and diagnosis, followed by a treatment plan that will be
          tailored to your unique
          situation.</p>
      </div>
    </div>

    
    <section class="mx-auto -mt-32 z-20 relative max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-12 ">
        <div class="grid place-self-auto   grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          <div v-for="feature in blogPosts" :key="feature.title" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-100 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-bold  uppercase tracking-tight text-gray-900">{{ feature.title }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline/index.js'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/vue/20/solid/index.js'
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
    }
  ],
  link: [{ rel: "icon", type: "img/x-icon", href: "/favicon.ico" }]
});
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const features = [
  {
    name: 'Fertility Treatments',
    description: 'A wide range of fertility treatments is available at Gynescope. A treatment plan is chosen to meet your need after initial consultation.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Donor Treatments',
    description: 'Women who as a result of age, disease or onset of ovarian failure are unable to produce fertilizable eggs have lower chances of getting pregnant and might need egg donation from a much younger woman to increase the chances of conception.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Fertility Preservation',
    description: 'Apart from clinical and laboratory testing, couples who require IVF/ICSI will need to undergo hormonal analysis. This is best done during menstruation.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Minimal Access Surgery',
    description: 'This includes both hysteroscopic and laparoscopic surgeries, for treating defects in the womb, removing fibroids, adhesions and fetal bones from a previous late abortion. Both surgeries require the insertion of a telescope-like instrument into the vagina and umbilicus respectively.',
    icon: ShieldCheckIcon,
  },
  {
    name: '24/7 Support',
    description:
      'Apart from clinical and laboratory testing, couples who require IVF/ICSI will need to undergo hormonal analysis. This is best done during menstruation.',
    icon: ShieldCheckIcon,
  },
  // {
  //   name: 'Database Backups',
  //   description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
  //   icon: ServerIcon,
  // },
]

// Gradient for icon preferred style
// bg-gradient-to-r from-teal-500 to-cyan-600 

const blogPosts = [
  {
    id: 1,
    title: 'Timed Intercourse',
    body: 'In this procedure, an ultrasound scan is used to track the follicles so as to determine the right time for ovulation and possible intercourse. We either use your natural cycle or by ovulation induction, a process where we induce ovulation with drugs.',
    icon: ShieldCheckIcon,

  },
  {
    id: 2,
    title: 'Intrauterine Insemination',
    body: 'As the name implies, the semen sample is prepared and injected directly inside the womb bypassing the neck of the womb. This is done as soon as the follicles are mature for ovulation, following the ultrasound scan monitored growth.',
    icon: ShieldCheckIcon,

  },
  {
    id: 3,
    title: 'In vitro Fertilization',
    body: 'In-vitro fertilization is a process where eggs are extracted from a woman’s body, and fertilized in the IVF laboratory with her partner/donor sperm, to create embryos that are carefully transferred to the uterus for pregnancy.',
    icon: ShieldCheckIcon,


  },
  {
    id: 4,
    title: 'Intracytoplasmic Sperm Injection',
    body: 'Even with problems like low sperm count, we can isolate a few sperms and inject each into matured eggs, increasing the chances of fertilization. Couples that are not willing to go for donor sperm can use this option in severe low sperm count abnormality.',
    icon: ShieldCheckIcon,

  },
  {
    id: 5,
    title: 'Semen and Embryo Freezing',
    body: 'In this fertility preservation process, we aim to transfer a maximum of three embryos at a time. If excess high-grade embryos are available, we can freeze them for future use. The chances of such embryos surviving to freeze are only 60-70%, so we freeze only if two or more high-grade embryos are available.',
    icon: ShieldCheckIcon,

  },
  {
    id: 6,
    title: 'Surgical Options',
    body: 'The surgical fertility treatment options available at Gynescope include minimal access surgeries (hysteroscopy and laparoscopy) and surgical sperm retrieval. Other infertility surgeries include Tubal ligation surgery, varicocele surgery, and surgeries for treatment of endometriosis and endometritis.',

    icon: ShieldCheckIcon,
  },
]

</script>


