import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    question: "Does the IVF session involve cutting me open surgically?",
    answer:
      "No. The process does not involve cutting you open. The eggs are picked up within 10 to 15 minutes under light sedation.",
  },
  {
    question:
      "Will the IVF process lead to my eggs being exhausted and will I attain menopause earlier than my peers?",
    answer:
      "No. The process does not deplete your eggs as all we do is recruit eggs in a cycle that ultimately would have died.",
  },
  {
    question: "Can I have a normal vaginal delivery?",
    answer: "Yes, but with a low threshold for Caesarean Section.",
  },
  {
    question: "Will my baby be malformed?",
    answer:
      "No, though the results are conflicting, available evidence does not suggest an increase in congenital malformations among IVF babies. However, extreme caution is advised for ICSI which unlike IVF is relatively ‘young’ (1978 vs 1992).",
  },
  {
    question: "Must I always have IVF for all my future conceptions?",
    answer:
      "No, but if there are conditions that might make natural conception unlikely, for instance: extremely low sperm count or blocked tubes, then we will usually recommend another cycle.",
  },
  {
    question: "Does ICSI increase success rates?",
    answer:
      "No. ICSI has a better fertilization rate than IVF but the pregnancy rates are the same.",
  },
  {
    question: "Do I need to be admitted at any time?",
    answer:
      "No. No, admission into hospital is not necessary as it has not been shown to increase success rates.",
  },
  {
    question: "Can I have sexual intercourse with my Spouse?",
    answer:
      "No, we usually recommend you avoid sexual intercourse about three days before egg collection and for two weeks thereafter.",
  },
  {
    question: "Is there any food I need to avoid?",
    answer: "Yes, generally avoid sugary food, alcohol and tobacco.",
  },
  {
    question: "Will my egg or sperm donor be revealed to me?",
    answer:
      "No, this largely remains anonymous. You can however get information on the physical and psychological attributes.",
  },
  {
    question:
      "Can I be given someone else’s eggs or sperms or embryos mistakenly?",
    answer:
      "No, we avoid running large batches at a time and label all specimens properly.",
  },
  {
    question: "Can I pay in installments?",
    answer: "es, but payment needs to be completed before ovarian stimulation.",
  },
  // More questions...
];
export default function FAQ() {
  return (
    <div>
        <Head>
        <title>FAQ</title>
        <meta
          name="description"
          content="We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals, with optimal success rates in a congenial."
        />
        <meta hid="og:type" property="og:type" content="website" />
        <meta
          hid="apple-mobile-web-app-title"
          property="apple-mobile-web-app-title"
          content="Gynescope Specialist Hospital"
        />
        <meta
          hid="og:title"
          property="og:title"
          content="Gynescope Specialist Hospital"
        />
        <meta
          hid="og:description"
          property="og:description"
          content="We provide Assistance in state-of-the-art Reproductive Technology and experienced team of professionals."
        />
        <meta
          hid="og:url"
          property="og:url"
          content="https://gynescope.com.ng"
        />
        {/* <meta
          hid="og:image"
          property="og:image"
          content="https://d33wubrfki0l68.cloudfront.net/f602ffaa7d56bbd9f27db7a08a0a7068462149e3/143f6/_nuxt/img/f9c805f.png"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="relative bg-sky-800 py-48 md:py-48">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt
          />
          <div
            class="absolute inset-0 bg-sky-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div class="relative mx-auto max-w-7xl  px-4  sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            FAQ
          </h1>
          <p class="mt-6 max-w-3xl text-xl text-indigo-100">
            Get answers to some of our most asked questions.
          </p>
        </div>
      </div>
      <div class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <div>
              <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                You might want to clarify the answers to these frequently asked
                questions before commencing the procedures and modalities at
                Gynescope.
              </p>
            </div>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
