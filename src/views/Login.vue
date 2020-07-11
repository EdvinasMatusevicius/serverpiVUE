<template>
    <div class="container ">
      <vue-form :type="login">
    </vue-form>

    </div>
</template>

<script>
import form from "../components/forms/authentication/Form.vue";

export default {
  name: "login-form",
  components: {
    vueForm: form
  },
    data(){
    return {
      login: 'log-in'
    }
  }
  
};
</script>