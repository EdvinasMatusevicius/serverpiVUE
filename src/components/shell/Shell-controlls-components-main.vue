<template>
    <div>
        <!-- button -->
        <controlls-button
            :component="component"
            :dynamicMethodsHandler="dynamicMethodsHandler"
        ></controlls-button>
        <!-- textara -->
        <text-area
            :type="component.type"
            :model="$data[component.model]"
            @newEnvEditState2="(val)=>$data[component.model] = val"
        ></text-area>
        <!-- form -->
        <controlls-form
        
        ></controlls-form>
        <!-- <div v-if="component.type === 'form'">
            <v-form :ref="component.ref">
                <div v-for="formComponent in component.formComponents" :key="formComponent.id">
                    <info-area
                    :type="formComponent.type"
                    :info="variables[formComponent.info]"
                    ></info-area>

                    <text-field
                        :formComponent="formComponent"
                        :variables="variables"
                        :rules="rules"
                    ></text-field>
                </div>
                     <div v-if="formComponent.type === 'button'" class="controlls__btn d-inline-flex justify-center">
                        <div class="align-self-center">{{formComponent.name}}</div>
                        <v-spacer></v-spacer>
                        <v-btn @click="dynamicMethodsHandler(formComponent.method,formComponent.params ? formComponent.params : null)" outlined fab :color="formComponent.color" class="align-self-center">
                            <v-icon>{{component.icon}}</v-icon>
                        </v-btn>
                    </div>
            </v-form>
        </div> -->
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
            // rules:this.getRules(),
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
    methods:{
        // getRules(){
        //     let rulesArr = [];
        //     this.inputInfo.validations.forEach(validation => {
        //         switch (validation.validation) {
        //                 case 'required':
        //                     rulesArr.push(this.required())
        //                 break;
        //             default:
        //                 break;
        //         }
        //     });
        //     return rulesArr;

        // },
        required(){
            return v=> !!v || `Field is required`;
        },
    }
}
</script>

<style>

</style>