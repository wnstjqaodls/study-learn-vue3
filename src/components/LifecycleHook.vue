<template>
    <div class=""conatiner py-4>
        <input ref="inputRef" type="text" value="hello world"/>
        <hr/>
        <button @click="visible = !visible">Toggle Child</button>
        <LifecycleChild v-if="visible"></LifecycleChild>
        <p id="message">{{ message }}</p>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated } from 'vue';
import LifecycleChild from '@/components/LifecycleChild.vue'

export default {
    components: {
       LifecycleChild : LifecycleChild
    },
    setup () {
     //   console.log('setup')
        const inputRef = ref(null)
        const message = ref('')
        const visible = ref(false)
        // onBeforeMount(() => {
        //     console.log('onBeforeMount', inputRef.value) // null
        // })
        // onMounted(() => {
        //     console.log('onMounted', inputRef.value.value) //hello world  dom 에 접근 가능
        // })

        // onBeforeUpdate(() => {
        //     console.log('onBeforeUpdate', message.value) 
        //     console.log('DOM Content: ',document.querySelector('#message').textContent)
        // })
        // onUpdated(() => {
        //     console.log('onUpdated')
        //     console.log('DOM Content: ',document.querySelector('#message').textContent)
        // })


        return {inputRef, message, visible}
    }
}
</script>

<style lang="scss" scoped>

</style>