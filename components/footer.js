import Link from "next/link";
import React from "react";

export default function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <footer class="bg-sky-600 mt-20">
      <div class="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        {/* <!-- <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <a :href="item.href" class="text-base text-white hover:tet-green-500">{{ item.name }}</a>
        </div>
      </nav> --> */}
        <div class="mx-auto flex justify-center">
          <Link href="/">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto sm:h-10" src="/white.png" alt />
          </Link>
        </div>
        <div class="mt-4 flex justify-center space-x-6">
          <a href="#" class="text-white hover:text-green-500">
            <span class="sr-only">Twiiter</span>
            <img src="/instagram.png" alt="social logo" class="h-10 w-10" />
          </a>
          <a href="#" class="text-white hover:text-green-500">
            <span class="sr-only">Twiiter</span>
            <img src="/twitter.png" alt="social logo" class="h-10 w-10" />
          </a>
        </div>
        <p class="mt-4 text-center text-base text-white">
          &copy; {date} Gynescope Specialist Hospital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
