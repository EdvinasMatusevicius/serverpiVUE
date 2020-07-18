<template>
      <div v-if="component.type === 'button'" class="controlls__btn d-inline-flex justify-center">
        <div class="align-self-center">{{component.name}}</div>
        <v-spacer></v-spacer>
        <v-btn @click="dynamicMethodsHandler(component.method,component.params ? component.params : null)" outlined fab :color="component.color" class="align-self-center">
            <v-icon>{{component.icon}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name:'shell-controlls-button',
    props:['component','dynamicMethodsHandler']
}
</script>

<style>

</style>