<template>
  <div v-if="component.type === 'form'">
            <v-form :ref="component.ref">
                <div v-for="formComponent in component.formComponents" :key="formComponent.id">
                    <info-area
                    :type="formComponent.type"
                    :info="variables[formComponent.info]"
                    ></info-area>

                    <text-field
                        :formComponent="formComponent"
                        :rules="rules"
                    ></text-field>
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
    name:"shell-component-textfield",
    props:['component','variables','dynamicMethodsHandler'],
    components:{
        infoArea,
        textField,
        controllsButton,
    },
    
}
</script>

<style>

</style>