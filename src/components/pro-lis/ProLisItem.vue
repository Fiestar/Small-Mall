<template>
  <div class="pro-lis-item" @click='GoDetail'>
    <a>
      <img v-lazy="data.show.img" :alt="data.title" @load="loadImg">
    </a>
    <div class="pro-info">
      <p class="desc">{{data.title}}</p>
      <span class="price">{{data.price}}</span>
      <span class="collect">{{data.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      
    }
  },
  methods: {
    loadImg(){
      this.$bus.$emit('loadImg')
    },
    GoDetail(){
      this.$router.push({
        path: '/detail',
        query:{iid:this.data.iid}
      })
    }
  },
}
</script>

<style lang="less" scoped>
  .pro-lis-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .pro-lis-item img {
    width: 100%;
    border-radius: 5px;
  }

  .pro-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .pro-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .pro-info .price {
    color: var(--color-tint);
    margin-right: 20px;
  }

  .pro-info .collect {
    position: relative;
  }

  .pro-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/images/common/collect.svg");
  }
</style>