<template>
  <div class="home">
    <!-- <ParentsComponent></ParentsComponent> -->
    <CountComponent></CountComponent>
    <TodosComponent></TodosComponent>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import CountComponent from '@/components/CountComponent.vue';
import TodosComponent from '@/components/TodosComponent.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // ParentsComponent,
    CountComponent,
    TodosComponent,
  }
}
</script>
