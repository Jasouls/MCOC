<template>
  <div class="topbar" ref="fix">
    <div class="left">
      <div class="logo">
        <img ref="logo" src="../../../assets/images/topbar/logo.png" alt="" />
      </div>
      <router-link to="/home" tag="div" class="home">
        首页
      </router-link>
      <router-link to="/news" tag="div" class="news">
        新闻
      </router-link>
      <router-link to="/hero" tag="div" class="hero">
        英雄
      </router-link>
      <router-link to="/photo" tag="div" class="photo">
        视频图片
      </router-link>
    </div>
    <div class="right">
      <div class="other">
        客服支持
        <div class="code">
          <img src="../../../assets/images/topbar/code.jpg" alt="" />
        </div>
      </div>
      <div class="lang">
        简体中文 v
        <ul class="select">
          <li>English</li>
        </ul>
      </div>
      <div class="download">
        下载游戏
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.onscroll = this.handleScroll
  },
  methods: {
    handleScroll() {
      let scrollHeight =
        document.body.scrollTop || document.documentElement.scrollTop
      if (scrollHeight >= 100) {
        this.$refs.fix.style.position = 'fixed'
        this.$refs.fix.style.top = 0 + 'px'
        this.$refs.fix.style.width = '100%'
        this.$refs.fix.style.zIndex = 3
        this.$refs.logo.style.left = '0px'
        this.$refs.logo.style.top = '0px'
      } else {
        this.$refs.fix.style.position = 'absolute'
        this.$refs.fix.style.top = 50 + 'px'
        this.$refs.fix.style.width = '1720px'
        this.$refs.logo.style.left = '-30px'
        this.$refs.logo.style.top = '-15px'
      }
      if (scrollHeight >= 900) {
        this.$store.commit('backTopShow', true)
      } else {
        this.$store.commit('backTopShow', false)
      }
    }
  },
  beforeDestroy() {
    window.onscroll = null
  }
}
</script>
<style lang="less" scoped>
.topbar {
  width: 1720px;
  height: 89px;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 50px;
  z-index: 1;
  background: linear-gradient(to bottom, #181818, #292929);
  justify-content: space-between;
  .left {
    display: flex;
    color: white;
    font-size: 18px;
    line-height: 89px;
    .logo {
      width: 180px;
      border-right: 1px solid #131313;
      position: relative;
      img {
        position: absolute;
        left: -30px;
        top: -15px;
      }
    }
    .home,
    .news,
    .hero {
      width: 118px;
      text-align: center;
      border-right: 1px solid #131313;
    }
    .photo {
      width: 154px;
      text-align: center;
      border-right: 1px solid #131313;
    }
    div:hover {
      color: #eebc12;
      cursor: pointer;
    }
    .active {
      color: #eebc12;
      border-bottom: 5px solid #eebc12;
    }
  }
  .right {
    display: flex;
    color: white;
    font-size: 16px;
    line-height: 89px;
    .other {
      width: 104px;
      text-align: center;
      border-right: 1px solid #131313;
      .code {
        width: 200px;
        height: 200px;
        position: absolute;
        background-color: white;
        z-index: 2;
        display: none;
        img {
          width: 100%;
        }
      }
      &:hover div {
        display: block;
      }
    }
    .lang {
      width: 120px;
      text-align: center;
      margin-right: 250px;
      .select {
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        z-index: 2;
        width: 120px;
        font-size: 18px;
        display: none;
      }
      &:hover ul {
        display: block;
        color: white;
        li:hover {
          background-color: #eebc12;
        }
      }
    }
    .download {
      width: 260px;
      font-size: 30px;
      position: absolute;
      right: -18px;
      transform: translateY(-2px);
      padding: 3px;
      text-align: center;
      background: url('../../../assets/images/topbar/download.png') no-repeat;
    }
    div:hover {
      color: #eebc12;
      cursor: pointer;
    }
  }
}
</style>
