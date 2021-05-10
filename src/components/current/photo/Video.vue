<template>
  <div class="video">
    <div class="animation">
      <div class="title">
        <h2>动漫漫画</h2>
      </div>
      <hr />
      <ul>
        <li v-for="data in animatelist" :key="data.encrId" @click="toJump(data.linkUrl)">
          <div></div>
          <img :src="data.thumbnail" alt="">
          <p>{{data.infoTitle}}</p>
        </li>
        <li class="more" @click="moreAni1">
          <main>查看更多</main>
        </li>
      </ul>
    </div>
    <div class="game">
      <div class="title">
        <h2>游戏视频</h2>
      </div>
      <hr />
      <ul>
        <li v-for="data in gamelist" :key="data.encrId" @click="toJump(data.linkUrl)">
          <div></div>
          <img :src="data.thumbnail" alt="">
          <p>{{data.infoTitle}}</p>
        </li>
        <li class="mores" @click="moreAni2">
          <main>查看更多</main>
        </li>
      </ul>
    </div>
    <div class="hero">
      <div class="title">
        <h2>英雄视频</h2>
      </div>
      <hr />
      <ul>
        <li v-for="data in herolist" :key="data.encrId" @click="toJump(data.linkUrl)">
          <div></div>
          <img :src="data.thumbnail" alt="">
          <p>{{data.infoTitle}}</p>
        </li>
        <li class="mores" @click="moreAni3">
          <main>查看更多</main>
        </li>
      </ul>
    </div>
    <div class="image">
      <div class="title">
        <h2>壁纸</h2>
      </div>
      <hr />
      <ul>
        <li v-for="data in imglist" :key="data.encrId" @click="toJump(data.linkUrl)">
          <img :src="data.thumbnail" alt="">
          <p>{{data.infoTitle}}</p>
        </li>
        <li class="mores" @click="moreAni4">
          <main>查看更多</main>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {request11,request12,request13,request14} from '@/network/request'
export default {
  data () {
    return {
      animatelist:[],
      gamelist:[],
      herolist:[],
      imglist:[],
      current1:1,
      current2:1,
      current3:1,
      current4:1
    }
  },
  mounted () {
    request11({
      url:'/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_1&pageSize=5&pageNum=1'
    }).then(
      res => {
        this.animatelist = res
      }
    )
    request12({
      url:'/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_2&pageSize=5&pageNum=1'
    }).then(
      res => {
        this.gamelist = res
      }
    )
    request13({
      url:'/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_3&pageSize=5&pageNum=1'
    }).then(
      res => {
        this.herolist = res
      }
    )
    request14({
      url:'/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_4&pageSize=5&pageNum=1'
    }).then(
      res => {
        this.imglist = res
      }
    )
  },
  methods: {
    moreAni1(){
      this.current1++
      request11({
        url:`/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_1&pageSize=5&pageNum=${this.current1}`
      }).then(
        res => {
          this.animatelist = [...this.animatelist,...res]
        }
      )
    },
    moreAni2(){
      this.current2++
      request12({
        url:`/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_2&pageSize=5&pageNum=${this.current2}`
      }).then(
        res => {
          this.gamelist = [...this.gamelist,...res]
        }
      )
    },
    moreAni3(){
      this.current3++
      request13({
        url:`/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_3&pageSize=5&pageNum=${this.current3}`
      }).then(
        res => {
          this.herolist = [...this.herolist,...res]
        }
      )
    },
    moreAni4(){
      this.current4++
      request14({
        url:`/api/get/media?lang=zh-cn&gameCode=mcoc&columnAlias=media_4&pageSize=5&pageNum=${this.current4}`
      }).then(
        res => {
          this.imglist = [...this.imglist,...res]
        }
      )
    },
    toJump(data){
      window.location.href = data
    }
  }
}
</script>
<style lang="less" scoped>
.common {
  width: 1280px;
  margin: 0 auto;
  margin-top: 20px;
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
  ul {
    width: 1280px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      display: flex;
      justify-content: center;
      width: 406px;
      height: 232px;
      margin: 15px 5px;
      border: 1px solid #3b3b3b;
      position: relative;
      img{
        width: 100%;
        display: block;
      }
      &:hover {
        border-color: #eebc12;
        box-shadow: 0 0 10px 2px #eebc12;
        cursor: pointer;
        p {
          color: #eebc12;
        }
      }

      &.mores {
        main {
          line-height: 232px;
          font-size: 24px;
          color: blueviolet;
        }
      }
      p {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        line-height: 42px;
      }
      div {
        position: absolute;
        width: 100px;
        height: 50px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 10px;
        overflow: hidden;
        background: url('../../../assets/images/photo/play.png') no-repeat -18px -18px;
      }
    }
  }
}
.video {
  width:100%;
  background-color: black;
  color: white;
  .animation {
    width: 1280px;
    margin: 0 auto;
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
    ul {
      width: 1280px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        display: flex;
        justify-content: center;
        width: 623px;
        height: 332px;
        margin: 15px 5px;
        border: 1px solid #3b3b3b;
        position: relative;
        img{
          display: block;
          width: 100%;
        }
        &:hover {
          border-color: #eebc12;
          box-shadow: 0 0 10px 2px #eebc12;
          cursor: pointer;
          p {
            color: #eebc12;
          }
        }
        &.more {
          main {
            line-height: 332px;
            font-size: 24px;
            color: blueviolet;
          }
        }
        p {
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          font-size: 24px;
          line-height: 60px;
        }
        div {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100px;
          height: 50px;
          border-radius: 10px;
          overflow: hidden;
          background: url('../../../assets/images/photo/play.png') no-repeat -18px -18px;
        }
      }
    }
  }
  .game {
    .common();
    ul {
      li {
        &.one {
          background: url('../../../assets/images/photo/game1.jpg') no-repeat;
          background-size: 100% 100%;
        }
        div {
          width: 80px;
          height: 40px;
          border-radius: 10px;
          overflow: hidden;
          background: url('../../../assets/images/photo/play.png') no-repeat -30px -23px;
        }
      }
    }
  }
  .hero {
    .common();
    ul {
      li {
        &.one {
          background: url('../../../assets/images/photo/hero1.jpg') no-repeat;
          background-size: 100% 100%;
        }
        div {
          width: 80px;
          height: 40px;
          border-radius: 10px;
          overflow: hidden;
          background: url('../../../assets/images/photo/play.png') no-repeat -30px -23px;
        }
      }
    }
  }
  .image {
    .common();
    ul {
      li {
        &.one {
          background: url('../../../assets/images/photo/image1.jpg') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
