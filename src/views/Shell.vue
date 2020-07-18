<template>
    <div class="shell-panel">
        <shell-controlls/>
        <shell-output/>
    </div>
</template>

<script>
import ShellOutput from '@/components/shell/Shell-output.vue'
import ShellControlls from '@/components/shell/Shell-controlls.vue'
export default {
    name:'shell-panel',
    components:{
        ShellControlls,
        ShellOutput
    },
    data(){
        return{

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