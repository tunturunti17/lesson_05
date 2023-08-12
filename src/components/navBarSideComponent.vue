<template>
    <ul class="navbar navbar-dark bg-dark navbar-nav">
      <li class="nav-item" :key="task" v-for="task in items">
        <router-link
          class="nav-link"
          active-class="active"
          :to="{
            name: 'taskId',
            params: { id: task.id },
            query: { desc: task.desc },
          }"
          >{{ task.title }}</router-link
        >
      </li>
    </ul>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "NavSideBarComponent",
    data() {
      return {
        items: [],
      };
    },
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/tasks`);
        this.items = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    float: left;
    border-end-end-radius: 8px;
    border-end-start-radius: 8px;
  }

  .nav-item {
    padding: 5px;
  }
  </style>
  