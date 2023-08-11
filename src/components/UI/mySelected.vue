<template>
    <select class="form-select" @change="changeFilter" :value="modelValue">
        <option selected value="all">all</option>
        <option value="completed">completed</option>
        <option value="inorder">in order</option>
    </select>
</template>

<script>
    export default {
        name: 'vue-select',
        props: {
            modelValue: {
                type: String
            },
        },
        methods: {
            changeFilter(evt) {
                this.$emit("update:modelValue", evt.target.value);
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>