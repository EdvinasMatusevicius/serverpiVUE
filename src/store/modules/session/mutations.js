import {
    MUTATE_USER,
    MUTATE_LOGED_STATUS,
    MUTATE_REQ_STATUS
} from './mutation-types'

export default {
    [MUTATE_USER](state,userInfo){
        state.user = {...userInfo.data};
    },
    [MUTATE_REQ_STATUS](state,status){
        state.reqStatus = status;
    },
    [MUTATE_LOGED_STATUS](state,boolVal){
        state.isLogedIn = boolVal;
        if(!boolVal){
            state.user = boolVal;
            }
    }
  }