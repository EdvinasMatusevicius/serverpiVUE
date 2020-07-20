<template>
  <div v-if="component.type === 'form'">
            <v-form :ref="component.ref" class="controlls__form">
                <div v-for="formComponent in component.formComponents" :key="formComponent.id">
                    <info-area
                    :type="formComponent.type"
                    :info="variables[formComponent.info]"
                    ></info-area>
                    <text-field  v-if="(formComponent.type === 'input'  && ((formComponent.showIf === undefined) ? true : variables[formComponent.showIf]))"
                        :formComponent="formComponent"
                        :variables="variables"
                    ></text-field>
                    <controlls-button  v-if="formComponent.type === 'button'  && ((formComponent.showIf === undefined) ? true : variables[formComponent.showIf])"
                        :component="formComponent"
                        :dynamicMethodsHandler="dynamicMethodsHandler"
                    ></controlls-button>
                </div>
            </v-form>
        </div>
</template>

<script>
import infoArea from '@/components/shell/controlls-components/Shell-controlls-infoarea.vue'
import textField from '@/components/shell/controlls-components/Shell-controlls-textfield.vue'
import controllsButton from '@/components/shell/controlls-components/Shell-controlls-button.vue'

export default {
    name:"shell-component-form",
    props:['component','variables'],
    components:{
        infoArea,
        textField,
        controllsButton,
    },
    methods:{
        // seperate from components-main because validate need to reach vuetify form this.$ref 

            // takes in method name and array of params in string form and calls needed method
           dynamicMethodsHandler(method,params){
               this[method](...params);
           },
           
          //form validation by form reference
           validate(ref,nextMethod,paramsToNextMethod){
               if(this.$refs[ref].validate()){
                   this.$emit('validationPass',[nextMethod,paramsToNextMethod]);
                }else{
                    console.log('Invalid input'); 
                }
           },
    }
    
}
</script>

<style>

</style>