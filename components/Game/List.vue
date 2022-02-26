<template>
  <div>
    <div class="w-full text-xl font-mediums mb-5">Games: {{ games.length }}</div>

    <div class="flex flex-wrap gap-5">
      <BaseBlock class="flex items-center justify-center h-[260px] max-w-[205px]">
        <BaseButton @click="addNewGame">Add game</BaseButton>
      </BaseBlock>

      <template v-for="game in games">
        <GameCard :key="game.id" />
      </template>
    </div>

    <GameAddNew :visible.sync="showModalAddGame" />
  </div>
</template>

<script>
export default {
  name: 'GameList',

  data() {
    return {
      games: [],
      showModalAddGame: false,
    };
  },

  methods: {
    addNewGame() {
      this.showModalAddGame = true;
    },
  },
};
</script>
