<template>
    <div class="goodsWrap">
        <div class="item" v-for="(item,index) in goodslist" :key="index" @click="godetail(item.id)">
            <img :src="item.src" alt="">
            <p>价格<span>{{item.price}}</span></p>
        </div>
    </div>
</template>

<style>
    .goodsWrap{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 60px;
    }
    .item{
        width: 100%;
        text-align: center;
        color: tomato;
        font-size: 18px;
    }
    .item img {
        width: 100%;
        height: 200px;
    }
</style>
<script>
    export default {
        name: 'GoodsInfo',
        props: ['goodslist'],
        methods: {
            godetail(id){
                this.$router.push({
                    name: "detail",
                    params: {
                        userId: id
                    }
                })
            }
        }
    }
</script>