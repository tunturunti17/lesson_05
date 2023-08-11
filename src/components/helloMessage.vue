<template>
    <h1 :bind="message"> {{ message }}</h1>
</template>

<script>
    export default {
        name:'hello-message',
        data: function() {
            return {
                message: 'Hello from Vue App',
            }
        }
    }
</script>

<style  scoped>

</style>