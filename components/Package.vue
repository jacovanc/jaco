<template>
  <div
    class="package w-full border rounded-lg bg-base-100 shadow-lg"
    :class="`border-${color}`"
  >
    <div class="p-4">
      <h3 class="text-2xl font-bold text-center py-4">
        {{ packageName }}
      </h3>
      <ul class="tick-list mt-3">
        <li v-for="item in listItems" :key="item">{{ item }}</li>
      </ul>
    </div>
    <!-- <div class="bg-opacity-95 p-4 text-base-100" :class="`bg-${color}`"> -->
    <div
      :class="[
        'bg-opacity-95',
        'p-4',
        color ? `bg-${color}` : '',
        color ? 'text-base-100' : '',
      ]"
    >
      <div v-for="info in infoList" :key="info.key" class="mb-4">
        <strong :class="[color ? 'text-white' : 'text-secondary']"
          >{{ info.key }}:</strong
        >
        {{ info.value }}
      </div>
      <div class="text-center flex justify-center gap-4 items-center">
        <p class="" v-if="price">
          <span class="text-sm block">Starting from </span>
          <span
            class="font-bold text-2xl"
            :class="[color ? 'text-white' : 'text-secondary']"
            >{{ price }}</span
          >
        </p>
        <a
          class="btn border shadow-lg"
          :class="[
            color ? `border-white ` : 'border-secondary',
            color ? `bg-white` : 'bg-secondary',
            color ? `text-${color}` : 'text-white',
          ]"
          href="#contact-form"
          >Enquire</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageComponent",
  props: {
    packageName: String,
    listItems: Array,
    infoList: Array, // Array of objects with key-value pairs
    price: String,
    color: {
      type: String,
      default: false,
    },
  },
};
</script>
