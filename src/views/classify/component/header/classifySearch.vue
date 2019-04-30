<template>
    <div class="classifySearch">
        <input type="text" placeholder="搜索您要卖的手机品牌/型号">
    </div>
</template>

<script>
export default {
    name:"classifySearch"
}
</script>

<style lang="scss" scoped>
    .classifySearch{
        width: 3.75rem;
        height: 0.56rem;
        background: #00b162;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            width: 3.42rem;
            height: 0.42rem;
            border: 0.005rem solid #a2dfc8;
            border-radius: 0.04rem;
            font-size: 0.13rem;
            color: #939393;
            padding-left: 16px;
        }
    }
</style>