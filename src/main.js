import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import vuetify from './plugins/vuetify'
import {store} from './store/store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})
new Vue({
  render: h => h(App),
  store:store,
  vuetify,
  router:router
}).$mount('#app')
