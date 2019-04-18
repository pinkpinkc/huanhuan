<template>
  <div class="carList">
    <div class="carGoods" v-for="(item,index) in goods" :key="index">
      <input type="radio" name="check">
      <div class="goods">
        <img :src="item.img" alt>
      </div>
      <div class="goodsMsg">
        <p>{{item.goodsName}}</p>
        <p>
          评估价：
          <span>{{item.price}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carList",
  data() {
    return {
      goods: [
        {
          img: "images/good.jpg",
          goodsName: "苹果 iPhone6S Plus",
          price: "￥1,061"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.carList {

  .carGoods {
    background: #fff;
    height: 1.01rem;
    border-bottom: 1px solid #f5f5f5;
    padding-left: 0.16rem;
    display: flex;
    align-items: center;
      input {
        background: #fff;
        width: 0.2rem;
        height: 0.2rem;
        border-color: #c6c6c6;
        color: #fff;
      }
    .goods {
      width: 0.75rem;
      height: 0.84rem;
      border: 1px solid #ededed;
      border-radius: 0.03rem;
      margin-left: 0.16rem;
      margin-right: 0.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .goodsMsg {
      height: 0.84rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 16px;
      color: #5f5c5c;
      p:nth-child(2) {
        padding-left: 0.03rem;
        span {
          color: #e87234;
        }
      }
    }
  }
}
</style>
