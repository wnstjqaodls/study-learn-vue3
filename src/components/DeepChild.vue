<template>
<div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body">
        <p>staticMessage: {{ staticMessage }}</p>
        <p>message: {{ message }}</p>
        <p>count: {{ count }}</p>
    </div>
</div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup () {
        const staticMessage = inject('static-message', 'default static message')
        const {message, updateMessage} = inject('message')
        const count = inject('count')
        updateMessage('!!!')
        //message.value = 'try to Fix message ReadOnly' //권장 X readonly 로 받은 값이라 수정안됨. 콘솔확인해보라.

        return {staticMessage, message, count}
    }
}
</script>

<style lang="scss" scoped>

</style>