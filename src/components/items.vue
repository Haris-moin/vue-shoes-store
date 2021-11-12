<template>
    <div class="items">
    <v-card class="card" height="300px" width="300px" v-for="item of items" :key="item.code">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.image"
    >
    </v-img>
     <v-card-subtitle class="pb-0">
      {{item.name}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
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
    display: flex ;
    justify-content: space-around;
}
</style>