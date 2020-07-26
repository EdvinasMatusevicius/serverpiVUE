import {
    MUTATE_MODEL,
    MUTATE_SHELL_OUTPUT,
    MUTATE_SHELL_ERRORS
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
  }