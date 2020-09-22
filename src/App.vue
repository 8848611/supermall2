<template>
  <TabBar :datalist="tabbarList"></TabBar>
    <router-view />
</template>

<style></style>
<script>
import TabBar from "@/components/common/TabBar/TabBar";
// import VConsole from 'vconsole'
export default {
  name: "App",
  components: {
    TabBar,
  },
  created: function() {
    // console.log(this.tabbarList)
  },
  mounted: function() {
    // new VConsole();
  },
  data: function() {
    return {
      tabbarList: [
        {
          img0url: "/img/icon/all-0.png",
          img1url: "/img/icon/all-1.png",
          text: "首页",
          to: "/home",
        },
        {
          img0url: "/img/icon/gift-0.png",
          img1url: "/img/icon/gift-1.png",
          text: "分类",
          to: "/catgory",
        },
        {
          img0url: "/img/icon/Money-0.png",
          img1url: "/img/icon/Money-1.png",
          text: "购物车",
          to: "/cart",
        },
        {
          img0url: "/img/icon/night-0.png",
          img1url: "/img/icon/night-1.png",
          text: "我的",
          to: "/my",
        },
      ],
    };
  },
};
</script>
