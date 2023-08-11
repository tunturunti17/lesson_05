<template>
    <div class="stat">
        <vue-btn type="button" 
        class="btn-primary btn-sm" 
        disabled>Completed tasks:{{  completedTasks }}</vue-btn>
        <vue-btn type="button" 
        class="btn-primary btn-sm" 
        disabled>all tasks:{{  allTasks }}</vue-btn>
        <vue-btn type="button" 
        class="btn-primary btn-sm" 
        disabled> Percent complete tasklist: {{ percentComplete }}%</vue-btn>
    </div>
        
</template>

<script>
import vueBtn from '@/components/UI/myButton.vue'
    export default {
        name: 'todo-stat',
        components: {
            vueBtn
        },
        props: {
            todoitems: {
                type: Array,
            }
        },
        computed: {
            completedTasks() {
                let tasksDone=[];
                this.todoitems.forEach(item => tasksDone.push(item.done));
                return tasksDone.filter(function(value){return value}).length;
            },
            allTasks() {
                let tasksDone=[];
                this.todoitems.forEach(item => tasksDone.push(item.done));
                return tasksDone.length;
            },
            percentComplete(){
                let tasksDone=[];
                this.todoitems.forEach(item => tasksDone.push(item.done));
                return ( (Math.round(((tasksDone.filter(function(value){return value}).length / tasksDone.length) * 100)*10)/10) || '0')
            },
        },
    }
</script>

<style scoped>
.stat {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}
</style>