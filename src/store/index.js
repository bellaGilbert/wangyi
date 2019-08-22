import Vuex from 'vuex'
import Vue from 'vue' 

import home from './modules/home'
import categray from './modules/categray'
import mutations from './mutations'
import actions from './actions'
import second from './modules/second'
import getters from './getters'

// 声明使用vue插件
Vue.use(Vuex)


export default new Vuex.Store({
  mutations,
  actions,
  getters,
  // 配置应用中所有的功能相关的配置
  modules: {
    home,
    categray,
    second
  }
})