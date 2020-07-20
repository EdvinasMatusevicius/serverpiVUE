<template>
    <div class="row__grid">
        <div>{{project.name}}</div>
        <div class="d-inline-flex justify-space-around">
            <v-btn outlined tile small><v-icon left>mdi-door-open</v-icon>Open project</v-btn>
            <v-btn outlined tile small><v-icon left>mdi-github</v-icon>Github</v-btn>
            <v-btn outlined tile small><v-icon left>mdi-cog</v-icon>Project setup</v-btn>
            <v-icon v-if="project.language == '1'" color="#4592af">mdi-language-php</v-icon>
        </div>
    </div>
</template>

<script>
export default {
    name:'project-row',
    props:['project']
}
</script>

<style scoped lang="scss">

    .row{
        &__grid{
            display: grid;
            grid-template-columns: 2fr 3fr;
            border-bottom:1px solid #ebe8e8;
            margin-bottom: 1rem;
        }
    }
</style>