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
  "SEO Advice":
    "Boost your site's visibility and draw more traffic with SEO advice for your website.",
  "Website Maintenance":
    "Keep your site running smoothly with regular updates and maintenance.",
  "Advanced Analytics Setup":
    "Gain valuable insights into your site's performance and user behavior, by tracking specific interactions.",
};
let whyMe = {
  "Client-Centric Approach":
    "Your needs and goals are at the forefront of every decision, ensuring a solution that truly reflects your vision.",
  "Beginner-Friendly":
    "I offer clear, straightforward guidance, making web development accessible for everyone.",
  "Flexible Solutions":
    "My services are tailored to adapt and grow with your business, ensuring longevity and relevance.",
  "Long-Term Support":
    "You'll receive dedicated support and hosting for 6 months, with the option for extended assistance.",
};
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
      class="container max-w-full w-96 sm:w-[920px] sm:flex sm:flex-row sm:items-center sm:gap-10 sm:justify-center py-20"
    >
      <div>
        <div class="w-96 max-w-full sm:w-72 md:w-80">
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
      <div class="sm:pb-6 w-80 md:w-96 max-w-full" id="sub-hero">
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
          that you
          <span class="text-secondary dark:text-secondary-light font-bold"
            >fully own</span
          >.
        </p>
        <a class="btn btn-accent mt-6" href="#packages">View Packages</a>
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
          <strong class="block mb-2 text-xl">Complete Control</strong>
          <strong class="text-primary dark:text-primary-light text-lg"
            >Your website, your rules.</strong
          >
          Modify, upgrade, or change as you grow, free from platform limitations
          and vendor lock-ins.
        </li>
        <li
          class="flex-grow border p-4 bg-primary bg-opacity-5 shadow-lg border-primary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-xl">Growth-Ready</strong>
          <strong class="text-primary dark:text-primary-light text-lg"
            >Evolve</strong
          >
          your website in tandem with your business needs,
          <strong class="text-primary dark:text-primary-light text-lg"
            >without starting from scratch</strong
          >
        </li>
        <li
          class="flex-grow border p-4 bg-primary bg-opacity-5 shadow-lg border-primary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-xl">Vendor Independence</strong>
          <strong class="text-primary dark:text-primary-light text-lg"
            >Break free</strong
          >
          from the confines of platforms like Wix.
          <strong class="text-primary dark:text-primary-light text-lg"
            >Embrace complete control</strong
          >, enhanced functionality, and the freedom to adapt and grow.
        </li>
        <!-- More list items here -->
      </ul>

      <a class="btn btn-accent mt-6" href="#contact">Contact me!</a>
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
      <a class="btn btn-sm btn-accent btn-outline mt-2" href="#faq">Ask me!</a>
    </p>
  </section>

  <div class="bg-base-100">
    <!-- Additional Services Section -->
    <section id="additional-services" class="container py-20">
      <h2 class="font-heading text-4xl font-bold">Additional Services</h2>
      <p class="mt-2 mb-2">
        I'm here to help you get the most out of your website.
      </p>
      <ul class="my-6 align-middle">
        <li
          v-for="(value, key) in additionalServices"
          :key="key"
          class="my-3 pl-7"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[30px] h-6 text-secondary dark:text-secondary-light inline-block align-middle -ml-7 pr-[6px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <strong class="text-secondary dark:text-secondary-light align-middle"
            >{{ key }}:
          </strong>
          <p class="align-middle inline">&nbsp;{{ value }}</p>
        </li>
      </ul>
      <p class="mt-6">
        Get in touch to discuss your needs and find out how I can help you.
      </p>
      <a class="btn btn-accent mt-6" href="#contact">Discuss with me</a>
    </section>

    <div class="bg-base-200">
      <section id="process" class="container py-20">
        <h2 class="font-heading text-4xl font-bold">
          What does the process look like?
        </h2>
        <p class="mt-2 mb-2">
          Here's a brief overview of the steps involved in creating your new
          website, from start to finish.
        </p>
        <ul class="steps steps-vertical mt-2">
          <li class="step step-secondary items-start">
            <p class="text-left text-sm ml-2 my-2">
              <span class="font-bold text-xl mt-6"
                >&#x1F4DE; Get in touch!</span
              >
              <br />
              We'll arrange a video call where we will discuss your needs in
              detail.
            </p>
          </li>
          <!-- We should probably add some info explaining each section. Perhaps collapsable like the faqs -->
          <li class="step step-secondary">
            <p class="text-left text-sm ml-2 my-2">
              <span class="font-bold text-xl">Proposal</span> <br />
              I'll send you a proposal based on our discussion. This will
              include a breakdown of the project, timeline, and cost. If it's
              not right for you, we will iterate on it until it is.
            </p>
          </li>
          <li class="step step-secondary">
            <p class="text-left text-sm ml-2 my-2">
              <span class="font-bold text-xl">Development</span>
              <br />
              Once you're happy with the proposal, I'll kick start the
              development process.
            </p>
          </li>
          <li class="step step-secondary">
            <p class="text-left text-sm ml-2 my-2">
              <span class="font-bold text-xl">Feedback & Adjustments</span>
              <br />
              Throughout the development process I will keep you updated and
              make adjustments that are within scope of the proposal as needed.
            </p>
          </li>
          <li class="step step-secondary">
            <p class="text-left text-sm ml-2 my-2">
              <span class="font-bold text-xl">Quality Assurance</span> <br />
              Once development is complete, I'll perform a thorough quality and
              performance check, preparing your site ready to go live.
            </p>
          </li>
          <li class="step step-secondary">
            <p class="text-left text-sm ml-2 my-2">
              <span class="font-bold text-xl">&#x1F680; Launch</span> <br />
              Time to get your website live! I'll deploy your site and provide 6
              months of support and hosting included in the price.
            </p>
          </li>
        </ul>
        <a class="btn btn-accent mt-6" href="#contact">Get started!</a>
      </section>
    </div>

    <!-- Why Choose Jaco Section -->
    <div class="bg-base-100">
      <section id="why-choose-jaco" class="container py-20">
        <h2 class="font-heading text-4xl font-bold">Why choose me?</h2>
        <ul class="mt-6 align-middle">
          <li v-for="(value, key) in whyMe" :key="key" class="my-3 pl-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[30px] h-6 text-primary dark:text-primary-light inline-block align-middle -ml-7 pr-[6px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <strong class="text-primary dark:text-primary-light align-middle"
              >{{ key }}:
            </strong>
            <p class="align-middle inline">&nbsp;{{ value }}</p>
          </li>
        </ul>
      </section>
    </div>

    <!-- FAQ Section -->
    <div class="bg-base-200">
      <section id="faq" class="container py-20">
        <h2 class="font-heading text-4xl font-bold">
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
        <a class="btn btn-accent mt-3" href="#contact">Get in touch!</a>
      </section>
    </div>

    <!-- Contact Section -->
    <div class="bg-base-100">
      <section class="container py-20">
        <h2 id="contact" class="font-heading text-4xl font-bold">
          &#x1F4DE; Schedule a call
        </h2>
        <p class="mt-2">
          Let's discuss your needs and find optimum solution for you.
        </p>
        <p>Just choose a time that suits you with the button below.</p>
        <a
          class="btn btn-primary mt-6"
          onclick="Calendly.initPopupWidget({url: 'https://calendly.com/jacovan/30min'});return false;"
          >Schedule a call</a
        >

        <h2 class="font-heading text-4xl font-bold mt-10">
          Just have a question?
        </h2>
        <p class="mt-2">
          I'd love to hear from you. Fill in the contact form below and I'll get
          back to you.
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
