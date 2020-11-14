<template>
  <v-file-input
    accept="image/*"
    placeholder="Application image"
    prepend-icon="mdi-image-plus"
  ></v-file-input>
</template>

<script>
import api from '@/api/api.js'
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'shell-component-img-upload',
    props:['component'],
    
}
</script>

<style>

</style>