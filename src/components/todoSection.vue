<template>
    <todo-stat :todoitems="todoItems"></todo-stat>
    <form-add @create="addNewTodo"
    ></form-add>
    <vue-input type="text"
        class="form-control" 
        placeholder="Search task"
        :model-value="searchQuery"
        @update:model-value="setSearchQuery">
    </vue-input>
    <vue-select :model-value="filterSelect"
        @update:model-value="setFilterSelect"></vue-select>
    <todo-list :todoitems="todoItems" 
        @changestate="changeState"
        :editclickcheck="editClickCheck"
        @remove="removeItem"
        @changetext="changeText"
    ></todo-list>
</template>


<script>
import axios from "axios"
import { mapMutations, mapGetters, mapState } from "vuex"
import todoStat from '@/components/todoStat.vue'
import todoList from '@/components/todoList.vue'
import formAdd from '@/components/formAdd.vue'
import vueInput from '@/components/UI/myInput.vue'
import vueSelect from '@/components/UI/mySelected.vue'
import lifecycle  from '@/components/mixins/lifeCycle.js'

export default ({
    name: 'todo-section',
    setup(instance) {
        lifecycle(instance)
        return {};
    },
    components: {
        todoStat,
        todoList,
        formAdd,
        vueInput,
        vueSelect,
    },
    data: function() {
        return {
        }
    },
    async created() {
        this.$store.dispatch('fetchTasks')
    },
    methods: {
        ...mapMutations({
            setSearchQuery: 'setSearchQuery',
            setFilterSelect: 'setFilterSelect'
        }),
        async changeState(item) {
            try {
                await axios.patch(`${`http://localhost:3000/tasks`}/${item.id}`, {
                done: !item.done,
                updated: new Date(),
                });
                item.done = !item.done;
                item.updated = new Date();
            } catch (error) {
                console.error(error);
            }
        },
        async addNewTodo(item) {
            const res = await axios.post(`http://localhost:3000/tasks`, {
                id: new Date(),
                title: item.title,
                desc: item.desc,
                created: new Date(),
                updated: new Date(),
                done: false,
            });
            this.todoItems = [...this.todoItems, res.data];
        },
        async removeItem(item) {
            axios.delete(`http://localhost:3000/tasks/${item.id}`);
            this.todoItems = this.todoItems.filter(i => i.id !== item.id);
        },
        async changeText(item) {
            let id = item.id
            let idString = id.toString();
            let element = document.getElementById(idString);
            try {
                await axios.patch(`${`http://localhost:3000/tasks`}/${item.id}`, {
                title: element.childNodes[0].innerText,
                desc:  element.childNodes[1].innerText,
                updated: new Date(),
                });
                item.title = element.childNodes[0].innerText;
                item.desc = element.childNodes[1].innerText;
                item.updated = new Date();
            } catch (error) {
                console.error(error);
            }
        }
    },
    computed: {
        ...mapGetters({
            searchTask: 'searchTask',
            filterTask: 'filterTask'
        }),
        ...mapState({
            filterSelect: state => state.filterSelect,
            searchQuery: state => state.searchQuery
        })
    }
})
</script>
