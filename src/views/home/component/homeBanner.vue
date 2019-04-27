<template>
  <!-- banner -->
  <div class="ban">
    <div class="swiper-container" ref="banners">
      <div class="swiper-wrapper">
        <div class="swiper-slide banner-box">
          <img src="images/banner.jpg">
        </div>
        <div class="swiper-slide banner-box">
          <img src="images/banner2.png">
        </div>
        <div class="swiper-slide banner-box">
          <img src="images/banner3.jpg">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
        

    <div class="on">
      <div class="on_t">
        <div class="on_l">
          <img src="images/on1.png" alt>
        </div>
        <div class="on_c">
          <p>选择机型查看优惠</p>
          <p>
            随机最高加价：
            <span>￥60</span>
          </p>
        </div>
        <div class="on_r">
          <a href="javascript:;">本机估价</a>
        </div>
      </div>

      <div class="on_b">
        <img src="images/on2.jpg" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBanner",
  mounted() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.banners, {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
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
.ban {
  padding-top: 0.75rem;
  height: 3.44rem;
  position: relative;
  background: #fff;
  .banner-box {
    height: 1.875rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .on {
    height: 0.95rem;
    width: 3.5rem;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0.11rem;
    border-radius: 0.05rem;
    box-shadow: 0 0 0.05rem #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 20;
    .on_t {
      height: 0.47rem;
      display: flex;
      padding: 0 0.06rem 0 0.17rem;
      margin-bottom: 0.1rem;
      div:nth-child(1) {
        width: 0.3rem;
        height: 0.465rem;
        margin-right: 0.11rem;
        img {
          width: 100%;
        }
      }
      div:nth-child(2) {
        margin-right: 0.195rem;
        padding-left: 0.08rem;
        p:nth-child(1) {
          font-size: 16px;
          color: #666666;
          width: 1.8rem;
          height: 0.225rem;
          // background: #f5f5f5;
          line-height: 0.225rem;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #080808;
          margin-left: 0.04rem;
          margin-top: 0.05rem;
          span {
            font-size: 16px;
            color: red;
          }
        }
      }
      div:nth-child(3) {
        a {
          display: block;
          background: #02ad63;
          width: 0.85rem;
          height: 0.26rem;
          color: #fff;
          text-align: center;
          line-height: 0.26rem;
          border-radius: 0.03rem;
        }
      }
    }
    .on_b {
      height: 0.15rem;
      padding: 0 0.06rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
