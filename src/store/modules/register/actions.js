import {
    MUTATE_MODEL
} from './mutation-types'

export default {
    mutateModel({commit},modelInfo){
      commit(MUTATE_MODEL,modelInfo);
    },
    async register({commit},someLoginInfo){

    }
}