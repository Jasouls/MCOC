<template>
  <div class="nav">
    <router-link to="/news/now" tag="div" class="item">最新</router-link>
    <router-link to="/news/doc" tag="div" class="item">英雄档案</router-link>
    <router-link to="/news/information" tag="div" class="item"
      >新闻资讯</router-link
    >
    <router-link to="/news/board" tag="div" class="item">游戏公告</router-link>
  </div>
</template>
<style lang="less" scoped>
.nav {
  width: 100%;
  height: 52px;
  padding: 10px 0;
  background-color: #09090b;
  color: #8e8e8e;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  .item {
    width: 262px;
    height: 52px;
    box-sizing: border-box;
    font-size: 20px;
    margin: 0 10px;
    border: 1px solid red;
    line-height: 52px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  .active {
    color: #eebc12;
    border-color: #eebc12;
    box-shadow: 0 0 10px 2px #eebc12;
  }
}
</style>
