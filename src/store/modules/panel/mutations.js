import {
    MUTATE_PROJECTS
} from './mutation-types'

export default {
    [MUTATE_PROJECTS](state,projectList){
        state.projects = projectList
    }
  }