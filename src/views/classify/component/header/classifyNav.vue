<template>
    <div class="classifyNav">
        <ul>
            <li v-for="(item,index) in classifyNav" tag="li">{{item}}</li>
        </ul>   
    </div>
</template>

<script>
export default {
    name:"classifyNav",
    data(){
        return{
            classifyNav:["手机","全新机","笔记本","平板电脑","数码产品","3G回收","大批量回收"]
        }  
    }
}
</script>

<style lang="scss" scoped>
    .classifyNav{
        overflow: auto;
        ul{
            display: flex;
            height: 0.38rem;
            font-size: 0.14rem;
            padding-left: 0.1rem;
            white-space: nowrap;
            align-items: center;
            border-bottom: 0.01rem solid #eee;
            background: #fafafa;
            li{
                margin-right: 0.23rem;
            }
        }
    }
</style>

