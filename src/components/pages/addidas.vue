<template>
    <div>
        <Header />
        <img width="100%" height="300px" src="http://247italiastyle.com/ws0202/wp-content/uploads/2019/03/banner-ADIDAs.jpg" alt="addidas">
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
             this.items = await res.json();

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