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
import { mapGetters } from 'vuex';
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
        console.log(this.register,this.type);
        this.inputs = this[this.type]
    },
    computed:{
        ...mapGetters({
            register:"loginRegister/getRegister",
            login:"loginRegister/getLogin",
            newApp:"newApp/getNewApp"
        })
    },
    methods:{
        validate () {
            console.log(this.$refs);
            if(this.$refs.formComponent.validate()){
                switch (this.type) {
                    case 'login':
                        console.log(this.inputs.email.inputVal,this.inputs.password.inputVal)
                        break;
                    case 'register':
                        console.log(this.inputs.username.inputVal,this.inputs.email.inputVal,this.inputs.password.inputVal);
                        break;
                    default:
                        break;
                }      
            }
      },
    }
}
</script>