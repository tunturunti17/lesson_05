<template>
    <h1 v-if="todoItems.length==0">Please add new task!</h1>
    <ul v-else class="list-group">
        <li class="list-group-item container-md" v-for="item of filterTask" :key="item.id"
            style="cursor:pointer">
            <div class="container-sm"
                style="display: inline-block; margin-left: 5px; font-weight: 700"
            >{{ item.title }}</div>
            <div class="container-sm"
                style="display: inline-block; margin-left: 5px;"
            >{{ item.desc }}</div>
            <button type="button"
                class="container-sm" 
                :class="item.done ? 'btn btn-success' : 'btn btn-secondary'"
                @click="changeDone(item)">
                {{ item.done ? 'completed' : 'in order' }}
            </button>
            <button type="button"
                class="btn btn-info container-sm"
                @click="$router.push({ path: `/tasklist/${item.id}`, query: { desc: item.desc }})">task page
            </button>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapState } from "vuex"
    export default {
        name: 'todo-list',
        components: {
        },
        data() {
        },
        methods: {
            async changeDone(item) {
                this.$store.dispatch("updateDone", [item.id, item.done]);
            },
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
.container-sm {
    margin-top:5px;
    margin-bottom:5px;
}
</style>