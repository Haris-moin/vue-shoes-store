<template>
    <div class="items">
    <v-card class="card" height="325px" width="300px" v-for="item of items" :key="item.code">
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
       
        <button class="addtocart-btn" @click="onAddToCart(item)">add to cart</button>
         <p>
            Rs :{{item.price}}
        </p>
    </div>
        </v-card>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
    props:{
        items:Array
    },
    data(){
        return{
            addCartItem :{}
        }
    },
    methods:{
        ...mapActions(['addToCartItem','openDrawer']),
        onAddToCart(item){
            this.addCartItem ={...item,quantity:1}
            this.addToCartItem(this.addCartItem);
        },
        
    }
    
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
    background: rgb(26, 26, 26);
    color: white;
    padding: 7px;
    border-radius: 5px;
    width: 50%;
    font-size: 20px;
    
}
.item-title{
    font-size: 20px;
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
    margin-bottom: 20px;
}
</style>