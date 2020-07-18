const state= ()=> ({
    models:{
        registerDbUserPassword:'',
        nginxRoute:'',
        customQueryUserPassword:'',
        customQuery:'',
        customArtisan:'',
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
                            type:'input',
                            label:'New mysql user password',
                            inputType:'password',
                            model:'registerDbUserPassword',
                            validations:['required'],
                            showIf:'needDbAndUser'
                        },
                        {
                            id:2,
                            type:'button',
                            name:'Create project database and user',
                            icon:'mdi-file-upload',
                            method:'validate',
                            params:['db-create','registerDb'],
                            color:'#3f3f3fb6',
                            showIf:'needDbAndUser'
                        },
                        {
                            id:3,
                            type:'button',
                            name:'Create project database',
                            icon:'mdi-file-upload',
                            method:'createDb',
                            params:[],
                            color:'#3f3f3fb6',
                            showIf:'needDb'
                        },
                        {
                            id:4,
                            type:'info-area',
                            info:'dbinfo'
                        }
    
                    ]
                },
                {
                    id:2,
                    type:'button',
                    name:'Migrate database (database must be created and database credentials saved to env file)',
                    icon:'mdi-file-upload',
                    method:'migrateDb',
                    params:[],
                    color:'#3f3f3fb6'
                }
            ]
        },
        {
            id:4,
            groupName:'Application configuration/initiation and custom commands',
            components:[
                {
                    id:1,
                    type:'button',
                    name:'Git pull',
                    icon:'mdi-file-plus',
                    method:'gitPull',
                    color:'#3f3f3fb6',
                },
                {
                    id:2,
                    type:'form',
                    ref:'nginx',
                    formComponents:[
                        {
                            id:1,
                            type:'input',
                            label:'Main index file location',
                            inputType:'text',
                            model:'nginxRoute',
                            validations:['required'],
                            showIf:'needDbAndUser'
                        },
                        {
                            id:2,
                            type:'info-area',
                            info:'nginxRouteInfo'
                        },
                        {
                            id:3,
                            type:'button',
                            name:'Set index route and initiate application',
                            icon:'mdi-file-upload',
                            method:'validate',
                            params:['nginx','initiateNginx',['nginxRoute']],
                            color:'#3f3f3fb6',
                            showIf:'needDbAndUser'
                        }
    
                    ]
                },
                {
                    id:3,
                    type:'form',
                    ref:'custom-query',
                    formComponents:[
                        {
                            id:1,
                            type:'input',
                            label:'Mysql user password',
                            inputType:'password',
                            model:'customQueryUserPassword',
                            validations:['required'],
                        },
                        {
                            id:2,
                            type:'input',
                            label:'Mysql query to run on application\'s database',
                            inputType:'text',
                            model:'customQuery',
                            validations:['required']
                        },
                        {
                            id:3,
                            type:'button',
                            name:'Run custom query',
                            icon:'mdi-file-upload',
                            method:'validate',
                            params:['custom-query','runCustomQuery',['customQueryUserPassword','customQuery']],
                            color:'#3f3f3fb6',
                            showIf:'needDbAndUser'
                        }
    
                    ]
                },
                {
                    id:4,
                    type:'form',
                    ref:'custom-artisan',
                    formComponents:[
                        {
                            id:1,
                            type:'input',
                            label:'Custom artisan command',
                            inputType:'text',
                            model:'customArtisan',
                            validations:['required']
                        },
                        {
                            id:2,
                            type:'button',
                            name:'Run custom artisan command (write command without php artisan prefix)',
                            icon:'mdi-file-upload',
                            method:'validate',
                            params:['custom-artisan','runCustomArtisan',['customArtisan']],
                            color:'#3f3f3fb6'
                        }
    
                    ]
                },
            ]
        },
    ]

})
const mutations = {
    mutateModel ({models},modelInfo){
        models[modelInfo.model] = modelInfo.value
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