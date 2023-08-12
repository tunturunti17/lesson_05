<template>
    <div class="container-md">
      <div ref="title" contenteditable="true" style="font-weight: 700">Title: {{ item.title }}</div>
      <div ref="desc" contenteditable="true">Description: {{ $route.query.desc }}</div>
      <p>Create date: {{ item.created }}</p>
      <p>Update date: {{ item.updated }}</p>
      <vue-btn
        type="button"
        class="btn"
        :class="[item.done ? 'btn-success' : 'btn-secondary']"
        v-on:click="changeState"
      >
        {{ item.done ? 'completed' : 'in order' }}
      </vue-btn>
      <vue-btn type="button" class="btn btn-danger" v-on:click="removeItem">
        Remove
      </vue-btn>
      <vue-btn type="button" class="btn btn-info" v-on:click="changeText">
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
      try {
        const res = await axios.get(`http://localhost:3000/tasks/${this.id}`);
        this.item = res.data;
        console.log(this.item);
      } catch (error) {
        console.log(error);
      }
    },
    watch: {
      async "$route.path"() {
        try {
          const res = await axios.get(
            `http://localhost:3000/tasks/${this.$route.params.id}`
          );
          this.item = res.data;
          console.log(this.item);
        } catch (error) {
          console.log(error);
        }
      },
    },
    methods: {
      async removeItem() {
        axios.delete(`http://localhost:3000/tasks/${this.id}`);
        this.$router.push({ path: "/tasklist" });
      },
      async changeState() {
        try {
          await axios.patch(`${`http://localhost:3000/tasks`}/${this.id}`, {
            done: !this.item.done,
            updated: new Date(),
          });
          this.item.done = !this.item.done;
          this.item.updated = new Date();
        } catch (error) {
          console.error(error);
        }
      },
      async changeText() {
        try {
          await axios.patch(`${`http://localhost:3000/tasks`}/${this.id}`, {
            title: this.$refs.title.innerText,
            desc: this.$refs.desc.innerText,
          });
          this.item.title = this.$refs.title.innerText;
          this.item.desc = this.$refs.desc.innerText;
        } catch (error) {
          console.error(error);
        }
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
  </style>
  