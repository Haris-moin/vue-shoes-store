<template>
    <div>
        <Header />
        <img width="100%" height="350px" src="http://blog.runningwarehouse.com/wp-content/uploads/2012/01/Rainbow2-1024x274.jpg" alt="">
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