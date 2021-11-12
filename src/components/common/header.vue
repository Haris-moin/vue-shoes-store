<template>
      <div>
    <v-app-bar dark  class="header-bar">
         <img width="100px" src="https://www.pngkey.com/png/full/78-789008_nike-shoes-png-nike-rubber-shoes-2017.png" />
      <v-toolbar-title class="header-title">Shoe Fly</v-toolbar-title>
      <v-spacer>
          <ul class="header-links">
          
           <li> <router-link to="/">Addidas</router-link> </li>
          <li> <router-link to="/">Nick</router-link> </li>
          <li> <router-link to="/">Puma</router-link> </li>
          <li> <router-link to="/">Fila</router-link> </li>
       </ul>
      </v-spacer>
      
      <v-btn icon> 
        <v-icon large>mdi-cart</v-icon>
      </v-btn>
       <v-btn icon>
        <v-icon large>mdi-power</v-icon>
      </v-btn>

     
    </v-app-bar>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.header-title{
    font-size: 34px;
    margin: 0 28px ;
    font-family:cursive;
}

li a{
    text-decoration: none;
    color: white;
}
ul li{
    display: inline;
    margin-left: 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}
</style>