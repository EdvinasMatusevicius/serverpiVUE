import Vue from 'vue'
import Vuex from 'vuex'
import shell from './modules/shell'
import panel from './modules/panel'
import loginRegister from './modules/login-register'
import newApp from './modules/new-app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shell,
    panel,
    loginRegister,
    newApp,
  }
})
