import {
    MUTATE_MODEL
} from './mutation-types'

export default {
    [MUTATE_MODEL]({models},modelInfo){
        models[modelInfo.name] = modelInfo.value
    }
  }