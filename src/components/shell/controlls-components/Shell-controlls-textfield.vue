<template>
     <v-text-field v-if="formComponent.type === 'input' && !variables[formComponent.hideIf]"
        v-model="model"
        :rules="rules"
        :type="formComponent.inputType"
        :label="formComponent.label"
    >
    </v-text-field>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name:"shell-component-textfield",
    props:['formComponent','rules'],
    data(){
        return{
            model:this.models[formComponent.model]

        }
    },
    computed:{
        ...mapGetters({
            models:'shell/getModels'
        }),
        ...mapActions({
            
        })
    }
}
</script>

<style>

</style>