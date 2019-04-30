<template>
  <div class="classify">
    <div class="header">
      <ClassifyHeader/>
    </div>
    <div class="mine">
      <ClassifyMine/>
    </div>
  </div>
</template>

<script>
import ClassifyHeader from './component/classifyHeader'
import ClassifyMine from './component/classifyMine'
export default {
  name:"classify",
  components:{
    ClassifyHeader,
    ClassifyMine
  }
}
</script>

<style lang="scss" scoped>
  .classify{
    width: 100%;
    height: 100%;
    .header{
      width:100%;
      position: fixed;
      top:0;
      left: 0;
      z-index: 1;
    }
    .mine{
      width: 100%;
      height: 100%;
      margin: 0.94rem 0rem 0.525rem;
      position:fixed
    }
  }
</style>


