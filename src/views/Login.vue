<template>
    <div class="container ">
      <vue-form :type="login">
    </vue-form>

    </div>
</template>

<script>
import form from "../components/forms/Form.vue";

export default {
  name: "login-form",
  components: {
    vueForm: form
  },
    data(){
    return {
      login: 'login'
    }
  }
  
};
</script>