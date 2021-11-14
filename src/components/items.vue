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
            Rs :2400
        </p>
    </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    {
                        name:'Nike shoes',
                        type:'shoes',
                        price:'Rs 999',
                        code:'00091',
                        image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/037c035b-14e3-4cb2-a9c5-65f377f7d1ed/air-zoom-pegasus-38-road-running-shoes-Hmsj6Q.png'
                    },
                     {
                        name:'puma cutShoes',
                        type:'shoes',
                        price:'Rs 1499',
                        code:'00092',
                        image:'https://i1.adis.ws/i/tom_ford/J1100T-TOF001_U4006_APPENDGRID?$listing_grid$'
                    },
                     {
                        name:'addidas sports',
                        type:'shoes',
                        price:'Rs 1999',
                        code:'00093',
                        image:'https://cdn.shopify.com/s/files/1/0107/9820/2938/products/gmmobile1a_grande.png?v=1635549389'
                    },
                      {
                        name:'Nike shoes',
                        type:'shoes',
                        price:'Rs 999',
                        code:'00091',
                        image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/037c035b-14e3-4cb2-a9c5-65f377f7d1ed/air-zoom-pegasus-38-road-running-shoes-Hmsj6Q.png'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.items{
    margin: 20px;
    display: flex ;
    justify-content: space-around;
    
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
</style>