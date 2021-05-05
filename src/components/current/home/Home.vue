<template>
  <div>
    <Background></Background>
    <Logo></Logo>
    <Title></Title>
    <Footer></Footer>
  </div>
</template>
<script>
import Background from '@/components/current/home/Background.vue'
import Logo from '@/components/current/load/Logo.vue'
import Title from '@/components/current/load/Title.vue'
import Footer from '@/components/current/load/Footer.vue'
export default {
  components: {
    Background,
    Logo,
    Title,
    Footer
  }
}
</script>
<style lang="less" scoped></style>
