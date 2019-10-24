<template>
  <div class="nav-bar">
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/nav-bar/NavBar'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartNavBar",
    components: {
      NavBar
    },
    computed: {
      ...mapGetters([
        'cartLength'
      ])

    }
  }
</script>

<style scoped>

</style>
