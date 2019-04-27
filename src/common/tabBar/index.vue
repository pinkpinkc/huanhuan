<template>
  <div class="tabBar">
    <ul>
      <router-link v-for="(item,index) in tabBar" :key="index" tag="li" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data(){
    return {
      tabBar : [
        {
          title : "首页",
          icon : "&#xe505;",
          path : "/home"
        },
        {
          title : "分类",
          icon : "&#xe50a;",
          path : "/classify"
        },
        {
          title : "回收车",
          icon : "&#xe612;",
          path : "/car"
        },
        {
          title : "我的",
          icon : "&#xe509;",
          path : "/mine"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  
  .tabBar{
    width: 100%;
    height: 0.5rem;
    background: #fff;
    border-top: 1px solid #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 25;
    ul{
      height: 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #848484;
        i{
          font-size: 22px;
          margin-bottom: 0.025rem;
        }
        span{
          font-size: 14px;
        }
      }
    }
  }
  .tabBar>ul>.router-link-active{
    color: #02ad61;
  }
</style>
