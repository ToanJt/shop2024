<script setup>
import Header from "./components/Header.vue"
import Home from "./pages/HomeView.vue"
import Footer from "./components/Footer.vue"
import SignUp from "./components/SignUp.vue";

const emits = defineEmits(['showAuth'])

function test() {
  console.log(emits('showAuth'))
}

</script>

<template>
  <header>
    <Header></Header>
  </header>
  <main class="md:mt-52 mt-40">
    <router-view></router-view>
  </main>
  <!-- <footer>
    <Footer></Footer>
  </footer> -->

</template>

<style scoped>
.display-none {
  display: none;
}

.test {
  background: rgba(0, 0, 0, 0.822);
}

.router-link-active {
  color: rgb(235, 44, 44);
}
</style>
