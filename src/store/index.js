import Vue from 'vue'
import Vuex from 'vuex'
import shell from './modules/shell'
import panel from './modules/panel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shell,
    panel
  }
})
