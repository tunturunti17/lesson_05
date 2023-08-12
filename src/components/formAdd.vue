<template>
    <form class="input-group" @submit.prevent>
  <vue-input 
    placeholder="Add Title for new task" 
    v-model="item.title"></vue-input>
  <vue-input 
    placeholder="Add Descrption for new task" 
    v-model="item.desc"></vue-input>
  <vue-btn class="btn-outline-secondary"
  type="submit" id="button-addon2"
  @click="addNewTodo"
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
            addNewTodo() {
                this.item.id = Date.now();
                this.item.created = new Date();
                this.item.updated = new Date();
                this.$emit('create', this.item)
                this.item = {
                    title:'',
                    desc:'',
                    done: false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>