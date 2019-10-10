<template>
  <div id='wrapper' ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'

export default {
  props:{
    probeType:Number,
    pullUpLoad: {
      type:Boolean,
      default: false,
    },
  },
  data(){
    return{

    }
  },
  mounted() {
    this.scroll = new Scroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })
    this.scroll.on('scroll',pos=>{
      this.$emit('getPosi',pos)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
}
</script>

<style lang="less" scoped>
  
</style>