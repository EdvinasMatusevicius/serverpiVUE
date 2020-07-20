<template>
    <div class="navigation__btn d-inline-flex justify-center">
        <v-spacer class="spacer-hide-mobile"></v-spacer>
        <div class="align-self-center navigation__name">{{navigation.name}}</div>
        <v-spacer class="spacer-hide-mobile"></v-spacer>
        <v-btn :to="navigation.route" outlined fab class="align-self-center text-decoration-none icon-btn" color="secondary">
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
    .navigation{
        &__btn{
            background:#ffffffce;
            margin-bottom: 1rem;
        }
        &__name{
            color: #5a5a5a;
        }
    }
    @media (max-width: 600px) {
        .spacer-hide-mobile{
            display: none;
        }
        .icon-btn{
            margin-left: 1rem;
        }
    }
</style>