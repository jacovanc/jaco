<script lang="ts" setup>
defineOgImageScreenshot({
  colorScheme: "light",
  cache: false,
  selector: "#og_image_screenshot",
  mask: "#header",
  alt: "Social Share image for Jaco's website",
  delay: 10000,
  cacheKey: `index_invalidate_id_2`, // Increment this value to invalidate the cache
});

let additionalServices = {
  "SEO Advice": {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`,
    text: "Boost your site's visibility and draw more traffic with SEO advice for your website.",
  },
  "Website Maintenance": {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />  <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" /></svg>`,
    text: "Keep your website up-to-date and secure with regular maintenance.",
  },
  "Advanced Analytics Setup": {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`,
    text: "Gain valuable insights into your site's performance and user behavior, by tracking specific interactions.",
  },
};
let whyMe = {
  "Client-Centric Approach": {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1em] h-[1em]"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`,
    text: "I work closely with you to understand your needs and goals, ensuring a solution that truly reflects your vision.",
  },
  "Beginner Friendly": {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1em] h-[1em]]"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    text: "I offer clear, straightforward guidance, making web development accessible for everyone.",
  },
  "Flexible Solutions": {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1em] h-[1em]">  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
    text: "I offer flexible solutions to suit your needs, from simple websites to sophisticated web applications.",
  },
  "Long-Term Support": {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1em] h-[1em]">  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>`,
    text: "I'm here to support you and your business, long after your website is live.",
  },
};

// Inject the currentTheme provided in App.vue
const currentTheme: any = inject("currentTheme");

// Computed property for calendlyThemeSettings
let calendlyThemeSettings = computed(() => {
  return currentTheme.value === "true" || currentTheme.value === true
    ? `?primary_color=2980b9&background_color=2A303C&text_color=ffffff`
    : `?primary_color=2980b9`;
});

onMounted(() => {
  currentTheme.value =
    document.documentElement.getAttribute("data-theme") || "light";
});
</script>

<template>
  <!-- Hero Section -->
  <section
    id="hero"
    class="flex items-center justify-center bg-base-200 h-screen min-h-[700px] max-h-[820px] sm:min-h-[540px] sm:max-h-[450px]"
  >
    <!-- Opening Statement -->
    <!-- <h1 class="text-2xl font-heading font-bold text-primary">
        Empower Your Business to Fully Own Its Digital Presence
      </h1> -->

    <!-- Introduction -->
    <div
      id="og_image_screenshot"
      class="container max-w-full w-96 sm:w-[920px] md:w-full sm:flex sm:flex-row sm:items-center sm:gap-10 sm:justify-center py-20"
    >
      <div>
        <div class="w-96 max-w-full sm:w-72 md:w-80 lg:w-[450px]">
          <!-- <div
              class="mb-3 mx-auto overflow-hidden rounded-2xl shadow-lg max-w-full relative pt-[100%]"
            > -->
          <div
            class="mb-3 mx-auto overflow-hidden mask mask-squircle shadow-lg max-w-full relative pt-[100%]"
          >
            <NuxtImg
              src="/images/me.jpg"
              alt="Jaco's Portrait"
              class="absolute top-0 left-0 w-full h-full object-cover"
              format="webp"
            />
          </div>
        </div>

        <div class="sm:h-0">
          <div
            class="bg-white rounded p-2 inline-block relative ml-10 shadow-lg speech-bubble"
          >
            <p class="text-xl font-sans font-bold text-gray-700">
              Hi, I'm Jaco! &#x1F44B;
            </p>
          </div>
        </div>
      </div>
      <div class="sm:pb-6 w-80 md:w-[570px] max-w-full" id="sub-hero">
        <h2 class="text-3xl sm:text-xl md:text-3xl font-sans font-bold">
          Your
          <span class="text-secondary dark:text-secondary-light"
            >Web Specialist</span
          >
          committed to helping you succeed online
        </h2>
        <p class="mt-2">
          Don't just settle for a website. Build a
          <span class="text-secondary dark:text-secondary-light font-bold"
            >digital presence</span
          >
          that
          <span class="inline-block">
            you
            <span class="text-secondary dark:text-secondary-light font-bold"
              >fully own</span
            >.
          </span>
        </p>
        <a
          class="btn btn-accent shadow-2xl shadow-accent-light mt-6"
          href="#packages"
          >View Packages</a
        >
      </div>
    </div>
  </section>
  <!-- <div class="bg-base-100">
    <section id="introduction" class="container py-20">
      <h2
        class="font-heading text-4xl font-bold text-center w-[30rem] m-auto max-w-full md:w-full"
      >
        <span class="text-primary">Your Website</span>
        should belong
        <span class="inline-block"
          >to
          <span class="text-white font-extrabold bg-primary px-2"
            >you.</span
          ></span
        >
      </h2>
      <p
        class="mb-2 text-center mt-4 md:w-[39rem] w-[22rem] max-w-full block m-auto"
      >
        Your website is the digital face of your business. It's the first step
        in building a relationship with your customers.
      </p>
    </section>
  </div> -->
  <div class="bg-base-100">
    <!-- Digital Presence Section -->
    <section id="digital-presence" class="container py-20">
      <h2
        class="font-heading text-4xl font-bold text-center w-[30rem] m-auto max-w-full md:w-full"
      >
        <span class="text-primary dark:text-primary-light">Your Website</span>
        should belong
        <span class="inline-block"
          >to
          <span class="text-white font-extrabold bg-primary px-2"
            >you.</span
          ></span
        >
      </h2>
      <p
        class="mb-2 text-center mt-4 md:w-[39rem] w-[22rem] max-w-full block m-auto"
      >
        Don't rent your website from a third-party platform. Own your website,
        let it grow with your business.
      </p>
      <ul class="flex flex-wrap gap-4 mt-10">
        <li
          class="flex-grow border bg-primary bg-opacity-5 shadow-lg p-4 border-primary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <div class="flex justify-between items-center mb-2 gap-2">
            <strong class="inline text-xl">Complete Control</strong>
            <div
              class="text-3xl text-right text-primary dark:text-primary-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[1] h-[1em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                />
              </svg>
            </div>
          </div>
          <strong class="text-primary dark:text-primary-light text-lg"
            >Your website, your rules.</strong
          >
          Modify, upgrade, or change as you grow, free from platform limitations
          and vendor lock-ins.
        </li>
        <li
          class="flex-grow border p-4 bg-primary bg-opacity-5 shadow-lg border-primary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <div class="flex justify-between items-center mb-2 gap-2">
            <strong class="inline text-xl">Growth Ready</strong>
            <div
              class="text-3xl text-right text-primary dark:text-primary-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[1em] h-[1em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </div>
          </div>
          <strong class="text-primary dark:text-primary-light text-lg"
            >Evolve</strong
          >
          your website in tandem with your business needs,
          <strong class="text-primary dark:text-primary-light text-lg"
            >without starting from scratch</strong
          >.
        </li>
        <li
          class="flex-grow border p-4 bg-primary bg-opacity-5 shadow-lg border-primary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <div class="flex justify-between items-center mb-2 gap-2">
            <strong class="inline text-xl">No Lock-in</strong>
            <div
              class="text-3xl text-right text-primary dark:text-primary-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[1em] h-[1em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
          </div>
          <strong class="text-primary dark:text-primary-light text-lg"
            >Break free</strong
          >
          from the confines of platforms like Wix.
          <strong class="text-primary dark:text-primary-light text-lg"
            >Embrace complete control</strong
          >, do what you want with it.
        </li>
        <!-- More list items here -->
      </ul>

      <a
        class="btn btn-accent shadow-2xl shadow-accent-light mt-6"
        href="#contact"
        >Contact me!</a
      >
    </section>
  </div>
  <!-- Packages Section -->
  <section id="packages" class="bg-base-200 py-20">
    <div class="container text-center">
      <h2
        class="font-heading text-4xl font-bold text-center w-[30rem] m-auto max-w-full md:w-full"
      >
        <span class="text-white font-extrabold bg-secondary px-2 inline-block"
          >Own the code.</span
        >
        <span class="inline-block"> &nbsp;Take it with you.</span>
      </h2>
      <p
        class="mb-2 text-center mt-4 md:w-[39rem] w-[22rem] max-w-full block m-auto"
      >
        Your website is the digital face of your business. It's the first step
        in building a relationship with your customers.
      </p>
    </div>

    <div class="container lg:max-w-[1200px] mt-10 md:mt-12 lg:mt-16">
      <div
        class="flex flex-row gap-4 sm:gap-2 mt-6 flex-wrap md:flex-nowrap lg:justify-center items-center sm:items-stretch mb-4 sm:mb-2 justify-center"
      >
        <!-- Starter Package -->
        <Package
          class="max-w-[370px] sm:max-w-[300px] lg:max-w-[370px] md:scale-95 lg:scale-100 z-1 md:rotate-[-2deg] md:-mr-4 lg:mr-0"
          :packageName="'🌱 Starter Package'"
          :listItems="[
            'User-friendly WordPress for your content',
            'Use an existing theme, adapted to your requirements',
            'SEO ready',
            'Deployed and ready for your content',
          ]"
          :infoList="[
            {
              key: 'Support:',
              value: '6 months ongoing support & hosting included.',
            },
            {
              key: 'Ideal For:',
              value:
                'New online ventures; personal sites, small businesses, basic e-commerce.',
            },
          ]"
          :price="'£1500'"
          :color="'primary'"
        />

        <!-- Growth Package -->
        <Package
          class="max-w-[370px] sm:max-w-[300px] lg:max-w-[370px] md:scale-105 lg:scale-110 z-10 md:-mr-4 lg:mr-0"
          :packageName="'🌟 Growth Package'"
          :listItems="[
            'Wordpress for your content, or another CMS of your choice',
            'Bring your own design or wireframes',
            'Performant custom theme',
            'SEO ready',
            'Deployed and ready for your content',
          ]"
          :infoList="[
            {
              key: 'Support:',
              value: '6 months ongoing support & hosting included.',
            },
            {
              key: 'Ideal For:',
              value: 'Businesses ready to make a unique digital statement.',
            },
          ]"
          :price="'£4000'"
          :color="'secondary'"
        />

        <!-- Expansion Package -->
        <Package
          class="max-w-[370px] sm:max-w-none sm:w-full md:max-w-[300px] md:w-auto lg:max-w-[370px] md:scale-95 lg:scale-100 z-1 md:rotate-[2deg]"
          :packageName="'&#x1F680; Expansion Package'"
          :listItems="[
            'Advanced custom solutions for larger-scale projects.',
            'Sophisticated architecure bespoke to project requirements (PWAs, SPAs, headless CMS, APIs etc)',
            'Flexible contracts and business arrangements.',
          ]"
          :infoList="[
            {
              key: 'Support:',
              value: 'Arranged ongoing support & hosting based on your needs.',
            },
            {
              key: 'Ideal For:',
              value:
                'Businesses looking for sophisticated, high-end web solutions.',
            },
          ]"
          :price="'£6000'"
          :color="'accent'"
        />
      </div>

      <!-- Custom Path -->
      <Package
        class="max-w-[370px] sm:max-w-none sm:w-full md:max-w-[500px] md:mt-10 lg:mt-16 m-auto"
        :packageName="'✨ Custom Path'"
        :listItems="[
          'Unique requirements or larger-scale projects.',
          'Flexible contracts and business arrangements.',
        ]"
        :infoList="[
          {
            key: 'Can\'t find what you\'re looking for?',
            value: 'Get in touch!',
          },
        ]"
      />
    </div>
    <p
      class="mb-2 text-center mt-4 md:w-[39rem] w-[22rem] max-w-full block m-auto"
    >
      Note sure what something means? &nbsp;&nbsp;
      <a
        class="btn btn-sm btn-accent shadow-2xl shadow-accent-light btn-outline mt-2"
        href="#faq"
        >Ask me!</a
      >
    </p>
  </section>

  <div class="bg-base-100">
    <!-- Additional Services Section -->
    <section id="additional-services" class="container py-20">
      <div
        class="text-secondary font-bold text-lg dark:text-secondary-light font-heading"
      >
        Need something else?
      </div>
      <h2 class="font-heading text-4xl font-bold mt-2">Additional Services</h2>
      <ul class="mt-10 mb-6 align-middle">
        <li
          v-for="(item, key) in additionalServices"
          :key="key"
          class="my-3 pl-7"
        >
          <div
            class="w-[30px] h-6 text-secondary dark:text-secondary-light inline-block align-middle -ml-7 pr-[6px]"
            v-html="item.icon"
          ></div>

          <strong class="text-secondary dark:text-secondary-light align-middle"
            >{{ key }}:
          </strong>
          <p class="align-middle inline">&nbsp;{{ item.text }}</p>
        </li>
      </ul>
      <p class="mt-6">
        Get in touch to discuss your needs and find out how I can help you.
      </p>
      <a
        class="btn btn-accent shadow-2xl shadow-accent-light mt-6"
        href="#contact"
        >Discuss with me</a
      >
    </section>

    <div class="bg-base-200">
      <section id="process" class="py-20">
        <div class="container">
          <div
            class="text-primary font-bold text-lg dark:text-primary-light font-heading"
          >
            Unveiling the process
          </div>

          <h2 class="font-heading text-4xl font-bold mt-2">
            How does it work?
          </h2>
          <!-- <p class="mt-6 mb-2">
          Here's a brief overview of the steps involved in creating your new
          website, from start to finish.
        </p> -->
        </div>
        <ul class="mt-10 sm:max-w-[750px] md:max-w-[960px] m-auto px-4">
          <li class="number number-left pb-6 flex items-start">
            <div
              class="rounded-full bg-primary w-10 h-10 flex-shrink-0 text-primary-content font-bold text-center flex justify-center items-center mr-6"
            >
              1
            </div>
            <div class="text-left sm:mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 inline mr-2 text-primary dark:text-primary-light"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <span class="font-bold text-xl inline-block mb-4">
                Get in touch!
              </span>
              <br />
              We'll arrange a video call where we will discuss your needs in
              detail.
            </div>
          </li>

          <li
            class="number number-right my-6 flex items-start justify-between w-full"
          >
            <div class="text-left sm:ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary dark:text-primary-light inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <div class="font-bold text-xl inline-block mb-4 text-right">
                Proposal
              </div>
              <br />
              I'll send you a proposal based on our discussion. This will
              include a breakdown of the project, timeline, and cost. If it's
              not right for you, we will iterate on it until it is.
            </div>
            <div
              class="rounded-full bg-primary w-10 h-10 flex-shrink-0 text-primary-content font-bold text-center flex justify-center items-center ml-6"
            >
              2
            </div>
          </li>
          <li class="number number-left py-6 flex items-start">
            <div
              class="rounded-full bg-primary w-10 h-10 flex-shrink-0 text-primary-content font-bold text-center flex justify-center items-center mr-6"
            >
              3
            </div>
            <div class="text-left sm:mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary dark:text-primary-light inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span class="font-bold text-xl inline-block mb-4"
                >Development</span
              >
              <br />
              Once you're happy with the proposal, I'll kick start the
              development process.
            </div>
          </li>
          <li class="number number-right my-6 flex items-start justify-between">
            <div class="text-left sm:ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary dark:text-primary-light inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <span class="font-bold text-xl inline-block mb-4"
                >Feedback & Adjustments</span
              >
              <br />
              Throughout the development process I will keep you updated and
              make adjustments that are within scope of the proposal as needed.
            </div>
            <div
              class="rounded-full bg-primary w-10 h-10 flex-shrink-0 text-primary-content font-bold text-center flex justify-center items-center ml-6"
            >
              5
            </div>
          </li>
          <li class="number number-left py-6 flex items-start">
            <div
              class="rounded-full bg-primary w-10 h-10 flex-shrink-0 text-primary-content font-bold text-center flex justify-center items-center mr-6"
            >
              6
            </div>
            <div class="text-left sm:mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary dark:text-primary-light inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                />
              </svg>

              <span class="font-bold text-xl inline-block mb-4"
                >Quality Assurance</span
              >
              <br />
              Once development is complete, I'll perform a thorough quality and
              performance check, preparing your site ready to go live.
            </div>
          </li>
          <li class="number number-right mt-6 flex items-start justify-between">
            <div class="text-left sm:ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary dark:text-primary-light inline mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>

              <span class="font-bold text-xl inline-block mb-4">Launch</span>
              <br />
              Time to get your website live! I'll deploy your site and provide 6
              months of support and hosting included in the price.
            </div>
            <div
              class="rounded-full bg-primary w-10 h-10 flex-shrink-0 text-primary-content font-bold text-center flex justify-center items-center ml-6"
            >
              5
            </div>
          </li>
        </ul>

        <div class="container">
          <a
            class="btn btn-accent shadow-2xl shadow-accent-light mt-6"
            href="#contact"
            >Get started!</a
          >
        </div>
      </section>
    </div>

    <!-- Why Choose Jaco Section -->
    <div class="bg-base-100">
      <section id="why-choose-jaco" class="container py-20">
        <div
          class="text-secondary font-bold text-lg dark:text-secondary-light font-heading"
        >
          Your success is my goal
        </div>
        <h2 class="font-heading text-4xl font-bold mt-2">Why choose me?</h2>
        <ul class="mt-6 align-middle">
          <!-- <li v-for="(item, key) in whyMe" :key="key" class="my-3 pl-7">
            <div
              class="w-[30px] h-6 text-primary dark:text-primary-light inline-block align-middle -ml-7 pr-[6px]"
              v-html="item.icon"
            ></div>

            <strong class="text-primary dark:text-primary-light align-middle"
              >{{ key }}:
            </strong>
            <p class="align-middle inline">&nbsp;{{ item.text }}</p>
          </li> -->

          <ul class="flex flex-wrap gap-4 mt-10">
            <li
              v-for="(item, key) in whyMe"
              :key="key"
              class="flex-grow border bg-secondary bg-opacity-5 shadow-lg p-4 border-secondary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
            >
              <div class="flex justify-between items-center mb-2 gap-2">
                <strong class="inline text-xl">{{ key }}</strong>
                <div
                  class="text-3xl text-right text-secondary dark:text-secondary-light"
                  v-html="item.icon"
                ></div>
              </div>
              {{ item.text }}
            </li>
          </ul>
        </ul>
      </section>
    </div>

    <!-- FAQ Section -->
    <div class="bg-base-200">
      <section id="faq" class="container py-20">
        <div
          class="text-primary font-bold text-lg dark:text-primary-light font-heading"
        >
          Got questions?
        </div>
        <h2 class="font-heading text-4xl font-bold mt-2">
          Frequently Asked Questions
        </h2>
        <FAQAccordion
          class="mt-6"
          :faqItems="[
            {
              question: 'How do we get started?',
              answer:
                'Book a call or contact me and we\'ll discuss your needs. We will come up with a solution that works for you, and I will answer any questions you have.',
            },
            {
              question: 'Can I upgrade my website package in the future?',
              answer:
                'Absolutely! Your website can grow and evolve with your business. This is a key benefit of owning your website. Not only that, you can also take it with you if you decide to move to a different hosting provider. You will not be dependant on me, and can always choose to take your website to a different developer or agency if you\'re ever not satisifed with my services (but I promise you won\'t be!).',
            },
            {
              question: 'What kind of ongoing support do you offer?',
              answer:
                'I provide 6 months of support and hosting with all my services (exact details included in your proposal). This will get you up and running, and give you time to get comfortable with your new website without having to think about hosting providers. After that, I offer ongoing support and hosting for a monthly fee. This includes regular updates and maintenance, as well as any additional support you may need. You can cancel this at any time and take your website elsewhere if you wish to do so.',
            },
            {
              question: 'Do you provide training on how to use my new website?',
              answer:
                'Yes! I will show you the ropes, and offer guidance to help you manage and update your site confidently. That\'s what I\'m here for - not just to build your website, but also to help you get the most out of it!',
            },
          ]"
        />

        <p class="mt-6">Have more questions?</p>
        <a
          class="btn btn-accent shadow-2xl shadow-accent-light mt-3"
          href="#contact"
          >Get in touch!</a
        >
      </section>
    </div>

    <!-- Contact Section -->
    <div class="bg-base-100">
      <section class="container py-20">
        <div
          class="text-primary font-bold text-lg dark:text-primary-light font-heading"
        >
          Don't hesitate to get in touch
        </div>
        <h2 id="contact" class="font-heading text-4xl font-bold mt-2">
          Schedule a call
        </h2>
        <div class="flex flex-col md:flex-row gap-6 md:gap-32 justify-start">
          <p class="mt-2">
            Let's discuss your needs and find optimum solution for you.
            <br />Just choose a time that suits you with the button below.
          </p>

          <div>
            <a
              class="btn btn-primary shadow-2xl shadow-primary-light"
              :onclick="`Calendly.initPopupWidget({url: 'https://calendly.com/jacovan/initial-meeting${calendlyThemeSettings}'});return false;`"
              >Schedule a call</a
            >
          </div>
        </div>
        <h2 class="font-heading text-4xl font-bold mt-10">
          Just have a question?
        </h2>
        <p class="mt-2">
          I'd love to hear from you. Fill in the contact form below and I'll get
          back to you.
        </p>
        <p class="mt-2">
          If you are scheduling a call but my availability doesn't suit you on
          the above calendar, I can also do out of hours calls. Just let me know
          in the form below.
        </p>
        <ContactForm />
      </section>
    </div>
  </div>
</template>

<style>
.speech-bubble {
  top: -40px;
}
.speech-bubble::after {
  content: "";
  position: absolute;
  bottom: 100%; /* Position just above the bottom of the bubble */
  right: 20px; /* Adjust this to move the tail left/right */
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent white transparent; /* Only the bottom border is white */
}
</style>
