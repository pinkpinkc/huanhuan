<template>
    <div class="mineMsg">
        <dl v-for="(item,index) in msg" :key="index">
            <dt>
                <img :src="item.icon" alt="">
            </dt>
            <dd>{{item.txt}}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    name:"mineMsg",
    data(){
        return{
            msg:[
                {
                    icon:"images/msg1.jpg",
                    txt:"已下单"
                },
                {
                    icon:"images/msg2.jpg",
                    txt:"已签收"
                },
                {
                    icon:"images/msg3.jpg",
                    txt:"已付款"
                },
                {
                    icon:"images/msg4.jpg",
                    txt:"质检报告"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mineMsg{
    background: #fbfbfb;
    height: 0.7rem;
    border-top: 2px solid #f1f1f1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    dl{
        height: 0.46rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        dt{
            width: 0.23rem;
            height: 0.25rem;
            margin-bottom: 0.08rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            font-size: 12px;
            color: #313131;
        }
    }
}
</style>
