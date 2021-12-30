<template>
  <div>
    <div>{{computedTodos}}</div>
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
    }
  },
  created() {
    console.log(this.$store.state.todos)
    console.log(this.computedTodos);
  }
}
</script>

<style>

</style>