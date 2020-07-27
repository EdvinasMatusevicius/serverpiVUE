<template>
    <div>
        <!-- button -->
        <controlls-button
            v-if="component.type === 'button'"
            :component="component"
        ></controlls-button>
        <!-- textara -->
        <text-area
            v-if="component.type === 'textarea'"
            :type="component.type"
            :model="component.model"
        ></text-area>
        <!-- form -->
        <controlls-form
            v-if="component.type === 'form'"
            :component="component"
        ></controlls-form>
       
    </div>
</template>

<script>
import textArea from '@/components/shell/controlls-components/Shell-controlls-textarea.vue';
import infoArea from '@/components/shell/controlls-components/Shell-controlls-infoarea.vue';
import textField from '@/components/shell/controlls-components/Shell-controlls-textfield.vue';
import controllsButton from '@/components/shell/controlls-components/Shell-controlls-button.vue';
import controllsForm from '@/components/shell/controlls-components/Shell-controlls-form.vue';
export default {
    name:'shell-controll-components',
    props:['component','model'],
    components:{
        textArea,
        infoArea,
        textField,
        controllsButton,
        controllsForm
    },

    
}
</script>

<style>

</style>