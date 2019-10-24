<template>
  <div class="cart-goods-list">
    <cart-goods-list-item :product="item" v-for="(item,i) in cartGoodsList" :key="i"></cart-goods-list-item>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CartGoodsListItem from './CartGoodsListItem'
  export default {
    name: "CartGoodsList",
    components: {
      CartGoodsListItem
    },
    computed: {
      ...mapGetters(['cartGoodsList'])
    }
  }
</script>

<style scoped>

</style>
