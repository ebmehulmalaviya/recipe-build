<template>
  <div>
    <h2>Welcome Edit Recipe</h2>
    <div class="Recipe-build-form">
      <form>
        <label for="">Recipe Name</label><br />
        <input
          type="text"
          class="input-cont"
          v-model="recipe.recipename"
          name=""
          id=""
        />
        <br />
        <label for="">Time TO Cook</label><br />
        <input
          type="text"
          class="input-cont"
          v-model="recipe.timetocook"
          name=""
          id=""
        />
        <br />
        <label for="">Total Serve</label><br />
        <input
          type="text"
          class="input-cont"
          v-model="recipe.TotalServe"
          name=""
          id=""
        />
        <br />
        <label for="">ingredeients</label><br />
        <input
          type="text"
          class="input-cont"
          v-model="recipe.ingredeients"
          name=""
          id=""
        />
        <br />
        <label for="">Methods</label><br />
        <input
          type="textarea"
          class="input-cont"
          v-model="recipe.Methods"
          name=""
          id=""
        />
        <br />
        <label for="">Stutus</label><br />
        <input
          type="text"
          name=""
          class="input-cont"
          v-model="recipe.Stutus"
          id=""
        />
        <br />
        <label for=""> Unit-Ml / gram / spoon / tspoon / pices </label><br />
        <input
          type="text"
          class="input-cont"
          v-model="recipe.unit"
          name=""
          id=""
        />
        <br />
        <label for="">water Ml</label><br />
        <input
          type="text"
          class="input-cont"
          v-model="recipe.water"
          name=""
          id=""
        />
        <br />
        <label for="">Carrot Pices</label><br />
        <input
          type="text"
          class="input-cont"
          v-model="recipe.pices"
          name=""
          id=""
        />
        <br />
        <button class="recipe-btn" @click.prevent="Updaterecipe">Submit</button>
        <button type="reset" class="recipe-clear">Clear</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EbData",
  data() {
    return {
      recipe: {
        recipename: null,
        timetocook: null,
        TotalServe: null,
        ingredeients: null,
        Methods: null,
        Stutus: null,
        unit: null,
        water: null,
        pices: null,
      },
    };
  },
  async mounted() {
    const result = await axios.get(
      "http://localhost:3000/addrecepidb/" + this.$route.params.id
    );
    console.log(result.data);
    this.recipe = result.data;
  },
  methods: {
    Updaterecipe() {
      console.log("hello", this.recipe);
      axios
        .put("http://localhost:3000/addrecepidb/" + this.$route.params.id)
        .then((res) => {
          console.log("recipe result", res);
          this.$router.push({
            path: "/",
          });
        });
    },
    // getrecipe() {
    //   console.log("Recipe is", this.recipe);
    //   axios
    //     .post("http://localhost:3000/addrecepidb", this.recipe)
    //     .then((res) => {
    //       console.log("recipe result", res);
    //       this.$router.push({
    //         path: "/",
    //       });
    //     });
    // },
  },
};
</script>

<style scoped>
* {
  text-align: center;
  font-weight: 400;
}

.Recipe-build-form {
  width: 400px;
  margin: 0% auto;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  padding: 15px 0px;
}

.input-cont {
  width: 350px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.recipe-btn {
  border: none;
  outline: none;
  background: green;
  color: rgb(252, 252, 252);
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 8px;
}

.recipe-clear {
  border: none;
  outline: none;
  background: rgb(209, 50, 44);
  color: rgb(252, 252, 252);
  padding: 10px 20px;
  border-radius: 8px;
  margin: 0% 4%;
}
</style>
