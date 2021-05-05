<template>
  <div class="header">
    <div class="left">
      <a href="/home">进入官网</a>
    </div>
    <div class="right">
      <a href="javascript:;">下载游戏</a>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  line-height: 70px;
  position: absolute;
  z-index: 1;
  display: flex;
  .left {
    flex: 1;
    font-size: 18px;
    a {
      display: block;
      text-decoration: none;
      color: white;
      float: right;
      margin-right: 40px;
      &:hover {
        color: #eebc12;
      }
    }
  }
  .right {
    width: 176px;
    border-left: 4px solid #ad2c2c;
    background-color: #ea3c3c;
    font-size: 22px;
    a {
      display: block;
      text-decoration: none;
      color: white;
      &:hover {
        color: #eebc12;
      }
    }
  }
}
</style>
