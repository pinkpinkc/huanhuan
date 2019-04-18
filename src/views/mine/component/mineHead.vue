<template>
    <div class="mineHead">
        <div class="top">我的</div>
        <div class="myself">
            <div class="myself_l">
                <p class="login">{{login}}</p>
                <p>账户余额：<span class="money">{{money}}</span></p>
            </div>
            <div class="myself_r">
                <img :src="head" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"mineHead",
    data(){
        return{
            login:"登录/注册",
            money:0,
            head:"images/minehead.jpg"
        }
    }
}
</script>

<style lang="scss" scoped>
.mineHead{
    height: 1.2rem;
    background: #04ac54;
    position: relative;
    border-bottom: 1px solid #79b6a2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top{
        height: 0.47rem;
        font-size: 17px;
        color: #fff;
        text-align: center;
        line-height: 0.47rem;
        font-weight: 500;
    }
    .myself{
        position: absolute;
        top: 0.47rem;
        width: 3.44rem;
        height: 1.04rem;
        border: 1px solid #d4d2d2;
        border-radius: 0.04rem;
        background: #fff;
        z-index: 2;
        padding: 0 0.23rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .myself_l{
            height: 0.43rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 14px;
            p:nth-child(1){
                color: #9c9c9c;
            }
            p:nth-child(2){
                color: #747474;
                span{
                    color: #fc6970;
                }
            }
        }
        .myself_r{
            width: 0.52rem;
            height: 0.52rem;
            border-radius: 50%;
            box-shadow: 0 0 #ccc 0.025rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
