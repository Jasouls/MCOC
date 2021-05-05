<template>
  <div class="video">
    <div class="animation">
      <div class="title">
        <h2>动漫漫画</h2>
      </div>
      <hr />
      <ul>
        <li class="one">
          <div></div>
          <p>X的崛起</p>
        </li>
        <li class="two">
          <div></div>
          <p>北地考察</p>
        </li>
        <li class="three">
          <div></div>
          <p>黑寡妇：血色黎明</p>
        </li>
        <li class="four">
          <div></div>
          <p>来自远方</p>
        </li>
        <li class="five">
          <div></div>
          <p>鼹鼠人的征途</p>
        </li>
        <li class="six">
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
        <li class="one">
          <div></div>
          <p>V27.1版本预告</p>
        </li>
        <li class="two">
          <div></div>
          <p>迄今为止|第一章：崩溃</p>
        </li>
        <li class="three">
          <div></div>
          <p>V25.3版本预告</p>
        </li>
        <li class="four">
          <div></div>
          <p>V25.2版本预告</p>
        </li>
        <li class="five">
          <div></div>
          <p>五周年庆典</p>
        </li>
        <li class="six">
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
        <li class="one">
          <div></div>
          <p>浩克（不朽）</p>
        </li>
        <li class="two">
          <div></div>
          <p>恶煞（不朽）</p>
        </li>
        <li class="three">
          <div></div>
          <p>宇宙恶灵骑士</p>
        </li>
        <li class="four">
          <div></div>
          <p>红魔</p>
        </li>
        <li class="five">
          <div></div>
          <p>天行者</p>
        </li>
        <li class="six">
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
        <li class="one">
          <p>红色守卫</p>
        </li>
        <li class="two">
          <p>暴风女（金字塔X）</p>
        </li>
        <li class="three">
          <p>至尊魔法师</p>
        </li>
        <li class="four">
          <p>鼹鼠人</p>
        </li>
        <li class="five">
          <p>新星</p>
        </li>
        <li class="six">
          <main>查看更多</main>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.common {
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
      align-items: center;
      width: 406px;
      height: 232px;
      margin: 15px 5px;
      border: 1px solid #3b3b3b;
      position: relative;
      &:hover {
        border-color: #eebc12;
        box-shadow: 0 0 10px 2px #eebc12;
        cursor: pointer;
        p {
          color: #eebc12;
        }
      }

      &.six {
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
        font-size: 14px;
        line-height: 42px;
      }
    }
  }
}
.video {
  position: absolute;
  top: 520px;
  width: 1280px;
  color: white;
  left: 50%;
  transform: translateX(-50%);
  .animation {
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
        align-items: center;
        width: 623px;
        height: 332px;
        margin: 15px 5px;
        border: 1px solid #3b3b3b;
        position: relative;
        &:hover {
          border-color: #eebc12;
          box-shadow: 0 0 10px 2px #eebc12;
          cursor: pointer;
          p {
            color: #eebc12;
          }
        }
        &.one {
          background: url('../../../assets/images/photo/video1.jpg') no-repeat;
        }
        &.two {
          background: url('../../../assets/images/photo/video2.jpg') no-repeat;
        }
        &.three {
          background: url('../../../assets/images/photo/video3.jpg') no-repeat;
        }
        &.four {
          background: url('../../../assets/images/photo/video4.jpg') no-repeat;
        }
        &.five {
          background: url('../../../assets/images/photo/video5.jpg') no-repeat;
        }
        &.six {
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
        &.two {
          background: url('../../../assets/images/photo/game2.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.three {
          background: url('../../../assets/images/photo/game3.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.four {
          background: url('../../../assets/images/photo/game4.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.five {
          background: url('../../../assets/images/photo/game5.jpg') no-repeat;
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
        &.two {
          background: url('../../../assets/images/photo/hero2.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.three {
          background: url('../../../assets/images/photo/hero3.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.four {
          background: url('../../../assets/images/photo/hero4.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.five {
          background: url('../../../assets/images/photo/hero5.jpg') no-repeat;
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
        &.two {
          background: url('../../../assets/images/photo/image2.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.three {
          background: url('../../../assets/images/photo/image3.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.four {
          background: url('../../../assets/images/photo/image4.jpg') no-repeat;
          background-size: 100% 100%;
        }
        &.five {
          background: url('../../../assets/images/photo/image5.jpg') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
