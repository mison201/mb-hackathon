<template>
  <div class="flex flex-col space-y-3">
    <!-- Home page -->
    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 !mt-0 px-5 text-body-2 text-gray-300 capitalize text-neutral-darkest hover:bg-gray-600 hover:bg-opacity-50"
      exact-active-class="!text-white font-bold bg-gray-600/50"
      :to="{ name: 'index' }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>

      <div class="h-[20px] leading-[22px]">Overview</div>
    </NuxtLink>

    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 !mt-0 px-5 text-body-2 text-gray-300 capitalize text-neutral-darkest hover:bg-gray-600 hover:bg-opacity-50"
      exact-active-class="!text-white font-bold bg-gray-600/50"
      :to="{ name: 'templates' }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>

      <div class="h-[20px] leading-[22px]">Templates</div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'TheRouters',
  // router-link-active bg-gray-600/50 flex cursor-pointer py-2 hover:bg-gray-600 hover:bg-opacity-50
};
</script>
