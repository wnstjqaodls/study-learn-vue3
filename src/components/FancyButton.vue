<template>
<button class="fancy-btn">
    <slot></slot>
</button>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style scoped>
.fancy-btn {
    color: #fff;
    background-color: linear-gradient(315deg, #42d392 0%, #1f3f5b 74%);
    border: none;
    padding: 5px 22px;
    margin: 5px;
    border-radius: 8px;
    cursor : pointer;
}
</style>