<template>
    <div class="panel__wrap">
        <route-name></route-name>
        <div class="panel__grid">
              <div class="d-flex flex-column">
                <panel-navigation
                v-for="navigation of navigations" :key="navigation.id"
                :navigation="navigation"
                ></panel-navigation>
              </div>
              <div class="panel__project-list" v-if="projects.length > 0" >
                  <panel-project-row
                    v-for="project of projects" :key="project.applicationName"
                    :project="project"
                  ></panel-project-row>
              </div>
              <div class="panel__list-empty" v-else>
                  <span>Your project list is empty</span><div></div>
              </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import panelNavigation from '@/components/panel/Panel-navigation.vue'
import panelProjectRow from '@/components/panel/Panel-project-row.vue'
import routeName from '@/partials/Route-name.vue'
export default {
    name: 'panel',
    components:{
        panelNavigation,
        panelProjectRow,
        routeName
    },
    created(){
        this.getProjects();
    },
    computed:{
        ...mapGetters({
            projects:"panel/getProjects",
            navigations:"panel/getNavigations"
        })
    },
    methods:{
        ...mapActions({
            getProjects:"panel/getProjects"
        })
    }

}
</script>

<style scoped lang="scss">

    .panel{
        &__grid{
            width: 90vw;
            margin:0 auto;
            padding-top: 2rem;
            display: grid;
            grid-template-columns: 1fr 4fr;
            column-gap: 2rem;
        }
        &__list-empty{
            display:flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 1.2rem;
            color: #5a5a5a;

        }
    }
    @media (max-width: 600px) {
        .panel{
            &__wrap{
                overflow: hidden;
            }
            &__grid{
                display: grid;
                grid-template-rows: auto auto;
                grid-template-columns: auto;
                column-gap: 2rem;
            }
            &__list-empty{
                justify-content:center;
            }
        }
    }
</style>