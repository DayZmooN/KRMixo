<template>
  <div class="home">
    <Header />
    <SearchBar @search="performSearch" />
    <section class="home_card">
      <h3>Mélanges récents</h3>

      <!-- Utilisation du carrousel -->
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        class="custom-carousel"
      >
        <Slide v-for="cocktail in cocktails" :key="cocktail.idDrink">
          <Card
            :title="cocktail.strDrink"
            :poster_path="cocktail.strDrinkThumb"
            :idDrink="cocktail.idDrink"
          />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <h3>Boissons aléatoires</h3>
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        class="custom-carousel"
      >
        <Slide
          v-for="randomCocktail in randomCocktails"
          :key="randomCocktail.idDrink"
        >
          <Card
            :title="randomCocktail.strDrink"
            :poster_path="randomCocktail.strDrinkThumb"
            :idDrink="randomCocktail.idDrink"
          />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
    <Footer />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import SearchBar from "@/components/search/SearchView.vue";

import Card from "@/components/card/Card.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
// import "vue3-carousel/dist/carousel.css";
import {
  allCocktailNoAlcool,
  getRandomNoAlcool,
  searchCocktail,
} from "@/services/ApiCocktailDb.js";
// import { getCategory } from "@/services/ApiCocktailDb.js";

export default defineComponent({
  name: "HomeView",
  components: {
    Header,
    SearchBar,
    Card,
    Footer,
    Carousel,
    Slide,
    Navigation,
  },
  metaInfo() {
    return {
      // Définissez les méta descriptions spécifiques à ce composant
      meta: [
        { name: "description", content: "Description de votre page" },
        // Autres balises meta
      ],
    };
  },
  data() {
    return {
      cocktails: [],
      randomCocktails: [],
      showCategories: false,
      categories: [],
      cache: {},
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
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  computed: {
    visibleCocktails() {
      return this.cocktails.slice(
        this.currentSlide,
        this.currentSlide + this.slidesToShow
      );
    },
  },
  mounted() {
    this.allCocktailNoAlcool();
    this.getRandomNoAlcool("Cocktail");
  },
  methods: {
    async allCocktailNoAlcool() {
      if (this.cache.allCocktailNoAlcool) {
        this.cocktails = this.cache.allCocktailNoAlcool;
      } else {
        try {
          const response = await allCocktailNoAlcool();
          const data = await response.json();
          if (data.drinks && data.drinks.length > 0) {
            this.cocktails = data.drinks.slice(0, 10);
            this.cache.allCocktailNoAlcool = this.cocktails;
          } else {
            console.log("Aucun cocktail trouvé.");
          }
        } catch (erreur) {
          console.error("Une erreur s'est produite :", erreur);
        }
      }
    },
    async getRandomNoAlcool() {
      if (this.cache.getRandomNoAlcool) {
        this.randomCocktails = this.cache.getRandomNoAlcool;
      } else {
        try {
          this.randomCocktails = [];
          for (let i = 0; i < 15; i++) {
            const response = await getRandomNoAlcool();
            const data = await response.json();
            if (data.drinks && data.drinks.length > 0) {
              this.randomCocktails.push(...data.drinks);
            } else {
              console.log("Aucun cocktail aléatoire sans alcool trouvé.");
            }
          }
          this.cache.getRandomNoAlcool = this.randomCocktails;
        } catch (erreur) {
          console.error("Une erreur s'est produite :", erreur);
        }
      }
    },
    async performSearch(query) {
      const response = await searchCocktail(query);
      const data = await response.json();
      this.cocktails = data.drinks || [];
    },
    nextSlide() {
      if (this.currentSlide < this.cocktails.length - this.slidesToShow) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.home_card {
  width: 100%;
  margin: auto;
  margin-bottom: 90px;

  @media screen and (min-width: 780px) {
    max-width: 85%;
  }

  h3 {
    text-align: left;
    margin: 25px auto;
    text-align: center;

    @media screen and (min-width: 780px) {
      text-align: left;
    }
  }

  .carousel__track {
    width: 100%;
    transform: inherit !important;
  }
  a {
    width: auto;
    margin: 0;
    padding: 0;
  }
  .carousel__viewport {
    overflow: auto;
    max-width: 89%;
  }

  .custom-carousel {
    width: 100%;
    display: flex;
    align-items: center;
    transform: initial;
    gap: 60px;
  }
}
</style>
