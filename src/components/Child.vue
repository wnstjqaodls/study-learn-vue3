<template>
<div class="card">
    <div class="card-header">Child Component</div>
    <div class="card-body">
        <DeepChild></DeepChild>
        <p>appMessage: {{ appMessage }}</p>
    </div>
</div>
</template>

<script>
import DeepChild from './DeepChild.vue'
import {inject  } from 'vue'
export default {
    components: {
        DeepChild : DeepChild
    },
    setup () {
        const appMessage = inject('app-message')
        return {appMessage}
    }
}
</script>

<style lang="scss" scoped>

</style>