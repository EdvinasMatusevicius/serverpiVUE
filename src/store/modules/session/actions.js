import {
    MUTATE_USER
} from './mutation-types'
import api from '@/api/api.js'


export default {
    mutateUser({commit},userInfo){
      commit(MUTATE_USER,userInfo);
    },

    saveToken({ dispatch }, tokenData) {
      localStorage.authToken = JSON.stringify(tokenData);
      console.log('pries getuser dispatch');
      dispatch('getUserData');
    },
  
    async getUserData({ dispatch }) {
      console.log('pries getuser api call')

      await api.getUser(
        (data) => {
          dispatch('mutateUser',data)
        },
        (errors) => {
          console.error(errors);
        }
      )
    },

}