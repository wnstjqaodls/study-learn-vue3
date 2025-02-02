<template>
<main>
<div class="container py-4">
    <hr />
    <FancyButton><span style="color:red">button</span></FancyButton>
</div>
</main>
</template>

<script>
import { reactive } from 'vue'
import FancyButton from './FancyButton.vue'
export default {
    components : {
        FancyButton : FancyButton
    },
    setup () {
        const post = reactive({
            title : '제목2',
            content: '내용2'
        })
        const posts = reactive([
            {id:1, title : '제목1', content : '내용1' , isLike : true, type : 'news'},
            {id:2, title : '제목2', content : '내용2' , isLike : true, type : 'news'},
            {id:3, title : '제목3', content : '내용3' , isLike : true, type : 'news'},
            {id:4, title : '제목4', content : '내용4' , isLike : false, type : 'notice'},
            {id:5, title : '제목5', content : '내용5' , isLike : false, type : 'notice'},
        ])
        const createPost = () => {
            console.log('createPost')
        }
        
        return {post, posts, createPost}
    }
}
</script>

<style lang="scss" scoped>

</style>