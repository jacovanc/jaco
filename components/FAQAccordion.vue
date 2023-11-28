<template>
  <div class="join join-vertical w-full mt-4 bg-base-100">
    <div
      class="collapse collapse-arrow join-item border border-primary"
      v-for="(item, index) in faqItems"
      :key="index"
    >
      <input type="radio" :name="radioGroupName" :id="`faq-item-${index}`" />
      <label for="`faq-item-${index}`" class="collapse-title text-lg font-bold">
        {{ item.question }}
      </label>
      <div class="collapse-content">
        <p v-html="item.answer"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQAccordion",
  data() {
    return {
      radioGroupName: `faq-accordion-${Math.random()
        .toString(36)
        .substr(2, 9)}`,
    };
  },
  props: {
    faqItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
