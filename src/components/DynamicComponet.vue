<template>
    <div class="container py-4">
        <button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">사과</button>
        <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">바나나</button>
        <hr>
        <component :is="currentComp"></component>
        <hr>
        <p>{{ obj1 }}</p>
        <p>{{ obj2 }}</p>
    </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

const currentComp = shallowRef(DynamicApple) 
// obj2.value 가 바뀌었을때는 반응함  > 값자체가 바뀌어야 반응함
// obj2.value.name 이 바뀌었을때는 반응하지 않음 > 값자체가 아니라 값의 속성이 바뀌면 반응안함

const obj1 = ref({
    name: '홍길동'
})
const obj2 = shallowRef({ 
    name: '김길동'
})

const changeCurrentComp = (comp) => {
    currentComp.value = comp
}

</script>

<style lang="scss" scoped>

</style>