<template>
    <div class="items">
    <v-card class="card" height="300px" width="300px" v-for="item of items" :key="item.code">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.image"
    >
    </v-img>
     <v-card-subtitle  class="item-title">
      {{item.name}}
    </v-card-subtitle>
    <div class="price-button-container">
       
        <button class="addtocart-btn">add to cart</button>
         <p>
            Rs :{{item.price}}
        </p>
    </div>
        </v-card>
    </div>
</template>

<script>
    export default {
    props:{
        items:Array
    },
    
    }
</script>

<style scoped>
.items{
    
    display: flex ;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px ;
}
.addtocart-btn{
    background: rgb(43, 43, 43);
    color: white;
    padding: 7px;
    border-radius: 5px;
    width: 50%;
    font-size: 20px;
    
}
.item-title{
    font-size: 22px;
    font-family: cursive;
}
.price-button-container{
    display: flex;
    justify-content: space-between;
    margin: 5px;
    align-items: center;
}
p{
    font-size: 20px;
    margin-right: 10px;
}
.card{
    margin-bottom: 15px;
}
</style>