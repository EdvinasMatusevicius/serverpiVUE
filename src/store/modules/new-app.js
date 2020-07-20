const state= ()=> ({
    models:{
        newApp:{
            applicationName: '',
            applicationSlug: '',
            giturl: '',
            language: '',
        }
    },
    newApp:{
        applicationName:{
        inputModel:'applicationName',
        type:'text',
        label:'Application name',
        validations:[
        {
            validation:'required'
        },{
            validation:'length',
            min:3,
            max:40
        }],
        }
        ,
        applicationSlug:{
            inputModel:'applicationSlug',
            type:'text',
            label:'Application slug that will be used in url, if left empty will be auto generated',
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
        giturl:{
            inputModel:'giturl',
            type:'text',
            label:'Application\'s github clone url',
            validations:[
                {
                validation:'required'
                },{
                validation:'length',
                min:23,
                max:255
                }
            ],
            },
        // language:{
        //     inputModel:'language',
        //         type:'select',
        //         label:'Repeat password',
        //         validations:[
        //             {
        //             validation:'required'
        //             },{
        //             validation:'length',
        //             min:8,
        //             max:255
        //             }
        //         ],
        //     }
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
    getNewApp:({newApp})=>newApp
  }
  
  export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
    }