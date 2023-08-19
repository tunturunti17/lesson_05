<template>
    <div class="container-md">
      <div class="container-sm">
        <p style="font-weight: 700">Title:</p>
        <div ref="title" contenteditable="true"> {{ item.title }}</div>
      </div>
      <div class="container-sm">
        <p>Description:</p>
        <div ref="desc" contenteditable="true"> {{ $route.query.desc }}</div>
      </div>
      <p>Create date: {{ item.created }}</p>
      <p>Update date: {{ item.updated }}</p>
      <vue-btn
        type="button"
        class="btn"
        :class="[item.done ? 'btn-success' : 'btn-secondary']"
        @click="changeState(item)"
      >
        {{ item.done ? 'completed' : 'in order' }}
      </vue-btn>
      <vue-btn type="button" class="btn btn-danger" @click="removeItem">
        Remove
      </vue-btn>
      <vue-btn type="button" class="btn btn-info" @click="changeText">
        Edit
      </vue-btn>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import vueBtn from '@/components/UI/myButton.vue'

  export default {
    name: "taskDescription",
    components:{
            vueBtn
        },
    props: ["id"],
    data() {
      return {
        item: [],
      };
    },
    async created() {
      this.item = this.$store.getters.getTasks.filter(
      (item) => item.id == this.id
    )[0];
    },
    watch: {
      async "$route.path"() {
      this.item = this.$store.getters.getTasks.filter(
        (item) => item.id == this.$route.params.id
      )[0];
    },
    },
    methods: {
      async removeItem() {
        axios.delete(`http://localhost:3000/tasks/${this.id}`);
        this.$router.push({ path: "/tasklist" });
      },
      async changeState(item) {
        this.$store.dispatch("updateDone", [item.id, item.done]);
      },
      async changeText() {
        this.$store.dispatch("updateTask", [
          this.id,
          this.$refs.title.innerText,
          this.$refs.desc.innerText,
        ]);
      },
    },
  };
  </script>
  
  <style>
  .task__sidebar {
    margin-right: 20px;
    border: 1px solid black;
    float: left;
  }

  .btn {
    margin: 7px;
  }

  p {
    margin-bottom: 2px;
  }

  .container-sm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  