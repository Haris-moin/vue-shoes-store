import Login from './components/login.vue';
import SignUp from './components/SignUp.vue';
import userScreen from './components/usersScreen.vue';
import DashBoard from './components/dashBoard.vue'

export default [
    {
        path:'/',component:Login
    },
    {
        path:'/register',component:SignUp
    },
    {
        path:'/users',component:userScreen
    },
    {
        path:'/dashboard',component:DashBoard
    }
]