<template>
    <div class="classify">
        <h2>分类页</h2>
        <!-- <ul>
            <li @click="handleToggle(1)">1</li>
             <li @click="handleToggle(2)">2</li>
              <li @click="handleToggle(3)">3</li>
        </ul>
        <p v-show="index==1">111</p>
         <p v-show="index==2">222</p>
          <p v-show="index==3">333</p> -->
    </div>
</template>

<script>
export default {
    name:'classify',
    // data(){
    //     return {
    //         index:1
    //     }
    // },
    // methods: {
    //     handleToggle(index){
    //         this.index=index
    //     }
    // },
    // created () {
    //     let index= this.$route.query;
    //     this.index = index
    // }
}
</script>

<style lang="scss">
// ul{
//     width: 100%;
//     height: 40px;
//     display: flex;
//     justify-content: space-between
// }
//     ul>li{
//         font-size: 20px;
//         width:100px;
//         height: 50px;
//         background: yellow
//     }
//     p{
//         width: 100%;
//         height: 300px;
//         background: red;
//         font-size: 50px;
//     }
//     p:nth-child(2){
//         background-color:blue;
//     }
//     p:nth-child(3){
//         background: green
//     }
</style>