<template>
    <ul class="navbar navbar-dark bg-dark navbar-nav">
      <li class="nav-item" :key="task" v-for="task in getItems">
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
  export default {
    name: "NavSideBarComponent",
    data() {
      return {
        items: [],
      };
    },
    computed: {
      getItems() {
        return this.$store.getters.getTasks
      }
    }
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
  