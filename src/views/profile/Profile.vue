<template>
  <div id="profile">
    <profile-nav-bar></profile-nav-bar>
    <profile-avatar></profile-avatar>
   <div class="bar">
     <money></money>
     <youhui></youhui>
     <jifen></jifen>
   </div>
    <message></message>


  </div>

</template>

<script>
  import ProfileNavBar from './refsFile/ProfileNavBar'
  import ProfileAvatar from './refsFile/ProfileAvatar'
  import Money from './refsFile/money'
  import Youhui from './refsFile/youhui'
  import Jifen from './refsFile/jifen'
  import message from './refsFile/message'
  export default {
    components: {
      ProfileNavBar,
      ProfileAvatar,
      Money,
      Youhui,
      Jifen,
      message
    }
  }
</script>

<style scoped lang='less'>
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
  .bar {
    display: flex;
    width: 100%;
  }
</style>
