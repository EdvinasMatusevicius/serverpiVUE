import {
    MUTATE_MODEL,
    MUTATE_SHELL_OUTPUT,
    MUTATE_SHELL_ERRORS

} from './mutation-types'
import api from '@/api/api.js'


export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
    },
    mutateOutput({commit},outputInfo){
      commit(MUTATE_SHELL_OUTPUT,outputInfo);
    },
    mutateErrors({commit},errorInfo){
      commit(MUTATE_SHELL_ERRORS,errorInfo);
    },

    async getShell({dispatch}){
      await api.getShell(
        (shell) => {
          console.log(shell,'actionuose');
          dispatch('mutateOutput',shell.output),
          dispatch('mutateErrors',shell.errors)
        },
        (errors) => {
          console.error(errors);
        }
      )
    }
    
}