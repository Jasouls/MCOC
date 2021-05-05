<template>
  <div class="title">
    <div class="type"></div>
    <div class="btn"></div>
    <div class="download">
      <div class="word">扫一扫下载游戏</div>
      <div class="code">
        <img src="../../../assets/images/load/code.png" alt="" />
      </div>
      <div class="downbtn">
        <div class="apple"></div>
        <div class="android"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.title {
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 321px;
  box-sizing: border-box;
  padding-bottom: 5px;
  .type {
    width: 680px;
    height: 115px;
    background: url('../../../assets/images/load/type.png');
    background-repeat: no-repeat;
    margin: 0 auto;
  }
  .btn {
    width: 117px;
    height: 102px;
    background: url('../../../assets/images/load/btn.png');
    background-repeat: no-repeat;
    margin: 20px auto;
    &:hover {
      background-position-y: -102px;
      cursor: pointer;
    }
  }
  .download {
    width: 471px;
    height: 181px;
    box-sizing: border-box;
    padding: 18px 28px;
    display: flex;
    margin: 0 auto;
    background: url('../../../assets/images/load/download.png') no-repeat;
    .word {
      width: 10px;
      font-size: 10px;
      color: white;
      line-height: 16px;
    }
    .code {
      width: 147px;
      height: 147px;
      border-radius: 10px;
      background-color: white;
      margin: 0 16px;
      img {
        width: 127px;
        height: 127px;
        padding: 10px;
      }
    }
    .downbtn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .apple,
      .android {
        width: 220px;
        height: 66px;
      }
      .apple {
        background: url('../../../assets/images/load/downbtn.png') no-repeat;
        &:hover {
          background-position-x: -235px;
          cursor: pointer;
        }
      }
      .android {
        background: url('../../../assets/images/load/downbtn.png') no-repeat 0 -74px;
        &:hover {
          background-position-x: -235px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
