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
          <v-card  class="cart-item-card">
            <div class="cart-item">
              <img
                width="80px"
                height="80px"
                src="https://www.pngkey.com/png/full/252-2523504_sneakers-running-shoes-mockup-sport-shoes-png.png"
                alt=""
              />

              <div class="name-quantity-container">
                <p>casual shoes</p>
               <div class="inc-dec-buttons">
                  <v-btn icon>
                  <v-icon medium>mdi-plus</v-icon>
                </v-btn>
                <h4>4</h4>
                <v-btn icon>
                  <v-icon medium>mdi-minus</v-icon>
                </v-btn>
               </div>
              </div>
              <div class="price">
                 <h4>Rs 2400</h4>
               </div>
                <v-btn icon>
                  <v-icon medium>mdi-delete</v-icon>
                </v-btn>
            </div>
          </v-card>
           <v-card  class="cart-item-card">
            <div class="cart-item">
              <img
                width="80px"
                height="80px"
                src="https://www.pngkey.com/png/full/252-2523504_sneakers-running-shoes-mockup-sport-shoes-png.png"
                alt=""
              />

              <div class="name-quantity-container">
                <p>casual shoes</p>
               <div class="inc-dec-buttons">
                  <v-btn icon>
                  <v-icon medium>mdi-plus</v-icon>
                </v-btn>
                <h4>4</h4>
                <v-btn icon>
                  <v-icon medium>mdi-minus</v-icon>
                </v-btn>
               </div>
              </div>
              <div class="price">
                 <h4>Rs 2400</h4>
               </div>
                <v-btn icon>
                  <v-icon medium>mdi-delete</v-icon>
                </v-btn>
            </div>
          </v-card>
          
        </v-list-item-group>
      </v-list>
     </div>
      <button class="checkout">Checkout</button>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
.name-quantity-container p {
  font-family: cursive;
}
.inc-dec-buttons{
  display: flex;
  align-items: center;
}

</style>