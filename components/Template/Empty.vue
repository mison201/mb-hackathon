<template>
  <div class="w-full h-full mt-15 flex flex-col space-y-5 items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
      <div class="text-lg text-gray-700 font-medium">No Templates</div>
      <div class="mt-1 text-gray-600 text-body-1">You have no templates, lets add one!</div>
    </div>

    <BaseButton class="text-body-2 font-medium" @click="$emit('addNewTemplate')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>

      Add template
    </BaseButton>
  </div>
</template>

<script>
export default {};
</script>
