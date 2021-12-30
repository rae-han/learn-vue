const moduleTodos = {
  namespaced: true,
  // state() {
  //   return {
  //     todos: [
  //       { id: 1, done: true, name: 'first todo item' },
  //       { id: 2, done: false, name: 'second todo item' },
  //       { id: 3, done: true, name: 'third todo item' },
  //     ]
  //   }
  // },
  state: () => ({
    todos: [
      { id: 1, done: true, name: 'first todo item' },
      { id: 2, done: false, name: 'second todo item' },
      { id: 3, done: true, name: 'third todo item' },
    ]
  }),
  getters: {
    // doneTodos: state => {
    //   return state.todos;
    // },
    todos(state) {
      return state.todos;
    },
    doneTodos(state) {
      return state.todos.filter(todo => todo.done);
    }
  },
  mutations: {
    addDot(state, id) {
      state.todos = state.todos.map(todo => todo.id === id ? { ...todo, name: `${todo.name}.`} : todo);
    }
  },
  actions: {

  }
}

export default moduleTodos;