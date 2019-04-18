<template>
    <div class="mineAd">
        <div class="myAd">
            <img :src="img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"mineAd",
    data(){
        return{
            img:"images/high.png"
        }
    }
}
</script>

<style lang="scss" scoped>
.mineAd{
    height: 1.66rem;
    background: #f1f2ef;
    display: flex;
    justify-content: center;
    align-items: center;
    .myAd{
        width: 3.64rem;
        height: 1.45rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
