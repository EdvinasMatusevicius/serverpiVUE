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
                    <!-- <div v-if="formComponent.type === 'button'" class="controlls__btn d-inline-flex justify-center">
                        <div class="align-self-center">{{formComponent.name}}</div>
                        <v-spacer></v-spacer>
                        <v-btn @click="dynamicMethodsHandler(formComponent.method,formComponent.params ? formComponent.params : null)" outlined fab :color="formComponent.color" class="align-self-center">
                            <v-icon>{{component.icon}}</v-icon>
                        </v-btn>
                    </div> -->
            </v-form>
        </div>
</template>

<script>
import infoArea from '@/components/shell/controlls-components/Shell-controlls-infoarea.vue'
import textField from '@/components/shell/controlls-components/Shell-controlls-textfield.vue'
import controllsButton from '@/components/shell/controlls-components/Shell-controlls-button.vue'

export default {
    name:"shell-component-form",
    props:['component','variables','dynamicMethodsHandler'],
    components:{
        infoArea,
        textField,
        controllsButton,
    }
    
}
</script>

<style>

</style>