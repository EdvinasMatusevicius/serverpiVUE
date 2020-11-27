<template>
    <div class="m-5 bc-danger">
        <v-btn depressed @click="deleteAccount()"><v-icon color="red">mdi-delete</v-icon> Delete account</v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'account_settings',
    methods:{
        ...mapActions({
            deleteAccount:'account/delete'
        })
    }
}
</script>

<style scoped>
 
</style>