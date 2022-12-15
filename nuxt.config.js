// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots"],
  css: ["@/assets/globals.css"],
  sitemap: {
    hostname: "https://gynescope.com.ng",
    trailingSlash: true
  },

  // tell web crawlers where to crawl
  robots: {
    UserAgent: "*",

    Disallow: () => ["/thanks/", "/200.html", "/README.md"],

    Sitemap: "https://gynescope.com.ng/sitemap.xml"
  }
});
