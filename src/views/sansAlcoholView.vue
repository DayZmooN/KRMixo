<template>
  <Header />
  <Search @search="performSearch" />
  <article class="noAcohol_container">
    <Card
      v-for="cocktail in paginatedCocktails"
      :key="cocktail.idDrink"
      :title="cocktail.strDrink"
      :poster_path="cocktail.strDrinkThumb"
      :idDrink="cocktail.idDrink"
    />
  </article>

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
// Décommentez la ligne suivante si vous réintégrez le composant de recherche
import Search from "@/components/search/FilterSearch.vue";
import Card from "@/components/card/Card.vue";
import PaginationComponent from "@/components/pagination/PaginationComponent.vue";
import { allCocktailNoAlcool } from "@/services/ApiCocktailDb.js";

export default {
  name: "noAlcohol",
  components: {
    // Décommentez la ligne suivante si vous réintégrez le composant de recherche
    Search,
    Card,
    Header,
    PaginationComponent,
    Footer,
  },
  data() {
    return {
      cocktails: {},
      paginatedCocktails: [],
      currentPage: 1,
      itemsPerPage: 15, // Nombre d'éléments par page
      maxPage: 0, // Calculé en fonction du nombre total de cocktails
      cache: {},
    };
  },
  mounted() {
    this.allCocktailNoAlcool();
  },
  methods: {
    async allCocktailNoAlcool() {
      try {
        const response = await allCocktailNoAlcool();
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          this.cocktails = data.drinks;
          this.maxPage = Math.ceil(this.cocktails.length / this.itemsPerPage);
          this.updatePage(this.currentPage);
        } else {
          console.log("Aucun cocktail trouvé.");
        }
      } catch (erreur) {
        console.error("Une erreur s'est produite :", erreur);
      }
    },
    updatePage(newPage) {
      let cocktailsToPaginate = this.cocktails;

      // Appliquer le filtre si searchTerm n'est pas vide
      if (this.searchTerm) {
        cocktailsToPaginate = this.cocktails.filter((cocktail) =>
          cocktail.strDrink
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
      }

      const start = (newPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      this.paginatedCocktails = cocktailsToPaginate.slice(start, end);
      this.currentPage = newPage;
    },

    performSearch(term) {
      this.searchTerm = term;
      let cocktailsToPaginate = this.cocktails;

      if (this.searchTerm) {
        cocktailsToPaginate = this.cocktails.filter((cocktail) =>
          cocktail.strDrink
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
      }

      this.maxPage = Math.ceil(cocktailsToPaginate.length / this.itemsPerPage);
      this.updatePage(1); // Réinitialisez la pagination à la première page
    },
  },
};
</script>

<style scoped lang="scss">
.noAcohol_container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  gap: 16px;
  padding: 16px;
}
</style>
