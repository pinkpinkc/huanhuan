<template>
  <!-- 回收信息 -->
  <div id="recover">
    <div class="recover" v-for="(item,index) in recover" :key="index">
      <div class="recover_con">
        <div class="recover_t">
          <h2>{{item.title}}</h2>
          <a href="javascript:;">
            更多
            <i class="iconfont">&#xe625;</i>
          </a>
        </div>
        <div class="recover_m">
          <dl v-for="(value,i) in item.content" :key="i">
            <dt>
              <img :src="value.img" alt>
            </dt>
            <dd>
              <p>{{value.name}}</p>
              <p>
                最高回收价
                <span>{{value.price}}</span>
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="ad">
        <img :src="item.ad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecover",
  data() {
    return {
      recover: [
        {
          title: "苹果系列回收",
          content: [
            {
              img: "images/sh1.png",
              name: "苹果 iPhone XR",
              price: "￥7598"
            },
            {
              img: "images/sh2.png",
              name: "苹果 iPhone X5",
              price: "￥5356"
            },
            {
              img: "images/sh3.png",
              name: "苹果 iPhone X",
              price: "￥6220"
            },
            {
              img: "images/sh4.png",
              name: "苹果 iPhone8 Plus",
              price: "￥4830"
            }
          ],
          ad: "images/recover01.png"
        },
        {
          title: "全新机回收",
          content: [
            {
              img: "images/sh5.png",
              name: "小米",
              price: "￥1980"
            },
            {
              img: "images/sh6.png",
              name: "苹果",
              price: "￥5909"
            },
            {
              img: "images/sh7.png",
              name: "三星",
              price: "￥8316"
            },
            {
              img: "images/sh8.png",
              name: "华为",
              price: "￥7308"
            }
          ],
          ad: "images/recover02.png"
        },
        {
          title: "个人手机回收",
          content: [
            {
              img: "images/sh6.png",
              name: "苹果",
              price: "￥7598"
            },
            {
              img: "images/sh7.png",
              name: "三星",
              price: "￥5356"
            },
            {
              img: "images/sh5.png",
              name: "小米",
              price: "￥6220"
            },
            {
              img: "images/sh8.png",
              name: "华为",
              price: "￥4830"
            }
          ],
          ad: "images/recover03.png"
        },
        {
          title: "国产手机回收",
          content: [
            {
              img: "images/sh5.png",
              name: "小米",
              price: "￥3107"
            },
            {
              img: "images/sh8.png",
              name: "华为",
              price: "￥8990"
            },
            {
              img: "images/sh9.png",
              name: "荣耀",
              price: "￥3668"
            },
            {
              img: "images/sh10.png",
              name: "OPPO",
              price: "￥4509"
            }
          ],
          ad: "images/recover04.png"
        },
        {
          title: "3G手机回收",
          content: [
            {
              img: "images/sh11.png",
              name: "金立",
              price: "￥50"
            },
            {
              img: "images/sh12.png",
              name: "TCL",
              price: "￥5"
            },
            {
              img: "images/sh13.png",
              name: "康佳",
              price: "￥110"
            },
            {
              img: "images/sh14.png",
              name: "VIVO",
              price: "￥360"
            }
          ],
          ad: "images/recover05.png"
        },
        {
          title: "尾货手机回收",
          content: [
            {
              img: "images/sh15.png",
              name: "华为",
              price: "￥10"
            },
            {
              img: "images/sh16.png",
              name: "一加",
              price: "￥20"
            },
            {
              img: "images/sh17.png",
              name: "摩托罗拉",
              price: "￥10"
            },
            {
              img: "images/sh14.png",
              name: "飞利浦",
              price: "￥10"
            }
          ],
          ad: "images/recover05.png"
        },
        {
          title: "统货手机回收",
          content: [
            {
              img: "images/sh15.png",
              name: "三星",
              price: "￥330"
            },
            {
              img: "images/sh16.png",
              name: "苹果",
              price: "￥10"
            },
            {
              img: "images/sh17.png",
              name: "黑莓",
              price: "￥10"
            },
            {
              img: "images/sh14.png",
              name: "多普达",
              price: "￥10"
            }
          ],
          ad: "images/recover08.png"
        },
        {
          title: "热门平板回收",
          content: [
            {
              img: "images/sh18.png",
              name: "华为",
              price: "￥2350"
            },
            {
              img: "images/sh19.png",
              name: "小米",
              price: "￥1388"
            },
            {
              img: "images/sh20.png",
              name: "三星",
              price: "￥1365"
            },
            {
              img: "images/sh21.png",
              name: "苹果",
              price: "￥9369"
            }
          ],
          ad: "images/recover08.png"
        },
        {
          title: "热门笔记本回收",
          content: [
            {
              img: "images/sh22.png",
              name: "苹果",
              price: "￥1997"
            },
            {
              img: "images/sh23.png",
              name: "小米",
              price: "￥5538"
            },
            {
              img: "images/sh24.png",
              name: "华为",
              price: "￥5771"
            },
            {
              img: "images/sh25.png",
              name: "三星",
              price: "￥4225"
            }
          ],
          ad: "images/recover09.png"
        },
        {
          title: "智能数码回收",
          content: [
            {
              img: "images/sh26.png",
              name: "尼康",
              price: "￥17162"
            },
            {
              img: "images/sh27.png",
              name: "佳能",
              price: "￥21538"
            },
            {
              img: "images/sh28.png",
              name: "索尼",
              price: "￥23195"
            },
            {
              img: "images/sh29.png",
              name: "柯达",
              price: "￥612"
            }
          ]
          // ad: "images/recover09.png"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
// 回收信息
.recover {
  height: 5.925rem;
  background: #fff;
  .recover_con {
    height: 4.7rem;
    padding: 0.3rem 0.11rem 0;
    .recover_t {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 18px;
        font-weight: 900;
      }
      a {
        color: #5e5b5b;
        font-size: 14px;
      }
    }
    .recover_m {
      margin-top: 0.14rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      dl {
        width: 1.72rem;
        height: 1.9rem;
        box-shadow: 0 0 4px #ccc;
        padding: 0.1rem 0.03rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.07rem;
        flex-shrink: 0;
        dt {
          display: flex;
          align-items: center;
          width: 0.9rem;
          height: 1.025rem;
          img {
            width: 100%;
          }
        }
        dd {
          margin-top: 0.12rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          p:nth-child(1) {
            font-size: 14px;
            font-weight: 500;
            color: #424141;
            margin-bottom: 0.05rem;
          }
          p:nth-child(2) {
            font-size: 14px;
            color: #424141;
            span {
              color: #f3ba4f;
            }
          }
        }
      }
    }
  }

  // 广告
  .ad {
    width: 100%;
    height: 1.25rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.recover:nth-last-child(1) {
  height: 4.675rem;
  .ad {
    display: none;
  }
}
</style>

