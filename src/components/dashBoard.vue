<template>
   <div class='home-container'>
     <Header />
      <img width="100%" src="https://static.fibre2fashion.com/articleresources/images/85/8406/shoes_big_Big.jpg"/>
       <Items :items="items"/>
   </div>
</template>

 <script>
 import Items from './items.vue';
 import Header from './common/header.vue'
  export default {
    components:{
      Items,
      Header
    },
      async mounted(){
            const res = await fetch("http://localhost:5000/items");
             this.items = await res.json();

        },
      data(){
          return {
              items:[]
          }
      }
   
  }
</script>
<style scoped>

</style>