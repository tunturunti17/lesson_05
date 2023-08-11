<template>
  <div class="container xl">
    <hello-message></hello-message>
    <todo-section></todo-section>
    <todo-render-button></todo-render-button>
    <!-- <filter-value></filter-value> -->
  </div>
</template>

<script>
import helloMessage from '@/components/helloMessage.vue'
import todoSection from '@/components/todoSection.vue'


export default {
  name: 'tasklistComponent',
  components: {
    helloMessage,
    todoSection,
  }
}
</script>