<template>
    <div class="container">
        <h1>Login</h1>
         <form @submit="onSubmit" class="add-form">
           <div v-if="isErrorMsg" class="error-msg">{{erroMessage}}</div>
    <div class="form-control">
      <input type="email" required v-model="email"  placeholder="Email" />
    </div>
    <div class="form-control">
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
    </div>
    <input type="submit" value="Login" class="btn" />
  </form>
  <div class="auth-navigation">
   Don't have account?
    <router-link class="router-link" to="/register">SignUp</router-link>
 </div>
    </div>
</template>

<script>

export default{
     name:'Login',
     data(){
         return{
           erroMessage:'',
           isErrorMsg:false,
           isValidUser:false,
             email:'',
             password:'',
         }
     },
     methods:{
       onSubmit(e){
        
           e.preventDefault();
         const users = JSON.parse(localStorage.getItem('users'))
        
         users.map(({email,password})=>{
           if(email===this.email && password === this.password){
             
             this.isValidUser=true;
           }
         })
         if(this.isValidUser){
           this.$router.push('/dashBoard')
         }
         else{
           
           this.isErrorMsg= true
           this.erroMessage="incorrect user email or password"
         }
       }
     }
 }
</script>

<style scoped>
.error-msg {
  background: rgb(233, 193, 193);
  padding: 10px;
  color: red;
  font-size: 18px;
  margin: 10px 25px;
  border-radius: 5px;
  border: 1px solid rgb(184, 87, 87);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>