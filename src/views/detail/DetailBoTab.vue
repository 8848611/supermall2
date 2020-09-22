<!--  -->
<template>
  <div class="bottom">
      <div class="item">客服</div>
      <div class="item">店铺</div>
      <div class="item">收藏</div>
      <div class="item gouwu">加入购物车</div>
      <div class="item buy">购买</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style scoped>
    .bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        text-align: center;
        background-color: #fff;
        font-size: 12px;
    }
    .item{
        flex: 1;
        border: 1px solid #ccc;
        color: #000;
    }
    .gouwu{
        flex: 1.5;
        background-color: orange;
    }
    .buy{
        background-color: orangered;
    }
</style>
