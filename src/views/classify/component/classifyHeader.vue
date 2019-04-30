<template>
  <div class="classifyHeader">
    <ClassifySearch/>
    <ClassifyNav/>
  </div>
</template>

<script>
import ClassifySearch from './header/classifySearch'
import ClassifyNav from './header/classifyNav'
export default {
  name:"classifyHeader",
  components:{
    ClassifySearch,
    ClassifyNav
  }
}
</script>

<style lang="scss" scoped>
  .classifyHeader{
    width: 100%;
    overflow: hidden;
  }
</style>

