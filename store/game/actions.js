export default {
  async addNewGame({ commit }, game) {
    commit('addNewGame', game);
  },
};
