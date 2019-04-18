<template>
  <div class="mine">
    <MineHead/>
    <MineOrder/>
    <MineMsg/>
    <MineAd/>
    <MineList/>
  </div>
</template>

<script>
import MineHead from "./component/mineHead"
import MineOrder from "./component/mineOrder"
import MineMsg from "./component/mineMsg"
import MineAd from "./component/mineAd"
import MineList from "./component/mineList"



export default {
  name: 'mine',
  components: {
    MineHead,
    MineOrder,
    MineMsg,
    MineAd,
    MineList
  }
}
</script>

<style lang="scss">
.mine{
  background: #fbfbfb;
}
</style>
