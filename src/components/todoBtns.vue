<template>
    <div class="todo-btns">
        <vue-btn type="button" 
            :class="item.done ? 'btn btn-success' : 'btn btn-secondary'"
            @click="$emit('changestate', item)">
            {{ item.done ? 'completed' : 'in order' }}
        </vue-btn>
        <vue-btn type="button"
            class="btn btn-info"
            :item="item"
            :editclickcheck="editclickcheck"
            @click="$emit('changetext', item)">Edit
        </vue-btn>
        <vue-btn type="button"
            class="btn btn-info"
            :item="item"
            @click="$router.push({ path: `/tasklist/${item.id}`, query: { desc: item.desc }})">task page
        </vue-btn>
        <vue-btn type="button"
            class="btn btn-danger"
            :item="item"
            @click="$emit('remove', $event)">Delete
        </vue-btn>
    </div>
</template>

<script>
import vueBtn from '@/components/UI/myButton.vue'
    export default {
        name: 'todo-btns',
        components:{
            vueBtn
        },
        props: {
            item: {
                type: Object,
            },
            editclickcheck: {
                type: Boolean,
            }
        },
    }
</script>

<style scoped>
.todo-btns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>