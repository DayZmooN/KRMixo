<template>
  <div>
    <Header />
    <Search @search="performSearch" />
    <div class="ingredient">
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
    <div class="pagination">
      <button @click="currentPage--" :disabled="currentPage <= 1">
        Précédent
      </button>
      <span>Page {{ currentPage }} sur {{ maxPage }}</span>
      <button @click="currentPage++" :disabled="currentPage >= maxPage">
        Suivant
      </button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import IngredientAll from "@/components/ingredient/Ingredient.vue";
import Search from "@/components/search/SearchView.vue";
import Card from "@/components/card/Card.vue";
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
    Footer,
  },
  data() {
    return {
      ingredients: [],
      selectedCocktails: [],
      currentPage: 1,
      itemsPerPage: 10,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
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
  },
};
</script>

<style scoped lang="scss">
.ingredient {
  width: 100%;
  display: flex;
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
