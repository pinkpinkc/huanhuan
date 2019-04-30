<template>
    <div class="classifyMineRight">
        <dl v-for="(item,index) in shops">
            <dt><img :src="item.pic" alt="找不到文件"></dt>
            <dd>{{item.text}}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    name:"classifyMineRight",
    data(){
        return{
            shops:[
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                },
                {
                    pic:"./images/iPhone.png",
                    text:"苹果iPhoneXR"
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    .classifyMineRight{
        width: 3.06rem;
        height: 100%;
        padding: 0.18rem 0rem 1.3rem; 
        background: #fff;
        overflow: auto;
        dl{
            float: left;
            margin: 0rem 0.12rem 0.25rem; 
            dt{
                width: 0.75rem;
                height: 0.75rem;
                font-size: 0.09rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            dd{
                margin-top: 0.1rem;
                width: 0.75rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 0.09rem;
            }
        }
    }
</style>
