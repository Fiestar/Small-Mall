<template>
  <div id="recommend">
    <div v-for="(data,index) in rec" :key="index" class="rec-item">
      <a :href="data.link">
        <img v-lazy="data.image" :alt="data.title">
        <h2>{{data.title}}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    rec:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="less" sceped>
#recommend{
  display: flex;
  max-width: 100vh;
  text-align: center;
  .rec-item{
    flex: 1;
    padding: 2% 0 3%;
    border-bottom: 8px solid #eee;
    a{
      display: block;
      text-decoration: none;
      color: #111;
      img{
        width: 75px;
      }
      h2{line-height: 25px;}
    }
  }
}
</style>