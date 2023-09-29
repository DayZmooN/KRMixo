<template>
  <Header />

  <div class="category">
    <Category
      :categories="categories"
      @categorySelected="getCocktailsByCategory"
    />
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
  <Search />
  <Footer />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import Category from "@/components/category/Category.vue";
import Search from "@/components/search/SearchView.vue";
import {
  getCategory,
  getCocktailsByCategory,
} from "@/services/ApiCocktailDb.js";
import Card from "@/components/card/Card.vue";

export default {
  name: "CategoryView",
  components: {
    Category,
    Search,
    Card,
    Header,
    Footer,
  },
  data() {
    return {
      categories: [],
      selectedCocktails: [],
    };
  },
  mounted() {
    this.getCategory();
    this.getCocktailsByCategory("Ordinary Drink");
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
    async getCocktailsByCategory(category) {
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
    handleClick(category) {
      this.$emit("categorySelected", category);
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
