import Head from "next/head";
import React from "react";

const features = [
  {
    name: "Fertility Treatments",
    description:
      "A wide range of fertility treatments is available at Gynescope. A treatment plan is chosen to meet your need after initial consultation.",
  },
  {
    name: "Donor Treatments",
    description:
      "Women who as a result of age, disease or onset of ovarian failure are unable to produce fertilizable eggs have lower chances of getting pregnant and might need egg donation from a much younger woman to increase the chances of conception.",
  },
  {
    name: "Fertility Preservation",
    description:
      "Apart from clinical and laboratory testing, couples who require IVF/ICSI will need to undergo hormonal analysis. This is best done during menstruation.",
  },
  {
    name: "Minimal Access Surgery",
    description:
      "This includes both hysteroscopic and laparoscopic surgeries, for treating defects in the womb, removing fibroids, adhesions and fetal bones from a previous late abortion. Both surgeries require the insertion of a telescope-like instrument into the vagina and umbilicus respectively.",
  },
  {
    name: "24/7 Support",
    description:
      "Apart from clinical and laboratory testing, couples who require IVF/ICSI will need to undergo hormonal analysis. This is best done during menstruation.",
  },
  // {
  //   name: 'Database Backups',
  //   description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
  //   icon: ServerIcon,
  // },
];
export default function Services() {
  return <div classNameName="py-32">
      <Head>
        <title>Our Services</title>
        <meta name="description" content="We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals, with optimal success rates in a congenial." />
        <meta hid="og:type" property="og:type" content="website" />
        <meta hid="apple-mobile-web-app-title" property="apple-mobile-web-app-title" content="Gynescope Specialist Hospital" />
        <meta hid="og:title" property="og:title" content="Gynescope Specialist Hospital" />
        <meta hid="og:description" property="og:description" content="We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals." />
        <meta hid="og:url" property="og:url" content="https://gynescope.com.ng" />
        {/* <meta
          hid="og:image"
          property="og:image"
          content="https://d33wubrfki0l68.cloudfront.net/f602ffaa7d56bbd9f27db7a08a0a7068462149e3/143f6/_nuxt/img/f9c805f.png"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-64  bg-sky-800">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src="https://babymigo.com/public/uploads/Wojre0qDCtJ4_resized.png" alt />
          <div className="absolute inset-0 bg-sky-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-18 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          {/* <!-- <p className="mt-6 max-w-3xl text-xl text-indigo-100">Get to know us.</p> --> */}
        </div>
      </div>
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-18">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-cyan-600">
            What We Offer
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about our services
          </p>
          <p className="md:mx-auto text-justify mt-5 max-w-full text-xl text-gray-500">
            Our fertility services range from counseling and consultation to
            pre-implantation genetic testing and screening, to helping couples
            with the fertility preservation methods most suited to them.
            Should you need a reproductive surgery, our specialists will guide
            you through the process, explaining to you the different
            procedures you might require, and develop a treatment plan that is
            tailored to your specific requirements. In general, we encourage
            you to come along with your partner at the initial consultation
            and bring along copies of your previous test results. Couples with
            congenital absence of the uterus or anatomic or physiologic
            malformations of the reproductive tract might require surrogacy.
          </p>
          <div className="mt-12">
            <div className="grid place-self-auto grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(feature =>
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-100 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 p-3 shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-white">
                            <path
                              fill-rule="evenodd"
                              d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>;
}
