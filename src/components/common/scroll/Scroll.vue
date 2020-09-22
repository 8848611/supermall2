<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data(){
      return {
          scroll: null
      }
  },
  mounted: function() {
      let bs = new BScroll(this.$refs.wrapper, {
        pullUpLoad: true,
        click: true,
      });
      this.scroll = bs;
      bs.on("scroll", () => {
        //console.log(position.x, position.y)
      });

      bs.on("scrollEnd", () => {
        // console.log('滚动结束')
      });
      bs.on("pullingUp", () => {
        console.log("上拉");
        bs.finishPullUp();
      });
  },
};
</script>

<style scoped></style>
