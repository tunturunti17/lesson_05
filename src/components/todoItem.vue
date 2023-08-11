<template>
    <li class="list-group-item" :item="item"
    style="cursor:pointer" :id="item.id">
        <p 
        style="display: inline-block; margin-left: 5px;" :item="item"
        :v-text="item.text">{{ item.text }}</p>
        <todo-btns :item="item"
        :editclickcheck="editclickcheck"
        @changestate="$emit('changestate', item)"
        @changetext="$emit('changetext', item)"
        @remove="$emit('remove', item)"
        ></todo-btns>
    </li>
</template>

<script>
import todoBtns from '@/components/todoBtns.vue'

    export default {
        name: 'todo-item',
        components: {
            todoBtns,
        },
        props: {
            todoitems: {
                type: Array,
            },
            item: {
                type: Object,
            },
            editclickcheck: {
                type: Boolean,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>