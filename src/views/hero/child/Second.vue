<template>
  <div class="second">
    <ul class="herolist">
      <li v-for="data in datalist" :key="data.heroId">
        <img :src="data.logo" alt="" />
        <div class="other">
          <div class="icon">
            <img :src="data.icon" alt="" />
          </div>
          <div class="name">
            <h3>{{ data.name }}</h3>
            <p>{{ data.type }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { request6 } from '@/network/request'
export default {
  data() {
    return {
      datalist: []
    }
  },
  mounted() {
    request6({
      url: '../../../../static//herolist.json'
    }).then(res => {
      this.datalist = res
    })
  }
}
</script>
<style lang="less" scoped>
.second {
  width: 1190px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 480px;
  left: 50%;
  transform: translateX(-50%);
  .herolist {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    li {
      width: 16%;
      margin: 0 2.5px;
      position: relative;
      margin-bottom: 12px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid rgb(153, 0, 255);
      &:hover {
        border-color: #eebc12;
        box-shadow: 0 0 10px 2px #eebc12;
      }
      & > img {
        width: 100%;
      }
      .other {
        position: absolute;
        width: 100%;
        height: 45px;
        box-sizing: border-box;
        padding: 10px;
        background-color: black;
        bottom: 0;
        color: white;
        display: flex;
        .icon {
          margin-right: 5px;
        }
        .name {
          text-align: initial;
          h3 {
            font-size: 14px;
          }
          p {
            font-size: 14px;
            color: #eebc12;
          }
        }
      }
    }
  }
}
</style>
