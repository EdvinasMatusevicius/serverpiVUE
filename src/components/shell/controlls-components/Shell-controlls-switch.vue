<template>
  <v-switch
    v-model="shareLocal"
    inset
    :label="component.name"
  ></v-switch>
</template>

<script>
import api from '@/api/api.js'
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'shell-component-switch',
    props:['component'],
    data(){
        return{
            shareLocal: this.$store.getters['shell/getShare'],
            slug:this.$route.params.slug
        }
    },

    watch:{
        shareLocal:function(newVal){
            const reqBody = {
                share: newVal,
                slug: this.slug
                };
            this.saveShareStatus(reqBody);
        },
        share:function(newVal){
            this.shareLocal = newVal
        }
    },
    computed:{
        ...mapGetters({
            share:"shell/getShare"
        })
    },
    methods:{
        ...mapActions({
            mutateShare: "shell/mutateShare"
        }),
        async saveShareStatus(body){
            api.saveShareStatus(
                body,
                (res)=>{console.log(res)},
                (err)=>{console.log(err)})
        }
    }
}
</script>

<style>

</style>