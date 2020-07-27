<template>
      <div v-if="component.type === 'button'" class="controlls__btn d-inline-flex justify-center">
        <div class="align-self-center">{{component.name}}</div>
        <v-spacer></v-spacer>
        <v-btn @click="clickHandler()" outlined fab :color="component.color" class="align-self-center">
            <v-icon>{{component.icon}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
//@click="dynamicMethodsHandler(component.method,component.params ? component.params : null)"
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'shell-controlls-button',
    props:['component'],
    computed:{
        ...mapGetters({
            models:"shell/getModels"
        })
    },
    methods:{
        ...mapActions({
            runShellCmd:"shell/runShellCmd"
        }),
        clickHandler(){
            if(this.component.method === "validate"){
                return this.$emit('validate', [this.component.ref, this.component.route, this.component.sendModels])
            }
            this.runShellCmd( this.buildRunShellParams())
        },
        buildRunShellParams(){
            let payload = {
                route:this.component.route,
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