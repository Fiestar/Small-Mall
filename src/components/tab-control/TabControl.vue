<template>
  <div id='tab-control'>
    <figure v-for="(data,index) in title" :key="index" @click='changeIndex(index)' :class="{red:CurrentIndex == index}"><span>{{data}}</span></figure>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      CurrentIndex:0,
    }
  },
  methods: {
    changeIndex(index){
      this.CurrentIndex = index
      this.$emit("changeType",index)
    }
  },
}
</script>

<style lang="less" scoped>
#tab-control{
  height: 5vh;
  line-height: 5vh;
  background: #f6f6f6;
  display: flex;
  text-align: center;
  z-index: 9;
  figure{flex: 1;}
}
.red{
  color: #f00;
}
.red span{padding: 2px; border-bottom: 2px solid #f00;}
</style>