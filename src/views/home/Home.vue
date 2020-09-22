<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>购物街</template>
    </NavBar>
    <!-- <Scroll ref="scroll"> -->
      <MySwiper :swiperlist="bannerList"></MySwiper>
      <NineHouse :imglist="bannerList"></NineHouse>
      <CenterLine></CenterLine>
      <TabControl
        :tablist="['流行', '精选', '生活']"
        @clicktab="handletab"
      ></TabControl>
      <GoodsInfo :goodslist="goods[currentType].list"></GoodsInfo>
    <!-- </Scroll> -->
    <ScrollTop @click="scrollTop" v-show="isShow"></ScrollTop>
  </div>
</template>

<script>
//import Scroll from "@/components/common/scroll/Scroll";
import ScrollTop from "@/components/contents/ScrollTop";
import NavBar from "@/components/common/navbar/NavBar";
import MySwiper from "@/components/common/myswiper/MySwiper";
import CenterLine from "@/components/common/centerline/CenterLine";
import TabControl from "@/components/common/tabcontrol/TabControl";
import NineHouse from "@/components/contents/NineHouse";
import GoodsInfo from "@/components/contents/GoodsInfo";
import { getBanner, getHomeGoods } from "@/network/home.js";
export default {
  name: "Home",
  data() {
    return {
      bannerList: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        clear: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false
    };
  },
  components: {
    NavBar,
    MySwiper,
    NineHouse,
    CenterLine,
    TabControl,
    GoodsInfo,
    // Scroll,
    ScrollTop
  },
  created() {
    this._getBanner();
    this._getHomeGoods(this.currentType);
  },
  mounted(){
    document.onscroll = () =>{
      if(document.scrollingElement.scrollTop > 100){
        this.isShow = true
      }else{
        this.isShow = false
      }
      var totalHeight = document.body.scrollHeight;
      if(scrollY + innerHeight >= totalHeight){
        this._getHomeGoods(this.currentType);
      }
    }
  },
  methods: {
    _getBanner() {
      //获取顶部轮播图片
      getBanner().then((res) => {
        this.bannerList = res.data.data;
      });
    },
    _getHomeGoods(type) {
      //获取商品信息
      var page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data);
        //this.goods[type].page++;
      });
    },
    handletab(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          this._getHomeGoods(this.currentType);
          break;
        case 1:
          this.currentType = "new";
          this._getHomeGoods(this.currentType);
          break;
        case 2:
          this.currentType = "clear";
          this._getHomeGoods(this.currentType);
          break;
      }
    },
    scrollTop(){
      //this.$refs.scroll.scroll.scrollTo(0,-100)
      document.scrollingElement.scrollTop = 0
    }
  },
};
</script>

<style scoped>
.home-nav {
  background: turquoise;
  z-index: 9999;
}
.wrapper{
  height: 100vh;
}
</style>
