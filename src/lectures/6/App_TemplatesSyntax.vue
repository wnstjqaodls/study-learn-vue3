<template>
    <div>
     <h1>보간법</h1>
        <p>{{ message }}</p>
        <p v-once>{{ message }}</p>
        <button v-on:click="message = message + '!'">버튼</button>
        <hr/>
        <p>{{rawHtml  }}</p> 
        <p v-html="rawHtml"></p>
        <hr>
        <h1>속성바인딩</h1>
        <div title="타이틀속성은 마우스오버시나타남">마우스를 대보세요</div>
        <br>
        <div v-bind:title="dynamicTitle">v-bindtitle로 이러한 속성에 값을 바인딩가능함</div>
        <input type="text" value="value속성의 값" v-bind:disabled="isDisabled"/>
        <button @click="isDisabled = !isDisabled">인풋박스 입력 활/비활 버튼</button>
        <hr>
        <!-- 아래는 위와 동일하지만 단축속성을(: 콜론) 이용한 내용임 -->
         <div :title="dynamicTitle">마우스를 대보세요</div>
        <input type="text" :value="value" :disabled="isDisabled"/>
        <button @click="isDisabled = !isDisabled">인풋박스 입력 활/비활 버튼</button>
        <!-- 위와같은 여러 속성을 한번에 바인딩하는 v-bind 속성을 이용한 내용임 -->
         <hr>
         <input v-bind="attrs" />
         <hr>
         <h2>Javascript 표현식 사용</h2>
         <p> {{ message.split('').reverse().join('') }}</p>
         <p> 메세지의 길이는 : {{ message.length }}</p>
         <p> 100보다 큰가요? : {{ 100 < 100 ? '참' : '거짓' }}</p>
         <p> 100보다 큰가요? : {{ 100 < 100 ? '참' : '거짓' }}</p>
    </div>
</template>

<script>
import {ref} from 'vue'

    export default {
        setup() {
const message = ref('Hello World')
const rawHtml = ref('<strong>강조태그입니다.</strong>')
const dynamicTitle = ref('동적 타이틀')
const isDisabled = ref(true)

const attrs = ref({
    type: 'text',
    value: 'input속성의 값',
    disabled: false ,
    title: '타이틀속성은 마우스오버시나타남',
    placeholder: '플레이스홀더속성은 입력창에 힌트를 제공함',
    id: 'inputId',
    class: 'inputClass'
    
})

return {
    message, rawHtml , dynamicTitle, isDisabled, attrs
}
        }
        
    }
</script>

<style lang="scss" scoped>

</style>