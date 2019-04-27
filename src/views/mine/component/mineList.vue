<template>
    <div class="mineList">
        <div class="myList" v-for="(item,index) in list" :key="index">
            <div class="myList_l">
                <i>
                    <img :src="item.icon" alt="">
                </i>
                <span>{{item.txt}}</span>
            </div>
            <i class="iconfont myList_r">&#xe66e;</i>
        </div>
    </div>
</template>

<script>
export default {
    name:"mineList",
    data(){
        return{
           list:[
               {
                   icon:"images/list1.jpg",
                   txt:"我的账户"
               },
               {
                   icon:"images/list2.jpg",
                   txt:"优惠券"
               },
               {
                   icon:"images/list3.jpg",
                   txt:"设置"
               }
           ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mineList{
    background: #fff;
    padding-left: 0.16rem;
    .myList{
        height: 0.47rem;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.16rem;
        .myList_l{
             display: flex;
            flex-direction: row;
            justify-content: space-between;
            i{
                display: flex;
                width: 0.18rem;
                height: 0.18rem;
                margin-right: 0.24rem;
                img{
                    width: 100%;
                }
            }
            span{
                font-size: 15px;
                color: #888282;
            }
        }
        .myList_r{
            font-size: 14px;
            color: #888282;
        }
    }
}
</style>
