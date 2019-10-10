<template>
  <swiper>
    <swiper-item v-for="(data, index) in banners" :key="index">
      <a :href="data.link"><img :src="data.image" :alt="data.title" @load="bannerload"></a>
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
      isTrue: true,
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
    bannerload(){
      if(this.isTrue){
        this.$emit('bannerload')
        this.isTrue = false
      }
    }
  },
}
</script>

<style lang="less" scoped>
  
</style>