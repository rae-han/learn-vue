<template>
  <div class="home">
    <ParentsComponent></ParentsComponent>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ParentsComponent from '@/components/ParentsComponent.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ParentsComponent,
  }
}
</script>
