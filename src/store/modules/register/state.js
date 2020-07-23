export default ()=> ({
    models:{
        username: '',
        email: '',
        password: '',
        repeatpassword: '',
    },
    register:{
        username:{
            inputModel:'username',
            type:'text',
            label:'User name',
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
            inputModel:'email',
            type:'email',
            label:'E-mail',
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
                ],
            },
        password:{
            inputModel:'password',
            type:'password',
            label:'Password',
            validations:[
                {
                validation:'required'
                },{
                validation:'length',
                min:8,
                max:255
                }
            ],
        },
        repeatpassword:{
            inputModel:'repeatpassword',
            type:'password',
            label:'Repeat password',
            validations:[
                {
                validation:'required'
                },{
                validation:'length',
                min:8,
                max:255
                }
            ],
        }
    }
  })