import {
    MUTATE_MODEL,
    MUTATE_SHELL_OUTPUT,
    MUTATE_SHELL_ERRORS,
    MUTATE_DATABASE,
    MUTATE_SHARE
} from './mutation-types'

export default {
    [MUTATE_MODEL]({models},modelInfo){
        models[modelInfo.model] = modelInfo.value
    },
    [MUTATE_SHELL_OUTPUT]({shell},outputInfo){
        shell.output = outputInfo
    },
    [MUTATE_SHELL_ERRORS]({shell},errorInfo){
        shell.errors = errorInfo
    },
    [MUTATE_DATABASE](state,dbStatus){
        state.database = dbStatus
    },
    [MUTATE_SHARE](state,share){
        state.share = share
    },
  }