<template>
    <div>
        <Header />
        <img width="100%" height="300px" src="http://247italiastyle.com/ws0202/wp-content/uploads/2019/03/banner-ADIDAs.jpg" alt="addidas">
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