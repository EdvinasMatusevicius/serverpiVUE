<template>
  <div>
    <div v-if="component.type === 'overlay'" class="controlls__btn d-inline-flex justify-center">
        <div class="align-self-center">{{component.name}}</div>
        <v-spacer></v-spacer>
        <v-btn @click="overlay = !overlay" outlined fab :color="component.color" :disabled="reqStatus" class="align-self-center">
            <v-icon>{{component.icon}}</v-icon>
        </v-btn>
    </div>

    <v-overlay :value="overlay" :opacity=0.95>
        <p>{{component.message}}</p>
        <div class="overlay__btn-tray">
            <div class="overlay__btn" v-for="overlayComponent in component.overlayComponents" :key="overlayComponent.id">
                <controlls-button
                    v-if="overlayComponent.type === 'button'"
                    :component="overlayComponent"
                ></controlls-button>
            </div>
            <v-spacer></v-spacer>
            <div class="overlay__btn">
                <span>Cancel</span>
                <v-spacer></v-spacer>
                <v-btn
                    outlined fab
                    @click="overlay = false"
                >
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
        </div>
    </v-overlay>
  </div>
</template>

<script>
import controllsButton from '@/components/shell/controlls-components/Shell-controlls-button.vue';
export default {
    name:'overlay',
    props:['component'],
    components:{
        controllsButton
    },
    data: () => ({
      overlay: false,
    }),
}
</script>

<style lang="scss">
    .overlay{
        &__btn-tray{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
        }
        &__btn{
            width:40%;
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }
</style>