import {
    MUTATE_MODEL
} from './mutation-types'
import api from '@/api/api.js'


export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
    },
   
    async login({ dispatch }, { email, password }) {
      await api.login(
        {
          email,
          password: password
        },
        (tokenData) => {
          dispatch('session/saveToken', tokenData,{root:true});
          console.log('prisijungeme sekmingai');
        },
        (errors) => {
          console.log(errors);
        }
      )
    },
  
    async logout() {
      localStorage = {};
    },
  
    saveDataToLocalStorage({ commit }, email) {
      commit(LOGIN_SUCCESS);
      commit(SET_EMAIL, email);
    },
  
    loginSuccess({ commit }, { email, token }) {
      localStorage.setItem('token', token);
      commit(LOGIN_SUCCESS);
      commit(SET_EMAIL, email);
    }
}