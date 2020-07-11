<template>
    <v-app-bar flat app class="transparent  fadeout">
        <router-link class="ml-5" to="/"><img src="../assets/raspberry-pi.png" alt=""></router-link>
        <v-spacer></v-spacer>
        
        <v-btn text color="green darken-3" class="text-decoration-none" to="/about">About</v-btn>
        <v-btn text color="green darken-3" class="text-decoration-none" to="/login">Login</v-btn>
        <v-btn text color="green darken-3" class="text-decoration-none mr-5" to="/register">Register</v-btn>
        

    </v-app-bar>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style scoped>
    .fadeout{
      background: linear-gradient(to bottom, #ffffff 0%,#f5f5f5 1%,#ffffff80 100%);
    }
    img{
        width: 50px;
    }
</style>