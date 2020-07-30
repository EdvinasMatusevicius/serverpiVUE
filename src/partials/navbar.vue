<template>
<div>
    <img  src="../assets/navbar.svg" alt="" class="nav__background pc">
    <img  src="../assets/navbar-mobile.svg" alt="" class="nav__background mobile">
    <!-- if new svg add preserveAspectRatio="none"  inside svg tag -->
    
    <v-app-bar flat app class="transparent  " height="110">
        <router-link  to="/"><img class="logo" src="../assets/pi_logo.svg" alt=""></router-link>
        <v-spacer></v-spacer>
        
        <div class="navbar-mobile mobile">
            <mobile-navbar
                :isLogedIn="isLogedIn"
            ></mobile-navbar>
        </div>
        <v-btn v-if="isLogedIn" text tile color="white" h5 class="text-decoration-none text-h6 font-weight-regular pc" to="/panel">Panel</v-btn>
        <v-btn text tile color="white" h5 class="text-decoration-none text-h6 font-weight-regular pc" to="/about">About</v-btn>
        <v-btn v-if="!isLogedIn" text tile color="white" class="text-decoration-none text-h6 font-weight-regular pc" to="/login">Login</v-btn>
        <v-btn v-if="!isLogedIn" text tile color="white" class="text-decoration-none mr-5 text-h6 font-weight-regular pc" to="/register">Register</v-btn>
        
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
import mobileNavbar from '@/components/navbar/Mobile-navbar'

export default {
    name:'navbar',
    components:{
        userMenu,
        mobileNavbar
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
            z-index: 2;
        }
    }
    .logo{
        min-height: 100%;
        width: 11rem;
        padding-bottom: 10px;
    }
     .navbar-mobile{
            margin-right: 1rem;
        }
    @media (max-width: 600px) {
      .pc{
          display: none;
      }
    }
    @media (min-width: 600px) {
        .navbar-mobile{
            margin-right: 10rem;
            background:green;
        }
        .mobile{
            display: none;
        }
  }
</style>