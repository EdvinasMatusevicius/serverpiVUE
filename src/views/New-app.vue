<template>
  <div>
    <route-name></route-name>
    <form-component></form-component>

  </div>
</template>

<script>
import routeName from '@/partials/Route-name.vue'
import formComponent from '@/components/forms/Form.vue'
export default {
    name:'new-app-form',
    components:{
        routeName,
        formComponent
    }
}
</script>

<style>

</style>
