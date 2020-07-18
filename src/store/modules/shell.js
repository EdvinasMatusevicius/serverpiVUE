const state= ()=> ({
    models:{
        registerDbUserPassword:'',
    },
    controlls:[
        {
            id:1,
            groupName:'Package installation',
            components:[
                {
                    id:1,
                    type:'button',
                    name:'composer install',
                    icon:'mdi-package-down',
                    color:'#4592af',
                },
                {
                    id:2,
                    type:'button',
                    name:'npm install',
                    icon:'mdi-package-down',
                    color:'#34b378',
                }
            ]
        },
        {
            id:2,
            groupName:'Env configuration',
            components:[
                {
                    id:1,
                    type:'button',
                    name:'Create and copy env values from env.example',
                    icon:'mdi-file-plus',
                    method:'composerInstall',
                    color:'#3f3f3fb6',
                },
                {
                    id:2,
                    type:'button',
                    name:'Create empty env file',
                    icon:'mdi-file-plus-outline',
                    method:'',
                    color:'#3f3f3fb6',
                },
                {
                    id:3,
                    type:'button',
                    name:'Generate app key',
                    icon:'mdi-key-plus',
                    method:'',
                    color:'#4592af',
                },
                {
                    id:4,
                    type:'button',
                    name:'Link storage (filesystem driver must be set if not default)',
                    icon:'mdi-link-variant-plus',
                    method:'',
                    color:'#4592af',
                },
                {
                    id:5,
                    type:'button',
                    name:'Edit env file values',
                    icon:'mdi-file-download-outline',
                    method:'fillEnvTextArea',
                    params:['areaData'],
                    color:'#3f3f3fb6',
                },
                {
                    id:6,
                    type:'textarea',
                    name:'Get env file values',
                    icon:'mdi-file-download-outline',
                    model:'areaData',
                },
                 {
                    id:7,
                    type:'button',
                    name:'Save env vals (below text area)',
                    icon:'mdi-file-upload',
                    method:'saveEditedEnvData',
                    params:['areaData'],
                    color:'#3f3f3fb6',
                }
            ]
        },
        {
            id:3,
            groupName:'Database configuration',
            components:[
                {
                    id:1,
                    type:'form',
                    ref:'db-create',
                    formComponents:[
                        {
                            id:1,
                            type:'info-area',
                            info:'dbinfo'
                        },
                        {
                            id:2,
                            type:'input',
                            label:'New mysql user will be created with password you enter here',
                            inputType:'password',
                            model:'registerDbUserPassword',
                            hideIf:'hasDbUser'
                        },
                        // {
                        //     id:3,
                        //     type:'button',
                        //     name:'Create project database',
                        //     icon:'mdi-file-upload',
                        //     method:'',
                        //     params:['areaData'],
                        //     color:'#3f3f3fb6',
                        //     hideIf:'appHasDb'
                        // }
    
                    ]
                }
            ]
        },
    ]

})
const mutations = {
    mutateModel (state,modelInfo){
        state.models[modelInfo.model] = modelInfo.value
    }
}
const actions = {
}
const getters = {
    getControlls:({controlls})=>controlls,
    getModels:({models})=>models
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }