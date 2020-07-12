<template>
  <v-app>

      <nav-bar />

    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navBar from './partials/Navbar.vue'


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

