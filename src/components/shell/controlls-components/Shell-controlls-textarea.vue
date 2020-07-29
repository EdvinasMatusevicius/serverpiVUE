<template>
  <div v-if="type === 'textarea'">
            <v-textarea
                outlined
                auto-grow
                v-model="areaData"
            ></v-textarea>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:"shell-component-textarea",
    props:['model','type'],   //model 
    data(){
        return{
            areaData:'',
            watchedModel:'models.'+this.model
        }
    },
    computed:{
        ...mapGetters({
            models:"shell/getModels"
        })
    },
    watch:{//to do nested dynamic watcher
        'models.envVars': function(newVal,oldval){
            this.areaData = this.models[this.model];
        },
        areaData:function(newVal){
           const mutateModelPayload ={
               model:this.model,
               value:newVal
           };
            this.mutateModel(mutateModelPayload);
        }
    },
    methods:{
        ...mapActions({
            mutateModel:"shell/mutateModel"
        })
    }
}
</script>

<style>

</style>