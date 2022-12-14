// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/globals.css"],
  sitemap: {
    hostname: "https://gynescope-website.vercel.app",
    trailingSlash: true
  },

  // tell web crawlers where to crawl
  robots: {
    UserAgent: "*",

    Disallow: () => ["/thanks/", "/200.html", "/README.md"],

    Sitemap: "https://gynescope-website.vercel.app/sitemap.xml"
  }
});
