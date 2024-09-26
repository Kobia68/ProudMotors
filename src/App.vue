<template>
  <div class="bg-gray-300 h-screen">
    <div class="w-4/5 mx-auto">
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
