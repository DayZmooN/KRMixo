import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Detail from "../views/DetailCocktailView.vue";
import CategoryView from "../views/CategoryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/detail/:idDrink",
    name: "DetailView",
    component: Detail,
    props: true, // This will automatically convert params to props
  },
  {
    path: "/category", // Nouvelle route pour les catégories
    name: "category",
    component: CategoryView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
