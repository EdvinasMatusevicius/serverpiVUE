import {
    MUTATE_MODEL,
    MUTATE_ERRORS
} from './mutation-types'
import api from '@/api/api.js'
import router from '@/router/index'


export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
    },
    mutateErrors({commit},errors){
      commit(MUTATE_ERRORS,errors)
    },
   async addProject({commit,dispatch},modelInfo){
      router.push('shell-solo');
      dispatch('session/mutateReqStatus', true,{root:true});
      await api.addProject(
        {
          applicationName:modelInfo.applicationName,
          applicationSlug:modelInfo.applicationSlug,
          giturl:modelInfo.giturl,
          language:modelInfo.language
        },
        (response)=>{
          dispatch('session/mutateReqStatus', false,{root:true});
          router.push('panel');
        },
        (errors)=>{
          router.push('new-app');
          dispatch('session/mutateReqStatus', false,{root:true});
          dispatch('mutateErrors',errors)
          console.log(errors)
        }
        )
    }
}