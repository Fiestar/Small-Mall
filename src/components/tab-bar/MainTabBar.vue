<template>
  <tab-bar>
    <tab-bar-item path='/home'>
      <img slot="tab-img" src="@/assets/images/tabbar/home.svg" alt="">
      <img slot='tab-img-on' src="@/assets/images/tabbar/home_on.svg" alt="">
      <h2 slot="tab-title">首页</h2>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <img slot="tab-img" src="@/assets/images/tabbar/category.svg" alt="">
      <img slot='tab-img-on' src="@/assets/images/tabbar/category_on.svg" alt="">
      <h2 slot="tab-title">分类</h2>
    </tab-bar-item>
    <tab-bar-item path='/carts'>
      <img slot="tab-img" src="@/assets/images/tabbar/shopcart.svg" alt="">
      <img slot='tab-img-on' src="@/assets/images/tabbar/shopcart_on.svg" alt="">
      <h2 slot="tab-title">购物车</h2>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <img slot="tab-img" src="@/assets/images/tabbar/profile.svg" alt="">
      <img slot='tab-img-on' src="@/assets/images/tabbar/profile_on.svg" alt="">
      <h2 slot="tab-title">我的</h2>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
  data(){
    return{

    }
  },
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less" scoped>

</style>