<template>
  <div>
    <h1>Count Component</h1>
    <h2>Count: {{count}}</h2>
    <button @click="increment">increament</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  }
}
</script>

<style>

</style>