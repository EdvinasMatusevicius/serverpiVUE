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

  //----------------------------------MUTATORS
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
//------------------------------------------UNIVERSAL SHELL BUTTON FUNC
    async runShellCmd({dispatch},body){
      // dispatch('session/mutateReqStatus', true,{root:true});
      
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
    //--------------------------------------------------------------------DB GETTERS
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
          dispatch('mutateShare',shareStatus)
        },
        (error)=>{
          console.log(error)
        }
        )
    },
    async getApplicationDescription({dispatch},slug){
      await api.getApplicationDescription(slug,
        (description)=>{
          dispatch('fillDescription',description);
        },
        (error)=>{
          console.log(error)
        }
      )
    },

    //-------------------------------------MUTATOR FUNCTION HELPERS
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
    fillDescription({dispatch},response){
      const modelInfo = {
        model:'description',
        value: response // can change in time
      };
      dispatch('mutateModel',modelInfo)
    },

    //----------------------------------
    redirectToPanel(context){
      router.push('/panel');
    }
    
}