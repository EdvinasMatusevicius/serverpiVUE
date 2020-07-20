const state= ()=> ({
    models:{
        register:{
            username: '',
            email: '',
            password: '',
            repeatpassword: '',
        },
        login:{
            email: '',
            password: '',
        },
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
    },

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
  const mutations = {
    mutateModel ({models},modelInfo){
        models[modelInfo.form][modelInfo.name] = modelInfo.value
    }
  }
  const actions = {
  }
  const getters = {
    getRegister:({register})=>register,
    getLogin:({login})=>login
  }
  
  export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
    }