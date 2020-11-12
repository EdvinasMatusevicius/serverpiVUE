<template>
  <v-switch
    v-model="share"
    inset
    :label="'when deployed show app on main page'"
  ></v-switch>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'shell-component-switch',
    props:['component'],
    created(){
        if(typeof this.component.defaultVal === "boolean"){
            // import mutation action for share and set share val to component.defaultval
        }else{
            this.getShare(this.$route.params.slug);
        }
    },
    computed:{
        ...mapGetters({
            share:"shell/getShare"
        })
    },
    methods:{
        ...mapActions({
            getShare:"shell/getApplicationShareStatus"
        })
    }
}
</script>

<style>

</style>