<template>
  <div class="tab-bar-item" @click='GoPath()'>
    <div v-if="!isOn"><slot name="tab-img"></slot></div>
    <div v-else><slot name="tab-img-on"></slot></div>
    <div :class='{red:isOn}'><slot name="tab-title"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type: String,
      default: '/home'
    }
  },
  data(){
    return{
    }
  },
  methods: {
    GoPath(){
      this.$router.push(this.path)
    }
  },
  computed: {
    isOn(){
      return this.$route.path.indexOf(this.path) == 0
    }
  },
}
</script>

<style lang="less" scoped>
.tab-bar-item{
  padding: 1% 0;
  flex: 1;
  background: #f6f6f6;
  box-shadow: 0 -1px 3px rgba(100,100,100,.08);
  img{
    width: 24px;
  }
}
.red{color: #FF5777;}
</style>