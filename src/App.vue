<template>
  <div id="main">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar />
  </div>
</template>
<script>
import MainTabBar from './components/tab-bar/MainTabBar'
export default {
  components:{
    MainTabBar
  }
}
</script>
<style lang="less">
@import './assets/css/base.css';


</style>
