<template>
  <div id="nav-bar">
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class='right'><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="less" scoped>
#nav-bar{
  display: flex;
  height: 6.5vh;
  line-height: 6.5vh;
  text-align: center;
  .left{
    width: 10vh;
  }
  .center{
    flex: 1
  }
  .right{
    width: 10vh;
  }
}
</style>