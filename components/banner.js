import React from "react";

export default function Banner() {
  const phone = "+2348166593030";
  const email = "info@gynescope.com";
  const address = "G U Ake Road, 22/24 Gynescope Dr, Port Harcourt";
  return (
    <div class="relative hidden md:block bg-sky-700 z-40">
      <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-12 sm:px-4 sm:text-center">
          <div class="font-medium text-white">
            <div class="md:inline items-center">
              <span class="text-green-300 text-xs uppercase">
                <strong>Contact:</strong>
              </span>
              &nbsp;
              <a href="tel:+2348166593030" class="text-xs">
                { phone }
              </a>
            </div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
            <div class="md:inline items-center">
              <span class="text-green-300 text-xs uppercase">
                <strong>Email:</strong>
              </span>
              &nbsp;
              <span class="text-xs">{ email }</span>
            </div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
            <div class="md:inline items-center">
              <span class="text-green-300 text-xs uppercase">
                <strong>Address:</strong>
              </span>
              &nbsp;
              <span class="text-xs">{ address }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
