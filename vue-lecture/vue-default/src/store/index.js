import {createStore} from 'vuex';

import todos from './modules/todos'

const store = createStore({
  modules: {
    todos
  },
  state() {
    return {
      count: 0
    }
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