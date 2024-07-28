<script setup>
import Header from "./components/Header.vue"
import Home from "./pages/HomeView.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped></style>
