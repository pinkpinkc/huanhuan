<template>
    <div class="classifyMine">
        <ClassifyMineLeft/>
        <ClassifyMineRight/>
    </div>
</template>

<script>
import ClassifyMineLeft from './mine/classifyMineLeft'
import ClassifyMineRight from './mine/classifyMineRight'
export default {
    name:"classifyMine",
    components:{
        ClassifyMineLeft,
        ClassifyMineRight
    }
}
</script>

<style lang="scss" scoped>
    .classifyMine{
        width: 100%;
        height: 100%; 
        overflow: hidden;
        display: flex;
    }
</style>

