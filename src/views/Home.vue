<template>
<v-container>
  <v-layout row wrap>
      <project-card
      v-for="project in projects" v-bind:key="project.id"
      :avatar="project.avatar"
      :username="project.username"
      :projectImg="project.projectImg"
      :projectName="project.projectName"
      :projectDescription="project.projectDescription"
      :projectLink="project.projectLink"
      :gihub="project.gihub"
      />
  </v-layout>
</v-container>
</template>

<script>
// @ is an alias to /src
import projectCard from '@/components/cards/Home-project-card.vue'

export default {
  name: 'Home',
  components: {
    projectCard
  },

  data(){
    return{
      projects:[{
          id:1,
          avatar: require("@/assets/profile.png"),
          username: 'John ',
          projectImg: require("@/assets/placeholder1.png"),
          projectName: 'Reddit',
          projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id culpa optio animi soluta, saepe numquam ut dolore eveniet deserunt minima consectetur, ad repellat. Repudiandae omnis, corporis rem accusantium saepe at",
          projectLink:'https://www.reddit.com',
          gihub:'https://github.com/EdvinasMatusevicius/serverpi'
        },
        {
          id:2,
          avatar: require("@/assets/profile.png"),
          username: 'John',
          projectImg: require("@/assets/placeholder2.png"),
          projectName: 'Youtube',
          projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id culpa optio animi soluta, saepe numquam ut dolore eveniet deserunt minima consectetur, ad repellat. Repudiandae omnis, corporis rem accusantium saepe at",
          projectLink:'https://www.reddit.com',
          gihub:'https://github.com/EdvinasMatusevicius/serverpi'
        },
        {
          id:3,
          avatar: require("@/assets/profile.png"),
          username: 'John',
          projectImg: require("@/assets/placeholder3.png"),
          projectName: 'World map',
          projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id culpa optio animi soluta, saepe numquam ut dolore eveniet deserunt minima consectetur, ad repellat. Repudiandae omnis, corporis rem accusantium saepe at",
          projectLink:'https://www.reddit.com',
          gihub:'https://github.com/EdvinasMatusevicius/serverpi'
        },
        {
          id:4,
          avatar: require("@/assets/profile.png"),
          username: 'John ed',
          projectImg: require("@/assets/placeholder4.png"),
          projectName: 'Basic Chat',
          projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id culpa optio animi soluta, saepe numquam ut dolore eveniet deserunt minima consectetur, ad repellat. Repudiandae omnis, corporis rem accusantium saepe at",
          projectLink:'https://www.reddit.com',
          gihub:'https://github.com/EdvinasMatusevicius/serverpi'
        },
        {
          id:5,
          avatar: require("@/assets/profile.png"),
          username: 'John ed',
          projectImg: require("@/assets/placeholder5.png"),
          projectName: 'Darbo baze',
          projectDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id culpa optio animi soluta, saepe numquam ut dolore eveniet deserunt minima consectetur, ad repellat. Repudiandae omnis, corporis rem accusantium saepe at",
          projectLink:'https://www.reddit.com',
          gihub:'https://github.com/EdvinasMatusevicius/serverpi'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

</style>