<template>
  <div>
    <div class="w-full text-xl font-medium mb-5">Games: {{ games.length }}</div>

    <div class="flex flex-wrap gap-5">
      <div
        class="flex items-center justify-center p-5 border-2 border-dashed border-neutral-lightest rounded-xl h-[260px] w-[205px]"
      >
        <BaseGhostButton class="text-body-2 font-medium" @click="addNewGame">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add game
        </BaseGhostButton>
      </div>

      <template v-for="game in games">
        <GameCard :key="game.id" :game="game" />
      </template>
    </div>

    <GameAddNew :visible.sync="showModalAddGame" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'GameList',

  data() {
    return {
      showModalAddGame: false,
    };
  },

  computed: {
    ...mapGetters({
      games: 'game/list',
    }),
  },

  methods: {
    addNewGame() {
      this.showModalAddGame = true;
    },
  },
};
</script>
