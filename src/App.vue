<template>
<div class="back">

  <v-app id="inspire" >
    <background-brackets/>

      <nav-bar />

    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</div>
</template>

<script>
import navBar from './partials/Navbar.vue'
import backgroundBrackets from './partials/Background-brackets'
import axios from 'axios';
import { mapActions } from 'vuex';


export default {
  name: 'App',

  components: {
    navBar,
    backgroundBrackets
  },

  data: () => ({
    //
  }),
  methods:{
    ...mapActions({
      logout:"session/mutateLogedStatus"
    })
  }
};
</script>

<style lang="scss">

// .v-application {
//    font-family: $body-font-family, sans-serif !important;
//  }
// .title { // To pin point specific classes of some components
//    font-family: $title-font, sans-serif !important;
// }
#inspire {
  background: none;
}


</style>

