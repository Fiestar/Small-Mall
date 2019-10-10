<template>
  <div id='pro-lis'>
    <pro-lis-item v-for="(data,index) in prolis" :key='index' :data='data'></pro-lis-item>
  </div>
</template>

<script>
import ProLisItem from './ProLisItem'
export default {
  props:{
    prolis:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  },
  components:{
    ProLisItem
  }
}
</script>

<style lang="less" scoped>
#pro-lis {

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;


}
</style>