<template>
    <div>
        <Header />
        <Items />
        <Items />
        <Items />
        <Items />
    </div>
</template>

<script>
import Header from '../common/header.vue'
import Items from '../items.vue'
    export default {
        components:{
            Items,
            Header
        }
    }
</script>

<style lang="scss" scoped>

</style>