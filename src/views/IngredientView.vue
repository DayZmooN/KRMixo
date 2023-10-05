<template>
  <div>
    <Header />
    <Search @search="performSearch" />
    <div class="ingredient" id="scroll-container" style="overflow: auto">
      <IngredientAll
        :ingredients="ingredients"
        @ingredientSelected="getCocktailsByIngredient"
      />
    </div>
    <div class="card-ingredient" v-if="paginatedCocktails.length > 0">
      <Card
        v-for="cocktail in paginatedCocktails"
        :key="cocktail.idDrink"
        :title="cocktail.strDrink"
        :poster_path="cocktail.strDrinkThumb"
        :idDrink="cocktail.idDrink"
      />
    </div>
    <PaginationComponent
      :currentPage="currentPage"
      :maxPage="maxPage"
      @updatePage="updatePage"
    />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import IngredientAll from "@/components/ingredient/Ingredient.vue";
import Search from "@/components/search/SearchView.vue";
import Card from "@/components/card/Card.vue";
import PaginationComponent from "@/components/pagination/PaginationComponent.vue";

import {
  getIngredient,
  getCocktailsByIngredient,
  searchIngredient,
} from "@/services/ApiCocktailDb.js";

export default {
  name: "IngredientView",
  components: {
    Header,
    Search,
    IngredientAll,
    Card,
    PaginationComponent,
    Footer,
  },
  data() {
    return {
      ingredients: [],
      selectedCocktails: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    paginatedCocktails() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.selectedCocktails.slice(start, end);
    },
    maxPage() {
      return Math.ceil(this.selectedCocktails.length / this.itemsPerPage);
    },
  },
  mounted() {
    this.getIngredient();
    this.getCocktailsByIngredient("Tea");
    // this.setupRightClickScroll();
  },
  methods: {
    async getIngredient() {
      try {
        const response = await getIngredient();
        if (response && response.ok) {
          const data = await response.json();
          this.ingredients = data.drinks;
        } else {
          console.error(
            "Erreur lors de la récupération des ingrédients:",
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
    async getCocktailsByIngredient(ingredient) {
      try {
        const response = await getCocktailsByIngredient(ingredient);
        if (response && response.ok) {
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
    async performSearch(ingredientWord) {
      try {
        const response = await searchIngredient(ingredientWord);
        if (response && response.ok) {
          const text = await response.text();
          if (!text) {
            console.warn("Réponse vide de l'API");
            this.selectedCocktails = [];
            return;
          }
          const data = JSON.parse(text);
          this.selectedCocktails = data.drinks || [];
        } else {
          console.error(
            "Erreur lors de la recherche des cocktails:",
            response.status
          );
        }
      } catch (error) {
        console.error("Erreur lors de la recherche des cocktails:", error);
      }
    },
    updatePage(page) {
      this.currentPage = page;
    },
    watch: {
      "$route.params.categoryName": {
        immediate: true,
        handler(newVal) {
          this.getCocktailsByCategory(newVal);
        },
      },
    },
    beforeRouteUpdate(to, from, next) {
      const newCategory = to.params.categoryName;
      if (newCategory) {
        this.getCocktailsByCategory(newCategory);
      }
      next();
    },
  },
};
</script>

<style scoped lang="scss">
.ingredient {
  width: 100%;
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: orange;
  border-radius: 99px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#scroll-container {
  cursor: grab;
}
#scroll-container:active {
  cursor: grabbing;
}
.card-ingredient {
  display: flex;
  gap: 16px;
  padding: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px auto;
}
</style>
