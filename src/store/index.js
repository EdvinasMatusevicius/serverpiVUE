import Vue from 'vue'
import Vuex from 'vuex'
import shell from './modules/shell/index'
import panel from './modules/panel/index'
import login from './modules/login/index'
import register from './modules/register/index'
import newApp from './modules/new-app/index'
import session from './modules/session/index'
import account from './modules/account/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shell,
    panel,
    login,
    register,
    newApp,
    session,
    account
  }
})
