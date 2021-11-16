<template>
  <router-view> </router-view>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
  }),
};
</script>

<style >
 .container{
   text-align: center;
    max-width: 500px !important;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
    font-family:monospace;
  }
  input {
    padding: 10px;
    margin: 20px 10px !important;
    width: 80%;
    font-size: 20px !important;
    border-bottom: 1px solid  grey!important;
    
  }
  input:focus{
outline: none;
 border-bottom: 1px solid  rgb(23, 150, 253)!important;
  }
  .btn{
    display: inline-block;
    background: rgb(33, 34, 34) !important; 
    color: #fff!important;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    width: 80%;
    font-size: 22px;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
    text-decoration: none;
  }
  btn:focus{
    outline: none;
  }
.container h1{
  text-align: center;
  margin-bottom:20px ;
  color:rgb(23, 150, 253);
}
.auth-navigation{
  margin: 25px;
  text-align: right;
  font-size: 20px;

}
.router-link {
text-decoration: none;
color: rgb(23, 150, 253);
}
a:hover{
  color:gray !important;
}
   
</style>