<template>
    <div class="tab-wrap">
        <div class="item" :class="{current: currentIndex == index}" v-for="(item,index) in tablist" :key="index" @click="tab(index)">
            <span>{{item}}</span>
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    props: ['tablist'],
    data(){
        return {
            currentIndex: 0
        }
    },
    methods: {
        tab(index){
            this.currentIndex = index
            this.$emit('clicktab',index)
        }
    }
  }
  </script>
  
  <style scoped>
    .tab-wrap{
        display: flex;
        text-align: center;
        background-color: #fff;
        padding-bottom: 8px;
    }
    .item{
        flex:1;
        height: 40px;
        line-height: 40px;
    }
    .current{
        border-bottom: 2px solid red;
        color: red;
    }
  </style>