<template>
  <div>
    <div>mapStateTodos: {{mapStateTodos}}</div>
    <div>computedStateTodos: {{computedStateTodos}}</div>
    <div>{{this}}</div>
    <div>mapGettersTodos: {{mapGettersTodos}}</div>
    <div>mapGettersTodos: {{doneTodos}}</div>
    <div>computedGettersTodos: {{computedGettersTodos}}</div>
    <ul>
      <li v-for="(todo, idx) in mapGettersTodos" :key="idx">
        <input type="checkbox" v-model="todo.done">
        <span @click="attachDot(todo.id)">{{todo.name}}</span>
      </li>
    </ul>
    <div>
      <input type="text" v-model="todo">
      <button @click="inputTodo">확인</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    ...mapState({
      mapStateTodos: state => state.todos.todos
    }),
    ...mapGetters(['todos/doneTodos']),
    ...mapGetters('todos', ['doneTodos']),
    ...mapGetters({
      mapGettersTodos: 'todos/todos'
    }),
    computedStateTodos() {
      return this.$store.state.todos.todos
    },
    computedGettersTodos() {
      return this['todos/doneTodos']
    }
  },
  created() {
  },
  methods: {
    ...mapMutations({
      addDot: 'todos/addDot'
    }),
    attachDot(id) {
      this.addDot(id);
    },
    inputTodo(id) {
      console.log(this.todo)
    }
  }
}
</script>

<style>

</style>
