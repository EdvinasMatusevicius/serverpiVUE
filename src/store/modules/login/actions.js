import {
    MUTATE_MODEL,
    MUTATE_ERRORS
} from './mutation-types'
import api from '@/api/api.js'


export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
    },
    mutateErrors({commit},errors){
      commit(MUTATE_ERRORS,errors)
    },
    async login({ dispatch }, { email, password }) {
      await api.login(
        {
          email,
          password: password
        },
        (tokenData) => {
          dispatch('session/saveToken', tokenData,{root:true});
          dispatch('session/mutateLogedStatus', true,{root:true});
        },
        (errors) => {
          console.log(errors);
          dispatch('mutateErrors',errors)
        }
      )
    },
  
    async logout({ dispatch }) {
      await api.logout(
        () => {
          dispatch('session/mutateLogedStatus',false,{root:true});
        },
        (errors) => {
          console.error(errors);
        }
      )
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