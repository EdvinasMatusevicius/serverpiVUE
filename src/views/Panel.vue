<template>
    <div>
        <route-name></route-name>
        <div class="panel__grid">
              <div class="d-flex flex-column">
                <panel-navigation
                v-for="navigation of navigations" :key="navigation.id"
                :navigation="navigation"
                ></panel-navigation>
              </div>
              <div class="panel__project-list">
                  <panel-project-row
                  v-for="project of projects" :key="project.name"
                  :project="project"
                  ></panel-project-row>
              </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    computed:{
        ...mapGetters({
            projects:"panel/getProjects",
            navigations:"panel/getNavigations"
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
    }
    @media (max-width: 600px) {
        .panel{
            &__grid{
                // width: 90vw;
                margin:0 auto;
                // padding-top: 2rem;
                display: grid;
                grid-template-rows: auto auto;
                grid-template-columns: auto;
                column-gap: 2rem;
            }
        }
    }
</style>