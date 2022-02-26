import _ from 'lodash';

export default {
  setList(state, list) {
    state.list = list;
  },

  setCurrentTemplate(state, template) {
    const _template = _.cloneDeep(template);
    state.template = _template;
  },

  addNewTemplate(state, template) {
    const _list = _.cloneDeep(state.list);
    _list.push(template);

    state.list = _list;
  },
};
