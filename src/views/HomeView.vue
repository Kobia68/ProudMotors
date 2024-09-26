<!-- src/views/Home.vue -->
<template>
  <div class="container mx-auto p-6">
    <h2 class="text-2xl font-semibold mb-6">Available Cars for Hire</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="car in cars" :key="car.id" class="bg-white shadow-lg rounded-lg p-4">
        <img :src="car.image" alt="car" class="w-full h-48 object-cover rounded-md mb-4">
        <h3 class="text-xl font-bold">{{ car.name }}</h3>
        <p class="text-gray-700">{{ car.description }}</p>
        <p class="text-primary font-semibold mt-2">$ {{ car.price }} / day</p>
        <router-link :to="'/cars/' + car.id" class="mt-4 inline-block text-white bg-primary px-4 py-2 rounded-md">View Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      cars: [
        { id: 1, name: 'Tesla Model S', description: 'Electric luxury sedan', price: 150, image: 'tesla.jpg' },
        { id: 2, name: 'BMW X5', description: 'Luxury SUV', price: 200, image: 'bmw.jpg' },
        { id: 3, name: 'Ford Mustang', description: 'Classic American muscle', price: 180, image: 'mustang.jpg' },
        { id: 3, name: 'Ford Mustang', description: 'Classic American muscle', price: 180, image: 'mustang.jpg' },
        { id: 3, name: 'Ford Mustang', description: 'Classic American muscle', price: 180, image: 'mustang.jpg' },
        { id: 3, name: 'Ford Mustang', description: 'Classic American muscle', price: 180, image: 'mustang.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
/* Any specific styles for the home page */
</style>
