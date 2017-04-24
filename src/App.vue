<template>
  <div id="app">
    <!-- Use router-link to avoid page reload -->
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <!-- the router outlet where all matched components will be view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
