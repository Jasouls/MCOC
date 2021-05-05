<template>
  <div class="load">
    <Header></Header>
    <Logo></Logo>
    <Title></Title>
    <Footer></Footer>
    <Background></Background>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Header from '@/components/current/load/Header.vue'
import Logo from '@/components/current/load/Logo.vue'
import Title from '@/components/current/load/Title.vue'
import Footer from '@/components/current/load/Footer.vue'
import Background from '@/components/current/load/Background.vue'
import Bottom from '@/components/current/bottom/Bottom.vue'
export default {
  components: {
    Header,
    Logo,
    Title,
    Footer,
    Background,
    Bottom
  },
  beforeMount() {
    this.$store.commit('isTopShow', false)
  }
}
</script>
<style lang="less" scoped>
.load {
  min-width: 1024px;
}
</style>
