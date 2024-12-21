import Home from "@/components/Home/Home.vue";
import Todo from "@/components/Todo/MainTodo.vue";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/todo", component: Todo },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
