<template>
    <v-flex xs12 md6 lg4 xl3 >

  <v-card class="card ma-5" color="#f5f7fa">
        <v-card-title class="font-weight-normal body-2">
          <div class="card__user-grid  align-center">
              <v-avatar v-if="logo" size="45" class="mr-3">
                  <v-img :src="logo"/>
              </v-avatar>
              <v-btn v-else fab depressed color="#dddddd" small class="mr-3">
                <v-icon >mdi-account</v-icon>
              </v-btn>
              <p class="ma-0 text-subtitle-1"> {{username}}</p>
            </div>
          </v-card-title>
        <v-img alt="Vue logo" :aspect-ratio="16/9" :src="projectImg"/>
        <v-card-subtitle class="pb-0" color="red">
          <h3 class="text-center text--primary">{{projectName}}</h3><hr>
          <p class="text--secondary">{{projectDescription}}</p>
        </v-card-subtitle>
        <v-card-actions class="pt-0">
                <v-spacer></v-spacer>
                <v-btn class="text-decoration-none" target="_blank" fab depressed :href="projectLink">
                  <v-icon x-large color="primary">mdi-arrow-up-circle-outline</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="text-decoration-none" target="_blank" fab depressed :href="gihub">
                  <v-icon x-large color="accent">mdi-github</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
export default {
    name:'home-project-card',
    props:['logo','username','projectImg','projectName','projectDescription','projectLink','gihub']
}
</script>

<style lang="scss">
  .card{
    &__user-grid{
      display: grid;
      grid-template-columns: auto auto;
    }
  }
</style>