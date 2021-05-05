<template>
  <div>
    <Background></Background>
    <Newscenter></Newscenter>
    <Nav></Nav>
    <router-view></router-view>
    <Bottom></Bottom>
    <Aside></Aside>
  </div>
</template>
<script>
import Background from '@/components/current/news/Background.vue'
import Bottom from '@/components/current/bottom/Bottom.vue'
import Aside from '@/components/current/fixed/Aside.vue'
import Newscenter from '@/components/current/news/Newscenter.vue'
import Nav from '@/components/common/news/Nav.vue'
export default {
  components: {
    Background,
    Bottom,
    Aside,
    Newscenter,
    Nav
  }
}
</script>
