<template>
<div>
  <scroll  ref="wrapper2"
          :probeType="3"
          :pullUpLoad="true">
    <div class="content">
      <img src="@/assets/images/category/nv-fy.jpg" alt="" v-for="i in 50" :key="i">
    </div>

  </scroll>
</div>
</template>

<script>
  import Scroll from '@/components/scroll/Scroll'

  export default {
    name: "CategoryRight",
    components:{
      Scroll
    }
  }
</script>

<style scoped>
  .content {
    width: calc(100% - 96px);
    height: calc(100vh - 49px);
    float: left;
  }
  .content img {
    width: 30%;
  }
</style>
