<template>
    <div class="container-xl">
      <vue-btn class="btn btn-primary" @click="goBack()">Go back</vue-btn>
      <NavSideBarComponent></NavSideBarComponent>
      <TaskDescComponent :id="id"></TaskDescComponent>
    </div>
  </template>
  
  <script>
  import NavSideBarComponent from "@/components/navBarSideComponent.vue";
  import TaskDescComponent from "@/components/taskDescription.vue";
  import vueBtn from '@/components/UI/myButton.vue';
  
  export default {
    name: "TaskComponent",
    components: { 
      NavSideBarComponent, 
      TaskDescComponent,
      vueBtn,
     },
    props: ["id"],
    methods: {
      goBack() {
        this.$router.push("/tasklist");
      },
    },
  };
  </script>
  
  <style>
  </style>
  