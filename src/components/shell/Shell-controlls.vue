<template>
          <v-expansion-panels class="controlls" focusable>
           <v-expansion-panel  v-for="group of controlls" v-bind:key="group.id" class="controlls__panel" >
             <v-expansion-panel-header>{{group.groupName}} </v-expansion-panel-header>
             <v-expansion-panel-content>
<br>
                 <div v-for="component of group.components" :key="component.id" >
                     
                    <shell-component
                        :ref="component.ref? component.ref : null"
                        :component="component"
                        :dynamicMethodsHandler="dynamicMethodsHandler"
                        :variables="variables"
                        :model="component.model?$data[component.model] : false"
                         @newEnvEditState="(val)=>$data[component.model] = val"
                         @validationPassTrain="(val)=>dynamicMethodsHandler(...val)"
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
                nginxRouteInfo:`If index file in root write /  if in folder public write /public and so on`,
                needDbAndUser:this.needDatabaseUser(), //write has db user method
                needDb:this.needDatabase(),//same here
                registerDbUserPassword:'',
            },
           }
    },
    computed:{
        ...mapGetters({
            controlls:"shell/getControlls",
            models:"shell/getModels"
        })
    },
    methods:{
           // takes in method name and array of params in string form and calls needed method
           dynamicMethodsHandler(method,params){
               this[method](...params);
           },

            //methods to get values for variables object
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
             needDatabaseUser(){
                return true
            },
            needDatabase(){
                if(this.needDatabaseUser()){
                    return false
                }
                return true
            },
        //    --------------------------------------------------------------
           composerInstall(){

           },
           npmInstall(){

           },
           copyEnvExampe(){

           },
           createEnvFile(){

           },
           generateAppKey(){

           },
           linkStorage(){

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
           registerDb(password){
               if(password === undefined){
                   console.log('db create with existing user')
               }
               if(password){
                   console.log('atejo iki register db  ' + this.models[password])
               }
           },
           migrateDb(){

           },
           gitPull(){

           },
           initiateNginx(route){
               console.log(route);
           },
           runCustomQuery(password,query){

           },
           runCustomArtisan(artisanCommand){

           },
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
        // &__form{
            //for forms inside shell controlls
        // }
    }
</style>