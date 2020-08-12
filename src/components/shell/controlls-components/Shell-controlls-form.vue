<template>
  <div v-if="component.type === 'form'">
            <v-form :ref="component.ref" class="controlls__form">
                <div v-for="formComponent in component.formComponents" :key="formComponent.id">
                    <info-area
                    v-if="formComponent.type === 'info-area' && showInfo(formComponent)"
                        :info="formComponent.info"
                        :user="user.name"
                        :db="database"
                    ></info-area>
                    <text-field  
                        v-if="formComponent.type === 'input'  && showIf(formComponent.showIf)"
                        :formComponent="formComponent"
                    ></text-field>
                    <controlls-button  
                        v-if="formComponent.type === 'button'  && showIf(formComponent.showIf)"
                        :component="formComponent"
                        @validate="(info)=>validate(...info)"
                    ></controlls-button>
                </div>
            </v-form>
        </div>
</template>

<script>
import infoArea from '@/components/shell/controlls-components/Shell-controlls-infoarea.vue'
import textField from '@/components/shell/controlls-components/Shell-controlls-textfield.vue'
import controllsButton from '@/components/shell/controlls-components/Shell-controlls-button.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name:"shell-component-form",
    props:['component'],
    components:{
        infoArea,
        textField,
        controllsButton,
    },
    computed:{
        ...mapGetters({
            user:"session/getUser",
            models:"shell/getModels",
            database:"shell/getDatabase"
        })
    },
    methods:{
           ...mapActions({
                runShellCmd:"shell/runShellCmd",
           }),

          //form validation by form reference
           validate(ref,route,modelList,method){
               if(this.$refs[ref].validate()){
                   const payload = this.buildShellPayload(route,modelList,method)
                   this.runShellCmd(payload)
                }else{
                    console.log('Invalid input'); 
                }
           },
           buildShellPayload(route,modelList,method){
               let payload = {
                    route,
                    method,
                    slug:this.$route.params.slug,
               }
               modelList.forEach(modelString => {
                   switch (modelString) {
                       case 'registerDbUserPassword':
                            payload['password']=this.models[modelString]
                           break;
                        case 'customQueryUserPassword':
                            payload['password']=this.models[modelString]
                            break
                       default:
                            payload[modelString]=this.models[modelString]
                           break;
                   }
               });
               return payload;
           }
           ,
           showInfo(formComponent){
               if(formComponent.info === 'dbinfo' && !this.database){
                   return false
               }
                   return true
           },
           showIf(showCondition){
               if(showCondition === undefined){
                   return true
               }else if(showCondition === "needDbAndUser" && !this.user.has_db_user){
                   return true
               }else if(showCondition === "needDb" && !this.database && this.user.has_db_user){
                   return true
               }
               return false
           },
            
    }
    
}
</script>

<style>

</style>