<template>
  <div class="homeNav">
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

      <div class="more" @click="handleDown">
        <img src="images/downsanjiao.jpg" alt>
      </div>
    </div>

    <!-- 下拉导航 -->
    <HomeDown v-show="isOn" />
  </div>

</template>

<script>
import Vuex from 'vuex'
import HomeDown from './homeDown.vue'
export default {
  name: "homeNav",
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
  },
  components:{
    HomeDown
  },
  computed: {
    ...Vuex.mapState({
      isOn:state=>state.HomeStore.isOn
    })
    
  },
  methods: {
    ...Vuex.mapActions({
      handleDown:"HomeStore/handleDown"
    })
  }
};
</script>

<style lang="scss">
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
</style>