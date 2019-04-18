<template>
    <div class="mineOrder">
        <p>我的订单</p>
        <a href="javascript:;">
            全部订单<i class="iconfont">&#xe625;</i>
        </a>
    </div>
</template>

<script>
export default {
    name:"mineOrder"
}
</script>

<style lang="scss" scoped>
.mineOrder{
    background: #fbfbfb;
    height: 0.8rem;
    padding: 0.31rem 0.22rem 0 0.19rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-size: 16px;
        color: #534f4f;
    }
    a{
        font-size: 16px;
        color: #696969;
        i{
            font-size: 12px;
            margin-left: 0.06rem;
        }
    }
}
</style>
