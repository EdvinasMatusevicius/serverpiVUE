import {
    MUTATE_MODEL,
    MUTATE_SHELL_OUTPUT,
    MUTATE_SHELL_ERRORS,
    MUTATE_DATABASE,
    MUTATE_SHARE,
} from './mutation-types'
import api from '@/api/api.js';
import router from '@/router/index.js'


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
    mutateShare({commit},status){
      commit(MUTATE_SHARE,status)
    },
    async runShellCmd({dispatch},body){
      dispatch('session/mutateReqStatus', true,{root:true});

      await api.runShellCmd({
        ...body
      },
      (response)=>{
        dispatch('session/mutateReqStatus', false,{root:true});
        if(body.method){
          console.log(body.method);
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
    async getDbStatus({dispatch},payload){
      dispatch('getApplicationDatabase',payload);
      dispatch('session/getUserData',null,{root:true});
    },

    async getApplicationDatabase({commit,dispatch},{slug}){
      await api.getApplicationDatabase({
              slug
          },
          (dbStatus)=>{
              dispatch('mutateDatabase',dbStatus);
          },
          (err)=>{
              console.log(err)
          }
      )
    },
    async getApplicationShareStatus({dispatch},slug){
      await api.getApplicationShareStatus(slug,
        (shareStatus)=>{
          console.log(shareStatus)
          dispatch('mutateShare',shareStatus)
        },
        (error)=>{
          console.log(error)
        }
        )
    },
    fillEnvVars({dispatch},response){
      const modelInfo = {
        model:'envVars',
        value: response.values
      };
      dispatch('mutateModel',modelInfo)
    },
    clearEnvVars({dispatch},response){
      const modelInfo = {
        model:'envVars',
        value: ''
      };
      dispatch('mutateModel',modelInfo)
    },
    redirectToPanel(context){
      router.push('/panel');
    }
    
}