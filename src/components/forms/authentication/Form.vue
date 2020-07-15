<template>
    <div>
        <v-form ref="form">
            <vue-input       
            v-for="(input,i) in inputs"
            :key="i"
            :inputInfo="input"
            @newInputVal="(val)=>input.inputVal = val"
            >
          </vue-input>
          <v-btn @click="validate" class="btn btn-primary" v-text="type"></v-btn>
        </v-form>
    </div>
</template>

<script>
import vueInput from './Input-row.vue';
export default {
    name:'dynamic-form',
    props:['type'],
    components:{
        vueInput
    },
    data(){
        switch (this.type) {
            case 'register':
                return {
                    inputs:{
                        username:{
                            inputVal:'',
                            type:'text',
                            label:'User name',
                            name:'name',
                            validations:[
                            {
                                validation:'required'
                            },{
                                validation:'length',
                                min:2,
                                max:20
                            }],
                            }
                        ,
                        email:{
                            inputVal:'',
                            type:'email',
                            label:'E-mail',
                            name:'e-mail',
                            validations:[
                            {
                                validation:'required'
                            },{
                                validation:'email'
                            },{
                                validation:'length',
                                min:3,
                                max:255
                            }
                            ],},
                        password:{
                            inputVal:'',
                            type:'password',
                            label:'Password',
                            name:'password',
                            validations:[
                                {
                                validation:'required'
                                },{
                                validation:'length',
                                min:8,
                                max:255
                            }],},
                        repeatpassword:{
                            inputVal:'',
                            type:'password',
                            label:'Repeat password',
                            name:'password_confirmation',
                            validations:[
                                {
                                validation:'required'
                                },{
                                validation:'length',
                                min:8,
                                max:255
                            }],}
                    }
                }
                break;
            case 'log-in':
                    return {
                    inputs:{
                        email:{
                            inputVal:'',
                            type:'email',
                            label:'E-mail',
                            name:'email',
                            validations:[
                                {
                                validation:'required'
                                },
                            ]
                            },
                        password:{
                            inputVal:'',
                            type:'password',
                            label:'Password',
                            name:'password',
                            validations:[
                                {
                                    validation:'required'
                                },
                            ]
                            }
                    }
                }
                break
            default:
                return{
                    
                }
                break;
        }
    },
    methods:{
        validate () {
            if(this.$refs.form.validate()){
                switch (this.type) {
                    case 'log-in':
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