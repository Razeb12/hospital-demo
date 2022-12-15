import React from "react";

export default function HomeWelcome() {
  return (
    <section class="bg-fixed bg-center h-full bg-cover custom-img">
      <div class="relative">
        <div class="mx-auto max-w-7xl">
          <div class="absolute inset-0">
            <div class="absolute inset-0 bg-sky-900 bg-opacity-75" />
          </div>

          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="text-left text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
              <span class="block text-white">
                Welcome to Gynescope Specialist Hospital
              </span>
            </h1>
            <p class="mt-6 max-w-lg text-left text-xl text-white sm:max-w-3xl">
              If you need some help in Assisted Reproductive Technology and
              would like access to state-of-the-art technology or an experienced
              team of professionals, with optimal success rates in a congenial,
              exceptionally caring environment, then welcome to Gynescope
              Specialist Hospital.
            </p>
            <div class="mt-8 flex gap-x-4">
              <button class="inline-block rounded-xl bg-white px-4 py-1.5 text-base font-semibold leading-7 text-black  shadow-sm ring-1">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
