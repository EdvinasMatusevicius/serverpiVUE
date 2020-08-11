export default ()=> ({
    shell:{
        output:'',
        errors:'',
    },
    database:false
    ,
    models:{
        envVars:'',
        registerDbUserPassword:'',
        path:'',
        customQueryUserPassword:'',
        customquery:'',
        artisanCmd:'',
    },
    controlls:{
        php:[{
            id:1,
            groupName:'Package installation',
            components:[
                {
                    id:1,
                    type:'button',
                    name:'composer install',
                    icon:'mdi-package-down',
                    color:'primary',
                    route:'composer_install',
                },
                {
                    id:2,
                    type:'button',
                    name:'npm install',
                    icon:'mdi-package-down',
                    color:'secondary',
                    route:'npm_install',
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
                    route:'copy_env_example',
                },
                {
                    id:2,
                    type:'button',
                    name:'Create empty env file',
                    icon:'mdi-file-plus-outline',
                    color:'#3f3f3fb6',
                    route:'create_env_file',
                },
                {
                    id:3,
                    type:'button',
                    name:'Generate app key',
                    icon:'mdi-key-plus',
                    color:'primary',
                    route:'app_key_generate',
                },
                {
                    id:4,
                    type:'button',
                    name:'Link storage (filesystem driver must be set if not default)',
                    icon:'mdi-link-variant-plus',
                    color:'primary',
                    route:'app_storage_link',
                },
                {
                    id:5,
                    type:'button',
                    name:'Edit env file values',
                    icon:'mdi-file-download-outline',
                    color:'#3f3f3fb6',
                    route:'get_env_values',
                    method:'fillEnvVars',
                },
                {
                    id:6,
                    type:'textarea',
                    name:'Get env file values',
                    icon:'mdi-file-download-outline',
                    model:'envVars',
                },
                 {
                    id:7,
                    type:'button',
                    name:'Save env values',
                    icon:'mdi-file-upload',
                    sendModels:['envVars'],
                    color:'#3f3f3fb6',
                    route:'write_to_env_file',
                    method:'clearEnvVars',
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
                            sendModels:['registerDbUserPassword'],
                            ref:'dbcreate',
                            color:'brown lighten-1',
                            route:'db_and_user_create',
                            showIf:'needDbAndUser'
                        },
                        {
                            id:3,
                            type:'button',
                            name:'Create project database',
                            icon:'mdi-database-plus',
                            color:'brown lighten-1',
                            route:'db_create',
                            method:'getApplicationDatabase',
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
                    route:'db_migrate',
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
                    route:'git_pull',
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
                            model:'path',
                            validations:['required'],
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
                            sendModels:['path'],
                            ref:'nginx',
                            color:'#3f3f3fb6',
                            route:'nginx_config',
                        }
    
                    ]
                },
                {
                    id:3,
                    type:'form',
                    ref:'customquery',
                    showIf:'hasDb',
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
                            model:'customquery',
                            validations:['required']
                        },
                        {
                            id:3,
                            type:'button',
                            name:'Run custom query',
                            icon:'mdi-database-edit',
                            method:'validate',
                            sendModels:['customQueryUserPassword','customquery'],
                            ref:'customquery',
                            route:'db_custom_query',
                            color:'brown lighten-1',
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
                            model:'artisanCmd',
                            validations:['required']
                        },
                        {
                            id:2,
                            type:'button',
                            name:'Run custom artisan command (write command without "php artisan" prefix)',
                            icon:'mdi-language-php',
                            method:'validate',
                            sendModels:['artisanCmd'],
                            ref:'customartisan',
                            route:'custom_artisan',
                            color:'primary'
                        }
    
                    ]
                },
            ]
            },
        ],
//------------------------------------------------------------STATIC AND VUE SHELL CONTROLLS

        static:[
            {
            id:2,
            groupName:'Env configuration',
            components:[
                {
                    id:2,
                    type:'button',
                    name:'Create empty env file',
                    icon:'mdi-file-plus-outline',
                    color:'#3f3f3fb6',
                    route:'create_env_file',
                },
                {
                    id:5,
                    type:'button',
                    name:'Edit env file values',
                    icon:'mdi-file-download-outline',
                    color:'#3f3f3fb6',
                    route:'get_env_values',
                    method:'fillEnvVars',
                },
                {
                    id:6,
                    type:'textarea',
                    name:'Get env file values',
                    icon:'mdi-file-download-outline',
                    model:'envVars',
                },
                 {
                    id:7,
                    type:'button',
                    name:'Save env values',
                    icon:'mdi-file-upload',
                    sendModels:['envVars'],
                    color:'#3f3f3fb6',
                    route:'write_to_env_file',
                    method:'clearEnvVars',
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
                    route:'git_pull',
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
                            model:'path',
                            validations:['required'],
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
                            sendModels:['path'],
                            ref:'nginx',
                            color:'#3f3f3fb6',
                            route:'nginx_config',
                        }
    
                    ]
                }
            ]
            },
        ]
}
})