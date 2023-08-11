<template>
    <form class="input-group" @submit.prevent>
  <vue-input 
  placeholder="Add new task" 
  v-model="item.text"></vue-input>
  <vue-btn class="btn-outline-secondary"
  type="submit" id="button-addon2"
  @click="addNewTodo"
  :disabled="item.text.length == 0">Add</vue-btn>
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
                    text:'',
                    done: false
                }
            }
        },
        methods: {
            addNewTodo() {
                this.item.id = Date.now();
                this.$emit('create', this.item)
                this.item = {
                    text: '',
                    done: false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>