<template>
      <div v-if="component.type === 'button'" class="controlls__btn d-inline-flex justify-center">
        <div class="align-self-center">{{component.name}}</div>
        <v-spacer></v-spacer>
        <v-btn @click="clickHandler()" outlined fab :color="component.color" :disabled="reqStatus" class="align-self-center">
            <v-icon>{{component.icon}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'shell-controlls-button',
    props:['component'],
    computed:{
        ...mapGetters({
            models:"shell/getModels",
            reqStatus:"session/getReqStatus"
        })
    },
    methods:{
        ...mapActions({
            runShellCmd:"shell/runShellCmd",
        }),
        clickHandler(){
            if(this.component.validation){
                return this.$emit('validate', [this.component.ref, this.component.route, this.component.request, this.component.sendModels,this.component.method])
            }
            this.runShellCmd( this.buildRunShellParams())
        },
        buildRunShellParams(){
            let payload = {
                route:this.component.route,
                request: this.component.request,
                slug:this.$route.params.slug,
                method:this.component.method ? this.component.method : false
            }
            if(this.component.sendModels)  {  
                this.component.sendModels.forEach(modelString => {
                    payload[modelString]=this.models[modelString]
                });
            }
            return payload;
        }
    }
}
</script>

<style>

</style>