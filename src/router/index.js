import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Detail from "../views/DetailCocktailView.vue";
import CatalogueView from "../views/CatalogueView.vue";
import IngredientView from "../views/IngredientView.vue";
// import ComponentDescription from "../components/cocktailDescription/CocktailDescription.vue";
import sansAlcoholView from "../views/sansAlcoholView.vue";

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
    path: "/catalogue",
    name: "category",
    component: CatalogueView,
  },
  {
    path: "/noAlcohol",
    name: "noAlcohol",
    component: sansAlcoholView,
  },
  {
    path: "/ingredient",
    name: "ingredient",
    component: IngredientView,
  },
  {
    path: "/catalogue/:categoryName",
    name: "CategoryName",
    component: CatalogueView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
