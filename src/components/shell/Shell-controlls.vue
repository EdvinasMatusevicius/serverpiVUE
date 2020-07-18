<template>
          <v-expansion-panels class="controlls">
           <v-expansion-panel  v-for="group of controlls" v-bind:key="group.id" class="controlls__panel">
             <v-expansion-panel-header>{{group.groupName}} </v-expansion-panel-header>
             <v-expansion-panel-content>

                 <div v-for="component of group.components" :key="component.id" >
                     
                    <shell-component
                        :component="component"
                        :dynamicMethodsHandler="dynamicMethodsHandler"
                        :variables="variables"
                        :model="component.model?$data[component.model] : false"
                         @newEnvEditState="(val)=>$data[component.model] = val"
                        >
                    </shell-component>

                        
                </div>

             </v-expansion-panel-content>
           </v-expansion-panel>
         </v-expansion-panels>
</template>

<script>
import ShellComponent from '@/components/shell/Shell-controlls-components-main.vue'
import {mapGetters} from 'vuex';
export default {
    name:"shell-controlls",
    components:{
        ShellComponent
    },
    data(){
           return{
            areaData:"",
            variables:{
                dbinfo:`DB_CONNECTION=mysql
                    DB_HOST=127.0.0.1
                    DB_PORT=3306
                    DB_DATABASE=serverpi
                    DB_USERNAME=root
                    DB_PASSWORD=`,//run showDbVariables method
                hasDbUser:hasDatabaseUser(), //write has db user method
                appHasDb:appHasDatabase(),//same here
                registerDbUserPassword:'',
            },
           }
    },
    computed:{
        ...mapGetters({
            controlls:"shell/getControlls"
        })
    },
    methods:{
           // takes in method name and array of params in string form and calls needed method
           dynamicMethodsHandler(method,params){
               this[method](...params);
           },
           composerInstall(){

           },
           fillEnvTextArea(model){
               this[model]="";
               //get from back
               this[model]=
               `bam bam
                biri bam
                slam gam slaman fucl`;
           },
           saveEditedEnvData(model){
               // save to back
               this[model]="";
           },
           showDbVariables(){
               const projectName = 'serverpi';
               const username = 'dude';
               return `DB_CONNECTION=mysql
                DB_HOST=127.0.0.1
                DB_PORT=3306
                DB_DATABASE=${projectName}
                DB_USERNAME=${username}
                DB_PASSWORD=(your mysql user password)`;
           },
           hasDatabaseUser(){
               return falsel
           },
           appHasDatabase(){
               return false;
           }
       },
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
            border:1px solid beige;
        }
    }
</style>