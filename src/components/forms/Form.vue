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
        })
    },
    methods:{
        ...mapActions({
            loginAction:'login/login',
        }),
        validate () {
            if(this.$refs.formComponent.validate()){
                const action = this.type+'Action';
                const models = this.type+'Models';
                // this[action](this[models]);
                switch (this.type) {
                    case 'login':
                        this.loginAction(this.loginModels);
                        // console.log(this.inputs.email.inputVal,this.inputs.password.inputVal)
                        break;
                    case 'register':
                        // console.log(this.inputs.username.inputVal,this.inputs.email.inputVal,this.inputs.password.inputVal);
                        break;
                    default:
                        break;
                }      
            }
      },
    }
}
</script>