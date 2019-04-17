<template>
  <div id="app">
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from "@/common/tabBar";
export default {
  name : "app",
  components : {
    TabBar
  }
}
</script>

<style lang="scss">
  #app{
    display:flex;
    height: 100%;
    flex-direction: column;
    overflow: auto;
    background: #f5f5f5;
  }
</style>
