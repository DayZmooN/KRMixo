<template>
  <div class="category">
    <div class="container-category">
      <Category
        :categories="categories"
        @categorySelected="fetchCocktailsByCategory"
      />
    </div>
    <div class="card-category" v-if="selectedCocktails.length > 0">
      <Card
        v-for="cocktail in selectedCocktails"
        :key="cocktail.idDrink"
        :title="cocktail.strDrink"
        :poster_path="cocktail.strDrinkThumb"
        :idDrink="cocktail.idDrink"
      />
    </div>
  </div>
</template>

<script>
import Category from "@/components/category/Category.vue";
import {
  getCategory,
  getCocktailsByCategory,
} from "@/services/ApiCocktailDb.js";
import Card from "@/components/card/Card.vue";

export default {
  name: "CategoryView",
  components: {
    Category,
    Card,
  },
  data() {
    return {
      categories: [],
      selectedCocktails: [],
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      try {
        const response = await getCategory();
        if (response.ok) {
          const data = await response.json();
          this.categories = data.drinks;
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
    async fetchCocktailsByCategory(category) {
      try {
        const response = await getCocktailsByCategory(category);
        if (response.ok) {
          const data = await response.json();
          this.selectedCocktails = data.drinks;
        } else {
          console.error(
            "Erreur lors de la récupération des cocktails:",
            response.status
          );
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des cocktails:",
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
    flex-wrap: wrap;
    margin: auto;
  }
}
</style>
