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


export default {
  name: 'App',

  components: {
    navBar,
    backgroundBrackets
  },

  data: () => ({
    //
  }),
  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        // if you ever get an unauthorized, logout the user
          this.$store.dispatch(AUTH_LOGOUT)
        // you can also redirect to /login if needed !
        }
        throw err;
      });
    });
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

