<template>
    <div>
        <!-- button -->
        <controlls-button
            v-if="component.type === 'button'"
            :component="component"
            :dynamicMethodsHandler="dynamicMethodsHandler"
        ></controlls-button>
        <!-- textara -->
        <text-area
            v-if="component.type === 'textarea'"
            :type="component.type"
            :model="$data[component.model]"
            @newEnvEditState2="(val)=>$data[component.model] = val"
        ></text-area>
        <!-- form -->
        <controlls-form
            v-if="component.type === 'form'"
            :component="component"
            :variables="variables"
            @validationPass="(val)=>$emit('validationPassTrain',val)"
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
    props:['component', 'dynamicMethodsHandler','model','variables'],
    components:{
        textArea,
        infoArea,
        textField,
        controllsButton,
        controllsForm
    },
    data(){
        return{
            areaData:this.model?this.model:'',
        }
    },
    watch:{
        areaData: function(newVal){
            this.$emit('newEnvEditState',newVal);
        },
        model:function(){
            this.areaData= this.model
        }
    },
    
}
</script>

<style>

</style>