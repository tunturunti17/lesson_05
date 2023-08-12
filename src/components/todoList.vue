<template>
    <h1 v-if="todoitems.length==0">Please add new task!</h1>
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
    export default {
        name: 'todo-list',
        components: {
            todoItem,
        },
        props: {
            todoitems: {
                type: Array,
            },
            item: {
                type: Object,
            },
            filterselect: {
                type: String,
            },
            searchquery: {
                type: String,
            },
            editclickcheck: {
                type: Boolean,
            }
        },
        methods: {
            searchTask() {
                return this.todoitems.filter(todoItem => todoItem.title.toLowerCase().includes(this.searchquery))
            },
        },
        computed: {
            filterTask() {
                if (this.filterselect == "completed") {
                    return this.searchTask().filter((item) => item.done);
                } else if (this.filterselect == "inorder") {
                    return this.searchTask().filter((item) => !item.done);
                }  else {
                    return this.searchTask()
                }
            }
    },
    }
</script>

<style scoped>

</style>