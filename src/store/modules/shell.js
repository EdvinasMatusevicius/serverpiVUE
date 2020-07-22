const state= ()=> ({
    models:{
        registerDbUserPassword:'',
        nginxRoute:'',
        customQueryUserPassword:'',
        customQuery:'',
        customArtisan:'',
    },
    controlls:[
        //forComponent's button params composition [name of form ref , after validation name of next method to run, array of arguments to pass to next method]
        {
            id:1,
            groupName:'Package installation',
            components:[
                {
                    id:1,
                    type:'button',
                    name:'composer install',
                    icon:'mdi-package-down',
                    color:'primary',
                    method:'composerInstall',
                },
                {
                    id:2,
                    type:'button',
                    name:'npm install',
                    icon:'mdi-package-down',
                    color:'secondary',
                    method:'npmInstall',
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
                    name:'Create env file and copy values from env.example',
                    icon:'mdi-file-plus',
                    color:'#3f3f3fb6',
                    method:'copyEnvExampe',
                },
                {
                    id:2,
                    type:'button',
                    name:'Create empty env file',
                    icon:'mdi-file-plus-outline',
                    color:'#3f3f3fb6',
                    method:'createEnvFile',
                },
                {
                    id:3,
                    type:'button',
                    name:'Generate app key',
                    icon:'mdi-key-plus',
                    color:'primary',
                    method:'generateAppKey',
                },
                {
                    id:4,
                    type:'button',
                    name:'Link storage (filesystem driver must be set if not default)',
                    icon:'mdi-link-variant-plus',
                    color:'primary',
                    method:'linkStorage',
                },
                {
                    id:5,
                    type:'button',
                    name:'Edit env file values',
                    icon:'mdi-file-download-outline',
                    params:['areaData'],
                    color:'#3f3f3fb6',
                    method:'fillEnvTextArea',
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
                    params:['areaData'],
                    color:'#3f3f3fb6',
                    method:'saveEditedEnvData',
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
                    ref:"dbcreate",
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
                            icon:'mdi-database-plus',
                            method:'validate',
                            params:['dbcreate','registerDb',['registerDbUserPassword']],
                            color:'brown lighten-1',
                            showIf:'needDbAndUser'
                        },
                        {
                            id:3,
                            type:'button',
                            name:'Create project database',
                            icon:'mdi-database-plus',
                            method:'createDb',
                            params:[],
                            color:'brown lighten-1',
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
                    icon:'mdi-database-import',
                    method:'migrateDb',
                    params:[],
                    color:'brown lighten-1'
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
                    icon:'mdi-git',
                    method:'gitPull',
                    color:'deep-orange darken-2',
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
                            icon:'mdi-server-plus',
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
                    ref:'customquery',
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
                            icon:'mdi-database-edit',
                            method:'validate',
                            params:['customquery','runCustomQuery',['customQueryUserPassword','customQuery']],
                            color:'brown lighten-1',
                            showIf:'needDbAndUser'
                        }
    
                    ]
                },
                {
                    id:4,
                    type:'form',
                    ref:'customartisan',
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
                            name:'Run custom artisan command (write command without "php artisan" prefix)',
                            icon:'mdi-language-php',
                            method:'validate',
                            params:['customartisan','runCustomArtisan',['customArtisan']],
                            color:'primary'
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