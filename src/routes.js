import Login from "./components/login.vue";
import SignUp from "./components/SignUp.vue";
import userScreen from "./components/usersScreen.vue";
import DashBoard from "./components/dashBoard.vue";
import Addidas from './components/pages/addidas.vue'
import Puma from './components/pages/puma.vue'
import Nick from './components/pages/nick.vue'
import Fila from './components/pages/fila.vue'
export default [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/register",
    component: SignUp,
  },
  {
    path: "/users",
    component: userScreen,
  },
  {
    path: "/dashboard",
    component: DashBoard,
  },
  {
    path: "/addidas",
    component: Addidas,
  },
  {
    path: "/puma",
    component: Puma,
  },
  {
    path: "/nick",
    component: Nick,
  },
  {
    path: "/fila",
    component: Fila,
  },
];
