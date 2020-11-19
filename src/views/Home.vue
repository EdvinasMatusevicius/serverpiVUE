<template>
<v-container>
  <v-layout row wrap>
      <project-card
      v-for="(project,i) in projects" v-bind:key="i"
      :avatar="project.image"
      :username="project.name"
      :projectImg="project.image ? 'http://localhost:8000/'+project.image : require('@/assets/placeholder4.png')"
      :projectName="project.applicationName"
      :projectDescription="project.description"
      :projectLink="'http://'+project.slug +'.serverpi.ddns.me'"
      :gihub="project.giturl"
      />
  </v-layout> 
</v-container>
</template>

<script>
import projectCard from '@/components/home/Home-project-card.vue';
import api from '@/api/api.js';

export default {
  name: 'Home',
  components: {
    projectCard
  },
  created(){
    this.getSharedProjects();
  },
  data(){
    return{
      projects:[]
    }
  },
  methods:{
    async getSharedProjects(){
     await api.getSharedProjects(
       (res)=>{
        this.projects = res
     },
     (err)=>{});
    },
  }
}
</script>
<style lang="scss">

</style>