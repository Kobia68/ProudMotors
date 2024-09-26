<!-- src/views/Contact.vue -->
<template>
    <div class="w-1/2 mx-auto p-6">
      <h2 class="text-3xl font-bold text-primary mb-4">Contact Us</h2>
      <p class="text-lg text-gray-700 mb-6">
        We'd love to hear from you! If you have any questions, feedback, or need assistance, feel free to get in touch with us using the contact details below.
      </p>
      
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h3 class="text-2xl font-semibold mb-4">Get in Touch</h3>
        
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="name">Your Name</label>
          <input id="name" type="text" class="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your name">
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="email">Your Email</label>
          <input id="email" type="email" class="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email">
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="message">Message</label>
          <textarea id="message" class="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" rows="5" placeholder="Enter your message"></textarea>
        </div>
  
        <button class="bg-primary text-white px-4 py-2 rounded-md">Send Message</button>
      </div>
  
      <div class="mt-8">
        <h3 class="text-2xl font-semibold mb-4">Other Ways to Contact Us</h3>
        <p class="text-lg text-gray-700 mb-2">
          <strong>Email:</strong> support@carhireco.com
        </p>
        <p class="text-lg text-gray-700 mb-2">
          <strong>Phone:</strong> +1 (800) 123-4567
        </p>
        <p class="text-lg text-gray-700">
          <strong>Address:</strong> 123 Car Hire Street, New York, NY 10001
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
  };
  </script>
  
  <style scoped>
  /* You can add custom styles for the Contact page here */
  </style>
  