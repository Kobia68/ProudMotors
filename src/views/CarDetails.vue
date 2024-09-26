<!-- src/views/CarDetails.vue -->
<template>
    <div class="container mx-auto p-6">
      <div class="bg-white shadow-lg rounded-lg p-6">
        <img :src="car.image" alt="car" class="w-full h-64 object-cover rounded-md mb-6">
        <h2 class="text-2xl font-bold mb-2">{{ car.name }}</h2>
        <p class="text-gray-700">{{ car.description }}</p>
        <p class="text-primary font-semibold mt-4">$ {{ car.price }} / day</p>
        <router-link to="/" class="mt-6 inline-block text-white bg-primary px-4 py-2 rounded-md">Back to Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CarDetails",
    data() {
      return {
        car: {
          name: 'Tesla Model S',
          description: 'Electric luxury sedan',
          price: 150,
          image: 'tesla.jpg',
        },
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  