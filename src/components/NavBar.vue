<template>
    <nav class="flex justify-between pt-4 mx-20">
        <router-link to="/" class="text-2xl">Proud Motors</router-link>
      <div class="flex gap-6 nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-links a.router-link-exact-active {
  color: #42b009;
}
</style>
