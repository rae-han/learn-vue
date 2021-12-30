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
    },
    insertTodoItem(state, todo) {
      state.todos = state.todos.concat(todo);
    }
  },
  actions: {
    insertTodo(context, name) {
      console.log(context);

      const id = context.state.todos[context.state.todos.length-1].id+1;

      const newTodo = {
        id,
        done: false,
        name,
      }
      
      context.commit('insertTodoItem', newTodo);
    }
  }
}

export default moduleTodos;