<template>
  <div class="recommend">
    <div class="title">
      <h2>新闻推荐</h2>
      <p>查看更多>></p>
    </div>
    <ul class="message">
      <li v-for="data in messages" :key="data.encrId">
        <img :src="data.thumbnail" alt="" />
        <p>{{ data.infoTitle }}</p>
      </li>
    </ul>
    <div class="game">
      <h2>游戏特色</h2>
      <p>强大的超级英雄阵容，开启终极漫威冠军之旅！</p>
    </div>
    <ul class="special">
      <li class="one">
        <div>
          <h3>与好友搭配</h3>
          <p>与你的好友及其他召唤者组队，</p>
          <p>组建最强联盟</p>
          <p>想测试你们的胆识吗？</p>
          <p>在战争里与全世界的其他联盟战斗吧！</p>
        </div>
        <img src="../../../assets/images/home/hero/hulktwo.png" alt="" />
      </li>
      <li class="two">
        <div>
          <h3>组建你的终极英雄战队</h3>
          <p>从漫威宇宙集结一批勇敢的超级英雄和超级反派来组队,</p>
          <p>可用英雄包括：钢铁侠、绿巨人、金刚狼、暴风女、</p>
          <p>星爵、卡魔拉、蜘蛛侠、死侍、万磁王以及更多！</p>
        </div>
        <img src="../../../assets/images/home/hero/black.png" alt="" />
      </li>
      <li class="three">
        <div>
          <h3>收集超级英雄和超级反派</h3>
          <p>收集、升级和灵活管理你的超级英雄/超级反派，</p>
          <p>好的队伍成员关系和羁绊（可从漫威官网页面查到）</p>
          <p>让你能获得更多队友加成。</p>
          <p></p>
        </div>
        <img src="../../../assets/images/home/hero/wakanda.png" alt="" />
      </li>
      <li class="four">
        <div>
          <h3>探索和战斗</h3>
          <p>经典漫威风格的刺激剧情，</p>
          <p>与众多英雄和反派角色在位于漫威宇宙的各处标志性场景展开激战。</p>
          <p>探索副本地图，并使用转为移动端平台开发的操作系统，</p>
          <p>进行紧张刺激的格斗。</p>
        </div>
        <img src="../../../assets/images/home/hero/dragon.png" alt="" />
      </li>
      <div class="spider"></div>
      <div class="green"></div>
    </ul>
    <div class="carousel">
      <div class="hero">
        <h2>英雄一览</h2>
        <p>强大的超级英雄阵容，开启终极漫威冠军之旅！</p>
      </div>
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper main">
          <div class="swiper-slide">
            <div class="info">
              <h2>钢铁侠(无限战争)</h2>
              <div><i class="one"></i><span>科技系</span></div>
              <p>基础能力：分子护甲、焚化、冲击、破甲</p>
              <hr />
              <p>人物介绍：</p>
              <p>
                成为复仇者联盟队伍的中坚力量后，托尼·史塔克发现自己和地球最强的英雄们之间有了分歧。然而现在面对着迫在眉睫的致命威胁，史塔克唯有求同存异，召集一些老面孔和新盟友，与他共同作战。
              </p>
            </div>
            <img src="../../../assets/images/home/info/stark.png" alt="" />
          </div>
          <div class="swiper-slide">
            <div class="info">
              <h2>惊奇队长</h2>
              <div><i class="two"></i><span>宇宙系</span></div>
              <p>基础能力：中毒免疫、破甲、能量吸收、双星引燃、直接伤害</p>
              <hr />
              <p>人物介绍：</p>
              <p>
                因飞船坠毁在地球上而失去过去记忆的空军飞行员——卡罗尔·丹弗斯正缓慢地揭开她过去的秘密。被克里人解救并重生为尊贵克里族战士的卡罗尔，在星际指挥官迈-威尔的引导下学会了控制她新的新力量。当卡罗尔·丹弗斯再次来到地球时，她已成为全宇宙最强英雄之一，而她却发现地球正夹杂在两大外星种族的银河战争之间。
              </p>
            </div>
            <img src="../../../assets/images/home/info/sss.png" alt="" />
          </div>
          <div class="swiper-slide">
            <div class="info">
              <h2>蜘蛛侠(史塔克加强版)</h2>
              <div><i class="one"></i><span>科技系</span></div>
              <p>
                基础能力：蜘蛛人刚萌芽的蜘蛛感应授予他3%的被动机率以闪避即将到来的攻击。
              </p>
              <hr />
              <p>人物介绍：</p>
              <p>
                一般像彼得·帕克这个年纪的孩子放了学不是跑回家打电子游戏就是老老实实的做作业但纽约市人见人爱的蜘蛛侠能是一般人么？彼得给新套装加载了高科技蛛网发射器和托尼·史塔克的超赞强化配件为了更好地保护自己的家乡皇后区。然而一个新的威胁死灰复燃并导致了纽约市的乱战现在帕克必须认清自己使命的背后“责任”二字的真正含义。
              </p>
            </div>
            <img src="../../../assets/images/home/info/piter.png" alt="" />
          </div>
          <div class="swiper-slide">
            <div class="info">
              <h2>浩克(诸神黄昏)</h2>
              <div><i class="three"></i><span>生化系</span></div>
              <p>基础能力：中毒免疫、治疗封禁、眩晕、衰弱</p>
              <hr />
              <p>人物介绍：</p>
              <p>
                恐怕只有浩克自己清楚为何自己会来到萨卡尔，并在竞技场中战斗的。进入竞技场的浩克立刻成为了万人迷！独特的狂暴招式、充满魅力的演出风格，再加上能够粉碎宇宙间最强生物的无人能挡的力量，都让浩克成为众人心中的大英雄。毕竟比粉碎更爽的事情，就是在观众们嗨起来的时候适时多锤几拳啊！
              </p>
            </div>
            <img src="../../../assets/images/home/info/hulk.png" alt="" />
          </div>
          <div class="swiper-slide">
            <div class="info">
              <h2>美国队长(无限战争)</h2>
              <div><i class="three"></i><span>生化系</span></div>
              <p>基础能力：流血、眩晕、狂怒、动力势能</p>
              <hr />
              <p>人物介绍：</p>
              <p>
                自反对索科维亚协议以来，超级士兵失去了他的盾牌，并被迫转入地下活动。但在新老朋友的帮助下，他得到了重新整顿，并得以继续暗中从事他认为对的事——逐一完成秘密任务来拯救世界。
              </p>
            </div>
            <img src="../../../assets/images/home/info/captain.png" alt="" />
          </div>
          <div class="swiper-slide">
            <div class="info">
              <h2>雷神索尔(诸神黄昏)</h2>
              <div><i class="four"></i><span>格斗系</span></div>
              <p>基础能力：能量获取、自动格挡、眩晕、破甲</p>
              <hr />
              <p>人物介绍：</p>
              <p>
                当潜隐了数年的远古邪恶从它的枷锁中挣脱后，阿斯加德就卷入了混沌的旋涡中。当雷神之锤被毁灭后，索尔唯一的希望就是觉醒体内的战士之魂，化腐朽为神奇。在仙宫陷落，人民最需要他的时候，雷神索尔必须意识到作为领袖的真实含义。
              </p>
            </div>
            <img src="../../../assets/images/home/info/souer.png" alt="" />
          </div>
          <div class="swiper-slide">
            <div class="info">
              <h2>洛基</h2>
              <div><i class="five"></i><span>神秘系</span></div>
              <p>基础能力：益窃取，诅咒，超能力，眩晕</p>
              <hr />
              <p>人物介绍：</p>
              <p>
                我知道他们怎么看我，冰霜巨人之子，或是称我为恶作剧之神，但是那似乎欠缺了一点……想象力。不是吗？看看收养我的这个家庭，我的父亲奥丁和我的哥哥雷神索尔都是如此的愚钝与无趣。善良？还是邪恶？亦或是高贵？少废话！不要叫我恶作剧之神，我仅仅是是透过这个世界的表面看到了它的本质。称我为梦想家！称我为洛基！
              </p>
            </div>
            <img src="../../../assets/images/home/info/loki.png" alt="" />
          </div>
          <div class="swiper-slide">
            <div class="info">
              <h2>猎鹰</h2>
              <div><i class="four"></i><span>科技系</span></div>
              <p>基础能力：柔软、流血、降准、破甲</p>
              <hr />
              <p>人物介绍：</p>
              <p>
                山姆·威尔逊从空军伞兵救援队退役后继续从事帮助退伍老兵的工作，在协助传奇的美国队长适应现代的生活的过程中，很快成为了队长亲近的朋友。通过使用实验性的翅膀装备，威尔逊成为了翱翔天空的猎鹰。
              </p>
            </div>
            <img src="../../../assets/images/home/info/fly.png" alt="" />
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
      </div>
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/1.png" alt="" />
            <div>钢铁侠</div>
          </div>
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/2.png" alt="" />
            <div>惊奇队长</div>
          </div>
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/3.png" alt="" />
            <div>蜘蛛侠</div>
          </div>
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/4.png" alt="" />
            <div>浩克</div>
          </div>
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/5.png" alt="" />
            <div>美国队长</div>
          </div>
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/6.png" alt="" />
            <div>雷神</div>
          </div>
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/7.png" alt="" />
            <div>洛基</div>
          </div>
          <div class="swiper-slide">
            <img src="../../../assets/images/home/header/8.png" alt="" />
            <div>猎鹰</div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <h2>还记得你年少时的超级英雄梦吗？</h2>
      <h3>现在就玩！</h3>
      <div>立即下载</div>
    </div>
  </div>
</template>
<script>
import { request1 } from '@/network/request'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    request1({
      url:
        '/api/get/news/home?lang=zh-cn&gameCode=mcoc&columnAlias=home_se&pageSize=6&pageNum=1'
    }).then(res => {
      this.messages = res
    })
    var galleryTop = new Swiper('.gallery-top', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 10
    })
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    })
    galleryTop.params.control = galleryThumbs
    galleryThumbs.params.control = galleryTop
  }
}
</script>
<style lang="less" scoped>
.recommend {
  color: white;
  background: url('../../../assets/images/home/main.jpg') no-repeat;
  padding-top: 20px;
  position: relative;
  .title {
    width: 1200px;
    margin: 0 auto;
    line-height: 54px;
    position: relative;
    h2 {
      font-size: 36px;
      text-align: center;
      background: url('../../../assets/images/home/titlestyle.png') no-repeat
        center;
    }
    p {
      position: absolute;
      right: 0;
      top: 0;
      color: #eebc12;
    }
  }
  .message {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 372px;
      height: 248px;
      background-color: #0e1012;
      border: 1px solid #3f3f3f;
      margin-top: 28px;
      img {
        width: 100%;
      }
      p {
        line-height: 50px;
      }
      &:hover {
        border-color: #eebc12;
        box-shadow: 0 0 10px 2px #eebc12;
      }
    }
  }
  .game {
    width: 1200px;
    margin: 184px auto 72px;
    line-height: 54px;
    h2 {
      font-size: 36px;
      text-align: center;
      background: url('../../../assets/images/home/titlestyle.png') no-repeat
        center;
    }
    p {
      text-align: center;
      color: #999;
    }
  }
  .special {
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 20px;
    li {
      width: 100%;
      height: 356px;
      margin-bottom: 40px;
      position: relative;
      div {
        position: absolute;
        z-index: 2;
        padding: 50px;
        top: 50%;
        transform: translateY(-50%);
        h3 {
          font-size: 42px;
          font-weight: bold;
          line-height: 60px;
        }
        p {
          line-height: 24px;
          font-size: 16px;
        }
      }
      img {
        position: absolute;
        bottom: 0;
      }
      &.one {
        background: url('../../../assets/images/home/1.jpg');
        div {
          text-align: left;
          h3 {
            color: #ffcf5b;
          }
        }
        img {
          left: 300px;
        }
      }
      &.two {
        background: url('../../../assets/images/home/2.jpg');
        div {
          right: 0;
          text-align: right;
          h3 {
            color: #e28fff;
          }
        }
        img {
          right: 500px;
        }
      }
      &.three {
        background: url('../../../assets/images/home/3.jpg');
        div {
          text-align: left;
          h3 {
            color: #bcaeff;
          }
        }
        img {
          left: 300px;
        }
      }
      &.four {
        background: url('../../../assets/images/home/4.jpg');
        div {
          right: 0;
          text-align: right;
          h3 {
            color: #ffe92e;
          }
        }
        img {
          bottom: -90px;
          right: 500px;
          z-index: 2;
        }
      }
    }
  }
  .spider {
    width: 450px;
    height: 474px;
    background: url('../../../assets/images/home/hero/park.png');
    position: absolute;
    top: 1000px;
    left: -100px;
  }
  .green {
    width: 311px;
    height: 382px;
    background: url('../../../assets/images/home/hero/green.png') no-repeat;
    position: absolute;
    top: 2200px;
    right: 0px;
  }
  .carousel {
    width: 100%;
    background-color: black;
    padding-top: 10px;
    position: relative;
    .hero {
      width: 1200px;
      margin: 50px auto 20px;
      line-height: 54px;
      h2 {
        font-size: 36px;
        text-align: center;
        background: url('../../../assets/images/home/titlestyle.png') no-repeat
          center;
      }
      p {
        text-align: center;
        color: #999;
      }
    }
    .swiper-container {
      background: url('../../../assets/images/home/swiper.jpg') no-repeat;
      .main {
        .swiper-slide {
          display: flex;
          justify-content: center;
          .info {
            width: 500px;
            text-align: initial;
            margin-top: 100px;
            h2 {
              font-size: 46px;
              color: #eebc12;
              line-height: 60px;
            }
            div {
              font-size: 28px;
              font-weight: bold;
              display: flex;
              margin: 20px 0;
              span {
                line-height: 32px;
              }
              i {
                display: block;
                width: 32px;
                height: 32px;
                &.one {
                  background: url('../../../assets/images/home/type/1.png')
                    no-repeat;
                }
                &.two {
                  background: url('../../../assets/images/home/type/2.png')
                    no-repeat;
                }
                &.three {
                  background: url('../../../assets/images/home/type/3.png')
                    no-repeat;
                }
                &.four {
                  background: url('../../../assets/images/home/type/4.png')
                    no-repeat;
                }
                &.five {
                  background: url('../../../assets/images/home/type/5.png')
                    no-repeat;
                }
              }
            }
            hr {
              border: 1px solid #3d3d3d;
            }
            p {
              font-size: 16px;
              line-height: 32px;
            }
          }
          img {
            height: 900px;
          }
        }
      }
    }
    .gallery-thumbs {
      width: 100%;
      height: 200px;
      position: absolute;
      opacity: 0.8;
      bottom: 0;
      box-sizing: border-box;
      padding: 10px 0;
      .swiper-wrapper {
        .swiper-slide {
          width: 20%;
          height: 100%;
          opacity: 0.6;
          div {
            line-height: 50px;
          }
        }
        .swiper-slide-active {
          opacity: 1;
        }
      }
    }
  }
  .banner {
    width: 100%;
    height: 760px;
    background: url('../../../assets/images/home/banner.jpg');
    overflow: hidden;
    h2 {
      margin-top: 200px;
      font-size: 44px;
      font-weight: bold;
      line-height: 100px;
    }
    h3 {
      font-size: 40px;
      line-height: 100px;
    }
    div {
      width: 446px;
      height: 83px;
      line-height: 83px;
      font-size: 36px;
      padding: 5px;
      margin: 0 auto;
      background: url('../../../assets/images/home/btn.png') no-repeat 0 0;
      background-size: 100% 100%;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
