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
                >mdi-menu</v-icon>
              </v-btn>
                
            </template>
            <v-list>
                <v-list-item v-if="isLogedIn">
                      <v-btn text tile color="accent" h5 class="text-decoration-none text-h6 font-weight-regular" to="/panel">Panel</v-btn>
                </v-list-item>
                <v-list-item>
                    <v-btn text tile color="accent" h5 class="text-decoration-none text-h6 font-weight-regular" to="/about">About</v-btn>
                </v-list-item>
                <v-list-item v-if="!isLogedIn">
                    <v-btn text tile color="accent" class="text-decoration-none text-h6 font-weight-regular" to="/login">Login</v-btn>

                </v-list-item>
                <v-list-item v-if="!isLogedIn">
                    <v-btn text tile color="accent" class="text-decoration-none mr-5 text-h6 font-weight-regular" to="/register">Register</v-btn>
                </v-list-item>

            </v-list>
        </v-menu>
</template>

<script>
export default {
    name:'mobile-navbar',
    props:['isLogedIn']
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