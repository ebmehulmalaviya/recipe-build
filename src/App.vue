<template>
  <div id="app">
    <header>
      <div class="navbar">
        <ul>
          <li><router-link to="/"> Home</router-link> <br /></li>
          <li>
            <router-link to="/add-recipe"> Add Recipe</router-link>
          </li>
        </ul>
      </div>
      <router-view> </router-view>
      <!-- <EbData />
      <EbAdd /> -->
    </header>
  </div>
</template>

<script>
// import EbData from "./components/EbData.vue";
// import EbAdd from "./components/EbAdd.vue";
export default {
  name: "App",
  // components: {
  //   EbData,
  //   EbAdd,
  // },
};
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  text-decoration: none;
}
.navbar {
  background: powderblue;
}
.navbar ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.navbar ul li {
  padding: 12px 0px;
  cursor: pointer;
}
.navbar ul li a {
  padding: 12px 15px;
  color: #000;
  cursor: pointer;
}
.navbar ul li:hover {
  background: gray;
  transition: 0.3s;
  color: #fff;
}
a.router-link-exact-active {
  color: #fdfbfb;
  background: gray;
}
</style>
