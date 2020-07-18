<template>
     <v-text-field 
        v-model="model"
        :type="formComponent.inputType"
        :label="formComponent.label"
        :rules="rules"
    >
        <!-- :rules="rules" -->
    </v-text-field>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
    name:"shell-component-textfield",
    props:['formComponent','variables'],
    // ,'rules'
    computed:{
        ...mapGetters({
            models:'shell/getModels'
        }),
    },
    data(){
        return{
            model:'',
            rules:this.getRules()
        }
    },
    mounted(){
        this.model=this.models[this.formComponent.model]
    },
    watch:{
        model: function(newVal){
            const modelInfo = {
                model:this.formComponent.model,
                value:newVal
            };
            this.mutateModel(modelInfo);
        }
    },

    methods:{
        ...mapMutations({
            mutateModel:'shell/mutateModel'
        }),
        getRules(){
            let rulesArr = [];
            this.formComponent.validations.forEach(validation => {
                switch (validation) {
                        case 'required':
                            rulesArr.push(this.required())
                        break;
                    default:
                        break;
                }
            });
            return rulesArr;

        },
        required(){
            return v=> !!v || `Field is required`;
        },
    }
}
</script>

<style>

</style>