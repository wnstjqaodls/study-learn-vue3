<template>
    <div>
        <button class="btn btn-primary" @click="$emit('createPost')">button</button>
    </div>
</template>

<script>
export default {
     setup (props, context) {
        const createPost = () => {
            context.emit('createPost',1,2,3,'김길동')
        }
        return {createPost}
    }
}
</script>

<style lang="scss" scoped>

</style>