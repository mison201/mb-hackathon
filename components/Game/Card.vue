<template>
  <BaseBlock class="flex flex-col space-y-5 items-center justify-center h-[260px] w-[205px]">
    <div class="flex flex-col space-y-2 items-center">
      <div class="w-20 h-20 rounded-full relative overflow-hidden">
        <img :src="game.avatar" alt="" srcset="" />
      </div>

      <div class="text-body-1 font-medium text-gray-700">
        {{ game.name }}
      </div>
    </div>

    <BaseButton class="text-body-2 font-medium" @click="selectCurrentGame">Select</BaseButton>
  </BaseBlock>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    async selectCurrentGame() {
      this.$store.commit('game/setCurrentGame', this.game);
      this.$store.commit('game/setShowConfig', false);
    },
  },
};
</script>
