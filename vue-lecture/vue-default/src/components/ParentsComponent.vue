<template lang="">
  <div>
    <h1>Parents Component</h1>
    <button @click="onParentsClick">상위 엘리먼트</button>
    <ChildComponent ref="child_component" @send-msg="sendMsg"/>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  computed: {
    msg() {
      console.log(1, this.$refs)
      console.log(2, this.$refs.child_component)
      return this.$refs?.child_component?.msg || '';
    }
  },
  methods: {
    onParentsClick() {
      console.log(this.$refs?.child_component?.msg);
      this.$refs.child_component.$refs.child_btn.click();
      this.$refs.child_component.childMethod();
      this.$refs.child_component.msg = 'parents msg';
      console.log(this.$refs.child_component);
    },
    sendMsg(text) {
      console.log(text)
    }
  }
}
</script>

<style lang="">
  
</style>