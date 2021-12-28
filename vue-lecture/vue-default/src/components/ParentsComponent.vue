<template lang="">
  <div>
    <h1>Parents Component</h1>
    <button @click="onParentsClick">상위 엘리먼트</button>
    <ChildComponent ref="child_component" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  methods: {
    onParentsClick() {
      this.$refs.child_component.$refs.child_btn.click();
      this.$refs.child_component.childMethod();
    }
  }
}
</script>
<style lang="">
  
</style>