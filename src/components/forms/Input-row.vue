<template>
    <div>
        <v-text-field
            v-if="showTextField()"
            v-model="inputModel"
            :rules="rules"
            :type="inputInfo.type"
            :label="inputInfo.label"
            :name="inputInfo.name"
        >
        </v-text-field>
        <v-select
            v-if="showSelectField()"
            v-model="inputModel"
            :rules="rules"
            :items="inputInfo.items"
            :label="inputInfo.label"
        ></v-select>
    </div>   
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
    name:'dynamic-input',
    props:['inputInfo','formtype'],
    data(){
        return {
            rules:this.getRules(),
            inputModel:"",
        }
    },
    watch:{
        inputModel: function(newVal){
            const modelInfo = {name:this.inputInfo.inputModel,value:newVal};
            this[this.formtype](modelInfo);
        }
    },
    created(){
    },
    methods:{
        ...mapActions({
            login:"login/mutateModel",
            register:"register/mutateModel",
            newApp:"newApp/mutateModel"
        }),
        showTextField(){
            const inputType = this.inputInfo.type;
            if(inputType === 'text' || inputType === 'email' || inputType === 'password'){
                return true
            }
            return false
        },
        showSelectField(){
            const inputType = this.inputInfo.type;
            if(inputType === 'select'){
                return true
            }
            return false
        },
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
                        case 'name':
                            rulesArr.push(this.name())
                        break;
                        case 'applicationName':
                            rulesArr.push(this.applicationName())
                        break;
                        case 'applicationSlug':
                            rulesArr.push(this.applicationSlug())
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
        },
        name(){
            return v => /^[a-zA-Z0-9]+$/.test(v) || 'Name can only contain aphabetic characters and numbers';
        },
        applicationName(){
            return v => /(?! )^([a-zA-Z0-9 ])+(?<! )$/.test(v) || 'Application name can only contain aphabetic characters, numbers and spaces';
        },
        applicationSlug(){
            return v => /(?!-)^([a-z0-9-])+(?<!-)$/.test(v) || 'Application slug can only contain lower case aphabetic characters, numbers and dashes';
        }

    }
    
}
</script>