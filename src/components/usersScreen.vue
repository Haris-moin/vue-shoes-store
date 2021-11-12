<template>
  <div class="table-container">
      <h1>{{selectRow}}</h1>
  <v-simple-table dense>
    
      <thead>
        <tr>
          <th v-for="(head,index) of headers" :key="index">
              {{head}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr @click="clickHandler(user)"
          v-for="(user,index) in users"
          :key="index"
        >
         <td>{{ index+1}}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.contact }}</td>
        </tr>
      </tbody>
 
  </v-simple-table>


  </div>
</template>
 <script>
  export default {
      name:'UserScreen',
      data(){
          return {
              users:[],
              selectRow:'',
              headers: ['S.No','Name','Email','Contact'],
        
          }
      },
      methods:{
          clickHandler(value){
              this.selectRow=value.name;
          }
      },
      created(){
         this.users = JSON.parse(localStorage.getItem('users'))
      }
  }
</script>
<style scoped>
.table-container {
    width: 80%;
    margin: auto;
}
th{
    text-align: left;
    
}
tr:nth-child(even){
    background: lightseagreen;
}
</style>