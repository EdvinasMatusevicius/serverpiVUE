<template>
     <v-text-field v-if="formComponent.type === 'input' && !variables[formComponent.hideIf]"
        v-model="dbUserPassword"
        :rules="rules"
        :type="formComponent.inputType"
        :label="formComponent.label"
    >
    </v-text-field>
</template>

<script>
export default {
    name:"shell-component-textfield",
    props:['formComponent','variables','rules'],
}
</script>

<style>

</style>