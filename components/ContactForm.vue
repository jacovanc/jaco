<template>
  <form
    @submit.prevent="submitForm"
    class="p-6 rounded-lg shadow-lg bg-base-200 bg-opacity-100 mb-20 mt-6"
  >
    <div class="form-control w-full">
      <label class="label" for="name">
        <span class="label-text">Name</span>
      </label>
      <input
        type="text"
        id="name"
        placeholder="Your name"
        v-model="name"
        class="input input-bordered w-full border-primary"
        required
      />
    </div>

    <div class="form-control w-full mt-4">
      <label class="label" for="email">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        id="email"
        placeholder="Your email"
        v-model="email"
        class="input input-bordered w-full border-primary"
        required
      />
    </div>

    <div class="form-control w-full mt-4">
      <label class="label" for="message">
        <span class="label-text">Message</span>
      </label>
      <textarea
        id="message"
        placeholder="Hey Jaco..."
        v-model="message"
        class="textarea textarea-bordered h-24 border-primary"
        required
      ></textarea>
    </div>

    <div class="mt-6">
      <button type="submit" class="btn btn-accent w-auto">Send Message</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      console.log("hit");
      try {
        const response = await $fetch("/api/contact", {
          method: "POST",
          body: {
            name: this.name,
            email: this.email,
            message: this.message,
          },
        });
        console.log("Response:", response);
      } catch (error) {
        console.log("Error:", error);
      }
    },
  },
};
</script>
