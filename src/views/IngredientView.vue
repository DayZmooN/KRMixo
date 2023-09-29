<template>
  <Header />
  <div>
    <Ingredient :ingredients="ingredients" />
  </div>
  <Card />
  <Search />
  <Footer />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

import Search from "@/components/search/SearchView.vue";
import Ingredient from "@/components/ingredient/Ingredient.vue";
import Card from "@/components/card/Card.vue";
import { getIngredient } from "@/services/ApiCocktailDb.js";

export default {
  name: "IngredientView",
  components: {
    Search,
    Card,
    Ingredient,
    Header,
    Footer,
  },
  data() {
    return {
      ingredient: [],
      selectedCocktails: [],
    };
  },
  mounted() {
    this.getIngredient();
  },

  methods: {
    async getIngredient() {
      try {
        const response = await getIngredient();
        if (response.ok) {
          const data = await response.json();
          this.ingredient = data.drinks;
        } else {
          console.error(
            "Erreur lors de la récupération des catégories:",
            response.status
          );
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories:",
          error
        );
      }
    },
  },
};
</script>
<style scoped lang="scss">
.category {
  width: 100%;

  .category_container {
    background: blue;
  }

  .card-category {
    display: flex;
    gap: 16px;
    padding: 16px;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
  }
}
</style>
