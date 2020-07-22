<template>
  <div v-if="type === 'info-area'">
            <!-- <v-textarea
                readonly
                outlined
                auto-grow
                :value="info"
            ></v-textarea> -->
            <code class="info-txt">
                {{info}}
            </code>
                <v-icon>mdi-information-outline</v-icon>
        </div>
</template>

<script>
export default {
    name:"shell-component-infoarea",
    props:['info','type'],
}
</script>

<style>
    .info-txt{
        background-color: #767676 !important;
        color: rgb(255, 255, 255) !important
    }
</style>