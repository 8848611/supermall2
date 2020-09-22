<template>
    <div class="house-wrap">
        <div class="item" v-for="(item,index) in imglist" :key="index">
            <img :src="item.src" alt="">
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    props:['imglist'],
    data(){
      return {
       
      }
    },
   
  }
  </script>
  
  <style scoped>
    .house-wrap{
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .item{
        flex: 1;
        text-align: center;
    }
    .item img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
  </style>