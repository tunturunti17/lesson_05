<template>
    <todo-stat></todo-stat>
    <form-add></form-add>
    <vue-input type="text"
        class="form-control" 
        placeholder="Search task"
        :model-value="searchQuery"
        @update:model-value="setSearchQuery">
    </vue-input>
    <vue-select :model-value="filterSelect"
        @update:model-value="setFilterSelect"></vue-select>
    <todo-list></todo-list>
</template>


<script>
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
