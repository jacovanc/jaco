<template>
  <!-- Header -->
  <header id="header" class="container"></header>
  <!-- Main Content -->
  <div id="main-content" class="container p-4">
    <!-- Hero Section -->
    <section id="hero" class="">
      <!-- Opening Statement -->
      <!-- <h1 class="text-2xl font-heading font-bold text-primary">
        Empower Your Business to Fully Own Its Digital Presence
      </h1> -->

      <!-- Introduction -->
      <div
        class="mt-10 sm:flex sm:flex-row sm:items-center sm:gap-6 sm:justify-center"
      >
        <div>
          <div class="w-96 max-w-full sm:w-72 md:w-80">
            <div
              class="mb-3 mx-auto overflow-hidden rounded-2xl shadow-lg max-w-full relative pt-[100%]"
            >
              <img
                src="~/assets/images/me.jpg"
                alt="Jaco's Portrait"
                class="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            class="bg-white rounded p-2 inline-block relative ml-3 shadow-lg speech-bubble"
          >
            <p class="text-xl font-sans font-bold">Hi, I'm Jaco! 👋</p>
          </div>
        </div>
        <div class="sm:pb-6 w-80 md:w-96 max-w-full">
          <h2 class="text-2xl font-sans font-bold">
            Your <span class="text-secondary">Web Specialist</span> committed to
            helping you succeed online
          </h2>
          <p class="mt-2">
            Don't just settle for a website. Build a
            <span class="text-secondary font-bold">digital presence</span> that
            you
            <span class="text-secondary font-bold">fully own.</span>
          </p>
          <a class="btn btn-accent mt-4" href="#packages">View Packages</a>
        </div>
      </div>
    </section>

    <!-- Digital Presence Section -->
    <section id="digital-presence" class="mt-10">
      <h2 class="font-heading text-2xl font-bold text-primary">
        Take Charge of Your Digital Presence
      </h2>
      <p class="mt-2 mb-2">
        Ditch the constraints of third-party platforms. Own your website, own
        your future. Here's how:
      </p>

      <ul class="flex flex-wrap gap-4 mt-6">
        <li
          class="flex-grow border bg-primary bg-opacity-5 shadow-lg p-4 border-primary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-lg">Complete Control</strong>
          <strong class="text-primary">Your website, your rules.</strong>
          Modify, upgrade, or change as you grow, free from platform limitations
          and vendor lock-ins.
        </li>
        <li
          class="flex-grow border p-4 bg-secondary bg-opacity-5 shadow-lg border-secondary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-lg">Growth-Ready</strong>
          <strong class="text-secondary">Evolve</strong> your website in tandem
          with your business needs,
          <strong class="text-secondary">without starting from scratch</strong>
        </li>
        <li
          class="flex-grow border p-4 bg-secondary bg-opacity-5 shadow-lg border-secondary rounded-lg w-full tn:w-5/12 md:w-3/12 xl:w-1/5"
        >
          <strong class="block mb-2 text-lg">Vendor Independence</strong>
          <strong class="text-secondary">Break free</strong> from the confines
          of platforms like Wix.
          <strong class="text-secondary">Embrace design freedom</strong>,
          enhanced functionality, and portability.
        </li>
        <!-- More list items here -->
      </ul>

      <a class="btn btn-accent mt-4" href="#contact-form">Contact me!</a>
    </section>

    <!-- Packages Section -->
    <section id="packages" class="mt-10">
      <h2>New Website Packages</h2>

      <!-- Starter Package -->
      <div class="package">
        <h3>🌱 Starter Package</h3>
        <p><strong>Price:</strong> Starting at £1500</p>
        <ul>
          <li>User-friendly WordPress</li>
          <li>Use an existing theme</li>
          <li>Deployed and ready for your content</li>
        </ul>
        <p>
          <strong>Support:</strong> 6 months ongoing support & hosting included.
        </p>
        <p>
          <strong>Ideal For:</strong> New online ventures – personal sites,
          small businesses, basic e-commerce.
        </p>
        <a href="#contact-form">Begin your journey</a>
      </div>

      <!-- Growth Package -->
      <div class="package">
        <h3>🌟 Growth Package</h3>
        <p><strong>Price:</strong> Starting at £4000</p>
        <ul>
          <li>Implemented based on your designs or wireframes</li>
          <li>Performant custom theme for your needs</li>
        </ul>
        <p>
          <strong>Support:</strong> 6 months ongoing support & hosting included.
        </p>
        <p>
          <strong>Ideal For:</strong> Businesses ready to make a unique digital
          statement.
        </p>
        <a href="#contact-form">Grow with us</a>
      </div>

      <!-- Expansion Package -->
      <div class="package">
        <h3>🚀 Expansion Package</h3>
        <p><strong>Price:</strong> Starting at £5500</p>
        <ul>
          <li>Advanced custom solutions</li>
          <li>SPA/PWA</li>
          <li>Any bespoke functionalities.</li>
        </ul>
        <p>
          <strong>Support:</strong> 6 months ongoing support & hosting included.
        </p>
        <p>
          <strong>Ideal For:</strong> Businesses looking for sophisticated,
          high-end web solutions.
        </p>
        <a href="#contact-form">Expand your horizons</a>
      </div>

      <!-- Custom Path -->
      <div class="custom-path">
        <h3>✨ Custom Path</h3>
        <p>
          <strong>For:</strong> Unique requirements or larger-scale projects.
        </p>
        <p>
          <strong>Support:</strong> 6 months ongoing support & hosting included.
        </p>
        <a href="#contact-form">Craft your path</a>
      </div>
    </section>

    <!-- Additional Services Section -->
    <section id="additional-services">
      <h2>Additional Services</h2>
      <ul>
        <li>
          <strong>SEO Advice:</strong> Boost your site's visibility and draw
          more traffic with expert SEO strategies.
        </li>
        <li>
          <strong>Content Creation:</strong> Captivate your audience with
          professionally crafted content that resonates with your brand's voice.
        </li>
        <li>
          <strong>Website Maintenance:</strong> Keep your site running smoothly
          with regular updates and maintenance.
        </li>
        <li>
          <strong>Advanced Analytics Setup:</strong> Gain valuable insights into
          your site's performance and user behavior, by tracking specific
          interactions.
        </li>
      </ul>
      <a href="#contact-form">Interested in our Additional Services?</a>
    </section>

    <!-- Why Choose Jaco Section -->
    <section id="why-choose-jaco">
      <h2>Why Choose Jaco?</h2>
      <ul>
        <li>
          <strong>Beginner-Friendly:</strong> I offer clear, straightforward
          guidance, making web development accessible for everyone.
        </li>
        <li>
          <strong>Flexible Solutions:</strong> My services are tailored to adapt
          and grow with your business, ensuring longevity and relevance.
        </li>
        <li>
          <strong>Long-Term Support:</strong> You'll receive dedicated support
          and hosting for 6 months, with the option for extended assistance.
        </li>
        <li>
          <strong>Client-Centric Approach:</strong> Your needs and goals are at
          the forefront of every decision, ensuring a solution that truly
          reflects your vision.
        </li>
      </ul>
    </section>

    <section id="process">
      <h2 class="font-heading text-2xl font-bold text-primary">
        What does the process look like?
      </h2>
      <p class="mt-2 mb-2">
        Here's a brief overview of the steps involved in creating your new
        website, from start to finish.
      </p>
      <ul class="steps steps-vertical mt-2">
        <li class="step step-secondary">Get in touch!</li>
        <!-- We should probably add some info explaining each section. Perhaps collapsable like the faqs -->
        <li class="step step-secondary">Arrange a call</li>
        <li class="step">Development</li>
        <li class="step">Feedback and adjustments</li>
        <li class="step">Quality Assurance</li>
        <li class="step">Launch</li>
      </ul>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="mt-10">
      <h2 class="font-heading text-2xl font-bold text-primary">
        Frequently Asked Questions (FAQ)
      </h2>
      <div class="join join-vertical w-full mt-4">
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="my-accordion" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            How do I get started with my new website?
          </div>
          <div class="collapse-content">
            <p>
              <a href="#contact-form">Contact me</a> and we'll discuss your
              needs to find the perfect package for you.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="my-accordion" />
          <div class="collapse-title text-xl font-medium">
            Can I upgrade my website package in the future?
          </div>
          <div class="collapse-content">
            <p>
              Absolutely! Your website can grow and evolve with your business.
              You can even take your code with you to another developer.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="my-accordion" />
          <div class="collapse-title text-xl font-medium">
            What kind of ongoing support do you offer?
          </div>
          <div class="collapse-content">
            <p>
              I provide 6 months of support and hosting with all my services,
              with options for extended assistance.
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="my-accordion" />
          <div class="collapse-title text-xl font-medium">
            Do you provide training on how to use my new website?
          </div>
          <div class="collapse-content">
            <p>
              Yes, I offer guidance to help you manage and update your site
              confidently.
            </p>
          </div>
        </div>
      </div>

      <p class="mt-2">Have more questions?</p>
      <a class="btn btn-accent mt-4" href="#contact-form">Get in touch!</a>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Ready to start building your online presence with a website that’s
        uniquely yours?
      </p>
      <a href="#contact-form">Contact me today</a>
    </section>
  </div>
  <!-- End of Main Content -->
</template>

<style>
.speech-bubble {
  top: -25px;
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
