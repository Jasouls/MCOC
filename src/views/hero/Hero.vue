<template>
  <div>
    <Background></Background>
    <Navs></Navs>
    <router-view></router-view>
    <Bottom></Bottom>
    <Aside></Aside>
  </div>
</template>
<script>
import Background from '@/components/current/hero/Background.vue'
import Bottom from '@/components/current/bottom/Bottom.vue'
import Aside from '@/components/current/fixed/Aside.vue'
import Navs from '@/components/current/hero/Navs.vue'
export default {
  components: {
    Background,
    Bottom,
    Aside,
    Navs
  }
}
</script>
