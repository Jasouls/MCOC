<template>
  <div>
    <Background></Background>
    <Logo></Logo>
    <Title></Title>
    <Recommend></Recommend>
    <Bottom></Bottom>
    <Aside></Aside>
  </div>
</template>
<script>
import Background from '@/components/current/home/Background.vue'
import Logo from '@/components/current/home/Logo.vue'
import Title from '@/components/current/home/Title.vue'
import Recommend from '@/components/common/home/Recommend.vue'
import Bottom from '@/components/current/bottom/Bottom.vue'
import Aside from '@/components/current/fixed/Aside.vue'
export default {
  components: {
    Background,
    Logo,
    Title,
    Recommend,
    Bottom,
    Aside
  },
  beforeMount() {
    this.$store.commit('isTopShow', true)
  }
}
</script>
