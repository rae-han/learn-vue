<template>
  <div>
    <h2>Child Component</h2>
    <button @click="onChildClick" ref="child_btn">하위 엘리먼트</button>
  </div>
</template>
<script>
export default {
  name: '',
  methods: {
    onChildClick() {
      console.log('this is child component');
    },
    childMethod() {
      console.log('this is child method')
    }
  },
}
</script>
<style>
  
</style>