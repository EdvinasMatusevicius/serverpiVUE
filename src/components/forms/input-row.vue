<template>
    <div class="form-group">
        <label for="formGroupExampleInput">{{this.inputInfo.name}}</label>
        <input :type="this.inputInfo.type" class="form-control" v-bind:class="{ 'is-invalid': this.errorMessage }" id="formGroupExampleInput"  v-on:input="validateInput($event.target.value)">
        <div class="invalid-feedback" v-text="errorMessage"></div>
    </div>
</template>

<script>
export default {
    name:'dynamic-input',
    props:['inputInfo'],
    data(){
        return {
            errorMessage: '',
        }
    },
    methods:{
        validateInput(val){
            this.errorMessage = '';
            this.inputInfo.validations.forEach(validation => {
                switch (validation.validation) {
                    case 'length':
                        this.length(val,validation.min,validation.max,this.inputInfo.name);
                        break;
                        case 'email':
                            this.email(val);
                        break;
                
                    default:
                        break;
                }
            });

        },
        email(val){
            const etaIndex = val.search(/\@/g);
                if (etaIndex === -1 || etaIndex === 0 || etaIndex === val.length - 1) {
                    this.errorMessage= 'email is invalid';
                }
        },
        length(val,min,max,name){
            if (val.length < min || val.length > max) {
                this.errorMessage= `${name} can't be shorter than ${min} and longer than ${max} characters`;
            }

        }
    }
}
</script>