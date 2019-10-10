<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
#tab-bar{
  display: flex;
  position: fixed;
  bottom: 0; 
  left: 0;
  right: 0;
  text-align: center;
  height: 7.5vh;
}
</style>