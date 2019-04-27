import Vue from 'vue'
import Vuex from 'vuex'
import HomeStore from './home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    HomeStore
  }
})
