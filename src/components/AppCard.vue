<template>
    <div class="col-4">
        <div class="card">
            <div class="card-body p-2">
                <!-- {{ $props }} 이렇게 $props 로 접근 가능 -->
                <!-- type : new , notice  -->
                <span class="badge bg-secondary">{{ typeName }}</span>
                <h5 class="card-title red mt-2">{{ title }}</h5>
                <p class="card-text">{{ contents }}</p>                
                <a href="#" class="btn" :class="isLikeClass">좋아요</a>
            </div>
        </div>
    </div>
</template>

<script>
import {computed} from 'vue'
export default {

    emits : ['toggleLike'],
    // props: ['title', 'content', 'link'], 이렇게 리터럴로도 가능
    props : {
        type: {
            type : String,
            default : 'news',
            validator: value => {
                return ['news', 'notice'].includes(value);
            },
        },
        title : {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true
        },
        isLike: {
            type : Boolean,
            default : false
        },
        obj : {
            type : Object,
            default : () => {},
        },
    },
    setup (props, context) { // setup 에서 props 는 읽기 전용이다.
        console.log(props.title);
        const isLikeClass = computed(() => props.isLike ? 'btn-danger' : 'btn-outline-danger');

        const typeName = computed(()=> props.type === 'news' ? '뉴스' : '공지사항');

        const toggleLike = () => {
            context.emit('toggleLike')
        }

        
            return {isLikeClass, typeName, toggleLike}

    },
        
}
</script>

<style lang="scss" scoped>

</style>