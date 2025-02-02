<template>
    <div class="card">
        <div class="card-body">LifecycleChild</div>
        <input type="text" id="input"/>
    </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';
export default {
    setup () {
        console.log('LifecycleChild setup')
        onBeforeMount(() => {
            console.log('LifecycleChild onBeforeMount')
        })
        onMounted(() => {
            console.log('LifecycleChild onMounted')
        })
        onBeforeUnmount(() => {
            console.log('LifecycleChild onBeforeUnmount')
            console.log(document.querySelector('#input')) // 값 가져올수 있음
        })
        onUnmounted(() => {
            console.log('LifecycleChild onUnmounted')
            console.log(document.querySelector('#input')) // null 
        })
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>