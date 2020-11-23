<template>
          <v-expansion-panels class="controlls" focusable>
           <v-expansion-panel  v-for="group of controlls[language]" v-bind:key="group.id" class="controlls__panel" >
             <v-expansion-panel-header>{{group.groupName}} </v-expansion-panel-header>
             <v-expansion-panel-content>
            <br>
                 <div v-for="component of group.components" :key="component.id" >
                     
                    <shell-component
                        :ref="component.ref? component.ref : null"
                        :component="component"
                    >
                    </shell-component>
                        
                </div>

             </v-expansion-panel-content>
           </v-expansion-panel>
         </v-expansion-panels>
</template>

<script>
import ShellComponent from '@/components/shell/Shell-controlls-components-main.vue'
import {mapGetters, mapActions} from 'vuex';
export default {
    name:"shell-controlls",
    components:{
        ShellComponent
    },
    data(){
        return{
            language:this.appLanguage(),
            slug:this.$route.params.slug
        }
    },
    created(){
        this.getApplicationDb({slug:this.slug}),
        this.getShare(this.slug),
        this.getApplicationDescription(this.slug)
    },
    computed:{
        ...mapGetters({
            controlls:"shell/getControlls",
            models:"shell/getModels"
        })
    },
    methods:{
        ...mapActions({
            getApplicationDb:"shell/getApplicationDatabase",
            getShare:"shell/getApplicationShareStatus",
            getApplicationDescription:"shell/getApplicationDescription"
        }),
        appLanguage(){
            return this.$route.params.language === '1' ? 'php' : 'static'
        }
    }
}
</script>

<style lang="scss">

 .controlls{
        min-width: 15rem;
        height:auto;
        grid-area: control;
        z-index: 0;

        &__btn{
            width: 100%;
        }
        &__form{
            border:5px #e7e7e7;
            margin: 0.2rem 0;
            border-style: solid;
        }
    }
</style>