<template>
  <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="menu-btn"
                dark
                fab
                depressed
                outlined
                v-bind="attrs"
                v-on="on"
              >
                <v-icon 
                large
                >mdi-account-circle-outline</v-icon>
              </v-btn>
                
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title> <v-icon>mdi-account</v-icon><span class="list-name">{{email}}</span></v-list-item-title>
              </v-list-item>

              <v-list-item
                to="/account"
                class="text-decoration-none"
              >
                <v-list-item-title class="list-btn "> <v-icon>mdi-account-cog</v-icon><span class="list-name">Account settings</span></v-list-item-title>
              </v-list-item>

              <v-list-item 
                @click="logout()"
              >
                <v-list-item-title class="list-btn"> <v-icon>mdi-logout</v-icon><span class="list-name">Logout</span></v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'user-menu',
    props:['email'],
    methods:{
        ...mapActions({
            logoutAction:"login/logout",
            deleteAccount:"account/delete"
        }),
        logout(){
            this.logoutAction().then(()=>{
                this.$router.push("/login");
            })
        }
    }
}
</script>

<style>
button:focus{
    border: none;
    outline: none !important;
}
.list-name{
    margin-left: 1rem;
}
.list-btn{
    cursor: pointer;
}


</style>