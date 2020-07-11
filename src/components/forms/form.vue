<template>
    <div>
        <form >
            <vue-input       
            v-for="(input,i) in inputs"
            :key="i"
            :inputInfo="input"
            >
          </vue-input>
          <button type="submit" class="btn btn-primary" v-text="type"></button>
        </form>
    </div>
</template>

<script>
import vueInput from './input-row.vue';
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
                            type:'text',
                            name:'User name',
                            validations:[{
                                validation:'length',
                                min:2,
                                max:20
                            }],
                            }
                        ,
                        email:{
                            type:'email',
                            name:'E-mail',
                            validations:[{
                                validation:'email'
                            },
                            {
                                validation:'length',
                                min:3,
                                max:255
                            }
                            ],},
                        password:{
                            type:'password',
                            name:'Password',
                            validations:[{
                                validation:'length',
                                min:8,
                                max:255
                            }],},
                        repeatpassword:{
                            type:'password',
                            name:'Repeat password',
                            validations:[{
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
                            type:'email',
                            name:'E-mail',
                            validations:[]
                            },
                        password:{
                            type:'password',
                            name:'Password',
                            validations:[]
                            }
                    }
                }
                break
            default:
                return{
                    
                }
                break;
        }
    }
}
</script>