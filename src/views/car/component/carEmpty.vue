<template>
    <div class="carEmpty">
        <div class="box">
            <i class="iconfont">&#xe612;</i>
            <p>购物车还是空的</p>
            <a href="jacascript:;">去逛逛</a>
        </div>
    </div>
</template>

<script>
export default {
    name:"carEmpty"
}
</script>

<style lang="scss" scoped>
    .carEmpty{
        height: 0.73rem;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .box{
            width: 2.1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            i{
                font-size: 22px;
                color: #8a8a8a;
            }
            p{
                font-size: 16px;
                color: #8a8a8a;
            }
            a{
                display: block;
                width: 0.56rem;
                height: 0.32rem;
                border: 1px solid #dadada;
                border-radius: 0.03rem;
                font-size: 16px;
                color: #6e6a6a;
                text-align: center;
                line-height: 0.32rem;
            }
        }
    }
</style>
