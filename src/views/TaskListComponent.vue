<template>
  <div class="container xl">
    <hello-message></hello-message>
    <todo-section></todo-section>
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