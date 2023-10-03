<template>
  <Header />
  <Search @search="performSearch" />
  <div class="category">
    <Category
      :categories="categories"
      @categorySelected="getCocktailsByCategory"
    />
    <div class="card-category" v-if="paginatedCocktails.length > 0">
      <Card
        v-for="(cocktail, index) in paginatedCocktails"
        :key="cocktail.idDrink || `defaultKey-${index}`"
        :title="cocktail.strDrink"
        :poster_path="cocktail.strDrinkThumb"
        :idDrink="cocktail.idDrink"
      />
    </div>
  </div>

  <PaginationComponent
    :currentPage="currentPage"
    :maxPage="maxPage"
    @updatePage="updatePage"
  />
  <Footer />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import Category from "@/components/category/Category.vue";
import Search from "@/components/search/SearchView.vue";
import PaginationComponent from "@/components/pagination/PaginationComponent.vue";
import {
  getCategory,
  getCocktailsByCategory,
  getSeachCategory,
} from "@/services/ApiCocktailDb.js";
import Card from "@/components/card/Card.vue";

export default {
  name: "CategoryView",
  components: {
    Category,
    Search,
    Card,
    Header,
    PaginationComponent,
    Footer,
  },
  data() {
    return {
      categories: [],
      selectedCocktails: [],
      currentPage: 1,
      itemsPerPage: 12,
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
    updatePage(page) {
      this.currentPage = page;
    },
    async performSearch(searchCategory) {
      try {
        const response = await getSeachCategory(searchCategory);
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
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
