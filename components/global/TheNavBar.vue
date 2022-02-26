<template>
  <div
    class="w-[274px] max-h-screen !flex flex-col border-r border-r-primary-background dark:bg-gray-900/70 dark:shadow-r-gray-800 z-50 bg-gray-800"
  >
    <div class="flex items-center bg-gray-900 text-white h-[55px] lg:h-[72px]">
      <div class="px-3 text-xl font-medium">Admin</div>
    </div>

    <GameCurrent />

    <div class="h-(screen-92) lg:h-(screen-108) flex flex-col justify-between overflow-auto pt-10">
      <TheRouters />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavBar',
};
</script>
