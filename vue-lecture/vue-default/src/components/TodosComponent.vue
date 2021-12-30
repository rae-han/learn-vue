<template>
  <div>
    <div>computedTodos: {{computedTodos}}</div>
    <!-- <div>computedGettersTodos: {{computedGettersTodos}}</div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
    }),
    computedTodos() {
      return this.$store.state.todos.todos
    },
    computedGettersTodos() {
      return this.$store.getters.todos.doneTodos;
    }
  },
  created() {
  }
}
</script>

<style>

</style>