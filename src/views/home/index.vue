<template>
  <div class="home" ref="aaa">
    <HomeHead/>
    <HomeBanner/>
    <HomeMenu/>
    <HomeHigh/>
    <HomeRecover/>
    <HomeFoot/>
    <BackTop/>
    <!-- <button @click="handleTo">回到顶部</button> -->
  </div>
</template>

<script>
import HomeHead from "./component/homeHead";
import HomeBanner from "./component/homeBanner";
import HomeMenu from "./component/homeMenu";
import HomeHigh from "./component/homeHigh";
import HomeRecover from "./component/homeRecover";
import HomeFoot from "./component/homeFoot";
import BackTop from "./component/backTop";

export default {
  name: "home",
  components:{
    HomeHead,
    HomeBanner,
    HomeMenu,
    HomeHigh,
    HomeRecover,
    HomeFoot,
    BackTop
  },
  // methods: {
  //   handleTo(){
  //       window.addEventListener("scroll", function(){
  //         console.log(document.documentElement.scrollTop)
  //       });
  //   }
  // }
};
</script>

<style lang="scss">
// 让横向滚动条不显示
::-webkit-scrollbar{
  display: none
}
// button{
//   position: fixed;
//   right: 20px;
//   bottom: 130px
// }
</style>