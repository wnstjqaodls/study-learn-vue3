<template>
    <TheNav />
    <TheView />
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheView from './components/TheView.vue'

export default {
    components : {
        TheNav : TheNav,
        TheView : TheView
    },
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>