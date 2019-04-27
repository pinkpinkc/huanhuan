<template>
  <!-- high 限时高价 -->
  <div class="high">
    <div class="high_t">
      <div class="time">
        <p>限时高价</p>
        <span>{{times.h}}</span>:
        <span>{{times.m}}</span>:
        <span>{{times.s}}</span>
      </div>
      <div class="news">
        <!-- <ul>
              <li>陈**已卖了华为Nova2s</li>
        </ul>-->
        <div class="swiper-container" ref="newss">
          <div class="swiper-wrapper news-box">
            <div class="swiper-slide news-con">陈**已卖了华为Nova2s</div>
            <div class="swiper-slide news-con">陈**已卖了华为Nova2s</div>
            <div class="swiper-slide news-con">陈**已卖了华为Nova2s</div>
          </div>
        </div>
      </div>
    </div>
    <div class="high_m">
      <dl v-for="(item,index) in high" :key="index">
        <dt>
          <img :src="item.img" alt>
        </dt>
        <dd>
          <p>{{item.title}}</p>
          <p>
            最高回收价
            <span>{{item.price}}</span>
          </p>
        </dd>
      </dl>
    </div>
    <div class="high_b">
      <img src="images/high.png" alt>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: "homeHigh",
  data() {
    return {
      high: [
        {
          img: "images/high1.png",
          title: "苹果 iPhone6",
          price: "￥1825"
        },
        {
          img: "images/high2.png",
          title: "荣耀 V20",
          price: "￥2617"
        },
        {
          img: "images/high3.png",
          title: "全新机 魅族X8",
          price: "￥1147"
        }
      ]
    };
  },
  computed: {
    ...Vuex.mapState({
      times:state=>state.HomeStore.times
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleTime:"HomeStore/handleTime"
    })
  },
  created(){
    // 倒计时
    this.handleTime();
  },
  mounted() {
    // 新闻滚动
    if(!this.newsSwiper){
      this.newsSwiper = new Swiper(this.$refs.newss, {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      autoplay: {
        disableOnInteraction: false
        // delay: 2000,
      }
     });
    }
  }
};
</script>


<style lang="scss" scoped>
// 限时高价high
.high {
  height: 3.5rem;
  background: #fff;
  padding: 0 0.105rem;
  margin-bottom: 0.1rem;
  .high_t {
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 18px;
      font-weight: 800;
      margin-right: 0.09rem;
    }
    .time {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #676767;
      font-size: 14px;
      span {
        display: block;
        background: #010101;
        width: 0.2rem;
        height: 0.17rem;
        line-height: 0.17rem;
        text-align: center;
        font-size: 16px;
        color: #fff;
      }
    }
    .news {
      width: 1.665rem;
      height: 0.28rem;
      background: #f5f5f5;
      border-radius: 0.4rem;
      overflow: hidden;
      .news-box {
        .news-con {
          width: 1.665rem;
          height: 0.28rem;
          color: #606060;
          font-size: 12px;
          text-align: center;
          line-height: 0.28rem;
        }
      }
    }
  }

  .high_m {
    display: flex;
    justify-content: space-between;
    dl {
      width: 1.115rem;
      height: 1.52rem;
      box-shadow: 0 0 2px #ccc;
      padding: 0.1rem 0.03rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      dt {
        display: flex;
        align-items: center;
        width: 0.7rem;
        height: 0.825rem;
        img {
          width: 100%;
        }
      }
      dd {
        margin-top: 0.19rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        p:nth-child(1) {
          font-size: 12px;
          font-weight: 500;
          color: #616161;
          margin-bottom: 0.05rem;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #616161;
          span {
            color: #fdc358;
          }
        }
      }
    }
  }

  .high_b {
    width: 3.545rem;
    height: 1.08rem;
    margin-top: 0.19rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
