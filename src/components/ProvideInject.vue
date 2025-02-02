<template>
<div class="container py-4">
    <div class="card">
        <div class="card-header">ProvideInject Component</div>
        <div class="card-body">
            <button @click="count++">Click</button>
            <p>appMessage: {{ appMessage }}</p>
            <Child></Child>
        </div>        
    </div>    
    </div>
</template>

<script>
import Child from './Child.vue'
import {ref , provide, readonly, inject} from 'vue'
export default {
    components: {
        Child : Child
    },
    setup () {
        const staticMessage = 'static message'
        const message = ref('message')
        const updateMessage = (appendMessage) => {
            message.value = message.value + appendMessage
        }
        const count = ref(10)
       // provide('static-message', staticMessage)
        provide('message', {message: readonly(message), updateMessage})
        provide('count', count)
        console.log('this', this) //undefined 로 직힘, this 로 접근 불가능 이유 : setup 라이프사이클 이후에 실행되기 때문에

        const appMessage = inject('app-message')

        return {count, appMessage}
    },
    mounted () {
        console.log('this.msg', this.msg) // this 로 접근 가능
    }
}
</script>

<style lang="scss" scoped>

</style>