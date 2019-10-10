import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const home = () => import('./views/home/Home.vue')
const category = ()=> import('./views/category/Category.vue')
const carts = ()=> import('./views/carts/Carts.vue')
const profile = () => import("./views/profile/Profile.vue")
const detail = ()=> import('./views/detail/Detail.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'',redirect:'/home'},
    {path:"/home",component: home},
    {path:'/category',component: category},
    {path:"/carts",component: carts},
    {path:"/profile",component: profile},
    {path:'/detail',component:detail}
  ]
})
