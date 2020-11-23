<template>
  <div v-if="type === 'textarea'">
            <v-textarea
                outlined
                auto-grow
                v-model="areaData"
                :label="label"
            ></v-textarea>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:"shell-component-textarea",
    props:['model','type','label'],   //model 
    data(){
        return{
            areaData:'',
            watchedModel: ''
        }
    },
    created(){
        this.areaData = this.models[this.model],
        this.watchedOldModel = Object.assign({}, { [this.model]: this.models[this.model]})
    },
    computed:{
        ...mapGetters({
            models:"shell/getModels"
        })
    },
    watch:{
        models:{
            handler: function (val) {
                if(val[this.model] !== this.watchedOldModel[this.model]){
                    this.areaData = val[this.model],
                    this.watchedOldModel = Object.assign({}, { [this.model]: val[this.model]})
                }
            },
            deep:true
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