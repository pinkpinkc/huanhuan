<template>
  <!-- 底部 -->
  <div id="foot">
    <div class="friend">
      <img src="images/foot.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeFoot"
};
</script>

<style lang="scss" scoped>
// 底部
#foot {
  padding-bottom: 0.5rem;
  .friend {
    width: 3.75rem;
    height: 1.485rem;
    img {
      width: 100%;
    }
  }
}
</style>
