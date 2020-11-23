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
            :label="component.label"
        ></text-area>
        <!-- form -->
        <controlls-form
            v-if="component.type === 'form'"
            :component="component"
        ></controlls-form>

       <overlay
            v-if="component.type === 'overlay'"
            :component="component"
       ></overlay>

       <switch-button
           v-if="component.type === 'switch'"
           :component="component"
       ></switch-button>

       <img-upload
           v-if="component.type === 'img-upload'"
           :component="component"
       ></img-upload>
    </div>
</template>

<script>
import textArea from '@/components/shell/controlls-components/Shell-controlls-textarea.vue';
import infoArea from '@/components/shell/controlls-components/Shell-controlls-infoarea.vue';
import textField from '@/components/shell/controlls-components/Shell-controlls-textfield.vue';
import controllsButton from '@/components/shell/controlls-components/Shell-controlls-button.vue';
import controllsForm from '@/components/shell/controlls-components/Shell-controlls-form.vue';
import overlay from '@/components/shell/controlls-components/Shell-controlls-overlay.vue';
import switchButton from '@/components/shell/controlls-components/Shell-controlls-switch.vue';
import imgUpload from '@/components/shell/controlls-components/Shell-controlls-img-upload.vue';
export default {
    name:'shell-controll-components',
    props:['component','model'],
    components:{
        textArea,
        infoArea,
        textField,
        controllsButton,
        controllsForm,
        overlay,
        switchButton,
        imgUpload
    },

    
}
</script>

<style>

</style>