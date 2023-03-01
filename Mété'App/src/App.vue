<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <div class="page">
      <NavBar />
      <div class="view">
        <RouterView></RouterView>
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.page{
  margin-bottom: 100px;
}
</style>
