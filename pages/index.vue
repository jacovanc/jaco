<script lang="ts" setup>
defineOgImageScreenshot({
  selector: "#hero",
  alt: "Social Share image for Jaco's website",
});
</script>

<template>
  <!-- Hero Section -->
  <section
    id="hero"
    class="flex items-center justify-center bg-base-200 h-screen min-h-[700px] max-h-[820px] sm:min-h-[540px] sm:max-h-[450px] py-20"
  >
    <!-- Opening Statement -->
    <!-- <h1 class="text-2xl font-heading font-bold text-primary">
        Empower Your Business to Fully Own Its Digital Presence
      </h1> -->

    <!-- Introduction -->
    <div
      class="container max-w-full w-96 sm:w-full sm:flex sm:flex-row sm:items-center sm:gap-10 sm:justify-center"
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
            <p class="text-xl font-sans font-bold">Hi, I'm Jaco! 👋</p>
          </div>
        </div>
      </div>
      <div class="sm:pb-6 w-80 md:w-96 max-w-full">
        <h2 class="text-3xl font-sans font-bold">
          Your <span class="text-secondary">Web Specialist</span> committed to
          helping you succeed online
        </h2>
        <p class="mt-2">
          Don't just settle for a website. Build a
          <span class="text-secondary font-bold">digital presence</span> that
          you
          <span class="text-secondary font-bold">fully own</span>
        </p>
        <a class="btn btn-accent mt-6" href="#packages">View Packages</a>
      </div>
    </div>
  </section>

  <div class="">
    <section id="introduction" class="container py-20">
      <h2 class="font-heading text-4xl font-bold">
        Clear introduction statement about me and what I do
      </h2>
      <p class="mt-2 mb-2">
        Brief but clear introduction statement about me and what I do. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
    </section>

    <!-- Digital Presence Section -->
    <section id="digital-presence" class="container py-20">
      <h2 class="font-heading text-4xl font-bold">
        Take Charge of Your Digital Presence
      </h2>
      <p class="mt-2 mb-2">
        Ditch the constraints of third-party platforms. Own your website, own
        your future.
      </p>

      <ul class="flex flex-wrap gap-4 mt-6">
        <li
          class="flex-grow border bg-secondary bg-opacity-5 shadow-lg p-4 border-secondary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-xl">Complete Control</strong>
          <strong class="text-secondary text-lg"
            >Your website, your rules.</strong
          >
          Modify, upgrade, or change as you grow, free from platform limitations
          and vendor lock-ins.
        </li>
        <li
          class="flex-grow border p-4 bg-primary bg-opacity-5 shadow-lg border-primary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-xl">Growth-Ready</strong>
          <strong class="text-primary text-lg">Evolve</strong> your website in
          tandem with your business needs,
          <strong class="text-primary text-lg"
            >without starting from scratch</strong
          >
        </li>
        <li
          class="flex-grow border p-4 bg-secondary bg-opacity-5 shadow-lg border-secondary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-xl">Vendor Independence</strong>
          <strong class="text-secondary text-lg">Break free</strong> from the
          confines of platforms like Wix.
          <strong class="text-secondary text-lg">Embrace design freedom</strong
          >, enhanced functionality, and portability.
        </li>
        <!-- More list items here -->
      </ul>

      <a class="btn btn-accent mt-6" href="#contact">Contact me!</a>
    </section>
  </div>
  <!-- Packages Section -->
  <section id="packages" class="bg-base-200 py-20">
    <div class="container text-center sm:text-left md:text-center">
      <h2 class="font-heading text-4xl font-bold">New Website Packages</h2>
      <p class="mt-2 mb-2">
        Ditch the constraints of third-party platforms. Own your website, own
        your future.
      </p>
    </div>

    <div class="container lg:max-w-[1200px] mt-6 md:mt-12">
      <div
        class="flex flex-row gap-4 sm:gap-2 mt-6 flex-wrap md:flex-nowrap lg:justify-center items-center sm:items-stretch mb-4 sm:mb-2 justify-center"
      >
        <!-- Starter Package -->
        <Package
          class="max-w-[370px] sm:max-w-[300px] lg:max-w-[370px] md:scale-95 lg:scale-100 md:rotate-[-2deg] md:-mr-4 lg:mr-0"
          :packageName="'🌱 Starter Package'"
          :listItems="[
            'User-friendly WordPress',
            'Use an existing theme',
            'Deployed and ready for your content',
          ]"
          :infoList="[
            {
              key: 'Support',
              value: '6 months ongoing support & hosting included.',
            },
            {
              key: 'Ideal For',
              value:
                'New online ventures; personal sites, small businesses, basic e-commerce.',
            },
          ]"
          :price="'£1500'"
        />

        <!-- Growth Package -->
        <Package
          class="max-w-[370px] sm:max-w-[300px] lg:max-w-[370px] md: md:scale-105 lg:scale-110 z-10 md:-mr-4 lg:mr-0"
          :packageName="'🌟 Growth Package'"
          :listItems="[
            'Implemented based on your designs or wireframes',
            'Performant custom theme for your needs',
          ]"
          :infoList="[
            {
              key: 'Support',
              value: '6 months ongoing support & hosting included.',
            },
            {
              key: 'Ideal For',
              value: 'Businesses ready to make a unique digital statement.',
            },
          ]"
          :price="'£4000'"
          :color="'secondary'"
        />

        <!-- Expansion Package -->
        <Package
          class="max-w-[370px] sm:max-w-none sm:w-full lg:max-w-[370px] lg:rotate-[2deg] md:scale-95 lg:scale-100 md:rotate-[2deg]"
          :packageName="'🚀 Expansion Package'"
          :listItems="[
            'Advanced custom solutions',
            'SPA/PWA',
            'Any bespoke functionalities.',
          ]"
          :infoList="[
            {
              key: 'Support',
              value: '6 months ongoing support & hosting included.',
            },
            {
              key: 'Ideal For',
              value:
                'Businesses looking for sophisticated, high-end web solutions.',
            },
          ]"
          :price="'£6000'"
        />
      </div>

      <!-- Custom Path -->
      <Package
        class="max-w-[370px] sm:max-w-none sm:w-full md:max-w-[500px] md:mt-10 lg:mt-16 m-auto"
        :packageName="'✨ Custom Path'"
        :listItems="['Unique requirements or larger-scale projects.']"
        :infoList="[
          {
            key: 'Fully bespoke',
            value: 'Get in touch to talk about your project.',
          },
        ]"
        :color="'accent'"
      />
    </div>
  </section>

  <div class="bg-base-100">
    <!-- Additional Services Section -->
    <section id="additional-services" class="container py-20">
      <h2 class="font-heading text-4xl font-bold">Additional Services</h2>
      <p class="mt-2 mb-2">
        I'm here to help you get the most out of your website.
      </p>
      <ul class="tick-list mt-6">
        <li>
          <strong class="text-secondary">SEO Advice:</strong> Boost your site's
          visibility and draw more traffic with expert SEO strategies.
        </li>
        <li>
          <strong class="text-secondary">Content Creation:</strong> Captivate
          your audience with professionally crafted content that resonates with
          your brand's voice.
        </li>
        <li>
          <strong class="text-secondary">Website Maintenance:</strong> Keep your
          site running smoothly with regular updates and maintenance.
        </li>
        <li>
          <strong class="text-secondary">Advanced Analytics Setup:</strong>
          Gain valuable insights into your site's performance and user behavior,
          by tracking specific interactions.
        </li>
      </ul>
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
              <span class="font-bold text-xl">Get in touch!</span> <br />
              Contact me to arrange a video call, where we will discuss your
              needs in detail
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
              Once you're happy with the proposal, I'll send you a contract and
              kick start the development process.
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
              <span class="font-bold text-xl">Launch</span> <br />
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
        <ul class="tick-list mt-6">
          <li>
            <strong class="text-secondary">Beginner-Friendly:</strong> I offer
            clear, straightforward guidance, making web development accessible
            for everyone.
          </li>
          <li>
            <strong class="text-secondary">Flexible Solutions:</strong> My
            services are tailored to adapt and grow with your business, ensuring
            longevity and relevance.
          </li>
          <li>
            <strong class="text-secondary">Long-Term Support:</strong> You'll
            receive dedicated support and hosting for 6 months, with the option
            for extended assistance.
          </li>
          <li>
            <strong class="text-secondary">Client-Centric Approach:</strong>
            Your needs and goals are at the forefront of every decision,
            ensuring a solution that truly reflects your vision.
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
          :faqItems="[
            {
              question: 'How do I get started with my new website?',
              answer:
                'Contact me and we\'ll discuss your needs to find the perfect package for you.',
            },
            {
              question: 'Can I upgrade my website package in the future?',
              answer:
                'Absolutely! Your website can grow and evolve with your business...',
            },
            {
              question: 'What kind of ongoing support do you offer?',
              answer:
                'I provide 6 months of support and hosting with all my services...',
            },
            {
              question: 'Do you provide training on how to use my new website?',
              answer:
                'Yes, I offer guidance to help you manage and update your site confidently.',
            },
          ]"
        />

        <p class="mt-2">Have more questions?</p>
        <a class="btn btn-accent mt-4" href="#contact">Get in touch!</a>
      </section>
    </div>

    <!-- Contact Section -->
    <div class="bg-base-100">
      <section class="container py-20">
        <h2 id="contact" class="font-heading text-4xl font-bold">
          Let me know what you're thinking!
        </h2>
        <p class="mt-2">
          Send me your questions, needs, or just say hi! I'd love to hear from
          you.
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
