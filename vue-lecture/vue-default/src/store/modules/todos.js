const moduleTodos = {
  namespace: true,
  state: () => ({
    todos: [
      { id: 1, done: true, name: 'first todo item' },
      { id: 2, done: false, name: 'second todo item' },
      { id: 3, done: true, name: 'third todo item' },
    ]
  }),
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
  },
  mutations: {

  },
  actions: {

  }
}

export default moduleTodos;