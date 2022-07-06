<template>
  <div class="main">
    <h1>Recipe</h1>
    <h5>Total : -</h5>
    <table>
      <tr class="table-row">
        <th>sr.no</th>
        <th>Recipename</th>
        <th>Time To cook</th>
        <th>Total serve</th>
        <th>ingredients</th>
        <th>methods</th>
        <th>Chef Name</th>
        <th>stutus</th>
        <th>Unit</th>
        <th>water</th>
        <th>pices</th>
        <th>Action</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.recipename }}</td>
        <td>{{ item.timetocook }} hour</td>
        <td>{{ item.TotalServe }} Person</td>
        <td>{{ item.ingredeients }}</td>
        <td>{{ item.Methods }}</td>
        <td>{{ item.Chef }}</td>
        <td>{{ item.Stutus }}</td>
        <td>{{ item.unit }}</td>
        <td>{{ item.water }} ML</td>
        <td>{{ item.pices }}</td>
        <td>
          <button>
            <router-link :to="'/EbEdit/' + item.id">
              <img
                style="width: 25px; border: none"
                src="../assets/pencil.png"
              />
            </router-link></button
          ><button @click="removerecipe(item.id)">
            <img style="width: 25px; border: none" src="../assets/delete.png" />
          </button>
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
      Total: 0,
    };
  },
  mounted() {
    this.getuser();
  },
  methods: {
    getuser() {
      axios.get("http://localhost:3000/addrecepidb").then((resp) => {
        this.list = resp.data;
      });
    },
    removerecipe(id) {
      axios.delete(`http://localhost:3000/addrecepidb/${id}`).then(
        (response) => {
          this.getuser();
          return response;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style>
* {
  font-family: cursive;
}

table {
  border: none;
}

table tr td {
  padding: 3px 5px;
}

.main {
  width: 1250px;
  margin: 0% auto;
  text-align: center;
}

.recipe-table tr td {
  padding: 8px 10px;
  margin-top: 15px;
}

.table-row th {
  color: #fff;
  font-weight: 400;
  padding: 10px 5px;
  background: rgb(32, 175, 144);
}

table td {
  color: rgb(110, 94, 94);
  background: rgb(233, 236, 236);
}
</style>
