<template>
  <div id="detail">
    <NavBar class="home-nav">
      <template v-slot:left>返回</template>
      <template v-slot:center>
          <div class="center">
              <div class="item" :class="{active1: index == currentIndex}" v-for="(item,index) in list" :key="index" @click="handle(index)">{{item}}</div>
          </div>
      </template>
      <template v-slot:right>分享</template>
    </NavBar>
    <div class="info">
        <img :src="goodsInfo.src" alt="">
        <h1>{{goodsInfo.des}}</h1>
        <p>收藏人数:{{goodsInfo.like}}</p>
    </div>
    <DetailBoTab></DetailBoTab>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import DetailBoTab from "./DetailBoTab";
import mixin from "@/common/mixin";
import {getDetailInfo} from "@/network/detail.js";
export default {
  name: "Detail",
  data(){
      return {
          list: ['商品','参数','评论','推荐'],
          currentIndex: 0,
          goodsInfo: {
              src: '',
              des: '',
              like: ''
          }
      }
  },
  mixins: [mixin],
  created() {
    // console.log(this.$route.params);
    this._getDetailInfo()
    console.log('我不是混入的created代码')
  },
  components:{
    NavBar,
    DetailBoTab
  },
  methods: {
      handle(i){
          this.currentIndex = i
      },
      _getDetailInfo(){
        getDetailInfo(this.$route.params.userId).then(res=>{
            this.goodsInfo = res.data
            console.log(res)
        })
      }
  }
};
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 100;
        height: 9999px;
        background-color: #fff;
    }
    .center{
        display: flex;
        text-align: center;
    }
    .item{
        flex: 1;
    }
    .active1{
        color:green;
    }
    .info{
        padding-top:60px ;
        text-align: center;
    }
    .info img{
        width: 100%;
        height: 200px;
    }
</style>
