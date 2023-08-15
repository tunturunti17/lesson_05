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
import { mapGetters } from "vuex"
    export default {
        name: 'todo-stat',
        components: {
            vueBtn
        },
        computed: {
            ...mapGetters({
                completedTasks: 'completedTasks',
                allTasks: 'allTasks',
                percentComplete: 'percentComplete'
            })
        }
    }
</script>

<style scoped>
.stat {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
}
</style>