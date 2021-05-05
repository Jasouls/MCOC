<template>
  <div class="navs">
    <h2>英雄介绍</h2>
    <div class="typelist">
      <router-link to="/hero/all" tag="div">全部</router-link>
      <router-link to="/hero/first" tag="div">
        <i class="one"></i>宇宙系
      </router-link>
      <router-link to="/hero/second" tag="div">
        <i class="two"></i>科技系
      </router-link>
      <router-link to="/hero/third" tag="div">
        <i class="three"></i>变异系
      </router-link>
      <router-link to="/hero/fourth" tag="div">
        <i class="four"></i>格斗系
      </router-link>
      <router-link to="/hero/fifth" tag="div">
        <i class="five"></i>生化系
      </router-link>
      <router-link to="/hero/sixth" tag="div">
        <i class="six"></i>神秘系
      </router-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
.navs {
  width: 1190px;
  color: white;
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(-50%);
  h2 {
    font-size: 36px;
  }
  .typelist {
    margin-top: 80px;
    height: 74px;
    width: 100%;
    display: flex;
    div {
      flex: 1;
      line-height: 74px;
      font-size: 22px;
      display: flex;
      border-top: 5px solid #131313;
      box-sizing: border-box;
      justify-content: center;
      background: linear-gradient(to bottom, #131313, #212121);
      &.active {
        background: #0d0d0d;
      }
      &:hover {
        background: #0d0d0d;
        border-top: 5px solid rgb(0, 247, 255);
        color: rgb(0, 247, 255);
      }
      i {
        width: 32px;
        height: 32px;
        display: block;
        transform: translateY(70%);
        &.one {
          background: url('../../../assets/images/hero/type/1.png') no-repeat;
          margin-right: 4px;
        }
        &.two {
          background: url('../../../assets/images/hero/type/2.png') no-repeat;
          margin-right: 0px;
        }
        &.three {
          background: url('../../../assets/images/hero/type/3.png') no-repeat;
          margin-right: -10px;
        }
        &.four {
          background: url('../../../assets/images/hero/type/4.png') no-repeat;
          margin-right: -4px;
        }
        &.five {
          background: url('../../../assets/images/hero/type/5.png') no-repeat;
        }
        &.six {
          background: url('../../../assets/images/hero/type/6.png') no-repeat;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
