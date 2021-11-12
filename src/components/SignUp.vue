<template>
    <div class="container">
        <h1>Sign Up</h1>
         <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <input type="email" required v-model="email"  placeholder="Email" />
    </div>
     <div class="form-control">
      <input
        type="text"
        v-model="name"
        placeholder="User Name"
        required
      />
    </div>
    <div class="form-control">
      <input
        type="text"
        v-model="contact"
        placeholder="Contact"
        required
      />
    </div>
    <div class="form-control">
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
    </div>
    <input type="submit" value="Sign Up" class="btn" />
  </form>
 <div class="auth-navigation">
   Already have account?
    <router-link class="router-link" to="/">Login here</router-link>
 </div>
    </div>
</template>
<script>

export default {
    name:'SignUp',
    data(){
        return{
          users:[],
        
             email:'',
             name:'',
             password:'',
             contact:'',
        }
    },
    methods:{
      onSubmit(e){
        e.preventDefault();
        const newUser ={
          email:this.email,
          name:this.name,
          password:this.password,
          contact:this.contact
        }
       
       if(JSON.parse(localStorage.getItem('users'))){
         this.users = JSON.parse(localStorage.getItem('users'))
       }

        this.users.push(newUser)
        localStorage.setItem('users',JSON.stringify(this.users))
        console.log('user',JSON.parse(localStorage.getItem('users')));
        this.email='';
        this.password='';
        this.contact='';
        this.$router.push('/dashBoard')
      }
    }
}
</script>
