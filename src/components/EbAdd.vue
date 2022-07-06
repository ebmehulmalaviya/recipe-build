<template>
  <div>
    <div class="main-from">
      <h2>Welcome Add Recipe</h2>

      <div class="Recipe-build-form">
        <form>
          <div class="flex">
            <div class="from-class">
              <label for="">Recipe Name</label><br />
              <input
                type="text"
                class="input-cont-md"
                placeholder="Recipe Name"
                v-model="recipe.recipename"
                name=""
                id=""
              />
              <br />
            </div>
            <div class="from-class">
              <label for="">Time TO Cook</label><br />
              <input
                type="text"
                class="input-cont-md"
                placeholder="Time TO Cook"
                v-model="recipe.timetocook"
                name=""
                id=""
              />
              <br />
            </div>
          </div>
          <div class="flex">
            <div class="from-class">
              <label for="">Total Serve</label><br />
              <input
                type="text"
                class="input-cont-md"
                placeholder="Total Serve"
                v-model="recipe.TotalServe"
                name=""
                id=""
              />
              <br />
            </div>
            <div class="from-class">
              <label for="">Ingredeients</label><br />
              <input
                type="text"
                class="input-cont-md"
                placeholder="Ingredeients"
                v-model="recipe.ingredeients"
                name=""
                id=""
              />
              <br />
            </div>
          </div>
          <div class="from-class-method">
            <div>
              <label for="">Methods</label><br />

              <textarea
                class="input-cont"
                placeholder="Methods"
                v-model="recipe.Methods"
              ></textarea>
              <br />
            </div>
          </div>
          <div class="from-class-method">
            <div>
              <label for="">Chef Name</label><br />
              <input
                type="text"
                class="input-cont"
                placeholder="Chef Name"
                v-model="recipe.Chef"
                name=""
                id=""
              />
              <br />
            </div>
          </div>

          <div class="flex">
            <div class="from-class">
              <label for="">Stutus</label><br />
              <div
                class="input-cont-md"
                style="box-shadow: none; padding: 8px 0px"
              >
                <label for="p"> Publice </label>
                <input
                  type="radio"
                  value="Publice"
                  v-model="recipe.Stutus"
                  name="Stutus"
                  id="p"
                />
                &nbsp;&nbsp;
                <label for="u"> Unpublice </label>
                <input
                  type="radio"
                  value="Un-Publice"
                  v-model="recipe.Stutus"
                  name="Stutus"
                  id="u"
                />
                <br />
              </div>
            </div>
            <div class="from-class">
              <div style="font-size: 15px">
                <label for="Gram">Gram </label
                ><input
                  type="radio"
                  name="G"
                  value="Gram"
                  v-model="recipe.unit"
                  id="Gram"
                />
                &nbsp; <label for="spoon">Spoon </label
                ><input
                  type="radio"
                  name="G"
                  value="spoon"
                  v-model="recipe.unit"
                  id="spoon"
                />&nbsp; <label for="tspoon">Tspoon </label
                ><input
                  type="radio"
                  name="G"
                  value="tspoon"
                  v-model="recipe.unit"
                  id="tspoon"
                />&nbsp; <label for="pices">pices </label
                ><input
                  type="radio"
                  name="G"
                  value="pices  "
                  v-model="recipe.unit"
                  id="pices"
                />&nbsp;
                <br />
              </div>
              <input
                type="text"
                class="input-cont-md"
                placeholder="Enter Unit "
                v-model="recipe.unit"
                name=""
                id=""
              />

              <br />
            </div>
          </div>
          <div class="flex">
            <div class="from-class">
              <label for="">water Ml</label><br />
              <input
                type="text"
                class="input-cont-md"
                placeholder="water Ml"
                v-model="recipe.water"
                name=""
                id=""
              />
              <br />
            </div>
            <div class="from-class">
              <label for="">Carrot Pices</label><br />
              <input
                type="text"
                class="input-cont-md"
                placeholder="Pices"
                v-model="recipe.pices"
                name=""
                id=""
              />
              <br />
            </div>
          </div>
          <div class="from-btn">
            <button class="recipe-btn" @click.prevent="getrecipe">
              Submit
            </button>
            <button type="reset" class="recipe-clear">Clear</button>
          </div>
        </form>
      </div>
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
        Chef: null,
        Stutus: null,
        unit: null,
        water: null,
        pices: null,
      },
    };
  },
  methods: {
    getrecipe() {
      // console.log("Recipe is", this.recipe);
      axios
        .post("http://localhost:3000/addrecepidb", this.recipe)
        .then((res) => {
          console.log("recipe result", res);
          this.$router.push({
            path: "/",
          });
        });
    },
  },
};
</script>

<style scoped>
* {
  font-weight: 400;
  font-family: cursive;
}

.main-from {
  width: 650px;
  margin: 0% auto;
}

.main-from h2 {
  text-align: center;
}

.Recipe-build-form {
  width: 650px;
  margin: 2% auto;
  border: 1px solid #000;
  color: #fff;
  background: rgb(32, 175, 144);
  border-radius: 5px;
  padding: 15px 0px;
}

.flex {
  display: flex;
}

.from-class {
  margin: 0% auto;
}

label {
  margin-bottom: 8px;
}

.input-cont-md {
  width: 250px;
  padding: 8px 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 3px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 3px rgb(128, 123, 123);
}

.input-cont {
  width: 575px;
  margin: 0% auto;
  padding: 8px 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 3px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 3px rgb(128, 123, 123);
}

.from-class-method {
  display: flex;
  justify-content: center;
}

.recipe-btn {
  border: none;
  outline: none;
  background: rgb(215, 241, 215);
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 4px;
}

.recipe-clear {
  border: none;
  outline: none;
  background: rgb(209, 50, 44);
  color: rgb(252, 252, 252);
  padding: 10px 20px;
  border-radius: 4px;
  margin: 0% 4%;
}

.from-btn {
  width: 590px;
  margin: 0% auto;
}
</style>
