<template>
  <div id="feature">
    <a :href="url">
      <img src="@/assets/images/home/recommend_bg.jpg" alt="最新流行">
    </a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      url:'https://www.baidu.com',
    }
  }
}
</script>

<style lang="less" scoped>
#feature{
  max-width: 100vh;
  img{
    width: 100%;
  }
}
</style>