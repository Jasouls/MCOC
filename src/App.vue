<template>
  <div id="app">
    <Topbar v-show="$store.state.isTopbarShow"></Topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '@/components/current/topbar/Topbar.vue'
export default {
  name: 'App',
  components: {
    Topbar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
