<template>
    <div>
        <Header />
        <img width="100%"  height="350px" src="https://www.topveganshoes.com/wp-content/uploads/2021/01/Fila-Disruptor-2A-Vegan.jpg" alt="">
        <Items :items="items"/>
   
      
    </div>
</template>

<script>
import Header from '../common/header.vue'
import Items from '../items.vue'
    export default {
        components:{
            Items,
            Header
        },
        async mounted(){
            const res = await fetch("http://localhost:5000/shoes");
              const shoes = await res.json();
              this.items = shoes.filter(item=> item.type==="fila");
        },
      data(){
          return {
              items:[]
          }
      }
    }
</script>

<style lang="scss" scoped>

</style>