<template>
  <div class="shell">
            <div class="shell__output-name">Shell output</div>
            <p class="shell__output ma-0">{{shell.output}}</p>
            <div class="shell__error-name">Shell error output</div>
            <p class="shell__error ma-0">{{shell.errors}}</p>
        </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'shell-output',
    computed:{
        ...mapGetters({
            shell:"shell/getShell",
            reqStatus:"session/getReqStatus"
        })
    },
    mounted(){
        if(this.reqStatus){
            this.getShellLoop()
        }
    },
    watch:{
        reqStatus:function(newVal){
            if(newVal){
                this.getShellLoop()
            }
        }
    },
    methods:{
        ...mapActions({
            getShell:"shell/getShell"
        }),
        getShellLoop(){
            setTimeout(() => {
                this.getShell();
                if(this.reqStatus){
                    this.getShellLoop()
                }
            }, 700);
        }
    }

}
</script>

<style lang="scss">
      .shell{
            grid-area: output;
            width: 100%;
            height: 75vh;
            min-height: 12rem;
            display:grid;
            grid-template-rows: 2rem auto;
            grid-template-columns: 59% 1% 40%;
            grid-template-areas:
            "outName . errorName"
            "out     .    error";
        &__output{
            grid-area: out;
            background: #3f3f3fb6;
            color: #ffffff;
            padding: 0.5rem;
            font-size: 0.9rem;
            white-space: pre-wrap;


            &-name{
                grid-area: outName;
                font-weight: 700;
                text-align: center;
                line-height: 2rem;
                background: #4592af;
            }
        }
        &__error{
            grid-area: error;
            background: #3f3f3fb6;
            color: #ffffff;
            padding: 0.5rem;
            font-size: 0.9rem;

            &-name{
                grid-area: errorName;
                font-weight: 700;
                color: rgb(46, 45, 45);
                text-align: center;
                line-height: 2rem;
                background: #c75757;
            }
        }
      }
     @media (max-width: 600px) {
      .shell{
            height: 90vh;
            grid-template-rows: 2rem auto 2rem auto;
            grid-template-columns: 100%;
            grid-template-areas:
            "outName"
            "out"
            "errorName"
            "error";
      }
    }
</style>