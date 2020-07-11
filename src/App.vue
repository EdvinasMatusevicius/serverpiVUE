<template>
  <v-app>

      <nav-bar />

    <v-content>
    <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import navBar from './partials/navbar.vue'


export default {
  name: 'App',

  components: {
    navBar

  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>

