import {
    MUTATE_MODEL
} from './mutation-types'
import api from '@/api/api.js'


export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
    },
    async register({ dispatch }, payload) {
      await api.register(
        {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          'password_confirmation': payload.passwordRepeat
        },
        (tokenData) => {
          dispatch('session/saveToken', tokenData,{root:true});
          dispatch('session/mutateLogedStatus', true,{root:true});
        },
        (errors) => {
          console.log(errors);
        }
      )
    },
}