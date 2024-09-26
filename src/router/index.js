import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarDetails from "@/views/CarDetails.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/cars/:id", component: CarDetails },
  { path: "/about", component: AboutUs },
  { path: "/contact", component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
