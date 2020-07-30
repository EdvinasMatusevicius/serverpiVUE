export default ()=> ({
    models:{
        email: '',
        password: '',
    },
    errors:[],
    login:{
        email:{
            inputModel:'email',
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
            inputModel:'password',
            type:'password',
            label:'Password',
            name:'password',
            validations:[
                {
                    validation:'required'
                },
            ]
            },
    },
    

  })