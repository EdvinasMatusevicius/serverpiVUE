import {
    MUTATE_USER,
    MUTATE_LOGED_STATUS
} from './mutation-types'
import api from '@/api/api.js'


export default {
    mutateUser({commit},userInfo){
      commit(MUTATE_USER,userInfo);
    },
    
    mutateLogedStatus({commit},boolVal){
      if(!boolVal && localStorage.getItem('authToken')){
        localStorage.removeItem('authToken')
      }
      commit(MUTATE_LOGED_STATUS,boolVal);
    },

    saveToken({ dispatch }, tokenData) {
      const token = JSON.stringify(tokenData);
      localStorage.setItem('authToken', token);
      setTimeout(() => {
        dispatch('getUserData');
      }, 0);
    },
    async getUserData({ dispatch }) {
      if(localStorage.authToken){
        await api.getUser(
          (data) => {
            dispatch('mutateUser',data)
          },
          (errors) => {
            console.log(errors);
          }
        )
      }
    },

}