<template>
    <div>
        <v-btn @click="deleteAccount()">Delete account</v-btn>
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