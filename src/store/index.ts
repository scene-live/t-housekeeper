import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSearch: false,
  },
  mutations: {
    toggle(state) {
      state.showSearch = !state.showSearch;
    },
  },
  actions: {
  },
  modules: {
  },
});
