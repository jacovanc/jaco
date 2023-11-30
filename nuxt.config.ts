// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
    private: {
      mailgunApiKey: process.env.MAILGUN_API_KEY,
      mailgunDomain: process.env.MAILGUN_DOMAIN,
    },
  },
  head: {
    script: [
      {
        hid: "calendly-js",
        src: "https://assets.calendly.com/assets/external/widget.js",
        defer: true,
        async: true,
      },
    ],
    link: [
      {
        hid: "calendly-css",
        src: "https://assets.calendly.com/assets/external/widget.css",
      },
    ],
  },
  modules: ["@nuxt/image", "@nuxtseo/module"],
  ogImage: {
    runtimeBrowser: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true, // recommended
    },
  },
  site: {
    url: process.env.BASE_URL,
    name: "Jaco - Web Specialist",
    description:
      "Looking for a web specialist? I'm your guy! Need a website for your business but don't know where to start? Get in touch with me today. ",
    defaultLocale: "en",
    identity: {
      type: "Person",
    },
    twitter: "@jac0van",
    // linkedin: 'https://www.linkedin.com/in/jacovan/',
  },
  // app: {
  //   head: {
  //     title: "Jaco - Web Specialist",
  //     meta: [
  //       { charset: "utf-8" },
  //       { name: "viewport", content: "width=device-width,initial-scale=1" },
  //       {
  //         hid: "description",
  //         name: "description",
  //         content:
  //           "Looking for a web specialist? I'm your guy! Need a website for your business but don't know where to start? Get in touch with me today. ",
  //       },
  //       // OG tags
  //       {
  //         hid: "og:title",
  //         property: "og:title",
  //         content: "Jaco - Web Specialist",
  //       },
  //       {
  //         hid: "og:description",
  //         property: "og:description",
  //         content:
  //           "Looking for a web specialist? I'm your guy! Need a website for your business but don't know where to start? Get in touch with me today. ",
  //       },
  //       { hid: "og:url", property: "og:url", content: "https://jacovan.co.uk" },
  //       { hid: "og:type", property: "og:type", content: "website" },
  //       {
  //         hid: "og:image",
  //         property: "og:image",
  //         content: `${process.env.BASE_URL}/images/og_image.png`,
  //       },
  //       // Twitter tags
  //       {
  //         hid: "twitter:title",
  //         property: "twitter:title",
  //         content: "Jaco - Web Specialist",
  //       },
  //       {
  //         hid: "twitter:description",
  //         property: "twitter:description",
  //         content:
  //           "Looking for a web specialist? I'm your guy! Need a website for your business but don't know where to start? Get in touch with me today. ",
  //       },
  //       {
  //         hid: "twitter:url",
  //         property: "twitter:url",
  //         content: "https://jacovan.co.uk",
  //       },
  //       {
  //         hid: "twitter:card",
  //         property: "twitter:card",
  //         content: "summary_large_image",
  //       },
  //       {
  //         hid: "twitter:image",
  //         property: "twitter:image",
  //         content: `${process.env.BASE_URL}/images/og_image.png`,
  //       },
  //     ],
  //     link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  //   },
  // },
});
