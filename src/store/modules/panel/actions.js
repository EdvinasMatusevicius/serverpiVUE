import {
    MUTATE_PROJECTS
} from './mutation-types'
import api from '@/api/api.js'

export default {
    mutateProjects({commit},projectList){
      commit(MUTATE_PROJECTS,projectList);
    },

    async getProjects({commit,dispatch}){
        await api.getProjects(
            (projectsList)=>{
                dispatch('mutateProjects',projectsList);
            },
            (err)=>{
                console.log(err)
            }
        )
    }
}