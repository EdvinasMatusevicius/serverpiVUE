import {
    MUTATE_MODEL
} from './mutation-types'
import api from '@/api/api.js'
import router from '@/router/index'


export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
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
        (err)=>{
          router.push('new-app');
          dispatch('session/mutateReqStatus', false,{root:true});
          console.log(err)
        }
        )
    }
}