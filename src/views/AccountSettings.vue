<template>
    <div>
        <account-logo-upload></account-logo-upload>
        <account-button></account-button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import accountButton from "@/components/account/account-button.vue";
import accountLogoUpload from "@/components/account/account-logo-upload.vue";
export default {
    name:'account_settings',
    components:{
        accountButton,
        accountLogoUpload
    }
}
</script>

<style scoped>
 
</style>