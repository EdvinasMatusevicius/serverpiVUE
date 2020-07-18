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
export default {
    name:"shell-component-textarea",
    props:['model','type'],
    data(){
        return{
            areaData:this.model
        }
    },
    watch:{
        textModel: function(newVal){
            this.$emit('newEnvEditState2',newVal);
        },
        model:function(){
            this.areaData= this.model
        }
    },
}
</script>

<style>

</style>