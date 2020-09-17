<template>
  <div>
    <div v-if="component.type === 'overlay'" class="controlls__btn d-inline-flex justify-center">
        <div class="align-self-center">{{component.name}}</div>
        <v-spacer></v-spacer>
        <v-btn @click="showOverlay()" outlined fab :color="component.color" :disabled="requestStatus" class="align-self-center">
            <v-icon>{{component.icon}}</v-icon>
        </v-btn>
    </div>

    <v-overlay :value="overlay" :opacity=0.95>
        <v-progress-circular v-if="overlayStage === 2" indeterminate size="64"></v-progress-circular>
        <p v-if="overlayStage === 1">{{component.message}}</p>
        <div v-if="overlayStage === 1" class="overlay__btn-tray" >
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
                    @click="hideOverlay()"
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
import { mapGetters } from 'vuex';
export default {
    name:'overlay',
    props:['component'],
    watch:{
        requestStatus:function(val){
            if(val && this.overlayStage === 1){
                this.overlayStage = 2;
            }
            if(!val && this.overlayStage === 2){
                this.overlayStage = 0;
                this.overlay = false;
            }
        }
    },
    components:{
        controllsButton
    },
    data: () => ({
      overlay: false,
      overlayStage:0,
    }),
    computed:{
        ...mapGetters({
            requestStatus:'session/getReqStatus'})
    },
    methods:{
        showOverlay(){
            this.overlay=true;
            this.overlayStage=1;
        },
        hideOverlay(){
            this.overlay=false;
            this.overlayStage=0;
        }
    }
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