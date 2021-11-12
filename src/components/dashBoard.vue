<template>
   <div class='home-container'>
     <Header />
      <img width="100%" src="https://static.fibre2fashion.com/articleresources/images/85/8406/shoes_big_Big.jpg"/>
       <Items />
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
   
  }
</script>
<style scoped>

</style>