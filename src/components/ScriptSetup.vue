<template>
    <div class="container py-4">
        {{ msg }}
        <br>
        {{ message }}
        <input type="text" v-model="message" />
        <button @click="sayHello">Click</button>
        <PostItem type="news"
        title="제목"
        contents="내용"
        :is-like="true"
        />
        <hr>
        <TemplateRefsChild ref="child"></TemplateRefsChild>
        <template v-if="child">{{ child }}</template>
        <hr>
        <MyButton class="parent-class"></MyButton>
    </div>
</template>

<script setup>
import { ref , defineExpose} from 'vue';
import axios from 'axios';
import PostItem from './Setup/PostItem.vue';
import TemplateRefsChild from './Setup/TemplateRefsChild.vue';
import MyButton from './Setup/MyButton.vue';

const msg = 'Hello World'
const message = ref('')
const sayHello = () => {
    alert('Hello World')
}
const child = ref(null)
defineExpose({
    msg,
})
const response = await axios('https://dummy.restapiexample.com/api/v1/employees')
console.log('response: ', response)

</script >

<style lang="scss" scoped>

</style>