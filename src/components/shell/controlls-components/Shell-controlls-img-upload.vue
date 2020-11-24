<template>
  <div>
    <v-file-input
      accept="image/*"
      :placeholder="component.name"
      :prepend-icon="component.icon"
      @change="saveImage"
    ></v-file-input>
    <div id="message-img-save">

    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    name:'shell-component-img-upload',
    props:['component'],
    methods:{
      saveImage(event){
        // console.log(event)
        let img = event;
        let fd= new FormData();

        fd.append('image', img);

        const reqBody = {
          slug: this.$route.params.slug,
          image: fd
        };
        api.saveApplicationImage(reqBody,
        (res)=>{
          document.querySelector('#message-img-save').innerHTML = res
        },
        (err)=>{
          document.querySelector('#message-img-save').innerHTML = err
        }
        )
      }
    }
    
}
</script>

<style scoped>
</style>