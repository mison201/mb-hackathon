<template>
  <div class="pt-10 flex flex-col space-y-2 items-center">
    <template v-if="game">
      <div class="w-20 h-20 rounded-full relative overflow-hidden">
        <img :src="game.avatar" alt="" srcset="" />
      </div>

      <div class="text-body-1 font-medium text-gray-300">
        {{ game.name }}
      </div>
    </template>

    <template v-else>
      <div class="w-20 h-20 rounded-full bg-gray-100/10 relative overflow-hidden"></div>

      <div class="text-body-1 font-medium text-gray-300">--</div>
    </template>

    <BaseGhostButton class="text-body-2 font-medium" @click="$store.commit('game/setShowConfig', true)">
      View games
    </BaseGhostButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      game: 'game/currentGame',
    }),
  },
};
</script>
