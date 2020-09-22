<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in swiperlist" :key="index">
        <img :src="item.src" alt="" class="swiper-img">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: 'carrousel',
    props: ['swiperlist'],
    data() {
      return {

      }
    },
    mounted() {
      this.initSwiper();

    },
    created() {
      console.log(111111)
      console.log(this.swiperlist)
      console.log(111111)
    },
    methods: {
      initSwiper() {
        new Swiper('.swiper-container', {
          // 如果需要分页器
          autoplay:true,//等同于以下设置
          loop: true,
          pagination: '.swiper-pagination',
        })
      }
    }
  }
</script>
<style scoped>
  @import '../../..//assets/css/swiper.min.css';

  .swiper-container {
    margin-top: 40px;
  }

  .swiper-img {
    width: 100%;
    height: 200px;
  }
</style>