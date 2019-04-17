<template>
  <div class="home">
    <HomeHead/>
    <HomeBanner/>
    <HomeMenu/>
    <HomeHigh/>
    <HomeRecover/>
    <HomeFoot/>
  </div>
</template>

<script>
import HomeHead from "./component/homeHead";
import HomeBanner from "./component/homeBanner";
import HomeMenu from "./component/homeMenu";
import HomeHigh from "./component/homeHigh";
import HomeRecover from "./component/homeRecover";
import HomeFoot from "./component/homeFoot";

export default {
  name: "home",
  components:{
    HomeHead,
    HomeBanner,
    HomeMenu,
    HomeHigh,
    HomeRecover,
    HomeFoot
  }
};
</script>

<style lang="scss">

// 全部内容
// #main {
  // padding: 0.75rem 0 0.5rem 0;
  // padding-top: 0.75rem;
  // height: 100%;
  // display: flex;
  // flex-direction: column;
  // background: #f5f5f5;
  // overflow: auto;
  // banner
//}

</style>