<template>
        <h4 class="page-title d-flex justify-center">{{currentRouteName}}</h4>
</template>

<script>
export default {
    name:'route-name',
    computed: {
        currentRouteName() {
            return this.$route.name;
    }
}
}
</script>

<style>
    .page-title{
        margin:0 auto;
        color: #5a5a5a;
        margin-bottom: 1rem;
    }
</style>