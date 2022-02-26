<template>
  <div class="py-10">
    <GameList v-if="showConfig" />

    <OverviewDashboard v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',

  created() {
    if (this.games.length === 0) {
      this.$store.commit('game/setShowConfig', true);
    }
  },

  data() {
    return {
      showListGame: false,
    };
  },

  computed: {
    ...mapGetters({
      games: 'game/list',
      showConfig: 'game/showConfig',
    }),
  },
};
</script>
