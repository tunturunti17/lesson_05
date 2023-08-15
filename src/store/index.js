import { createStore } from "vuex";
import axios from   "axios";

export default createStore({
    actions: {
        async fetchTasks({commit}) {
              const res = await axios.get(`http://localhost:3000/tasks`);
              commit('setTodoItems', res.data);
        }
    },
    state: () => ({
        todoItems: [],
        filterSelect: "all",
        searchQuery: "",
    }),
    getters: {
        searchTask(state) {
            return state.todoItems.filter(todoItem => todoItem.title.toLowerCase().includes(state.searchQuery))
        },
        
        filterTask(state, getters) {
            if (state.filterSelect == "completed") {
                return getters.searchTask.filter((item) => item.done);
            } else if (state.filterSelect == "inorder") {
                return getters.searchTask.filter((item) => !item.done);
            }  else {
                return getters.searchTask
            }
        },
        completedTasks(state) {
            let tasksDone=[];
            state.todoItems.forEach(item => tasksDone.push(item.done));
            return tasksDone.filter(function(value){return value}).length;
        },
        allTasks(state) {
            let tasksDone=[];
            state.todoItems.forEach(item => tasksDone.push(item.done));
            return tasksDone.length;
        },
        percentComplete(state){
            let tasksDone=[];
            state.todoItems.forEach(item => tasksDone.push(item.done));
            return ( (Math.round(((tasksDone.filter(function(value){return value}).length / tasksDone.length) * 100)*10)/10) || '0')
        },
    },
    mutations: {
        setTodoItems(state, todoItems) {
            state.todoItems = todoItems
        },
        setFilterSelect(state, filterSelect) {
            state.filterSelect = filterSelect
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }
    },
    modules: {

    }
});