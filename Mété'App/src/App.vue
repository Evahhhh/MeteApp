<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <NavBar />
    <div class="view">
      <RouterView></RouterView>
    </div>
    <Footer />
  </main>
</template>
