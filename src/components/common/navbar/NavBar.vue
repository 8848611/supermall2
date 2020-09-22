<template>
  <div class="navBox">
    <div class="navItem left" @click="goBack">
      <slot name="left"></slot>
    </div>
    <div class="navItem center">
      <slot name="center"></slot>
    </div>
    <div class="navItem right" @click="share">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    methods: {
      goBack(){
          this.$router.go(-1)
      },
      share(){

      }
    }
  }
</script>

<style scoped>
  .navBox{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
  }
  .navItem{
    flex: 1;
  }
  .left{
    flex: 1;

  }
  .center{
    flex: 6;
  }
  .right{
    flex: 1;
  }
</style>