<template>
  <div class="py-10">
    <template v-if="games.length">
      <GameList v-if="showListGame" />

      <div v-else>Overview</div>
    </template>

    <GameList v-else />
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      games: [],
      showListGame: false,
    };
  },
};
</script>
