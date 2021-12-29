<template>
  <div>
    <div>{{computedTodos}}</div>
  </div>
</template>

<script>
export default {
  computed: {
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