import {createStore} from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {

  },
  mutations: {
    increment(state) {
      state.count = state.count+1;
    }
  },
  actions: {

  },
})

export default store;