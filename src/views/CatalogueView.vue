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
  searchCocktail,
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
    this.getCategory();
    this.getCocktailsByCategory("Ordinary Drink");
    const categoryName = this.$route.params.categoryName;
    if (categoryName) {
      this.getCocktailsByCategory(categoryName);
    }
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
      console.log("Catégorie sélectionnée:", category); // Ajout d'un log pour le débogage
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
        // Créez un tableau de promesses pour les différentes requêtes
        const searchPromises = [
          getSeachCategory(searchCategory),
          searchCocktail(searchCategory),
        ];

        // Exécutez les requêtes en parallèle
        const responses = await Promise.all(searchPromises);

        // Rassemblez les résultats de toutes les requêtes dans un tableau unique
        const results = await Promise.all(
          responses.map(async (response) => {
            if (response.ok) {
              const text = await response.text();
              if (!text) {
                return [];
              }
              const data = JSON.parse(text);
              return data.drinks || [];
            } else {
              console.error(
                "Erreur lors de la recherche des cocktails:",
                response.status
              );
              return [];
            }
          })
        );

        // Concaténez tous les résultats en un seul tableau
        const allCocktails = results.reduce(
          (acc, curr) => acc.concat(curr),
          []
        );

        this.selectedCocktails = allCocktails;
      } catch (error) {
        console.error("Erreur lors de la recherche des cocktails:", error);
      }
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
.category {
  width: 100%;
  margin: auto;

  @media screen and (min-width: 1220px) {
    max-width: 1220px;
  }

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
