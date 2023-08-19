import { createStore } from "vuex";
import axios from   "axios";

export default createStore({
    actions: {
        async fetchTasks({commit}) {
              const res = await axios.get(`http://localhost:3000/tasks`);
              commit('setTodoItems', res.data);
        },
        login({commit}) {
            commit('setAuth');
        },
        async addNewTodo({commit}, playload) {
            const res = await axios.post(`http://localhost:3000/tasks`, {
                id: new Date(),
                title: playload[0],
                desc: playload[1],
                created: new Date(),
                updated: new Date(),
                done: false,
            });
            commit('addItem', res.data);
        },
        async updateDone({commit}, playload) {
            const res = await axios.patch(
              `${`http://localhost:3000/tasks`}/${playload[0]}`,
              {
                done: !playload[1],
                updated: new Date(),
              }
            );
            commit("setDone", res.data);
          },
          async updateTask({commit}, playload) {
            const res = await axios.patch(
              `${`http://localhost:3000/tasks`}/${playload[0]}`,
              {
                title: playload[1],
                desc: playload[2],
                updated: new Date(),
              }
            );
            commit("setTask", res.data);
          },
    },
    state: () => ({
        todoItems: [],
        filterSelect: "all",
        searchQuery: "",
        auth: false,
    }),
    mutations: {
        setTodoItems(state, todoItems) {
            state.todoItems = todoItems
        },
        addItem(state, item) {
            state.todoItems.push(item);
        },
        setFilterSelect(state, filterSelect) {
            state.filterSelect = filterSelect
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setAuth(state) {
            state.auth = !state.auth
        },
        setDone(state, task) {
            const stateTask = state.todoItems.find((item) => item.id === task.id);
            stateTask.done = task.done;
            stateTask.updated = new Date();
        },
        setTask(state, task) {
            const stateTask = state.todoItems.find((item) => item.id === task.id);
            stateTask.title = task.title;
            stateTask.desc = task.desc;
            stateTask.updated = new Date();
        },
    },
    getters: {
        getAuth(state) {
            return state.auth
        },
        getTasks(state) {
            return state.todoItems;
          },
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
});