<template>
  <div>
    <div class="w-full capitalize text-xl font-medium mb-5">{{ game.name }} Overview</div>

    <div class="grid grid-cols-4 gap-5">
      <OverviewActivePlayerStatistic />

      <OverviewNewPlayerStatistic />

      <OverviewRevenueStatistic />

      <OverviewTokensTradedStatistic />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      games: 'game/list',
      game: 'game/currentGame',
    }),
  },
};
</script>
