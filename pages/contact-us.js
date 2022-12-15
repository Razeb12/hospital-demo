import React from "react";
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function ContactUs() {
  return (
    <div class="-mt-32">
      <header class="relative bg-sky-800 pb-24 pt-32 sm:pb-32">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt
          />
          <div
            class="absolute inset-0 bg-gradient-to-l from-sky-800 to-sky-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div class="relative mx-auto mt-24 max-w-md px-4 sm:mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p class="mt-6 max-w-3xl text-xl text-white">
            We love to hear from our customers! If you have any further
            questions or queries please do not hesitate to get in touch. You can
            contact us by phone or email anytime.
          </p>
        </div>
      </header>
      <div class="lg:-mt-48 z-20">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
          <div class="relative bg-white shadow-xl">
            <h2 class="sr-only">Contact us</h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              {/* <!-- {/* Contact information  */}
              <div class="relative overflow-hidden bg-sky-700 py-10 px-6 sm:px-10 xl:p-12">
                <div
                  class="pointer-events-none absolute inset-0 sm:hidden"
                  aria-hidden="true">
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="{343}"
                    height="{388}"
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fill-opacity="0.1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop
                          offset="{1}"
                          stop-color="#fff"
                          stop-opacity="{0}"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                  aria-hidden="true">
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="{359}"
                    height="{339}"
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fill-opacity="0.1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop
                          offset="{1}"
                          stop-color="#fff"
                          stop-opacity="{0}"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                  aria-hidden="true">
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="{160}"
                    height="{678}"
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fill-opacity="0.1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop
                          offset="{1}"
                          stop-color="#fff"
                          stop-opacity="{0}"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white">
                  Contact information
                </h3>
                <p class="mt-6 max-w-3xl text-base text-indigo-50">
                  You can contact us any way that is convenient for you. We are
                  available 24/7 via calls or email. You can also use a quick
                  contact form below or visit our medical center personally. We
                  would be happy to answer your questions.
                </p>
                <dl class="mt-8 space-y-6">
                  <dt>
                    <span class="sr-only">Phone number</span>
                  </dt>
                  <dd class="flex text-base text-indigo-50">
                    <PhoneIcon
                      class="h-6 w-6 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <a href="tel:+2348166593030" class="ml-3">
                      +2348166593030
                    </a>
                  </dd>
                  <dt>
                    <span class="sr-only">Email</span>
                  </dt>
                  <dd class="flex text-base text-indigo-50">
                    <EnvelopeIcon
                      class="h-6 w-6 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <div>
                      <span class="ml-3">info@gynescope.com.ng</span>
                      <br />
                      <span class="ml-3">care@gynescope.com.ng</span>
                    </div>
                  </dd>
                </dl>
              </div>
              {/* <!-- {/* Contact form */} 
              <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-gray-900">
                  Send us a message
                </h3>
                <form
                  action="#"
                  method="POST"
                  class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-900">
                      First name
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-900">
                      Last name
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-900">
                        Phone
                      </label>
                      <span id="phone-optional" class="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autocomplete="tel"
                        class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="subject"
                      class="block text-sm font-medium text-gray-900">
                      Subject
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-900">
                        Message
                      </label>
                      <span id="message-max" class="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div class="mt-1">
                      <textarea
                        maxlength="{500}"
                        id="message"
                        name="message"
                        rows="{4}"
                        class="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        aria-describedby="message-max"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-gray-300 border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main />
    </div>
  );
}
