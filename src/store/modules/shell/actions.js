import {
    MUTATE_MODEL,
    MUTATE_SHELL_OUTPUT,
    MUTATE_SHELL_ERRORS,
    MUTATE_DATABASE,

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
    mutateDatabase({commit},dbStatus){
      commit(MUTATE_DATABASE,dbStatus);
    },
    async runShellCmd({dispatch},body){
      console.log(body);
      dispatch('session/mutateReqStatus', true,{root:true});

      await api.runShellCmd({
        ...body
      },
      (response)=>{
        dispatch('session/mutateReqStatus', false,{root:true});
        if(body.method){
          dispatch(body.method,response)
        }
      },
      (err)=>{
        dispatch('session/mutateReqStatus', false,{root:true});

        console.log(err)
      }
      )
    },
    async getShell({dispatch}){
      await api.getShell(
        (shell) => {
          dispatch('mutateOutput',shell.output),
          dispatch('mutateErrors',shell.errors)
        },
        (errors) => {
          console.error(errors);
        }
      )
    },
    async getApplicationDatabase({commit,dispatch},slug){
      await api.getApplicationDatabase({
              slug
          },
          (dbStatus)=>{
              console.log(dbStatus)
              dispatch('mutateDatabase',dbStatus);
          },
          (err)=>{
              console.log(err)
          }
      )
    },
    fillEnvVars({dispatch},response){
      const modelInfo = {
        model:'envVars',
        value: response.data.values
      };
      dispatch('mutateModel',modelInfo)
    },
    clearEnvVars({dispatch},response){
      const modelInfo = {
        model:'envVars',
        value: ''
      };
      dispatch('mutateModel',modelInfo)
    }
    
}