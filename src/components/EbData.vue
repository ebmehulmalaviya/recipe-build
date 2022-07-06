<template>
  <div class="main">
    <h1>Recipe</h1>
    <h5>Total : -{{ tot }}</h5>
    <table class="recipe-table" border="1" cellspacing="0">
      <tr>
        <td>sr.no</td>
        <td>Recipename</td>
        <td>Time To cook</td>
        <td>Total serve</td>
        <td>ingredients</td>
        <td>methods</td>
        <td>stutus</td>
        <td>Unit</td>
        <td>water</td>
        <td>pices</td>
        <td>Action</td>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.recipename }}</td>
        <td>{{ item.timetocook }}</td>
        <td>{{ item.TotalServe }}</td>
        <td>{{ item.ingredeients }}</td>
        <td>{{ item.Methods }}</td>
        <td>{{ item.Stutus }}</td>
        <td>{{ item.unit }}</td>
        <td>{{ item.water }}</td>
        <td>{{ item.pices }}</td>
        <td>
          <button>
            <router-link :to="'/EbEdit/' + item.id">Edit</router-link></button
          ><button @click="removerecipe(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EbAdd",
  data() {
    return {
      list: undefined,
      addrecipe: {},
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    getuser() {
      axios.get("http://localhost:3000/addrecepidb").then((resp) => {
        this.list = resp.data;
        // let tot = (this.list = this.resp.data.length);
        // return tot;
      });
    },
    removerecipe(id) {
      axios.delete(`http://localhost:3000/addrecepidb/${id}`).then(
        (response) => {
          this.getuser();
          return response;
          // console.log("gettttt", response);
          //alert('response = ' + response)
        },
        (error) => {
          console.log(error);
          //alert('error = ' + error)
        }
      );
    },
  },
};
</script>

<style>
.main {
  width: 1100px;
  margin: 0% auto;
  text-align: center;
}
.recipe-table tr td {
  padding: 8px 10px;
  margin-top: 15px;
}
</style>
