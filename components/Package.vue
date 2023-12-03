<template>
  <div class="bg-base-100 rounded-lg">
    <div
      class="package w-full border rounded-lg shadow-lg flex flex-row flex-wrap overflow-hidden sm:h-full"
      :class="[
        color ? `border-${color} dark:border-${color}-light` : 'border-neutral',
      ]"
    >
      <div class="section p-4 sm:w-[250px] flex-grow lg:flex-nogrow">
        <h3 class="text-2xl font-bold text-center py-4">
          {{ packageName }}
        </h3>
        <ul class="my-3 align-middle">
          <li v-for="item in listItems" :key="key" class="my-3 pl-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-[30px] h-6 inline-block align-middle -ml-7 pr-[6px]"
              :class="[
                color
                  ? `text-${color} dark:text-${color}-light`
                  : 'text-secondary dark:text-secondary-light',
              ]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="align-middle inline">{{ item }}</p>
          </li>
        </ul>
      </div>
      <!-- <div class="bg-opacity-95 p-4 text-base-100" :class="`bg-${color}`"> -->
      <!-- make this use flex to fill full with with flex grow when small, but if there is enough space, flex row-->
      <div
        class="section sm:w-[100px] md:w-[150px] flex-grow pt-6 px-4 relative pb-24 mt-2"
        :class="[
          color
            ? `bg-${color} dark:bg-${color}-light bg-opacity-5`
            : 'bg-white-300',
        ]"
      >
        <div v-for="info in infoList" :key="info.key" class="mb-4">
          <strong
            :class="[color ? `text-${color} dark:text-${color}-light` : '']"
            >{{ info.key }}</strong
          >
          {{ info.value }}
        </div>
        <div
          class="text-center flex justify-center gap-4 items-center pt-4 absolute bottom-8 left-0 right-0"
        >
          <p class="" v-if="price">
            <span class="text-sm block">Starting from </span>
            <span
              class="font-bold text-2xl"
              :class="[color ? `text-${color} dark:text-${color}-light` : '']"
              >{{ price }}</span
            >
          </p>
          <a
            class="btn shadow-2xl"
            :class="[
              color ? `border border-${color} ` : '',
              color ? `btn-${color}` : '',
              color ? `shadow-${color}-light` : '',
              // color ? `bg-white` : 'bg-secondary',
              // color ? `text-${color}` : 'text-white',
              color ? `text-white` : 'btn-accent shadow-accent-light',
            ]"
            href="#contact"
            >Enquire</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Package",
  props: {
    packageName: String,
    listItems: Array,
    infoList: Array, // Array of objects with key-value pairs
    price: String,
    color: {
      type: String,
      default: "",
    },
  },
};
</script>
