import {
    MUTATE_USER
} from './mutation-types'

export default {
    [MUTATE_USER]({user},userInfo){
        console.log(userInfo,'in mutation');
        user = userInfo
    }
  }