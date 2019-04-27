<template>
  <div class="homeHead">
    <!-- 搜索栏 -->
    <div class="search">
      <a href="javascript:;" class="city">
        <span>北京市</span>
        <img src="images/downsanjiao.jpg" alt>
      </a>
      <router-link tag="a" class="search" to="/search">
        <i class="iconfont">&#xe67e;</i>
        搜索品牌/型号
      </router-link>
      <a href="javascript:;" class="tel">
        <i class="iconfont">&#xe627;</i>
      </a>
    </div>
    
    <!-- 导航栏 -->
    <HomeNav/>
  </div>
</template>

<script>
import HomeNav from './homeNav'
export default {
  name: "homeHead",
  components: {
    HomeNav
  }
  
};
</script>


<style lang="scss">
.homeHead {
  height: 0.75rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 21;
  // 搜索栏
  .search {
    height: 0.425rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .city {
      display: flex;
      flex-direction: row;
      width: 0.6rem;
      height: 0.14rem;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #5b5b5b;
      img {
        width: 0.12rem;
        height: 0.06rem;
      }
    }
    .search {
      width: 2.4rem;
      height: 0.3rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.05rem #ccc;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: #fff;
      font-size: 14px;
      color: #a6aaac;
      i {
        font-size: 18px;
        margin-right: 0.11rem;
      }
    }
    .tel {
      width: 0.275rem;
      height: 0.28rem;
      i {
        color: #d0d5d8;
        font-size: 28px;
      }
    }
  }

  
}
</style>
