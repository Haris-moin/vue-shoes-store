<template>
    <div>
        <Header />
        <img width="100%" height="350px" src="https://sportstardom.com/wp-content/uploads/2020/03/running-shoes-colors.jpg" alt="">
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