<template>
    <div>
        <v-form ref="formComponent">
            <vue-input       
                v-for="(input,i) in inputs"
                :key="i"
                :inputInfo="input"
                :formtype="type"
                @newInputVal="(val)=>input.inputVal = val"
            >
          </vue-input>
          <v-btn @click="validate" class="btn btn-primary" v-text="type"></v-btn>
        </v-form>
    </div>
</template>

<script>
import vueInput from './Input-row.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'dynamic-form',
    props:['type'],
    components:{
        vueInput
    },
    data(){
        return {
            inputs:''
        }
    },
    created(){
        this.inputs = this[this.type]
    },
    computed:{
        ...mapGetters({
            register:"register/getForm",
            login:"login/getForm",
            newApp:"newApp/getNewApp",
            loginModels:"login/getModels",
            registerModels:"register/getModels",
            newAppModels:"newApp/getModels",
            isLogedIn:"session/getIsLogedIn"
        })
    },
    methods:{
        ...mapActions({
            loginAction:'login/login',
            registerAction:'register/register',
            newAppAction:'newApp/addProject',
        }),
        validate () {
            if(this.$refs.formComponent.validate()){
                const action = this.type+'Action';
                const models = this.type+'Models';
                (async ()=>{
                   await this[action](this[models]);
                   if(this.isLogedIn && this.type !== 'newApp'){
                        this.$router.push("panel")
                        }
                })()
            }
        },
    }
}
</script>