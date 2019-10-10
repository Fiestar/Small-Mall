<template>
  <div id="homePage">
    <nav-bar class="nav-bar">
      <h2 slot="center">购物街</h2>
    </nav-bar>
    <tab-control :title='tabControlTiele' @changeType='changeType' ref="tabcontrol1" v-show="show" class="abso"/>

    <scroll class='wrapper' @getPosi='getPosi' @pullingUp="LoadMore" ref="wrapper" :probeType='3' :pullUpLoad='true'>
      <home-swiper :banners='banners'/>
      <home-rec :rec='recommend'></home-rec>
      <home-fea />
      <tab-control :title='tabControlTiele' @changeType='changeType' ref="tabcontrol"/>
      <home-pro-lis :prolis='proLis[ProLisType].list' />
    </scroll>
    <back-top v-show="show" @click.native='BackTop'/>
  </div>
</template>

<script>
//导入公共组件
import NavBar from '@/components/nav-bar/NavBar'
import HomeProLis from '@/components/pro-lis/Prolis'
import TabControl from '@/components/tab-control/TabControl'
import Scroll from '@/components/scroll/Scroll'
import BackTop from '@/components/backtop/BackTop'

//导入自用组件
import HomeSwiper from './refsViews/HomeSwiper'
import HomeRec from './refsViews/HomeRec'
import HomeFea from './refsViews/HomeFea'

//网络请求内容
import {getHomeData,getProData} from '@/network/home'
export default {
  data(){
    return{
      banners:[],
      recommend:[],
      proLis:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      tabControlTiele:['流行','新款','精选'],
      ProLisType:'pop',
      tabControlTop:0,
      show:false,
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRec,
    HomeFea,
    HomeProLis,
    TabControl,
    Scroll,
    BackTop
  },
  methods: {
    BackTop(){
      this.$refs.wrapper.scroll.scrollTo(0,0,500)
    },
    changeType(index){
      switch(index){
        case 0: this.ProLisType = "pop"
        break;
        case 1: this.ProLisType = "new"
        break;
        case 2: this.ProLisType = "sell"
        break;
      }
      this.$refs.tabcontrol.index = this.$refs.tabcontrol.index
      this.$refs.tabcontrol1.index = this.$refs.tabcontrol.index
      this.$refs.wrapper.scroll.scrollTo(0,-this.tabControlTop,500)
    },
    getPosi(pos){
      this.show = -pos.y > -1000
      if(-pos.y >= this.tabControlTop){
        this.show = true
      }else{
        this.show = false
      }
    },
    LoadMore(){
      this.getProData(this.ProLisType)
    },
    // bannerload(){
    //   this.tabControlTop = this.$refs.tabcontrol.$el.offsetTop-40
    // },

    //网络请求方法 
    getHomeData(){
      getHomeData().then(res=>{
        //banner的数据
        this.banners.push(...res.data.banner.list)

        //recommend的数据
        this.recommend.push(...res.data.recommend.list)
      })
    },
    getProData(type){
      let page = 1;
      getProData(type,page).then(res=>{
        this.proLis[type].list.push(...res.data.list)
        this.proLis[type].page += 1

        this.$refs.wrapper.scroll.finishPullUp()
      })
    }
  },
  created() {  //拿数据用创建之后
    this.getHomeData()
    this.getProData('pop')
    this.getProData('new')
    this.getProData('sell')
  },
  mounted() {
    //简单的防抖
    let timeout = null;
    this.$bus.$on('loadImg',()=>{
      if(timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.$refs.wrapper.scroll.refresh()
      }, 1000)
    })
  },
  beforeUpdate() {
    this.tabControlTop = this.$refs.tabcontrol.$el.offsetTop
  },
  computed: {
  },
}
</script>

<style lang="less" scoped>
#homePage{
  max-width: 100vh;
  max-height: 100vh;
}
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}
.center h2{
  letter-spacing: 1px;
}
.wrapper{
    overflow: hidden;
    height: calc(100vh - 6.5vh - 7.5vh)
    // position: absolute;
    // left:0;
    // right: 0;
    // top:6.5vh;
    // bottom: 7.5vh;
}
.abso{
  position: absolute;
  width:100%;
}
</style>