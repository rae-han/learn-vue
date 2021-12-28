<template>
  <div>
    <h2>Child Component</h2>
    <button @click="onChildClick" ref="child_btn">하위 엘리먼트</button>
    <p>{{msg}}</p>
    <button @click="sendChild">자식 컴포넌트</button>
    <button @click="changeData">부모 정보 동기화</button>
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
    },
    sendChild() {
      this.$emit('send-msg', this.msg)
    },
    changeData() {
      this.msg = 'from children to parents';
    }
  },
}
</script>
<style>
  
</style>