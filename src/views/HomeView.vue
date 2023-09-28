<template>
  <div class="home">
    <Header />
    <SearchBar @search="performSearch" />
    <Category :categories="categories" />
    <section class="home_card">
      <h3>Mélanges récents</h3>

      <!-- Utilisation du carrousel -->
      <Carousel v-bind="settings" :breakpoints="breakpoints">
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

      <div class="randomCocktail">
        <h1>Cocktails aléatoires sans alcool</h1>
        <div class="container-cocktail">
          <Card
            v-for="randomCocktail in randomCocktails"
            :key="randomCocktail.idDrink"
            :title="randomCocktail.strDrink"
            :poster_path="randomCocktail.strDrinkThumb"
            :idDrink="randomCocktail.idDrink"
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import SearchBar from "@/components/search/SearchView.vue";
import Category from "@/components/category/Category.vue";

import Card from "@/components/card/Card.vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
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
    Category,
    Card,
    Footer,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      cocktails: [],
      randomCocktails: [],
      showCategories: false,
      categories: [],
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
    visibleCocktails() {
      return this.cocktails.slice(
        this.currentSlide,
        this.currentSlide + this.slidesToShow
      );
    },
  },
  mounted() {
    this.allCocktailNoAlcool();
    this.getRandomNoAlcool();
    this.getCategory();
  },
  methods: {
    async allCocktailNoAlcool() {
      try {
        const response = await allCocktailNoAlcool();
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          this.cocktails = data.drinks.slice(0, 20);
        } else {
          console.log("Aucun cocktail trouvé.");
        }
      } catch (erreur) {
        console.error("Une erreur s'est produite :", erreur);
      }
    },
    async getRandomNoAlcool() {
      try {
        const response = await getRandomNoAlcool();
        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          this.randomCocktails = data.drinks.slice(0, 20);
        } else {
          console.log("Aucun cocktail aléatoire sans alcool trouvé.");
        }
      } catch (erreur) {
        console.error("Une erreur s'est produite :", erreur);
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
    // async getCategory() {
    //   try {
    //     const response = await getCategory();
    //     if (response.ok) {
    //       const data = await response.json();
    //       this.categories = data.drinks;
    //       this.showCategories = true;
    //     } else {
    //       console.error(
    //         "Erreur lors de la récupération des catégories: ",
    //         response.status
    //       );
    //     }
    //   } catch (error) {
    //     console.error(
    //       "Une erreur s'est produite lors de la récupération des catégories: ",
    //       error
    //     );
    //   }
    // },
  },
});
</script>

<style scoped lang="scss">
.home_card {
  width: 100%;
  max-width: 98%;
  margin: auto;

  h3 {
    text-align: left;
    margin: 20px auto;
  }

  .custom-carousel {
    width: 100%;
    display: flex;
    // height: 300px;
    align-items: center;
    margin: 10px auto;
    padding: 20px;
    gap: 10px;
  }

  .randomCocktail {
    margin: 78px auto;
  }

  // .swiper-slide {
  //   height: 100%;
  //   width: 200px !important;
  //   transition: all 1.3s ease;

  //   &:hover {
  //     width: 300px !important;
  //   }
  // }

  // .swiper-button-next,
  // .swiper-button-prev {
  //   background-color: rgba(0, 0, 0, 0.5);
  //   width: auto;
  //   height: auto;
  //   position: absolute;
  //   top: 50%;
  //   z-index: 10;
  //   cursor: pointer;
  //   border-radius: 99px;
  // }

  // .swiper-button-next {
  //   right: 10px;
  // }

  // .swiper-button-prev {
  //   left: 10px;
  // }
}
</style>
