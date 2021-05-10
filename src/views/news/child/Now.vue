<template>
  <div class="now">
    <ul class="nowlist">
      <li v-for="data in datalist" :key="data.encrId">
        <img :src="data.thumbnail" alt="" />
        <div>
          <h3>{{ data.infoTitle }}</h3>
          <p class="msg">{{ data.infoSummary }}</p>
          <p class="date">发布日期： {{ data.updateTime }}</p>
        </div>
      </li>
      <div class="loading" @click="loadMore">更多新闻</div>
    </ul>
  </div>
</template>
<script>
import { request3 } from '@/network/request'
export default {
  data() {
    return {
      datalist: [],
      currentPage: 1
    }
  },
  mounted() {
    request3({
      url: `/api/get/news/list?lang=zh-cn&gameCode=mcoc&columnAlias=news&pageSize=10&pageNum=${this.currentPage}`
    }).then(res => {
      this.datalist = res
    })
  },
  methods: {
    loadMore() {
      // 加载更多
      this.currentPage++
      request3({
        url: `/api/get/news/list?lang=zh-cn&gameCode=mcoc&columnAlias=news&pageSize=10&pageNum=${this.currentPage}`
      }).then(res => {
        this.datalist.push(...res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.now {
  width: 100%;
  background-color: #090909;
  .nowlist {
    color: white;
    box-sizing: border-box;
    padding: 100px;
    width: 1200px;
    margin: 0 auto;
    li {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      padding: 20px;
      margin-bottom: 20px;
      background-color: #131212;
      border-top: 1px solid #3b3b3b;
      &:hover {
        cursor: pointer;
        border-color: #eebc12;
        box-shadow: 0 0 10px 2px #eebc12;
        img {
          border: 1px solid #eebc12;
        }
        div {
          h3 {
            color: #eebc12;
          }
        }
      }
      img {
        width: 287px;
        border: 1px solid #3b3b3b;
      }
      div {
        flex: 1;
        text-align: left;
        margin-left: 20px;
        h3 {
          font-size: 20px;
          line-height: 40px;
        }
        .msg {
          font-size: 13px;
          color: #999;
        }
        .date {
          font-size: 14px;
          line-height: 60px;
          color: #999;
        }
      }
    }
    .loading {
      width: 100%;
      height: 54px;
      line-height: 54px;
      font-size: 16px;
      background-color: #1c1c1c;
      margin-top: 50px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
