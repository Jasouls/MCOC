<template>
  <div class="aside">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four" v-show="$store.state.isBackTopShow" @click="toTop"></div>
  </div>
</template>
<script>
export default {
  methods: {
    toTop() {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="less" scoped>
.aside {
  width: 47px;
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  .one {
    width: 100%;
    height: 47px;
    margin: 10px 0;
    background: url('../../../assets/images/home/fixed.png') no-repeat 0 0;
    transition: 0.5s;
    &:hover {
      background-position-x: -63px;
    }
  }
  .two {
    width: 100%;
    height: 47px;
    margin: 10px 0;
    background: url('../../../assets/images/home/fixed.png') no-repeat 0 -70px;
    transition: 0.5s;
    &:hover {
      background-position-x: -63px;
    }
  }
  .three {
    width: 100%;
    height: 47px;
    margin: 10px 0;
    background: url('../../../assets/images/home/fixed.png') no-repeat 0 -140px;
    transition: 0.5s;
    &:hover {
      background-position-x: -63px;
    }
  }
  .four {
    width: 100%;
    height: 47px;
    margin: 10px 0;
    background: url('../../../assets/images/home/fixed.png') no-repeat 0 -210px;
    transition: 0.5s;
    &:hover {
      background-position-x: -63px;
    }
  }
}
</style>
