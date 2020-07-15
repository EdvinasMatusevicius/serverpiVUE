<template>
    <div class="shell-panel">
        <v-btn class="controlls">
            Coposer install
        </v-btn>
        <shell-output/>
    </div>
</template>

<script>
import ShellOutput from '@/components/shell/Shell-output.vue'
export default {
    name:'shell-panel',
    components:{
        ShellOutput
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
        grid-template-rows: auto;
        grid-template-areas:
        "controll output"
    }
    .controlls{
        min-width: 15rem;
        grid-area: controll;
    }
  @media (max-width: 600px) {
      .shell-panel{
          grid-template-columns: 100%;
        grid-template-rows: auto auto;
             grid-template-areas:
        "controll"
        " output"
      }
  }
</style>