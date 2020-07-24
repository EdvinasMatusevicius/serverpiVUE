import {
    MUTATE_USER,
    MUTATE_LOGED_STATUS
} from './mutation-types'

export default {
    [MUTATE_USER](state,userInfo){
        state.user = {...userInfo.data};
    },
    [MUTATE_LOGED_STATUS](state,boolVal){
        state.isLogedIn = boolVal;
        if(!boolVal){
            state.user = boolVal;
            }
    }
  }