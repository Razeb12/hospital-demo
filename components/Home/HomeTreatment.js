import React from "react";

const posts = [
  {
    title: "In Vitro Fertilization /IVF",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "With the advancement of modern science in the last few decades, assisted...",
    imageUrl:
      "https://images.pexels.com/photos/11730899/pexels-photo-11730899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Intracytoplasmic Sperm Injection",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "The process of ICSI revolutionized the treatment of male infertility. For a...",
    imageUrl:
      "http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2020/05/Intracytoplasmic-550x550.jpg",
  },
  {
    title: "Hysteroscopic Surgery",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Hysteroscopy is a procedure by which a hysteroscope is placed through the...",
    imageUrl:
      "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Laparoscopic Surgery",
    href: "#",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2019/04/Laparoscopic-Surgery-Room-550x550.jpg",
    description:
      "Laparoscopy is performed under general anesthesia with minimal discomfort. It is a...",
  },
  {
    title: "Fertility Preservation",
    href: "#",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2019/04/Laparoscopic-Surgery-Room-550x550.jpg",
    description:
      "Egg freezing, sperm freezing, and embryo freezing are all methods of fertility...",
  },
  {
    title: "Gestational Surrogacy",
    href: "#",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "http://web.archive.org/web/20220126142153im_/https://gynescope.com.ng/wp-content/uploads/2019/04/Laparoscopic-Surgery-Room-550x550.jpg",
    description:
      "Gestational surrogacy refers to a treatment process in which another woman (gestational..",
  },
];
export default function HomeTreatment() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Treatments
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            At Gynescope Special Hospital We help you maximize your time at your
            Consultation in our Various Departments.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map(post =>
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  {/* <!-- <p className="text-sm font-medium text-indigo-600">
								<a :href="post.category.href" className="hover:underline">{{ post.category.name }}</a>
							</p>--> */}
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="mt-8 flex gap-x-4 justify-center">
                    <button className="inline-block rounded-xl themeColor px-4 py-1.5 text-base font-semibold leading-7 text-white hover:text-white shadow-sm ring-1 hover:bg-cyan-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
