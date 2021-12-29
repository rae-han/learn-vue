<template>
  <div>
    <h1>Count Component</h1>
    <h2>Count: {{count}}</h2>
    <h2>MapCount: {{mapStateCount}}</h2>
    <h2>countAlias: {{countAlias}}</h2>
    <button @click="increment">increament</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      mapStateCount: state => state.count,
      countAlias: 'count'
    }),
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