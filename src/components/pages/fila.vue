<template>
    <div>
        <Header />
        <img width="100%"  height="350px" src="https://www.topveganshoes.com/wp-content/uploads/2021/01/Fila-Disruptor-2A-Vegan.jpg" alt="">
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