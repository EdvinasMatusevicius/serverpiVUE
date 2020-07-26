<template>
<div>
    <img  src="../assets/navbar.svg" alt="" class="nav__background">
    <!-- if new svg add preserveAspectRatio="none"  inside svg tag -->
    
    <v-app-bar flat app class="transparent  " height="110">
        <router-link  to="/"><img class="logo" src="../assets/pi_logo.svg" alt=""></router-link>
        <v-spacer></v-spacer>
        
        <v-btn v-if="isLogedIn" text tile color="white" h5 class="text-decoration-none text-h6 font-weight-regular" to="/new-app">new app form</v-btn>
        <v-btn v-if="isLogedIn" text tile color="white" h5 class="text-decoration-none text-h6 font-weight-regular" to="/panel">Panel</v-btn>
        <v-btn v-if="isLogedIn" text tile color="white" h5 class="text-decoration-none text-h6 font-weight-regular" to="/shell">Shell</v-btn>
        <v-btn v-if="isLogedIn" text tile color="white" h5 class="text-decoration-none text-h6 font-weight-regular" to="/shell-solo">Shell solo</v-btn>
        <v-btn text tile color="white" h5 class="text-decoration-none text-h6 font-weight-regular" to="/about">About</v-btn>
        <v-btn v-if="!isLogedIn" text tile color="white" class="text-decoration-none text-h6 font-weight-regular" to="/login">Login</v-btn>
        <v-btn v-if="!isLogedIn" text tile color="white" class="text-decoration-none mr-5 text-h6 font-weight-regular" to="/register">Register</v-btn>
        
        <user-menu
             v-if="(isLogedIn && userInfo)"
            :email="userInfo.email"
        ></user-menu>
        
    </v-app-bar>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import userMenu from '@/components/navbar/User-menu'

export default {
    name:'navbar',
    components:{
        userMenu
    },
    created(){
        if(this.isLogedIn && !this.userInfo){
            this.getUserData()
        }
    },
    computed:{
        ...mapGetters({
            userInfo:"session/getUser",
            isLogedIn:"session/getIsLogedIn"
        })
    },
    methods:{
        ...mapActions({
            getUserData:"session/getUserData"
        })
    }
}
</script>

<style scoped lang="scss">
    .nav{
        &__background{
            position: fixed;
	        top:0;
	        right:0;
            // padding-left: 10rem; //atkomentuoti jei naudojamas nav background bet axtension poicona
            min-width: 100%;
            height: 110px;
            width: 100%;
            z-index: 1;
        }
    }
    .logo{
        min-height: 100%;
        width: 11rem;
        padding-bottom: 10px;
    }
</style>