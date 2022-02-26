<template>
  <div class="flex min-h-screen">
    <TheNavBar class="hidden lg:block" />

    <div class="flex-1">
      <TheHeader class="bg-white" />

      <div class="relative h-(screen-55) lg:h-(screen-72) overflow-auto">
        <main class="container">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>
