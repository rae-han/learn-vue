<template>
  <div>
    <h2>Child Component</h2>
    <button @click="onChildClick" ref="child_btn">하위 엘리먼트</button>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      msg: 'children msg'
    }
  },
  methods: {
    onChildClick() {
      console.log('this is child component');
      this.msg = 'children msg'
    },
    childMethod() {
      console.log('this is child method')
    }
  },
}
</script>
<style>
  
</style>