<template>
    <div class="container ">
      <vue-form :type="register">
    </vue-form>

    </div>
</template>

<script>
import form from "../components/forms/Form.vue";

export default {
  name: "register-form",
  components: {
    vueForm: form
  },
    data(){
    return {
      register: 'register'
    }
  }
  
};
</script>