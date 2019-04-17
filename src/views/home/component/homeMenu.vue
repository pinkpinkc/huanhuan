<template>
  <!-- menu -->
  <div class="menu">
    <div class="menu_con">
      <a href="javascript:;" v-for="(item,index) in menu" :key="index">
        <i>
          <img :src="item.img" alt>
        </i>
        <span>{{item.name}}</span>
      </a>
    </div>

    <!-- free -->
    <div class="free">
      <a href="javascript:;">免费可视估价</a>
    </div>
  </div>
</template>


<script>
export default {
  name: "homeMenu",
  data() {
    return {
      menu: [
        {
          img: "images/menu1.png",
          name: "卖手机"
        },
        {
          img: "images/menu2.png",
          name: "卖笔记本"
        },
        {
          img: "images/menu3.png",
          name: "卖全新机"
        },
        {
          img: "images/menu4.png",
          name: "卖平板"
        },
        {
          img: "images/menu5.png",
          name: "数码回收"
        },
        {
          img: "images/menu6.png",
          name: "国产手机"
        },
        {
          img: "images/menu7.png",
          name: "苹果手机"
        },
        {
          img: "images/menu8.png",
          name: "2G3G回收"
        },
        {
          img: "images/menu9.png",
          name: "尾货回收"
        },
        {
          img: "images/menu10.png",
          name: "统货回收"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// menu菜单
.menu {
  height: 2.44rem;
  background: #fff;

  padding-top: 0.2rem;

  // justify-content: space-between;

  margin-bottom: 0.1rem;
  position: relative;
  .menu_con {
    height: 1.77rem;
    display: flex;
    padding-left: 0.06rem;
    align-items: space-between;
    flex-wrap: wrap;
    a {
      display: flex;
      width: 0.72rem;
      height: 0.69rem;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      margin-bottom: 0.19rem;
      i {
        display: flex;
        width: 0.44rem;
        height: 0.44rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        font-size: 12px;
        color: #7a7a7a;
      }
    }
  }

  // 免费估价free
  .free {
    width: 3.75rem;
    height: 0.67rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    a {
      display: block;
      width: 3.44rem;
      height: 0.37rem;
      border-radius: 0.04rem;
      background: #02ad61;
      text-align: center;
      line-height: 0.37rem;
      font-size: 14px;
      color: #fff;
      font-weight: 700;
    }
  }
}
</style>
