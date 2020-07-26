<template>
  <div class="container">
      <route-name></route-name>
      <shell-output></shell-output>
  </div>
</template>

<script>
import ShellOutput from '@/components/shell/Shell-output.vue'
import routeName from '@/partials/Route-name.vue'

export default {
    name:'shell-panel',
    components:{
        ShellOutput,
        routeName
    },
    data(){
        return{

        }
    }
    
}
</script>

<style>

</style>