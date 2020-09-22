<template>
  <div id="tab-ul">
      <TabBarItem v-for="(item,index) in datalist" :key="index" @click="clickItem(index,item.to)">
        <template v-slot:item-icon>
          <img v-if="currentIndex == index" :src="item.img1url" alt />
          <img v-else :src="item.img0url" alt />
        </template>
        <template v-slot:item-text>
          <p :class="{active: currentIndex == index}">{{item.text}}</p>
        </template>
      </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/TabBar/TabBarItem";
export default {
  name: "tabbar",
  props: ['datalist'],
  components: {
    TabBarItem,
  },
  created: function(){
    console.log(this.tabList)
  },
  data: function () {
    return {
      active: true,
      currentIndex: 0
    };
  },
  methods: {
    clickItem(i,to){
      this.currentIndex = i;
      this.$router.push(to)
    }
  }
};
</script>

<style scoped>
#tab-ul {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #eee;
  padding-top: 4px;
  padding-bottom: 4px;
  z-index: 99;
}
.tab-item {
  flex: 1;
}
.tab-item img {
  width: 30px;
}
.tab-item p {
  font-size: 12px;
  margin: 0;
}
.active{
  color: red;
}
</style>