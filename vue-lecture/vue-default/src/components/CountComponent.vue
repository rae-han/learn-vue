<template>
  <div>
    <h1>Count Component</h1>
    <h2>CounputedCount: {{counputedCount}}</h2>
    <h2>MapCount: {{mapStateCount}} {{count}}</h2>
    <h2>CountAlias: {{countAlias}}</h2>
    <h2>computedDoubleCount: {{computedDoubleCount}}</h2>
    <button @click="increment">increament</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      mapStateDoubleCount: state => state.count*2,
      countAlias: 'count',
    }),
    ...mapState(['count']),
    counputedCount() {
      return this.$store.state.count;
    },
    computedDoubleCount() {
      return this.$store.getters.doubleCount;
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