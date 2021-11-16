<template>
  <div>
    
    <v-app-bar dark class="header-bar">
      <img
        width="100px"
        src="https://www.pngkey.com/png/full/252-2523504_sneakers-running-shoes-mockup-sport-shoes-png.png"
      />
      <v-toolbar-title class="header-title"
        ><router-link to="/dashboard">Shoe Fly</router-link></v-toolbar-title
      >
      <v-spacer>
        <ul class="header-links">
          <li><router-link to="/addidas">Addidas</router-link></li>
          <li><router-link to="/nick">Nick</router-link></li>
          <li><router-link to="/puma">Puma</router-link></li>
          <li><router-link to="/fila">Fila</router-link></li>
        </ul>
      </v-spacer>

      <v-btn icon>
        <v-icon large @click.stop="drawer = !drawer">mdi-cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="inc" large>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>

  <div>
    <b-modal ref="my-modal" hide-footer title="List of Order Items!">
      <div class="d-block text-center">
        <div v-for="items of cartItems" :key="items.id">
          <div class="modalItems">
            <h5 class="item-name">{{items.name}}</h5>
            <p>{{items.quantity}}</p>
          </div>
        </div>
        <v-divider />
        <h2 style="margin-top:20px">Total Amoun: {{totalAmount}}</h2>
      </div>
      <b-button class="mt-3" variant="outline-primary"  block @click="confirmOrder">Confirm</b-button>
      
    </b-modal>
  </div>


    <v-navigation-drawer v-model="drawer" width="300px" absolute temporary right>
      <div class="drawer-head">
        <img width="50px" height="40px" src="https://www.pngarts.com/files/2/Shoes-PNG-Free-Download.png" alt="">
        <p>Shoe Fly</p>
      </div>
     <div>
        <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-card v-for="item of cartItems" :key="item.id" class="cart-item-card">
            <div class="cart-item">
              <img
                width="80px"
                height="80px"
                :src="item.image"
                alt=""
              />

              <div class="name-quantity-container">
                <p>{{item.name}}</p>
               <div class="inc-dec-buttons">
                  <v-btn icon @click="item.quantity++">
                  <v-icon medium>mdi-plus</v-icon>
                </v-btn>
                <h5>{{item.quantity}}</h5>
                <v-btn icon @click="item.quantity>1 && item.quantity--">
                  <v-icon medium>mdi-minus</v-icon>
                </v-btn>
               </div>
              </div>
              <div class="price">
                 <p>Rs {{item.quantity*item.price}}</p>
               </div>
                <v-btn icon @click="onDeleteItem(item.id)">
                  <v-icon medium>mdi-delete</v-icon>
                </v-btn>
            </div>
          </v-card>
        
        </v-list-item-group>
      </v-list>
     </div>
      <button class="checkout" @click="onCheckOut">Checkout</button>
    </v-navigation-drawer>
  
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
 computed: mapGetters(['cartItems']),
  methods:{
    ...mapActions(['deleteCartItem','resetCart']),
    onDeleteItem(id){
      this.deleteCartItem(id)
    },
    onCheckOut(){
      if(this.cartItems.length>0){
        this.cartItems.map(({price})=>{
        this.totalAmount +=price;
      })
      this.drawer=false; 
      this.showModal()
      }
      
    },
     showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      confirmOrder(){
        this.$refs['my-modal'].hide()
        this.resetCart()

      }
      
  },
  data: () => ({
    drawer: false,
    group:null,
    totalAmount:0,
    isDialogOpen:false,
  }),
   watch: {
      group () {
        this.drawer = true
      },
      
    },
   
    
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.mt-3{
  background: black;
  border: none;
}

.header-title {
  font-size: 34px;
  margin: 0 28px;
  font-family: cursive;
}

a {
  text-decoration: none;
  color: white;
}
ul li {
  display: inline;
  margin-left: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.drawer-head{
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: rgb(43, 43, 43);
  border: 2px solid white;
  color: white;
  text-align: center;
  font-size: 25px;
  font-family: cursive;
  padding: 5px;
 
}
.modalItems{
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  }
  .item-name{
    width: 200px;
  }
.cart-item-card{
  margin-bottom: 10px;
}
.cart-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.checkout {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: rgb(12, 12, 12);
  color: white;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 50px;
}

.name-quantity-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.inc-dec-buttons{
  display: flex;
  align-items: center;
}

</style>