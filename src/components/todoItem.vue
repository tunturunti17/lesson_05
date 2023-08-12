<template>
    <li class="list-group-item" :item="item"
    style="cursor:pointer" :id="item.id">
        <div
            style="display: inline-block; margin-left: 5px; font-weight: 700" :item="item"
            contenteditable="true">{{ item.title }}</div>
        <div
            style="display: inline-block; margin-left: 5px;" :item="item"
            contenteditable="true">{{ item.desc }}</div>
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