<template>

    <v-text-field
        v-model="inputModel"
        :rules="rules"
        :type="inputInfo.type"
        :label="inputInfo.label"
        :name="inputInfo.name"
    >
    </v-text-field>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name:'dynamic-input',
    props:['inputInfo','formtype'],
    data(){
        return {
            rules:this.getRules(),
            inputModel:""
        }
    },
    watch:{
        inputModel: function(newVal){
            const modelInfo = {form:this.formtype,name:this.inputInfo.inputModel,value:newVal};
            console.log(modelInfo);
            this.mutateModel(modelInfo);
        }
    },
    methods:{
        ...mapMutations({
            mutateModel:"loginRegister/mutateModel"
        }),
        getRules(){
             let rulesArr = [];
             this.inputInfo.validations.forEach(validation => {
                switch (validation.validation) {
                        case 'required':
                            rulesArr.push(this.required(this.inputInfo.name))
                        break;
                        case 'length':
                            rulesArr.push(this.length(validation.min,validation.max,this.inputInfo.name));
                        break;
                        case 'email':
                            rulesArr.push(this.email())
                        break;
                
                    default:
                        break;
                }
            });
            return rulesArr;

        },
        required(name){
            return v=> !!v || `${name} field is required`;
        },
        email(){
            return v => /.+@.+\..+/.test(v) || 'E-mail must be valid';
        },
        length(min,max,name){
            return v =>  (v.length > min && v.length < max)  || `${name} can't be shorter than ${min} and longer than ${max} characters`;
            }

    }
    
}
</script>