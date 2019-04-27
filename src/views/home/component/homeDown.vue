<template>
    <div class="homeDown" v-show="isOn">
        <div class="homeDown_t">
            <h3>全部</h3>
            <i class="iconfont" @click="handleUp">&#xe60b;</i>
        </div>
        <div class="homeDown_b">
            <a href="javascript:;" v-for="(item,index) in list">{{item}}</a>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name:"homeDown",
    
    data(){
        return{
            list:["推荐","手机回收","平板回收","笔记本回收","全新回收机","3G手机回收","统货回收","尾货回收"]
        }
    },
    computed: {
    ...Vuex.mapState({
      isOn:state=>state.HomeStore.isOn
    })
  },
    methods: {
       ...Vuex.mapActions({
           handleUp:"HomeStore/handleUp"
       })
    },
}
</script>

<style lang="scss">
    .homeDown{
        position: absolute;
        top: 0.425rem;
        left: 0;
        z-index: 26;
        background: #fff;
        .homeDown_t{
            height: 0.325rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0.1rem;
            h3{
                font-size: 14px;
                color: #333333;
            }
            i{
                font-size: 12px;
                color: #696969;
            }
        }
        .homeDown_b{
            display: flex;
            // justify-content: space-between;
            flex-wrap: wrap;
            a{
                display: block;
                width: 0.75rem;
                height: 0.27rem;
                border: 1px solid #ccc;
                text-align: center;
                line-height: 0.27rem;
                font-size: 12px;
                color: #888888;
                // margin-bottom: 0.09rem;
                margin: 0 0.09rem 0.09rem;

            }
        }
    }
</style>