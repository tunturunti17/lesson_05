import { onMounted, onUpdated, } from 'vue'
export default (instance) => {
    console.log('Created', instance)
    onMounted(() => {
      console.log('Mounted')
    });
    onUpdated(() => {
        console.log('Updated')
      })
  }