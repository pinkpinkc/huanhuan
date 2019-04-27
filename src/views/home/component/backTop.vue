<template>
  <div class="backTop">
      <div class="up" v-show="isShow" @click="backToTop">
          <img src="images/up.png" alt>
      </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: "backTop",
//   data(){
//       return{
//         isShow:false
//       } 
//   },
  computed: {
      ...Vuex.mapState({
          isShow:state=>state.HomeStore.isShow
      })
  },
  methods: {
      ...Vuex.mapActions({
          backToTop:"HomeStore/backToTop"
      }),
      backToTop(){
         alert(document.body.scrollTop) 
      }
  }
//   created() {
//     window.addEventListener("scroll", this.scrollToTop);
//   },
//   destroyed() {
//     window.removeEventListener("scroll", this.scrollToTop);
//   },
//   methods: {
//     // 点击图片回到顶部方法，加计时器是为了过渡顺滑
//     backToTop(){
//         let that = this
//         let timer = setInterval(() => {
//             let ispeed = Math.floor(-that.scrollTop / 2)
//             document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
//             if (that.scrollTop === 0) {
//             clearInterval(timer)
//             }
//         }, 6)
//     },

//     // 为了计算距离顶部的高度，当高度大于一定值显示回顶部图标，小于则隐藏
//     scrollToTop () {
//         let that = this
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//         that.scrollTop = scrollTop
//         if (that.scrollTop > 0.5) {
//           that.isShow = true
//         } else {
//           that.isShow = false
//         }
//     }

};
</script>

<style lang="scss" scoped>
.backTop {
  position: fixed;
  bottom: 0.6rem;
  right: 0.2rem;
  z-index: 30;
  .up{
      width: 0.5rem;
      height: 0.5rem;
      img {
        width: 100%;
        height: 100%;
     }
  } 
}
</style>