import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
const blogPosts = [
  {
    id: 1,
    title: "Timed Intercourse",
    body:
      "In this procedure, an ultrasound scan is used to track the follicles so as to determine the right time for ovulation and possible intercourse. We either use your natural cycle or by ovulation induction, a process where we induce ovulation with drugs.",
    icon: ShieldCheckIcon,
  },
  {
    id: 2,
    title: "Intrauterine Insemination",
    body:
      "As the name implies, the semen sample is prepared and injected directly inside the womb bypassing the neck of the womb. This is done as soon as the follicles are mature for ovulation, following the ultrasound scan monitored growth.",
    icon: ShieldCheckIcon,
  },
  {
    id: 3,
    title: "In vitro Fertilization",
    body:
      "In-vitro fertilization is a process where eggs are extracted from a woman’s body, and fertilized in the IVF laboratory with her partner/donor sperm, to create embryos that are carefully transferred to the uterus for pregnancy.",
    icon: ShieldCheckIcon,
  },
  {
    id: 4,
    title: "Intracytoplasmic Sperm Injection",
    body:
      "Even with problems like low sperm count, we can isolate a few sperms and inject each into matured eggs, increasing the chances of fertilization. Couples that are not willing to go for donor sperm can use this option in severe low sperm count abnormality.",
    icon: ShieldCheckIcon,
  },
  {
    id: 5,
    title: "Semen and Embryo Freezing",
    body:
      "In this fertility preservation process, we aim to transfer a maximum of three embryos at a time. If excess high-grade embryos are available, we can freeze them for future use. The chances of such embryos surviving to freeze are only 60-70%, so we freeze only if two or more high-grade embryos are available.",
    icon: ShieldCheckIcon,
  },
  {
    id: 6,
    title: "Surgical Options",
    body:
      "The surgical fertility treatment options available at Gynescope include minimal access surgeries (hysteroscopy and laparoscopy) and surgical sperm retrieval. Other infertility surgeries include Tubal ligation surgery, varicocele surgery, and surgeries for treatment of endometriosis and endometritis.",
    icon: ShieldCheckIcon,
  },
];
export default function Treatments() {
  return (
    <div className="bg-gray-50 py-32">
      <div className="relative h-96 bg-sky-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.vanguardngr.com/wp-content/uploads/2013/07/Badejo.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-sky-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Treatments
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            At Gynescope, we simplify the entire treatment process, making it as
            stress-free and seamless as possible. Your journey starts with an
            initial consultation and diagnosis, followed by a treatment plan
            that will be tailored to your unique situation.
          </p>
        </div>
      </div>

      <section className="mx-auto md:-mt-32 z-20 relative max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-12">
          <div className="grid place-self-auto grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(feature => 
              <div key={feature.id} className="pt-6">
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

                        {/* <!-- <component :is="feature.icon" className="h-6 w-6 text-white" aria-hidden="true" /> --> */}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-bold uppercase tracking-tight text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
