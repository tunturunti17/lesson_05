<template>
    <form class="input-group" @submit.prevent="addNewTodoItem">
  <vue-input 
    placeholder="Add Title for new task" 
    v-model="item.title"></vue-input>
  <vue-input 
    placeholder="Add Descrption for new task" 
    v-model="item.desc"></vue-input>
  <vue-btn class="btn-outline-secondary"
  type="submit" id="button-addon2"

  :disabled="(item.title.length == 0) || (item.desc.length == 0)">Add</vue-btn>
  </form>
</template>

<script>
import vueBtn from '@/components/UI/myButton.vue'
import vueInput from '@/components/UI/myInput.vue'
    export default {
        name: 'form-add',
        components: {
            vueBtn,
            vueInput
        },
        props: {
            task: {
                type: String,
            }
        },
        data() {
            return {
                item: {
                    title:'',
                    desc:'',
                    done: false
                }
            }
        },
        methods: {
            addNewTodoItem() {
                this.$store.dispatch('addNewTodo', [this.item.title, this.item.desc]);
                this.item = {
                    title:'',
                    desc:'',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>