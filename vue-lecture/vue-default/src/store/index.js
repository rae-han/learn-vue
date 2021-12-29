import {createStore} from 'vuex';

const store = createStore({
  state: {
    count: 0
  },
  getters: {
    doubleCount(state) {
      return state.count*2;
    }
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