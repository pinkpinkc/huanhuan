<template>
  <div class="homeHead">
    <!-- 搜索栏 -->
    <div class="search">
      <a href="javascript:;" class="city">
        <span>北京市</span>
        <img src="images/downsanjiao.jpg" alt>
      </a>
      <a href="javascript:;" class="search">
        <i class="iconfont">&#xe637;</i>
        搜索品牌/型号
      </a>
      <a href="javascript:;" class="tel">
        <i class="iconfont">&#xe73c;</i>
      </a>
    </div>
    <!-- 导航栏 -->
    <div class="nav">
      <div class="nav_con">
        <ul>
          <li
            v-for="(item,index) in nav"
            :class="{active:index===indexLi}"
            @click="indexLi=index"
            :key="index"
          >{{item.title}}</li>
        </ul>
      </div>

      <div class="more">
        <img src="images/downsanjiao.jpg" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeHead",
  data() {
    return {
      indexLi: 0,
      nav: [
        {
          title: "推荐",
          path: ""
        },
        {
          title: "手机回收",
          path: ""
        },
        {
          title: "平板回收",
          path: ""
        },
        {
          title: "笔记本回收",
          path: ""
        },
        {
          title: "全新机回收",
          path: ""
        },
        {
          title: "3G手机回收",
          path: ""
        },
        {
          title: "统货回收",
          path: ""
        },
        {
          title: "尾货回收",
          path: ""
        }
      ]
    };
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
  z-index: 2;
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

  // 导航
  .nav {
    height: 0.325rem;
    display: flex;
    flex-direction: row;
    position: relative;
    box-shadow: 0 1px 0px rgb(235, 232, 232);
    .nav_con {
      width: 3.44rem;
      height: 100%;
      overflow: hidden;
      ul {
        // width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        align-items: center;
        overflow: auto;
        padding: 0 0.05rem;
        li {
          margin: 0 0.075rem;
          flex-shrink: 0;
          font-size: 14px;
          font-weight: 500;
          color: #141414;
          display: flex;
          flex-direction: row;
        }
        li.active {
          color: #28825f;
          border-bottom: 2px solid #28825f;
        }
      }
    }
    .more {
      width: 0.31rem;
      height: 0.325rem;
      position: absolute;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.115rem;
        height: 0.065rem;
      }
    }
  }
}
</style>
