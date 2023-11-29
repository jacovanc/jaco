<template>
  <form @submit.prevent="submitForm" class="rounded-lg mb-20 mt-6">
    <div v-if="!successMessage">
      <!-- Name Field -->
      <div class="form-control w-full">
        <label class="label" for="name">
          <span class="label-text">Your Name</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          v-model="name"
          :class="[
            'input w-full bg-primary bg-opacity-5',
            nameError ? 'border-error' : 'border-primary',
          ]"
          required
        />
        <div v-if="nameError" class="text-error">{{ nameError }}</div>
      </div>

      <!-- Email Field -->
      <div class="form-control w-full mt-4">
        <label class="label" for="email">
          <span class="label-text">Your Email</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          v-model="email"
          :class="[
            'input w-full bg-primary bg-opacity-5',
            emailError ? 'border-error' : 'border-primary',
          ]"
          required
        />
        <div v-if="emailError" class="text-error">{{ emailError }}</div>
      </div>

      <!-- Message Field -->
      <div class="form-control w-full mt-4">
        <label class="label" for="message">
          <span class="label-text">Message</span>
        </label>
        <textarea
          id="message"
          placeholder="Hey Jaco..."
          v-model="message"
          :class="[
            'textarea h-24 bg-primary bg-opacity-5',
            messageError ? 'border-error' : 'border-primary',
          ]"
          required
        ></textarea>
        <div v-if="messageError" class="text-error">{{ messageError }}</div>
      </div>
      <!-- Submit Button -->
      <div class="mt-6">
        <button type="submit" class="btn btn-accent w-auto" :disabled="loading">
          <span v-if="loading" class="loading loading-spinner"></span>
          Send Message
        </button>
      </div>
    </div>
    <!-- Success Message -->
    <div
      v-if="successMessage"
      class="alert border-success bg-success bg-opacity-10 text-success rounded-lg mt-6"
    >
      {{ successMessage }}
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      message: "",
      nameError: "",
      emailError: "",
      messageError: "",
      successMessage: "",
    };
  },
  methods: {
    async submitForm() {
      // Reset error messages
      this.nameError = this.emailError = this.messageError = "";

      // Simple front-end validation
      if (!this.name) {
        this.nameError = "Name is required.";
      }
      if (!this.email) {
        this.emailError = "Email is required.";
      } else if (!this.validateEmail(this.email)) {
        this.emailError = "Email is not valid.";
      }
      if (!this.message) {
        this.messageError = "Message is required.";
      }

      // If any errors, return early
      if (this.nameError || this.emailError || this.messageError) {
        return;
      }

      try {
        this.loading = true;
        const response = await $fetch("/api/contact", {
          method: "POST",
          body: {
            name: this.name,
            email: this.email,
            message: this.message,
          },
        });

        // Clear form and show success message if needed
        this.name = "";
        this.email = "";
        this.message = "";

        this.successMessage =
          "Message sent successfully! I will be in touch soon.";
        // Handle success - you can update the UI to indicate the message was sent
      } catch (error) {
        if (error.data && error.data.data && typeof error.data === "object") {
          // Server-side validation errors
          this.nameError = error.data.data.name || "";
          this.emailError = error.data.data.email || "";
          this.messageError = error.data.data.message || "";
        } else {
          // Other errors (network issues, server error, etc.)
          console.error("Error:", error);
          this.messageError = "An error occurred while sending the message.";
        }
      }
    },

    validateEmail(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>
