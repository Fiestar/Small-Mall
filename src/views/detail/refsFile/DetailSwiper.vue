<template>
  <swiper class="banner">
    <swiper-item v-for="(data, index) in banners" :key="index">
      <img :src="data">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/swiper/index'
export default {
  props:{
    banners:{
      type: Array,
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
    Swiper,
    SwiperItem
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.banner{
  height: 30vh;
}
</style>