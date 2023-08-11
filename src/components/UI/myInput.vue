<template>
    <input type="text" class="form-control" 
    :value="modelValue"
    @input="updateInput">
</template>

<script>
    export default {
        name: 'vue-input',
        props: {
            modelValue: [String, Number]  
        },
        methods: {
            updateInput(evt) {
                this.$emit('update:modelValue', evt.target.value)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>