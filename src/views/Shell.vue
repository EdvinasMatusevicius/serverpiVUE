<template>
    <div class="shell-panel">
        <v-expansion-panels class="controlls">
           <v-expansion-panel  v-for="group of controlls" v-bind:key="group.id" class="controlls__panel">
             <v-expansion-panel-header>{{group.groupName}}</v-expansion-panel-header>
             <v-expansion-panel-content>

                 <div v-for="button of group.buttons" :key="button.id" class="controlls__btn d-inline-flex justify-center">
                    <div class="align-self-center">{{button.name}}</div>
                    <v-spacer></v-spacer>
                    <v-btn outlined fab :color="button.color" class="align-self-center">
                        <v-icon>{{button.icon}}</v-icon>
                    </v-btn>
                </div>

             </v-expansion-panel-content>
           </v-expansion-panel>
           
         </v-expansion-panels>
        <shell-output/>
    </div>
</template>

<script>
import ShellOutput from '@/components/shell/Shell-output.vue'
export default {
    name:'shell-panel',
    components:{
        ShellOutput
    },
    data(){
        return{
            controlls:[
                {
                    id:1,
                    groupName:'Package installation',
                    buttons:[
                        {
                            id:1,
                            name:'composer install',
                            icon:'mdi-package-down',
                            color:'#4592af',
                        },
                        {
                            id:2,
                            name:'npm install',
                            icon:'mdi-package-down',
                            color:'#34b378',
                        }
                    ]
                },
                {
                    id:2,
                    groupName:'Env configuration',
                    buttons:[
                        {
                            id:1,
                            name:'Create and copy env values from env.example',
                            icon:'mdi-file-plus',
                            color:'#3f3f3fb6',
                        },
                        {
                            id:2,
                            name:'Create empty env file',
                            icon:'mdi-file-plus-outline',
                            color:'#3f3f3fb6',
                        },
                        {
                            id:3,
                            name:'Generate app key',
                            icon:'mdi-key-plus',
                            color:'#4592af',
                        },
                        {
                            id:4,
                            name:'Link storage (filesystem driver must be set if not default)',
                            icon:'mdi-link-variant-plus',
                            color:'#4592af',
                        },
                        {
                            id:5,
                            name:'Get env file values',
                            icon:'mdi-file-download-outline',
                            color:'#3f3f3fb6',
                        },
                         {
                            id:6,
                            name:'Save env vals (below text area)',
                            icon:'mdi-file-upload',
                            color:'#3f3f3fb6',
                        }
                    ]
                },
            ]

            
        }
    }
}
</script>

<style lang="scss">
    .shell-panel{
        width: 90vw;
        height: auto;
        margin:0 auto;
        display:grid;
        grid-template-columns: 4fr 10fr;
        grid-template-rows: auto auto;
        grid-template-areas:
        "control output"
        ". output"
    }
    .controlls{
        min-width: 15rem;
        height:auto;
        grid-area: control;

        &__btn{
            width: 100%;
            border:1px solid beige;
        }
    }
  @media (max-width: 600px) {
      .shell-panel{
          grid-template-columns: 100%;
        grid-template-rows: auto auto;
             grid-template-areas:
        "control"
        " output"
      }
  }
</style>