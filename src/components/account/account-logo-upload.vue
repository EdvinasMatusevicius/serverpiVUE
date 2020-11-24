<template>
  <div>
    <v-file-input
      accept="image/*"
      :placeholder="'Set account logo'"
      :prepend-icon="'mdi-image-plus'"
      @change="saveLogo"
    ></v-file-input>
    <div id="message-logo-save">

    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    name:'account-logo-upload',
    methods:{
      saveLogo(event){
        // console.log(event)
        let logo = event;
        let fd= new FormData();

        fd.append('logo', logo);

        api.saveLogo(fd,
        (res)=>{
          document.querySelector('#message-logo-save').innerHTML = res
        },
        (err)=>{
          document.querySelector('#message-logo-save').innerHTML = err
        }
        )
      }
    }
    
}
</script>

<style scoped>
</style>