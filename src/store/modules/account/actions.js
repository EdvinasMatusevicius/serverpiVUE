import {
    // MUTATE_MODEL,  coloned login module left in case similar function is needed
    // MUTATE_ERRORS
} from './mutation-types'
import api from '@/api/api.js'


export default {
    // mutateModel({commit},modelInfo){
    //   commit(MUTATE_MODEL,modelInfo);
    // },
    // mutateErrors({commit},errors){
    //   commit(MUTATE_ERRORS,errors)
    // },
  
    async delete({ dispatch }) {
      await api.deleteAcc()
    }
}