<template>
  <div class="newscenter">
    <div class="title">
      <h2>新闻中心</h2>
      <p>NEWS</p>
    </div>
    <hr />
    <ul class="newslist">
      <li v-for="data in datalist" :key="data.encrId">
        <img :src="data.thumbnail" alt="" />
        <div>{{ data.infoTitle }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { request2 } from '@/network/request'
export default {
  data() {
    return {
      datalist: []
    }
  },
  mounted() {
    request2({
      url:
        '/api/get/news/home?lang=zh-cn&gameCode=mcoc&columnAlias=home_se&pageSize=6&pageNum=1'
    }).then(res => {
      this.datalist = res
    })
  }
}
</script>
<style lang="less" scoped>
.newscenter {
  position: absolute;
  top: 520px;
  width: 1200px;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  .title {
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    h2 {
      font-size: 40px;
      height: 60px;
    }
    p {
      font-size: 20px;
      margin-left: 20px;
      line-height: 56px;
    }
  }
  hr {
    border: 4px solid #343434;
  }
  .newslist {
    display: flex;
    justify-content: space-between;
    li {
      margin-top: 6px;
      background-color: black;
      width: 380px;
      height: 250px;
      transition: 0.4s;
      border: 1px solid #3b3b3b;
      img {
        width: 100%;
      }
      div {
        line-height: 40px;
      }
      &:hover {
        margin-top: -8px;
      }
    }
  }
}
</style>
