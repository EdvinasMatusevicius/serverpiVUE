<template>
    <div class="row__grid">
        
        <v-icon v-if="project.language == '1'" color="primary" class="row__language">mdi-language-php</v-icon>
        <v-icon v-if="project.language == '2'" color="secondary" class="row__language">mdi-vuejs</v-icon>
        <v-icon v-if="project.language == '3'" color="error" class="row__language">mdi-language-html5</v-icon>
        <div class="d-flex justify-center row__name">
            {{project.applicationName}}
        </div>
        <div class="row__controls justify-md-end">
            <v-btn class="ml-1" color="primary" outlined tile small v-if="project.deployed" :href="projectUrl"><v-icon left>mdi-door-open</v-icon>Open project</v-btn>
            <v-btn class="ml-1" color="accent" outlined tile small :href="project.giturl"><v-icon left>mdi-github</v-icon>Github</v-btn>
            <v-btn class="ml-1 text-decoration-none" color="secondary" outlined tile small :to="projectSetup"><v-icon left>mdi-cog</v-icon>Project setup</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name:'project-row',
    props:['project'],
    data(){
        return{
            projectUrl: this.projectUrlBuid(),
            projectSetup:this.projectSetupUrl()
        }
    },
    methods:{
        projectUrlBuid(){
            return `http://${this.project.slug}.serverpi.ddns.me/`
        },
        projectSetupUrl(){
            return `/shell/${this.project.slug}/${this.project.language}`
        }
    }
}
</script>

<style scoped lang="scss">

    .row{
        &__grid{
            display: grid;
            grid-template-columns: 10% 3fr 4fr;
            border-bottom:1px solid #ebe8e8;
            margin-bottom: 1rem;
            text-align: center;
            background:#ffffff
        }
        &__name{
            color: #5a5a5a;
        }
        &__controls{
            display: flex;
            // justify-content: end;
            align-items: center;
        }
        // &__language{
        //     margin-left:1rem;
        // }
    }
      @media (max-width: 960px){
          .row{
                &__grid{
                    grid-template-rows:1fr 1fr 1fr;
                    grid-template-columns:auto;
                }
                &__controls{
                    justify-content: center;
                }
          }
      }
</style>