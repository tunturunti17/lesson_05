<template>
    <h1 v-if="todoItems.length==0">Please add new task!</h1>
    <ul v-else class="list-group">
        <todo-item v-for="item of filterTask"
        :key="item.id"
        :item="item"
        :editclickcheck="editclickcheck"
        @changestate="$emit('changestate', item)"
        @remove="$emit('remove', item)"
        @changetext="$emit('changetext', item)"></todo-item>
    </ul>
</template>

<script>
import todoItem from '@/components/todoItem.vue'
import { mapGetters, mapState } from "vuex"
    export default {
        name: 'todo-list',
        components: {
            todoItem,
        },
        methods: {
        },
        computed: {
            ...mapGetters({
                filterTask: 'filterTask',
            }),
            ...mapState({
                todoItems: state => state.todoItems
            })
        },
    }
</script>

<style scoped>

</style>