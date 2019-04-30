<template>
    <div class="classifyMineLeft">
        <ul>
            <li v-for="(item,index) in classifyMineLeft">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"classifyMineLeft",
    data(){
        return{
            classifyMineLeft:["苹果","三星","小米","华为","荣耀","OPPO","vivo","乐视","魅族","锤子","金立","联想","中兴","酷派","一加","华硕","谷歌","朵唯","天语","夏普"]
        }
    }
}
</script>

<style lang="scss" scoped>
    .classifyMineLeft{
        width: 0.74rem;
        height: 100%;
        padding-bottom: 1.46rem;
        background: #fff;
        overflow: auto;
        border-right: 0.02rem solid #f4f4f4;
        ul{
            display: flex;
            flex-direction: column;
            li{
                font-size: 0.13rem;
                width: 100%;
                height: 0.52rem;
                border-bottom: 0.005rem solid #f3f3f3;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
