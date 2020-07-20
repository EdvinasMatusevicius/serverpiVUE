<template>
    <div class="panel__btn d-inline-flex justify-center">
        <v-spacer></v-spacer>
        <div class="align-self-center">{{navigation.name}}</div>
        <v-spacer></v-spacer>
        <v-btn :to="navigation.route" outlined fab class="align-self-center text-decoration-none" color="green">
            <v-icon>{{navigation.icon}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name:'navigation-button',
    props:['navigation']
}
</script>

<style scoped lang="scss">
    .panel{
        &__btn{
            background:#ffffffce;
            border-bottom:1px solid #ebe8e8;
            margin-bottom: 1rem;
        }
    }
</style>