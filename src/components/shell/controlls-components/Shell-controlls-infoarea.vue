<template>
  <div v-if="type === 'info-area'">
            <v-textarea
                disabled
                outlined
                auto-grow
                :value="info"
            ></v-textarea>
        </div>
</template>

<script>
export default {
    name:"shell-component-infoarea",
    props:['info','type'],
}
</script>

<style>

</style>