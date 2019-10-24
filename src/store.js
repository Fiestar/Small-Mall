import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './store/mutations'
import actions from './store/actions'
import getters from './store/getters'

export default new Vuex.Store({
  state :{
    cartGoods:[]
  },
  mutations,
  actions,
  getters
})
