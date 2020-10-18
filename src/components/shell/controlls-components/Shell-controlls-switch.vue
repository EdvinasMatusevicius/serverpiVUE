<template>
  <v-switch
  :model="share"
  ></v-switch>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'shell-component-switch',
    props:['component'],
    created(){

    },
    computed:{
        ...mapGetters({
            share:"shell/getShare"
        })
    },
    methods:{
        //create action to get app share status ant call on created and 
    }
}
</script>

<style>

</style>