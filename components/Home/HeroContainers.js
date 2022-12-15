import React from 'react'

export default function HeroContainers() {
  return (
    <section class="relative sm:-mt-24 z-10">
		<div class="mx-auto max-w-6xl">
			<dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
				<div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
					<dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
						<div class="flex text-base justify-between">
							<span>Mon-Fri</span>
							<span>7:00am-10:00pm</span>
						</div>
						<div class="flex text-base py-2 justify-between">
							<span>Saturday</span>
							<span>7:00am-9:00pm</span>
						</div>
						{/* <!-- <div class="flex text-base justify-between">
							<span>Mon-Fri</span>
							<span>8:00am-9:00pm</span>
						</div>--> */}
					</dt>
					<dd class="order-1 mb-3 text-xl text-center tracking-tight themeText">
						<div class="flex items-center">
							<span class="uppercase mx-4 font-bold">Opening Hours</span>
						</div>
					</dd>
				</div>
				<div
					class="flex flex-col border-t border-b border-gray-100 p-6 text-left sm:border-0 sm:border-l sm:border-r"
				>
					<dt class="order-2 md:text-center mt-2 pt-3 text-base font-medium leading-6 text-gray-500">
						Please contact our office by phone or complete
						the appointment request form.
					</dt>
					<dd class="order-1 text-xl tracking-tight themeText">
						<div class="md:flex items-center md:mx-auto justify-center">
							<span class="uppercase mx-4 font-bold">Appointments</span>
						</div>
					</dd>
				</div>
				<div class="flex flex-col border-t border-gray-100 p-6 text-left sm:border-0 sm:border-l">
					<dt class="order-2 mt-2 pt-3 text-2xl font-medium leading-6 text-gray-500">
						<span>
							<strong>1-800-1234-567</strong>
						</span>
						<br />

						<span class="text-base">Call us!</span>
					</dt>
					<dd class="order-1 text-xl tracking-tight themeText">
						<div class="flex items-center">
							<span class="uppercase mx-4 font-bold">Online Consultation</span>
						</div>
					</dd>
				</div>
			</dl>
		</div>
      </section>
  )
}
