import _ from 'lodash';

export default {
  setList(state, list) {
    state.list = list;
  },

  setCurrentGame(state, game) {
    const _game = _.cloneDeep(game);
    state.game = _game;
  },

  setShowConfig(state, showConfig) {
    state.showConfig = showConfig;
  },

  addNewGame(state, game) {
    const _list = _.cloneDeep(state.list);
    _list.push(game);

    state.list = _list;
  },
};
