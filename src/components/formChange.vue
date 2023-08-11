<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class="dialog__content" @click.stop>
            <h4>Внесите изменения</h4>
            <form @submit.prevent
            class="input-group">
                <vue-input 
                placeholder="Description task" 
                :value="value.text"
                >
                </vue-input>
                <vue-btn class="btn-primary"
                type="submit" id="button-addon2">Update
                </vue-btn>
           </form>
        </div>
    </div>
</template>

<script>
import vueBtn from '@/components/UI/myButton.vue'
import vueInput from '@/components/UI/myInput.vue'

    export default {
        name: 'vue-change',
        components: {
            vueBtn,
            vueInput
        },
        props: {
            value: {
                type: Object,
            },
            show: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
            // addChangeTask(value) {

            // }
        }   
    }
</script>

<style>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog__content {
    margin: auto;
    background:white;
    padding: 10px 20px;
    border-radius: 8px;
}
</style>