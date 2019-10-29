<template>
  <div id="detail">
    <nav-bar class="nav-bar" @itemClick='itemClick' ref="bar"/>
    <scroll @imageLoad='imgload' ref="wrapper" @getPosi='getShow' :probeType='3'>
      <detail-swiper :banners='banner' />
      <detail-base-info :baseinfo='DetailInfo' ref="detailinfo"/>
      <detail-store-info :shop='storeInfo' ref="storeinfo"/>
      <detail-pro-param :proparam='proparam' ref="proparam"/>
      <detail-rec :recommendInfo='recommend' @imageLoad='imageLoad' ref="rec"/>
    </scroll>
    <detail-bottom @addCart = "addCart"/>
    <back-top @click.native="backtop" v-show="show"/>
  </div>
</template>

<script>
//公共组件
import Scroll from '@/components/scroll/Scroll'
import BackTop from '@/components/backtop/BackTop'

//导入自用组件
import NavBar from './refsFile/DetailNavBar'
import DetailSwiper from './refsFile/DetailSwiper'
import DetailBaseInfo from './refsFile/DetailBaseInfo'
import DetailStoreInfo from './refsFile/DetailShopInfo'
import DetailProParam from './refsFile/DetailParamInfo'
import DetailRec from './refsFile/DetailRec'
import DetailBottom from './refsFile/DetailBottomBar'

//网络请求
import {GetDetailData,DetailInfo,storeInfo,ProParam} from '@/network/detail'
export default {
  name:'Detail',
  components:{
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailStoreInfo,
    DetailProParam,
    DetailRec,
    DetailBottom,
    Scroll,
    BackTop
  },
  props:{
  },
  data(){
    return{
      iid:null,
      banner:[],
      DetailInfo: {},
      storeInfo:{},
      proparam:{},
      recommend:{},
      show:false,
      scrollY:[]
    }
  },
  created() {
    this.iid = this.$route.query.iid
    GetDetailData(this.iid).then(res=>{
      const data = res.result;
      //获取商品banner图
      this.banner.push(...data.itemInfo.topImages)
      //获取商品基本信息
      this.DetailInfo = new DetailInfo(data.itemInfo,data.columns, data.shopInfo.services)
      //获取店铺基本信息
      this.storeInfo = new storeInfo(data.shopInfo)

      //获取商品参数
      this.proparam = new ProParam(data.itemParams.info,data.itemParams.rule)

      // 获取推荐数据
      this.recommend = data.detailInfo
    })
  },
  methods: {
    imgload(){
      this.$refs.wrapper.scroll.refresh()
    },
    backtop(){
      this.$refs.wrapper.scroll.scrollTo(0,0,500)
    },
    getShow(pos){
      this.show = pos.y < -500
      // 根据滚动映射高亮
      let i = 0;
      if(-pos.y >= 0 && -pos.y < this.scrollY[1]) {
          i = 0;
      }
      if(-pos.y >= this.scrollY[1] && -pos.y < this.scrollY[2]) {
        i = 1;
      }
      if(-pos.y >= this.scrollY[2] && -pos.y < this.scrollY[3]) {
        i = 2;
      }
      if(-pos.y >= this.scrollY[3]) {
        i = 3;
      }
      // this.currentIndex = i;
      this.$refs.bar.currentIndex = i;
    },
    addCart() {
      //获取购物车需要展示的信息，对象的形式
      const product = {};
      product.image = this.banner[0];
      product.title = this.DetailInfo.title;
      product.desc = this.DetailInfo.desc;
      product.price = this.DetailInfo.realPrice;
      product.iid = this.iid;
      product.newPrice = this.newPrice;

      //将商品添加购物车里 vuex
      this.$store.dispatch('addCart',product).then(res => {
        alert(res)
      })
    },
    imageLoad(){
      this.$refs.wrapper.scroll.refresh()
      let timeout = null;
      if(timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(() => {
        this.scrollY = []
        this.scrollY.push(0);
        this.scrollY.push(this.$refs.proparam.$el.offsetTop);
        this.scrollY.push(this.$refs.rec.$el.offsetTop);
        this.scrollY.push(this.$refs.rec.$el.offsetTop);
      }, 1000)
    },
    //防抖
    // debounce(func,delay) {  
    //   let timer = null
    //   return function () {
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(()=> {
    //       func()
    //     },delay)
    //   }
    // },
    itemClick(i) {
      this.$refs.wrapper.scroll.scrollTo(0,-this.scrollY[i],500)
    },
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
#wrapper{
  height: calc(100vh - 6.5vh - 7.5vh);
  overflow: hidden;
}
.nav-bar{
  position: relative;
  z-index: 9;
}
#detail{
  height: 100vh;
  position: relative;
  z-index:999;
  background-color: #fff;
}
</style>